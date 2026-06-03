type ActorCardProps = {
  id: string;
  name: string;
  age: number;
  tone: string;
  tags?: string[];
  thumbnailUrl?: string;
  matchScore?: number;

  onClick?: () => void;
};

export default function ActorCard({
  id,
  name,
  age,
  tone,
  tags = [],
  thumbnailUrl,
  matchScore,
  onClick,
}: ActorCardProps) {

  return (
        <div onClick={onClick} className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition cursor-pointer">
        {/* 썸네일 */}
        <div className="aspect-video bg-zinc-800 overflow-hidden">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-500">
              60초 영상
            </div>
          )}
        </div>

        {/* 내용 */}
        <div className="p-5 space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {name}
              </h3>

              {matchScore && (
                <span className="text-emerald-400 text-sm font-semibold">
                  {matchScore}%
                </span>
              )}
            </div>

            <p className="text-zinc-400 text-sm mt-1">
              {age}세 · {tone}
            </p>
          </div>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-zinc-800 text-zinc-200 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* 버튼 */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="bg-white text-black py-3 rounded-2xl font-medium hover:bg-zinc-200 transition"
            >
              프로필 보기
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="bg-zinc-800 text-white py-3 rounded-2xl font-medium hover:bg-zinc-700 transition"
            >
              북마크
            </button>
          </div>
        </div>
      </div>
  );
}