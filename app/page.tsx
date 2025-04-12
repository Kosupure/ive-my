"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import NumberTag from "@/components/NumberTag";
import TitleWithDivider from "@/components/TitleWithDivider";
import VerticalDivider from "@/components/VerticalDivider";
import { useEffect, useState } from "react";
import { getHome } from "@/lib/services";
import Image from "next/image";

export default function Home() {
  const [banners, setBanners] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [eventCount, setEventCounts] = useState(0);

  useEffect(() => {
    getHomeBannerHighlights();
  }, []);

  async function getHomeBannerHighlights() {
    try {
      const result = await getHome();
      setHighlights(result["latestEvents"]);
      setBanners(result["banner"]);
      setEventCounts(result["eventCount"]);
    } catch (e) {
      console.log(e);
    }
  }

  function getYearsSinceDebut() {
    const startDate = new Date('2021-12-01');
    const today = new Date();
    const yearDiff = today.getFullYear() - startDate.getFullYear();
    const monthDiff = today.getMonth() - startDate.getMonth();
    const dayDiff = today.getDate() - startDate.getDate();
    
    // Adjust year difference if we haven't reached the anniversary date this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      return yearDiff - 1;
    }
    return yearDiff;
  }

  return (
    <div className="container mx-auto">
      {banners.length == 0 ? (
        <></>
      ) : (
        <Carousel
          id="home-banner"
          className="h-[70vh] py-6"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {banners.map((e) => (
              <CarouselItem key={e["id"]}>
                <Image
                  src={`http://localhost:3001/` + e["image"]["url"]}
                  alt={e["image"]["alt"]}
                  className="rounded-xl h-[70vh] w-full object-center object-cover shadow"
                  width={1000}
                  height={100}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:block hidden" />
          <CarouselNext className="md:block hidden" />
        </Carousel>
      )}
      <div
        id="home-about-us"
        className="grid grid-rows-2 md:grid-cols-2 gap-4 items-center pb-8 pt-16"
      >
        <div className="flex flex-col space-y-2">
          <TitleWithDivider title="About Us" />
          <div>
            We’re a group of DIVE from across Malaysia, united to support IVE
            through birthday and anniversary events, as well as activities
            during their concerts in Malaysia.
          </div>
        </div>
        <div className="flex flex-row space-x-4 justify-end items-center">
          <NumberTag amount={eventCount} tagName="EVENTS" />
          <VerticalDivider heightClass="h-8" />
          <NumberTag
            amount={10000}
            amountPrefix="RM"
            amountSuffix="+"
            tagName="SPENT"
          />
          <VerticalDivider heightClass="h-8" />
          <NumberTag amount={getYearsSinceDebut()} amountSuffix="yrs" tagName="SUPPORTING" />
        </div>
      </div>
      <div id="home-highlights" className="py-8">
        <TitleWithDivider title="Highlights" alignEnd={true} />
        {highlights.length == 0 ? (
          <></>
        ) : (
          <Carousel className="pt-4" opts={{
            active: false
          }}>
            <CarouselContent>
              {highlights.map((e) => (
                <CarouselItem className="md:basis-1/3" key={e["id"]}>
                  <Image
                    src={`http://localhost:3001/` + e["image"]["url"]}
                    alt={e["image"]["alt"]}
                    className="rounded-xl h-[70vh] w-full object-center object-cover shadow"
                    width={1000}
                    height={100}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </div>
  );
}
