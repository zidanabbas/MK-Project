const { NextResponse } = require("next/server");

export async function GET() {
  return NextResponse.json({ status: 200, message: "Success" });
}
