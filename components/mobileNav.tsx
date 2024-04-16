"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
   const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px] ">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={"/icons/hamburger.svg"}
            width={36}
            height={36}
            alt="Hamburger"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-dark-1 " >
          <Link href="/ " className="flex items-center gap-1">
            <Image src="/icons/logo.svg" width={32} height={32} alt="Logo" />
            <p className="text-xl text-white font-bold ">Volt Meet</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col overflow-y-auto justify-between">
            <SheetClose asChild >
              <section className="flex flex-col h-full gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathName === link.route 
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 p-4 rounded-lg w-full max-w-60 items-center",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />{" "}
                        <p className="font-semibold">{link.label}</p>{" "}
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
