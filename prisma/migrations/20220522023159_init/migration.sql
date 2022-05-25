-- CreateTable
CREATE TABLE "Science" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "count_test" INTEGER NOT NULL DEFAULT 0,
    "followers" INTEGER NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Science_pkey" PRIMARY KEY ("id")
);
