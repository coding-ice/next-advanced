import React from "react";
import ReactLogo from "@/assets/svg/react.svg";
import { getAllNotes } from "@/lib/redis";
import SidebarNoteList from "./SidebarNoteList";
import SideSearchField from "./SideSearchField";

const Sidebar = async () => {
	const notes = await getAllNotes();

	return (
		<div className="flex flex-col gap-4 p-4 w-80 bg-white border-r border-gray-200">
			<div className="flex gap-1 justify-center items-center">
				<ReactLogo className="w-8 h-8 text-[#0a7ea5]" />
				<h1>React Notes</h1>
			</div>

			<SideSearchField />
			<SidebarNoteList notes={notes} />
		</div>
	);
};

export default Sidebar;
