import { Wallet } from 'lucide-react';

export function PotsSection() {
  return (
    <div className="rounded-lg bg-white lg:h-[16rem] p-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Pots</h2>
        <button className="flex items-center text-gray-400">
          See Details <span className="ml-1">→</span>
        </button>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="rounded-lg bg-[#FAF9F7] p-6 ">
          <div className="flex items-center gap-4 w-[12rem]">
            <div className="rounded-xl bg-[#E8F2EF] p-2">
              <Wallet className="h-6 w-6 text-[#2D6A4F]" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Saved</div>
              <div className="text-3xl font-bold">$850</div>
            </div>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-x-16 gap-y-6 md:ml-8">
          <div className="flex items-center gap-3">
            <div className="h-5 w-1 rounded-full bg-[#2D6A4F]" />
            <div>
              <div className="text-gray-500">Savings</div>
              <div className="font-medium">$159</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-1 rounded-full bg-[#95D5B2]" />
            <div>
              <div className="text-gray-500">Gift</div>
              <div className="font-medium">$40</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-1 rounded-full bg-[#64748B]" />
            <div>
              <div className="text-gray-500">Concert Ticket</div>
              <div className="font-medium">$110</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-1 rounded-full bg-[#D9F3E5]" />
            <div>
              <div className="text-gray-500">New Laptop</div>
              <div className="font-medium">$10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
