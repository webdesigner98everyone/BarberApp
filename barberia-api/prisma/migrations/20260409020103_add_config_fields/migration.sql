-- AlterTable
ALTER TABLE `Configuracion` ADD COLUMN `dias_descanso` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `duracion_turno` INTEGER NOT NULL DEFAULT 30,
    ADD COLUMN `mensaje_bienvenida` VARCHAR(191) NULL;
