import { observer } from 'mobx-react-lite'
import { OpenSideMenu } from './OpenSideMenu.tsx'
import { type PropsWithChildren } from 'react'
import clsx from 'clsx'

export const TopBar: React.FC<PropsWithChildren> = observer(({ children }) => {
    return (
        <div className='relative flex h-[65px] min-h-[65px] w-full items-center justify-end gap-2 font-bold xl:flex-row '>
            <OpenSideMenu />
            <div className={clsx('flex w-full justify-center')}>{children}</div>
        </div>
    )
})
