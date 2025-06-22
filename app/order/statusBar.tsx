"use client";

import React from 'react';
import { Progress, Tooltip } from '@heroui/react';
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

const steps: TransactionStatus[] = ['Pending', 'Waiting', 'In Flight', 'Completed'];
const tooltips = [
  'Order created',
  'Order accepted',
  'Package picked up',
  'Package arrived',
];

export const statusBar: React.FC<TransactionProgressProps> = ({ status }) => {
  const currentIndex = steps.indexOf(status);

  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => {
        const isPast = index < currentIndex;
        const isCurrent = index === currentIndex;
        const filled = isPast || isCurrent;
        const colorClass = filled ? 'text-primary-600' : 'text-neutral-400';

        const iconProps = { size: 25, className: colorClass };
        let icon = null;
        if (index === 0) icon = <ExclamationIcon {...iconProps} />;
        else if (index === 1) icon = <CheckIcon {...iconProps} />;
        else if (index === 2) icon = <UpDoubleArrowIcon {...iconProps} />;
        else icon = <DownDoubleArrowIcon {...iconProps} />;

        return (
          <React.Fragment key={step}>
            {/* Circle with Tooltip */}
            <Tooltip content={tooltips[index]}>
              {icon}
            </Tooltip>
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
