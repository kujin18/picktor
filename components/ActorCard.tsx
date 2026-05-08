type ActorCardProps = {
  name: string;
  age: number;
  tone: string;
  tags?: string[];
};

export default function ActorCard({
  name,
  age,
  tone,
  tags,
}: ActorCardProps) {
  return (<div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
    
      <div className="aspect-video bg-zinc-800 flex items-center justify-center text-zinc-500">
        60초 영상 영역
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">
            {name}
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            {age}세 · {tone}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="bg-zinc-800 text-sm px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button className="bg-white text-black py-3 rounded-2xl font-medium">
            비교 보기
          </button>

          <button className="bg-zinc-800 py-3 rounded-2xl font-medium">
            북마크
          </button>
        </div>
      </div>
    </div>
  );
}