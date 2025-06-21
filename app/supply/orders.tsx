import React, { useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
  Chip,
  Tooltip,
} from '@heroui/react';
import {
  EyeIcon,
  XIcon,
  AcceptIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@/components/icons';

const statusColorMap = {
  Pending: 'default',
  'In Flight': 'primary',
  Completed: 'success',
  Rejected: 'danger',
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

const initialOrders: Order[] = [
  { id: '1', date: '2025-06-19', clientName: 'Alice Smith', pickupLocation: 'Warehouse A', deliveryLocation: '123 Main St', droneModel: 'DJI Phantom 4', status: 'Pending' },
  { id: '2', date: '2025-06-18', clientName: 'Bob Johnson', pickupLocation: 'Warehouse B', deliveryLocation: '456 Oak Ave', droneModel: 'Parrot Anafi', status: 'In Flight' },
  { id: '3', date: '2025-06-17', clientName: 'Carol Lee', pickupLocation: 'Warehouse C', deliveryLocation: '789 Pine Rd', droneModel: 'DJI Mavic Air', status: 'Completed' },
  { id: '4', date: '2025-06-16', clientName: 'David Kim', pickupLocation: 'Warehouse D', deliveryLocation: '321 Maple Ln', droneModel: 'Autel Evo II', status: 'Rejected' },
];

const OrdersHistoryTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [sortKey, setSortKey] = useState<keyof Order>('date');
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
      return ascending ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />;
    }
    return <ChevronRightIcon size={13} />;
  };

  const onAccept = (id: string) => alert(`Accepted ${id}`);
  const onReject = (id: string) => alert(`Rejected ${id}`);
  const onView = (id: string) => alert(`Viewing ${id}`);

  const headerCell = (label: string, key: keyof Order, align?: 'start' | 'center' | 'end') => (
    <TableColumn
      align={align}
      onClick={() => handleSort(key)}
      style={{ cursor: 'pointer' }}
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
        <TableColumn>Pickup</TableColumn>
        <TableColumn>Delivery</TableColumn>
        <TableColumn>Drone Model</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Actions</TableColumn>
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
              <Chip size="sm" variant="flat" color={statusColorMap[o.status]}> {o.status}</Chip>
            </TableCell>
            <TableCell align="right">
              <div className="flex items-center justify-end gap-2">
                <Tooltip content="View">
                  <span className="cursor-pointer" onClick={() => onView(o.id)}>
                    <EyeIcon />
                  </span>
                </Tooltip>
                <Tooltip content="Accept" color="success">
                  <span className="cursor-pointer text-success" onClick={() => onAccept(o.id)}>
                    <AcceptIcon size={20} />
                  </span>
                </Tooltip>
                <Tooltip content="Reject" color="danger">
                  <span className="cursor-pointer text-danger" onClick={() => onReject(o.id)}>
                    <XIcon size={20} />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrdersHistoryTable;
