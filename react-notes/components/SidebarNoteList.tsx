import dayjs from "dayjs";
import React from "react";
import { getAllNotes, type Item } from "@/lib/redis";
import NoteItem from "./NoteItem";

async function SidebarNoteList() {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	const notes = await getAllNotes();

	if (Object.keys(notes || {}).length === 0) {
		return <div>No notes found</div>;
	}

	return (
		<div>
			<ul className="flex flex-col gap-2">
				{Object.keys(notes).map((key) => {
					const item = JSON.parse(notes[key]) as Item;

					return <NoteItem id={key} key={key} note={item} />;
				})}
			</ul>
		</div>
	);
}

export default SidebarNoteList;
