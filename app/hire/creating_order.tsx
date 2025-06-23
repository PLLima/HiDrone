"use client";
import { Listbox, ListboxItem } from "@heroui/react";
import { PinIcon, IconWrapper } from "@/components/icons";
import { Order } from "@/types/common";

export const RouteItems = ({ order }: { order?: Order }) => (
  <Listbox
    className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
    itemClasses={{
      base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
    }}
  >
    <ListboxItem key="route-header">
      <span className="text-2xl font-bold block">Route</span>
    </ListboxItem>
    <ListboxItem key="pickup-location">
      <div className="flex items-center gap-3">
        <IconWrapper className="bg-default-100 text-default-600">
          <PinIcon size={60} className="text-default-500" />
        </IconWrapper>
        <span>{order?.pickupLocation ?? "Pickup Address"}</span>
      </div>
    </ListboxItem>
    <ListboxItem key="delivery-location">
      <div className="flex items-center gap-3">
        <IconWrapper className="bg-default-100 text-default-600">
          <PinIcon size={60} className="text-default-500" />
        </IconWrapper>
        <span>{order?.deliveryLocation ?? "Delivery Address"}</span>
      </div>
    </ListboxItem>
  </Listbox>
);