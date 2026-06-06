interface TelaDescansoProps {
    isIdle: boolean;
    onWakeUp: () => void;
}

export function TelaDescanso({ isIdle, onWakeUp }: TelaDescansoProps) {
    // Se o totem NÃO estiver inativo, não desenha nada na tela
    if (!isIdle) return null;

    return (
        <div
            onClick={onWakeUp} // Qualquer toque na tela acorda o sistema
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999, // Fica por cima de absolutamente tudo
                cursor: 'pointer'
            }}
        >
            <h1>[ Espaço reservado para o Vídeo Institucional da Roval ]</h1>
            <p style={{ marginTop: '30px', fontSize: '1.5rem', color: 'var(--roval-red)', fontWeight: 'bold' }}>
                Toque na tela para iniciar o atendimento
            </p>
        </div>
    );
}