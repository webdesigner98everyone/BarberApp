-- DropForeignKey
ALTER TABLE `Reserva` DROP FOREIGN KEY `Reserva_servicioId_fkey`;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_servicioId_fkey` FOREIGN KEY (`servicioId`) REFERENCES `ServicioActivo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
