import { NextResponse } from "next/server";

const baseUrl = "http://localhost:3000";

export default async function _middleware(req) {
  const { url, cookies } = req;
  const posToken = cookies.posToken;
  const bmsToken = cookies.bmsToken;

  if (url.includes("/pos_system/login")) return NextResponse.next();

  if (url.includes("/pos_system") && !posToken) return NextResponse.redirect(`${baseUrl}/pos_system/login`);

  if (url.includes('bms_system/login')) return NextResponse.next();

  // if (url.includes('bms_system') && !bmsToken) return NextResponse.redirect(`${baseUrl}/bms_system/login`);

  return NextResponse.next();
}