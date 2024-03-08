"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    coordenada_x: "",
    coordenada_y: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3333/clientes", formData);
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        coordenada_x: "",
        coordenada_y: "",
      });
      alert("Registro criado com sucesso!");
      router.push("/");
    } catch (error: any) {
      console.error("Erro ao criar registro:", error);
      alert("Erro ao criar registro. " + JSON.stringify(error.response.data));
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col items-start gap-4'>
        <Link
          href='/'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
        >
          Voltar
        </Link>
        <h1 className='text-2xl font-bold mb-4'>Criar Novo Cliente</h1>
      </div>
      <form onSubmit={handleSubmit} className='mb-4'>
        <input
          type='text'
          name='nome'
          placeholder='Nome'
          value={formData.nome}
          onChange={handleInputChange}
          required
          className='border border-gray-400 p-2 mb-2 block'
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleInputChange}
          className='border border-gray-400 p-2 mb-2 block'
        />
        <input
          type='text'
          name='telefone'
          placeholder='Telefone'
          value={formData.telefone}
          onChange={handleInputChange}
          required
          className='border border-gray-400 p-2 mb-2 block'
        />
        <input
          type='text'
          name='coordenada_x'
          placeholder='Coordenada X'
          value={formData.coordenada_x}
          onChange={handleInputChange}
          required
          className='border border-gray-400 p-2 mb-2 block'
        />
        <input
          type='text'
          name='coordenada_y'
          placeholder='Coordenada Y'
          value={formData.coordenada_y}
          onChange={handleInputChange}
          required
          className='border border-gray-400 p-2 mb-2 block'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Criar Registro
        </button>
      </form>
    </div>
  );
};

export default Page;
