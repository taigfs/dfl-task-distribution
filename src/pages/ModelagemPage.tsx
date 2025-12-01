import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Check, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { mockProject } from '../data/mockData';

export function ModelagemPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [projeto] = useState(mockProject);
  const [expandedTasks, setExpandedTasks] = useState<Set<string>>(new Set());

  const toggleTaskExpansion = (taskId: string) => {
    const newExpanded = new Set(expandedTasks);
    if (newExpanded.has(taskId)) {
      newExpanded.delete(taskId);
    } else {
      newExpanded.add(taskId);
    }
    setExpandedTasks(newExpanded);
  };

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'Júnior': return 'bg-green-100 text-green-700';
      case 'Pleno': return 'bg-yellow-100 text-yellow-700';
      case 'Sênior': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'Backend': return 'bg-blue-100 text-blue-700';
      case 'Frontend': return 'bg-purple-100 text-purple-700';
      case 'Database': return 'bg-indigo-100 text-indigo-700';
      case 'DevOps': return 'bg-orange-100 text-orange-700';
      case 'Design': return 'bg-pink-100 text-pink-700';
      case 'Mobile': return 'bg-teal-100 text-teal-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const totalPontuacao = projeto.tasks.reduce((acc, task) => acc + task.pontuacao, 0);
  const totalPrazo = Math.max(...projeto.tasks.map(task => task.prazo));

  return (
    <div className="h-full overflow-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{projeto.nome}</h1>
          <p className="text-gray-600 mb-4">{projeto.descricao}</p>
          
          <div className="flex gap-6">
            <div className="bg-blue-50 px-4 py-2 rounded-lg">
              <p className="text-xs text-blue-600 font-medium">Prazo Total</p>
              <p className="text-lg font-bold text-blue-700">{totalPrazo} dias</p>
            </div>
            <div className="bg-purple-50 px-4 py-2 rounded-lg">
              <p className="text-xs text-purple-600 font-medium">Pontuação Total</p>
              <p className="text-lg font-bold text-purple-700">{totalPontuacao} pontos</p>
            </div>
            <div className="bg-green-50 px-4 py-2 rounded-lg">
              <p className="text-xs text-green-600 font-medium">Total de Tasks</p>
              <p className="text-lg font-bold text-green-700">{projeto.tasks.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Tasks do Projeto</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Plus size={18} />
            <span className="font-medium">Adicionar Task</span>
          </button>
        </div>

        <div className="space-y-3">
          {projeto.tasks.map((task) => (
            <div key={task.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{task.nome}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoriaColor(task.categoria)}`}>
                        {task.categoria}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getNivelColor(task.nivelDificuldade)}`}>
                        {task.nivelDificuldade}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{task.descricao}</p>
                    
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="text-gray-500">Prazo:</span>
                        <span className="ml-1 font-medium text-gray-900">{task.prazo} dias</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Pontuação:</span>
                        <span className="ml-1 font-medium text-gray-900">{task.pontuacao} pts</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Fellows Disponíveis:</span>
                        <span className="ml-1 font-medium text-gray-900">{task.fellowsRecomendados.length}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleTaskExpansion(task.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {expandedTasks.has(task.id) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {expandedTasks.has(task.id) && (
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                    <div>
                      <p className="text-xs font-medium text-gray-700 mb-2">Tecnologias</p>
                      <div className="flex flex-wrap gap-2">
                        {task.tecnologias.map((tech, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-700 mb-2">Conhecimentos Necessários</p>
                      <div className="flex flex-wrap gap-2">
                        {task.conhecimentosNecessarios.map((conhecimento, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 bg-purple-50 text-purple-700 rounded-full">
                            {conhecimento}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-3 justify-end">
          <button
            onClick={() => navigate('/novo-projeto')}
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Solicitar Nova Modelagem
          </button>
          <button
            onClick={() => navigate(`/matching/${projectId}`)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2"
          >
            <Check size={20} />
            Aprovar Modelagem
          </button>
        </div>
      </div>
    </div>
  );
}
