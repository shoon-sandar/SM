import s1 from "./assets/Image/services/service1/breadLoaf.jpg"
import s2 from "./assets/Image/services/service1/butter.webp"
import s3 from "./assets/Image/services/service1/freshBaguette.jpg"
import s4 from "./assets/Image/services/service1/mozzarella.webp"

import Example from "./Example"

import Card from './Card'
const Body = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='border-l-4 border-l-rod text-[1.5rem] font-light pl-4  ml-4 mt-4'>
        Your Sweet Options
      </div>

      <div className='w-full p-8 flex justify-between gap-2 ' >

        <Card
          s1={s1}
          s2={s2}
          s3={s3}
          s4={s4}
        />

        <Example
          p1={s1}
          p2={s2}
          p3={s3}
          p4={s4}
        />

        

      </div>
    </div>
  )
}

export default Body
