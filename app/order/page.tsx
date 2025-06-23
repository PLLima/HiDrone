"use client";

import React from 'react';
import StatusBar, { TransactionStatus } from './statusBar';
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@heroui/react";
import {Listbox, ListboxItem} from "@heroui/react";

const status: TransactionStatus = 'In Flight';

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
                    <ListboxItem key="route-header" isDisabled>
                        <span className="text-2xl font-bold block">Route</span>
                    </ListboxItem>
                    <ListboxItem key="route-body">
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </ListboxItem>
                    <ListboxItem key="route-footer">
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </ListboxItem>
                </Listbox>

                <Listbox
                        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
                        itemClasses={{
                            base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                        }}>
                    <ListboxItem key="action-header" isDisabled>
                        <span className="text-2xl font-bold block">Action</span>
                    </ListboxItem>
                    <ListboxItem key="action-body">
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </ListboxItem>
                    <ListboxItem key="action-footer">
                        <p>Make beautiful websites regardless of your design experience.</p>
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
                    <ListboxItem key="hiring-body">
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </ListboxItem>
                    <ListboxItem key="hiring-footer">
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </ListboxItem>
                </Listbox>
            </div>
        </div>
    );
}
