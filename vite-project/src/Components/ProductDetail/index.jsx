import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Store } from '../../Context';


import './styles.css'

export const ProductDetail = () =>{
    const context = useContext(Store);
    return(
        <aside className={`${context.productDetailOpen ? 'flex' : 'hidden'} product-detail border border-black rounded-lg flex-col fixed right-0 bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer hover:text-red-600' 
                    onClick={()=> context.closeDetail()}/>
                </div>
            </div>
                <figure className='px-6'>
                    <img className='w-full h-full rounded-lg p-2'
                    src={context.productToShow.images} 
                    alt={context.productToShow.title}
                    />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                    <span className='font-medium text-md'>{context.productToShow.title}</span>
                    <span className='font-light text-sm'>{context.productToShow.description}</span>
                </p>
        </aside>
    )
}