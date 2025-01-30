export function RecurringBills() {
  return (
    <div className="rounded-lg bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Recurring Bills</h2>
        <button className="flex items-center text-gray-400">
          See Details <span className="ml-1">→</span>
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-lg bg-[#FAF9F7] p-4 pl-0">
          <div className="flex items-center">
            <div className="w-1.5 rounded-r-full bg-[#2D6A4F] py-8" />
            <span className="ml-4 text-gray-500">Paid Bills</span>
          </div>
          <span className="mr-4 font-medium">$190.00</span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-[#FAF9F7] p-4 pl-0">
          <div className="flex items-center">
            <div className="w-1.5 rounded-r-full bg-[#E8F2EF] py-8" />
            <span className="ml-4 text-gray-500">Total Upcoming</span>
          </div>
          <span className="mr-4 font-medium">$194.98</span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-[#FAF9F7] p-4 pl-0">
          <div className="flex items-center">
            <div className="w-1.5 rounded-r-full bg-[#95D5B2] py-8" />
            <span className="ml-4 text-gray-500">Due Soon</span>
          </div>
          <span className="mr-4 font-medium">$59.98</span>
        </div>
      </div>
    </div>
  );
}
