require.config({
  paths:{
    jquery: "../libs/jquery"
  }
});

require(["jquery"],function($){
  console.log("Hello Myapp!");
});