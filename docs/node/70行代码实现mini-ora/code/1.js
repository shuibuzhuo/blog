import cliSpinners from "cli-spinners";
import cliCursor from "cli-cursor";
import { BufferListStream } from "bl";
import readline from "readline";

// 组件库
const spinners = cliSpinners.monkey;
// 默认文本
const text = "loading";
// 输出流用的是标准错误流，同标准输出流一样，都可以输出内容
const stream = process.stderr;
// 当前帧
let frameIndex = 0;
// 每一帧的内容
const frames = spinners.frames;
// 每一帧的间隔
const interval = spinners.interval;

// 静音流
const mutedStream = new BufferListStream();
// 和标准输出流进行连接
mutedStream.pipe(process.stdout);
// 创建 readline 实例
const rl = readline.createInterface({
  input: process.stdin,
  output: mutedStream,
});

// 清屏
function clear() {
  // 将光标移动到原点
  stream.cursorTo(0);
  // 清屏 1 行
  stream.clearLine(1);
}

// 渲染函数
function render() {
  // 每一次渲染前，先清屏一下
  clear();
  // 定义渲染在终端的内容
  const renderText = frames[frameIndex] + text;
  // 向输出流写入内容
  stream.write(renderText);
  // 不断增加 frameIndex，取下一帧的内容
  frameIndex = ++frameIndex % frames.length;
}

// 停止方法
function stop() {
  // 清空定时器
  clearInterval(i);
  // 还原变量 i，回收内存
  i = undefined;
  // 清屏
  clear();
  // 还原 index
  frameIndex = 0;
  // 显示光标
  cliCursor.show();
  // 关闭 readline
  rl.close();
}

// 隐藏光标
cliCursor.hide(stream);

// 每隔 interval 时间，渲染 1 次
let i = setInterval(render, interval);

// 3 秒后，停止 loading
setTimeout(() => {
  stop();
}, 3000);

// const stream = process.stdout;
// stream.cursorTo(0);
// let x = 0;
// let y = 0;
// setInterval(() => {
//   stream.moveCursor(++x, ++y);
// }, 1000);
