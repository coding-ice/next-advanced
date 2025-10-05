import type { Item } from "@/lib/redis";
import dayjs from "dayjs";
import React from "react";
import EditButton from "./EditButton";
import NotePreview from "./NotePreview";

interface NoteProps {
	noteId: string;
	note: Item;
}

const Note = ({ noteId, note }: NoteProps) => {
	return (
		<div className="flex flex-col gap-4 p-8">
			<div className="flex justify-between">
				<span className="text-[12px] text-black/30">
					{dayjs(note.updateTime).format("YYYY-MM-DD HH:mm:ss")}
				</span>
				<EditButton
					className="bg-transparent border border-solid border-[#477cb3] !text-[#477cb3] hover:!text-white px-3"
					noteId={noteId}
				>
					Edit
				</EditButton>
			</div>
			<h4 className="text-[32px] font-bold mb-1">{note.title}</h4>
			<NotePreview value={note.content} />
		</div>
	);
};

export default Note;
