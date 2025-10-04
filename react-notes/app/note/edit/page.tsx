import React from "react";
import NoteEditor from "@/components/NoteEditor";

const NewNote = async () => {
	return <NoteEditor initialTitle="Untitled" initialContent="" />;
};

export default NewNote;
