# hospital-web — the Nirogya marketing site, as a container.
#
# The site is a Next.js static export (`out/`), so the image is just those
# files behind nginx: no Node at runtime. Any static host (S3 + CloudFront,
# Netlify, Cloudflare Pages) can serve `out/` instead; this image is for hosts
# that run containers.
#
# NEXT_PUBLIC_* values are baked into the HTML at build time — pass them as
# build args (docker compose reads them from the environment / .env) and
# rebuild when they change.

# --- build -----------------------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG NEXT_PUBLIC_APP_URL=http://localhost:3000
ARG NEXT_PUBLIC_SITE_URL=http://localhost:3100
ARG NEXT_PUBLIC_API_URL=http://localhost:8000
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL \
    NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

# --- runtime ---------------------------------------------------------------
# The unprivileged nginx image: never root, listens on 8080.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
