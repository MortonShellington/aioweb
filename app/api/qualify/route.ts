import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const {
      projectName,
      ticker,
      email,
      telegram,
      volume,
      treasurySize,
      venues,
      primaryGoal,
    } = body;

    const goalLabels: Record<string, string> = {
      liquidity: "Enhance Market Liquidity",
      yield: "Generate Treasury Yield",
      both: "Comprehensive Structure (Liquidity + Yield)",
    };

    const venueList =
      Array.isArray(venues) && venues.length > 0
        ? venues.join(", ")
        : "None selected";

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
    .badge { display: inline-block; background: rgba(0,240,255,0.1); border: 1px solid rgba(0,240,255,0.25); color: #00f0ff; border-radius: 20px; padding: 4px 14px; font-size: 12px; font-weight: 600; margin-right: 6px; margin-bottom: 6px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="logo">AION</div>
      <div class="subtitle">New Qualification Submission</div>
    </div>

    <div class="card">
      <div class="grid">
        <div>
          <div class="label">Project Name</div>
          <div class="value">${projectName || "—"}</div>
        </div>
        <div>
          <div class="label">Token Ticker</div>
          <div class="value">${ticker || "—"}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="grid">
        <div>
          <div class="label">Contact Email</div>
          <div class="value">${email || "—"}</div>
        </div>
        <div>
          <div class="label">Telegram / Signal</div>
          <div class="value">${telegram || "—"}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="grid">
        <div>
          <div class="label">24h Trading Volume</div>
          <div class="value">${volume || "—"}</div>
        </div>
        <div>
          <div class="label">Treasury Size</div>
          <div class="value">${treasurySize || "—"}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="label" style="margin-bottom: 12px;">Current Venues</div>
      <div>${
        Array.isArray(venues) && venues.length > 0
          ? venues.map((v: string) => `<span class="badge">${v}</span>`).join("")
          : '<span style="color:#475569">None selected</span>'
      }</div>
    </div>

    <div class="card">
      <div class="label">Primary Objective</div>
      <div class="value">${goalLabels[primaryGoal] || primaryGoal || "—"}</div>
    </div>

    <div class="footer">
      Submitted via aion.financial qualification form · ${new Date().toUTCString()}
    </div>
  </div>
</body>
</html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Aion Qualification <onboarding@resend.dev>",
      to: ["david@aion.financial"],
      replyTo: email || undefined,
      subject: `[Qualification] ${projectName || "New Submission"} (${ticker || "—"})`,
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
