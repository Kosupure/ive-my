"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getOrder } from "@/lib/services";
import { formatDateWithSuffix } from "@/lib/utils";

export default function Order() {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    getOrderList();
  }, []);

  async function getOrderList() {
    try {
      const result = await getOrder();
      setOrderList(result.docs);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
      {orderList.length == 0 ? (
        <></>
      ) : (
        orderList.map((e) => (
          <div
            key={e["id"]}
            className="bg-white rounded-xl shadow cursor-pointer"
            onClick={() => {
              window.open(e["formUrl"], "_blank");
            }}
          >
            <Image
              src={`http://localhost:3001` + e["image"]["url"]}
              alt={e["image"]["alt"]}
              width={1000}
              height={100}
              className="rounded-t-xl"
            />
            <div className="px-4 py-3">
              <div className="font-bold text-lg">{e["title"]}</div>
              <div className="flex space-x-2">
                <div className="bg-red-500 rounded-full text-white text-sm w-fit px-2 py-1">
                  {formatDateWithSuffix(e["dueDate"])}
                </div>
                <div className="bg-purple-800 rounded-full text-white text-sm w-fit px-2 py-1">
                  {e["type"]}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
