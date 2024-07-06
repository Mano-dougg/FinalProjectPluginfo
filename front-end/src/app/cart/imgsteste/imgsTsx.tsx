import Image from 'next/image'; 
import imgteste from './Rectangle 133.png'; 

export default function ImgTeste() {
  return (
    <Image
      src={imgteste} 
      width={200}
      height={155}
      alt="Picture of the author"
    />
  );
}
