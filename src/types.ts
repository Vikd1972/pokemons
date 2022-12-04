export type PokemonType = {
  abilities: AbilityType[];
  base_experience: number;
  forms: SpeciesType[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  species: SpeciesType;
  sprites: SpritesType;
  stats: StatType[];
  weight: number;
};

export type AbilityType = {
  ability: SpeciesType;
  is_hidden: boolean;
  slot: number;
};

export type SpeciesType = {
  name: string;
  url: string;
};
export type SpritesType = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: OtherType;
};

export type HomeType = {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

export type OtherType = {
  dream_world: DreamWorldType;
  'official-artwork': OfficialArtworkType;
};

export type DreamWorldType = {
  front_default: string;
  front_female: null;
};

export type OfficialArtworkType = {
  front_default: string;
};

export type StatType = {
  base_stat: number;
  effort: number;
  stat: SpeciesType;
};

export type PaginationType = {
  count: number;
  next: string;
  previous: string;
  results: SpeciesType[];
};
