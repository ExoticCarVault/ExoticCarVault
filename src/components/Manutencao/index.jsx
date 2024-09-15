import { useState } from "react";

export const Manutencao = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Aqui você pode adicionar a lógica para enviar os dados para o backend
      console.log('Email:', email);
      console.log('Mensagem:', message);
  
      // Limpar os campos e mostrar mensagem de confirmação
      setSubmitted(true);
      setEmail('');
      setMessage('');
    };
  
    return(
        <div className="bg-BALCK flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col justify-center items-center p-5">
            <h1 className="text-3xl font-bold mb-5">Página em manutenção</h1>
            <p>Para algum problema especifico por favor preencha o formulario</p>
        </div>
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 text-black">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Reporte um Problema</h2>
          {submitted ? (
            <p className="text-center text-green-600">Obrigado! Seu problema foi enviado com sucesso.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold">
                  Seu E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Digite seu e-mail"
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-[#b5a47e] focus:border-[#b5a47e]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold">
                  Descrição do Problema
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Descreva o problema que você está enfrentando..."
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-[#b5a47e] focus:border-[#b5a47e]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-[#b5a47e] text-white font-semibold py-2 rounded-md shadow hover:bg-[#b5a47e] focus:outline-none focus:ring-2 focus:ring-[#b5a47e] focus:ring-offset-2"
                >
                  Enviar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
}