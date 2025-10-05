import dayjs from "dayjs";
import React from "react";
import type { Item } from "@/lib/redis";
import NoteItemContent from "./NoteItemContent";

interface NoteItemProps {
	id: string;
	note: Omit<Item, "updateTime">;
	updateTime?: React.ReactNode;
}

const NoteItem = ({ id, note, updateTime }: NoteItemProps) => {
	return (
		<NoteItemContent
			id={id}
			expendedNode={
				note.content && (
					<span className="content text-black/30">{note.content}</span>
				)
			}
		>
			<span className="font-bold text-[18px]"> {note.title}</span>
			{updateTime}
		</NoteItemContent>
	);
};

export default NoteItem;
