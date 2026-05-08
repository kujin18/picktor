import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const cookieStore =
      await cookies();

    const token =
      cookieStore.get("token");

    if (!token) {
      return NextResponse.json({
        success: false,
      });
    }

    const decoded = jwt.verify(
      token.value,
      process.env.JWT_SECRET!
    ) as {
      email: string;
    };

    const user =
      await prisma.user.findUnique({
        where: {
          email: decoded.email,
        },
      });

    if (!user) {
      return NextResponse.json({
        success: false,
      });
    }

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({
      success: false,
    });
  }
}