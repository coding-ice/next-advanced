import Sidebar from "@/components/Sidebar";
import "./global.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html>
			<body>
				<div className="flex gap-4 w-screen h-screen">
					<Sidebar />
					<div className="flex items-center flex-1">{children}</div>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
