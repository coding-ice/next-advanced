import { Skeleton } from "@/components/ui/skeleton";

const EditNoteLoading = () => {
	return (
		<div className="w-full flex gap-4 p-4">
			<div className="w-[400px] flex flex-col gap-4">
				<Skeleton className="w-full h-[40px]" />
				<Skeleton className="w-full h-[600px]" />
			</div>
			<div className="flex-1 flex flex-col gap-4">
				<Skeleton className="w-full h-[40px]" />
				<Skeleton className="w-full h-[40px]" />
				<Skeleton className="w-full h-[80px]" />
			</div>
		</div>
	);
};
export default EditNoteLoading;
