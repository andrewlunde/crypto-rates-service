FROM node:16-slim
WORKDIR /app
COPY srv .
RUN npm install --omit=dev --target_arch=x86 --target_platform=linux
ENV NODE_ENV=production
RUN chown -R node:node /app/data
RUN chmod 777 /app/data
EXPOSE 5001
USER node
CMD [ "npm", "start" ]