import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "@repo/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

console.log("\n--- AUTH.TS ENVIRONMENT DEBUG (Pnpm Test) ---");
console.log("process.env.AUTH_GOOGLE_ID:", process.env.AUTH_GOOGLE_ID);
console.log(
  "process.env.AUTH_GOOGLE_SECRET (set?):",
  !!process.env.AUTH_GOOGLE_SECRET
); // Only log if set, not the value
console.log("process.env.NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
console.log("process.env.AUTH_SECRET (set?):", !!process.env.AUTH_SECRET);
console.log("--- END AUTH.TS ENVIRONMENT DEBUG ---\n");

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
});
