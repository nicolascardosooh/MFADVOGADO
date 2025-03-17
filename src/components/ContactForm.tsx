import { useState } from 'react';

const ContactForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [status, setStatus] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, mensagem, telefone }),
        });

        const data = await res.json();

        if (res.status === 200) {
            setStatus('Mensagem enviada com sucesso!');
            setNome('');
            setEmail('');
            setMensagem('');
        } else {
            setStatus(data.error || 'Erro ao enviar a mensagem');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
            />
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
            />

            <input
                type="text"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full p-3 border rounded-md"required
            />

            <textarea
                placeholder="Sua mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full p-3 border rounded-md h-32"
                required
            ></textarea>
            <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-md mb-5 hover:bg-blue-800 transition hover:cursor-pointer"
            >
                Enviar Mensagem
            </button>
            {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
        </form>
    );
};

export default ContactForm;
