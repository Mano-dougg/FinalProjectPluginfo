import Image from 'next/image'
 
import home from "./home-solid.svg"
import shop from "./shopping-bag-solid.svg"
import carr from "./shopping-cart-solid.svg"
import user from "./user-solid.svg"
export function IconHome() {
  return (
    <div>
      <Image
        src={home}
        width={24}
        height={24}
        alt="Picture of the author"
      />
    </div>
  )
}
export function IconShop() {
    return (
      <div>
        <Image
          src={shop}
          width={24}
          height={24}
          alt="Picture of the author"
        />
      </div>
    )
  }

  export function IconCart() {
    return (
      <div>
        <Image
          src={carr}
          width={24}
          height={24}
          alt="Picture of the author"
        />
      </div>
    )
  }

  export function IconUser() {
    return (
      <div>
        <Image
          src={user}
          width={24}
          height={24}
          alt="Picture of the author"
        />
      </div>
    )
  }