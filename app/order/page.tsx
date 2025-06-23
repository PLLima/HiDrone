"use client";

import React from 'react';
import StatusBar, { TransactionStatus } from './statusBar';
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@heroui/react";
import {Listbox, ListboxItem} from "@heroui/react";
import { PinIcon, IconWrapper, XIcon, AcceptIcon, PersonIcon, DroneIcon } from '@/components/icons';

const status: TransactionStatus = 'Pending';

// Function to return title and description according to the status
function getStatusDescription(status: TransactionStatus): { title: string; description: string } {
    switch (status) {
        case 'Pending':
            return {
                title: 'Order received',
                description: 'Waiting for the supplier to respond to the proposal.',
            };
        case 'Waiting':
            return {
                title: 'Waiting',
                description: 'The drone is on its way to pick up the package.',
            };
        case 'In Flight':
            return {
                title: 'Drone en route',
                description: 'The drone is delivering the package to the destination.',
            };
        case 'Completed':
            return {
                title: 'Completed',
                description: 'The order has been successfully delivered!',
            };
        default:
            return {
                title: '',
                description: '',
            };
    }
}
export default function TransactionProgressPage() {
    const { title, description } = getStatusDescription(status);

    return (
        <div className="p-8 min-h-screen">
            <div className="w-full mb-6">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-default-600">
                    {description}
                </p>
            </div>
            <div className="w-full mb-6">
                <StatusBar status={status} />
            </div>
            {/* Add spacing between the bar and the cards */}
            <div className="h-8" />
            <div className="flex gap-4">
                <Listbox
                        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
                        itemClasses={{
                            base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                        }}>
                    <ListboxItem key="action-header" isDisabled>
                        <span className="text-2xl font-bold block">Accept request?</span>
                    </ListboxItem>
                    <ListboxItem key="route-body">
                        <div className="flex items-center gap-3">
                            <IconWrapper className="bg-success-100 text-success-600">
                                <AcceptIcon size={25} className="text-success-500" />
                            </IconWrapper>
                            <span>Accept</span>
                        </div>
                    </ListboxItem>
                    <ListboxItem key="route-footer">
                        <div className="flex items-center gap-3">
                            <IconWrapper className="bg-danger-100 text-danger-600">
                                <XIcon size={25} className="text-danger-500" />
                            </IconWrapper>
                            <span>Reject</span>
                        </div>
                    </ListboxItem>
                </Listbox>

                <Listbox
                        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
                        itemClasses={{
                            base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                        }}>
                    <ListboxItem key="route-header" isDisabled>
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

                <Listbox
                        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
                        itemClasses={{
                            base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                        }}>
                    <ListboxItem key="hiring-header" isDisabled>
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
