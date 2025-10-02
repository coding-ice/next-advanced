"use client";

import { usePathname } from "next/navigation";
import type React from "react";

interface NoteItemContentProps {
	id: string;
	children: React.ReactNode;
}

const NoteItemContent = ({ id, children }: NoteItemContentProps) => {
	const pathname = usePathname();
	const selectedId = pathname.split("/").pop();
	const isActive = selectedId === id;

	return (
		<li
			className={`flex flex-col gap-1 cursor-pointer p-4 rounded-md ${
				isActive ? "bg-gray-100 border-[#037dba]" : ""
			}`}
		>
			{children}
		</li>
	);
};

export default NoteItemContent;
