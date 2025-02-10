"use client";

import { SubsciptionLevel } from "@/lib/subscription";
import { createContext, ReactNode, useContext } from "react";

const SubscriptionLevelContext = createContext<SubsciptionLevel | undefined>(
  undefined,
);

interface SubscriptionLevelProviderProps {
  children: ReactNode;
  userSubscriptionLevel: SubsciptionLevel;
}
export default function SubscriptionLevelProvider({
  children,
  userSubscriptionLevel,
}: SubscriptionLevelProviderProps) {
  return (
    <SubscriptionLevelContext.Provider value={userSubscriptionLevel}>
      {children}
    </SubscriptionLevelContext.Provider>
  );
}

export function useSubscriptionLevel() {
  const context = useContext(SubscriptionLevelContext);
  if (context === undefined) {
    throw new Error(
      "useUserSubscriptionLevel must be used within a SubscriptionLevelProvider",
    );
  }

  return context;
}
