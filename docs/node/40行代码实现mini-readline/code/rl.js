const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("如何鼓励一下哈默：", (answer) => {
  console.log(`你的选择是：${answer}`);

  rl.close();
});
