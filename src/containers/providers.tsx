import ActiveSectionContexProvider from "./active-section";
import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  return <ActiveSectionContexProvider>{children}</ActiveSectionContexProvider>;
}
