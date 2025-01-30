import { ArrowLeftRight, Home, PieChart, Receipt, Wallet } from 'lucide-react';

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t  md:hidden border-gray-200 bg-white px-6 py-2">
      <ul className="flex justify-between">
        <li>
          <a href="#" className="flex flex-col items-center">
            <Home className="h-5 w-5 text-[#2D6A4F]" />
            <span className="mt-1 text-xs text-[#2D6A4F]">Overview</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center">
            <ArrowLeftRight className="h-5 w-5 text-gray-400" />
            <span className="mt-1 text-xs text-gray-400">Transactions</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center">
            <PieChart className="h-5 w-5 text-gray-400" />
            <span className="mt-1 text-xs text-gray-400">Budgets</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center">
            <Wallet className="h-5 w-5 text-gray-400" />
            <span className="mt-1 text-xs text-gray-400">Pots</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center">
            <Receipt className="h-5 w-5 text-gray-400" />
            <span className="mt-1 text-xs text-gray-400">Bills</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
