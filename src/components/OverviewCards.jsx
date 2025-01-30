export function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-lg bg-[#1C1C1C] p-4 text-white">
        <div className="text-sm">Current Balance</div>
        <div className="text-3xl font-bold">$4,836.00</div>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="text-sm text-gray-600">Income</div>
        <div className="text-3xl font-bold">$3,814.25</div>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="text-sm text-gray-600">Expenses</div>
        <div className="text-3xl font-bold">$1,700.50</div>
      </div>
    </div>
  );
}
