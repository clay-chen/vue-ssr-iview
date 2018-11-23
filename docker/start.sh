#!/bin/bash

cd /root/web
npm install
npm run build
pm2 start --name vue-ssr-iview npm -- run start
# pm2 start --name vue-ssr-iview -i 4 npm -- run start
