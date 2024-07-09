'use client'
import Image from 'next/image'
import arthur from './arthur.svg'
import joaquim from './Joaquim.svg'
import laura from './Laura.svg'
import component17 from './Component 17.svg'
import component18 from './Component 18.svg'
import component19 from './Component 17.svg'
import component20 from './Component 20.svg'
import kit from "./Produtos bombando.svg"
 


export  function Marca1() {
  return (
    <Image
      src={arthur}
      width={300}
      height={300}
      alt="Picture of the author"
    />
  )
}
 
export function Marca2() {
  return (
    <Image
      src={joaquim}
      width={300}
      height={300}
      alt="Picture of the author"
    />
  )
}


export function Marca3() {
  return (
    <Image
      src={laura}
      width={300}
      height={300}
      alt="Picture of the author"
    />
  )
}

export function Component17() {
  return (
    <Image
      src={component17}
     
      alt="Picture of the author"
    />
  )
}
export function Component19() {
  return (
    <Image
      src={component19}
     
      alt="Picture of the author"
    />
  )
}
export function Component18() {
  return (
    <Image
      src={component18}
     
      alt="Picture of the author"
    />
  )
}
export function Component20() {
  return (
    <Image
      src={component20}
     
      alt="Picture of the author"
    />
  )
}
export function KitImg() {
  return (
    <Image
      src={kit}
     
      alt="Picture of the author"
    />
  )
}
