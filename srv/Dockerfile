FROM node:16-slim
WORKDIR /app
COPY srv .
RUN npm install --omit=dev --no-save --target_platform=linux --target_libc=glibc --target_arch=x64 
ENV NODE_ENV=production
RUN chown -R node:node /app/data
RUN chmod 777 /app/data
EXPOSE 5001
USER node
CMD [ "npm", "start" ] 
