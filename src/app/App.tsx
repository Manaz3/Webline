import './styles/index.scss';
import { useTheme } from './provider/ThemeProvider/ui/index';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './provider/router';
import { Navbar } from '@/widgets/Navbar';
import { SideBar } from '@/widgets/SideBar';
import { Suspense } from 'react';

function App() {
  const { theme } = useTheme();

  return (
    <Suspense fallback='Loading...'>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className='content-page'>
          <SideBar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
