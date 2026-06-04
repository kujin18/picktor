import { useState } from "react";

export default function CasterHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen bg-zinc-950 text-white flex flex-col">

      {/* Header */}
      <header className="shrink-0 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

          <h1 className="text-3xl font-bold tracking-tight">
            Picktor
          </h1>

          <div className="flex items-center gap-4">
            <button className="text-zinc-400 hover:text-white">
              🔔
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                w-10
                h-10
                rounded-full
                bg-zinc-800
                border
                border-zinc-700
                flex
                items-center
                justify-center
              "
            >
              👤
            </button>
          </div>

        </div>
      </header>

      {/* Scroll Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">

          {/* Welcome */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">
              픽터 캐스팅님, 좋은 배우를 발견해보세요!
            </h2>

            <p className="text-zinc-400">
              오늘 업로드된 새로운 배우들과 진행 중인 미션을 확인하세요.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-5 mb-8">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-zinc-400 text-sm">
                등록 배우
              </p>

              <p className="text-4xl font-bold mt-3">
                128
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-zinc-400 text-sm">
                오늘 업로드
              </p>

              <p className="text-4xl font-bold mt-3">
                34
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-zinc-400 text-sm">
                진행 미션
              </p>

              <p className="text-4xl font-bold mt-3">
                6
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-zinc-400 text-sm">
                캐스팅 요청
              </p>

              <p className="text-4xl font-bold mt-3">
                19
              </p>
            </div>

          </div>

          {/* Mission Table */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 mb-8">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                진행 중인 미션
              </h2>

              <button className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">
                새 미션 업로드
              </button>
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-zinc-500 border-b border-zinc-800">
                  <th className="text-left py-4">미션명</th>
                  <th>D-Day</th>
                  <th>지원자 수</th>
                  <th>제출 완료</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-zinc-800">
                  <td className="py-4">
                    이별 직전 감정 독백 연기
                  </td>

                  <td className="text-center text-red-400">
                    D-3
                  </td>

                  <td className="text-center">
                    128명
                  </td>

                  <td className="text-center">
                    87명 (68%)
                  </td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="py-4">
                    밝은 이미지 자유 연기
                  </td>

                  <td className="text-center text-red-400">
                    D-5
                  </td>

                  <td className="text-center">
                    96명
                  </td>

                  <td className="text-center">
                    54명 (56%)
                  </td>
                </tr>

                <tr>
                  <td className="py-4">
                    액션 연기 (60초)
                  </td>

                  <td className="text-center text-red-400">
                    D-7
                  </td>

                  <td className="text-center">
                    75명
                  </td>

                  <td className="text-center">
                    33명 (44%)
                  </td>
                </tr>

              </tbody>
            </table>

          </div>

          {/* Recommended Actors */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                추천 배우
              </h2>

              <button className="text-zinc-400 hover:text-white">
                모두 보기
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-5">

              {[
                {
                  name: "김민수",
                  age: "26세",
                  height: "178cm",
                  tags: ["#감정연기", "#눈물연기"],
                },
                {
                  name: "박지훈",
                  age: "24세",
                  height: "181cm",
                  tags: ["#액션", "#저예산"],
                },
                {
                  name: "이서연",
                  age: "23세",
                  height: "165cm",
                  tags: ["#밝은이미지", "#청춘물"],
                },
              ].map((actor) => (
                <div
                  key={actor.name}
                  className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950"
                >

                  <div className="h-56 bg-zinc-800" />

                  <div className="p-4">

                    <h3 className="font-bold text-xl">
                      {actor.name}
                    </h3>

                    <p className="text-zinc-400 text-sm mt-1">
                      {actor.age} · {actor.height}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {actor.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            px-2
                            py-1
                            text-xs
                            rounded-full
                            bg-zinc-800
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <button className="bg-violet-600 hover:bg-violet-500 rounded-xl py-2">
                        비교 보기
                      </button>

                      <button className="bg-zinc-800 hover:bg-zinc-700 rounded-xl py-2">
                        북마크
                      </button>
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="h-20 shrink-0 border-t border-zinc-800 bg-zinc-950">
        <div className="h-full flex items-center justify-around text-sm">

          <button className="text-violet-400">
            홈
          </button>

          <button className="text-zinc-400">
            배우 검색
          </button>

          <button className="text-zinc-400">
            비교함
          </button>

          <button className="text-zinc-400">
            캐스팅 제안
          </button>

          <button className="text-zinc-400">
            마이페이지
          </button>

        </div>
      </nav>

    </div>
  );
}