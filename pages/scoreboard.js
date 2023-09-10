import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  collection,
  documentId,
  updateDoc,
  addDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import styles from '../styles/Home.module.css'
import { database } from '../firebaseConfig';
import {
  getAuth
}from 'firebase/auth';
export default function Home() {
  const [ID, setID] = useState(null);
  const [ans, setans] = useState('');
  const auth = getAuth();
  const user = auth.currentUser;
  //const databaseRef = collection(database,user?.email);
  //const dataref=doc(database,user?.email,user?.uid)
  const updateData = () => {
    //addDoc(doc(database,user.email,"WSL0RjxYHSz4jd1gxjFf"), {
      updateDoc(dataref, { 
        ans2: ans
    })
      .then(() => {
        alert('Data Sent')
        setans('')
        //router.push('/q2')
      })
      .catch((err) => {
        console.error(err);
      })
      
  }
  const checkValue=() => {
    if (value > 5) {
        return "Value is greater than 5.";
    } else {
        return "Value is not greater than 5.";
    }}
  return (
    <div className={styles.container}>
      <Head>
        <title>Next CRUD AUTH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1> tell me  joke </h1>
        <button 
        className={styles.button}
        onClick={checkValue}>get score</button>
       </main>
    </div>
  );
}
