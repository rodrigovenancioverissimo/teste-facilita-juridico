"use client";
import Modal from "@/components/modal";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export type Cliente = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  coordenada_x: number;
  coordenada_y: number;
};

const App = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [filters, setFilters] = useState({
    nome: "",
    email: "",
    telefone: "",
    coordenada_x: "",
    coordenada_y: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const params = new URLSearchParams(filters).toString();
        const response = await axios.get<Cliente[]>(
          `http://localhost:3333/clientes?${params}`
        );
        setClientes(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col mb-2 gap-4'>
        <div className='flex flex-row gap-4'>
          <Link
            href='/create'
            className='bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded'
          >
            Novo Cliente
          </Link>
          <Modal />
        </div>
        <div className='flex flex-row gap-4'>
          <input
            type='text'
            name='nome'
            placeholder='Filtrar por nome'
            value={filters.nome}
            onChange={handleFilterChange}
            className='border border-gray-400 p-2'
          />
          <input
            type='text'
            name='email'
            placeholder='Filtrar por email'
            value={filters.email}
            onChange={handleFilterChange}
            className='border border-gray-400 p-2'
          />
          <input
            type='text'
            name='telefone'
            placeholder='Filtrar por telefone'
            value={filters.telefone}
            onChange={handleFilterChange}
            className='border border-gray-400 p-2'
          />
          <input
            type='text'
            name='coordenada_x'
            placeholder='Filtrar por coordenada X'
            value={filters.coordenada_x}
            onChange={handleFilterChange}
            className='border border-gray-400 p-2'
          />
          <input
            type='text'
            name='coordenada_y'
            placeholder='Filtrar por coordenada Y'
            value={filters.coordenada_y}
            onChange={handleFilterChange}
            className='border border-gray-400 p-2'
          />
        </div>
      </div>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>#ID</th>
            <th className='border px-4 py-2'>Nome</th>
            <th className='border px-4 py-2'>Email</th>
            <th className='border px-4 py-2'>Telefone</th>
            <th className='border px-4 py-2'>Coordenada X</th>
            <th className='border px-4 py-2'>Coordenada Y</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((item) => (
            <tr key={item.id}>
              <td className='border px-4 py-2'>{item.id}</td>
              <td className='border px-4 py-2'>{item.nome}</td>
              <td className='border px-4 py-2'>{item.email}</td>
              <td className='border px-4 py-2'>{item.telefone}</td>
              <td className='border px-4 py-2'>{item.coordenada_x}</td>
              <td className='border px-4 py-2'>{item.coordenada_y}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
