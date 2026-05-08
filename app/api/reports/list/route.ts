import { db } from "@/lib/db";

export async function GET() {
  const result = await db.query(`
    SELECT *
    FROM reports
    ORDER BY id DESC
  `);

  return Response.json(result.rows);
}