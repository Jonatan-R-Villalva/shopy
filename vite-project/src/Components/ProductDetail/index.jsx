import { XMarkIcon } from '@heroicons/react/24/solid'

import './styles.css'

export const ProductDetail = () =>{
    return(
        <aside className='product-detail border border-black rounded-lg flex flex-col fixed right-0 bg-white'>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black' />
                </div>
            </div>
        </aside>
    )
}