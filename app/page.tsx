import Image from "next/image";
import Counter from "@/components/Counter";
import Paragraph from "@/components/Paragraph";
import SearchBar from "@/components/SearchBar";
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        Travis Powell welcomes <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Counter countInc={1} />
      <Counter countInc={4} />
      <Paragraph />
      <SearchBar />
    </div>
  );
}
