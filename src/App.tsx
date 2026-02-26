import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChatPage } from './pages/ChatPage';
import { ModelagemPage } from './pages/ModelagemPage';
import { MatchingPage } from './pages/MatchingPage';
import { FellowsPage } from './pages/FellowsPage';
import { DashboardPage } from './pages/DashboardPage';
import { Layout } from './components/Layout';
import { ObservabilityProvider } from '@/components/observability';
import './App.css';

function App() {
  return (
    <ObservabilityProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="novo-projeto" element={<ChatPage />} />
            <Route path="modelagem/:projectId" element={<ModelagemPage />} />
            <Route path="matching/:projectId" element={<MatchingPage />} />
            <Route path="fellows" element={<FellowsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ObservabilityProvider>
  );
}

export default App;
