"use client";
import { TSaleGroups } from "@/types/SaleGroups";
import Image from "next/image";
import Link from "next/link";

const SaleGroup = ({ item }: { item: TSaleGroups }) => {
  return (
    <Link
      href={item.link}
      key={item.title}
      className="relative group block group hover:transform hover:translate-0.5 transition-all "
      target="_blank"
    >
      {/* Shadow - đặt trước để nằm dưới Target */}
      <div className="opacity-0 group-hover:opacity-100 absolute inset-x-0 bottom-0 w-full h-full bg-blue-900 rounded-3xl transform translate-y-2 max-xs:translate-x-1 xs:translate-x-3 shadow-inner-custom transition-all"></div>

      {/* Target */}
      <div className="flex items-center bg-card text-blue-500 gap-4 px-4 rounded-3xl py-2 md:py-3 relative z-10  border-2 border-blue-900">
        <div className="size-8 relative rounded-full border-2 border-blue-500 flex items-center justify-center shrink-0">
          <Image
            src={`/${item.icon}.svg`}
            alt="Provider image"
            width={20}
            height={20}
            className="text-sky-500"
          />
        </div>
        <p className="main-content-bold uppercase break-words">{item.title}</p>
      </div>
    </Link>
  );
};

export default SaleGroup;
