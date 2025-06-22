"use client";

import React from 'react';
import StatusBar, { TransactionStatus } from './statusBar';
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@heroui/react";

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
                <Card>
                    <CardHeader className="flex gap-3">
                      <div className="flex flex-col">
                        <p className="text-md">HeroUI</p>
                        <p className="text-small text-default-500">heroui.com</p>
                      </div>
                    </CardHeader>
                    <Divider />
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                    <Divider />
                    <CardFooter>
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader className="flex gap-3">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold">Action</span>
                      </div>
                    </CardHeader>
                    <Divider />
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                    <Divider />
                    <CardFooter>
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader className="flex gap-3">
                      <div className="flex flex-col">
                        <p className="text-md">HeroUI</p>
                        <p className="text-small text-default-500">heroui.com</p>
                      </div>
                    </CardHeader>
                    <Divider />
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                    <Divider />
                    <CardFooter>
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
