import React from "react";

import "./style.scss";

const Filler = props => {
  return <div className="Filler" style={{ width: `${props.percentage}%` }} />;
};

const ProgressBar = props => {
  return (
    <div className="ProgressBar">
      <Filler percentage={props.percentage} />
    </div>
  );
};

const array = [
  {
    percentage: 60
  }
];
// const porcentage = 60;

function ProgressBarExemple() {
  return (
    <div>
      {array.map(e => (
        <ProgressBar percentage={e.percentage} />
      ))}
    </div>
  );
}

export default ProgressBarExemple;
