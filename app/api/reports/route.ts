import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const reports =
      await prisma.report.findMany({
        orderBy: {
          id: "desc",
        },
      });

    return NextResponse.json(
      reports
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