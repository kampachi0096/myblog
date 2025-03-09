import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 });
    }

    const response = await resend.emails.send({
      from: "no-reply@resend.dev", //resend.devにする. それ以外はドメイン認証する必要がある
      to: "kanchann033@gmail.com", // 送信先
      subject: "New contact", //タイトル
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, //書式
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
