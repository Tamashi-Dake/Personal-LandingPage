import { TSaleGroups } from "@/types/SaleGroups";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import SaleGroup from "./components/SaleGroup";

export default async function Home() {
  const shopDetail = {
    logo: "https://res.cloudinary.com/da7gx7iae/image/upload/v1749961018/avt_simbacgiang.vn_d2nr8x.jpg",
    title: "SIM BẮC GIANG.VN",
    location: "Đại Hóa - Quang Trung - Bắc Giang",
    phone: process.env.PHONE_NUMBER,
    note: "TỔNG KHO SIM LỚN NHẤT BẮC GIANG",
  };

  const getSaleGroups = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/saleGroups`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch saleGroups");
      }

      return res.json();
    } catch (error) {
      console.log("Error loading saleGroups: ", error);
    }
  };

  const saleGroups = await getSaleGroups();

  return (
    <main className="flex flex-col gap-4 text-white ">
      <div className="mx-auto mt-8 flex flex-col items-center max-sm:max-w-80 sm:w-[500px] max-md:px-4">
        <div className="size-28 md:size-40 relative rounded-full border-2 border-white">
          <Image
            alt="Logo"
            src={shopDetail.logo}
            fill
            // unoptimized
            className="object-cover rounded-full"
          />
          <CheckCircle2 className="fill-sky-500 absolute right-0 max-md:bottom-2 md:bottom-5" />
        </div>
        <div className="text-center">
          <h3 className=" text-center">{shopDetail.title}</h3>
          <div className="flex flex-col gap-2 main-co">
            <p>Địa chỉ: {shopDetail.location}</p>
            <p>Hotline / Zalo: {shopDetail.phone}</p>
            <p>{shopDetail.note}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 max-sm:max-w-80 mx-auto sm:w-[500px]">
        {saleGroups?.map((item: TSaleGroups) => (
          <SaleGroup item={item} key={item.title} />
        ))}
      </div>
    </main>
  );
}
