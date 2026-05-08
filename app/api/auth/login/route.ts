import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const { email, password } =
      body;

    const user =
      await prisma.user.findUnique({
        where: { email },
      });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message:
            "유저 없음",
        },
        { status: 404 }
      );
    }

    if (
      user.password !== password
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "비밀번호 틀림",
        },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    const response =
      NextResponse.json({
        success: true,
        role: user.role,
      });

    response.cookies.set(
      "token",
      token,
      {
        httpOnly: true,
        secure: false,
        path: "/",
        maxAge:
          60 * 60 * 24 * 7,
      }
    );

    return response;
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}