import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../lib/prisma-client";

export const authOptions = {
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

        const result = await res.POST(credentials);

        if (result.status !== 200) {
          return null;
          //throw new Error("Login Failed");
        }

        const payload = await result.json();
        console.log(payload);
        const user = {
          // if the role is customer then name: payload.name else name: payload.firstName+payload.lastName
          ...(payload.role === "customer" && { name: payload.name }),
          ...(payload.role === "vendor" && {
            name: payload.firstname + " " + payload.lastname,
          }),

          email: payload.email,
          role: credentials.role,
        };

        if (user) {
          console.log("NextAuth Got this reponse: returning user", user);
          return user;
        } else {
          console.log("NextAuth Got this reponse: returning null", user);
          return null;
        }
        // console.log('credentials', credentials)
        // return null
      },
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      if (!session) return;

      // if session exists, then we have a user
      console.log("Session CallBack: ", session);

      // finding the user in the database based on the email

      const customer = await prisma.customer.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (customer) {
        session.user.email = customer.email;
        session.user.name = customer.name;
        session.user.role = "customer";
        return session;
      }

      const vendor = await prisma.vendor.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (vendor) {
        session.user.role = "vendor";
        session.user.email = vendor.email;
        session.user.name = vendor.firstname + " " + vendor.lastname;
        return session;
      }
    },
  },

  pages: {
    signIn: "/auth/signIn",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
