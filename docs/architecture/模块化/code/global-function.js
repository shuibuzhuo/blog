var scores = [90, 95, 88, 35, 55, 91];

function average() {
  const total = scores.reduce(function (res, score) {
    return res + score;
  }, 0);

  return `你的平均分是${total / scores.length}。`;
}

function fail() {
  const failScores = scores.filter((score) => score < 60);

  return `很抱歉，你有${failScores.length}次不合格。`;
}

console.log("average", average());
console.log("fail", fail());
