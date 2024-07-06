"use client";

import "@/app/produtos/page.css"
import "./page.css"

import Image from "next/image";
import fundo from "@/assets/imgs/fundo1.png";
import seta from "@/assets/imgs/seta.png";
import close from "@/assets/imgs/window-close.png";
import Card from "@/components/card/card";


import { useState } from "react";
interface SearchPageProps {
  params: { query: string };
}

const ProductPage: React.FC<SearchPageProps> = ({ params }) => {

  const { query } = params;
  
  // transforma em string o texto recebido pela url
  const decodedSearch: string = decodeURIComponent(query);

  // armazena os filtros ativos
  const [filtros, setFiltros] = useState<string[]>(['Face', 'Lábios', 'Olhos', 'Kits', 'Sobrancelha', 'Unhas', 'Shine Original', 'Marter', 'Arthur', 'Ribeiro Wild', 'Joaquim', 'Laura', 'Natanzin', 'Felipe']);

  // armazena a visibilidade dos filtros para cada categoria
  const [visibleCategory, setVisibleCategory] = useState<string | null>(null);

  // função para alternar a visibilidade dos filtros
  const toggleCategory = (category: string) => {
    setVisibleCategory(visibleCategory === category ? null : category);
  };

  // função para remoção de filtro
  const removerFiltro = (filtro: string) => {
    setFiltros(filtros.filter(item => item !== filtro));
  };

  // array de teste -> tipo será produto depois que criar
  const produtosEncontrados: string[] = [];

  return (
    <section className="produtos">

      <div className="cover-container">
        <Image src={fundo} alt="" className="fundo" />
        <h1 id="titulo1"><span className="maior"> PRODUTOS <span className="amarelo">EXCLUSIVOS </span></span><br /> PARA TODOS OS GOSTOS </h1>
        <h1 id="titulo2">Produtos Exclusivos para todos os <span className="amarelo"> gostos </span> </h1>
      </div>

      <section className="filtros-container">
        <div className="filtros-edicao">
          <div className="filtros">
            <h1>FILTROS</h1>
            <div className="categorias">
              <div className="maquiagem">
                <button onClick={() => toggleCategory('MAQUIAGEM')}>
                  <Image src={seta} alt="" width={10} />MAQUIAGEM
                </button>
                {visibleCategory === 'MAQUIAGEM' && (
                  <div className="filter-options">
                    {['Face', 'Lábios', 'Olhos', 'Kits', 'Sobrancelha', 'Unhas', 'Shine Original'].map((filtro) => (
                      <button key={filtro}>{filtro}</button>
                    ))}
                  </div>
                )}
              </div>

              <div className="marcas">
                <button onClick={() => toggleCategory('MARCAS')}>
                  <Image src={seta} alt="" width={10} />MARCAS
                </button>
                {visibleCategory === 'MARCAS' && (
                  <div className="filter-options">
                    {['Marter', 'Arthur', 'Ribeiro Wild', 'Joaquim', 'Laura', 'Natanzin', 'Felipe'].map((filtro) => (
                      <button key={filtro}>{filtro}</button>
                    ))}
                  </div>
                )}
              </div>

              <div className="preco">
                <button onClick={() => toggleCategory('PREÇO')}>
                  <Image src={seta} alt="" width={10} />PREÇO
                </button>
                {visibleCategory === 'PREÇO' && (
                  <div className="filter-options">
                    <p>Filtro preço</p>
                  </div>
                )}
              </div>

              <div className="promocao">
                <button onClick={() => toggleCategory('PROMOÇÃO')}>
                  <Image src={seta} alt="" width={10} />PROMOÇÃO
                </button>
                {visibleCategory === 'PROMOÇÃO' && (
                  <div className="filter-options">
                    <label>
                      <input type="checkbox" value="Frete grátis" /> Frete grátis
                    </label>
                    <label>
                      <input type="checkbox" value="20% off" /> 20% off
                    </label>
                    <label>
                      <input type="checkbox" value="30% a 40% off" /> 30% a 40% off
                    </label>
                    <label>
                      <input type="checkbox" value="50% off" /> 50% off
                    </label>
                    <label>
                      <input type="checkbox" value="60% off" /> 60% off
                    </label>
                    <label>
                      <input type="checkbox" value="70% a 90% off" /> 70% a 90% off
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>


          <button className="filtros-mobile">Filtros</button>
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
      
      {produtosEncontrados.length === 0 && <section className="sem-resultados">
          <h1> Nenhum resultado para sua pesquisa por &quot;{decodedSearch}&quot; </h1>
          <p>Verifique a os termos usados na pesquisa ou utilize frases mais genéricas</p>
      </section>}

      <h2 className="recomendados"> Recomendações </h2>
      <div className="recomendados-container">
        <Card />
        <Card />
        <div className="card-hidden"><Card /></div>
      </div>

    </section>
  );
}

export default ProductPage;