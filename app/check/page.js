"use client";
import { useSession, signIn } from "next-auth/react";

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
      <div style={{ height: "200px", width: "100px" }}>
        <button
          style={{ height: "inherit", width: "inherit" }}
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </div>
    );
  }
}

export default Check;
