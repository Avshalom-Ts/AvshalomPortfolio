# Stage 1: Build the app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .


RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

ARG MONGODB_URL
ENV MONGODB_URL=${MONGODB_URL}

ARG VITE_APP_EMAILJS_SERVICE_ID
ENV VITE_APP_EMAILJS_SERVICE_ID=${VITE_APP_EMAILJS_SERVICE_ID}

ARG VITE_APP_EMAILJS_USER_ID
ENV VITE_APP_EMAILJS_USER_ID=${VITE_APP_EMAILJS_USER_ID}

ARG VITE_APP_EMAILJS_TEMPLATE_ID
ENV VITE_APP_EMAILJS_TEMPLATE_ID=${VITE_APP_EMAILJS_TEMPLATE_ID}

WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# Only copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 4173

CMD ["npm","run", "preview"]