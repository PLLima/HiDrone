// src/pages/TransactionProgressPage.jsx

import React from 'react';
import StatusBar, { TransactionStatus } from './statusBar';

/**
 * Debug page to preview the transaction progress bar
 */
export default function TransactionProgressPage() {
    const status: TransactionStatus = 'Waiting'; // Change this to test different statuses

    return (
        <div className="p-8 min-h-screen">
            <div className="w-full">
                <StatusBar status={status} />
            </div>
        </div>
    );
}
