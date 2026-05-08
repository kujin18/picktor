type Props = {
  showSignup: boolean;
  signupRole: "actor" | "agency";

  signupEmail: string;
  setSignupEmail: (v: string) => void;

  signupPassword: string;
  setSignupPassword: (v: string) => void;

  realName: string;
  setRealName: (v: string) => void;

  stageName: string;
  setStageName: (v: string) => void;

  phone: string;
  setPhone: (v: string) => void;

  bio: string;
  setBio: (v: string) => void;

  setShowSignup: (v: boolean) => void;
};

export default function SignupModal({
  showSignup,
  signupRole,

  signupEmail,
  setSignupEmail,

  signupPassword,
  setSignupPassword,

  realName,
  setRealName,

  stageName,
  setStageName,

  phone,
  setPhone,

  bio,
  setBio,

  setShowSignup,
}: Props) {
  if (!showSignup) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-5">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            {signupRole === "actor"
              ? "배우 회원가입"
              : "기획사 회원가입"}
          </h2>

          <button
            onClick={() =>
              setShowSignup(false)
            }
            className="bg-zinc-800 text-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
          >
            닫기
          </button>

        </div>

        <input
          type="text"
          placeholder="이메일"
          value={signupEmail}
          onChange={(e) =>
            setSignupEmail(e.target.value)
          }
          className="w-full bg-zinc-800 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-400"
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={signupPassword}
          onChange={(e) =>
            setSignupPassword(e.target.value)
          }
          className="w-full bg-zinc-800 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-400"
        />

        <input
          type="text"
          placeholder="본명"
          value={realName}
          onChange={(e) =>
            setRealName(e.target.value)
          }
          className="w-full bg-zinc-800 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-400"
        />

        <input
          type="text"
          placeholder={
            signupRole === "actor"
              ? "예명"
              : "닉네임"
          }
          value={stageName}
          onChange={(e) =>
            setStageName(e.target.value)
          }
         className="w-full bg-zinc-800 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-400"
        />

        <input
          type="text"
          placeholder="전화번호"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          className="w-full bg-zinc-800 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-400"
        />

        {signupRole === "actor" && (
          <textarea
            placeholder="자기소개"
            value={bio}
            onChange={(e) =>
              setBio(e.target.value)
            }
            className="w-full bg-zinc-800 rounded-2xl px-5 py-4 min-h-30 text-white placeholder:text-zinc-400 focus:bg-white focus:text-black transition"
          />
        )}

        <button
          onClick={async () => {
  try {
    const res = await fetch(
      "/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email: signupEmail,
          password: signupPassword,
          role: signupRole,
          realName,
          stageName,
          phone,
          bio,
        }),
      }
    );

    const data = await res.json();

    console.log(data);

    if (!data.success) {
      alert("회원가입 실패");
      return;
    }

    alert("회원가입 완료");

    setShowSignup(false);

  } catch (err) {
    console.error(err);
    alert("에러 발생");
  }
}}
          className="w-full bg-white text-black py-4 rounded-2xl font-bold"
        >
          가입하기
        </button>

      </div>

    </div>
  );
}