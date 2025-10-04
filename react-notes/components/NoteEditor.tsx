"use client";

import React, { FormEvent, useState, useTransition } from "react";
import EditButton from "./EditButton";
import NotePreview from "./NotePreview";
import {
	deleteNote as deleteNoteAction,
	saveNote as saveNoteAction,
} from "@/app/actions";

interface NoteEditorProps {
	noteId?: string;
	initialTitle: string;
	initialContent?: string;
}

const NoteEditor = ({
	noteId,
	initialTitle,
	initialContent,
}: NoteEditorProps) => {
	const [title, setTitle] = useState(initialTitle);
	const [content, setContent] = useState(initialContent);
	const [isPending, startTransition] = useTransition();

	const isDraft = !!noteId;

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		console.log("handleSubmit");
		e.preventDefault();
		startTransition(async () => {
			await saveNoteAction(title, content, noteId);
		});
	};

	const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		startTransition(async () => {
			await deleteNoteAction(noteId);
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex gap-6 p-8">
				<div className="flex flex-col justify-between w-[400px] gap-4">
					<input
						className="block h-[40px] border border-solid border-[#bcc0c4] px-2"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						className="border h-[600px] border-solid border-[#bcc0c4] p-2"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<div className="flex flex-col flex-1 gap-4">
					<div className="flex justify-end gap-2">
						<button
							className="h-[40px] cursor-pointer px-2 rounded-2xl bg-[#037dba] text-white hover:bg-[#0396df]"
							type="submit"
							disabled={isPending}
						>
							Done
						</button>
						{isDraft && (
							<button
								type="button"
								className="h-[40px] cursor-pointer px-2 rounded-2xl !text-red-500 bg-transparent border border-solid border-red-500 hover:text-white! hover:bg-red-500"
								onClick={handleDeleteClick}
								disabled={isPending}
							>
								Delete
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
