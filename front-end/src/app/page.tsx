import Image from "next/image";
import styles from "./page.module.css";
import { createClient } from "@/prismicio";


export default async function Home() {
  const prismic  = createClient()
  const section1 = await prismic.getByUID("section1","main");//primeiro o typo depois passa o uid
  console.log()
  return (
    <>
        <h1>{section1.data.campo1}</h1>;
    </>
  );
}
