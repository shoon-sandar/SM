import s1 from "./assets/Image/services/service1/breadLoaf.jpg"
import s2 from "./assets/Image/services/service1/butter.webp"
import s3 from "./assets/Image/services/service1/freshBaguette.jpg"
import s4 from "./assets/Image/services/service1/mozzarella.webp"

import s5 from "./assets/Image/services/service2/cake2.jpeg"
import s6 from "./assets/Image/services/service2/cake1.webp"
import s7 from "./assets/Image/services/service2/cake3.jpg"
import s8 from "./assets/Image/services/service2/cake4.webp"

import s9 from "./assets/Image/services/service3/cakeAndFlower1.jpg"
import s10 from "./assets/Image/services/service3/cakeAndFlower2.webp"
import s11 from "./assets/Image/services/service3/cakeAndFlower3.webp"
import s12 from "./assets/Image/services/service3/flower1.webp"

import Example from "./Example"
import CardService1 from "./CardService1"
import CardService2 from "./CardService2"
import CardService3 from "./CardService3"
const Body = () => {

  const imgArrService1 = [s1, s2, s3, s4]
  const imgArrService2 = [s5, s6, s7, s8]
  const imgArrService3 = [s9, s10, s11, s12]
  return (
    <div className='w-screen h-screen'>
      <div className='border-l-4 border-l-rod text-[1.5rem] font-light pl-4  ml-4 mt-4'>
        Your Sweet Options
      </div>

      <div className='w-full p-8 flex justify-between gap-2 ' >

        <CardService1
          imgArr={imgArrService1}
        />
        <CardService2
          imgArr={imgArrService2}
        />
        <CardService3
          imgArr={imgArrService3}
        />

      </div>
    </div>
  )
}

export default Body
