var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello World,20160402';
});

app.listen(3000);