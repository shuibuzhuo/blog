var __Module = {
  scores: [90, 95, 88, 35, 55, 91],
  average() {
    const total = this.scores.reduce(function (res, score) {
      return res + score;
    }, 0);

    return `你的平均分是${total / this.scores.length}。`;
  },
  fail() {
    const failScores = this.scores.filter((score) => score < 60);

    return `很抱歉，你有${failScores.length}次不合格。`;
  },
};

var module = window.__Module;
console.log("average", module.average());
console.log("fail", module.fail());
module.scores = 10;
module.average();
