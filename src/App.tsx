import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { CardProduto } from './components/CardProduto';
import { CartModal } from './components/CartModal';
import { TelaDescanso } from './components/TelaDescanso';
import { produtos, type Product, type CartItem } from './data/products';
import './index.css';

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');
  const [carrinho, setCarrinho] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  // --- LÓGICA DE INATIVIDADE ---
  useEffect(() => {
    let tempoInativo: ReturnType<typeof setTimeout>;

    function reiniciarTemporizador() {
      clearTimeout(tempoInativo);

      // Para testes agora, vamos usar 10 segundos (10000ms).
      // Quando for para o shopping, mude para 3 * 60 * 1000 (3 minutos).
      tempoInativo = setTimeout(() => {
        setIsIdle(true); // Mostra o vídeo
        setCarrinho([]); // Limpa o carrinho do cliente anterior
        setCategoriaAtiva('todos'); // Volta para a categoria inicial
        setIsCartOpen(false); // Fecha o modal se o cliente abandonou ele aberto
      }, 10000);
    }

    // Fica escutando os toques/cliques na tela
    window.addEventListener('mousemove', reiniciarTemporizador);
    window.addEventListener('touchstart', reiniciarTemporizador);
    window.addEventListener('click', reiniciarTemporizador);

    // Dá o play no cronômetro assim que o sistema liga
    reiniciarTemporizador();

    // Clean Code: Limpa a memória se o componente for desmontado
    return () => {
      clearTimeout(tempoInativo);
      window.removeEventListener('mousemove', reiniciarTemporizador);
      window.removeEventListener('touchstart', reiniciarTemporizador);
      window.removeEventListener('click', reiniciarTemporizador);
    };
  }, []); // O array vazio garante que os 'listeners' sejam adicionados só uma vez

  // Função para a Tela de Descanso acordar o sistema
  function acordarTotem() {
    setIsIdle(false);
  }

  // --- LÓGICA DO CARRINHO 
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

  function removerDoCarrinho(produtoId: number) {
    setCarrinho((carrinhoAtual) => {
      return carrinhoAtual.map(item =>
        item.id === produtoId ? { ...item, quantidade: item.quantidade - 1 } : item
      ).filter(item => item.quantidade > 0);
    });
  }

  const totalItensNoCarrinho = carrinho.reduce((total, item) => total + item.quantidade, 0);

  return (
    <div className="kiosk-container">
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
          {produtosFiltrados.map((produto) => (
            <CardProduto
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
        removerDoCarrinho={removerDoCarrinho}
      />
    </div>
  );
}

export default App;