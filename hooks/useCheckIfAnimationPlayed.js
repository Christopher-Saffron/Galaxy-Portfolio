"use client";
export default function useCheckIfAnimationPlayed() {
  const wasPlayed = sessionStorage.getItem("isAnimationPlayed");
  console.log(wasPlayed);
  return "ding";
}
