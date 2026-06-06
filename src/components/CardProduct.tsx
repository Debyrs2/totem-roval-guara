// src/components/ProductCard.tsx
import { type Product } from '../data/products';

// Definimos que este componente recebe uma 'prop' chamada product
interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="product-card">
            {/* O React usa as chaves {} para injetar variáveis do JavaScript no meio do HTML */}
            <img src={product.imagem} alt={product.nome} className="product-img" />
            <h3>{product.nome}</h3>

            {/* Ocultamos a descrição por enquanto, igual estava no seu CSS para a vitrine */}
            <p style={{ display: 'none' }}>{product.descricao}</p>

            <button className="view-more-btn">
                Ver Detalhes
            </button>
        </div>
    );
}