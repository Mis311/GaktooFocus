import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import mongoose from "mongoose";

// db
mongoose.connect(pro)


export default function Home() {
  return (
    <>
      <Head>
        <title>GaktooFocus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-3xl text-center">
        <h1 className="font-bold text-6xl">Welcome to GaktooFocus,</h1>
        <h2 className="mb-24">
          {" "}
          Where You Change Your Life By Power of Habits and Friends!
        </h2>
     
      </main>
    </>
  );
}
