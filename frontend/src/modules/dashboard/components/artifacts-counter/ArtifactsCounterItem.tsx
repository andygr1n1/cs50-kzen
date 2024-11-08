import { XButton } from '@/components-x/x-button/XButton'
import clsx from 'clsx'
import { type ReactNode } from 'react'

export const ArtifactsCounterItem: React.FC<{ count: number; icon: ReactNode }> = ({ count, icon }) => {
    return (
        <XButton
            size='small'
            variant='text'
            className={clsx('text-cText group relative flex cursor-pointer items-center justify-center opacity-70')}
            startIcon={icon}
        >
            <span className='font-bold duration-300 min-w-[25px] group-hover:text-blue-500'>{count || ''}</span>
        </XButton>
    )
}
