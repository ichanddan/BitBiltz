"use client";
import FullScreenSwiper from "@/components/full-screen-swiper";
import { Supermart } from "@/components/supermart";
import { Cards } from "@/components/Cards";
import { useEffect, useState } from "react";
import Public from "@/api/public";
import clsx from "clsx";
export default function Home() {
  // API CALL
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await Public.GetProducts();
    setTableData(res.data.data.data);
  };

  // set API Data into a State

  return (
    <section className="">
      <div className=" mb-5">
        <Supermart />
      </div>
      <div className="border-3 mb-5">
        <FullScreenSwiper />
      </div>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
        {tableData &&
          tableData.slice(0,8).map((item: any, i:any) => {
            return (
              <Cards key={i}
                title={item.title}
                price={item.price}
                sellPrice={item.sellPrice}
                image={item.images}
                productId={item.id}
              />
            );
          })}
      </div>
    </section>
  );
}
