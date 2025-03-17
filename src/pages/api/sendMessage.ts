import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Você pode usar outros serviços, como SendGrid ou Mailgun
  auth: {
    user: process.env.EMAIL_USER,  // Usa a variável de ambiente
    pass: process.env.EMAIL_PASS,  // Usa a variável de ambiente
  },
});

const sendEmail = async (nome: string, email: string, mensagem: string, telefone: string) => {
  const mailOptions = {
    from: "nicolascardoso1989@gmail.com", // Remetente
    to: "maiconfabianoadv@gmail.com", // Destinatário
    //to: "nicolascardoso1989@gmail.com", // Destinatário
    subject: 'Nova Mensagem de Contato',
    text: `Você recebeu uma nova mensagem de contato:\n\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}\nTelefone: ${telefone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw new Error('Erro ao enviar e-mail');
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nome, email, mensagem, telefone } = req.body;

    // Verifique se os dados necessários estão presentes
    if (!nome || !email || !mensagem) {
      return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
    }

    try {
      // Envia o e-mail para o administrador
      await sendEmail(nome, email, mensagem,telefone);
      return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao enviar o e-mail. Tente novamente mais tarde.' + error });
    }
  } else {
    // Método não permitido
    res.status(405).json({ error: 'Método não permitido' });
  }
}
