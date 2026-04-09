-- AlterTable
ALTER TABLE `Usuario` ADD COLUMN `fecha_nacimiento` DATETIME(3) NULL,
    ADD COLUMN `foto_url` VARCHAR(191) NULL,
    ADD COLUMN `telefono` VARCHAR(191) NULL;
