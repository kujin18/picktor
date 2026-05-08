import MissionCard from "@/components/MissionCard";

type Props = {
  role:
    | "guest"
    | "actor"
    | "agency"
    | "admin";
};

export default function MissionSection({
  role,
}: Props) {
  return (
    <MissionCard
      title="현재 미션"
      description="'이별 직전 감정 독백 연기' - 60초 제한"
      role={role}
    />
  );
}