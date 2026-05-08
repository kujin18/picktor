import ActorCard from "@/components/ActorCard";

type Actor = {
  name: string;
  age: number;
  tone: string;
  tags?: string[];
};

type Props = {
  actors: Actor[];

  page: number;

  search: string;

  selectedFilter: string;

  setSearch: (
    value: string
  ) => void;

  setSelectedFilter: (
    value: string
  ) => void;

  setPage: (
    value: number
  ) => void;

  onSelectActor: (
    actor: Actor
  ) => void;
};

export default function ActorSection({
  actors,
  page,
  search,
  selectedFilter,
  setSearch,
  setSelectedFilter,
  setPage,
  onSelectActor,
}: Props) {
  const filters = [
    "전체",
    "감성",
    "액션",
    "로맨스",
    "광고톤",
  ];

  const filteredActors =
    actors.filter((actor) => {

      const matchesFilter =
        selectedFilter ===
          "전체" ||
        actor.tone.includes(
          selectedFilter
        ) ||
        actor.tags?.some(
          (tag) =>
            tag.includes(
              selectedFilter
            )
        );

      const matchesSearch =
        actor.name.includes(
          search
        );

      return (
        matchesFilter &&
        matchesSearch
      );
    });

  return (
    <div className="space-y-4 mt-10">

      {/* 상단 */}
      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-semibold">
          추천 배우
        </h2>

        <div className="flex gap-2">

          <input
            type="text"
            placeholder="배우 이름 검색"
            value={search}
            onChange={(e) => {
              setSearch(
                e.target.value
              );

              setPage(0);
            }}
            className="bg-zinc-800 px-4 py-2 rounded-xl outline-none text-sm w-48"
          />

          <button
            onClick={() =>
              setPage(
                Math.max(
                  page - 1,
                  0
                )
              )
            }
            className="bg-zinc-800 px-4 py-2 rounded-xl"
          >
            이전
          </button>

          <button
            onClick={() =>
              setPage(
                Math.min(
                  page + 1,
                  Math.ceil(
                    filteredActors.length /
                      3
                  ) - 1
                )
              )
            }
            className="bg-white text-black px-4 py-2 rounded-xl"
          >
            다음
          </button>

        </div>

      </div>

      {/* 필터 */}
      <div className="flex gap-3 flex-wrap">

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setSelectedFilter(
                filter
              );

              setPage(0);
            }}
            className={`px-4 py-2 rounded-xl text-sm transition ${
              selectedFilter ===
              filter
                ? "bg-white text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            {filter}
          </button>
        ))}

      </div>

      {/* 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {filteredActors
          .slice(
            page * 3,
            page * 3 + 3
          )
          .map((actor, idx) => (
            <div
              key={idx}
              onClick={() =>
                onSelectActor(
                  actor
                )
              }
              className="cursor-pointer"
            >

              <ActorCard
                name={actor.name}
                age={actor.age}
                tone={actor.tone}
                tags={actor.tags}
              />

            </div>
          ))}

      </div>

    </div>
  );
}