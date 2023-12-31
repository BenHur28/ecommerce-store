import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Store",
	description: "Store",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
				<ModalProvider />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
