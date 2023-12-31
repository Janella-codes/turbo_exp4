// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider {...pageProps}>
      <div className="min-h-screen flex-grow border-x">
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
