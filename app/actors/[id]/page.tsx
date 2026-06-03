import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function ActorDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const actor =
    await prisma.actorProfile.findUnique({
      where: {
        id: id,
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
      <div className="relative max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
        {/* 닫기 */}
        <a
          href="/actors"
          className="absolute top-5 right-5 text-zinc-400 hover:text-white text-2xl transition"
        >
          ✕
        </a>

        {/* 프로필 */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-zinc-700 flex items-center justify-center text-4xl font-bold">
            {actor.name?.[0]}
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              {actor.name}
            </h1>

            <p className="text-zinc-400 text-lg">
              { actor.birthYear
                  ? `${new Date().getFullYear() - actor.birthYear}세`
                  : "나이 미등록"}
                  {" · "} 
                  {actor.region}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* AI 태그 */}
          <div className="bg-zinc-800 rounded-2xl p-5">
            <h2 className="font-semibold mb-3">
              AI 해시태그
            </h2>

            <div className="flex flex-wrap gap-2">
              <span className="bg-zinc-700 px-3 py-1 rounded-full">
                #감성연기
              </span>

              <span className="bg-zinc-700 px-3 py-1 rounded-full">
                #멜로
              </span>

              <span className="bg-zinc-700 px-3 py-1 rounded-full">
                #눈물연기
              </span>
            </div>
          </div>

          {/* AI 분석 */}
          <div className="bg-zinc-800 rounded-2xl p-5">
            <h2 className="font-semibold mb-3">
              AI 분석 결과
            </h2>

            <ul className="space-y-2 text-zinc-300">
              <li>
                감정 전달력 : 우수
              </li>
              <li>
                몰입감 : 높음
              </li>
              <li>
                발음 : 양호
              </li>
            </ul>
          </div>

          {/* 대표 영상 */}
          <div className="bg-zinc-800 rounded-2xl p-5">
            <h2 className="font-semibold mb-3">
              대표 영상
            </h2>

            <div className="aspect-video rounded-xl bg-zinc-700 flex items-center justify-center text-zinc-400">
              영상 준비중
            </div>
          </div>

          {/* 캐스팅 요청 */}
          <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition">
            캐스팅 요청
          </button>
        </div>
      </div>
    </main>
  );
}