function read(callback) {
  function onkeypress(character) {
    // 通过 line 变量，保存输入的内容
    line += character;
    // 向输出流写入我们输入的内容，让我们输入的内容能够回显出来
    output.write(character);

    switch (character) {
      // 当输入回车键的时候，我们调用用户传入的回调函数 callback
      case "\r":
        // 将输入的内容，传入到 callback 中
        callback(line);
        // 将输入流中断下来
        input.pause();
        break;
    }
  }

  // 输入流
  const input = process.stdin;
  // 输出流
  const output = process.stdout;
  // 保存结果的变量
  let line = "";

  emitKeypressEvents(input);

  input.on("keypress", onkeypress);
  input.setRawMode(true);
}

function emitKeypressEvents(stream) {
  function onData(chunk) {
    g.next(chunk.toString());
  }
  stream.on("data", onData);

  const g = emitKeys(stream);
  g.next();
}

function* emitKeys(stream) {
  // 开启一个死循环，不断处理用户输入的内容
  while (true) {
    // 输入的字符
    let character = yield;
    // 广播一个 keypress 事件，参数为输入的字符
    stream.emit("keypress", character);
  }
}

read((answer) => {
  console.log("你输入了：" + answer);
});
