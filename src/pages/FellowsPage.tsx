import { useState } from 'react';
import { Circle, Mail, Award } from 'lucide-react';
import { mockFellows } from '../data/mockData';

export function FellowsPage() {
  const [fellows] = useState(mockFellows);
  const [selectedFellow, setSelectedFellow] = useState<string | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Livre':
        return <Circle className="fill-green-500 text-green-500" size={12} />;
      case 'Médio Livre':
        return <Circle className="fill-yellow-500 text-yellow-500" size={12} />;
      case 'Cheio':
        return <Circle className="fill-red-500 text-red-500" size={12} />;
      default:
        return <Circle className="fill-gray-500 text-gray-500" size={12} />;
    }
  };

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'Júnior': return 'bg-green-100 text-green-700';
      case 'Pleno': return 'bg-yellow-100 text-yellow-700';
      case 'Sênior': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const selectedFellowData = fellows.find(f => f.id === selectedFellow);

  return (
    <div className="h-full overflow-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Gerenciamento de Fellows</h1>
          <p className="text-gray-600">Visualize e gerencie todos os fellows da DevFellowship</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fellows List */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fellows.map((fellow) => (
                <div
                  key={fellow.id}
                  onClick={() => setSelectedFellow(fellow.id)}
                  className={`bg-white border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedFellow === fellow.id
                      ? 'border-blue-500 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={fellow.avatar}
                      alt={fellow.nome}
                      className="w-14 h-14 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{fellow.nome}</h3>
                      
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getNivelColor(fellow.nivel)}`}>
                          {fellow.nivel}
                        </span>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(fellow.statusDisponibilidade)}
                          <span className="text-xs text-gray-600">{fellow.statusDisponibilidade}</span>
                        </div>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-1">
                        {fellow.tecnologias.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded">
                            {tech}
                          </span>
                        ))}
                        {fellow.tecnologias.length > 3 && (
                          <span className="text-xs text-gray-500">+{fellow.tecnologias.length - 3}</span>
                        )}
                      </div>

                      <div className="mt-2 flex items-center gap-1 text-xs text-gray-600">
                        <Award size={12} />
                        <span>{fellow.historicoTasks.length} tasks completadas</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fellow Details */}
          <div className="md:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
              {selectedFellowData ? (
                <>
                  <div className="text-center mb-6">
                    <img
                      src={selectedFellowData.avatar}
                      alt={selectedFellowData.nome}
                      className="w-24 h-24 rounded-full mx-auto mb-3"
                    />
                    <h3 className="font-bold text-lg text-gray-900">{selectedFellowData.nome}</h3>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Mail size={14} className="text-gray-500" />
                      <span className="text-sm text-gray-600">{selectedFellowData.email}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">Nível</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${getNivelColor(selectedFellowData.nivel)}`}>
                        {selectedFellowData.nivel}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">Status</p>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(selectedFellowData.statusDisponibilidade)}
                        <span className="text-sm text-gray-900">{selectedFellowData.statusDisponibilidade}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">Tecnologias</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedFellowData.tecnologias.map((tech, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-3">Histórico de Tasks</p>
                      <div className="space-y-3">
                        {selectedFellowData.historicoTasks.map((task, idx) => (
                          <div key={idx} className="border-l-2 border-blue-500 pl-3">
                            <p className="text-sm font-medium text-gray-900">{task.nome}</p>
                            <p className="text-xs text-gray-600 mt-1">{task.projeto}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-500">
                                {task.dataFinalizacao.toLocaleDateString('pt-BR')}
                              </span>
                              <span className="text-xs font-medium text-blue-600">
                                {task.pontuacao} pts
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <p>Selecione um fellow para ver os detalhes</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
