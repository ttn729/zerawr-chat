import Head from "next/head";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic.js";

const inter = Inter({ subsets: ["latin"] });
import React, { useState } from "react";
import styles from "../components/AblyChatComponent.module.css";

const AblyChatComponent = dynamic(
  () => import("../components/AblyChatComponent.jsx"),
  { ssr: false }
);

export default function Home() {
  const [username, setUsername] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [submitted, setSubmitted] = React.useState(0);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setSubmitted(1);
  };

  return (
    <>
      <Head>
        <title>Zerawr Chat</title>
        <meta name="description" content="Generated by Spicy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Zerawr Chat</h1>

        {submitted != 1 && (
          <div>
            <form onSubmit={handleFormSubmission} className={styles.form}>
              <textarea
                value={username}
                placeholder="Enter username..."
                onChange={(e) => setUsername(e.target.value)}
                className={styles.textarea}
              />
              <br />
              <textarea
                value={room}
                placeholder="Enter room code..."
                onChange={(e) => setRoom(e.target.value)}
                className={styles.textarea}
              />
              <br />
              <button className={styles.button} disabled={username == "" || room == ""} >Submit!</button>
            </form>
          </div>
        )}

        {submitted != 0 && <AblyChatComponent username={username} room={room} />}
      </main>
    </>
  );
}
