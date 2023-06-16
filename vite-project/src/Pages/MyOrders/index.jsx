import { useContext } from 'react'
import {Store} from '../../Context'
import { Link } from 'react-router-dom'
import { Layout } from "../../Components/Layout"
import { OrderCards } from "../../Components/OrderCards"

function MyOrders() {
  const context = useContext(Store);
    return (
      <Layout>
        <div className='flex justify-center items-center relative w-80'>
          <h1>my orders</h1>
        </div>
        {
          context.order.map((order , index)=>(
            <Link key={index} to={`/my-orders/${index}`}>
              <OrderCards 
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              />  
            </Link>
          ))
        }
      </Layout>
    )
  }
  
  export default MyOrders