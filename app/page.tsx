"use client";

import { useEffect, useState } from "react";

import LoginScreen from "@/components/LoginScreen";
import SignupModal from "@/components/SignupModal";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardStats from "@/components/DashboardStats";
import MissionSection from "@/components/MissionSection";
import ActorSection from "@/components/ActorSection";
import ActorDetailModal from "@/components/ActorDetailModal";
import ReportModal from "@/components/ReportModal";

import useActors from "@/hooks/useActors";
import useReports from "@/hooks/useReports";
import useAuth from "@/hooks/useAuth";
import useSignup from "@/hooks/useSignup";

type Actor = {
  name: string;
  age: number;
  tone: string;
  tags?: string[];
};

export default function PicktorPrototype() {
  const [actorCount, setActorCount] =
    useState(0);

  const [selectedActor, setSelectedActor] =
    useState<Actor | null>(null);

  const [showActorMenu, setShowActorMenu] =
    useState(false);

  // 배우
  const {
    actors,
    page,
    setPage,

    search,
    setSearch,

    selectedFilter,
    setSelectedFilter,
  } = useActors();

  // 신고
  const {
    reports,
    setReports,

    showReports,
    setShowReports,
  } = useReports();

  // 로그인
  const {
    role,
    setRole,

    email,
    setEmail,

    password,
    setPassword,

    login,
    logout,
  } = useAuth();

  // 회원가입
  const {
    showSignup,
    setShowSignup,

    signupRole,
    setSignupRole,

    signupEmail,
    setSignupEmail,

    signupPassword,
    setSignupPassword,

    realName,
    setRealName,

    stageName,
    setStageName,

    phone,
    setPhone,

    bio,
    setBio,
  } = useSignup();

  // 배우 수
  useEffect(() => {
  fetch("/api/actors/count")
    .then(async (res) => {
      if (!res.ok) {
        return { count: 0 };
      }

      return res.json();
    })
    .then((data) => {
      setActorCount(
        Number(data.count)
      );
    });
}, []);

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
    })
    .catch(() => {
      setReports([]);
    });
}, [setReports]);

useEffect(() => {
  fetch("/api/auth/me")
    .then(async (res) => {
      if (!res.ok) {
        return { success: false };
      }

      return res.json();
    })
    .then((data) => {
      if (
        data.success &&
        data.user
      ) {
        setRole(
          data.user.role
        );
      }
    });
}, [setRole]);

  // 게스트 화면
  if (role === "guest") {
    return (
      <>
        <LoginScreen
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onLogin={login}
          onActorSignup={() => {
            setSignupRole("actor");
            setShowSignup(true);
          }}
          onAgencySignup={() => {
            setSignupRole("agency");
            setShowSignup(true);
          }}
        />

        <SignupModal
          showSignup={showSignup}
          signupRole={signupRole}

          signupEmail={signupEmail}
          setSignupEmail={setSignupEmail}

          signupPassword={signupPassword}
          setSignupPassword={
            setSignupPassword
          }

          realName={realName}
          setRealName={setRealName}

          stageName={stageName}
          setStageName={setStageName}

          phone={phone}
          setPhone={setPhone}

          bio={bio}
          setBio={setBio}

          setShowSignup={
            setShowSignup
          }
        />
      </>
    );
  }

  // 메인 화면
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* 헤더 */}
        <DashboardHeader
          role={role}
          showActorMenu={
            showActorMenu
          }
          setShowActorMenu={
            setShowActorMenu
          }
          onLogout={logout}
          onWithdraw={() => {
            alert("회원 탈퇴 완료");

            setRole("guest");
          }}
        />

        {/* 통계 */}
        <DashboardStats
          role={role}
          actorCount={actorCount}
          reports={reports}
          setReports={setReports}
          showReports={showReports}
          setShowReports={
            setShowReports
          }
        />

        {/* 미션 */}
        <MissionSection role={role} />

        {/* 배우 리스트 */}
        <ActorSection
          actors={actors}
          page={page}
          setPage={setPage}
          search={search}
          setSearch={setSearch}
          selectedFilter={
            selectedFilter
          }
          setSelectedFilter={
            setSelectedFilter
          }
          onSelectActor={
            setSelectedActor
          }
        />

        {/* 배우 상세 */}
        <ActorDetailModal
          actor={selectedActor}
          role={role}
          onClose={() =>
            setSelectedActor(null)
          }
        />

        {/* 신고 목록 */}
        <ReportModal
          role={role}
          showReports={showReports}
          reports={reports}
          setReports={setReports}
          onClose={() =>
            setShowReports(false)
          }
        />

      </div>
    </div>
  );
}