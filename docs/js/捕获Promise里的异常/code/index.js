(async () => {
  try {
    console.log(100);

    // throw new Error("try error");

    setTimeout(() => {
      try {
        throw new Error("setTimeout error");
      } catch (error) {
        console.log("setTimeout的错误捕获到了", error);
      }
    }, 1000);

    // const p1 = Promise.resolve();

    // p1.then(() => {
    //   console.log("p1 then");
    //   throw new Error("p1 then error");
    // }).catch((e) => {
    //   console.log("p1 e", e.message);
    // });

    // const p2 = Promise.resolve();

    // try {
    //   await p2;
    //   throw new Error("p2 error");
    // } catch (e) {
    //   console.log("p2 e", e.message);
    // }
  } catch (e) {
    console.log("e", e.message);
  }
})();
