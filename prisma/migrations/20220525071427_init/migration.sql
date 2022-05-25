-- CreateTable
CREATE TABLE "MarkAnswer" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "questionId" INTEGER,
    "answer" TEXT,
    "userId" INTEGER,

    CONSTRAINT "MarkAnswer_pkey" PRIMARY KEY ("id")
);
