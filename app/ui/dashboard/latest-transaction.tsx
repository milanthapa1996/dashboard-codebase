import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
import { fetchLatestTransactions } from '@/app/lib/data';
import { formatDateToLocal } from '@/app/lib/utils';
import TransactionStatus from '@/app/ui/dashboard/status';


export default async function LatestTransaction() {
  const latestTransaction = await fetchLatestTransactions();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Transactions
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-slate-100 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {latestTransaction.map((transaction, i) => {
            return (
              <div
                key={transaction.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={transaction.image_url}
                    alt={`${transaction.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {transaction.name}
                    </p>
                    <p className="hidden text-xs text-gray-500 sm:block">
                      {formatDateToLocal(latestTransaction[0].date)}
                    </p>
                  </div>
                  <TransactionStatus status={"expense"} />
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {transaction.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
