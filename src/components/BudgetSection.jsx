export function BudgetSection() {
  return (
    <div className="rounded-lg bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Budgets</h2>
        <button className="flex items-center text-gray-400">
          See Details <span className="ml-1">→</span>
        </button>
      </div>

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="relative aspect-square w-[200px] md:w-[250px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">$338</div>
              <div className="text-sm text-gray-400">of $975 limit</div>
            </div>
          </div>
          <svg viewBox="0 0 100 100" className="rotate-[-90deg]">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#95D5B2"
              strokeWidth="10"
              strokeDasharray="282.7"
              strokeDashoffset="70"
              className="opacity-30"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#64748B"
              strokeWidth="10"
              strokeDasharray="70"
              strokeDashoffset="0"
              className="opacity-90"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E8F2EF"
              strokeWidth="10"
              strokeDasharray="70"
              strokeDashoffset="70"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#2D6A4F"
              strokeWidth="10"
              strokeDasharray="70"
              strokeDashoffset="140"
            />
          </svg>
        </div>

        <div
          className="flex-1
         max-sm:grid  grid-cols-2 gap-x-16 space-y-6 md:ml-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-5 w-1 rounded-full bg-[#2D6A4F]" />
              <span className="text-gray-500">Entertainment</span>
            </div>
            <span className="font-medium">$50.00</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-5 w-1 rounded-full bg-[#95D5B2]" />
              <span className="text-gray-500">Bills</span>
            </div>
            <span className="font-medium">$750.00</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-5 w-1 rounded-full bg-[#E8F2EF]" />
              <span className="text-gray-500">Dining Out</span>
            </div>
            <span className="font-medium">$75.00</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-5 w-1 rounded-full bg-[#64748B]" />
              <span className="text-gray-500">Personal Care</span>
            </div>
            <span className="font-medium">$100.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
