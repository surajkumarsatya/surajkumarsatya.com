import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

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
    await resend.emails.send({
      from: "Suraj Kumar Satya <hello@surajkumarsatya.com>",
      to: [email],
      subject: "Thank you for reaching out",
      html: `

      <style>
        @media only screen and (max-width: 600px) {
          .share-btn {
            text-align: center !important;
          }
        }
      </style>

      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111; margin: 0 auto; padding: 16px;">
        
        <p style="margin-bottom: 16px;">Hi ${name},</p>
        
        <p>
          Thank you for connecting through my portfolio website. 
          I’ve successfully received your message and truly appreciate you taking the time to reach out.
        </p>

        <p>
          I will carefully review your inquiry and get back to you as soon as possible.
        </p>

        <div style="background-color: #f9fafb; padding: 16px; border-left: 4px solid #7B40FF; margin: 24px 0;">
          <p style="margin: 0; font-style: italic; color: #444;">
            ${message}
          </p>
        </div>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />

        <p>
          I am currently 
          <span style="
            display: inline-block;
            background: #111;
            color: #ffffff;
            padding: 4px 12px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 13px;
          ">
            Open to Work
          </span>
          and actively exploring Frontend Developer opportunities.
        </p>

        <p>
          If your team — or someone in your network — is hiring for a frontend role,
          I would genuinely appreciate a referral or an opportunity to connect.
        </p>

        <p>
          You can also reach me directly at 
          <a href="mailto:surajmail.799@gmail.com" style="color: #7B40FF; text-decoration: none; font-weight: 500;">
            surajmail.799@gmail.com
          </a> (my primary inbox).
        </p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />

        <p style="margin-bottom: 10px;">
          Know someone hiring? Feel free to share my profile:
        </p>

        <div style="margin-bottom: 20px;" class="share-btn">

          <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://surajkumarsatya.com"
          
            style="
              display:inline-block;
              padding:10px 16px;
              
              background:#0A66C2;
              color:#ffffff;
              text-decoration:none;
              border-radius:6px;
              font-size:14px;
              font-weight:500;
            ">
            Share on LinkedIn
          </a>

          <a href="https://twitter.com/intent/tweet?url=https://surajkumarsatya.com&text=Check%20out%20Suraj%20Kumar%20Satya%20-%20Frontend%20Developer"
          
            style="
              display:inline-block;
              padding:10px 16px;
              
              background:#111;
              color:#ffffff;
              text-decoration:none;
              border-radius:6px;
              font-size:14px;
              font-weight:500;
            ">
            Share on X
          </a>

          <a href="https://wa.me/?text=Check%20out%20Suraj%20Kumar%20Satya%20-%20Frontend%20Developer%20https%3A%2F%2Fsurajkumarsatya.com"
          
            style="
              display:inline-block;
              padding:10px 16px;
              
              background:#25D366;
              color:#ffffff;
              text-decoration:none;
              border-radius:6px;
              font-size:14px;
              font-weight:500;
            ">
            Share on WhatsApp
          </a>

        </div>


        <p style="font-size: 13px; color:#666;">
          Or simply share this link:  
          <a href="https://surajkumarsatya.com" style="color:#7B40FF; text-decoration:none;">
            https://surajkumarsatya.com
          </a>
        </p>

        <p>
          Warm regards,<br />
          <strong>Suraj Kumar Satya</strong><br />
          <span style="color: #666; font-size: 14px;">Frontend Developer</span>
        </p>

    </div>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
