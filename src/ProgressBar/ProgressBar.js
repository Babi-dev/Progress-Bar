import React, { useState } from "react";

import "./style.scss";

const Filler = ({ percentage }) => {
  return (
    <div
      className="Filler"
      style={{
        width: `${percentage}%`,
        backgroundColor: percentage > 70 ? "#87221f" : "#cf322f"
      }}
    />
  );
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
    item: "Produto 1",
    qtd: 10,
    qtd_print: 0
  },
  {
    item: "Produto 2",
    qtd: 20,
    qtd_print: 0
  }
];

function ProgressBarExemple() {
  const [percentageValue, setPercentageValue] = useState(0);
  const [valuePrint, setValuePrint] = useState(0);
  const response = arrQuant.reduce((total, item) => total + item.qtd, 0);
  let total = response;

  const qualquer = ({ item }, total) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const printer = response - total;
        const percentage = ((100 * printer) / response).toFixed(2);
        setValuePrint(printer);
        setPercentageValue(percentage);

        console.log(
          "Faltam:",
          total,
          "Impresso:",
          printer,
          "Porcentagem:",
          percentage + `%`,
          "Item:",
          item
        );
        resolve();
      }, 2000);
    });

  async function print() {
    for (const item of arrQuant) {
      for (let i = 0; i < item.qtd - item.qtd_print; i++) {
        total = total - 1;
        await qualquer(item, total);
      }
    }
  }
  return (
    <div className="ContainerProgressBar">
      <span>
        {valuePrint} de {response}
      </span>
      <ProgressBar percentage={percentageValue} />

      <button onClick={print}>Imprimir</button>
    </div>
  );
}

export default ProgressBarExemple;
