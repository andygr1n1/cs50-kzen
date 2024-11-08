import { DayPicker, useNavigation } from 'react-day-picker'
import type { XDatePickerProps } from './XDatePicker'
import { type Dispatch, type SetStateAction, useEffect } from 'react'
import { XButton } from '@/components-x/x-button/XButton'
import { XTooltip } from '../x-tooltip/XTooltip'
import clsx from 'clsx'
import styles from './XCalendar.module.scss'
import { IconChevronLeft } from '@/assets/icons/IconChevronLeft'
import { IconChevronRight } from '@/assets/icons/IconChevronRight'
import { IconEraser } from '@/assets/icons/IconEraser'
// possible to redesign dropdown with  useNavigation  from 'react-day-picker'

type IXCalendarProps = {
    bufferSelect: Date | undefined
    setBufferSelect: Dispatch<SetStateAction<Date | undefined>>
} & XDatePickerProps
export const XCalendar: React.FC<IXCalendarProps> = (props) => {
    function onSelect(day: Date | undefined) {
        props.setBufferSelect(day)
    }

    return (
        <div>
            <DayPicker
                {...props}
                classNames={{
                    caption_label: 'mr-2',
                    day: clsx('h-9 w-9 p-0 font-normal rounded-md', styles['x-calendar-day']),
                    day_today: 'text-red-500',
                }}
                components={{
                    IconLeft: () => <IconChevronLeft width={24} height={24} />,
                    IconRight: () => <IconChevronRight width={24} height={24} />,
                }}
                onSelect={onSelect}
                selected={props.bufferSelect}
                footer={<DayPickerFooter {...props} />}
            />
        </div>
    )
}

const DayPickerFooter: React.FC<IXCalendarProps> = (props) => {
    const { goToMonth } = useNavigation()
    function onSelect(day: Date | undefined) {
        props.setBufferSelect(day)
    }

    useEffect(() => {
        if (props.selected) {
            goToMonth(props.selected)
            onSelect(props.selected)
        }
    }, [])

    return (
        <div className='flex items-center justify-start gap-2'>
            <XButton
                id='resetDate'
                variant='text'
                className='z-10'
                onClick={() => onSelect(undefined)}
                startIcon={
                    <IconEraser
                        width={24}
                        height={24}
                        className='cursor-pointer p-2 duration-300 hover:text-blue-600'
                    />
                }
            />
            <XTooltip anchorSelect='#resetDate'>Reset</XTooltip>

            {props.showToday && (
                <XButton
                    id='showToday'
                    variant='text'
                    onClick={() => {
                        onSelect(new Date(Date.now()))
                        goToMonth(new Date(Date.now()))
                    }}
                >
                    Today
                </XButton>
            )}
            <XTooltip anchorSelect='#showToday'>Navigate to current date</XTooltip>
        </div>
    )
}
