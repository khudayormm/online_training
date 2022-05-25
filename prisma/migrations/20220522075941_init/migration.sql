-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER,
    "que_logo" TEXT,
    "question" TEXT NOT NULL,
    "variant_a" VARCHAR(255) NOT NULL,
    "variant_b" VARCHAR(255) NOT NULL,
    "variant_c" VARCHAR(255) NOT NULL,
    "variant_d" VARCHAR(255) NOT NULL,
    "correct_v" VARCHAR(255) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
