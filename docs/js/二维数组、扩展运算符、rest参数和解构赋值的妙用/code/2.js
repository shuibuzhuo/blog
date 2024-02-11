// 使用...params一次性接收所有的参数
function fnByUs2(...params) {
  // 直接传给另一个函数
  utils(params);
}

// 另一个函数可以通过解构的方式，得到所有的参数
function utils([a, b, c]) {
  console.log(a, b, c);
}

function fnByLibCase2() {
  fnByUs2(10, 20, 30);
}

fnByLibCase2();
