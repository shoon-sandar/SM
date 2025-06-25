import s1 from "./assets/Image/services/service1/breadLoaf.jpg"
import s2 from "./assets/Image/services/service1/butter.webp"
import s3 from "./assets/Image/services/service1/freshBaguette.jpg"
import s4 from "./assets/Image/services/service1/mozzarella.webp"
import s5 from "./assets/Image/services/service-group-2/cake2.jpeg"
import s6 from "./assets/Image/services/service-group-2/cake1.webp"
import s7 from "./assets/Image/services/service-group-2/cake3.jpg"
import s8 from "./assets/Image/services/service-group-2/cake4.webp"
import s9 from "./assets/Image/services/service-group-3/cakeAndFlower1.jpg"
import s10 from "./assets/Image/services/service-group-3/cakeAndFlower2.webp"
import s11 from "./assets/Image/services/service-group-3/cakeAndFlower3.webp"
import s12 from "./assets/Image/services/service-group-3/flower1.webp"
import CardGroup1 from './CardGroup1'
import CardGroup2 from "./CardGroup2"
import CardGroup3 from "./CardGroup3"
import FeatureItems from "./FeatureItems"
import f1 from "./assets/Image/featuredItems/strawCream.jpg"
import f2 from "./assets/Image/featuredItems/f5.jpg"
import f3 from "./assets/Image/featuredItems/f2.jpg"
import f4 from "./assets/Image/featuredItems/f3.jpg"
import f5 from "./assets/Image/featuredItems/f4.jpg"
import { Features } from "tailwindcss"
const Body = () => {
  const features=[
    {
      image:f1,
      title:"Japanese Milk Bread Roll",
      rating:4,
    },
    {
      image:f2,
      title:"Japanese Strawberry Cupcake",
      rating:5,
    },
    {
      image:f3,
      title:"Japanese Strawberry Tiramisu",
      rating:4,
    },
    {
      image:f4,
      title:"Dark Chocolate Strawberry ",
      rating:5,
    },
    {
      image:f5,
       title:"Mangosteen Cupcake",
      rating:5,
    },
  ]
  const group1Services=[
    {
      image:s1,
      title:"Golden Crust"
    },
    {
      image:s2,
      title:"Creme de lait"
    },
    {
      image:s3,
      title:"La Miche"
    },
    {
      image:s4,
      title:"Aged Elegance"
    },
  ]
  const group2Service=[
    {
      image:s5,
      title:"Coca Royale"
    },
    {
      image:s6,
      title:"Frosted Porcelain"
    },
    {
      image:s7,
      title:"Pink Chantilly"
    },
    {
      image:s8,
      title:"Cherry Crescendo"
    },
  ]
  const group3Service=[
    {
      image:s9,
      title:"Peony & Pastry"
    },
    {
      image:s10,
      title:"Darden Romance"
    },
    {
      image:s11,
      title:"Lavender Lace"
    },
    {
      image:s12,
      title:"Chroma Bloom"
    },
  ]
  return (
  
    <div className='w-screen h-screen'>
      <div className='border-l-4 border-l-rod text-[1.5rem] font-light pl-4  ml-4 mt-4'>
        Your Sweet Options
      </div>

      <div className='w-full p-8 flex justify-between gap-2 ' >

        <CardGroup1
          imgArr={group1Services}
        />

         <CardGroup2
          imgArr={group2Service}
        />

         <CardGroup3
          imgArr={group3Service}
        />

        </div>
        <div>
         
        </div>
        
       <FeatureItems
       fitems={features}
       />






      
    </div>
  
  )
}

export default Body