import type { Fellow, Projeto, Task } from '../types';

export const mockFellows: Fellow[] = [
  {
    id: '1',
    nome: 'Ana Silva',
    nivel: 'Sênior',
    tecnologias: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    statusDisponibilidade: 'Livre',
    avatar: 'https://i.pravatar.cc/150?img=1',
    email: 'ana.silva@devfellowship.com',
    historicoTasks: [
      {
        nome: 'Implementar Sistema de Autenticação',
        descricao: 'JWT + OAuth2',
        projeto: 'E-commerce XYZ',
        dataFinalizacao: new Date('2024-10-15'),
        pontuacao: 13
      },
      {
        nome: 'Migração de Banco de Dados',
        descricao: 'MySQL para PostgreSQL',
        projeto: 'Sistema Financeiro ABC',
        dataFinalizacao: new Date('2024-09-20'),
        pontuacao: 21
      }
    ]
  },
  {
    id: '2',
    nome: 'Carlos Mendes',
    nivel: 'Pleno',
    tecnologias: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Express'],
    statusDisponibilidade: 'Médio Livre',
    avatar: 'https://i.pravatar.cc/150?img=12',
    email: 'carlos.mendes@devfellowship.com',
    historicoTasks: [
      {
        nome: 'Dashboard Analytics',
        descricao: 'Construção de dashboard com gráficos',
        projeto: 'Portal Corporativo',
        dataFinalizacao: new Date('2024-11-01'),
        pontuacao: 8
      }
    ]
  },
  {
    id: '3',
    nome: 'Beatriz Costa',
    nivel: 'Júnior',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    statusDisponibilidade: 'Livre',
    avatar: 'https://i.pravatar.cc/150?img=5',
    email: 'beatriz.costa@devfellowship.com',
    historicoTasks: [
      {
        nome: 'Landing Page Responsiva',
        descricao: 'Página de marketing',
        projeto: 'Campanha Marketing Digital',
        dataFinalizacao: new Date('2024-10-28'),
        pontuacao: 5
      }
    ]
  },
  {
    id: '4',
    nome: 'Daniel Oliveira',
    nivel: 'Sênior',
    tecnologias: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    statusDisponibilidade: 'Cheio',
    avatar: 'https://i.pravatar.cc/150?img=13',
    email: 'daniel.oliveira@devfellowship.com',
    historicoTasks: [
      {
        nome: 'API RESTful Completa',
        descricao: 'Microserviços em Python',
        projeto: 'Plataforma SaaS',
        dataFinalizacao: new Date('2024-11-10'),
        pontuacao: 21
      },
      {
        nome: 'Otimização de Performance',
        descricao: 'Cache e queries SQL',
        projeto: 'Sistema Legado',
        dataFinalizacao: new Date('2024-09-15'),
        pontuacao: 13
      }
    ]
  },
  {
    id: '5',
    nome: 'Fernanda Lima',
    nivel: 'Pleno',
    tecnologias: ['Vue.js', 'TypeScript', 'Node.js', 'MySQL', 'Git'],
    statusDisponibilidade: 'Livre',
    avatar: 'https://i.pravatar.cc/150?img=9',
    email: 'fernanda.lima@devfellowship.com',
    historicoTasks: [
      {
        nome: 'Sistema de Notificações',
        descricao: 'Real-time com WebSocket',
        projeto: 'App de Mensagens',
        dataFinalizacao: new Date('2024-10-05'),
        pontuacao: 8
      }
    ]
  },
  {
    id: '6',
    nome: 'Gabriel Santos',
    nivel: 'Júnior',
    tecnologias: ['React', 'JavaScript', 'CSS', 'HTML', 'Git'],
    statusDisponibilidade: 'Médio Livre',
    avatar: 'https://i.pravatar.cc/150?img=14',
    email: 'gabriel.santos@devfellowship.com',
    historicoTasks: [
      {
        nome: 'Componentes Reutilizáveis',
        descricao: 'Library de UI components',
        projeto: 'Design System',
        dataFinalizacao: new Date('2024-11-12'),
        pontuacao: 5
      }
    ]
  },
  {
    id: '7',
    nome: 'Helena Rodrigues',
    nivel: 'Sênior',
    tecnologias: ['React Native', 'TypeScript', 'Firebase', 'iOS', 'Android'],
    statusDisponibilidade: 'Livre',
    avatar: 'https://i.pravatar.cc/150?img=10',
    email: 'helena.rodrigues@devfellowship.com',
    historicoTasks: [
      {
        nome: 'App Mobile E-commerce',
        descricao: 'iOS e Android nativo',
        projeto: 'Loja Virtual',
        dataFinalizacao: new Date('2024-10-22'),
        pontuacao: 21
      }
    ]
  },
  {
    id: '8',
    nome: 'Igor Ferreira',
    nivel: 'Pleno',
    tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS'],
    statusDisponibilidade: 'Livre',
    avatar: 'https://i.pravatar.cc/150?img=15',
    email: 'igor.ferreira@devfellowship.com',
    historicoTasks: [
      {
        nome: 'Integração com ERP',
        descricao: 'APIs SOAP e REST',
        projeto: 'Sistema Empresarial',
        dataFinalizacao: new Date('2024-09-30'),
        pontuacao: 13
      }
    ]
  }
];

export const generateMockTasks = (): Task[] => [
  {
    id: '1',
    nome: 'Configurar Arquitetura do Backend',
    descricao: 'Definir estrutura de pastas, configurar Express/Fastify, implementar middleware de autenticação',
    prazo: 5,
    pontuacao: 13,
    nivelDificuldade: 'Sênior',
    tecnologias: ['Node.js', 'TypeScript', 'Express', 'JWT'],
    conhecimentosNecessarios: ['Clean Architecture', 'Design Patterns', 'Security'],
    categoria: 'Backend',
    fellowsRecomendados: [
      { fellowId: '1', scoreCompatibilidade: 95 },
      { fellowId: '4', scoreCompatibilidade: 88 },
      { fellowId: '8', scoreCompatibilidade: 75 }
    ]
  },
  {
    id: '2',
    nome: 'Modelagem de Banco de Dados',
    descricao: 'Criar schema do PostgreSQL, definir relacionamentos, indexes e migrations',
    prazo: 3,
    pontuacao: 8,
    nivelDificuldade: 'Pleno',
    tecnologias: ['PostgreSQL', 'SQL', 'Prisma'],
    conhecimentosNecessarios: ['Database Design', 'Normalization', 'Query Optimization'],
    categoria: 'Database',
    fellowsRecomendados: [
      { fellowId: '1', scoreCompatibilidade: 92 },
      { fellowId: '4', scoreCompatibilidade: 90 },
      { fellowId: '5', scoreCompatibilidade: 70 }
    ]
  },
  {
    id: '3',
    nome: 'Implementar APIs REST',
    descricao: 'Criar endpoints CRUD para todas as entidades, validação de dados, paginação',
    prazo: 7,
    pontuacao: 13,
    nivelDificuldade: 'Pleno',
    tecnologias: ['Node.js', 'Express', 'PostgreSQL', 'Zod'],
    conhecimentosNecessarios: ['RESTful APIs', 'HTTP Methods', 'Validation'],
    categoria: 'Backend',
    fellowsRecomendados: [
      { fellowId: '2', scoreCompatibilidade: 85 },
      { fellowId: '5', scoreCompatibilidade: 82 },
      { fellowId: '8', scoreCompatibilidade: 78 }
    ]
  },
  {
    id: '4',
    nome: 'Desenvolver Interface de Chat',
    descricao: 'Componente de chat interativo com histórico de mensagens, auto-scroll',
    prazo: 4,
    pontuacao: 8,
    nivelDificuldade: 'Pleno',
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS'],
    conhecimentosNecessarios: ['React Hooks', 'Component Design', 'State Management'],
    categoria: 'Frontend',
    fellowsRecomendados: [
      { fellowId: '1', scoreCompatibilidade: 93 },
      { fellowId: '2', scoreCompatibilidade: 88 },
      { fellowId: '6', scoreCompatibilidade: 65 }
    ]
  },
  {
    id: '5',
    nome: 'Criar Sistema de Edição de Tasks',
    descricao: 'Interface para reorganizar tasks, edição inline, validação de formulários',
    prazo: 5,
    pontuacao: 13,
    nivelDificuldade: 'Pleno',
    tecnologias: ['React', 'TypeScript', 'Tailwind'],
    conhecimentosNecessarios: ['State Management', 'Form Validation', 'UX Design'],
    categoria: 'Frontend',
    fellowsRecomendados: [
      { fellowId: '1', scoreCompatibilidade: 90 },
      { fellowId: '5', scoreCompatibilidade: 85 },
      { fellowId: '2', scoreCompatibilidade: 82 }
    ]
  },
  {
    id: '6',
    nome: 'Implementar Algoritmo de Matching',
    descricao: 'Lógica para calcular compatibilidade entre Fellows e Tasks',
    prazo: 6,
    pontuacao: 21,
    nivelDificuldade: 'Sênior',
    tecnologias: ['TypeScript', 'Algorithms'],
    conhecimentosNecessarios: ['Algorithm Design', 'Scoring Systems'],
    categoria: 'Backend',
    fellowsRecomendados: [
      { fellowId: '1', scoreCompatibilidade: 95 },
      { fellowId: '4', scoreCompatibilidade: 92 }
    ]
  },
  {
    id: '7',
    nome: 'Design System e Componentes UI',
    descricao: 'Criar biblioteca de componentes reutilizáveis: buttons, cards, modals',
    prazo: 4,
    pontuacao: 8,
    nivelDificuldade: 'Júnior',
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS'],
    conhecimentosNecessarios: ['Component Architecture', 'CSS', 'Accessibility'],
    categoria: 'Frontend',
    fellowsRecomendados: [
      { fellowId: '3', scoreCompatibilidade: 88 },
      { fellowId: '6', scoreCompatibilidade: 85 }
    ]
  },
  {
    id: '8',
    nome: 'Integração com API de IA',
    descricao: 'Integrar OpenAI API para processamento de descrição de projetos',
    prazo: 5,
    pontuacao: 13,
    nivelDificuldade: 'Sênior',
    tecnologias: ['Node.js', 'OpenAI API', 'TypeScript'],
    conhecimentosNecessarios: ['API Integration', 'Async Programming'],
    categoria: 'Backend',
    fellowsRecomendados: [
      { fellowId: '1', scoreCompatibilidade: 87 },
      { fellowId: '4', scoreCompatibilidade: 85 }
    ]
  }
];

export const mockProject: Projeto = {
  id: 'proj-1',
  nome: 'Smart Task - Sistema de Gestão',
  descricao: 'Plataforma completa para modelagem inteligente de projetos e distribuição de tarefas',
  status: 'Em Modelagem',
  tasks: generateMockTasks(),
  dataInicio: new Date('2024-12-01'),
  dataFim: new Date('2025-01-31')
};
