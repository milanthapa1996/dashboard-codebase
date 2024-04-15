import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TransactionStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex place-items-center justify-center rounded-full px-2 py-1 text-xs ml-4',
        {
          'bg-red-500 text-white': status === 'expense',
          'bg-green-500 text-white': status === 'income',
          'bg-sky-500 text-white': status === 'receivable',
          'bg-yellow-500 text-white': status === 'debt',
        },
      )}
    >
      {status === 'expense' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'income' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-3 text-white" />
        </>
      ) : null}
      {status === 'receivable' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'debt' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
    </span>
  );
}
