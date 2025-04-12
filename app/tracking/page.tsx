"use client";

import Image from "next/image";
import Step1 from "../../public/status_icon/step-1.png";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/Combobox";
import { Label } from "@/components/ui/label";
import { getGroupOrders, getTracking } from "@/lib/services";
import { TrackingStatus } from "@/lib/interface";

export default function Tracking() {
  const [groupOrders, setGroupOrders] = useState([]);

  const [orderId, setOrderId] = useState("");
  const [groupOrderSelected, setGroupOrderSelected] = useState("");

  const [trackingDetail, setTrackingDetail] = useState<
    TrackingStatus[] | undefined
  >(undefined);

  async function getTrackingDetail() {
    try {
      const result = await getTracking(orderId, groupOrderSelected);
      setTrackingDetail(result.status);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getGroupOrder();
  }, []);

  async function getGroupOrder() {
    try {
      const result = await getGroupOrders();
      setGroupOrders(result.docs);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="my-4">
      <div className="bg-white rounded-xl shadow w-fit p-4 mx-auto flex flex-col">
        <Label className="mb-2">Group Order (GO)</Label>
        <Combobox
          itemList={groupOrders}
          placeholder="Album/Merchandise Name"
          emptyMessage="No group order selected"
          onSelect={(value) => setGroupOrderSelected(value)}
        />
        <Label htmlFor="orderId" className="mt-4 mb-2">
          Tracking ID
        </Label>
        <Input
          id="orderId"
          placeholder="Please enter your tracking ID from email"
          onChangeCapture={(e) => setOrderId(e.currentTarget.value)}
        />
        <button
          className="bg-[#d9d9d9] w-fit self-end mt-2 px-4 py-1 text-sm font-medium rounded-full active:bg-black active:text-white"
          onClick={() => getTrackingDetail()}
        >
          Submit
        </button>
      </div>
      {trackingDetail == undefined ? (
        <></>
      ) : (
        <>
          <Image src={Step1} alt="" className="w-96 md:w-1/3 mx-auto mb-4 mt-8" />
          {trackingDetail.map((item, index) => {
            return (
              <div
                className={`${
                  index == 0 ? "bg-white" : "bg-[#c9c9c9] text-white"
                } rounded-xl shadow w-96 md:w-1/3 mx-auto py-6 px-4 text-center mb-3`}
                key={`status_${index}`}
              >
                <p className="font-black text-xl">{item.title}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
