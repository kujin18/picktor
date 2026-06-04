"use client";

import { useState } from "react";

export type Role =
  | "guest"
  | "actor"
  | "agency"
  | "admin";

export default function useAuth() {
  const [role, setRole] =
    useState<Role>("guest");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const login = async () => {
    const res = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data =
      await res.json();

    if (!data.success) {
      alert("로그인 실패");
      return false;
    }

    setRole(data.role);

    return true;
  };

  const logout = async () => {
    setRole("guest");
    
    try {
    await fetch(
      "/api/auth/logout",
      {
        method: "POST",
      }
    );
  } catch (err) {
    console.error(err);
  }

};

  return {
    role,
    setRole,

    email,
    setEmail,

    password,
    setPassword,

    login,
    logout,
  };
}