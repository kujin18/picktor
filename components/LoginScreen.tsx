type Props = {
  email: string;
  password: string;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;

  onLogin: () => void;

  onActorSignup: () => void;
  onAgencySignup: () => void;
};

export default function LoginScreen({
  email,
  password,
  setEmail,
  setPassword,
  onLogin,
  onActorSignup,
  onAgencySignup,
}: Props) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        {/* 로고 */}
        <div className="text-center mb-10">

          <h1 className="text-6xl font-black">
            Picktor
          </h1>

          <p className="text-zinc-400 mt-4 text-lg">
            배우 60초 미션 기반 캐스팅 플랫폼
          </p>

        </div>

        {/* 로그인 */}
        <div className="space-y-4">

          <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
          />

          <button
            onClick={onLogin}
            className="w-full bg-white text-black font-bold rounded-2xl py-4 hover:opacity-90 transition"
          >
            로그인
          </button>

        </div>

        {/* 회원가입 */}
        <div className="mt-10 text-center">

          <p className="text-zinc-500 mb-4">
            회원이 아니신가요?
          </p>

          <div className="flex gap-4">

            <button
              onClick={onActorSignup}
              className="flex-1 bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl py-4 font-semibold"
            >
              배우 회원가입
            </button>

            <button
              onClick={onAgencySignup}
              className="flex-1 bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl py-4 font-semibold"
            >
              기획사 회원가입
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}