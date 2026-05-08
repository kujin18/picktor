"use client";

import { useState } from "react";

export default function useSignup() {
  const [showSignup, setShowSignup] =
    useState(false);

  const [signupRole, setSignupRole] =
    useState<
      "actor" | "agency"
    >("actor");

  const [signupEmail, setSignupEmail] =
    useState("");

  const [
    signupPassword,
    setSignupPassword,
  ] = useState("");

  const [realName, setRealName] =
    useState("");

  const [stageName, setStageName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [bio, setBio] =
    useState("");

  return {
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
  };
}