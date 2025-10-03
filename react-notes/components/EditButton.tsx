import Link from "next/link";
import React from "react";

interface EditButtonProps {
	noteId?: string;
	children: React.ReactNode;
}

const EditButton = ({ noteId, children }: EditButtonProps) => {
	const isDraft = !!noteId;

	return (
		<Link href={`/note/edit/${isDraft ? noteId : ""}`}>
			<button
				type="button"
				className="bg-[#037dba] text-white h-8 px-3 rounded-2xl cursor-pointer hover:bg-[#0396df]"
			>
				{children}
			</button>
		</Link>
	);
};

export default EditButton;
