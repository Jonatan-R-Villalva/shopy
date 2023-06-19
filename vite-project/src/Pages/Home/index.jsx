import { useContext } from "react"
import { Store } from '../../Context';
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";
function Home() {
    const context = useContext(Store)
    const renderView = ()=>{
      if(context.searchByTitle?.length > 0){
        if(context.filteredProducts?.length > 0){
          return (
            context.filteredProducts?.map((product)=>(
              <Card key={product.id} 
              data={product} />
            )) 
          )  
        }else{
          return(
            // eslint-disable-next-line react/no-unescaped-entities
            <p className="text-center uppercase text-xl">We don't have anything</p>
          )
        }
      }else{
        return(      
          context.products?.map((product)=>(
            <Card key={product.id} 
            data={product} />
          )) 
      )        
      }
    }
  
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
        {renderView()}   
        </div>
        <ProductDetail />
      </Layout>
    )
  }
  
  export default Home