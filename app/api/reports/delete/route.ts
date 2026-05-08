import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();

  await db.query(
    `
    DELETE FROM reports
    WHERE id = $1
    `,
    [body.id]
  );

  return Response.json({
    success: true,
  });
}