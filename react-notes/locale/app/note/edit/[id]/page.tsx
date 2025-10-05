import { notFound } from "next/navigation";

import { getNote } from "@/lib/redis";
import NoteEditor from "@/components/NoteEditor";

interface EditNoteProps {
	params: Promise<{ id: string }>;
}

const EditNote = async ({ params }: EditNoteProps) => {
	const { id } = await params;
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const note = await getNote(id);

	if (!note) {
		return notFound();
	}

	return (
		<NoteEditor
			noteId={id}
			initialTitle={note.title}
			initialContent={note.content}
		/>
	);
};

export default EditNote;
