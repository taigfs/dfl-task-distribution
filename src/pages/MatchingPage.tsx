import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Circle, Users } from 'lucide-react';
import { mockProject, mockFellows } from '../data/mockData';

export function MatchingPage() {
  const navigate = useNavigate();
  const [projeto] = useState(mockProject);
  const [selectedFellows, setSelectedFellows] = useState<Record<string, string>>({});

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

  const selectFellow = (taskId: string, fellowId: string) => {
    setSelectedFellows(prev => ({
      ...prev,
      [taskId]: fellowId
    }));
  };

  const autoAssign = () => {
    const newAssignments: Record<string, string> = {};
    projeto.tasks.forEach(task => {
      if (task.fellowsRecomendados.length > 0) {
        newAssignments[task.id] = task.fellowsRecomendados[0].fellowId;
      }
    });
    setSelectedFellows(newAssignments);
  };

  const saveAllocations = () => {
    alert('Alocações salvas com sucesso!');
    navigate('/dashboard');
  };

  return (
    <div className="h-full overflow-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Matching de Fellows</h1>
          <p className="text-gray-600">Selecione os melhores fellows para cada task do projeto</p>
          
          <div className="mt-4 flex gap-3">
            <button
              onClick={autoAssign}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Users size={18} />
              Atribuir Automaticamente
            </button>
            <button
              onClick={saveAllocations}
              disabled={Object.keys(selectedFellows).length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check size={18} />
              Salvar Alocações
            </button>
          </div>
        </div>
      </div>

      {/* Tasks and Fellows */}
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-8">
        {projeto.tasks.map((task) => (
          <div key={task.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Task Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">{task.nome}</h3>
              <p className="text-sm text-gray-600 mb-3">{task.descricao}</p>
              <div className="flex gap-4 text-sm">
                <span className={`px-2 py-1 rounded-full text-xs ${getNivelColor(task.nivelDificuldade)}`}>
                  {task.nivelDificuldade}
                </span>
                <span className="text-gray-600">Prazo: {task.prazo} dias</span>
                <span className="text-gray-600">Pontuação: {task.pontuacao} pts</span>
              </div>
            </div>

            {/* Fellows List */}
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users size={18} />
                Fellows Recomendados ({task.fellowsRecomendados.length})
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {task.fellowsRecomendados
                  .map(rec => ({
                    ...mockFellows.find(f => f.id === rec.fellowId)!,
                    score: rec.scoreCompatibilidade
                  }))
                  .sort((a, b) => b.score - a.score)
                  .map((fellow) => (
                    <div
                      key={fellow.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedFellows[task.id] === fellow.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => selectFellow(task.id, fellow.id)}
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={fellow.avatar}
                          alt={fellow.nome}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-semibold text-gray-900">{fellow.nome}</h5>
                            {selectedFellows[task.id] === fellow.id && (
                              <Check className="text-blue-600" size={18} />
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getNivelColor(fellow.nivel)}`}>
                              {fellow.nivel}
                            </span>
                            <div className="flex items-center gap-1">
                              {getStatusIcon(fellow.statusDisponibilidade)}
                              <span className="text-xs text-gray-600">{fellow.statusDisponibilidade}</span>
                            </div>
                          </div>
                          
                          {/* Score Bar */}
                          <div className="mb-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600">Compatibilidade</span>
                              <span className="font-semibold text-blue-600">{fellow.score}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all"
                                style={{ width: `${fellow.score}%` }}
                              />
                            </div>
                          </div>

                          {/* Tecnologias */}
                          <div className="flex flex-wrap gap-1 mb-2">
                            {fellow.tecnologias.slice(0, 4).map((tech, idx) => {
                              const isMatch = task.tecnologias.includes(tech);
                              return (
                                <span
                                  key={idx}
                                  className={`text-xs px-2 py-0.5 rounded ${
                                    isMatch
                                      ? 'bg-green-100 text-green-700 font-medium'
                                      : 'bg-gray-100 text-gray-600'
                                  }`}
                                >
                                  {tech}
                                </span>
                              );
                            })}
                            {fellow.tecnologias.length > 4 && (
                              <span className="text-xs text-gray-500">+{fellow.tecnologias.length - 4}</span>
                            )}
                          </div>

                          {/* Histórico */}
                          <div className="text-xs text-gray-600">
                            {fellow.historicoTasks.length} tasks completadas
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
