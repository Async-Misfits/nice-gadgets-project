import { Outlet } from 'react-router';
import { Header } from '../components/layout/Header/Header';
import { Footer } from '../components/layout/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
