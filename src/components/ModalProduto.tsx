import { type Product } from '../data/products';

interface ModalProdutoProps {
    produto: Product | null;
    isOpen: boolean;
    onClose: () => void;
    adicionarAoCarrinho: (produto: Product) => void;
}

export function ModalProduto({ produto, isOpen, onClose, adicionarAoCarrinho }: ModalProdutoProps) {
    if (!isOpen || !produto) return null;

    const produtoAtual = produto as Product;

    function handleAdicionar() {
        adicionarAoCarrinho(produtoAtual);
        onClose();
    }

    return (
        <div className="modal-overlay active" style={{ zIndex: 1000 }}>
            <div className="modal-content product-detail-modal">
                <button className="close-modal" onClick={onClose}>&times;</button>

                <img src={produto.imagem} alt={produto.nome} className="product-detail-img" />
                <h2 style={{ color: 'var(--roval-red)' }}>{produto.nome}</h2>

                <div className="product-divider"></div>

                <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-dark)' }}>
                    {produto.descricao}
                </p>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button
                        className="view-more-btn"
                        onClick={onClose}
                        style={{ flex: 1 }}
                    >
                        Voltar
                    </button>

                    <button
                        onClick={handleAdicionar}
                        style={{
                            flex: 1,
                            backgroundColor: 'var(--roval-red)',
                            color: 'var(--roval-white)',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '0.8rem 1.5rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}