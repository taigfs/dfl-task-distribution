import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Users, MessageSquare, Sparkles } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname.includes(path);
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Smart Task</h1>
              <p className="text-xs text-gray-500">DevFellowship</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('dashboard')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Home size={20} />
            <span className="font-medium">Dashboard</span>
          </Link>
          
          <Link
            to="/novo-projeto"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('novo-projeto') || isActive('modelagem') || isActive('matching')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <MessageSquare size={20} />
            <span className="font-medium">Novo Projeto</span>
          </Link>
          
          <Link
            to="/fellows"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('fellows')
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Users size={20} />
            <span className="font-medium">Fellows</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">AD</span>
            </div>
            <div>
              <p className="font-medium text-sm">Admin</p>
              <p className="text-xs text-gray-500">admin@devfellowship.com</p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
