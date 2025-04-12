"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getEvent } from "@/lib/services";
import { formatDateWithSuffix, formatTime } from "@/lib/utils";

export default function Event() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    getEventList();
  }, []);

  async function getEventList() {
    try {
      const result = await getEvent();
      setEventList(result.docs);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container md:mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
      {eventList.length == 0 ? (
        <></>
      ) : (
        eventList.map((e) => (
          <div
            key={e["id"]}
            className="bg-white rounded-xl shadow cursor-pointer"
            onClick={() => {
              window.open(e["twitterUrl"], "_blank");
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
              <div className="font-bold text-lg">{e["name"]}</div>
              <div>{e["venue"]}</div>
              <div>
                {formatDateWithSuffix(e["date"])} | {formatTime(e["startTime"])}{" "}
                - {formatTime(e["endTime"])}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
