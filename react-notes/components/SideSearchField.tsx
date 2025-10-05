"use client";

import React, { useTransition } from "react";
import EditButton from "./EditButton";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function SideSearchField() {
	const { replace } = useRouter();
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();

	const handleSearch = (term: string) => {
		const params = new URLSearchParams(location.search);
		if (term) {
			params.set("q", term);
		} else {
			params.delete("q");
		}
		startTransition(() => {
			replace(`${pathname}?${params.toString()}`);
		});
	};

	return (
		<div className="flex gap-4">
			<input
				className="flex-1 w-full h-8 rounded-full border border-black/10 px-2"
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<EditButton>New</EditButton>
		</div>
	);
}

export default SideSearchField;
