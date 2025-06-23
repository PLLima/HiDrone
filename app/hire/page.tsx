"use client";

import { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { SearchDronesPage } from "./select_drone";
import { SetPath } from "./set_path";
import Payment from "./payment";
import PaymentMethod from "./payment_method"; 

export default function SupplyPage() {
  const [selectedTab, setSelectedTab] = useState("drone");
  const [selectedDroneId, setSelectedDroneId] = useState<number | null>(null);
  const [distanceCost, setDistanceCost] = useState<number>(0);

  return (
    <section className="flex flex-col items-center justify-center gap-0 py-2 px-6 w-full max-w-screen-2xl mx-auto">
      <Tabs
        aria-label="Options"
        color="primary"
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(String(key))}
      >
        <Tab key="drone" title="Drone">
          <SearchDronesPage onDroneSelect={(id) => setSelectedDroneId(id)} />
        </Tab>

        <Tab key="route" title="Route">
          <SetPath
            goToPaymentMethod={() => setSelectedTab("paymentMethod")}
            selectedDroneId={selectedDroneId}
            setDistanceCost={setDistanceCost}
          />
        </Tab>

        <Tab key="paymentMethod" title="Payment Method">
           <PaymentMethod 
		    selectedDroneId={selectedDroneId}
			distanceCost={distanceCost}
			goToPayment={() => setSelectedTab("payment")}
		   />
        </Tab>

        <Tab key="payment" title="Payment">
          <Payment droneId={selectedDroneId} distanceCost={distanceCost} />
        </Tab>
      </Tabs>
    </section>
  );
}
