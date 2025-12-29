
import React, { useState } from 'react';

interface SecurityGateProps {
  onVerify: (key: string) => void;
  isDarkMode: boolean;
}

const SecurityGate: React.FC<SecurityGateProps> = ({ onVerify, isDarkMode }) => {
  const [accessKey, setAccessKey] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessKey.toUpperCase() === 'CONEXAO2025') {
      onVerify(accessKey);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className={`fixed inset-0 z-[1000] flex items-center justify-center p-4 transition-colors duration-700 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className={`relative z-10 w-full max-w-md p-10 rounded-[2.5rem] border text-center transition-all duration-500 shadow-2xl ${
        isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100 shadow-gray-200'
      } ${error ? 'border-red-500/50 scale-95' : ''}`}>
        
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg border ${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
            }`}>
              🛡️
            </div>
            <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse"></div>
          </div>
        </div>

        <h1 className={`text-2xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Acesso Restrito
        </h1>
        <p className={`text-sm font-semibold mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Este portal está protegido. <br/>Insira sua Chave de Acesso para entrar.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
            placeholder="Sua chave..."
            className={`w-full px-6 py-4 rounded-2xl border-2 text-center text-lg font-bold transition-all outline-none ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-gray-50 border-gray-100 text-gray-900 focus:border-blue-400'
            } ${error ? 'border-red-500' : ''}`}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-base font-black transition-all shadow-xl shadow-blue-500/20 active:scale-95"
          >
            Verificar e Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SecurityGate;
