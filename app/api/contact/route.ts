import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const { name, email, telegram, message } = body;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #0a0f24; color: #e2e8f0; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { background: linear-gradient(135deg, #0d1b3e 0%, #0a1628 100%); border: 1px solid rgba(0,240,255,0.15); border-radius: 16px; padding: 32px; margin-bottom: 24px; text-align: center; }
    .logo { font-size: 28px; font-weight: 800; letter-spacing: 4px; color: #00f0ff; margin-bottom: 8px; }
    .subtitle { color: #64748b; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; }
    .card { background: #0d1b3e; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px; margin-bottom: 16px; }
    .label { font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #00f0ff; margin-bottom: 6px; }
    .value { font-size: 16px; color: #f1f5f9; font-weight: 500; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .footer { text-align: center; color: #334155; font-size: 12px; margin-top: 32px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="logo">AION</div>
      <div class="subtitle">New Contact Message</div>
    </div>

    <div class="card">
      <div class="grid">
        <div>
          <div class="label">Name</div>
          <div class="value">${name || "—"}</div>
        </div>
        <div>
          <div class="label">Email</div>
          <div class="value">${email || "—"}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="label">Telegram</div>
      <div class="value">${telegram || "—"}</div>
    </div>

    <div class="card">
      <div class="label">Message</div>
      <div class="value">${message || "—"}</div>
    </div>

    <div class="footer">
      Submitted via aion.financial contact form · ${new Date().toUTCString()}
    </div>
  </div>
</body>
</html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Aion Contact <onboarding@resend.dev>",
      to: ["david@aion.financial"],
      replyTo: email || undefined,
      subject: `[Contact] ${name || "New Message"}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
