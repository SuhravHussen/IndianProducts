"use client";

import { Button } from "../ui/button";
import { FeedbackFish } from "@feedback-fish/react";
export default function Report() {
  return (
    <div className="w-[95%] max-w-[660px] mt-8 text-center">
      <p>
        If you encounter any issues or have suggestions to improve our website{" "}
        <FeedbackFish projectId="5c0a8b784eb8ce">
          <Button className="h-6">Tell us</Button>
        </FeedbackFish>
      </p>
    </div>
  );
}
