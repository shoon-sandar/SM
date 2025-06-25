const CardGroup1 = ({ imgArr }) => {
  //imgArr [s1,s2,s3,s4]

  return (
    <div className='transition-all duration-150  w-[400px] h-[420px] shadow-black/20 shadow-2xl bg-black/10 rounded-[45px]   hover:shadow-md'>

      <div className='flex items-center gap-2 pl-5 pt-2'>
        <div className='w-[6px] h-[6px] rounded-full bg-rod'>

        </div>
        <div className='font-light text-[1rem]'>
          Gourmet Essentials
        </div>

      </div>

      <div className='bg-black/20 w-full h-[80%] rounded-2xl mt-2 grid grid-cols-2 grid-rows-2 gap-2 p-2'>

        {
          imgArr.map((img, index) => (
            <div className="w-full h-full relative mainServiceImage">
              <img key={index} src={img.image} alt="" className='w-full h-full rounded-xl cursor-pointer' />
              <div className="bg-black/70 rounded-xl w-full h-full absolute inset-0 childServiceImage text-white flex justify-center items-center">

                {img.title}

              </div>
            </div>
          ))
        }

      </div>

      <div className="w-full flex justify-center mt-1">
        <button className='text-center  w-[200px] h-[40px] border-2 border-rod px-6 py-1 rounded-full bg-cinnamon/80 text-white hover:bg-cinnamon/100 active:bg-cinnamon/50 cursor-pointer'>
          View Collection
        </button>
      </div>


    </div>
  );
}

export default CardGroup1;
