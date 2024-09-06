import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SideBar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import React from 'react';

  
interface SideBarProps {
  className?: string
}
export const SideBar = ({className}: SideBarProps) => {

const [collapsed, setCollapsed] = useState(false);

const onToggle = () => {
  setCollapsed((prev) => !prev)
}
  return (
    <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <LangSwitcher />
          <ThemeSwitcher />
        </React.Suspense>
      </div>
    </div>
  );
  }
  
export default SideBar;
