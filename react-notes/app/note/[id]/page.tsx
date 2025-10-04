import { notFound } from "next/navigation";

import Note from "@/components/Note";
import { getNote } from "@/lib/redis";

interface NoteProps {
	params: Promise<{ id: string }>;
}

const NotePage = async ({ params }: NoteProps) => {
	const { id } = await params;
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const note = await getNote(id);

	if (!note) {
		return notFound();
	}

	return <Note noteId={id} note={note} />;
};

export default NotePage;
