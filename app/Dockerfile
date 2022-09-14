FROM node:16-slim
WORKDIR /app
COPY app .
RUN npm install --omit=dev --target_arch=x86 --target_platform=linux --no-package-lock
ENV NODE_ENV=production
EXPOSE 5000
USER node
CMD [ "npm", "start" ]
