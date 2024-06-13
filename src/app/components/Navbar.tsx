"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link href="/pages/DailySpecials" className="text-white">Daily Specials</Link>
        </li>
        <li>
          <Link href="/pages/WeeklySpecials" className="text-white">Weekly Specials</Link>
        </li>
        <li>
          <Link href="/pages/StoreLocations" className="text-white">Store Locations</Link>
        </li>
        <li>
          <Link href="/pages/PriceComparisons" className="text-white">Price Comparisons</Link>
        </li>
        <li>
          <Link href="/pages/ShoppingLists" className="text-white">Shopping Lists</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;