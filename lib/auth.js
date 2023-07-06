import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma-client";
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
        const res = await import("../app/api/login/route");

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
    signIn: "/auth/signIn",
  },
};
