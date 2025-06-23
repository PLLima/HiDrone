"use client";

import React from "react";
import StatusBar, { TransactionStatus } from "./statusBar";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@heroui/react";
import { Listbox, ListboxItem } from "@heroui/react";
import {
  PinIcon,
  IconWrapper,
  XIcon,
  AcceptIcon,
  PersonIcon,
  DroneIcon,
} from "@/components/icons";

// Simule aqui quem está vendo e o status atual
type ViewerRole = "supplier" | "client";
const viewAs: ViewerRole = "supplier";
const status: TransactionStatus = "Pending";

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

// Lógica de permissão de ações
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


export default function TransactionProgressPage() {
  const { title, description } = getStatusDescription(status);

  // Gerar dinamicamente os botões de ação
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
          <ListboxItem key="route-body">
            <div className="flex items-center gap-3">
              <IconWrapper className="bg-default-100 text-default-600">
                <PinIcon size={60} className="text-default-500" />
              </IconWrapper>
              <span>123 Main St, Springfield</span>
            </div>
          </ListboxItem>
          <ListboxItem key="route-footer">
            <div className="flex items-center gap-3">
              <IconWrapper className="bg-default-100 text-default-600">
                <PinIcon size={60} className="text-default-500" />
              </IconWrapper>
              <span>456 Elm St, Shelbyville</span>
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
          <ListboxItem key="route-body">
            <div className="flex items-center gap-3">
              <IconWrapper className="bg-default-100 text-default-600">
                <PersonIcon size={20} className="text-default-500" />
              </IconWrapper>
              <span>Francisco Cisco</span>
            </div>
          </ListboxItem>
          <ListboxItem key="route-footer">
            <div className="flex items-center gap-3">
              <IconWrapper className="bg-default-100 text-default-600">
                <DroneIcon size={30} className="text-default-500" />
              </IconWrapper>
              <span>DJI Phantom 4</span>
            </div>
          </ListboxItem>
        </Listbox>
      </div>
    </div>
  );
}
