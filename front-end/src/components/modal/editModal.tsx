import { useState, useEffect, useActionState } from "react";
import Image from "next/image";
import close from "@/assets/imgs/windoow-close-black.png";
import sair from "@/assets/imgs/sair.png"
import pen from "@/assets/imgs/pen-solid.png";
import novoProduto from "@/assets/imgs/novo-produto.png";
import imgPlaceholder from "@/assets/imgs/imagem-grande-placeholder.png";
import sideImgPlaceholder from "@/assets/imgs/side-img-placeholder.png";
import toggleOpen from "@/assets/imgs/toggle-open.png";
import toggleClose from "@/assets/imgs/toggle-close.png";
import "./modal.css";
import { fetchAllProductsByName } from "@/actions/getProduct";
import { updateProduct, deleteProduct } from "@/actions/updateProducts";

interface EditModalProps {
  onClose: () => void;
  onOpenCreate: () => void;
}

interface ImagePath {
  id: number;
  url: string;
  produtoId: number;
}

interface Produto {
  id: number;
  nome: string;
  imagePath: ImagePath[];
  marca: string;
  preco: number;
  preco_alterado: number;
  promocao: number;
  descricao: string;
  quantidade_carrinho: number;
  face: boolean;
  labios: boolean;
  olhos: boolean;
  kits: boolean;
  sombrancelha: boolean;
  unhas: boolean;
  original: boolean;
}

export default function EditModal({ onClose, onOpenCreate }: EditModalProps) {

  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const [imagesToSave, setImagesToSave] = useState<(File | undefined)[]>(Array(5).fill(undefined));

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);

  const [id, setId] = useState<number | null>(null);
  const [nome, setNome] = useState<string>('');
  const [preco, setPreco] = useState<number>(0);
  const [precoAlterado, setPrecoAlterado] = useState<number>(0);
  const [descricao, setDescricao] = useState<string>('');
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState<number>(0);

  const [showBrands, setShowBrands] = useState<boolean>(false);
  const [showTags, setShowTags] = useState<boolean>(false);

  const [searchOpen, setSearchOpen ] = useState <boolean> (true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Produto[]>([]);

  const brands = ['Marter', 'Arthur', 'Ribeiro Wild', 'Joaquim', 'Laura', 'Natanzin', 'Felipe'];
  const tags = ['Face', 'Lábios', 'Olhos', 'Kits', 'Sobrancelha', 'Unhas', 'Shine Original'];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileURL = URL.createObjectURL(e.target.files[0]);

      setImagesToSave((prevImages) => {
        const newImages = [...prevImages];
        newImages[index] = file;
        return newImages;
      });

      setImagesUrl(prevImages => {
        const newImages = [...prevImages];
        newImages[index] = fileURL;
        return newImages;
      });
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

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value) {
      const results = await fetchAllProductsByName(value);
      if (results) {
        setSearchResults(results);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleSearch = () =>{

    setSearchOpen(true);

    setImagesToSave(Array(5).fill(undefined));
    setImagesUrl([]);
    setSelectedTags([]);
    setSelectedBrand(null);
    setSelectedProduct(null);
    setId(null);
    setNome('');
    setPreco(0);
    setPrecoAlterado(0);
    setDescricao('');
    setQuantidadeCarrinho(0);
    setSearchQuery("");


  }

  const handleProductSelect = (produto: Produto) => {
    setSearchOpen(false);
    setSearchResults([]);

    setSelectedProduct(produto);
    setId(produto.id);
    setNome(produto.nome);
    setPreco(produto.preco);
    setPrecoAlterado(produto.preco_alterado);
    setDescricao(produto.descricao);
    setSelectedBrand(produto.marca);
    setQuantidadeCarrinho(produto.quantidade_carrinho);

    const completeImageUrls = produto.imagePath.map(image => {
      const imageUrl = image.url; 
      const completeUrl = "https://shine-original.s3.sa-east-1.amazonaws.com/" + imageUrl; 
      return completeUrl;
    });
    setImagesUrl(completeImageUrls);

    const newtags = [];
    produto?.face && newtags.push('Face');
    produto?.labios && newtags.push('Lábios');
    produto?.olhos && newtags.push('Olhos');
    produto?.kits && newtags.push('Kits');
    produto?.sombrancelha && newtags.push('Sobrancelha');
    produto?.unhas && newtags.push('Unhas');
    produto?.original && newtags.push('Shine Original');
    setSelectedTags(newtags);
  };

  const handleSave = async () => {
    if (id && selectedProduct) {
      const produto: Produto = {
        id,
        nome,
        marca: selectedBrand || '',
        preco,
        preco_alterado: precoAlterado,
        promocao: ((preco - precoAlterado) / preco),
        descricao,
        quantidade_carrinho: quantidadeCarrinho,
        face: selectedTags.includes('Face'),
        labios: selectedTags.includes('Lábios'),
        olhos: selectedTags.includes('Olhos'),
        kits: selectedTags.includes('Kits'),
        sombrancelha: selectedTags.includes('Sobrancelha'),
        unhas: selectedTags.includes('Unhas'),
        original: selectedTags.includes('Shine Original'),
        imagePath: selectedProduct.imagePath,
      };

      const imagesToEdit = selectedProduct.imagePath.map(({ url }) => url);
      const imagesToDelete = [];

      for (let i = 0; i < imagesToSave.length; i++) {
        if ((imagesToSave[i] instanceof File) && imagesToEdit[i]) {
          imagesToDelete.push(imagesToEdit[i]);
        }
      }

      try {
        await updateProduct(produto, imagesToDelete, imagesToSave.filter(image => image !== undefined) as File[]);
        alert("Produto salvo com sucesso!");
        onClose();
        window.location.reload();
      } catch (error) {
        alert("Erro ao salvar o produto:");
        console.error(error);
      }
    } else {
      alert("Primeiro selecione um produto");
    }
  };

  const handleDelete = async () => {
    if (id && selectedProduct) {
      const idProduto = selectedProduct.id;
      try {
        await deleteProduct(idProduto);
        alert("Produto deletado com sucesso!");
        onClose();
        window.location.reload();
      } catch (error) {
        alert("Erro ao deletar o produto:");
        console.error(error);
      }
    } else {
      alert("Primeiro selecione um produto");
    }
  };

  return (
    <div className="fundo-modal">
      <section className="modal">
        <div className="modal-titulo">
          <Image src={pen} alt="" width={58} className="pen-icon" />
          <h1>EDIÇÃO</h1>
        </div>

        <div className="novo-produto" onClick={onOpenCreate}>
          <Image src={novoProduto} alt="" width={32} className="img-novo-produto" />Novo item
        </div>

        <Image src={close} alt="" width={24} className="close-icon" onClick={onClose} />

        <div className="modal-imgs">

          <div className="modal-img-container">
            <label htmlFor="main-image-input">
              <Image src={selectedProduct ? imagesUrl[0] : imgPlaceholder} alt="" className="modal-img" width={352} height={243} />
            </label>
            <input
              type="file"
              id="main-image-input"
              style={{ display: 'none' }}
              onChange={(e) => handleImageChange(e, 0)}
            />
          </div>

          <div className="side-imgs">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i + 1} className="side-img-container">
                <label htmlFor={`side-image-input-${i + 1}`}>
                  <Image
                    className="side-img"
                    src={imagesUrl[i + 1] ? imagesUrl[i + 1] : sideImgPlaceholder}
                    alt=""
                    width={60}
                    height={60}
                  />
                </label>
                <input
                  type="file"
                  id={`side-image-input-${i + 1}`}
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageChange(e, i + 1)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="modal-info">

          {!searchOpen && 
          <div className="editando-agora"> Você esta editando: {selectedProduct?.nome} <Image src={sair} alt="sair" width={15} onClick={() => handleSearch()}/></div>}
          
          <label>{searchOpen? "Pesquisar por produto": "Nome do produto"}</label>
          <div className="search-input">
              <input
              type={searchOpen? "search" : "text"}
              className="nome-produto"
              placeholder={searchOpen? "Digite o nome do produto" : ""}
              value={searchOpen? searchQuery : nome}
              onChange={searchOpen? handleSearchChange :  (e) => setNome(e.target.value)}
              />

              {searchResults.length > 0 && (
                <div className="search-results">
                  {searchResults.map(produto => (
                    <div key={produto.id} onClick={() => handleProductSelect(produto)}>
                      {produto.nome}
                    </div>
                  ))}
                </div>
              )}
        </div>

          <div className="modal-preco">
            <div className="preco-atual">
              <label>Preço Antigo (R$)</label>
              <input
                type="number"
                min="0"
                value={preco}
                onChange={(e) => setPreco(Number(e.target.value))}
              />
            </div>

            <div className="preco-alterado">
              <label>Preço Atual (R$)</label>
              <input
                type="number"
                min="0"
                value={precoAlterado}
                onChange={(e) => setPrecoAlterado(Number(e.target.value))}
              />
            </div>
          </div>

          <label className="modal-description">
            Descrição do produto
            <textarea
              name="Text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
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
                      onChange={() => { }}
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
          <button onClick={handleDelete}>EXCLUIR</button>
        </div>
      </section>
    </div>
  );
}
