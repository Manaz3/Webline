import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SideBar.module.scss'
import { useState } from 'react';
import React from 'react';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

interface SideBarProps {
  className?: string
}
export const SideBar = ({className}: SideBarProps) => {

const [collapsed, setCollapsed] = useState(false);

const onToggle = () => {
  setCollapsed((prev) => !prev)
}
  return (
    <div 
        data-testid='sidebar'
        className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
        <button 
            data-testid='sidebar-toggle'
            onClick={onToggle}
            >
              toggle
            </button>
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
