/* eslint-disable @typescript-eslint/no-unused-vars */
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import Applink, { AppLinkTheme } from "@/shared/ui/AppLink/AppLink";



interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <Applink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
          Главная
        </Applink>
        <Applink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.mainLink}>
          О сайте
        </Applink>
        <Applink theme={AppLinkTheme.PRIMARY} to={'/methods'} className={cls.mainLink}>
          Методы массивов
        </Applink>
      </div>
    </div>
  );
  }
    
export default Navbar;








