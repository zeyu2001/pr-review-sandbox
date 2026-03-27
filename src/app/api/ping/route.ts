import { execFile } from "child_process";
import { isIP } from "net";
import { NextRequest, NextResponse } from "next/server";

function isValidHost(host: string) {
  if (isIP(host)) {
    return true;
  }

  if (host.length > 253) {
    return false;
  }

  return host.split(".").every((label) => {
    return (
      label.length > 0 &&
      label.length <= 63 &&
      /^[A-Za-z0-9-]+$/.test(label) &&
      !label.startsWith("-") &&
      !label.endsWith("-")
    );
  });
}

// Network diagnostics endpoint – lets operators check reachability of a host.
// Usage: GET /api/ping?host=example.com
export async function GET(req: NextRequest) {
  const host = req.nextUrl.searchParams.get("host")?.trim() ?? "";

  if (!host) {
    return NextResponse.json({ error: "host parameter is required" }, { status: 400 });
  }

  if (!isValidHost(host)) {
    return NextResponse.json({ error: "invalid host parameter" }, { status: 400 });
  }

  return new Promise<NextResponse>((resolve) => {
    execFile("ping", ["-c", "4", host], (error, stdout, stderr) => {
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
