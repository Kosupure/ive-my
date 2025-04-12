import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(req: Request) {
  const data = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/orders?[groupOrder][title][equals]=${data.groupOrder}`
  );
  const orders = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allPromises = orders.docs.map((order: any) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/trackings`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: order.id,
        status: data.statusId,
      }),
    });
  });
  
  await Promise.all(allPromises);

  return NextResponse.json({ data: "OK" });
}
