"use client";

import { useState } from "react";

type Actor = {
  name: string;
  age: number;
  tone: string;
  tags?: string[];
};

export default function useActors() {
  const [actors] = useState<Actor[]>([]);

  const [page, setPage] = useState(0);

  const [search, setSearch] =
    useState("");

  const [selectedFilter, setSelectedFilter] =
    useState("전체");

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
        selectedFilter === "전체" ||
        actor.tone.includes(
          selectedFilter
        ) ||
        actor.tags?.some((tag) =>
          tag.includes(selectedFilter)
        );

      const matchesSearch =
        actor.name.includes(search);

      return (
        matchesFilter &&
        matchesSearch
      );
    });

  return {
    actors,

    page,
    setPage,

    search,
    setSearch,

    selectedFilter,
    setSelectedFilter,

    filters,
    filteredActors,
  };
}