-- CreateTable
CREATE TABLE "clients" (
    "credits" DECIMAL(65,30) NOT NULL,
    "email" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "credits" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "pickupLocation" JSONB NOT NULL,
    "deliveryLocation" JSONB NOT NULL,
    "droneInstanceId" INTEGER,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drone_instances" (
    "id" SERIAL NOT NULL,
    "region" JSONB NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,

    CONSTRAINT "drone_instances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drone_models" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,
    "size" TEXT NOT NULL,
    "composition" TEXT NOT NULL,
    "image" TEXT,
    "capacityVolume" DECIMAL(65,30) NOT NULL,
    "capacityWeight" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "drone_models_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_cnpj_key" ON "suppliers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_email_key" ON "suppliers"("email");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_droneInstanceId_fkey" FOREIGN KEY ("droneInstanceId") REFERENCES "drone_instances"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drone_instances" ADD CONSTRAINT "drone_instances_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "drone_models"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drone_instances" ADD CONSTRAINT "drone_instances_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
