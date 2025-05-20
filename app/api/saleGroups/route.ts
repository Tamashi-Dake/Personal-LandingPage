import connectMongoDB from "@/lib/mongoose";
import SaleGroups from "@/model/SaleGroup";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { title, icon } = await request.json();
  await connectMongoDB();
  await SaleGroups.create({ title, icon });
  return NextResponse.json({ message: "SaleGroups Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  try {
    const saleGroups = await SaleGroups.find({});
    return NextResponse.json(saleGroups);
  } catch (error: any) {
    NextResponse.json({ error: error.message });
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await SaleGroups.findByIdAndDelete(id);
  return NextResponse.json({ message: "SaleGroups deleted" }, { status: 200 });
}
