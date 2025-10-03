import { Skeleton } from "./ui/skeleton";

const FallbackSkeleton = () => {
	return (
		<>
			<Skeleton className="w-full h-20"></Skeleton>
			<Skeleton className="w-full h-20"></Skeleton>
			<Skeleton className="w-full h-20"></Skeleton>
		</>
	);
};

export default FallbackSkeleton;
