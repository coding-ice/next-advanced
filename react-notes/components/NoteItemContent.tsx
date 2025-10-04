"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import { useState } from "react";
import ChevronDown from "@/assets/svg/chevron-down.svg";
import ChevronUp from "@/assets/svg/chevron-up.svg";
import Link from "next/link";

interface NoteItemContentProps {
	id: string;
	children: React.ReactNode;
	expendedNode?: React.ReactNode;
}

const NoteItemContent = ({
	id,
	children,
	expendedNode,
}: NoteItemContentProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const pathname = usePathname();
	const selectedId = pathname.split("/").pop();
	const isActive = selectedId === id;

	return (
		<li>
			<Link
				className={`relative flex flex-col gap-1 cursor-pointer p-4 rounded-md hover:bg-gray-100 ${
					isActive ? "bg-gray-100 border-[#037dba]" : ""
				}`}
				href={`/note/${id}`}
			>
				{children}
				{expendedNode && isExpanded && expendedNode}
				<button
					className="flex justify-center items-center absolute right-4 top-4 rounded-full w-6 h-6 bg-gray-300 hover:bg-gray-400 hover:text-white"
					onClick={(e) => {
						e.preventDefault();
						setIsExpanded(!isExpanded);
					}}
					type="button"
				>
					{isExpanded ? <ChevronUp /> : <ChevronDown />}
				</button>
			</Link>
		</li>
	);
};

export default NoteItemContent;
