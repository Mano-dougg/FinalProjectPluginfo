// Importando a biblioteca Image do next/image
import Image from 'next/image';

// Importando as imagens
import search from './imgs/sistrix.png';
import store from './imgs/shopping-cart-solid.png';

// Definindo o componente Search
export function Search() {
  return (
    <Image
      src={search}
      width={32}
      height={32}
      alt="search"
    />
  );
}

export function Store() {
  return (
    <Image
      src={store}
      width={42}
      height={42}
      alt="store"
    />
  );
}
