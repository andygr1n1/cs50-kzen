import { IconInfiniteLoading } from '@/assets/icons/IconInfiniteLoading'
import { useActivation } from './hooks/useActivation'

const Activation: React.FC = () => {
    useActivation()

    return (
        <div className='px-5 text-sm font-inter relative h-full'>
            <IconInfiniteLoading className='absolute-center text-blue-500 w-10 h-10 animate-pulse' />
        </div>
    )
}

export default Activation
