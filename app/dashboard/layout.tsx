import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center w-screen h-screen">
      <div className="w-full h-12 bg-gray-900 border-b-2 border-slate-200">
        <Navbar />
      </div>
      <div className="flex flex-row h-full">
        <div className="w-64 h-full bg-slate-100">
          <Sidebar />
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
