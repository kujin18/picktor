import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const count =
      await prisma.actor.count();

    return NextResponse.json({
      count,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        count: 0,
      },
      {
        status: 500,
      }
    );
  }
}