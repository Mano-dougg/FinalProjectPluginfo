import { useState } from "react";
import Image from "next/image";
import close from "@/assets/imgs/windoow-close-black.png";
import pen from "@/assets/imgs/pen-solid.png";
import goBack from "@/assets/imgs/go-back-icon.png";
import imgPlaceholder from "@/assets/imgs/imagem-grande-placeholder.png";
import sideImgPlaceholder from "@/assets/imgs/side-img-placeholder.png";
import toggleOpen from "@/assets/imgs/toggle-open.png";
import toggleClose from "@/assets/imgs/toggle-close.png";
import { PostProduct } from "@/actions/productActions"; 
import Produto from "@/types/types"; 

import "./modal.css";
import { fetchProductByName } from "@/actions/getProduct";

interface EditModalProps {
  onClose: () => void;
  onOpenEdit: () => void;
}

export default function CreateModal({ onClose, onOpenEdit }: EditModalProps) {
  const [mainImage, setMainImage] = useState<File | undefined>(undefined);
  const [sideImages, setSideImages] = useState<(File | undefined)[]>(Array(4).fill(undefined));
  const [showBrands, setShowBrands] = useState<boolean>(false);
  const [showTags, setShowTags] = useState<boolean>(false);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [nome, setNome] = useState<string>('');
  const [preco, setPreco] = useState<number>(0);
  const [precoAlterado, setPrecoAlterado] = useState<number>(0);
  const [descricao, setDescricao] = useState<string>('');
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState<number>(0);
  const [conjunto, setConjunto] = useState<boolean>(false);

  const brands = ['Marter', 'Arthur', 'Ribeiro Wild', 'Joaquim', 'Laura', 'Natanzin', 'Felipe'];
  const tags = ['Face', 'Lábios', 'Olhos', 'Kits', 'Sobrancelha', 'Unhas', 'Shine Original'];

  // Função para lidar com a mudança de imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number | null) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (index === null) {
        setMainImage(e.target.files[0]);
      } else {
        setSideImages(prevImages => {
          const newImages = [...prevImages];
          newImages[index] = file;
          return newImages;
        });
      }
    }
  };

  // Funções para alternar a exibição de marcas e tags
  const toggleBrands = () => {
    setShowBrands(!showBrands);
  };

  const toggleTags = () => {
    setShowTags(!showTags);
  };

  // Funções para lidar com a seleção de tags e marcas
  const handleTagChange = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(prevBrand => (prevBrand === brand ? null : brand));
  };

  // Função para salvar produto
  const handleSave = async () => {

    var promocao : number;
    preco >= 0 ? promocao = ((preco - precoAlterado) / preco) : promocao = 0;

    const produto: Produto = {
      nome,
      marca: selectedBrand || '',
      preco,
      preco_alterado: precoAlterado,
      promocao: (promocao),
      descricao,
      quantidade_carrinho: quantidadeCarrinho,
      face: selectedTags.includes('Face'),
      labios: selectedTags.includes('Lábios'),
      olhos: selectedTags.includes('Olhos'),
      kits: selectedTags.includes('Kits'),
      sombrancelha: selectedTags.includes('Sobrancelha'),
      unhas: selectedTags.includes('Unhas'),
      original: selectedTags.includes('Shine Original'),
      mainImage,
      sideImages: sideImages.filter(image => image !== undefined), // Filtra para excluir valores indefinidos
    };

    const filteredSideImages = sideImages.filter(image => image !== undefined);
    const productExists = await fetchProductByName(nome);
    
    if (produto.mainImage===undefined && filteredSideImages.length===0){
      alert("Primeiro selecione uma imagem para o produto")

      // verifica se o nome já esta sendo utilizado
    } else if (productExists){
      alert("Nome já cadastrado, tente novamente com outro nome!");

      // tenta criar o produto
    } else{

        try {
          await PostProduct(produto);
          alert("Produto salvo com sucesso")
          onClose();
          window.location.reload();
        } catch (error) {
          alert("Erro ao salvar o produto")
        }
    }    
    }


  return (
    <div className="fundo-modal">
      <section className="modal">
        <div className="modal-titulo">
          <Image src={pen} alt="" width={58} className="pen-icon" />
          <h1>CRIAÇÃO</h1>
        </div>

        <div className="novo-produto" onClick={onOpenEdit}>
          <Image src={goBack} alt="" width={32} height={28} className="img-novo-produto" />Voltar a edição
        </div>

        <Image src={close} alt="" width={24} className="close-icon" onClick={onClose} />

        <div className="modal-imgs">
          <div className="modal-img-container">
            <label htmlFor="main-image-input">
              <Image src={mainImage ? URL.createObjectURL(mainImage) : imgPlaceholder} alt="" className="modal-img" width={352} height={243} />
            </label>
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              id="main-image-input"
              style={{ display: 'none' }}
              onChange={(e) => handleImageChange(e, null)}
            />
          </div>

          <div className="side-imgs">
            {sideImages.map((image, index) => (
              <div key={index} className="side-img-container">
                <label htmlFor={`side-image-input-${index}`}>
                  <Image className="side-img" src={image ? URL.createObjectURL(image) : sideImgPlaceholder} alt="" width={60} height={60} />
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/gif"
                  id={`side-image-input-${index}`}
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageChange(e, index)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="modal-info">
          <label>Nome produto</label>
          <input type="text" className="nome-produto" value={nome} onChange={(e) => setNome(e.target.value)} />

          <div className="modal-preco">
            <div className="preco-atual">
              <label>Preço Antigo (R$)</label>
              <input type="number" min="0" value={preco} onChange={(e) => setPreco(parseFloat(e.target.value))} />
            </div>

            <div className="preco-alterado">
              <label>Preço Atual (R$)</label>
              <input type="number" min="0" value={precoAlterado} onChange={(e) => setPrecoAlterado(parseFloat(e.target.value))} />
            </div>
          </div>

          <label>Este produto faz parte de um conjunto?</label>
          <div className="radio-options">
            <label>
              <input type="radio" name="conjunto" value="sim" checked={conjunto === true} onChange={() => setConjunto(true)} /> Sim
            </label>
            <label>
              <input type="radio" name="conjunto" value="nao" checked={conjunto === false} onChange={() => setConjunto(false)} /> Não
            </label>
          </div>

          <label className="modal-description">
            Descrição do produto
            <textarea name="Text" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
          </label>

          <div className="tag-marca">
            <button onClick={toggleTags}>
              Tag
              {showTags ? <Image src={toggleClose} alt="" width={10} height={8} className="tag-marca-img" /> : <Image src={toggleOpen} alt="" width={10} height={8} className="tag-marca-img" />}
            </button>
            <button onClick={toggleBrands}>
              Marca
              {showBrands ? <Image src={toggleClose} alt="" width={10} height={8} className="tag-marca-img" /> : <Image src={toggleOpen} alt="" width={10} height={8} className="tag-marca-img" />}
            </button>
          </div>

          <div className="modal-row">
            {showTags && (
              <div className="tag-options">
                {tags.map((tag, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      value={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                    />
                    {tag}
                  </label>
                ))}
              </div>
            )}

            {showBrands && (
              <div className="brand-options">
                {brands.map((brand, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="brand"
                      value={brand}
                      checked={selectedBrand === brand}
                      onClick={() => handleBrandChange(brand)}
                      onChange={() => {}}
                    />
                    {brand}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="salvar-excluir">
          <button onClick={handleSave}>SALVAR</button>
          <button>EXCLUIR</button>
        </div>
      </section>
    </div>
  );
}


