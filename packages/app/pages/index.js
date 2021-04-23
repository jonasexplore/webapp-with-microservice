import styles from "../styles/home.module.css";
import { useState } from "react";
import api from "../services/api";

const options = [
  { label: "Soma", value: 1 },
  { label: "Multiplicação", value: 2 },
];

export default function Home() {
  const [values, setValues] = useState({ firstNumber: 0, secondNumber: 0 });
  const [selectedOption, setSelectedOption] = useState(1);
  const [result, setResult] = useState(0);

  function handlerChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function handlerChangeSelectedOption(event) {
    setSelectedOption(event.target.value);
  }

  async function handlerClick(event) {
    event.preventDefault();

    let url = "";

    selectedOption == 1 ? (url = "/somar") : (url = "/multiplicar");

    const { data } = await api.get(url, {
      params: { ...values },
    });

    setResult(data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <form className={styles.form}>
          <label htmlFor="firstNumber">Primeiro valor</label>
          <input
            className={styles.inp}
            value={values.firstNumber}
            onChange={handlerChange}
            type="number"
            name="firstNumber"
          />
          <select
            className={styles.select}
            onChange={handlerChangeSelectedOption}
            name="option"
          >
            {options.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <label htmlFor="secondNumber">Segundo valor</label>
          <input
            className={styles.inp}
            value={values.secondNumber}
            onChange={handlerChange}
            type="number"
            name="secondNumber"
          />
          <button className={styles.btn} onClick={handlerClick}>
            Calcular
          </button>
        </form>
        <p className={styles.description}>Resultado: {result}</p>
      </div>
    </div>
  );
}
