webpack basic setup:
initialize npm and install webpack locally before run this project
>npm init -y
>npm install --save-dev webpack

npm ERR! missing script: build 解决:
在package.json中，'script'标签下，加入"build": "webpack"
