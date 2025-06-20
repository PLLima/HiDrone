import React from 'react';
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableColumn,
    Button,
    Badge,
} from '@heroui/react';

const statusColors = {
    Pending: 'default',
    'In Flight': 'primary',
    Completed: 'success',
    Rejected: 'danger',
} as const;

const orders = [
    {
        id: '1',
        clientName: 'Alice Smith',
        pickupLocation: 'Warehouse A',
        deliveryLocation: '123 Main St',
        droneModel: 'DJI Phantom 4',
        status: 'Pending',
    },
    {
        id: '2',
        clientName: 'Bob Johnson',
        pickupLocation: 'Warehouse B',
        deliveryLocation: '456 Oak Ave',
        droneModel: 'Parrot Anafi',
        status: 'In Flight',
    },
    {
        id: '3',
        clientName: 'Carol Lee',
        pickupLocation: 'Warehouse C',
        deliveryLocation: '789 Pine Rd',
        droneModel: 'DJI Mavic Air',
        status: 'Completed',
    },
    {
        id: '4',
        clientName: 'David Kim',
        pickupLocation: 'Warehouse D',
        deliveryLocation: '321 Maple Ln',
        droneModel: 'Autel Evo II',
        status: 'Rejected',
    },
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
    const onAccept = (orderId: string) => {
        alert(`Accepted order ${orderId}`);
    };

    const onReject = (orderId: string) => {
        alert(`Rejected order ${orderId}`);
    };

    const onView = (orderId: string) => {
        alert(`Viewing order ${orderId}`);
    };

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
                        <TableCell>
                            <Badge color={statusColors[order.status as keyof typeof statusColors]}>
                                {order.status}
                            </Badge>
                        </TableCell>
                        <TableCell align="right">
                            {order.status === 'Pending' && (
                                <>
                                    <Button size="sm" onPress={() => onAccept(order.id)}>
                                        Accept
                                    </Button>{' '}
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        onPress={() => onReject(order.id)}
                                    >
                                        Reject
                                    </Button>{' '}
                                </>
                            )}
                            <Button
                                size="sm"
                                onPress={() => onView(order.id)}
                            >
                                View
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default OrdersHistoryTable;
