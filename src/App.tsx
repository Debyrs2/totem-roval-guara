// src/App.tsx
import { Sidebar } from './components/Sidebar';
import { ProductCard } from './components/CardProduct';
import { produtos } from './data/products';
import './index.css';

function App() {
  return (
    <div className="kiosk-container">
      <header className="kiosk-header">
        <img src="/assets/imagens/rovalLogo.png" alt="Roval Farmácia de Manipulação" className="logo" />
        <h1>Encontre a fórmula ideal para você!</h1>
      </header>

      <div className="kiosk-body">
        <Sidebar />

        <main className="products-container">
          {/* percorremos a lista e criamos um Card para cada item */}
          {produtos.map((produto) => (
            <ProductCard key={produto.id} product={produto} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;