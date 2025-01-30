'use client';

import { useState } from 'react';
import { BudgetSection } from './components/BudgetSection';
import { MobileNav } from './components/MobileNav';
import { OverviewCards } from './components/OverviewCards';
import { PotsSection } from './components/PotsSection';
import { RecurringBills } from './components/RecurringBills';
import { Sidebar } from './components/Sidebar';
import { TransactionsSection } from './components/TransactionsSection';

export default function App() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="min-h-screen   ">
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar
            isMinimized={isMinimized}
            toggleMinimize={() => setIsMinimized(!isMinimized)}
          />
        </div>

        <main className="flex-1 pb-20 md:pb-6">
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
            <h1 className="mb-6 text-3xl  font-bold text-zinc-950">Overview</h1>

            <div className="space-y-6">
              <OverviewCards />

              <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                <PotsSection />
                <BudgetSection />
              </div>

              <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                <TransactionsSection />
                <RecurringBills />
              </div>
            </div>
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
