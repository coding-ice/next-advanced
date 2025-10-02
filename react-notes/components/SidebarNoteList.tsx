import dayjs from "dayjs";
import React from "react";
import type { Item } from "@/lib/redis";
import NoteItem from "./NoteItem";

interface Notes {
	notes: Record<string, string>;
}

function SidebarNoteList(props: Notes) {
	if (Object.keys(props.notes || {}).length === 0) {
		return <div>No notes found</div>;
	}

	return (
		<div>
			<ul className="flex flex-col gap-2">
				{Object.keys(props.notes).map((key) => {
					const item = JSON.parse(props.notes[key]) as Item;

					return <NoteItem id={key} key={key} note={item} />;
				})}
			</ul>
		</div>
	);
}

export default SidebarNoteList;
