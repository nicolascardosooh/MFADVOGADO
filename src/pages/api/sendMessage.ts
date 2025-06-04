import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (nome: string, email: string, mensagem: string, telefone: string) => {
  const mailOptions = {
    from: "nicolascardoso1989@gmail.com",
    to: "maiconfabianoadv@gmail.com",
    //to: "nicolascardoso1989@gmail.com",
    subject: 'Nova Mensagem de Contato - MF Advogado',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #333;">📬 Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
          ${mensagem}
        </div>
        <br />
        <p style="font-size: 12px; color: #777;">Enviado automaticamente pelo site.</p>
      </div>
    `,
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

    if (!nome || !email || !mensagem) {
      return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
    }

    try {
      await sendEmail(nome, email, mensagem, telefone);
      return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao enviar o e-mail. Tente novamente mais tarde.' + error });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
