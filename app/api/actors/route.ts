import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const actors =
      await prisma.actor.findMany({
        orderBy: {
          id: "desc",
        },
      });

    return NextResponse.json(
      actors
    );
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      [],
      {
        status: 500,
      }
    );
  }
}