import React, { useState } from "react";
import styles from "./index.module.css"; // Import the CSS module
import CalculateString from "../../utility/CalculateString";

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleCalculate = () => {
        try {
            console.log(input);
            setResult(CalculateString(input));
        } catch (error) {
            setResult(error.message);
        }
    };

    return (
        <div className={styles.container}>
            <h2>String Calculator</h2>
            <input
                type="text"
                placeholder="Enter numbers"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleCalculate} className={styles.button}>
                Calculate
            </button>
            {result !== "" && <p className={styles.result}>Result: {result}</p>}
        </div>
    );
};

export default StringCalculator;
