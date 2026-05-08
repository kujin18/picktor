"use client";

import {
  useEffect,
  useState,
} from "react";

interface Actor {
  id: number;
  name: string;
  age: number;
  tone: string;
}

export default function ActorsPage() {
  const [actors, setActors] =
    useState<Actor[]>([]);

  useEffect(() => {
    fetch("/api/actors")
      .then(async (res) => {
        if (!res.ok) {
          return [];
        }

        return res.json();
      })
      .then((data) => {
        setActors(data);
      });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        등록 배우
      </h1>

      <div className="flex flex-col gap-4 max-h-175 overflow-y-auto pr-2">
  {actors.map((actor) => (
  <a
    href={`/actors/${actor.id}`}
    key={actor.id}
    className="block"
  >
    <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 flex items-center gap-5 hover:border-zinc-600 transition">

      <div className="w-14 h-14 rounded-full bg-zinc-700 flex items-center justify-center text-xl font-bold">
        {actor.name?.[0]}
      </div>

      <div>
        <h2 className="text-xl font-bold">
          {actor.name}
        </h2>

        <p className="text-zinc-400">
          {actor.age}세 · {actor.tone}톤
        </p>
      </div>

    </div>
  </a>
))} </div>
    </main>
  );
}