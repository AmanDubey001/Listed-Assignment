import Card from "@/components/Card";
import LineChart from "@/components/LineChart";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";
import Image from "next/image";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import PieChart from "@/components/PieChart";
import MeetingCards from "@/components/MeetingCards";

const dashboard = () => {
  const CardDetails = [
    {
      id: 1,
      heading: "Total Revenues",
      numbers: "$2,129,430",
      image: "/images/totalRevenue-icon.svg",
      color: "bg-[#DDEFE0]",
    },
    {
      id: 2,
      heading: "Total Transactions",
      numbers: "1,520",
      image: "/images/totalTransactions-icon.svg",
      color: "bg-[#F4ECDD]",
    },
    {
      id: 3,
      heading: "Total Likes",
      numbers: "9,721",
      image: "/images/totalLikes-icon.svg",
      color: "bg-[#EFDADA]",
    },
    {
      id: 4,
      heading: "Total Users",
      numbers: "892",
      image: "/images/totalUsers-icon.svg",
      color: "bg-[#DEE0EF]",
    },
  ];

  const MeetingCardDetails = [
    {
      id: 1,
      heading: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      location: "at Sunset Road, Kuta, Bali",
      border: "border-[#9BDD7C]",
    },
    {
      id: 2,
      heading: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      location: "at Central Jakarta ",
      border: "border-[#6972C3]",
    },
  ];
  return (
    <div className="bg-[#f5f5f5] w-full p-4 flex flex-row md:p-6 lg:p-8">
      <Navbar />
      <Sidebar />
      <div className="w-full mt-14  md:mt-0 md:ml-[20%] md:px-4 lg:px-8">
        <div className="flex flex-row items-center  justify-between">
          <h1 className="text-2xl text-black font-bold">Dashboard</h1>
          <div className="flex">
            <div className="relative">
              <div className="absolute left-36 top-3  pointer-events-none">
                <Image
                  src="/images/search-icon.svg"
                  alt="search-icon"
                  width={14}
                  height={14}
                />
              </div>
              <input
                type="text"
                className="max-w-[150px] mx-4 py-2 px-4 text-sm rounded-[10px] placeholder-[#B0B0B0]"
                placeholder="Search..."
                required
              />
            </div>
            <button className="mx-2 md:mx-5">
              <Image src="/images/bell-icon.svg" width={20} height={20} />
            </button>

            <button className="mx-2 md:mx-5">
              <Image src="/images/admin-icon.svg" width={40} height={40} />
            </button>
          </div>
        </div>
        <div className="my-8 grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-4">
          {CardDetails.map(({ heading, color, numbers, image }) => {
            return (
              <Card
                heading={heading}
                color={color}
                image={image}
                numbers={numbers}
              />
            );
          })}
        </div>

        <div className="my-10 bg-white p-8 rounded-xl">
          <div className="flex flex-col items-center mb-2">
            <h3 className="font-bold text-lg mb-2">Activites</h3>
            <div className="flex items-center">
              <p className="text-sm text-[#858585] mr-2">May - June 2021</p>
              <img src="/images/arrowDown-icon.svg" alt="ArrowDown-Icon" />
            </div>
          </div>
          <LineChart />
        </div>

        <div className="my-5 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl">
            <div className="flex flex-row items-center justify-between mb-2">
              <h3 className="font-bold text-lg mb-2">Top Products</h3>
              <div className="flex items-center mx-auto">
                <p className="text-sm text-[#858585] mr-2">May - June 2021</p>
                <img src="/images/arrowDown-icon.svg" alt="ArrowDown-Icon" />
              </div>
            </div>
            <PieChart />
          </div>

          <div className="bg-white p-8 rounded-xl">
            <div className="flex flex-row justify-between items-center mb-2">
              <h3 className="font-bold text-lg mb-2">Today's Schedule</h3>
              <div className="flex items-center">
                <p className="text-sm text-[#858585] mr-2">See All &gt; </p>
              </div>
            </div>
            {MeetingCardDetails.map(({ heading, border, time, location }) => {
              return (
                <MeetingCards
                  heading={heading}
                  border={border}
                  time={time}
                  location={location}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
