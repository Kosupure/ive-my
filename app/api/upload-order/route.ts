import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export const runtime = 'edge';

export async function POST(req: Request) {
  const formData = await req.formData();

  const file = formData.get("file") as File;
  const buffer = Buffer.from(await file.arrayBuffer());
  const workbookInstance = XLSX.read(buffer);
  const sheetName = workbookInstance.SheetNames[0];
  const sheet = workbookInstance.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet, {
    header: [
      "Full Name",
      "Address",
      "Phone No",
      "Email",
      "Item Ordered",
      "Payment Evidence URL",
    ],
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allPromises = jsonData.slice(1).map((item: any) => {
    const data = {
      fullName: item["Full Name"],
      address: item["Address"],
      phoneNo: item["Phone No"],
      email: item["Email"],
      itemOrdered: item["Item Ordered"]
        ? item["Item Ordered"]
            .toString()
            .split("\n")
            .map((itemStr: string) => {
              const match = itemStr.match(/^(.+?)\s*x\s*(\d+)$/);
              if (!match) return { item: itemStr.trim(), quantity: 1 };
              return {
                item: match[1].trim(),
                quantity: parseInt(match[2], 10),
              };
            })
        : [item["Item Ordered"]],
      paymentEvidenceUrl: item["Payment Evidence URL"],
      groupOrder: formData.get("groupOrderId") as string,
    };

    console.log("data", data);

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });

  await Promise.all(allPromises);

  return NextResponse.json({ data: "OK" });
}
