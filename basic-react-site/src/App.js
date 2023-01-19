import './App.css';
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
