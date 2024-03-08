import React, { useState } from "react";
import axios from "axios";
import { Cliente } from "@/app/page";

const Modal = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = async () => {
    try {
      const response = await axios.get<Cliente[]>(
        "http://localhost:3333/clientes/calculate-route"
      );
      setClientes(response.data);
      setIsOpen(true);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Abrir Modal
      </button>

      {isOpen && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 transition-opacity'
              aria-hidden='true'
            >
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>

            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full'>
              <div className='bg-white px-4 pt-5 pb-4 p-6 '>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      Lista de Clientes por ordem de visita
                    </h3>
                    <div className='mt-2'>
                      <table className='w-full'>
                        <thead>
                          <tr>
                            <th className='border px-4 py-2'>Ordem</th>
                            <th className='border px-4 py-2'>#ID</th>
                            <th className='border px-4 py-2'>Nome</th>
                            <th className='border px-4 py-2'>Email</th>
                            <th className='border px-4 py-2'>Telefone</th>
                            <th className='border px-4 py-2'>Coordenada X</th>
                            <th className='border px-4 py-2'>Coordenada Y</th>
                          </tr>
                        </thead>
                        <tbody>
                          {clientes.map((item, i) => (
                            <tr key={item.id}>
                              <td className='border px-4 py-2'>{i + 1}</td>
                              <td className='border px-4 py-2'>{item.id}</td>
                              <td className='border px-4 py-2'>{item.nome}</td>
                              <td className='border px-4 py-2'>{item.email}</td>
                              <td className='border px-4 py-2'>
                                {item.telefone}
                              </td>
                              <td className='border px-4 py-2'>
                                {item.coordenada_x}
                              </td>
                              <td className='border px-4 py-2'>
                                {item.coordenada_y}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <button
                  onClick={closeModal}
                  className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
