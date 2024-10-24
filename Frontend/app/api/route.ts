import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  try {
    const apiRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, data);
    const response = NextResponse.json(apiRes.data, { status: apiRes.status });
    const token = apiRes?.data?.data?.access_token;
    token &&
      response.cookies.set("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: true,
      });
    return response;
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Login Failed",
      },
      { status: 500 }
    );
  }
}
