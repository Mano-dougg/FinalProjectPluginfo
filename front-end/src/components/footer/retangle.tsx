import Image from 'next/image'
import mapa from '@/assets/imgs/Rectangle 237.svg'
export default function Mapa() {
  return (
    <div>
      <Image
        src={mapa}
        width={430}
        height={257}
        alt="Picture of the author"
      />
    </div>
  )
}