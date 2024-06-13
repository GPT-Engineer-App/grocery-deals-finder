"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Grocery Best Deals Finder</h1>
        <nav className="mt-2">
          <Link href="/daily-specials" className="mr-4">Daily Specials</Link>
          <Link href="/weekly-specials" className="mr-4">Weekly Specials</Link>
          <Link href="/store-locations" className="mr-4">Store Locations</Link>
          <Link href="/price-comparisons" className="mr-4">Price Comparisons</Link>
          <Link href="/shopping-lists" className="mr-4">Shopping Lists</Link>
        </nav>
      </header>
      <main className="p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome to Grocery Best Deals Finder!</h2>
        <p>Find the best deals on groceries from various stores in Fiji. Navigate through the sections to explore daily and weekly specials, compare prices, find store locations, and create your shopping lists.</p>
      </main>
    </div>
  );
}