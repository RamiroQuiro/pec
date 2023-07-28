import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs";

import { connectDB } from "@/libs/mongoodb";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        await connectDB();
        console.log(credentials);
        const userFound = await User.findOne({ email: credentials?.email }).select("+password");
        if (!userFound) throw new Error("Credenciales Invalidas");
        const passwordMatch= bcrypt.compare(credentials.password=== userFound.password)
        if (!passwordMatch) throw new Error("Credenciales Invalidas");
            console.log(userFound)
            return userFound
      },
    }),
  ],
  callbacks: {
    jwt({ account, user, token, profile, session, trigger }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
