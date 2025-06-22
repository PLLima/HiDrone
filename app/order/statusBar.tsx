"use client";

import React from 'react';
import { Progress } from '@heroui/react';
import {
  ExclamationIcon,
  UpDoubleArrowIcon,
  DownDoubleArrowIcon,
  CheckIcon,
} from '@/components/icons';

export type TransactionStatus = 'Pending' | 'Waiting' | 'In Flight' | 'Completed';

export interface TransactionProgressProps {
  status: TransactionStatus;
}

// Define the ordered steps for the transaction
const steps: TransactionStatus[] = ['Pending', 'Waiting', 'In Flight', 'Completed'];

export const statusBar: React.FC<TransactionProgressProps> = ({ status }) => {
  const currentIndex = steps.indexOf(status);

  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => {
        const isPast = index < currentIndex;
        const isCurrent = index === currentIndex;
        const filled = isPast || isCurrent;
        const colorClass = filled ? 'text-primary-600' : 'text-neutral-400';

        return (
          <React.Fragment key={step}>
            {/* Circle */}
            {(() => {
            const iconProps = { size: 25, className: colorClass };
            if (index === 0) return <ExclamationIcon {...iconProps} />;
            if (index === 1) return <UpDoubleArrowIcon {...iconProps} />;
            if (index === 2) return <DownDoubleArrowIcon {...iconProps} />;
            return <CheckIcon {...iconProps} />;
          })()}

            {/* Render bar only if not the last circle */}
            {index < steps.length - 1 && (
              <Progress
                value={isPast ? 100 : isCurrent ? 50 : 0}
                isIndeterminate={isCurrent}
                className="flex-1 mx-1"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default statusBar;
