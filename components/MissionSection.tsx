import MissionCard from "@/components/MissionCard";
import { missions } from "@/data/missions";

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
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">
        현재 미션
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {missions.map((mission) => (
          <MissionCard
            key={mission.id}
            title={mission.title}
            description={mission.description}
            role={role}
          />
        ))}
      </div>
    </div>
  );
}