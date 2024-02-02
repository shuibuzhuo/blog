function* gen() {
  console.log("hello");
  const num1 = yield;
  console.log(num1);
  const num2 = yield;
  console.log(num2);
}

const fn = gen();
fn.next(); // hello
fn.next(100); // 100
fn.next(200);
