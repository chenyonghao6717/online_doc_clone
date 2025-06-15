-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "initial_content" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "room_id" TEXT,
    "organization_id" TEXT,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "documents_owner_id_idx" ON "documents"("owner_id");

-- CreateIndex
CREATE INDEX "documents_organization_id_idx" ON "documents"("organization_id");

CREATE INDEX "title_fts_idx" ON "documents" USING GIN (to_tsvector('english', title));
CREATE INDEX "initial_content" ON "documents" USING GIN (to_tsvector('english', content));


