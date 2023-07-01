import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../../../../server/db/client";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials, req) {
        const res = await import("../../login/route");
        // const res = await fetch("http://localhost:3000/api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(credentials),
        // });

        // const user = await res.json();

        const payload = await (await res.POST(credentials)).json();
        const user = {
          name: payload.name,
          email: payload.email,
        };

        if (user) {
          console.log("NextAuth Got this reponse: returning user", user);
          return user;
        } else {
          console.log("NextAuth Got this reponse: returning null", user);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
