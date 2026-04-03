/*
  Warnings:

  - A unique constraint covering the columns `[barberiaId]` on the table `Configuracion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `barberiaId` to the `Barbero` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barberiaId` to the `Configuracion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barberiaId` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barberiaId` to the `Reserva` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barberiaId` to the `Servicio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `barbero` ADD COLUMN `barberiaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `configuracion` ADD COLUMN `barberiaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `horario` ADD COLUMN `barberiaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `reserva` ADD COLUMN `barberiaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `servicio` ADD COLUMN `barberiaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `barberiaId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Barberia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Barberia_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Configuracion_barberiaId_key` ON `Configuracion`(`barberiaId`);

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_barberiaId_fkey` FOREIGN KEY (`barberiaId`) REFERENCES `Barberia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Barbero` ADD CONSTRAINT `Barbero_barberiaId_fkey` FOREIGN KEY (`barberiaId`) REFERENCES `Barberia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Servicio` ADD CONSTRAINT `Servicio_barberiaId_fkey` FOREIGN KEY (`barberiaId`) REFERENCES `Barberia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_barberiaId_fkey` FOREIGN KEY (`barberiaId`) REFERENCES `Barberia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Horario` ADD CONSTRAINT `Horario_barberiaId_fkey` FOREIGN KEY (`barberiaId`) REFERENCES `Barberia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Configuracion` ADD CONSTRAINT `Configuracion_barberiaId_fkey` FOREIGN KEY (`barberiaId`) REFERENCES `Barberia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
