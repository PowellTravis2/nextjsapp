'use client'

import React, { useState } from "react";
import styles from '../styles/Home.module.css';

export default function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button className={styles.button1} onClick={() => setCount(count + 1)}>
            Increment
            </button>
      </div>
    );
}