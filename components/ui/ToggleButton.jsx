"use client";

import { useListView } from "@/lib/ContextProvider";
import { useState } from "react";

export default function ToggleButton() {
  const { listView, toggleListView } = useListView();
  const toggle = () => {
    toggleListView();
  };

  return (
    <label className="flex items-center cursor-pointer">
      {/* Toggle Container */}
      <div className="relative">
        {/* Hidden Checkbox */}
        <input
          type="checkbox"
          className="sr-only"
          checked={listView}
          onChange={toggle}
        />
        {/* Line */}
        <div
          className={`block w-14 h-8 rounded-full ${
            listView ? "bg-green-500" : "bg-gray-600"
          }`}
        ></div>
        {/* Dot */}
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            listView ? "translate-x-6" : ""
          }`}
        ></div>
      </div>
      {/* Label */}
      <span className="ml-3 text-gray-700 font-medium">
        {listView ? "ON" : "OFF"}
      </span>
    </label>
  );
}
