import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: `Victor <${fromEmail}>`, // Usa o e-mail autenticado
      to: [email], // Envia para o destinatário correto
      subject: subject || "Sem assunto",
      react: (
        <>
          <h1>{subject}</h1>
          <p>Obrigado por nos contatar!</p>
          <p>Nova mensagem enviada:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
