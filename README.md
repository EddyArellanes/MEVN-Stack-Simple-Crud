

Practice with all MEVN Stack
M: Mongo
E: Express
V: Vue
N: Nodejs

Installation:

npm install express
npm install nodemon
npm install morgan
npm install mongoose

All in one line
npm install express nodemon morgan mongoose

Frontend Modules
npm install webpack -D
npm install webpack-cli -D
npm install babel-core
npm install babel-loader -D
npm install babel-preset-env -D
npm install vue-loader -D
npm install vue-template-compiler -D
npm install vue -D
All in one line
npm install webpack webpack-cli babel-loader babel-preset-env vue-loader vue-template-compiler vue -D

Dependencies Description:
express: Framework for better development server apps in Nodejs
mongoose: Conector and Schema generator for MongoDB
morgan: When you receive request by client, server will show you what request has been done.
nodemon: For hot-reloading any change in project. When client send request, in console we will watch the type like GET / 7.230 ms. For autoloading changes, npm run dev, dev has been put into package.json

Frontend
babel-core: Transpile latest code Es6-7-8 to 5 for all navigator compatibility
babel-loader: Complement for webpack to transpile code javascript
babel-preset-env: Only will transpile vanilla javascript
vue-loader: to transpile vuejs code
vue-template-compiler: is needed for vue-loader
webpack: For built all files to production like Vue
webpack-cli: In some version, webpack core was separated from cli, this is needed for execute commands

Directory Info:
src: All my code
    app: Frontend code
    models: Mongo models
    public: Final files for deploy
    routes: Routes for Express
    index.js: Initialize server

