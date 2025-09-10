import React, { useState, useEffect } from 'react';

const Notificacao = ({ mensagem, tipo = 'info', duracao = 3000, visivel, onFechar }) => {
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        if (visivel) {
            setMostrar(true);

            const timer = setTimeout(() => {
                setMostrar(false);
                setTimeout(() => {
                    if (onFechar) onFechar();
                }, 300); // Aguarda a animação de saída
            }, duracao);

            return () => clearTimeout(timer);
        }
    }, [visivel, duracao, onFechar]);

    if (!visivel) return null;

    // Cores baseadas no tipo
    const tipoClasses = {
        sucesso: 'bg-green-500 text-white',
        erro: 'bg-red-500 text-white',
        aviso: 'bg-orange-500 text-white',
        info: 'bg-blue-500 text-white'
    };

    const handleFechar = () => {
        setMostrar(false);
        setTimeout(() => {
            if (onFechar) onFechar();
        }, 300);
    };

    return (
        <div
            className={`
        fixed top-5 left-1/2 transform -translate-x-1/2 z-50
        min-w-[300px] max-w-[500px] px-4 py-3 rounded-lg
        shadow-lg transition-all duration-300 ease-in-out
        ${tipoClasses[tipo] || tipoClasses.info}
        ${mostrar
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-5'
                }
      `}
        >
            <div className="flex items-center justify-between">
                <span className="flex-1 mr-4 text-sm font-medium">
                    {mensagem}
                </span>
                <button
                    className="
            w-6 h-6 flex items-center justify-center
            text-xl leading-none rounded-full
            hover:bg-white/20 transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-white/30
          "
                    onClick={handleFechar}
                    aria-label="Fechar notificação"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Notificacao;