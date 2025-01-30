/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  ArrowLeftRight,
  Home,
  Menu,
  PieChart,
  Receipt,
  Wallet,
} from 'lucide-react';

export function Sidebar({ isMinimized, toggleMinimize }) {
  return (
    <aside className="fixed left-0 top-0 h-full bg-[#1C1C1C] text-white md:relative">
      <div className="flex h-full w-[250px] flex-col p-4 transition-all duration-300 ease-in-out md:w-[250px]">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">finance</h1>
        </div>

        <nav className="flex-1">
          <ul className="space-y-7">
            <li>
              <a
                href="#"
                className="flex items-center text-[#0c4129] font-bold gap-3 rounded-r-lg  bg-[#faf9f6] p-3"
              >
                <Home className="h-5 w-5" />
                <span>Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg p-3 text-gray-400 hover:bg-white/10"
              >
                <ArrowLeftRight className="h-5 w-5" />
                <span>Transactions</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg p-3 text-gray-400 hover:bg-white/10"
              >
                <PieChart className="h-5 w-5" />
                <span>Budgets</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg p-3 text-gray-400 hover:bg-white/10"
              >
                <Wallet className="h-5 w-5" />
                <span>Pots</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg p-3 text-gray-400 hover:bg-white/10"
              >
                <Receipt className="h-5 w-5" />
                <span>Recurring Bills</span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleMinimize}
          className="flex items-center gap-3 rounded-lg p-3 text-gray-400 hover:bg-white/10"
        >
          <Menu className="h-5 w-5" />
          <span>Minimize Menu</span>
        </button>
      </div>
    </aside>
  );
}
