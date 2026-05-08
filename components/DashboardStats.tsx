import StatCard from "@/components/StatCard";

type Report = {
  id: number;
  actor_name: string;
  reason: string;
};

type Props = {
  role:
    | "guest"
    | "actor"
    | "agency"
    | "admin";

  actorCount: number;

  reports: Report[];

  setReports: (
    reports: Report[]
  ) => void;

  showReports: boolean;

  setShowReports: (
    value: boolean
  ) => void;
};

export default function DashboardStats({
  role,
  actorCount,
  reports,
  setReports,
  showReports,
  setShowReports,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      <a
         href="/actors"
        className="block">
      <StatCard
        title="등록 배우"
        value={String(actorCount)}
      />
      </a>
      <StatCard
        title="오늘 업로드"
        value="34"
      />

      <StatCard
        title="진행 미션"
        value="6"
      />

      <div
        onClick={async () => {
          if (role === "admin") {
            setShowReports(
              !showReports
            );

            const res =
              await fetch(
                "/api/reports"
              );

            const data =
              await res.json();

            setReports(data);
          }
        }}
      >
        <StatCard
          title={
            role === "admin"
              ? "삭제 요청"
              : "캐스팅 요청"
          }
          value={
            role === "admin"
              ? String(
                  reports.length
                )
              : "19"
          }
        />
      </div>

    </div>
  );
}