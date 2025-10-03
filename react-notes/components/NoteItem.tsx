import dayjs from "dayjs";
import React from "react";
import type { Item } from "@/lib/redis";
import NoteItemContent from "./NoteItemContent";

interface NoteItemProps {
  id: string;
  note: Item;
}

const NoteItem = ({ id, note }: NoteItemProps) => {
  return (
    <NoteItemContent
      id={id}
      expendedNode={
        <span className="content text-black/30">{note.content}</span>
      }
    >
      <span className="font-bold text-[18px]"> {note.title}</span>
      <span className="text-[12px] text-black/30">
        {dayjs(note.updateTime).format("YYYY-MM-DD HH:mm:ss")}
      </span>
    </NoteItemContent>
  );
};

export default NoteItem;
