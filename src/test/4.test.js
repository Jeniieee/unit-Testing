/**
 * 以下代码输出是什么
 */

setTimeout(function() {
  console.log(1);
}, 0);

new Promise(function(a, b) {
  console.log(2);
  for (var i = 0; i < 10; i++) {
    if (i == 9) a();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});

function a() {
  console.log(3);
}
