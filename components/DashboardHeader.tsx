import ActorMenu from "@/components/ActorMenu";

type Props = {
  role:
    | "guest"
    | "actor"
    | "agency"
    | "admin";

  showActorMenu: boolean;

  setShowActorMenu: (
    value: boolean
  ) => void;

  onLogout: () => void;

  onWithdraw: () => void;
};

export default function DashboardHeader({
  role,
  showActorMenu,
  setShowActorMenu,
  onLogout,
  onWithdraw,
}: Props) {
  return (
    <div className="flex items-start justify-between">

      {/* 왼쪽 */}
      <div>

        <h1 className="text-5xl font-bold tracking-tight">
          Picktor MVP
        </h1>

        <p className="text-zinc-400 mt-3 text-lg">
          배우 60초 미션 기반 캐스팅 플랫폼
        </p>

      </div>

      {/* 오른쪽 */}
      <div className="relative flex items-center gap-3">

        <button
          onClick={() => {
            setShowActorMenu(
              !showActorMenu
            );
          }}
          className="bg-zinc-800 px-4 py-2 rounded-xl text-sm"
        >
          {role === "actor"
            ? "배우 계정"
            : role === "agency"
            ? "기획사 계정"
            : "관리자 계정"}
        </button>

        {showActorMenu &&
          role === "actor" && (
            <ActorMenu
              onClose={() =>
                setShowActorMenu(
                  false
                )
              }
              onDelete={
                onWithdraw
              }
            />
          )}

        <button
          onClick={onLogout}
          className="bg-white text-black px-5 py-2 rounded-xl font-medium"
        >
          로그아웃
        </button>

      </div>

    </div>
  );
}