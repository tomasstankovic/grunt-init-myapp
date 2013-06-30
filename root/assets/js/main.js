require.config({
  baseUrl: 'assets/libs',
  paths: {
    jquery: 'jquery'
  }
});
require(["jquery"],function($){
  console.log("Hello Myapp!");
});