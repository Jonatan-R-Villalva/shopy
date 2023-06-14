import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Store } from '../../Context';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../Utils';


import './styles.css'

export const CheckoutSideMenu = () =>{
    const context = useContext(Store);
    const handleDelete = (id)=>{
        const filteredProducts = context.cartProducts.filter(prod => prod.id !== id)
        context.setCartProducts(filteredProducts)
    }
    const handleCheckout = ()=>{
        const orderToAdd = {
            date: '01.06.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }
    return(
        <aside className={`${context.checkoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu border border-black rounded-lg flex-col fixed right-0 bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer hover:text-red-600' 
                    onClick={()=> context.closeCheckout()}/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(prod =>(
                    <OrderCard
                    key= {prod.id}
                    id= {prod.id}
                    title= {prod.title}
                    imgUrl= {prod.images}
                    price= {prod.price}
                    handleDelete= {handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total price:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button className='bg-black py-3 w-full text-white rounded-lg' onClick={()=> handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}