'use client'

import { useState } from "react";
import Body from "./Body";

const Products = () => {
  const [tableData, setTableData] = useState([]);
  return (
  <Body _this={{tableData}}/>
  )
}

export default Products