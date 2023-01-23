'use client';
import New from '@/components/new';
import { AppProvider } from '@/providers/new-provider';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container min-h-full mx-auto pb-32">
      <div className="grid place-items-center mt-10">
        <Link href="/all" className="mx-auto">
          <span className="text-md py-2 px-6 bg-indigo-500 rounded hover:bg-indigo-700 transition text-white font-bold">
            All Items
          </span>
        </Link>
      </div>
      <AppProvider>
        <New />
      </AppProvider>
    </main>
  );
}
