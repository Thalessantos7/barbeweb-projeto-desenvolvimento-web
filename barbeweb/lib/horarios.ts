export const horariosDisponiveis = ["8:00", "9:00", "10:00", "11:00"] as const;

export type HorarioDisponivel = (typeof horariosDisponiveis)[number];

export function isHorarioDisponivel(
  horario: string | string[] | undefined,
): horario is HorarioDisponivel {
  return (
    typeof horario === "string" &&
    horariosDisponiveis.some((horarioDisponivel) => horarioDisponivel === horario)
  );
}
