import Sidebar from "@/components/Sidebar";
import { Toaster } from "sonner";

import "./global.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>
				<div className="flex gap-4 w-screen h-screen">
					<Sidebar />
					<div className="flex-1">{children}</div>
					<Toaster />
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
