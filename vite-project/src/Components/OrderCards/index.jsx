import { XMarkIcon } from '@heroicons/react/24/solid'

export const OrderCards = props =>{
    const { id , title , imgUrl , price , handleDelete } = props
    return(
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='flex w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imgUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <XMarkIcon onClick={()=>handleDelete(id)} className='h-6 w-6 text-black cursor-pointer hover:text-red-600'/>
            </div>
        </div>
    )
}