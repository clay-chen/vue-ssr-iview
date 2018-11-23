FROM hub.c.163.com/library/node:8.4
COPY ./start.sh /root/start.sh
WORKDIR /root
RUN npm config set registry https://registry.npm.taobao.org \
    && npm install -g pm2 \
    && chmod a+x /root/start.sh
EXPOSE 8080