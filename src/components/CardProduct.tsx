// src/components/ProductCard.tsx
import { type Product } from '../data/products';

// Avisamos o TypeScript que agora recebemos o produto E a função de adicionar
interface ProductCardProps {
    product: Product;
    adicionarAoCarrinho: (produto: Product) => void;
}

export function ProductCard({ product, adicionarAoCarrinho }: ProductCardProps) {
    return (
        <div className="product-card">
            <img src={product.imagem} alt={product.nome} className="product-img" />
            <h3>{product.nome}</h3>
            
            <p style={{ display: 'none' }}>{product.descricao}</p> 
            
            {/* Trocamos o Ver Detalhes por Adicionar para testar nossa lógica */}
            <button 
                className="view-more-btn"
                onClick={() => adicionarAoCarrinho(product)}
            >
                Adicionar ao Carrinho
            </button>
        </div>
    );
}