function Progress({ index, numQuestion, points, maxPoints, answer }) {
  return (
    <div className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <span>{index}</span>/{numQuestion}{" "}
      </p>

      <div>
        <span>{points}</span> / {maxPoints}
      </div>
    </div>
  );
}

export default Progress;
