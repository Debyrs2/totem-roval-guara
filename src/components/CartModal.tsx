import { useState } from 'react';
import { type CartItem } from '../data/products';
import { QRCodeSVG } from 'qrcode.react'; // biblioteca do QR Code

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    carrinho: CartItem[];
    removerDoCarrinho: (id: number) => void;
}

export function CartModal({ isOpen, onClose, carrinho, removerDoCarrinho }: CartModalProps) {
    const [produtoParaConfirmacao, setProdutoParaConfirmacao] = useState<CartItem | null>(null);

    // Controla se estamos vendo a lista ou o QR Code
    const [mostrarQRCode, setMostrarQRCode] = useState(false);

    if (!isOpen) return null;

    function handleRemoverClick(item: CartItem) {
        if (item.quantidade > 1) {
            removerDoCarrinho(item.id);
        } else {
            setProdutoParaConfirmacao(item);
        }
    }

    function confirmarRemocao() {
        if (produtoParaConfirmacao) {
            removerDoCarrinho(produtoParaConfirmacao.id);
            setProdutoParaConfirmacao(null);
        }
    }

    // Garante que o modal vai resetar quando for fechado
    function fecharModalCompleto() {
        setMostrarQRCode(false);
        setProdutoParaConfirmacao(null);
        onClose();
    }

    // Monta a mensagem e o link do WhatsApp
    function gerarLinkWhatsApp() {
        // Substitua pelo número real da unidade Guararapes no futuro
        const numeroRoval = "558193038876";

        let mensagem = "Olá! Estou no totem da loja e tenho interesse nos seguintes produtos:\n\n";

        carrinho.forEach(item => {
            mensagem += `- ${item.quantidade}x ${item.nome}\n`;
        });

        mensagem += "\nPoderiam me dar mais informações?";

        // encodeURIComponent converte os espaços e quebras de linha para o formato %20, %0A, etc.
        return `https://wa.me/${numeroRoval}?text=${encodeURIComponent(mensagem)}`;
    }

    return (
        <div className="modal-overlay active">
            <div className="modal-content" style={{ maxWidth: '600px', position: 'relative' }}>
                <button className="close-modal" onClick={fecharModalCompleto}>&times;</button>

                <h2 style={{ color: 'var(--roval-red)', marginBottom: '1rem' }}>
                    {/* Muda o título dinamicamente */}
                    {mostrarQRCode ? 'Escaneie o QR Code' : 'Seu Carrinho'}
                </h2>

                {mostrarQRCode ? (
                    // --- O QR CODE ---
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                            Aponte a câmera do seu celular para enviar a lista de produtos diretamente para o nosso WhatsApp.
                        </p>

                        <div style={{ padding: '20px', background: 'white', borderRadius: '15px', border: '2px solid var(--border-color)' }}>
                            {/* O componente mágico que gera o código de barras usando nosso link */}
                            <QRCodeSVG value={gerarLinkWhatsApp()} size={250} />
                        </div>

                        <button
                            onClick={() => setMostrarQRCode(false)}
                            style={{ marginTop: '2rem', background: 'none', border: 'none', color: 'var(--text-muted)', textDecoration: 'underline', cursor: 'pointer', fontSize: '1rem' }}
                        >
                            Voltar para a lista de itens
                        </button>
                    </div>

                ) : (
                    // --- A LISTA DE PRODUTOS ---
                    <>
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
                                        <button
                                            className="remove-btn"
                                            onClick={() => handleRemoverClick(item)}
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
                            onClick={() => setMostrarQRCode(true)} // Muda o estado para mostrar a Tela 2
                        >
                            Avançar para o WhatsApp
                        </button>
                    </>
                )}
            </div>

            {produtoParaConfirmacao && (
                <div className="modal-overlay active" style={{ zIndex: 1001, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className="modal-content">
                        <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>Atenção</h3>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            O produto <strong>{produtoParaConfirmacao.nome}</strong> será removido do carrinho. Deseja continuar?
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <button onClick={() => setProdutoParaConfirmacao(null)} style={{ padding: '0.8rem 1.5rem', border: '2px solid var(--border-color)', borderRadius: '10px', background: 'transparent', cursor: 'pointer', fontWeight: 'bold' }}>Cancelar</button>
                            <button onClick={confirmarRemocao} style={{ padding: '0.8rem 1.5rem', border: 'none', borderRadius: '10px', background: 'var(--roval-red)', color: 'var(--roval-white)', cursor: 'pointer', fontWeight: 'bold' }}>Confirmar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}