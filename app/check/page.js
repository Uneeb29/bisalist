"use client";
import { useSession } from "next-auth/react";

function Check() {
  const { data: session, status } = useSession();
  console.log("session", session);

  if (status === "authenticated") {
    return (
      <div>
        <h1>Check</h1>
        <p>User Authenticated</p>
        <p>{session.user.email}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Check</h1>
        <p>User Not Authenticated</p>
      </div>
    );
  }
}

export default Check;
