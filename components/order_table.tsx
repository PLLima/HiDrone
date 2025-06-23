import React, { useState } from "react";
import { useRouter } from "next/navigation"
import {
  Table, TableHeader, TableBody, TableRow, TableCell, TableColumn, Chip, Tooltip,
} from '@heroui/react';
import {
  EyeIcon, XIcon, AcceptIcon, ChevronUpIcon, ChevronDownIcon, ChevronRightIcon,
} from '@/components/icons';

const statusColorMap = {
  Pending: 'default',
  Waiting: 'warning',
  'In Flight': 'primary',
  Completed: 'success',
  Rejected: 'danger',
} as const;

const statusTooltipMap = {
  Pending: 'Customer awaiting confirmation.',
  Waiting: 'Package waiting for drone loading.',
  'In Flight': 'Order is on its way.',
  Completed: 'Order successfully completed.',
  Rejected: 'Order rejected by supplier.',
} as const;

type OrderStatus = keyof typeof statusColorMap;

type Order = {
  id: string;
  date: string;
  clientName: string;
  pickupLocation: string;
  deliveryLocation: string;
  droneModel: string;
  status: OrderStatus;
};

const initialOrders: Order[] = Array.from({ length: 20 }).map((_, i) => {
  const statuses: OrderStatus[] = ['Pending', 'Waiting', 'In Flight', 'Completed', 'Rejected'];
  const status = statuses[i % statuses.length];
  return {
    id: String(i + 1),
    date: `2025-06-${(20 - i).toString().padStart(2, '0')}`,
    clientName: `Client ${i + 1}`,
    pickupLocation: `Warehouse ${String.fromCharCode(65 + (i % 5))}`,
    deliveryLocation: `${100 + i} Example St`,
    droneModel: ['DJI Phantom 4', 'Parrot Anafi', 'DJI Mavic Air', 'Autel Evo II'][i % 4],
    status,
  };
});

type OrdersTableProps = {
  viewerRole?: 'client' | 'supplier';
};

const OrdersTable: React.FC<OrdersTableProps> = ({ viewerRole = 'client' }) => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [sortKey, setSortKey] = useState<keyof Order>("date");
  const [ascending, setAscending] = useState<boolean>(false);

  const handleSort = (key: keyof Order) => {
    const isSame = sortKey === key;
    const nextAsc = isSame ? !ascending : true;
    const sorted = [...orders].sort((a, b) => {
      if (a[key] < b[key]) return nextAsc ? -1 : 1;
      if (a[key] > b[key]) return nextAsc ? 1 : -1;
      return 0;
    });
    setSortKey(key);
    setAscending(nextAsc);
    setOrders(sorted);
  };

  const renderSortIcon = (key: keyof Order) => {
    if (sortKey === key) {
      return ascending ? (
        <ChevronUpIcon size={16} />
      ) : (
        <ChevronDownIcon size={16} />
      );
    }
    return <ChevronRightIcon size={13} />;
  };

  const onAccept = (id: string) => alert(`Accepted ${id}`);
  const onReject = (id: string) => alert(`Rejected ${id}`);
  
  const router = useRouter();
  
  const onView = (id: string) => {
    const order = orders.find((o) => o.id === id);
    if (!order) return;

    localStorage.setItem("currentOrder", JSON.stringify(order));
    router.push("../order/" /*+ id*/); //ou outra rota a ser definida 
  };

  const tableLeftPadding = '1rem';
  const tableRightPadding = '3rem';


  const canAccept = (order: Order): boolean => {
    if (order.status === 'Pending') return viewerRole === 'supplier';
    if (order.status === 'Waiting') return true;
    if (order.status === 'In Flight') return viewerRole === 'client';
    return false;
  };

  const canReject = (order: Order) : boolean => {
    return order.status === 'Pending' && viewerRole === 'supplier';
  };

  const getAcceptTooltip = (order: Order): string => {
    switch (order.status) {
      case 'Pending':
        return 'Accept request';
      case 'Waiting':
        return 'Confirm drone received package';
      case 'In Flight':
        return 'Confirm receipt';
      default:
        return '';
    }
  };

  const headerCell = (label: string, key: keyof Order, align?: 'start' | 'center' | 'end') => (
    <TableColumn
      align={align}
      onClick={() => handleSort(key)}
      style={{ cursor: 'pointer', paddingLeft: tableLeftPadding, paddingRight: tableRightPadding }}
    >
      <div className="inline-flex items-center gap-1">
        <span>{label}</span>
        {renderSortIcon(key)}
      </div>
    </TableColumn>
  );

  return (
    <Table aria-label="Orders History" isHeaderSticky>
      <TableHeader>
        {headerCell('Date', 'date')}
        {headerCell('Client', 'clientName')}
        <TableColumn style={{ paddingLeft: tableLeftPadding, paddingRight: tableRightPadding }}>Pickup</TableColumn>
        <TableColumn style={{ paddingLeft: tableLeftPadding, paddingRight: tableRightPadding }}>Delivery</TableColumn>
        <TableColumn style={{ paddingLeft: tableLeftPadding, paddingRight: tableRightPadding }}>Drone Model</TableColumn>
        {headerCell('Status', 'status')}
        <TableColumn style={{ paddingLeft: tableLeftPadding, paddingRight: tableRightPadding }}>Actions</TableColumn>
      </TableHeader>

      <TableBody>
        {orders.map((o) => (
          <TableRow key={o.id}>
            <TableCell>{o.date}</TableCell>
            <TableCell>{o.clientName}</TableCell>
            <TableCell>{o.pickupLocation}</TableCell>
            <TableCell>{o.deliveryLocation}</TableCell>
            <TableCell>{o.droneModel}</TableCell>
            <TableCell>
              <Tooltip content={statusTooltipMap[o.status]}>
                <Chip size="sm" variant="flat" color={statusColorMap[o.status]}>
                  {o.status}
                </Chip>
              </Tooltip>
            </TableCell>

            <TableCell align="right">
              <div className="flex items-center gap-2">
                <Tooltip content="Go to order page">
                  <span className="cursor-pointer" onClick={() => onView(o.id)}>
                    <EyeIcon />
                  </span>
                </Tooltip>

                {canAccept(o) && (
                  <Tooltip content={getAcceptTooltip(o)} color="success">
                    <span className="cursor-pointer text-success" onClick={() => onAccept(o.id)}>
                      <AcceptIcon size={20} />
                    </span>
                  </Tooltip>
                )}

                {canReject(o) && (
                  <Tooltip content="Reject request" color="danger">
                    <span className="cursor-pointer text-danger" onClick={() => onReject(o.id)}>
                      <XIcon size={20} />
                    </span>
                  </Tooltip>
                )}
              </div>
            </TableCell>


          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
