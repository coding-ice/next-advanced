"use client";

import { uploadAction } from "@/app/actions";
import { useRouter } from "next/navigation";
import React, { useActionState, useId, useRef } from "react";

const initialState = {
	uuid: "",
	fileUrl: "",
};

const SiderbarImport = () => {
	const fileId = useId();
	const router = useRouter();
	const formRef = useRef<HTMLFormElement>(null);

	const [_, formAction, isPending] = useActionState(
		handleFormAction,
		initialState,
	);

	async function handleFormAction(prev, formData: FormData) {
		const file = formData.get("file") as File;
		if (!file || file.size === 0) {
			return {
				message: "No file uploaded",
			};
		}

		const data = await uploadAction(prev, formData);
		router.push(`/note/${data.uuid}`);

		formRef.current?.reset();
	}

	return (
		<form className="text-center" action={formAction} ref={formRef}>
			<label className="cursor-pointer" htmlFor={fileId}>
				Import .md file
			</label>
			<input name="file" type="file" id={fileId} accept=".md" multiple />
			<button
				className="ml-2 cursor-pointer border border-solid border-[#bcc0c4] px-2"
				type="submit"
				disabled={isPending}
			>
				{isPending ? "Uploading..." : "Upload"}
			</button>
		</form>
	);
};

export default SiderbarImport;
