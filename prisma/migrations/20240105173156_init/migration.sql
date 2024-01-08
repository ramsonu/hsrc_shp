-- CreateTable
CREATE TABLE "Province" (
    "id" SERIAL NOT NULL,
    "province_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cities" (
    "id" SERIAL NOT NULL,
    "city_name" TEXT NOT NULL,
    "provinceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suburbs" (
    "id" SERIAL NOT NULL,
    "suburb_name" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Suburbs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "municipality" (
    "id" SERIAL NOT NULL,
    "municipality_name" TEXT NOT NULL,
    "suburbId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "municipality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cities_provinceId_key" ON "Cities"("provinceId");

-- CreateIndex
CREATE UNIQUE INDEX "Suburbs_cityId_key" ON "Suburbs"("cityId");

-- CreateIndex
CREATE UNIQUE INDEX "municipality_suburbId_key" ON "municipality"("suburbId");

-- AddForeignKey
ALTER TABLE "Cities" ADD CONSTRAINT "Cities_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suburbs" ADD CONSTRAINT "Suburbs_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "municipality" ADD CONSTRAINT "municipality_suburbId_fkey" FOREIGN KEY ("suburbId") REFERENCES "Suburbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
