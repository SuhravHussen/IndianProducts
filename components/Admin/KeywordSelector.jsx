"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function KeywordSelector({ keywords = [], setKeywords }) {
  const [keyword, setKeyword] = useState("");

  const removeKeyword = (keyword) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  const addKeyword = (keyword) => {
    setKeywords([...keywords, keyword]);
    setKeyword("");
  };

  return (
    <div>
      <p>Select Keywords</p>

      <div className="flex gap-2 border p-2 rounded-md min-h-20 flex-wrap">
        {keywords.map((keyword) => (
          <div className="flex gap-1 justify-center items-center" key={keyword}>
            <Badge className="h-8">{keyword}</Badge>
            <p
              onClick={() => removeKeyword(keyword)}
              className="cursor-pointer font-bold"
            >
              x
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <Input
          placeholder="Add Keywords"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button onClick={() => addKeyword(keyword)} type="submit">
          Add Keyword
        </Button>
      </div>
    </div>
  );
}
