import SideBar from "@/components/fragments/SideBar";

export default function AdminLayout({ children }) {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="w-full bg-slate-100 p-4 lg:p-8">{children}</div>
    </div>
  );
}
