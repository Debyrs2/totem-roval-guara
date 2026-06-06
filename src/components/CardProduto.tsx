// src/components/CardProduto.tsx
import { type Product } from '../data/products';

interface CardProdutoProps {
    product: Product;
    adicionarAoCarrinho: (produto: Product) => void;
}

export function CardProduto({ product, adicionarAoCarrinho }: CardProdutoProps) {
    return (
        <div className="product-card">
            <img src={product.imagem} alt={product.nome} className="product-img" />
            <h3>{product.nome}</h3>

            <p style={{ display: 'none' }}>{product.descricao}</p>

            <button
                className="view-more-btn"
                onClick={() => adicionarAoCarrinho(product)}
            >
                Adicionar ao Carrinho
            </button>
        </div>
    );
}