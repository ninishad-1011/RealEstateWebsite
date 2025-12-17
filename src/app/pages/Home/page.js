"use client";

import React from "react";
import Hero from "./components/Hero";
import Test from "./components/testomonials";
import Card from "../../card";
import AgentsCard from "@/agent";
import { LuHouse } from "react-icons/lu";
import { BsBank } from "react-icons/bs";
import { FaSellsy } from "react-icons/fa6";
import Link from "next/link";

function Page() {
  const services = [
    {
      icon: LuHouse,
      title: "Life Style",
      desc: "Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi...",
      href: "/about",
    },
    {
      icon: BsBank,
      title: "Loans",
      desc: "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a...",
      href: "/about",
    },
    {
      icon: FaSellsy,
      title: "Sells",
      desc: "Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi...",
      href: "/about",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-black text-3xl sm:text-4xl md:text-6xl font-bold mb-8 text-center md:text-left">
          Our Services
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 text-black">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="flex-1 md:border-r-2 md:border-gray-500 pr-0 md:pr-6 last:border-r-0"
              >
                <h1 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-5xl font-semibold py-4">
                  <Icon className="text-black text-4xl sm:text-5xl md:text-6xl" />
                  {service.title}
                </h1>
                <p className="text-sm sm:text-base">{service.desc}</p>
                <Link href={service.href}>
                  <button className="mt-4 sm:mt-6 cursor-pointer hover:text-green-600 font-semibold transition">
                    Read More...
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Latest Properties Section */}
      <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black">
            Latest Properties
          </h1>
          <Link
            href="/pages/Properties"
            className="text-base text-white sm:text-lg bg-green-800 hover:bg-green-600 px-3 py-1 rounded transition"
          >
            View All
          </Link>
        </div>
        <div className="mt-8">
          <Card limit={3} pagination={false} />
        </div>
      </div>

      {/* Best Agents Section */}
      <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black">
            Best Agents
          </h1>
          <Link
            href="/pages/Besagent"
            className="text-base text-white sm:text-lg bg-green-800 hover:bg-green-600 px-3 py-1 rounded transition"
          >
            View All
          </Link>
        </div>
        <div className="mt-8">
          <AgentsCard limit={4} />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <Test />
      </div>
    </div>
  );
}

export default Page;
