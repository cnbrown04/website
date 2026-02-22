FROM oven/bun:1.3.5-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

FROM oven/bun:1.3.5-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM oven/bun:1.3.5-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.output ./
EXPOSE 3000
ENV HOST=0.0.0.0
ENV PORT=3000
CMD ["bun", "server/index.mjs"]