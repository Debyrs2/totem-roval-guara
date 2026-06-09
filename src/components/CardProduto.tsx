import { type Product } from '../data/products';

interface CardProdutoProps {
    product: Product;
    adicionarAoCarrinho: (produto: Product) => void;
    abrirDetalhes: (produto: Product) => void;
}

export function CardProduto({ product, adicionarAoCarrinho, abrirDetalhes }: CardProdutoProps) {
    return (
        <div className="product-card">
            <img src={product.imagem} alt={product.nome} className="product-img" />

            <h3 className="product-title">{product.nome}</h3>

            {/* O PREÇO AGORA APARECE NA VITRINE */}
            <span className="product-price">
                R$ {product.preco.toFixed(2).replace('.', ',')}
            </span>

            <div className="card-actions">
                <button
                    className="view-more-btn"
                    onClick={() => abrirDetalhes(product)}
                >
                    Ver Detalhes
                </button>

                <button
                    className="add-cart-btn"
                    onClick={() => adicionarAoCarrinho(product)}
                    title="Adicionar direto ao carrinho"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42a27.75,27.75,0,0,0-2.71-12h-49.4a12,12,0,0,1-11.58-8H216a8,8,0,0,0,7.88-6.69l12.16-96A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm22.59-48H70.49l-10.9-60H224.2Z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}