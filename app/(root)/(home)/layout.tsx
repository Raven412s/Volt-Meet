import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "⚡VoltMeet⚡",
  description:
    "Generated by create next app, with typescript and tailwind css, Streem.io, Clerk.Auth  for user management and Video React for video chat.",
    icons:"/icons/play.svg" 
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <section className="flex flex-col flex-1 min-h-screen px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 ">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;