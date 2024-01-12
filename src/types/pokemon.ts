export type Pokemon = {
  name: string,
  sprites: Record<string, string>,
  types: Record<string, any>[],
}