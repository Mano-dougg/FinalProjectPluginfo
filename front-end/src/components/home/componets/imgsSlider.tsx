
import Image from 'next/image';
import img1 from "../assets/Component_17.png"
import img2 from "../assets/Component_18.png"
import img3 from "../assets/Component_19.png"
import img4 from "../assets/Component_20.png"


export function SliderImg1() {
  return (
    <Image
      src={img1}
      
      alt="Picture of the author"
    />
  );
}

export function SliderImg2() {
  return (
    <Image
      src={img2}
      
      alt="Picture of the author"
    />
  );
}

export function SliderImg3() {
  return (
    <Image
      src={img3}
      
      alt="Picture of the author"
    />
  );
}
export function SliderImg4(){
    return (
        <Image
          src={img3}
          
          alt="Picture of the author"
        />
      );
    }