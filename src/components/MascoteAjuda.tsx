import { useState } from 'react';

export function MascoteAjuda() {
    const [aberto, setAberto] = useState(false);

    return (
        <>
            {/* BOTÃO DA MASCOTE BLINDADO */}
            <button
                type="button"
                title="Precisa de ajuda?"
                // onPointerDown é a prova de balas para touchscreens e emuladores
                onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("✅ CLIQUE NA MASCOTE REGISTRADO!");
                    setAberto(true);
                }}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 2147483647, // Z-index máximo do navegador
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pointerEvents: 'auto',
                }}
            >
                <img
                    src="/assets/imagens/Mascote.png"
                    alt="Mascote Roval"
                    style={{
                        width: '90px',
                        height: '90px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))'
                    }}
                />
                <span style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    color: '#9A0B20',
                    fontWeight: 'bold',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    marginTop: '-10px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                    Dúvidas?
                </span>
            </button>

            {/* MODAL ISOLADO (Livre do index.css) */}
            {aberto && (
                <div
                    onPointerDown={(e) => {
                        e.stopPropagation();
                        setAberto(false);
                    }}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2147483647
                    }}
                >
                    <div
                        onPointerDown={(e) => e.stopPropagation()} // Impede que clicar dentro do modal feche ele
                        style={{
                            background: '#ffffff',
                            padding: '2.5rem',
                            borderRadius: '20px',
                            maxWidth: '500px',
                            width: '90%',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ color: '#9A0B20', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Como usar o Totem?</h2>
                            <p style={{ color: '#6C757D', fontSize: '1rem' }}>É super rápido e prático!</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#f8f9fa', padding: '1rem', borderRadius: '15px' }}>
                                <div style={{ background: '#C8102E', color: 'white', fontSize: '1.5rem', fontWeight: 'bold', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>1</div>
                                <div>
                                    <h3 style={{ color: '#212529', marginBottom: '0.2rem' }}>Escolha seus produtos</h3>
                                    <p style={{ color: '#6C757D', fontSize: '0.95rem' }}>Navegue pelas categorias e adicione os itens ao carrinho.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#f8f9fa', padding: '1rem', borderRadius: '15px' }}>
                                <div style={{ background: '#C8102E', color: 'white', fontSize: '1.5rem', fontWeight: 'bold', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>2</div>
                                <div>
                                    <h3 style={{ color: '#212529', marginBottom: '0.2rem' }}>Confira o Carrinho</h3>
                                    <p style={{ color: '#6C757D', fontSize: '0.95rem' }}>Toque no carrinho para revisar seu pedido e valor.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#f8f9fa', padding: '1rem', borderRadius: '15px' }}>
                                <div style={{ background: '#C8102E', color: 'white', fontSize: '1.5rem', fontWeight: 'bold', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>3</div>
                                <div>
                                    <h3 style={{ color: '#212529', marginBottom: '0.2rem' }}>Finalize atendimeto por Whatsapp</h3>
                                    <p style={{ color: '#6C757D', fontSize: '0.95rem' }}>Leia o QR code com seu celular e envie seu pedido para nosso WhatsApp.</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                setAberto(false);
                            }}
                            style={{
                                width: '100%',
                                padding: '1.2rem',
                                backgroundColor: '#C8102E',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                marginTop: '0.5rem'
                            }}
                        >
                            Entendi, vamos lá!
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}