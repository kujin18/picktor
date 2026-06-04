import { useState } from "react";
import ActorMenu from "./ActorMenu";

export default function ActorHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-screen bg-zinc-950 text-white flex flex-col">

      {/* Header */}
      <header className="shrink-0 border-b border-zinc-900">
        < div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">
               Picktor
           </h1>
           <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20">
          MVP
      </span>
        </div>
          <div className="relative">

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

      {menuOpen && (
        <ActorMenu
          onClose={() => setMenuOpen(false)}
          onDelete={() => {
            console.log("delete");
          }}
        />
      )}

    </div>
        </div>
      </header>

      {/* Scroll Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto p-8">
          <div className="mb-8">
            <p className="text-zinc-400 text-sm mb-2">
              오늘도 좋은 연기 기대할게요 👋
            </p>

          <h2 className="text-3xl font-bold">
              김민수 배우님, 어서오세요.
          </h2>
        </div>

          <h2 className="text-lg font-medium text-zinc-400 mb-4">
            현재 진행 중인 미션
          </h2>

          {/* 미션 카드 */}
          
            <div
              className="
              relative
              overflow-hidden
              rounded-3xl
              border border-zinc-800
              bg-linear-to-br
             from-zinc-900
             via-zinc-950
             to-black
              px-8
              py-8
              shadow-[0_0_40px_rgba(139,92,246,0.08)]
            "
            >
            {/* Glow */}
            <div
              className="
                absolute
                -top-20
                -left-20
                h-72
                w-72
                rounded-full
                bg-violet-600/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-4">
                이별 직전 감정 독백 연기
              </h1>

              <p className="text-zinc-400 mb-10">
                감정의 변화가 드러나는 60초 연기 영상
              </p>

              <div className="grid grid-cols-4 border-t border-zinc-800 pt-8">
                <div className="border-r border-zinc-800 pr-8">
                  <p className="text-zinc-500 text-sm mb-2">D-Day</p>
                  <p className="text-2xl font-bold">D-3</p>
                </div>

                <div className="border-r border-zinc-800 px-8">
                  <p className="text-zinc-500 text-sm mb-2">참여 배우</p>
                  <p className="text-2xl font-bold">128명</p>
                </div>

                <div className="border-r border-zinc-800 px-8">
                  <p className="text-zinc-500 text-sm mb-2">제출 마감</p>
                  <p className="text-2xl font-bold">2026.06.10</p>
                </div>

                <div className="pl-8">
                  <p className="text-zinc-500 text-sm mb-2">제출 상태</p>
                  <p className="text-3xl font-bold text-emerald-400">
                    제출 완료
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 이후 추가될 영역 */}
          <div className="mt-8">
  <h2 className="text-lg font-medium text-zinc-400 mb-4">
    받은 캐스팅 제안
  </h2>

  <div className="space-y-4">
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-lg font-semibold">
        청춘의 온도
      </p>
      <p className="text-zinc-400 mt-1">
        대학생 주연 모집
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-lg font-semibold">
        브랜드 광고 모델
      </p>
      <p className="text-zinc-400 mt-1">
        SNS 광고 영상
      </p>
    </div>
  </div>
</div>

          <div className="mt-8 mb-8">
  <h2 className="text-lg font-medium text-zinc-400 mb-4">
    프로필 현황
  </h2>

  <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
    <div className="flex justify-between mb-3">
      <span>프로필 완성도</span>
      <span className="font-bold">85%</span>
    </div>

    <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
      <div className="h-full w-[85%] bg-violet-500 rounded-full" />
    </div>
  </div>
</div>

        </div>
      </main>

      {/* Bottom Tab */}
      <nav className="h-20 shrink-0 border-t border-zinc-800 bg-zinc-950">
        <div className="h-full flex items-center justify-center">
          탭바 영역
        </div>
      </nav>

    </div>
  
 
  );
}