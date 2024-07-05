import { useState } from "react";
import Image from "next/image";
import close from "@/assets/imgs/windoow-close-black.png";
import pen from "@/assets/imgs/pen-solid.png";
import goBack from "@/assets/imgs/go-back-icon.png"
import imgPlaceholder from "@/assets/imgs/imagem-grande-placeholder.png";
import sideImgPlaceholder from "@/assets/imgs/side-img-placeholder.png";
import toggleOpen from "@/assets/imgs/toggle-open.png";
import toggleClose from "@/assets/imgs/toggle-close.png";

import "./modal.css";

interface EditModalProps {
  onClose: () => void;
  onOpenEdit: () => void;
}

export default function CreateModal({ onClose, onOpenEdit }: EditModalProps) {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [sideImages, setSideImages] = useState<(string | null)[]>(Array(4).fill(null));
  const [showBrands, setShowBrands] = useState<boolean>(false);
  const [showTags, setShowTags] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const brands = ['Marter', 'Arthur', 'Ribeiro Wild', 'Joaquim', 'Laura', 'Natanzin', 'Felipe'];
  const tags = ['Face', 'Lábios', 'Olhos', 'Kits', 'Sobrancelha', 'Unhas', 'Shine Original'];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number | null) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      if (index === null) {
        setMainImage(file);
      } else {
        setSideImages(prevImages => {
          const newImages = [...prevImages];
          newImages[index] = file;
          return newImages;
        });
      }
    }
  };

  const toggleBrands = () => {
    setShowBrands(!showBrands);
  };

  const toggleTags = () => {
    setShowTags(!showTags);
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(prevBrand => (prevBrand === brand ? null : brand));
  };

  const handleSave = () => {

    const savedData = {
      mainImage,
      sideImages,
      selectedTags,
      selectedBrand,
    };
    console.log("Saved Data:", savedData);
    onClose();
  };

  return (
    <div className="fundo-modal">
      <section className="modal">
        <div className="modal-titulo">
          <Image src={pen} alt="" width={58} className="pen-icon" />
          <h1>EDIÇÃO</h1>
        </div>

        <div className="novo-produto" onClick={onOpenEdit}>
          <Image src={goBack} alt="" width={32} height={28} className="img-novo-produto" />Voltar a edição
        </div>

        <Image src={close} alt="" width={24} className="close-icon" onClick={onClose} />

        <div className="modal-imgs">
          <div className="modal-img-container">
            <label htmlFor="main-image-input">
              <Image src={mainImage || imgPlaceholder} alt="" className="modal-img" width={352} height={243} />
            </label>
            <input
              type="file"
              id="main-image-input"
              style={{ display: 'none' }}
              onChange={(e) => handleImageChange(e, null)}
            />
          </div>

          <div className="side-imgs">
            {sideImages.map((image, index) => (
              <div key={index} className="side-img-container">
                <label htmlFor={`side-image-input-${index}`}>
                  <Image className="side-img" src={image || sideImgPlaceholder} alt="" width={60} height={60} />
                </label>
                <input
                  type="file"
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
          <input type="search" className="nome-produto" />

          <div className="modal-preco">
            <div className="preco-atual">
              <label>Preço Atual</label>
              <input type="number" min="0" />
            </div>

            <div className="preco-alterado">
              <label>Preço Alterado</label>
              <input type="number" min="0"/>
            </div>
          </div>

          <label>Este produto faz parte de um conjunto?</label>
          <div className="radio-options">
            <label>
              <input type="radio" name="conjunto" value="sim" /> Sim
            </label>
            <label>
              <input type="radio" name="conjunto" value="nao" /> Não
            </label>
          </div>

          <label className="modal-description">
            Descrição do produto
            <textarea name="Text"></textarea>
            {/* <input type="text"></input> */}
          </label>

          <div className="tag-marca">
            <button onClick={toggleTags}>
              Tag 
              {showTags ? <Image src={toggleClose} alt="" width={10} height={8} className="tag-marca-img"/> : <Image src={toggleOpen} alt="" width={10} height={8} className="tag-marca-img"/>}
            </button>
            <button onClick={toggleBrands}>
              Marca 
              {showBrands ? <Image src={toggleClose} alt="" width={10} height={8} className="tag-marca-img"/> : <Image src={toggleOpen} alt="" width={10} height={8} className="tag-marca-img"/>}
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
