import { useContext } from "react"
import { Store } from '../../Context';
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";
function Home() {
    const context = useContext(Store)
  
    return (
      <Layout>
        <div className='flex justify-center items-center relative w-80 mb-4'>
          <h1 className='font-medium text-xl'>Exclusive Products</h1>
        </div>
        <div>
          <input 
          className='rounded-lg border border-black w-80 mb-4 p-2 focus:outline-none'
          onChange={(e)=> context.setSearchByTitle(e.target.value)}
          type='text'
          placeholder='Search products'/>
        </div>
        <div className='grid gap-2 grid-cols-3 pr-16 mt-2 max-w-screen-lg'>
        {
          context.products?.map((product)=>(
            <Card key={product.id} 
            data={product} />
          ))
        }   
        </div>
        <ProductDetail />
      </Layout>
    )
  }
  
  export default Home