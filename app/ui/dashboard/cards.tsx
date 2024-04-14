import {
  BanknotesIcon,
  ClockIcon,
  PaperAirplaneIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  income: BanknotesIcon,
  debt: PaperAirplaneIcon,
  receivable: ClockIcon,
  expense: ChartPieIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Income" value={totalPaidInvoices} type="income" />
      <Card title="Expense" value={numberOfInvoices} type="expense" />
      <Card title="Receivable" value={totalPendingInvoices} type="receivable" />
      <Card
        title="Debt"
        value={numberOfCustomers}
        type="debt"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'expense' | 'debt' | 'receivable' | 'income';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-slate-100 p-2 shadow-md">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
