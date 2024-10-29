import './styles/index.scss';
import { AppRouter } from './provider/router';
import { Suspense } from 'react';
import { useTheme } from './provider/ThemeProvider/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { SideBar } from '@/widgets/SideBar';

//npx vite-bundle-visualizer для запуска анализатора бандла

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
