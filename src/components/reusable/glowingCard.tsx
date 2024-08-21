import React from "react";

interface GlowingCardProps {
  children: React.ReactNode;
  glow?: string;
}

export const GlowingCard = ({
  children,
  glow = "shadow-[0_0_15px_5px_rgba(0,255,255,0.6)] h-full",
}: GlowingCardProps) => (
  <div className={`bg-black p-6 rounded-lg ${glow}`}>{children}</div>
);
