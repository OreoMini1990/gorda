import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "oreomini1990@gmail.com";
const DEFAULT_FROM = "GORDA 랜딩 <onboarding@resend.dev>";

export type ContactBody = {
  name: string;
  contact: string;
  department: string;
  plannedLocation: string;
  plannedSchedule: string;
  message: string;
};

function buildEmailHtml(body: ContactBody): string {
  const rows = [
    ["성함", body.name],
    ["연락처", body.contact],
    ["진료과목", body.department || "—"],
    ["개원 예정지", body.plannedLocation || "—"],
    ["개원 희망 일정", body.plannedSchedule || "—"],
    ["문의 내용", body.message || "—"],
  ];
  const trs = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #eee;background:#f9f9f9;font-weight:600;">${label}</td><td style="padding:8px 12px;border:1px solid #eee;">${value}</td></tr>`
    )
    .join("");
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:sans-serif;max-width:560px;margin:0 auto;">
  <h2 style="color:#1a1a1a;">[GORDA 랜딩] 상담 신청</h2>
  <p style="color:#666;">아래 내용으로 상담 신청이 접수되었습니다.</p>
  <table style="width:100%;border-collapse:collapse;">
    ${trs}
  </table>
  <p style="margin-top:24px;font-size:12px;color:#999;">본 메일은 고르다 랜딩 페이지 상담 폼에서 자동 발송되었습니다.</p>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey?.trim()) {
    return NextResponse.json(
      {
        error:
          "이메일 발송이 설정되지 않았습니다. 프로젝트 루트에 .env 파일을 만들고 RESEND_API_KEY=키값 을 넣은 뒤, 서버를 재시작해 주세요. (.env.example은 자동으로 로드되지 않습니다.)",
      },
      { status: 500 }
    );
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const { name, contact } = body;
  if (!name?.trim() || !contact?.trim()) {
    return NextResponse.json(
      { error: "성함과 연락처는 필수입니다." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.FROM_EMAIL?.trim() || DEFAULT_FROM;

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: [TO_EMAIL],
      subject: `[상담 신청] ${name} 님`,
      html: buildEmailHtml(body),
    });

    if (error) {
      console.error("[api/contact] Resend error:", error);
      const rawMsg =
        error.message ||
        (typeof error === "object" && error !== null && "message" in error
          ? String((error as { message?: unknown }).message)
          : "");
      const isDomainError =
        rawMsg.includes("only send testing emails to your own") ||
        rawMsg.includes("verify a domain");
      const msg = isDomainError
        ? "현재 Resend는 테스트용으로 본인 이메일로만 발송 가능합니다. withgorda@gmail.com 으로 받으려면 resend.com/domains 에서 도메인을 인증한 뒤, .env에 FROM_EMAIL=예: GORDA 랜딩 <noreply@인증한도메인> 을 설정하고 서버를 재시작하세요."
        : rawMsg || "이메일 발송에 실패했습니다.";
      return NextResponse.json({ error: msg }, { status: 500 });
    }
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "이메일 발송에 실패했습니다.";
    console.error("[api/contact] Exception:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
