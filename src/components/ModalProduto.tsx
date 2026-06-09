import { type Product } from '../data/products';

interface ModalProdutoProps {
    produto: Product | null;
    isOpen: boolean;
    onClose: () => void;
    adicionarAoCarrinho: (produto: Product) => void;
}

export function ModalProduto({ produto, isOpen, onClose, adicionarAoCarrinho }: ModalProdutoProps) {
    if (!isOpen || !produto) return null;

    function handleAdicionar() {
        adicionarAoCarrinho(produto as Product);
        onClose();
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-modal-x" onClick={onClose}>&times;</button>

                {/* ÁREA DE SCROLL (Protege a interface no Celular) */}
                <div className="modal-scroll-area">
                    <img
                        src={produto.imagem}
                        alt={produto.nome}
                        style={{ width: '160px', height: '160px', objectFit: 'contain', marginBottom: '1rem' }}
                    />

                    <h2 style={{ color: 'var(--roval-red)', textAlign: 'center', fontSize: '1.4rem' }}>
                        {produto.nome}
                    </h2>

                    <h3 style={{ color: 'var(--text-dark)', fontSize: '1.3rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
                        R$ {produto.preco.toFixed(2).replace('.', ',')}
                    </h3>

                    <div style={{ height: '3px', background: 'var(--roval-red)', width: '50px', margin: '1rem 0' }}></div>

                    {/* TEXTO: Mais escuro, fonte menor e justificado */}
                    <p style={{
                        textAlign: 'justify',
                        fontSize: '0.95rem',
                        color: '#222222',
                        lineHeight: '1.5',
                        width: '100%'
                    }}>
                        {produto.descricao}
                    </p>
                </div>

                {/* RODAPÉ FIXO (Os botões nunca somem da tela) */}
                <div className="modal-footer">
                    <button className="view-more-btn" onClick={onClose} style={{ flex: 1, padding: '1rem' }}>
                        Voltar
                    </button>

                    <button
                        onClick={handleAdicionar}
                        style={{
                            flex: 1,
                            backgroundColor: 'var(--roval-red)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '1rem',
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