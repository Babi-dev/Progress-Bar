import React, { useState } from "react";

import "./style.scss";

const Filler = ({ percentage }) => {
  return <div className="Filler" style={{ width: `${percentage}%` }} />;
};

const ProgressBar = ({ percentage }) => {
  return (
    <div className="ProgressBar">
      <Filler percentage={percentage} />
    </div>
  );
};

const arrQuant = [
  {
    item: "Item 1",
    qtd: 10,
    qtd_print: 0
  },
  {
    item: "Item 2",
    qtd: 20,
    qtd_print: 0
  }
];

function ProgressBarExemple() {
  const [percentage, setPercentage] = useState(0);
  const [valuePrint, setValuePrint] = useState(0);
  const response = arrQuant.reduce((total, item) => total + item.qtd, 0);
  let total = response;

  const qualquer = (i, item, total) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const percentage = 100 / total;
        const printer = response - total;
        setValuePrint(printer);
        setPercentage(percentage);

        console.log("Impresso", i, item, total, printer);
        resolve();
      }, 2000);
    });

  async function print() {
    for (const item of arrQuant) {
      for (let i = 0; i < item.qtd - item.qtd_print; i++) {
        total = total - 1;
        await qualquer(i, item, total);
      }
    }
  }
  return (
    <div className="ContainerProgressBar">
      <span>
        {valuePrint} de {response}
      </span>
      <ProgressBar percentage={percentage} />

      <button onClick={print}>Imprimir</button>
    </div>
  );
}

export default ProgressBarExemple;
