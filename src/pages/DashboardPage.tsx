import { useNavigate } from 'react-router-dom';
import { MessageSquare, Users, CheckCircle, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { mockFellows, mockProject } from '../data/mockData';

export function DashboardPage() {
  const navigate = useNavigate();

  const totalFellows = mockFellows.length;
  const fellowsLivres = mockFellows.filter(f => f.statusDisponibilidade === 'Livre').length;
  const totalTasks = mockProject.tasks.length;
  const totalPontuacao = mockProject.tasks.reduce((acc, task) => acc + task.pontuacao, 0);

  const recentActivity = [
    { fellow: 'Ana Silva', action: 'Completou task "Sistema de Autenticação"', time: '2 horas atrás' },
    { fellow: 'Carlos Mendes', action: 'Iniciou task "Dashboard Analytics"', time: '5 horas atrás' },
    { fellow: 'Beatriz Costa', action: 'Completou task "Landing Page"', time: '1 dia atrás' },
  ];

  return (
    <div className="h-full overflow-auto bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles size={32} />
            <h1 className="text-3xl font-bold">Bem-vindo ao Smart Task</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Sistema inteligente de modelagem e distribuição de tarefas com IA
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Total Fellows</h3>
              <Users className="text-blue-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-900">{totalFellows}</p>
            <p className="text-sm text-green-600 mt-1">{fellowsLivres} disponíveis</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Tasks Planejadas</h3>
              <CheckCircle className="text-purple-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-900">{totalTasks}</p>
            <p className="text-sm text-gray-600 mt-1">No projeto atual</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Pontuação Total</h3>
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-900">{totalPontuacao}</p>
            <p className="text-sm text-gray-600 mt-1">Pontos acumulados</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Prazo Médio</h3>
              <Clock className="text-orange-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-900">5</p>
            <p className="text-sm text-gray-600 mt-1">Dias por task</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Ações Rápidas</h2>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/novo-projeto')}
                className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                <MessageSquare size={20} />
                <div className="text-left">
                  <p className="font-semibold">Novo Projeto com IA</p>
                  <p className="text-sm text-blue-100">Descreva e modele automaticamente</p>
                </div>
              </button>

              <button
                onClick={() => navigate('/fellows')}
                className="w-full flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-all"
              >
                <Users size={20} className="text-gray-700" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Gerenciar Fellows</p>
                  <p className="text-sm text-gray-600">Ver e editar informações</p>
                </div>
              </button>

              <button
                onClick={() => navigate('/modelagem/proj-1')}
                className="w-full flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-all"
              >
                <CheckCircle size={20} className="text-gray-700" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Ver Projeto Atual</p>
                  <p className="text-sm text-gray-600">Revisar tasks e modelagem</p>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Atividades Recentes</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.fellow}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Projeto em Modelagem</h2>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{mockProject.nome}</h3>
              <p className="text-sm text-gray-600 mb-3">{mockProject.descricao}</p>
              <div className="flex gap-4 text-sm">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                  {mockProject.tasks.length} tasks
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full">
                  {totalPontuacao} pontos
                </span>
              </div>
            </div>
            <button
              onClick={() => navigate('/modelagem/proj-1')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
