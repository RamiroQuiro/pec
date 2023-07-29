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
          label: "email",
          type: "email",
          placeholder: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        console.log(credentials)
        await connectDB();
        const userFound = await User.findOne({ email: credentials?.email }).select("+password");
        if (!userFound) throw new Error("Credenciales Invalidas");
        const passwordMatch=await bcrypt.compare(credentials.password== userFound.password)
        if (!passwordMatch) throw new Error("Credenciales Invalidas");
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
  pages:{
    signIn:'/login'
  }
});

export { handler as GET, handler as POST };
