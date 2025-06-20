"use client";

import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { MyDronesPage } from "./my_drones";
import "./orders";
import OrdersHistoryTable from "./orders";

export default function SupplyPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-0 py-2 px-6 w-full max-w-screen-2xl mx-auto">
      <Tabs aria-label="Options" color="primary" >
        <Tab key="drones" title="Drones">
          <MyDronesPage />
        </Tab>
        <Tab key="orders" title="Orders">
          <Card>
            <OrdersHistoryTable></OrdersHistoryTable>
          </Card>
        </Tab>
      </Tabs>
    </section>
  );
}
