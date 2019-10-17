import React from "react";

import "./style.scss";

const Filler = props => {
  return <div className="Filler" />;
};

const ProgressBar = props => {
  return (
    <div className="ProgressBar">
      <Filler />
    </div>
  );
};

export default ProgressBar;
