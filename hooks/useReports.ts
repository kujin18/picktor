"use client";

import { useEffect, useState } from "react";

export type Report = {
  id: number;
  actor_name: string;
  reason: string;
};

export default function useReports() {
  const [reports, setReports] =
    useState<Report[]>([]);

  const [showReports, setShowReports] =
    useState(false);

  useEffect(() => {
  fetch("/api/reports")
    .then(async (res) => {
      if (!res.ok) {
        return [];
      }

      return res.json();
    })
    .then((data) => {
      setReports(data);
    });
}, []);

  return {
    reports,
    setReports,
    showReports,
    setShowReports,
  };
}