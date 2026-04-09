-- AlterTable
ALTER TABLE `Servicio` ADD COLUMN `activo` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `categoria` VARCHAR(191) NOT NULL DEFAULT 'General',
    ADD COLUMN `predefinido` BOOLEAN NOT NULL DEFAULT false;
