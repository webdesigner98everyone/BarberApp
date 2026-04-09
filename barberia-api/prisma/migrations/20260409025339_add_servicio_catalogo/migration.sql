-- CreateTable
CREATE TABLE `ServicioCatalogo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `duracion_minutos` INTEGER NOT NULL,
    `categoria` VARCHAR(191) NOT NULL DEFAULT 'General',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServicioActivo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barberiaId` INTEGER NOT NULL,
    `catalogoId` INTEGER NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `duracion_minutos` INTEGER NOT NULL,
    `categoria` VARCHAR(191) NOT NULL DEFAULT 'General',
    `activo` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ServicioActivo` ADD CONSTRAINT `ServicioActivo_barberiaId_fkey` FOREIGN KEY (`barberiaId`) REFERENCES `Barberia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicioActivo` ADD CONSTRAINT `ServicioActivo_catalogoId_fkey` FOREIGN KEY (`catalogoId`) REFERENCES `ServicioCatalogo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
