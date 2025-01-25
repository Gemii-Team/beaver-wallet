-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cat_email_key" ON "Cat"("email");
