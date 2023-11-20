(function (global) {
  function average(scores) {
    const total = scores.reduce(function (res, score) {
      return res + score;
    }, 0);

    return `你的平均分是${total / scores.length}。`;
  }

  function fail(scores) {
    const failScores = scores.filter((score) => score < 60);

    return `很抱歉，你有${failScores.length}次不合格。`;
  }

  global.__Module_HANDLE = {
    average,
    fail,
  };
})(window);
