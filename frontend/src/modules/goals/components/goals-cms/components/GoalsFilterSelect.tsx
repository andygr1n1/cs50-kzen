import { observer } from 'mobx-react-lite'

import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { useState } from 'react'
import { GoalsFiltersSelectButton } from './GoalsFiltersSelectButton'
import { XButton } from '@/components-x/x-button/XButton'
import { useNavigate } from 'react-router-dom'
import { setGoalsFilterParam } from '@/modules/goals/helpers/goalsFilterParamLocalForage'
import { IconExpired } from '@/assets/icons/IconExpired'
import { IconFocus } from '@/assets/icons/IconFocus'
import { IconCompleted } from '@/assets/icons/IconCompleted'
import { type IGoalStatus } from '@/modules/goals/shared-service'
import { artifactStatus } from '@/services/types'
import { IconAll } from '@/assets/icons/IconAll'
import { IconFavorite } from '@/assets/icons/IconFavorite'
import { IconRitual } from '@/assets/icons/IconRitual'
import { IconDeleteTemp } from '@/assets/icons/IconDeleteTemp'

export const GoalsFilterSelect: React.FC = observer(() => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const onClose = (filter: IGoalStatus) => {
        setGoalsFilterParam(filter)
        navigate({ pathname: '/goals/filtered-goals', search: `?filter=${filter}` }, { state: { filter } })
        setOpen(false)
    }

    return (
        <XDropdown
            onOpenChange={(x) => {
                setOpen(x)
            }}
            trigger={['hover']}
            open={open}
            dropdownRender={() => <DropdownRender onClose={onClose} />}
            placement='bottomRight'
            overlayClassName='!z-[55]'
        >
            <div>
                <GoalsFiltersSelectButton />
            </div>
        </XDropdown>
    )
})

const DropdownRender: React.FC<{ onClose: (filter: IGoalStatus) => void }> = observer(({ onClose }) => {
    return (
        <XMenuDropdown>
            <XMenuItem
                onClick={() => {
                    onClose('active')
                }}
            >
                <XButton
                    variant='text'
                    size='small'
                    startIcon={<IconFocus className='text-blue-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-blue-500'>Active</span>
                </XButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose('favorite')
                }}
            >
                <XButton
                    variant='text'
                    size='small'
                    startIcon={<IconFavorite className='text-rose-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-rose-500'>Favorite</span>
                </XButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose('ritual')
                }}
            >
                <XButton
                    variant='text'
                    size='small'
                    startIcon={<IconRitual className='text-teal-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-teal-500'>Ritualized</span>
                </XButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose('expired')
                }}
            >
                <XButton
                    variant='text'
                    size='small'
                    startIcon={<IconExpired className='text-amber-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-amber-500'>Expired</span>
                </XButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose('completed')
                }}
            >
                <XButton
                    variant='text'
                    size='small'
                    startIcon={<IconCompleted className='text-violet-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-violet-500'>Completed</span>
                </XButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose('deleted')
                }}
            >
                <XButton
                    variant='text'
                    size='small'
                    startIcon={<IconDeleteTemp className='text-slate-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-slate-500'>Deleted</span>
                </XButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose(artifactStatus.all)
                }}
            >
                <XButton
                    variant='text'
                    size='small'
                    startIcon={<IconAll className='text-sky-400' width={26} height={26} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-sky-400'>All</span>
                </XButton>
            </XMenuItem>
        </XMenuDropdown>
    )
})
