import { PrismaClient }
from "@prisma/client";

const prisma =
  new PrismaClient();

export default async function ActorDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const actor =
    await prisma.actor.findUnique({
      where: {
        id: Number(id),
      },
    });

  if (!actor) {
    return (
      <main className="text-white p-10">
        배우 없음
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="relative max-w-3xl mx-auto bg-zinc-900 rounded-3xl p-10 border border-zinc-800">

        <a
            href="/actors"
            className="absolute top-5 right-5 text-zinc-400 hover:text-white text-2xl transition">
                ✕
        </a>

        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-zinc-700 flex items-center justify-center text-4xl font-bold">
            {actor.name?.[0]}
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              {actor.name}
            </h1>

            <p className="text-zinc-400 text-lg">
              {actor.age}세 · {actor.tone}톤
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-zinc-800 rounded-2xl p-5">
            자기소개 준비중
          </div>

          <div className="bg-zinc-800 rounded-2xl p-5">
            업로드 영상 준비중
          </div>
        </div>
      </div>
    </main>
  );
}