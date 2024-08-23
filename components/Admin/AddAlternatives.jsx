"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function AddAlternatives() {
  const [Alternatives, setAlternatives] = useState(["oil", "food", "drink"]);

  const [alternative, setAlternative] = useState("");

  const removeAlternative = (keyword) => {
    setAlternatives(Alternatives.filter((k) => k !== keyword));
  };

  const addAlternative = (alternative) => {
    setAlternatives([...Alternatives, alternative]);
    setAlternative("");
  };

  return (
    <div>
      <p>Select Alternatives</p>

      <div className="flex gap-2 border p-2 rounded-md min-h-20 flex-wrap">
        {Alternatives.map((alt) => (
          <div className="flex gap-1 justify-center items-center" key={alt}>
            <Badge className="h-8">{alt}</Badge>
            <p
              onClick={() => removeAlternative(alt)}
              className="cursor-pointer font-bold"
            >
              x
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <Input
          placeholder="Add Alternatives"
          type="text"
          value={alternative}
          onChange={(e) => setAlternative(e.target.value)}
        />
        <Button onClick={() => addAlternative(alternative)} type="submit">
          Add Alternative
        </Button>
      </div>
    </div>
  );
}
