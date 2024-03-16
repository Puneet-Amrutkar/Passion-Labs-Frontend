// import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Faqs from './components/Faqs';
import Mailbox from './components/Mailbox';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Faqs />
      <Mailbox />
      <Footer />
    </div>
  );
}

export default App;