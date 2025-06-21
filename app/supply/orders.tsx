import React from 'react';
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
import { EyeIcon, XIcon, AcceptIcon} from '@/components/icons';

const statusColorMap = {
  Pending: 'default',
  'In Flight': 'primary',
  Completed: 'success',
  Rejected: 'danger',
} as const;

type OrderStatus = keyof typeof statusColorMap;

type Order = {
  id: string;
  clientName: string;
  pickupLocation: string;
  deliveryLocation: string;
  droneModel: string;
  status: OrderStatus;
};

const orders: Order[] = [
  { id: '1', clientName: 'Alice Smith', pickupLocation: 'Warehouse A', deliveryLocation: '123 Main St', droneModel: 'DJI Phantom 4', status: 'Pending' },
  { id: '2', clientName: 'Bob Johnson', pickupLocation: 'Warehouse B', deliveryLocation: '456 Oak Ave', droneModel: 'Parrot Anafi', status: 'In Flight' },
  { id: '3', clientName: 'Carol Lee', pickupLocation: 'Warehouse C', deliveryLocation: '789 Pine Rd', droneModel: 'DJI Mavic Air', status: 'Completed' },
  { id: '4', clientName: 'David Kim', pickupLocation: 'Warehouse D', deliveryLocation: '321 Maple Ln', droneModel: 'Autel Evo II', status: 'Rejected' },
];

const columns = [
  { key: 'clientName', label: 'Client' },
  { key: 'pickupLocation', label: 'Pickup' },
  { key: 'deliveryLocation', label: 'Delivery' },
  { key: 'droneModel', label: 'Drone Model' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions', align: 'right' as const },
];

const OrdersHistoryTable: React.FC = () => {
  const onAccept = (orderId: string) => alert(`Accepted order ${orderId}`);
  const onReject = (orderId: string) => alert(`Rejected order ${orderId}`);
  const onView = (orderId: string) => alert(`Viewing order ${orderId}`);

  return (
    <Table aria-label="Orders History Table">
      <TableHeader>
        {columns.map((col) => (
          <TableColumn key={col.key}>
            {col.label}
          </TableColumn>
        ))}
      </TableHeader>

      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.clientName}</TableCell>
            <TableCell>{order.pickupLocation}</TableCell>
            <TableCell>{order.deliveryLocation}</TableCell>
            <TableCell>{order.droneModel}</TableCell>

            {/* Status with Chip */}
            <TableCell>
              <Chip size="sm" variant="flat" color={statusColorMap[order.status]}> 
                {order.status}
              </Chip>
            </TableCell>

            {/* Actions as icons */}
            <TableCell align="right">
              <div className="flex items-center justify-end gap-2">
                <Tooltip content="View">
                  <span className="cursor-pointer active:opacity-50" onClick={() => onView(order.id)}>
                    <EyeIcon />
                  </span>
                </Tooltip>
                <Tooltip content="Accept" color='success'>
                  <span className="cursor-pointer text-success active:opacity-50" onClick={() => onAccept(order.id)}>
                    <AcceptIcon size={20}/>
                  </span>
                </Tooltip>
                <Tooltip content="Reject" color="danger">
                  <span className="cursor-pointer text-danger active:opacity-50" onClick={() => onReject(order.id)}>
                    <XIcon size={20}/>
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
