import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
  providers: [Google],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnSpaces = nextUrl.pathname.startsWith("/spaces");
      const isOnCheck = nextUrl.pathname.startsWith("/check");

      if (isOnSpaces || isOnCheck) {
        return isLoggedIn;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
