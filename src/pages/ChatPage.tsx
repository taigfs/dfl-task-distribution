import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Loader2, Sparkles } from 'lucide-react';
import type { ChatMessage } from '../types';

export function ChatPage() {
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Olá! Sou o assistente de IA do Smart Task. Descreva o projeto que você precisa realizar e eu vou ajudá-lo a modelar todas as tarefas necessárias. Pode começar me contando sobre o projeto!',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [canGenerate, setCanGenerate] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simula resposta da IA
    setTimeout(() => {
      const userMessageCount = messages.filter(m => m.role === 'user').length;
      const responses = [
        'Entendi! Pode me dar mais detalhes sobre as funcionalidades principais que você precisa implementar?',
        'Ótimo! Qual é o prazo estimado para esse projeto? E você já tem alguma preferência de tecnologias?',
        'Perfeito! Entendi todas as informações necessárias. Vou gerar a modelagem completa do projeto para você revisar.',
      ];
      
      const responseIndex = Math.min(userMessageCount, responses.length - 1);
      const shouldEnableGenerate = responseIndex === responses.length - 1;

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[responseIndex],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      
      if (shouldEnableGenerate) {
        setCanGenerate(true);
      }
    }, 1500);
  };

  const handleGenerateModeling = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/modelagem/proj-1');
    }, 2000);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Modelagem com IA</h1>
            <p className="text-sm text-gray-500">Descreva seu projeto e deixe a IA fazer o resto</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-2xl rounded-2xl px-5 py-3 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <span className="text-xs opacity-70 mt-2 block">
                {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl px-5 py-3 flex items-center gap-2">
              <Loader2 className="animate-spin text-gray-500" size={16} />
              <span className="text-sm text-gray-500">IA está pensando...</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-6">
        {canGenerate && (
          <button
            onClick={handleGenerateModeling}
            disabled={isLoading}
            className="w-full mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Gerando Modelagem...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Gerar Modelagem do Projeto
              </>
            )}
          </button>
        )}
        
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Descreva seu projeto aqui..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
