'use client'

import React, { useState } from "react";
import styles from '../styles/Home.module.css';

export default function Counter({ countInc }: {countInc: number}) {
    const [count, setCount] = useState(0);
    {count >= 10 ? (
      setCount(0)
    ) : (
      console.log("None")
    )}
    return (
      <div>
        <p>Count: {count}</p>
        <button className={styles.button1} onClick={() => setCount(count + countInc)}>
            Increment
            </button>
      </div>
    );
}