import { useState, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, popularBancoDeDados } from './data/db';
import { Sidebar } from './components/Sidebar';
import { CardProduto } from './components/CardProduto';
import { CartModal } from './components/CartModal';
import { TelaDescanso } from './components/TelaDescanso';
import { ModalProduto } from './components/ModalProduto';
import { type Product, type CartItem } from './data/products';
import './index.css';

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');
  const [carrinho, setCarrinho] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Product | null>(null);

  useEffect(() => {
    popularBancoDeDados();
  }, []);

  const produtosDoBanco = useLiveQuery(
    () => {
      if (categoriaAtiva === 'todos') {
        return db.produtos.toArray();
      } else {
        return db.produtos.where('categoria').equals(categoriaAtiva).toArray();
      }
    },
    [categoriaAtiva]
  );

  const produtosFiltrados = produtosDoBanco || [];

  useEffect(() => {
    let tempoInativo: ReturnType<typeof setTimeout>;

    function reiniciarTemporizador() {
      clearTimeout(tempoInativo);
      tempoInativo = setTimeout(() => {
        setIsIdle(true);
        setCarrinho([]);
        setCategoriaAtiva('todos');
        setIsCartOpen(false);
        setProdutoSelecionado(null);
      }, 10000);
    }

    window.addEventListener('mousemove', reiniciarTemporizador);
    window.addEventListener('touchstart', reiniciarTemporizador);
    window.addEventListener('click', reiniciarTemporizador);

    reiniciarTemporizador();

    return () => {
      clearTimeout(tempoInativo);
      window.removeEventListener('mousemove', reiniciarTemporizador);
      window.removeEventListener('touchstart', reiniciarTemporizador);
      window.removeEventListener('click', reiniciarTemporizador);
    };
  }, []);

  function acordarTotem() {
    setIsIdle(false);
  }

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

  function removerDoCarrinho(produtoId: number) {
    setCarrinho((carrinhoAtual) => {
      return carrinhoAtual.map(item =>
        item.id === produtoId ? { ...item, quantidade: item.quantidade - 1 } : item
      ).filter(item => item.quantidade > 0);
    });
  }

  const totalItensNoCarrinho = carrinho.reduce((total, item) => total + item.quantidade, 0);

  return (
    <div
      className="kiosk-container"
      onContextMenu={(e) => e.preventDefault()} // Impede o clique direito/pressionar e segurar
      onDragStart={(e) => e.preventDefault()}   // bloqueio de arrasto a nível de script
    >
      <TelaDescanso isIdle={isIdle} onWakeUp={acordarTotem} />

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
          {produtosDoBanco === undefined && (
            <h2 style={{ color: 'var(--text-muted)' }}>Carregando catálogo...</h2>
          )}

          {produtosFiltrados.map((produto) => (
            <CardProduto
              key={produto.id}
              product={produto}
              adicionarAoCarrinho={adicionarAoCarrinho}
              abrirDetalhes={setProdutoSelecionado}
            />
          ))}
        </main>
      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        carrinho={carrinho}
        removerDoCarrinho={removerDoCarrinho}
      />

      <ModalProduto
        produto={produtoSelecionado}
        isOpen={!!produtoSelecionado}
        onClose={() => setProdutoSelecionado(null)}
        adicionarAoCarrinho={adicionarAoCarrinho}
      />
    </div>
  );
}

export default App;