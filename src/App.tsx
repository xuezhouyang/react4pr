import { Hero } from './sections/Hero';
import { Mission } from './sections/Mission';
import { Solutions } from './sections/Solutions';
import { Products } from './sections/Products';
import { Contact } from './sections/Contact';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <NavBar />
      <main className="relative">
        <Hero />
        <Mission />
        <Solutions />
        <Products />
        <Contact />
      </main>
    </div>
  );
}

export default App;
