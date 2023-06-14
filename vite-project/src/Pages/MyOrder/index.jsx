import { useContext } from 'react'
import {Store} from '../../Context'
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Layout } from "../../Components/Layout"
import { OrderCard } from '../../Components/OrderCard';

function MyOrder() {
  const context = useContext(Store);
    return (
      <Layout>
        <div className='flex justify-center items-center relative w-80 mb-6'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
          </Link>
          <h1>my order</h1>
        </div>
        <div className='flex flex-col ml-6 w-80'>
            {
              context.order?.slice(-1)[0].products.map(prod =>(
                <OrderCard
                  key= {prod.id}
                  id= {prod.id}
                  title= {prod.title}
                  imgUrl= {prod.images}
                  price= {prod.price}
                />
                ))
            }
        </div>  
      </Layout>
    )
  }
  
  export default MyOrder