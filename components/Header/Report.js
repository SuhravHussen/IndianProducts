"use client";

import { Button } from "../ui/button";
import { FeedbackFish } from "@feedback-fish/react";
export default function Report() {
  return (
    <FeedbackFish projectId="5c0a8b784eb8ce">
      <div className="w-[95%] max-w-[660px] mt-8">
        <p>
          If you encounter any issues or have suggestions to improve our
          website, we would love to hear from you. Please {"don't "}hesitate to
          share your thoughts with us , <Button className="h-6">Report</Button>
        </p>
      </div>
    </FeedbackFish>
  );
}
