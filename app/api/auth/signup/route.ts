import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const {
      email,
      password,
      role,
      realName,
      stageName,
      phone,
      bio,
    } = body;

    // 이메일 중복 체크
    const existingUser =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message:
            "이미 존재하는 이메일입니다.",
        },
        {
          status: 400,
        }
      );
    }

    // 유저 생성
    const user =
      await prisma.user.create({
        data: {
          email,
          password,
          role,
          realName,
          stageName,
          phone,
          bio,
        },
      });

    // 배우 계정이면 Actor 생성
    if (role === "actor") {
      await prisma.actor.create({
        data: {
          name: stageName,
          age: 20,
          tone: "미정",
        },
      });
    }

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: "회원가입 실패",
      },
      {
        status: 500,
      }
    );
  }
}