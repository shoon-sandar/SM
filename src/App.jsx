import Body from './Body'
import Navbar from './Navbar'
import HeaderBody from './HeaderBody'

const App = () => {
  return (
    <>

      <div className='w-screen h-screen bgImage'>
        <div className='w-full h-full bg-black/20'>
          <Navbar />
          <HeaderBody />
        </div>

        <Body />
      </div>



    </>

  )
}

export default App
