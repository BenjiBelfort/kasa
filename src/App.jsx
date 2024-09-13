
import AppRouter from './AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <div className="main-contener">
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;