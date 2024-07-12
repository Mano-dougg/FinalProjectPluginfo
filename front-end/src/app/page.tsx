'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { createClient } from "@/prismicio";
import Slider1 from "@/components/home/componets/slider1";
import Slider2 from "@/components/home/componets/slider2";
import Slider3 from "@/components/home/componets/slider3";
import Kits from "@/components/home/componets/kits";
import Conheca from "@/components/home/componets/conheca";
import Categorias from "@/components/home/componets/categorias";
import Recomendados from "@/components/home/componets/recomendados";
import Conheca2 from "@/components/home/componets/conheca2";
import Conheca3 from "@/components/home/componets/conheca3";
import Produtos from "@/components/home/componets/produtos";







export async function Home() {
  
  console.log()
  return (
    <>
    <Slider3/>
    <Slider2/>
    <Kits/>
    <Conheca/>
    <Categorias/>
    <Recomendados/>
    <Conheca2/>
    <Produtos/>
    <Conheca3/>

    
    </>
  );
}
export default Home