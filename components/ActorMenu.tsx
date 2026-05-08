import {
  useEffect,
  useState,
} from "react";

interface User {
  stageName: string;
  role: string;
}

interface Props {
  onClose: () => void;
  onDelete: () => void;
}

export default function ActorMenu({
  onClose,
  onDelete,
}: Props){

 const [user, setUser] =
  useState<User | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
    .then((res) => res.json())
    .then((data) => {
      if (
        data.success &&
        data.user
      ) {
        setUser(data.user);// Fetch user data
      }
    });
  }, []);

  return (
    <div className="absolute right-24 top-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-4 space-y-3 w-72 z-50 shadow-2xl">

      {/* 프로필 */}
      <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">

        <button
        onClick={onClose}
        className="absolute top-4 right-4 text-zinc-400 hover:text-white transition">
           ✕
        </button>

        <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-lg font-bold">
          {user?.stageName?.[0]}
        </div>

        <div>
          <p className="text-lg font-semibold">
            {user?.stageName} 배우님
          </p>

          <p className="text-sm text-zinc-400">
            {user?.role} 계정
          </p>
        </div>

      </div>

      <button className="w-full text-left bg-zinc-800 px-5 py-3 rounded-2xl hover:bg-zinc-700 transition">
        내 영상
      </button>

      <button className="w-full text-left bg-zinc-800 px-5 py-3 rounded-2xl hover:bg-zinc-700 transition">
        영상 업로드
      </button>

      <button className="w-full text-left bg-zinc-800 px-5 py-3 rounded-2xl hover:bg-zinc-700 transition">
        참여 미션
      </button>

      <button className="w-full text-left bg-zinc-800 px-5 py-3 rounded-2xl hover:bg-zinc-700 transition">
        프로필 수정
      </button>

      <button
        onClick={() => {
          const ok = confirm(
            "정말 탈퇴하시겠습니까?"
          );

          if (!ok) return;

          onDelete();

          window.location.href = "/";
        }}
        className="w-full bg-red-500/10 hover:bg-red-500/20 transition text-red-400 rounded-2xl px-5 py-4 text-left font-semibold"
      >
        회원 탈퇴
      </button>

    </div>
  );
}