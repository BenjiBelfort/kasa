
import AppRouter from './AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/app.scss';


function App() {
  return (
    <div className="app-container">
      <Header />
        <div className="main-container">
          <AppRouter />
        </div>
      <Footer />
    </div>
  );
}

export default App;