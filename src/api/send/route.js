import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'Victor <victorfagundes123@gmail.com>',
      to: ['victorfagundes123@gmail.com'],
      subject: 'Hello world',
      react:(
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
    return NextResponse.json({ error });
  }
}