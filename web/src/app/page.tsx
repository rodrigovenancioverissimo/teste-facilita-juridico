"use client";
import React, { InputHTMLAttributes, useState } from "react";

const data = [
  {
    id: 1,
    nome: "João",
    email: "joao@example.com",
    telefone: "123456789",
    x: 10,
    y: 20,
  },
  {
    id: 2,
    nome: "Maria",
    email: "maria@example.com",
    telefone: "987654321",
    x: 30,
    y: 40,
  },
  {
    id: 3,
    nome: "José",
    email: "jose@example.com",
    telefone: "111222333",
    x: 50,
    y: 60,
  },
  // Adicione mais dados conforme necessário
];

const App = () => {
  const [filters, setFilters] = useState({
    nome: "",
    email: "",
    telefone: "",
    x: "",
    y: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredData = data.filter((item) =>
    Object.entries(filters).every(
      ([key, value]) =>
        value === "" ||
        String(item[key]).toLowerCase().includes(value.toLowerCase())
    )
  );

  return (
    <div className='container mx-auto p-4'>
      <div className='flex space-x-4 mb-4'>
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
          name='x'
          placeholder='Filtrar por coordenada X'
          value={filters.x}
          onChange={handleFilterChange}
          className='border border-gray-400 p-2'
        />
        <input
          type='text'
          name='y'
          placeholder='Filtrar por coordenada Y'
          value={filters.y}
          onChange={handleFilterChange}
          className='border border-gray-400 p-2'
        />
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
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className='border px-4 py-2'>{item.id}</td>
              <td className='border px-4 py-2'>{item.nome}</td>
              <td className='border px-4 py-2'>{item.email}</td>
              <td className='border px-4 py-2'>{item.telefone}</td>
              <td className='border px-4 py-2'>{item.x}</td>
              <td className='border px-4 py-2'>{item.y}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
