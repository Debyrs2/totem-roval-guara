// src/App.tsx
import { useState } from 'react'; //"poder" de criar memória
import { Sidebar } from './components/Sidebar';
import { ProductCard } from './components/CardProduct'; 
import { produtos } from './data/products'; 
import './index.css';

function App() {
  //'categoriaAtiva' é o valor atual, 'setCategoriaAtiva' é a função para mudar esse valor
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');

  // Lógica de Filtro: Se for 'todos', mostra tudo. Se não, filtra pela categoria.
  const produtosFiltrados = categoriaAtiva === 'todos' 
    ? produtos 
    : produtos.filter(produto => produto.categoria === categoriaAtiva);

  return (
    <div className="kiosk-container">
      <header className="kiosk-header">
        <img src="/assets/imagens/rovalLogo.png" alt="Roval Farmácia de Manipulação" className="logo" />
        <h1>Encontre a fórmula ideal para você!</h1>
      </header>

      <div className="kiosk-body">
        {/* Passamos a memória e a função de mudar a memória para a Sidebar via Props */}
        <Sidebar categoriaAtiva={categoriaAtiva} setCategoriaAtiva={setCategoriaAtiva} />
        
        <main className="products-container">
            {produtosFiltrados.map((produto) => (
                <ProductCard key={produto.id} product={produto} />
            ))}
        </main>
      </div>
    </div>
  );
}

export default App;