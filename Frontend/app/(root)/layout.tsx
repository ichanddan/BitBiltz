import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-10">{children}</div>
    </>
  );
}
