"use client";
import Admin from "@/api/admin";
import { ExportIcon } from "@/components/icons/accounts/export-icon";
import NTable from "@/components/table";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import moment from "moment";
import { title } from "process";
import React, { useEffect, useState } from "react";
const columns = [
  { name: "SKU ID", uid: "skuId" },
  { name: "Name", uid: "title" },
  { name: "Price", uid: "price" },
  { name: "Status", uid: "status" },
  { name: "Created At", uid: "createdAt" },
];
const Body = ({ _this }: any) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await Admin.getProducts();
    setTableData(res.data);
  };

  const customRenderTable = (row: any, uid: string) => {
    if (uid === "createdAt") {
      return <div>{moment(row[uid]).format("DD-MM-YYYY")}</div>;
    }
    return row[uid];
  };

  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <h3 className="text-xl font-semibold">All Products</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search products"
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <Link underline="hover" href="products/new-product">
            New Product
          </Link>
          <Button color="primary" startContent={<ExportIcon />}>
            Export to CSV
          </Button>
        </div>
      </div>
      <div className="mx-auto w-full">
        <NTable
          columns={columns}
          tableData={tableData}
          renderTable={customRenderTable}
        />
      </div>
    </div>
  );
};

export default Body;
