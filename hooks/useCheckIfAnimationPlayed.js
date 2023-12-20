"use client";

export default function useCheckIfAnimationPlayed() {
  let wasPlayed;
  if (sessionStorage.getItem("isAnimationPlayed") === null) {
    wasPlayed = false;
    sessionStorage.setItem("isAnimationPlayed", true);
  } else {
    wasPlayed = true;
  }
  console.log(wasPlayed);
  return wasPlayed;
}
