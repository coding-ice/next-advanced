"use client";

import { useRouter } from "next/navigation";
import React, { useId } from "react";

const SiderbarImport = () => {
	const fileId = useId();
	const router = useRouter();

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (!files || !files.length) {
			console.error("No files selected");
			return;
		}

		const file = files[0];
		const formData = new FormData();
		formData.append("file", file);

		const response = await fetch("/api/upload", {
			method: "POST",
			body: formData,
		});

		if (!response.ok) {
			console.error("Failed to upload file");
			return;
		}

		const data = await response.json();

		router.push(`/note/${data.uuid}`);
		router.refresh();

		e.target.type = "text";
		e.target.type = "file";
	};

	return (
		<div className="text-center">
			<label className="cursor-pointer" htmlFor={fileId}>
				Import .md file
			</label>
			<input
				style={{ clip: "rect(0 0 0 0)" }}
				className="absolute"
				name="file"
				type="file"
				id={fileId}
				accept=".md"
				multiple
				onChange={handleFileChange}
			/>
		</div>
	);
};

export default SiderbarImport;
