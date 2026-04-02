/*
  Warnings:

  - A unique constraint covering the columns `[barberoId,dia_semana]` on the table `Horario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Horario_barberoId_dia_semana_key` ON `Horario`(`barberoId`, `dia_semana`);
