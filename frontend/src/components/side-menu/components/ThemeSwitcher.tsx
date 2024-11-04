import { IconMoon } from '@/assets/icons/IconMoon'
import { IconSunny } from '@/assets/icons/IconSunny'
import { useRoot$ } from '@/modules/app/mst/StoreProvider'
import { observer } from 'mobx-react-lite'

export const ThemeSwitcher: React.FC = observer(() => {
    const { isDarkTheme, onChangeTheme } = useRoot$()

    return (
        <>
            <div
                className={`relative flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-transparent`}
                onClick={onChangeTheme}
            >
                {!isDarkTheme && (
                    <IconMoon
                        width={25}
                        height={25}
                        className='text-cText opacity-70  duration-300 hover:text-blue-700 hover:opacity-100'
                    />
                )}
                {isDarkTheme && (
                    <IconSunny
                        width={25}
                        height={25}
                        className='text-cText opacity-70  duration-300 hover:text-blue-700 hover:opacity-100'
                    />
                )}
            </div>
        </>
    )
})
