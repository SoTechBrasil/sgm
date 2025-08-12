"use client";
import React, { useState } from "react";
import { useUser } from "@/context/user_context";
import { 
  FaTable, 
  FaUsers, 
  FaCog, 
  FaChartBar, 
  FaClipboardList, 
  FaBars,
  FaTimes,
  FaHome,
  FaSignOutAlt
} from "react-icons/fa";

export default function Home() {
    const { user } = useUser();
    const [activeMenu, setActiveMenu] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: FaHome },
        { id: "mesas", label: "Mesas", icon: FaTable },
        { id: "funcionarios", label: "Funcionários", icon: FaUsers },
        { id: "pedidos", label: "Pedidos", icon: FaClipboardList },
        { id: "relatorios", label: "Relatórios", icon: FaChartBar },
        { id: "configuracoes", label: "Configurações", icon: FaCog },
    ];

    if (!user) {
        return <p>Carregando dados do usuário...</p>;
    }

    const renderContent = () => {
        switch(activeMenu) {
            case "dashboard":
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">Mesas Ativas</h3>
                            <p className="text-3xl font-bold">12</p>
                        </div>
                        <div className="bg-green-500 text-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">Funcionários</h3>
                            <p className="text-3xl font-bold">8</p>
                        </div>
                        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">Pedidos Hoje</h3>
                            <p className="text-3xl font-bold">45</p>
                        </div>
                        <div className="bg-purple-500 text-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">Faturamento</h3>
                            <p className="text-3xl font-bold">R$ 2.340</p>
                        </div>
                    </div>
                );
            case "mesas":
                return (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Gerenciar Mesas</h2>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Nova Mesa
                            </button>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {[1,2,3,4,5,6,7,8].map(mesa => (
                                    <div key={mesa} className="border rounded-lg p-4 text-center">
                                        <FaTable className="mx-auto text-2xl mb-2 text-gray-600" />
                                        <h3 className="font-semibold">Mesa {mesa}</h3>
                                        <span className={`inline-block px-2 py-1 rounded text-sm ${
                                            mesa % 3 === 0 ? 'bg-red-100 text-red-800' : 
                                            mesa % 2 === 0 ? 'bg-yellow-100 text-yellow-800' : 
                                            'bg-green-100 text-green-800'
                                        }`}>
                                            {mesa % 3 === 0 ? 'Ocupada' : mesa % 2 === 0 ? 'Reservada' : 'Livre'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case "funcionarios":
                return (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Funcionários</h2>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Novo Funcionário
                            </button>
                        </div>
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cargo</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">João Silva</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Garçom</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800">Ativo</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <button className="text-blue-600 hover:underline mr-2">Editar</button>
                                            <button className="text-red-600 hover:underline">Excluir</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case "pedidos":
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Pedidos</h2>
                        <div className="bg-white rounded-lg shadow p-6">
                            <p className="text-gray-600">Lista de pedidos em tempo real...</p>
                        </div>
                    </div>
                );
            case "relatorios":
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Relatórios</h2>
                        <div className="bg-white rounded-lg shadow p-6">
                            <p className="text-gray-600">Relatórios de vendas e performance...</p>
                        </div>
                    </div>
                );
            case "configuracoes":
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Configurações</h2>
                        <div className="bg-white rounded-lg shadow p-6">
                            <p className="text-gray-600">Configurações do sistema...</p>
                        </div>
                    </div>
                );
            default:
                return <div>Página não encontrada</div>;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-gray-800 text-white transition-all duration-300 flex flex-col`}>
                {/* Header */}
                <div className="p-4 border-b border-gray-700">
                    <div className="flex items-center justify-between">
                        {sidebarOpen && <h1 className="text-xl font-bold">SGM Admin</h1>}
                        <button 
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 hover:bg-gray-700 rounded"
                        >
                            {sidebarOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 py-4">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveMenu(item.id)}
                                className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-700 transition-colors ${ activeMenu === item.id ? 'bg-gray-700 border-r-4 border-blue-500' : ''}`}>
                                <Icon className="text-xl" />
                                {sidebarOpen && <span className="ml-3">{item.label}</span>}
                            </button>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-gray-700">
                    <button className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-700 rounded transition-colors">
                        <FaSignOutAlt />
                        {sidebarOpen && <span className="ml-3">Sair</span>}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <header className="bg-white shadow-sm border-b px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-gray-800">
                            {menuItems.find(item => item.id === activeMenu)?.label || 'Dashboard'}
                        </h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600">{user?.nome}</span>
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}