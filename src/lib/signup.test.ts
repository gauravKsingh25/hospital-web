import assert from "node:assert/strict";
import { test } from "node:test";

import {
  detailsPayload,
  handoffUrl,
  messageFor,
  planFrom,
  postJson,
  validateCode,
  validateDetails,
  validatePassword,
  type Details,
} from "./signup.ts";

const good: Details = {
  full_name: "Asha Verma",
  email: "asha@hospital.in",
  phone: "",
  hospital_name: "Verma Clinic",
  plan_code: "standard",
};

function fakeFetch(status: number, body: unknown, headers: Record<string, string> = {}): typeof fetch {
  return (async () =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json", ...headers },
    })) as typeof fetch;
}

test("the plan comes from the address, Professional otherwise", () => {
  assert.equal(planFrom("?plan=standard"), "standard");
  assert.equal(planFrom("?plan=professional"), "professional");
  assert.equal(planFrom("?plan=gold"), "professional");
  assert.equal(planFrom(""), "professional");
});

test("details are checked the way the server checks them", () => {
  assert.deepEqual(validateDetails(good), {});
  assert.ok(validateDetails({ ...good, full_name: " " }).full_name);
  assert.ok(validateDetails({ ...good, email: "nobody" }).email);
  assert.ok(validateDetails({ ...good, hospital_name: "x" }).hospital_name);
  assert.ok(validateDetails({ ...good, phone: "9".repeat(21) }).phone);
});

test("the code is six digits", () => {
  assert.equal(validateCode(" 123456 "), null);
  assert.ok(validateCode("12345"));
  assert.ok(validateCode("12a456"));
});

test("the password is at least 12 characters and typed twice", () => {
  assert.match(validatePassword("short", "short") ?? "", /12/);
  assert.match(validatePassword("x".repeat(12), "y".repeat(12)) ?? "", /match/);
  assert.equal(validatePassword("x".repeat(12), "x".repeat(12)), null);
});

test("a success comes back as data", async () => {
  const result = await postJson("http://api", "/signup/start", {}, fakeFetch(202, { status: "sent" }));
  assert.deepEqual(result, { ok: true, data: { status: "sent" } });
});

test("an API error keeps its code and message", async () => {
  const result = await postJson(
    "http://api",
    "/signup/verify",
    {},
    fakeFetch(400, { error: { code: "otp_invalid", message: "That code is not valid." } }),
  );
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.equal(result.status, 400);
  assert.equal(result.code, "otp_invalid");
  assert.equal(result.message, "That code is not valid.");
});

test("a 429 says how long to wait", async () => {
  const result = await postJson(
    "http://api",
    "/signup/start",
    {},
    fakeFetch(429, { error: { code: "rate_limited", message: "Too many requests." } }, { "Retry-After": "120" }),
  );
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.equal(result.retryAfter, 120);
  assert.match(messageFor(result), /2 minutes/);
});

test("an unreachable API is a network failure, in words", async () => {
  const broken = (async () => {
    throw new TypeError("Failed to fetch");
  }) as typeof fetch;
  const result = await postJson("http://api", "/signup/start", {}, broken);
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.equal(result.status, 0);
  assert.equal(result.code, "network");
  assert.match(messageFor(result), /could not reach/i);
});

test("the server's own sentence is shown for a weak password", () => {
  const message = "That password is too common. Choose something less guessable.";
  assert.equal(
    messageFor({ ok: false, status: 400, code: "weak_password", message, retryAfter: null }),
    message,
  );
});

test("the handoff link carries the code safely", () => {
  assert.equal(handoffUrl("http://app", "a/b+c"), "http://app/auth/handoff?code=a%2Fb%2Bc");
});

test("a 422 names the fields the server refused", async () => {
  const result = await postJson(
    "http://api",
    "/signup/start",
    {},
    fakeFetch(422, {
      error: {
        code: "validation_error",
        message: "The submitted data is not valid.",
        details: { fields: [{ field: "email", message: "value is not a valid email address", type: "value_error" }] },
      },
    }),
  );
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.deepEqual(result.fields, ["email"]);
  assert.match(messageFor(result), /marked/);
});

test("the details sent are the details checked", () => {
  assert.deepEqual(
    detailsPayload({ ...good, full_name: "  Asha    Verma ", hospital_name: " Verma   Clinic", phone: " " }),
    {
      full_name: "Asha Verma",
      email: "asha@hospital.in",
      phone: null,
      hospital_name: "Verma Clinic",
      plan_code: "standard",
    },
  );
});
