import SideBar from "@/components/fragments/SideBar";

export default function AdminLayout({ children }) {
  return (
    <div className="grid min-h-screen w-full overflow-hidden grid-cols-1 sm:grid-cols-[280px_1fr] md:grid-cols-[280px_1fr] lg:grid-cols-[280px_1fr] xl:grid-cols-[280px_1fr] 2xl:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="w-full bg-slate-100 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
        {children}
      </div>
    </div>
  );
}
