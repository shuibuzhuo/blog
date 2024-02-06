function init() {
  try {
    console.log("init");

    throw new Error("发生了错误！！");
  } catch (error) {
    console.log("我们在catch分支可以捕获到错误", error.message);
  }
}

init();
