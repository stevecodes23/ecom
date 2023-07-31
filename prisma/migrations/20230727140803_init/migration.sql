-- AlterTable
ALTER TABLE "attribute_group" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "attributes" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ALTER COLUMN "updated_at" DROP NOT NULL;
