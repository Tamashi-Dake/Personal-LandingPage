import { TSaleGroups } from "@/types/SaleGroups";
import mongoose from "mongoose";

const saleGroupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SaleGroups =
  mongoose.models.SaleGroups ||
  mongoose.model<TSaleGroups>(
    "SaleGroups",
    saleGroupSchema,
    "groups" // 👈 ép mongoose dùng collection tên "groups"
  );

export default SaleGroups;
