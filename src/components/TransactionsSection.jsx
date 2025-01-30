export function TransactionsSection() {
  const transactions = [
    {
      id: 1,
      name: 'Emma Richardson',
      amount: '+$75.50',
      date: '19 Aug 2024',
      image: '/placeholder.svg?height=32&width=32',
    },
    {
      id: 2,
      name: 'Savory Bites Bistro',
      amount: '-$55.50',
      date: '19 Aug 2024',
      image: '/placeholder.svg?height=32&width=32',
    },
    {
      id: 3,
      name: 'Daniel Carter',
      amount: '-$42.30',
      date: '18 Aug 2024',
      image: '/placeholder.svg?height=32&width=32',
    },
    {
      id: 4,
      name: 'Sun Park',
      amount: '+$120.00',
      date: '17 Aug 2024',
      image: '/placeholder.svg?height=32&width=32',
    },
    {
      id: 5,
      name: 'Urban Services Hub',
      amount: '-$65.00',
      date: '17 Aug 2024',
      image: '/placeholder.svg?height=32&width=32',
    },
  ];

  return (
    <div className="rounded-lg bg-white p-4 lg:mt-[-5rem] ">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Transactions</h2>
        <button className="text-sm text-gray-500">View All →</button>
      </div>

      <div className="space-y-10">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={transaction.image || '/placeholder.svg'}
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {transaction.name}
                </div>
                <div className="text-xs text-gray-500">{transaction.date}</div>
              </div>
            </div>
            <div
              className={`mono text-sm font-medium ${
                transaction.amount.startsWith('+')
                  ? 'text-[#2D6A4F]'
                  : 'text-gray-900'
              }`}
            >
              {transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
