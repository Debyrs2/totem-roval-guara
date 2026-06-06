// Interface para o TypeScript saber o que a Sidebar vai receber
interface SidebarProps {
    categoriaAtiva: string;
    setCategoriaAtiva: (categoria: string) => void;
}

//Avisar a função que ela vai receber essas props
export function Sidebar({ categoriaAtiva, setCategoriaAtiva }: SidebarProps) {
    return (
        <aside className="sidebar">
            <h2>Categorias</h2>
            <nav className="categories-menu">

                <button
                    className={`category-btn ${categoriaAtiva === 'todos' ? 'active' : ''}`}
                    onClick={() => setCategoriaAtiva('todos')}
                >
                    Todos
                </button>

                <button
                    className={`category-btn ${categoriaAtiva === 'fitness' ? 'active' : ''}`}
                    onClick={() => setCategoriaAtiva('fitness')}
                >
                    Fitness
                </button>

                <button
                    className={`category-btn ${categoriaAtiva === 'nutricao' ? 'active' : ''}`}
                    onClick={() => setCategoriaAtiva('nutricao')}
                >
                    Nutrição
                </button>

                <button
                    className={`category-btn ${categoriaAtiva === 'estetica' ? 'active' : ''}`}
                    onClick={() => setCategoriaAtiva('estetica')}
                >
                    Estética
                </button>

                <button
                    className={`category-btn ${categoriaAtiva === 'sono' ? 'active' : ''}`}
                    onClick={() => setCategoriaAtiva('sono')}
                >
                    Sono & Bem-Estar
                </button>

            </nav>

            <button className="consultant-call-btn">
                Falar com Consultor(a)
            </button>
        </aside>
    );
}