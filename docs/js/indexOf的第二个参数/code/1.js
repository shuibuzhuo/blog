// const arr = [10, 20, 30];
// const element = 30;
// const index = arr.indexOf(element);

// console.log(index);

// const arr = [10, 20, 30];
// const element = 10;
// const index = arr.indexOf(element);

// console.log(index); // 0

// const arr2 = [10, 20, 30, 10];
// const element2 = 10;
// const index2 = arr2.indexOf(element2, 1);

// console.log(index2); // 3

// function addEmoji(string, targetString, emoji) {
//   let index = string.indexOf(targetString);

//   let result = "";

//   let currentScanIndex = 0;

//   while (index !== -1) {
//     result += string.slice(currentScanIndex, index) + targetString + emoji;
//     currentScanIndex = index + targetString.length;
//     index = string.indexOf(targetString, currentScanIndex);
//   }

//   result += string.slice(currentScanIndex);

//   return result;
// }

function addEmoji(string, targetString, emoji) {
  // 找到 targetString 的位置
  let index = string.indexOf(targetString);

  let result = "";

  // 记录当前扫描到的位置，现在是在参数 string 的开头位置
  // 因为 string 当中，可能会存在多个 targetString，所以我们会跳着进行扫描，也就是会使用 indexOf 的第二个参数
  let currentScanIndex = 0;

  // 如果找到了 targetString
  while (index !== -1) {
    // 在 targetString 后面增加 emoji
    result += string.slice(currentScanIndex, index) + targetString + emoji;
    // 将当前扫描位置，移动到 targetString 之后的那个位置上
    currentScanIndex = index + targetString.length;
    // 重点来了！！！我们要从当前扫描的位置开始，去寻找 targetString
    index = string.indexOf(targetString, currentScanIndex);
  }

  // 将 targetString 之后的内容追加到 result 里
  result += string.slice(currentScanIndex);

  return result;
}

const res = addEmoji("大家好，我是哈默，今天是一个好天气。", "好", "👍");
console.log(res);
