import { Header } from './layout/Header/Header.tsx';
import { Footer } from './layout/Footer/Footer.tsx';
import { AppRouter } from './lib/providers/AppRouter/AppRouter.tsx';

function App() {
  return (
    <div className={'app'}>
      <Header/>
      <div className={'content'}>
        <AppRouter/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
