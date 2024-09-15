import React from "react";
import AgentsCard from "./AgentsCard";
import agents from "@/components/Data/agents";

export default function AgentsLists() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
      {agents.map((items,index) => {
        return <AgentsCard items={items} key={index} />;
      })}
    </div>
  );
}
