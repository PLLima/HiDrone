// src/pages/TransactionProgressPage.jsx

import React from 'react';
import StatusBar, { TransactionStatus } from './statusBar';

// Defina a variável status fora do componente para uso global nesta página
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


/**
 * Debug page to preview the transaction progress bar
 */
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
            <div className="w-full">
                <StatusBar status={status} />
            </div>
        </div>
    );
}
