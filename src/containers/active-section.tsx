"use client";

import { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContexProvideProps = {
  children: React.ReactNode;
};

type ActiveSectionContexType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContex =
  createContext<ActiveSectionContexType | null>(null);

export default function ActiveSectionContexProvider({
  children,
}: ActiveSectionContexProvideProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("#home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContexProvider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContexProvider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContex);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextPropvider"
    );
  }
  return context;
}
