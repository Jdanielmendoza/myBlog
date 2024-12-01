import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

// Configuración de fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata de la página
export const metadata: Metadata = {
  title: "MyBlog",
  description: "my first blog by Daniel",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	
	  return (
		<html lang="es">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header/>
				{children}
			</body>
		</html>
	);
}




/* const createPost = async () => {
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, authorId }),
      });

      if (!response.ok) {
        throw new Error("Fallo al crear el post");
      }

      const newPost = await response.json();
      console.log(newPost);
    } catch (error) {
      console.error("Error creando el post:", error);
    }
  }; */