
import AppRouter from './AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';




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