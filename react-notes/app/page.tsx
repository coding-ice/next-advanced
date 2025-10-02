import Sidebar from "@/components/Sidebar";

const HomePage = () => {
	return (
		<div className="flex gap-4 w-screen h-screen">
			<Sidebar />
			<div className="flex items-center flex-1">main</div>
		</div>
	);
};

export default HomePage;
