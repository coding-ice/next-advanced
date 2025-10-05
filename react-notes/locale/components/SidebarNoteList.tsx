import dayjs from "dayjs";
import React from "react";
import { getAllNotes, type Item } from "@/lib/redis";
import SidebarListFilter from "./SidebarListFilter";

async function SidebarNoteList() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const notes = await getAllNotes();

	if (Object.keys(notes || {}).length === 0) {
		return <div>No notes found</div>;
	}

	return (
		<SidebarListFilter
			notes={Object.entries(notes).map(([key, value]) => {
				const item = JSON.parse(value) as Item;

				return {
					key,
					title: item.title,
					content: item.content,
					updateTime: (
						<span className="text-[12px] text-black/30">
							{dayjs(item.updateTime).format("YYYY-MM-DD HH:mm:ss")}
						</span>
					),
				};
			})}
		/>
	);
}

export default SidebarNoteList;
