function finsh({ maxPoints, points, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You Scored <span>{points}</span> out of {maxPoints} (
        {Math.ceil(percentage)})%
      </p>

      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restrat" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default finsh;
