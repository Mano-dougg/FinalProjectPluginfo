'use client';

import "./page.css";
import Image from "next/image";
import fundo from "@/assets/fundo1.png"
import seta from "@/assets/seta.png"
import close from "@/assets/window-close.png"

import { useState } from "react";

export default function Produtos () {

//armazena os filtros ativos
const [filtros, setFiltros] = useState<string[]>(['Face', 'Lábios', 'Olhos', 'Kits', 'Sobrancelha', 'Unhas', 'Shine Original', 'Marter', 'Arthur', 'Ribeiro Wild', 'Joaquim', 'Laura', 'Natanzin', 'Felipe']);

// função para remoção de filtro
const removerFiltro = (filtro: string) => {
    setFiltros(filtros.filter(item => item !== filtro));
  };

  return (
    <section className="produtos">

        <div className="cover-container">
            <Image src={fundo} alt="" className="fundo"/>
            <h1 id="titulo1"><span className="maior"> PRODUTOS <span className="amarelo">EXCLUSIVOS </span></span><br/> PARA TODOS OS GOSTOS </h1>
            <h1 id="titulo2">Produtos Exclusivos para todos os <span className="amarelo"> gostos </span> </h1>
        </div>

        <section className="filtros-container">
            
            <div className="filtros-edicao">


                <div className="filtros">
                    <h1>FILTROS</h1>
                    <div className="categorias">
                        
                        <button><Image src={seta} alt="" width={10}/>MAQUIAGEM</button>
                        <button><Image src={seta} alt="" width={10}/>MARCAS</button>
                        <button><Image src={seta} alt="" width={10}/>PREÇO</button>
                        <button><Image src={seta} alt="" width={10}/>PROMOÇÃO</button>

                    </div>
                </div>

                
                <button className="edicao">EDIÇÃO</button>
            </div>

        <div className="remover-filtros">
        {filtros.map((filtro) => (
            <button key={filtro}>
            {filtro.toUpperCase()}
            <Image
                src={close}
                alt={`Remover ${filtro}`}
                width={24}
                onClick={() => removerFiltro(filtro)}
            />
            </button>
        ))}
        </div>

            
        </section>

    </section>
  );
}