interface SidebarProps {
    categoriaAtiva: string;
    setCategoriaAtiva: (categoria: string) => void;
    abrirCarrinho: () => void;
    quantidadeItens: number;   
}

export function Sidebar({ categoriaAtiva, setCategoriaAtiva, abrirCarrinho, quantidadeItens }: SidebarProps) {
    return (
      <aside className="sidebar">
        <h2>Categorias</h2>
        <nav className="categories-menu">
            
            <button className={`category-btn ${categoriaAtiva === 'todos' ? 'active' : ''}`} onClick={() => setCategoriaAtiva('todos')}>Todos</button>
            <button className={`category-btn ${categoriaAtiva === 'fitness' ? 'active' : ''}`} onClick={() => setCategoriaAtiva('fitness')}>Fitness</button>
            <button className={`category-btn ${categoriaAtiva === 'nutricao' ? 'active' : ''}`} onClick={() => setCategoriaAtiva('nutricao')}>Nutrição</button>
            <button className={`category-btn ${categoriaAtiva === 'estetica' ? 'active' : ''}`} onClick={() => setCategoriaAtiva('estetica')}>Estética</button>
            <button className={`category-btn ${categoriaAtiva === 'sono' ? 'active' : ''}`} onClick={() => setCategoriaAtiva('sono')}>Sono & Bem-Estar</button>

        </nav>
  
        <button className="consultant-call-btn" onClick={abrirCarrinho}>
          Ver Carrinho ({quantidadeItens})
        </button>
      </aside>
    );
}