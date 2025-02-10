import { SubsciptionLevel } from "./subscription";

export function canCreateResume(
  subscriptionLevel: SubsciptionLevel,
  currentResumeCount: number,
) {
  const maxResumeMap: Record<SubsciptionLevel, number> = {
    free: 1,
    pro: 3,
    pro_plus: Infinity,
  };

  const maxResumes = maxResumeMap[subscriptionLevel]; // alternative of complex if else statements

  return currentResumeCount < maxResumes;
}

// export function canUseAITools(subscriptionLevel: SubsciptionLevel) {
//   return subscriptionLevel !== "free";
// }

export function canUseCustomization(subscriptionLevel: SubsciptionLevel) {
  return subscriptionLevel === "pro_plus";
}
