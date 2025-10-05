"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import NoteItem from "./NoteItem";

interface SidebarListFilterProps {
	notes: {
		key: string;
		title: string;
		content: string;
		updateTime: React.ReactNode;
	}[];
}

const SidebarListFilter = ({ notes }: SidebarListFilterProps) => {
	const searchParams = useSearchParams();
	const q = searchParams.get("q");

	const filteredNotes = notes.filter((note) => note.title.includes(q || ""));

	if (filteredNotes.length === 0) {
		return <div>No notes found</div>;
	}

	return (
		<ul className="flex flex-col gap-2">
			{filteredNotes.map((note) => (
				<NoteItem
					id={note.key}
					key={note.key}
					note={{ title: note.title, content: note.content }}
					updateTime={note.updateTime}
				/>
			))}
		</ul>
	);
};

export default SidebarListFilter;
