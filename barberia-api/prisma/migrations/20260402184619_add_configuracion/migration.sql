-- CreateTable
CREATE TABLE `Configuracion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_barberia` VARCHAR(191) NOT NULL DEFAULT 'The Barber',
    `moneda` VARCHAR(191) NOT NULL DEFAULT 'COP',
    `simbolo` VARCHAR(191) NOT NULL DEFAULT '$',
    `separador_miles` VARCHAR(191) NOT NULL DEFAULT '.',
    `separador_decimal` VARCHAR(191) NOT NULL DEFAULT ',',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
