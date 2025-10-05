import { Skeleton } from "@/components/ui/skeleton";

const NoteSkeleton = () => {
	return (
		<div className="flex flex-col gap-4 p-4">
			<div className="flex justify-between">
				<Skeleton className="w-[300px] h-6"></Skeleton>
				<Skeleton className="w-[100px] h-6"></Skeleton>
			</div>
			<Skeleton className="w-full h-15"></Skeleton>
			<Skeleton className="w-full h-10"></Skeleton>
			<Skeleton className="w-full h-10"></Skeleton>
		</div>
	);
};

export default NoteSkeleton;
