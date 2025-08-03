import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-64 p-4">{children}</main>
      </body>
    </html>
  );
}
