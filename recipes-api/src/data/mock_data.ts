export interface Recipe {
  id: number;
  name: string;
  description: string;
  servings: number;
  prepTimeMinutes: number;
}

export const RECIPES: Recipe[] = [
  { id: 1, name: 'Spaghetti bolognese', description: 'Klassieker met gehakt', servings: 4, prepTimeMinutes: 45 },
  { id: 2, name: 'Groentecurry', description: 'Met kokosmelk en rijst', servings: 2, prepTimeMinutes: 30 },
  { id: 3, name: 'Pannenkoeken', description: 'Basisbeslag', servings: 6, prepTimeMinutes: 20 },
];