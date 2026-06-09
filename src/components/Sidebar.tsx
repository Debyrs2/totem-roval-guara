interface SidebarProps {
  categoriaAtiva: string;
  setCategoriaAtiva: (categoria: string) => void;
  abrirCarrinho: () => void;
  quantidadeItens: number;
}

export function Sidebar({ categoriaAtiva, setCategoriaAtiva, abrirCarrinho, quantidadeItens }: SidebarProps) {
  // Estas devem ser exatamente as mesmas palavras usadas na sua planilha (JSON)
  const categorias = [
    { id: 'todos', nome: 'Todos os Produtos' },
    { id: 'Cosméticos', nome: 'Cosméticos' },
    { id: 'Higienização', nome: 'Higienização' },
    { id: 'Nutrição', nome: 'Nutrição' },
    { id: 'Nutrição Esportiva', nome: 'Nutrição Esportiva' },
    { id: 'Produtos Capilares', nome: 'Produtos Capilares' },
    { id: 'Sono & Bem Estar', nome: 'Sono & Bem Estar' }
  ];

  return (
    <aside className="sidebar">
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--roval-dark-red)' }}>Categorias</h2>

      <nav className="category-nav">
        {categorias.map(cat => (
          <button
            key={cat.id}
            className={`category-btn ${categoriaAtiva === cat.id ? 'active' : ''}`}
            onClick={() => setCategoriaAtiva(cat.id)}
          >
            {cat.nome}
          </button>
        ))}
      </nav>

      <div className="cart-container">
        <button
          className="cart-btn"
          onClick={abrirCarrinho}
          style={{
            width: '100%',
            padding: '1.2rem',
            backgroundColor: 'var(--roval-red)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 4px 15px rgba(200, 16, 46, 0.2)'
          }}
        >
          <span>🛒 Carrinho</span>
          <span style={{
            background: 'white',
            color: 'var(--roval-red)',
            padding: '2px 8px',
            borderRadius: '50%',
            fontSize: '0.9rem'
          }}>
            {quantidadeItens}
          </span>
        </button>
      </div>
    </aside>
  );
}