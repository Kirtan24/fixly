FROM node:20-alpine AS builder
WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

FROM node:20-alpine AS runner
WORKDIR /app

# Create a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy built app and dependencies from builder
COPY --from=builder /app /app

USER appuser

ENV NODE_ENV=production
EXPOSE 5000

CMD ["node", "server.js"]
