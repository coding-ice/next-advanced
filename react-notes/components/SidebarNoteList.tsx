import { Item } from "@/lib/redis";
import dayjs from "dayjs";
import React from "react";

interface Notes {
  notes: Record<string, string>;
}

function SidebarNoteList(props: Notes) {
  if (Object.keys(props.notes || {}).length === 0) {
    return <div>No notes found</div>;
  }

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {Object.keys(props.notes).map((key) => {
          const item = JSON.parse(props.notes[key]) as Item;

          return (
            <li
              className="flex flex-col gap-1 border-b pb-1 border-black/10"
              key={key}
            >
              <span className="font-bold text-[18px]"> {item.title}</span>
              <span className="text-[12px] text-black/30">
                {dayjs(item.updateTime).format("YYYY-MM-DD HH:mm:ss")}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarNoteList;
