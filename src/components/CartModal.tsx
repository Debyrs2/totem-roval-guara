import { useState } from 'react';
import { type CartItem } from '../data/products';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    carrinho: CartItem[];
    removerDoCarrinho: (id: number) => void;
}

export function CartModal({ isOpen, onClose, carrinho, removerDoCarrinho }: CartModalProps) {
    // Guarda qual produto o usuário clicou para remover se for a última unidade
    const [produtoParaConfirmacao, setProdutoParaConfirmacao] = useState<CartItem | null>(null);

    if (!isOpen) return null;

    // Regra de negócio inteligente
    function handleRemoverClick(item: CartItem) {
        if (item.quantidade > 1) {
            removerDoCarrinho(item.id); // Subtrai direto
        } else {
            setProdutoParaConfirmacao(item); // Trava e abre a confirmação
        }
    }

    function confirmarRemocao() {
        if (produtoParaConfirmacao) {
            removerDoCarrinho(produtoParaConfirmacao.id);
            setProdutoParaConfirmacao(null);
        }
    }

    return (
        <div className="modal-overlay active">
            <div className="modal-content" style={{ maxWidth: '600px', position: 'relative' }}>
                <button className="close-modal" onClick={onClose}>&times;</button>

                <h2 style={{ color: 'var(--roval-red)', marginBottom: '1rem' }}>
                    Seu Carrinho
                </h2>

                {carrinho.length === 0 ? (
                    <p style={{ margin: '2rem 0', color: 'var(--text-muted)' }}>
                        Seu carrinho está vazio. Adicione produtos na vitrine!
                    </p>
                ) : (
                    <div style={{ maxHeight: '40vh', overflowY: 'auto', textAlign: 'left', marginBottom: '2rem', paddingRight: '10px' }}>
                        {carrinho.map(item => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
                                <div>
                                    <h4 style={{ color: 'var(--text-dark)' }}>{item.nome}</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Quantidade: {item.quantidade}</span>
                                </div>
                                {/* O nosso novo botão de remover */}
                                <button
                                    onClick={() => handleRemoverClick(item)}
                                    style={{
                                        background: 'none', border: '1px solid var(--roval-red)', color: 'var(--roval-red)',
                                        padding: '5px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'
                                    }}
                                >
                                    Remover
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <button
                    className="consultant-call-btn"
                    style={{ width: '100%', opacity: carrinho.length === 0 ? 0.5 : 1 }}
                    disabled={carrinho.length === 0}
                >
                    Avançar para o WhatsApp
                </button>
            </div>

            {produtoParaConfirmacao && (
                <div className="modal-overlay active" style={{ zIndex: 1001, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className="modal-content">
                        <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>Atenção</h3>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            O produto <strong>{produtoParaConfirmacao.nome}</strong> será removido do carrinho. Deseja continuar?
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <button
                                onClick={() => setProdutoParaConfirmacao(null)}
                                style={{ padding: '0.8rem 1.5rem', border: '2px solid var(--border-color)', borderRadius: '10px', background: 'transparent', cursor: 'pointer', fontWeight: 'bold' }}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmarRemocao}
                                style={{ padding: '0.8rem 1.5rem', border: 'none', borderRadius: '10px', background: 'var(--roval-red)', color: 'var(--roval-white)', cursor: 'pointer', fontWeight: 'bold' }}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}