import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
	"img",
	"h1",
	"h2",
	"h3",
]);
const allowedAttributes = Object.assign(
	{},
	sanitizeHtml.defaults.allowedAttributes,
	{
		img: ["alt", "src"],
	},
);

interface NotePreviewProps {
	value: string;
}

const NotePreview = ({ value }: NotePreviewProps) => {
	const html = sanitizeHtml(marked(value), {
		allowedTags,
		allowedAttributes,
	});

	return (
		<div
			className="text-[16px] text-black/50"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
};

export default NotePreview;
