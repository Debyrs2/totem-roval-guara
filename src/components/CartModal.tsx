import { useState } from 'react';
import { type CartItem, type Product } from '../data/products';
import { QRCodeSVG } from 'qrcode.react';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    carrinho: CartItem[];
    removerDoCarrinho: (id: number) => void;
    adicionarAoCarrinho: (produto: Product) => void;
}

export function CartModal({ isOpen, onClose, carrinho, removerDoCarrinho, adicionarAoCarrinho }: CartModalProps) {
    const [produtoParaConfirmacao, setProdutoParaConfirmacao] = useState<CartItem | null>(null);
    const [mostrarQRCode, setMostrarQRCode] = useState(false);

    if (!isOpen) return null;

    const valorTotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    const formatarMoeda = (valor: number) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

    function handleDiminuir(item: CartItem) {
        if (item.quantidade > 1) {
            removerDoCarrinho(item.id);
        } else {
            setProdutoParaConfirmacao(item);
        }
    }

    function confirmarRemocao() {
        if (produtoParaConfirmacao) {
            removerDoCarrinho(produtoParaConfirmacao.id);
            setProdutoParaConfirmacao(null); // Apenas fecha a confirmação, o carrinho continua aberto
        }
    }

    function fecharModalCompleto() {
        setMostrarQRCode(false);
        setProdutoParaConfirmacao(null);
        onClose(); // Este é o único lugar que fecha o carrinho de verdade
    }

    function gerarLinkWhatsApp() {
        const numeroRoval = "558193038876";
        let mensagem = "Olá! Estou no totem da loja e tenho interesse nos seguintes produtos:\n\n";

        carrinho.forEach(item => {
            const subtotalItem = item.preco * item.quantidade;
            mensagem += `- ${item.quantidade}x ${item.nome} (${formatarMoeda(subtotalItem)})\n`;
        });

        mensagem += `\n*Valor Total Estimado: ${formatarMoeda(valorTotal)}*\n\nPoderiam me dar mais informações?`;
        return `https://wa.me/${numeroRoval}?text=${encodeURIComponent(mensagem)}`;
    }

    return (
        <div className="modal-overlay" onClick={fecharModalCompleto}>
            <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
                <button className="close-modal-x" onClick={fecharModalCompleto}>&times;</button>

                <div className="modal-scroll-area" style={{ padding: '2rem 1.5rem' }}>
                    <h2 style={{ color: 'var(--roval-red)', marginBottom: '1.5rem', width: '100%', textAlign: 'center' }}>
                        {mostrarQRCode ? 'Escaneie o QR Code' : 'Seu Carrinho'}
                    </h2>

                    {mostrarQRCode ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                                Aponte a câmera do seu celular para enviar o pedido completo diretamente para o nosso WhatsApp.
                            </p>
                            <div style={{ padding: '20px', background: '#fff', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                                <QRCodeSVG value={gerarLinkWhatsApp()} size={220} />
                            </div>
                        </div>
                    ) : (
                        <div style={{ width: '100%' }}>
                            {carrinho.length === 0 ? (
                                <p style={{ margin: '2rem 0', color: 'var(--text-muted)', textAlign: 'center' }}>
                                    Seu carrinho está vazio.
                                </p>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {carrinho.map(item => (
                                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                                            <div style={{ flex: 1, paddingRight: '10px' }}>
                                                <h4 style={{ color: 'var(--text-dark)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.nome}</h4>

                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                                                    <button onClick={() => handleDiminuir(item)} style={{ width: '28px', height: '28px', borderRadius: '5px', border: '1px solid var(--roval-red)', background: 'white', color: 'var(--roval-red)', fontWeight: 'bold', cursor: 'pointer' }}>-</button>
                                                    <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>{item.quantidade}</span>
                                                    <button onClick={() => adicionarAoCarrinho(item)} style={{ width: '28px', height: '28px', borderRadius: '5px', border: 'none', background: 'var(--roval-red)', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
                                                </div>
                                            </div>

                                            <div style={{ textAlign: 'right' }}>
                                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>
                                                    Un: {formatarMoeda(item.preco)}
                                                </span>
                                                <strong style={{ color: 'var(--roval-dark-red)', fontSize: '1.1rem' }}>
                                                    {formatarMoeda(item.preco * item.quantidade)}
                                                </strong>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {!mostrarQRCode && carrinho.length > 0 && (
                    <div className="modal-footer" style={{ flexDirection: 'column', padding: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                            <span>Total Estimado:</span>
                            <span style={{ color: 'var(--roval-red)' }}>{formatarMoeda(valorTotal)}</span>
                        </div>
                        <button
                            onClick={() => setMostrarQRCode(true)}
                            style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', background: '#25D366', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}
                        >
                            Finalizar no WhatsApp
                        </button>
                    </div>
                )}
                {mostrarQRCode && (
                    <div className="modal-footer">
                        <button className="view-more-btn" onClick={() => setMostrarQRCode(false)} style={{ width: '100%', padding: '1rem' }}>
                            Voltar para o Carrinho
                        </button>
                    </div>
                )}
            </div>

            {/* MODAL DE CONFIRMAÇÃO BLINDADO CONTRA FECHAMENTO ACIDENTAL */}
            {produtoParaConfirmacao && (
                <div
                    className="modal-overlay"
                    style={{ zIndex: 10000 }}
                    onClick={(e) => e.stopPropagation()} // Impede que o clique vaze para o fundo
                >
                    <div className="modal-content" style={{ maxWidth: '400px', textAlign: 'center', padding: '2.5rem' }} onClick={e => e.stopPropagation()}>
                        <h3 style={{ color: 'var(--roval-red)', marginBottom: '1rem', fontSize: '1.5rem' }}>Atenção</h3>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            Deseja remover o produto do carrinho?
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                className="view-more-btn"
                                onClick={(e) => { e.stopPropagation(); setProdutoParaConfirmacao(null); }}
                                style={{ flex: 1 }}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); confirmarRemocao(); }}
                                style={{ flex: 1, padding: '1rem', border: 'none', borderRadius: '8px', background: 'var(--roval-red)', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
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