const Card = ({ s1, s2, s3, s4 }) => {
  return (
    <div className='transition-all duration-150  w-[400px] h-[350px] shadow-black/20 shadow-2xl bg-black/10 rounded-[45px]   hover:shadow-md'>

      <div className='flex items-center gap-2 pl-5 pt-2'>
        <div className='w-[6px] h-[6px] rounded-full bg-rod'>

        </div>
        <div className='font-light text-[1.2rem]'>
          Gourmet Essentials
        </div>

      </div>

      <div className='bg-black/20 w-full h-[75%] rounded-2xl mt-2 grid grid-cols-2 grid-rows-2 gap-2 p-2'>
        <img src={s1} alt="" className='w-full h-full rounded-xl ' />
        <img src={s2} alt="" className='w-full h-full rounded-xl' />
        <img src={s3} alt="" className='w-full h-full rounded-xl' />
        <img src={s4} alt="" className='w-full h-full rounded-xl' />

      </div>

      <button className='ml-20 mt-5 text-center  w-[200px] h-[40px] border-2 border-rod px-6 py-1 rounded-full bg-cinnamon/80 text-white hover:bg-cinnamon/100 active:bg-cinnamon/50 cursor-pointer'>View Collection</button>

    </div>
  );
}

export default Card;
