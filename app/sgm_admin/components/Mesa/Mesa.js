"use client";
import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { FaTable } from "react-icons/fa";
import { createTable, listTables } from "@/api/table";

export default function Mesa() {
    const [modalOpen, setModalOpen] = useState(false);
    const [mesas, setMesas] = useState([]);

    useEffect(() => {
        listMesas();
    }, []);

    const listMesas = async () => {
        try {
            const mesas = await listTables();
            setMesas(mesas);
            console.log(mesas);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black">Gerenciar Mesas</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setModalOpen(true)}>
                    Nova Mesa
                </button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(mesa => (
                        <div key={mesa} className="border rounded-lg p-4 text-center">
                            <FaTable className="mx-auto text-2xl mb-2 text-gray-600" />
                            <h3 className="font-semibold">Mesa {mesa}</h3>
                            <span className={`inline-block px-2 py-1 rounded text-sm ${mesa % 3 === 0 ? 'bg-red-100 text-red-800' :
                                mesa % 2 === 0 ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                                }`}>
                                {mesa % 3 === 0 ? 'Ocupada' : mesa % 2 === 0 ? 'Reservada' : 'Livre'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <h2 className="text-2xl font-bold text-black mb-4">Nova Mesa</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-black">Nome da Mesa</label>
                        <input type="text" placeholder="Ex: Mesa 1" className="mt-1 block w-full border border-gray-300 placeholder:text-black rounded-md shadow-sm p-2 text-black" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-black">Capacidade Maxima</label>
                        <input type="text" placeholder="Ex: 4" className="mt-1 block w-full border border-gray-300 placeholder:text-black rounded-md shadow-sm p-2 text-black" />
                    </div>
                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setModalOpen(false)}>
                        Criar Mesa
                    </button>
                </form>
            </Modal>
        </div>
    )
}