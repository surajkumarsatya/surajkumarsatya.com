import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    /* 1️⃣ Email to YOU */
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["surajmail.799@gmail.com"],
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    /* 2️⃣ Thank-you email to USER */
    // await resend.emails.send({
    //   from: "Your Name <onboarding@resend.dev>",
    //   to: [email],
    //   subject: "Thanks for reaching out!",
    //   html: `
    //     <p>Hi ${name},</p>

    //     <p>Thank you for contacting me! I’ve received your message and will get back to you as soon as possible.</p>

    //     <p><strong>Your message:</strong></p>
    //     <blockquote>${message}</blockquote>

    //     <p>Best regards,<br />
    //     Your Name</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
