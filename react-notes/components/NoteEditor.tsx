"use client";

import React, { useActionState, useEffect, useState } from "react";
import NotePreview from "./NotePreview";
import { deleteNote, saveNote } from "@/app/actions";
import { toast } from "sonner";

interface NoteEditorProps {
	noteId?: string;
	initialTitle: string;
	initialContent?: string;
}

const initialState = {
	message: "",
};

const NoteEditor = ({
	noteId,
	initialTitle,
	initialContent,
}: NoteEditorProps) => {
	const [title, setTitle] = useState(initialTitle);
	const [content, setContent] = useState(initialContent);

	const [saveNoteState, saveNoteAction, saving] = useActionState(
		saveNote,
		initialState,
	);

	const [_, deleteNoteAction, deleting] = useActionState(
		deleteNote,
		initialState,
	);

	const isDraft = !!noteId;

	useEffect(() => {
		if (saveNoteState.message === "success") {
			toast.success("Note saved successfully");
		}
	}, [saveNoteState]);

	return (
		<form autoComplete="off">
			<div className="flex gap-6 p-8">
				<div className="flex flex-col justify-between w-[400px] gap-4">
					<input
						name="title"
						className="block h-[40px] border border-solid border-[#bcc0c4] px-2"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						name="content"
						className="border h-[600px] border-solid border-[#bcc0c4] p-2"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
					<input name="noteId" type="hidden" value={noteId} />
				</div>
				<div className="flex flex-col flex-1 gap-4">
					<div className="flex justify-end gap-2">
						<button
							type="submit"
							className="h-[40px] cursor-pointer px-2 rounded-2xl bg-[#037dba] text-white hover:bg-[#0396df]"
							formAction={saveNoteAction}
							disabled={saving}
						>
							{saving ? "Saving..." : "Done"}
						</button>
						{isDraft && (
							// biome-ignore lint/a11y/useButtonType: <explanation>
							<button
								role="menuitem"
								className="h-[40px] cursor-pointer px-2 rounded-2xl !text-red-500 bg-transparent border border-solid border-red-500 hover:text-white! hover:bg-red-500"
								formAction={deleteNoteAction}
								disabled={deleting}
							>
								{deleting ? "Deleting..." : "Delete"}
							</button>
						)}
					</div>
					<p className="bg-[#e8f4fe] text-[#477cb3] px-2 py-1 w-fit rounded-2xl font-bold">
						PREVIEW
					</p>
					<h3 className="text-[32px] font-bold">{title}</h3>
					<NotePreview value={content || ""} />
				</div>
			</div>
		</form>
	);
};

export default NoteEditor;
