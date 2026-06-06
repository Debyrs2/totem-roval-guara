import { type CartItem } from '../data/products';

interface CartModalProps {
    isOpen: boolean; // Controla se o modal está aberto ou fechado
    onClose: () => void; 
    carrinho: CartItem[];
}

export function CartModal({ isOpen, onClose, carrinho }: CartModalProps) {
    // Se não estiver aberto, o React nem desenha o modal na tela
    if (!isOpen) return null;

    return (
        <div className="modal-overlay active">
            <div className="modal-content" style={{ maxWidth: '600px' }}>
                <button className="close-modal" onClick={onClose}>&times;</button>
                
                <h2 style={{ color: 'var(--roval-red)', marginBottom: '1rem' }}>
                    Seu Carrinho
                </h2>
                
                {carrinho.length === 0 ? (
                    <p style={{ margin: '2rem 0', color: 'var(--text-muted)' }}>
                        Seu carrinho está vazio. Adicione produtos na vitrine!
                    </p>
                ) : (
                    <div style={{ maxHeight: '40vh', overflowY: 'auto', textAlign: 'left', marginBottom: '2rem' }}>
                        {carrinho.map(item => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
                                <div>
                                    <h4 style={{ color: 'var(--text-dark)' }}>{item.nome}</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Quantidade: {item.quantidade}</span>
                                </div>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Aguardando...</span>
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
        </div>
    );
}