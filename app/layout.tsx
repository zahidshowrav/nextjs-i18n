import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="relative">
					<Navbar />
					<div className="w-[70%] mx-auto mt-20 py-16">{children}</div>
				</div>
			</body>
		</html>
	);
}
