type MissionCardProps = {
  title: string;
  description: string;
  role: string;
};

export default function MissionCard({
  title,
  description,
  role,
}: MissionCardProps) {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">
            {title}
          </h2>

          <p className="text-zinc-400 mt-1">
            {description}
          </p>
        </div>

        {role !== "actor" && (
          <button className="bg-white text-black px-5 py-3 rounded-2xl font-semibold">
              새 미션 업로드
          </button>
)}
      </div>
    </div>
  );
}