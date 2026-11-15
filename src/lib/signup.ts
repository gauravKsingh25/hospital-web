/**
 * The website's side of signup: checks that mirror the server, the JSON calls
 * to the public API, and API errors turned into sentences a person can act on.
 *
 * No imports from the rest of the site, so `node --test` can run it as is.
 * The server checks everything again; these checks only save a round trip.
 */

export type PlanCode = "standard" | "professional";

export type Details = {
  full_name: string;
  email: string;
  phone: string;
  hospital_name: string;
  plan_code: PlanCode;
};

export type ApiFailure = {
  ok: false;
  /** 0 when the API could not be reached at all. */
  status: number;
  code: string;
  message: string;
  /** Seconds to wait, from a 429's `Retry-After`. */
  retryAfter: number | null;
  /** The fields a 422 refused, by name (`email`, `full_name`, …). */
  fields?: string[];
};

export type ApiResult<T> = { ok: true; data: T } | ApiFailure;

/** Server rule: `PASSWORD_MIN_LENGTH`. */
export const PASSWORD_MIN = 12;

export function planFrom(search: string): PlanCode {
  return new URLSearchParams(search).get("plan") === "standard" ? "standard" : "professional";
}

function spaced(value: string): string {
  return value.split(/\s+/).filter(Boolean).join(" ");
}

export function validateDetails(d: Details): Partial<Record<keyof Details, string>> {
  const errors: Partial<Record<keyof Details, string>> = {};
  const name = spaced(d.full_name);
  if (name.length < 2 || name.length > 200) errors.full_name = "Write your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) {
    errors.email = "Write an email address with an @, like name@hospital.in.";
  }
  if (d.phone.trim().length > 20) errors.phone = "Write a mobile number of up to 20 digits.";
  const hospital = spaced(d.hospital_name);
  if (hospital.length < 2 || hospital.length > 200) errors.hospital_name = "Write the hospital's name.";
  return errors;
}

/** The body for `signup/start`: exactly what `validateDetails` checked. */
export function detailsPayload(d: Details): {
  full_name: string;
  email: string;
  phone: string | null;
  hospital_name: string;
  plan_code: PlanCode;
} {
  return {
    full_name: spaced(d.full_name),
    email: d.email.trim(),
    phone: d.phone.trim() || null,
    hospital_name: spaced(d.hospital_name),
    plan_code: d.plan_code,
  };
}

export function validateCode(code: string): string | null {
  return /^\d{6}$/.test(code.trim()) ? null : "Write the 6 digits from the email.";
}

export function validatePassword(password: string, confirm: string): string | null {
  if (password.length < PASSWORD_MIN) return `Use at least ${PASSWORD_MIN} characters.`;
  if (password !== confirm) return "The two passwords do not match.";
  return null;
}

/** POST JSON to `<apiUrl>/api/v1/public<path>`; never throws. */
export async function postJson<T>(
  apiUrl: string,
  path: string,
  body: unknown,
  fetchImpl: typeof fetch = fetch,
): Promise<ApiResult<T>> {
  let response: Response;
  try {
    response = await fetchImpl(`${apiUrl}/api/v1/public${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return { ok: false, status: 0, code: "network", message: "", retryAfter: null };
  }
  let payload: unknown = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }
  if (response.ok) return { ok: true, data: payload as T };

  const error = (
    payload as { error?: { code?: unknown; message?: unknown; details?: { fields?: unknown } } } | null
  )?.error;
  const listed = Array.isArray(error?.details?.fields) ? error.details.fields : [];
  const fields = listed
    .map((f: unknown) => (f as { field?: unknown } | null)?.field)
    .filter((f: unknown): f is string => typeof f === "string");
  const wait = Number(response.headers.get("Retry-After"));
  return {
    ok: false,
    status: response.status,
    code: typeof error?.code === "string" ? error.code : response.status === 429 ? "rate_limited" : "unknown",
    message: typeof error?.message === "string" ? error.message : "",
    retryAfter: Number.isFinite(wait) && wait > 0 ? wait : null,
    fields,
  };
}

export function messageFor(failure: ApiFailure): string {
  if (failure.code === "network") {
    return "We could not reach Nirogya. Check your connection and try again.";
  }
  if (failure.status === 429) {
    const minutes = Math.max(1, Math.ceil((failure.retryAfter ?? 60) / 60));
    return `Too many tries from here. Wait ${minutes} ${minutes === 1 ? "minute" : "minutes"} and try again.`;
  }
  if (failure.code === "validation_error") {
    return failure.fields?.length
      ? "Check the fields marked below."
      : "Some details were not accepted. Check them and try again.";
  }
  if (failure.status >= 500) return "Something went wrong on our side. Try again in a minute.";
  return failure.message || "That did not work. Check the details and try again.";
}

export function handoffUrl(appUrl: string, code: string): string {
  return `${appUrl}/auth/handoff?code=${encodeURIComponent(code)}`;
}
