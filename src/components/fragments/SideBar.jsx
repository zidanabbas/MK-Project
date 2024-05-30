import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiUsersThreeLight } from "react-icons/pi";
import { BsCart4 } from "react-icons/bs";
export default function SideBar() {
  const listNav = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: <RxDashboard />,
    },
    {
      title: "Products",
      path: "/admin/products",
      icon: <MdProductionQuantityLimits />,
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: <PiUsersThreeLight />,
    },
    {
      title: "Orders",
      path: "/admin/orders",
      icon: <BsCart4 />,
    },
  ];
  return (
    <div className="w-full bg-gray-800 h-screen px-4 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <h1 className="text-white text-xl font-semibold">MK Management</h1>
      {listNav.map((item, index) => (
        <ul className="mt-4" key={index}>
          <li className="flex items-center gap-2 py-2 text-gray-300 hover:text-white hover:bg-gray-700 px-2">
            <span className="px-2">{item.icon}</span>
            <Link href={item.path} className="w-full">
              {item.title}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
