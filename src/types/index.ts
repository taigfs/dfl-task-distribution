export type NivelConhecimento = 'Júnior' | 'Pleno' | 'Sênior';
export type StatusDisponibilidade = 'Livre' | 'Médio Livre' | 'Cheio';
export type CategoriaTarefa = 'Backend' | 'Frontend' | 'Database' | 'DevOps' | 'Design' | 'Mobile';
export type StatusProjeto = 'Em Modelagem' | 'Em Andamento' | 'Concluído';

export interface HistoricoTask {
  nome: string;
  descricao: string;
  projeto: string;
  dataFinalizacao: Date;
  pontuacao: number;
}

export interface Fellow {
  id: string;
  nome: string;
  nivel: NivelConhecimento;
  tecnologias: string[];
  statusDisponibilidade: StatusDisponibilidade;
  avatar: string;
  email: string;
  historicoTasks: HistoricoTask[];
}

export interface FellowRecomendado {
  fellowId: string;
  scoreCompatibilidade: number;
}

export interface Task {
  id: string;
  nome: string;
  descricao: string;
  prazo: number;
  pontuacao: number;
  nivelDificuldade: NivelConhecimento;
  tecnologias: string[];
  conhecimentosNecessarios: string[];
  categoria: CategoriaTarefa;
  fellowsRecomendados: FellowRecomendado[];
  fellowAtribuido?: string;
}

export interface Projeto {
  id: string;
  nome: string;
  descricao: string;
  status: StatusProjeto;
  tasks: Task[];
  dataInicio?: Date;
  dataFim?: Date;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
