import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Features from './components/Features.jsx';
import PricingMoney from './components/PricingMoney.jsx';
import HowWorks from './components/HowWorks.jsx';
import Testimonial from './components/Testimonial.jsx';
import Pricing from './components/Pricing.jsx';
import Blog from './components/Blog.jsx';
import Download from './components/Download.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';



function App() {
  return (
    <div className='bg-color-primary'>
      <Header />
      <Home />
      <Features />
      <PricingMoney />
      <HowWorks />
      <Testimonial />
      <Pricing />
      <Blog />
      <Download />
      <Contact />
      <Footer />

    </div>

  );
}

export default App;
