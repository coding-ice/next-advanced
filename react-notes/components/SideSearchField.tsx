import React from "react";
import EditButton from "./EditButton";

function SideSearchField() {
	return (
		<div className="flex gap-4">
			<input className="flex-1 w-full h-8 rounded-full border border-black/10 px-2" />
			<EditButton>New</EditButton>
		</div>
	);
}

export default SideSearchField;
