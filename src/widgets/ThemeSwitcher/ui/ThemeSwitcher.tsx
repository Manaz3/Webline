/// <reference types="vite-plugin-svgr/client" />
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/provider/ThemeProvider/ui';
import LightIcon from '@/shared/assets/icons/theme-light.svg?react'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react'
import Button from '@/shared/ui/Button/Button';


interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme();

  return (
           <Button className={classNames('', {}, [className])} onClick={toggleTheme}>
                {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
            </Button> 
    
  );
  }
    
export default ThemeSwitcher;