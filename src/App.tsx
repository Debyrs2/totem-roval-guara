// src/App.tsx
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { CardProduto } from './components/CardProduto';
import { CartModal } from './components/CartModal';
import { produtos, type Product, type CartItem } from './data/products';
import './index.css';

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');
  const [carrinho, setCarrinho] = useState<CartItem[]>([]);
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

  //Remover ou diminuir quantidade
  function removerDoCarrinho(produtoId: number) {
    setCarrinho((carrinhoAtual) => {
      return carrinhoAtual.map(item =>
        item.id === produtoId ? { ...item, quantidade: item.quantidade - 1 } : item
      ).filter(item => item.quantidade > 0); // O filter garante que itens com quantidade 0 sejam excluídos da lista
    });
  }

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
            <CardProduto
              key={produto.id}
              product={produto}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          ))}
        </main>

        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          carrinho={carrinho}
          removerDoCarrinho={removerDoCarrinho}
        />
      </div>
      );
    </div>
  );
}

export default App;