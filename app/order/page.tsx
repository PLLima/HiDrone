"use client";

import React, { useEffect, useState } from "react";
import StatusBar, { TransactionStatus } from "./statusBar";
import { Listbox, ListboxItem } from "@heroui/react";
import {
  PinIcon,
  IconWrapper,
  XIcon,
  AcceptIcon,
  PersonIcon,
  DroneIcon,
} from "@/components/icons";

type ViewerRole = "supplier" | "client";

type OrderData = {
  id: string;
  clientName: string;
  pickupLocation: string;
  deliveryLocation: string;
  droneModel: string;
  status: TransactionStatus;
};

export default function TransactionProgressPage() {
  const viewAs: ViewerRole = "supplier";

  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("currentOrder");
    if (stored) {
      try {
        setOrder(JSON.parse(stored));
      } catch (e) {
        console.error("Invalid order in localStorage", e);
      }
    }
  }, []);

  const status: TransactionStatus = order?.status ?? "Pending";

  // Texto conforme status
  function getStatusDescription(status: TransactionStatus): {
    title: string;
    description: string;
  } {
    switch (status) {
      case "Pending":
        return {
          title: "Order received",
          description: "Waiting for the supplier to respond to the proposal.",
        };
      case "Waiting":
        return {
          title: "Waiting",
          description: "The drone is on its way to pick up the package.",
        };
      case "In Flight":
        return {
          title: "Drone en route",
          description: "The drone is delivering the package to the destination.",
        };
      case "Completed":
        return {
          title: "Completed",
          description: "The order has been successfully delivered!",
        };
      case "Rejected":
        return {
          title: "Rejected",
          description: "The order has been canceled!",
        };
      default:
        return {
          title: "",
          description: "",
        };
    }
  }

  function canAccept(status: TransactionStatus, viewAs: ViewerRole): boolean {
    if (status === "Pending") return viewAs === "supplier";
    if (status === "Waiting") return true;
    if (status === "In Flight") return viewAs === "client";
    return false;
  }

  function canReject(status: TransactionStatus, viewAs: ViewerRole): boolean {
    return status === "Pending" && viewAs === "supplier";
  }

  function getAcceptLabel(status: TransactionStatus, viewAs: ViewerRole): string {
    if (status === "Pending") return "Accept request";
    if (status === "Waiting") return "Confirm drone received package";
    if (status === "In Flight" && viewAs === "client") return "Confirm receipt";
    return "Confirm";
  }

  const { title, description } = getStatusDescription(status);

  const actionItems: React.ReactNode[] = [];

  if (canAccept(status, viewAs)) {
    actionItems.push(
      <ListboxItem key="accept">
        <div className="flex items-center gap-3">
          <IconWrapper className="bg-success-100 text-success-600">
            <AcceptIcon size={25} className="text-success-500" />
          </IconWrapper>
          <span>{getAcceptLabel(status, viewAs)}</span>
        </div>
      </ListboxItem>
    );
  }

  if (canReject(status, viewAs)) {
    actionItems.push(
      <ListboxItem key="reject">
        <div className="flex items-center gap-3">
          <IconWrapper className="bg-danger-100 text-danger-600">
            <XIcon size={25} className="text-danger-500" />
          </IconWrapper>
          <span>Reject request</span>
        </div>
      </ListboxItem>
    );
  }

  return (
    <div className="p-8 min-h-screen">
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-default-600">{description}</p>
      </div>

      <div className="w-full mb-6">
        <StatusBar status={status} />
      </div>

      <div className="h-8" />

      <div className="flex gap-5">
        {/* ACTION BOX */}
        {actionItems.length > 0 && (
          <Listbox
            className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
            itemClasses={{
              base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
            }}
          >
            <ListboxItem key="action-header">
              <span className="text-2xl font-bold block">Actions</span>
            </ListboxItem>
            <>{actionItems}</>
          </Listbox>
        )}

        {/* ROUTE BOX */}
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

        {/* HIRING BOX */}
        <Listbox
          className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
          itemClasses={{
            base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
          }}
        >
          <ListboxItem key="hiring-header">
            <span className="text-2xl font-bold block">Hiring</span>
          </ListboxItem>
          <ListboxItem key="client">
            <div className="flex items-center gap-3">
              <IconWrapper className="bg-default-100 text-default-600">
                <PersonIcon size={20} className="text-default-500" />
              </IconWrapper>
              <span>{order?.clientName ?? "Client Name"}</span>
            </div>
          </ListboxItem>
          <ListboxItem key="drone">
            <div className="flex items-center gap-3">
              <IconWrapper className="bg-default-100 text-default-600">
                <DroneIcon size={30} className="text-default-500" />
              </IconWrapper>
              <span>{order?.droneModel ?? "Drone Model"}</span>
            </div>
          </ListboxItem>
        </Listbox>
      </div>
    </div>
  );
}
