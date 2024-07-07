'use client';

import "./page.css";
import Image from "next/image";
import fundo from "@/assets/imgs/fundo1.png";
import seta from "@/assets/imgs/seta.png";
import close from "@/assets/imgs/window-close.png";
import setaFechar from "@/assets/imgs/toggle-close.png";
import closeIcon from "@/assets/imgs/windoow-close-black.png"

import { useState } from "react";
import Card from "@/components/card/card";
import EditModal from "@/components/modal/editModal";
import CreateModal from "@/components/modal/createModal";

export default function Produtos() {

  // armazena os filtros ativos
  const [filtros, setFiltros] = useState<string[]>([]);
  const [preco, setPreco] = useState<[number, number]>([0, 1000]);

  // armazena a visibilidade dos filtros para cada categoria
  const [visibleCategory, setVisibleCategory] = useState<string | null>(null);

  // verifica se o modal de filtros mobile está aberto
  const [filterMobile, setFilterMobile] = useState<boolean>(false);

  // função para alternar a visibilidade de cada categoria dos filtros
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

  // verifica qual modal está aberto 
  const [modalType, setModalType] = useState<"edit" | "create" | null>(null);

  const openEditModal = () => {
    setModalType("edit");
  };

  const openCreateModal = () => {
    setModalType("create");
  };

  const closeModal = () => {
    setModalType(null);
  };

  // verifica a mudança do range de preços
  const handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPreco = [...preco];
    newPreco[index] = parseInt(event.target.value);
    setPreco([Math.min(newPreco[0], newPreco[1]), Math.max(newPreco[0], newPreco[1])]);
  };

  // realiza nova pesquisa
  const applyFilters = () => {
    // essa função realizará nova pesquisa pelos produtos com os filtros indicados, retornará id dos produtos
    // chama applyTagFilters
    // chama applyPromotionFilters
    // chama applyPriceFilter
  };

  const applyTagFilters = () => {
    // essa função realizará nova pesquisa pelos produtos com os filtros indicados
    // pesquisar marcas e categorias
  };

  const applyPromotionFilters = () =>{
    // fazer verificação difente para promoção
    // ex se filter == "20% off" e o (valor antigo - valor novo / valor antigo === 0,2) -> aplicar filtro 
    // se o filtro for fréte gratis ignorar
  }

  const applyPriceFilter = () =>{
    //verificar valor do usestate de preco minimo e máximo
  }

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
              <button onClick={applyFilters}>APLICAR</button>
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

          <button className="edicao" onClick={openEditModal}>EDIÇÃO</button>

          <button className="filtro-mobile" onClick={() => setFilterMobile(true)}>Filtros</button>
          <button className="edicao-mobile" onClick={openEditModal}>Edição</button>
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

      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {modalType === "edit" && <EditModal onClose={closeModal} onOpenCreate={openCreateModal} />}
      {modalType === "create" && <CreateModal onClose={closeModal} onOpenEdit={openEditModal} />}
    </section>
  );
}

