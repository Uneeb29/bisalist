import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

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

        const payload = await (await res.POST(credentials)).json();

        const user = {
          name: payload.name,
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
  pages: {
    signIn: "/auth/signIn",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
