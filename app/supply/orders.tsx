import React, { useState } from "react";
import {
  Table, TableHeader, TableBody, TableRow, TableCell, TableColumn, Chip, Tooltip,
} from '@heroui/react';
import {
  EyeIcon, XIcon, AcceptIcon, ChevronUpIcon, ChevronDownIcon, ChevronRightIcon,
} from '@/components/icons';
import OrdersTable from '@/components/order_table';

export default function OrdersPage() {
  return (
    <OrdersTable viewerRole="supplier"/>
  );
}