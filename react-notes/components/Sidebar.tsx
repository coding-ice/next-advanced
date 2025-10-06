import React, { Suspense } from "react";
import ReactLogo from "@/assets/svg/react.svg";
import SidebarNoteList from "./SidebarNoteList";
import SideSearchField from "./SideSearchField";
import FallbackSkeleton from "./FallbackSkeleton";
import Link from "next/link";
import SiderbarImport from "./SiderbarImport";

const Sidebar = async () => {
	return (
		<div className="flex flex-col gap-4 p-4 w-80 bg-white border-r border-gray-200">
			<Link href="/" className="flex gap-1 justify-center items-center">
				<ReactLogo className="w-8 h-8 text-[#0a7ea5]" />
				<h1>React Notes</h1>
			</Link>

			<SideSearchField />
			<Suspense fallback={<FallbackSkeleton />}>
				<SidebarNoteList />
			</Suspense>
			<SiderbarImport />
		</div>
	);
};

export default Sidebar;
