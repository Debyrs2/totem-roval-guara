// src/App.tsx
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProductCard } from './components/CardProduct';
import { CartModal } from './components/CartModal';
import { produtos, type Product, type CartItem } from './data/products';
import './index.css';

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');
  const [carrinho, setCarrinho] = useState<CartItem[]>([]);

  // Controla se o Modal está aberto ou não
  const [isCartOpen, setIsCartOpen] = useState(false);

  const produtosFiltrados = categoriaAtiva === 'todos'
    ? produtos
    : produtos.filter(produto => produto.categoria === categoriaAtiva);

  function adicionarAoCarrinho(produtoSelecionado: Product) {
    setCarrinho((carrinhoAtual) => {
      const itemJaExiste = carrinhoAtual.find(item => item.id === produtoSelecionado.id);
      if (itemJaExiste) {
        return carrinhoAtual.map(item =>
          item.id === produtoSelecionado.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      } else {
        return [...carrinhoAtual, { ...produtoSelecionado, quantidade: 1 }];
      }
    });
  }

  // CALCULAR TOTAL DE ITENS 
  const totalItensNoCarrinho = carrinho.reduce((total, item) => total + item.quantidade, 0);

  return (
    <div className="kiosk-container">
      <header className="kiosk-header">
        <img src="/assets/imagens/rovalLogo.png" alt="Roval Farmácia de Manipulação" className="logo" />
        <h1>Encontre a fórmula ideal para você!</h1>
      </header>

      <div className="kiosk-body">

        <Sidebar
          categoriaAtiva={categoriaAtiva}
          setCategoriaAtiva={setCategoriaAtiva}
          abrirCarrinho={() => setIsCartOpen(true)}
          quantidadeItens={totalItensNoCarrinho}
        />

        <main className="products-container">
          {produtosFiltrados.map((produto) => (
            <ProductCard
              key={produto.id}
              product={produto}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          ))}
        </main>
      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        carrinho={carrinho}
      />
    </div>
  );
}

export default App;