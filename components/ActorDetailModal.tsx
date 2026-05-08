type Actor = {
  name: string;
  age: number;
  tone: string;
  tags?: string[];
};

type Props = {
  actor: Actor | null;

  role:
    | "actor"
    | "agency"
    | "admin";

  onClose: () => void;
};

export default function ActorDetailModal({
  actor,
  role,
  onClose,
}: Props) {
  if (!actor) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-zinc-900 w-full max-w-2xl rounded-3xl overflow-hidden border border-zinc-800">

        {/* 영상 */}
        <div className="aspect-video bg-zinc-800 flex items-center justify-center text-zinc-500">
          배우 영상 영역
        </div>

        <div className="p-6 space-y-5">

          {/* 상단 */}
          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-3xl font-bold">
                {actor.name}
              </h2>

              <p className="text-zinc-400 mt-1">
                {actor.age}세 · {actor.tone}
              </p>

            </div>

            <div className="flex items-center gap-3">

              {/* 북마크 */}
              <button className="bg-white text-yellow-400 border border-yellow-400 w-12 h-12 rounded-2xl text-2xl flex items-center justify-center hover:bg-yellow-400 hover:text-black transition">
                ★
              </button>

              {/* 닫기 */}
              <button
                onClick={onClose}
                className="bg-zinc-800 px-5 h-12 rounded-2xl"
              >
                닫기
              </button>

            </div>

          </div>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2">

            {actor.tags?.map(
              (tag, idx) => (
                <span
                  key={idx}
                  className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              )
            )}

          </div>

          {/* 자기소개 */}
          <div className="space-y-2">

            <h3 className="text-xl font-semibold">
              자기소개
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              감정 연기에 강점이 있으며 광고 및
              드라마 톤에 특화된 배우입니다.
              다양한 숏폼 콘텐츠 경험이 있습니다.
            </p>

          </div>

          {/* 버튼 */}
          <div
            className={`grid gap-3 pt-2 ${
              role === "agency"
                ? "grid-cols-3"
                : "grid-cols-2"
            }`}
          >

            {role === "agency" && (
              <button className="bg-white text-black py-2 rounded-2xl font-semibold text-sm">
                캐스팅 제안
              </button>
            )}

            <button className="bg-zinc-800 py-2 rounded-2xl font-semibold text-sm">
              비교 추가
            </button>

            <button
              onClick={async () => {
                await fetch("/api/reports", {
                  method: "POST",
                  headers: {
                    "Content-Type":
                      "application/json",
                  },
                  body: JSON.stringify({
                    actorName: actor.name,
                    reason:
                      "부적절한 콘텐츠",
                  }),
                });

                alert(
                  "신고가 접수되었습니다."
                );
              }}
              className="bg-red-500/20 text-red-400 py-2 rounded-2xl font-semibold text-sm"
            >
              신고하기
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}