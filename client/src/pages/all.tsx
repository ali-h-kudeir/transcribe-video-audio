'use client';
import All from '@/components/all';
import { AppProvider } from '@/providers/new-provider';
import Link from 'next/link';

export default function AllPage() {
  return (
    <main className="container min-h-full mx-auto pb-32">
      <div className="grid place-items-center mt-10">
        <Link href="/" className="mx-auto">
          <span className="text-md py-2 px-6 bg-indigo-400 rounded text-white font-bold">New</span>
        </Link>
      </div>
      <AppProvider>
        <All />
      </AppProvider>
    </main>
  );
}
