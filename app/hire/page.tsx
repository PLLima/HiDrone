"use client";

import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { SearchDronesPage } from "./select_drone";
import { SetPath } from "./set_path";

export default function SupplyPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-0 py-2 px-6 w-full max-w-screen-2xl mx-auto">
      <Tabs aria-label="Options">
        <Tab key="drone" title="Drone">
          <SearchDronesPage />
        </Tab>
        <Tab key="route" title="Route">
          <SetPath />
        </Tab>
      </Tabs>
    </section>
  );
}