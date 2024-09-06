import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/provider/ThemeProvider/ui/index.ts'
import './shared/i18n/i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
