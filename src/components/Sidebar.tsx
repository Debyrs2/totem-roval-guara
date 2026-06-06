// src/components/Sidebar.tsx
export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Categorias</h2>
      <nav className="categories-menu">
        {/* Deixei o "Todos" ativo por padrão por enquanto */}
        <button className="category-btn active">Todos</button>
        <button className="category-btn">Fitness</button>
        <button className="category-btn">Nutrição</button>
        <button className="category-btn">Estética</button>
        <button className="category-btn">Sono & Bem-Estar</button>
      </nav>

      <button className="consultant-call-btn">
        Falar com Consultor(a)
      </button>
    </aside>
  );
}