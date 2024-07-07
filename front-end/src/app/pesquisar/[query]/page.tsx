"use client";

import "@/app/produtos/page.css"
import "./page.css"

import Image from "next/image";
import fundo from "@/assets/imgs/fundo1.png";
import seta from "@/assets/imgs/seta.png";
import close from "@/assets/imgs/window-close.png";
import setaFechar from "@/assets/imgs/toggle-close.png";
import Card from "@/components/card/card";
import closeIcon from "@/assets/imgs/windoow-close-black.png"


import { useState } from "react";
interface SearchPageProps {
  params: { query: string };
}

const ProductPage: React.FC<SearchPageProps> = ({ params }) => {

  const { query } = params;
  
  // transforma em string o texto recebido pela url
  const decodedSearch: string = decodeURIComponent(query);

  // armazena os filtros ativos
  const [filtros, setFiltros] = useState<string[]>([]);
  const [preco, setPreco] = useState<[number, number]>([0, 1000]);

  const [filterMobile, setFilterMobile] = useState<boolean>(false);

  // armazena a visibilidade dos filtros para cada categoria
  const [visibleCategory, setVisibleCategory] = useState<string | null>(null);

  // função para alternar a visibilidade dos filtros
  const toggleCategory = (category: string) => {
    setVisibleCategory(visibleCategory === category ? null : category);
  };

  // função para adicionar ou remover filtro
  const toggleFiltro = (filtro: string) => {
    setFiltros((prevFiltros) =>
      prevFiltros.includes(filtro)
        ? prevFiltros.filter((item) => item !== filtro)
        : [...prevFiltros, filtro]
    );
  };

  // função para remoção de filtro
  const removerFiltro = (filtro: string) => {
    setFiltros(filtros.filter(item => item !== filtro));
  };


  const handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPreco = [...preco];
    newPreco[index] = parseInt(event.target.value);
    setPreco([Math.min(newPreco[0], newPreco[1]), Math.max(newPreco[0], newPreco[1])]);
  };

  // array de teste -> tipo será produto depois que criar
  const produtosEncontrados: string[] = [];

  return (
    <section className="produtos">

      <div className="cover-container">
        <Image src={fundo} alt="" className="fundo" priority={false}/>
        <h1 id="titulo1"><span className="maior"> PRODUTOS <span className="amarelo">EXCLUSIVOS </span></span><br /> PARA TODOS OS GOSTOS </h1>
        <h1 id="titulo2">Produtos Exclusivos para todos os <span className="amarelo"> gostos </span> </h1>
      </div>

      <section className="filtros-container">

        <div className="filtros-edicao">
          <div className="filtros">
            <div className="filtros-row">
                <h1>FILTROS</h1>
                <button>APLICAR</button>
              </div>

            <div className="categorias">
              
              <div className="maquiagem">
                <button onClick={() => toggleCategory('MAQUIAGEM')} id={visibleCategory === 'MAQUIAGEM' ? 'button-open' : undefined}>
                  {visibleCategory === 'MAQUIAGEM' ?  <Image src={setaFechar} alt="" width={10} />: <Image src={seta} alt="" width={10} />}MAQUIAGEM
                </button>
                {visibleCategory === 'MAQUIAGEM' && (
                  <div className="filter-options">
                    {['Face', 'Lábios', 'Olhos', 'Kits', 'Sobrancelha', 'Unhas', 'Shine Original'].map((filtro) => (
                      <label key={filtro}>
                        <input
                          type="checkbox"
                          value={filtro}
                          checked={filtros.includes(filtro)}
                          onChange={() => toggleFiltro(filtro)}
                        /> {filtro}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="marcas">
                <button onClick={() => toggleCategory('MARCAS')} id={visibleCategory === 'MARCAS' ? 'button-open' : undefined}>
                {visibleCategory === 'MARCAS' ?  <Image src={setaFechar} alt="" width={10} />: <Image src={seta} alt="" width={10} />}MARCAS
                </button>
                {visibleCategory === 'MARCAS' && (
                  <div className="filter-options">
                    {['Marter', 'Arthur', 'Ribeiro Wild', 'Joaquim', 'Laura', 'Natanzin', 'Felipe'].map((filtro) => (
                      <label key={filtro}>
                        <input
                          type="checkbox"
                          value={filtro}
                          checked={filtros.includes(filtro)}
                          onChange={() => toggleFiltro(filtro)}
                        /> {filtro}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="preco">
                <button onClick={() => toggleCategory('PREÇO')} id={visibleCategory === 'PREÇO' ? 'button-open' : undefined}>
                {visibleCategory === 'PREÇO' ?  <Image src={setaFechar} alt="" width={10} />: <Image src={seta} alt="" width={10} />}PREÇO
                </button>
                {visibleCategory === 'PREÇO' && (
                  <div className="filter-options">
                    <div className="preco-slider">
                      <label> de R$: {preco[0]}</label>
                        <input
                          type="range"
                          min="0"
                          max="1000"
                          value={preco[0]}
                          onChange={(event) => handlePrecoChange(event, 0)}
                        />
                      <label> até R$: {preco[1]}</label>
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={preco[1]}
                        onChange={(event) => handlePrecoChange(event, 1)}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="promocao">
                <button onClick={() => toggleCategory('PROMOÇÃO')} id={visibleCategory === 'PROMOÇÃO' ? 'button-open' : undefined}>
                {visibleCategory === 'PROMOÇÃO' ?  <Image src={setaFechar} alt="" width={10} />: <Image src={seta} alt="" width={10} />}PROMOÇÃO
                </button>
                {visibleCategory === 'PROMOÇÃO' && (
                  <div className="filter-options">
                    {['Frete grátis','20% off', '30% a 40% off', '50% off', '60% off','70% a 90% off'].map((filtro) => (
                      <label key={filtro}>
                        <input
                          type="checkbox"
                          value={filtro}
                          checked={filtros.includes(filtro)}
                          onChange={() => toggleFiltro(filtro)}
                        /> {filtro}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>


          <button className="filtro-mobile" onClick={() => setFilterMobile(true)}>Filtros</button>
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
    
      {filterMobile && <section className="filtros-container-mobile">

        <div className="filtros-mobile">
          <Image src={closeIcon} alt="" width={25} height={25} className="close-filtros-mobile" onClick={() => setFilterMobile(false)}></Image>
          <div className="filtros-mobile-row">
            <div className="filtros-mobile-label">MAQUIAGEM</div>

            <div className="categoria-mobile">

              Tipo de produto... 
              <button onClick={() => toggleCategory('MAQUIAGEM')} id={visibleCategory === 'MAQUIAGEM' ? 'button-open-mobile' : undefined}>
                {visibleCategory === 'MAQUIAGEM' ?  <Image src={setaFechar} alt="" width={10} />: <Image src={seta} alt="" width={10} />}
              </button>
              {visibleCategory === 'MAQUIAGEM' && (
                <div className="filter-options-mobile">
                  {['Face', 'Lábios', 'Olhos', 'Kits', 'Sobrancelha', 'Unhas', 'Shine Original'].map((filtro) => (
                    <label key={filtro}>
                      <input
                        type="checkbox"
                        value={filtro}
                        checked={filtros.includes(filtro)}
                        onChange={() => toggleFiltro(filtro)}
                      /> {filtro}
                    </label>
                  ))}
                </div>
              )}

            </div>
          </div>

          <div className="filtros-mobile-row">
              <div className="filtros-mobile-label"> MARCAS</div>

              <div className="categoria-mobile">

                Tipo de marca... 
                <button onClick={() => toggleCategory('MARCAS')}>
                {visibleCategory === 'MARCAS' ?  <Image src={setaFechar} alt="" width={10} />: <Image src={seta} alt="" width={10} />}
                </button>
                {visibleCategory === 'MARCAS' && (
                  <div className="filter-options-mobile">
                    {['Marter', 'Arthur', 'Ribeiro Wild', 'Joaquim', 'Laura', 'Natanzin', 'Felipe'].map((filtro) => (
                      <label key={filtro}>
                        <input
                          type="checkbox"
                          value={filtro}
                          checked={filtros.includes(filtro)}
                          onChange={() => toggleFiltro(filtro)}
                        /> {filtro}
                      </label>
                    ))}
                  </div>
                )}

              </div>
          </div>

          <div className="filtros-mobile-row">
            <div className="filtros-mobile-label">Preço</div>
            <div className="preco-slider-mobile">
                    <label> de R$: {preco[0]}</label>
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={preco[0]}
                        onChange={(event) => handlePrecoChange(event, 0)}
                      />
                    <label> até R$: {preco[1]}</label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={preco[1]}
                      onChange={(event) => handlePrecoChange(event, 1)}
                    />
              </div>
            
          </div>

          <div className="filtros-mobile-row">
            <div className="filtros-mobile-label">Promoção</div>

            <div className="categoria-mobile">

              Tipo de promoção...
              <button onClick={() => toggleCategory('PROMOÇÃO')}>
              {visibleCategory === 'PROMOÇÃO' ?  <Image src={setaFechar} alt="" width={10} />: <Image src={seta} alt="" width={10} />}
              </button>
              {visibleCategory === 'PROMOÇÃO' && (
                <div className="filter-options-mobile">
                  {['Frete grátis','20% off', '30% a 40% off', '50% off', '60% off','70% a 90% off'].map((filtro) => (
                    <label key={filtro}>
                      <input
                        type="checkbox"
                        value={filtro}
                        checked={filtros.includes(filtro)}
                        onChange={() => toggleFiltro(filtro)}
                      /> {filtro}
                    </label>
                  ))}
                </div>
              )}
            </div>

          </div>

          <button className="aplicar-filtros-mobile">Aplicar Filtros</button>
        </div>

      </section>}

    {produtosEncontrados.length === 0 && 
    <section className="sem-resultados">
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
)}

export default ProductPage;
