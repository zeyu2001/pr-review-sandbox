import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";

// Network diagnostics endpoint – lets operators check reachability of a host.
// Usage: GET /api/ping?host=example.com
export async function GET(req: NextRequest) {
  const host = req.nextUrl.searchParams.get("host");

  if (!host) {
    return NextResponse.json({ error: "host parameter is required" }, { status: 400 });
  }

  return new Promise<NextResponse>((resolve) => {
    exec(`ping -c 4 ${host}`, (error, stdout, stderr) => {
      resolve(
        NextResponse.json({
          host,
          output: stdout || stderr,
          success: !error,
        })
      );
    });
  });
}
