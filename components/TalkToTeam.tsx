"use client";

import { ScheduleMeeting } from "@/components/ScheduleMeeting";
import { siteConfig } from "@/config/site";

/** "Talk to Team": same-page modal showing the direct 30-minute calendar (no event picker, no new tab). */
export function TalkToTeam({ variant, className }: { variant?: "primary" | "ghost" | "link"; className?: string }) {
  return (
    <ScheduleMeeting
      variant={variant}
      className={className}
      title="Talk to Team"
      description="Choose a time that works for you."
      buttonLabel="Talk to Team"
      bookingUrl={siteConfig.calTalkToTeamUrl}
      showNewTabLink={false}
    />
  );
}
