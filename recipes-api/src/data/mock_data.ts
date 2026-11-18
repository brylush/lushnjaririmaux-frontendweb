export interface Recipe {
  id: number;
  name: string;
  description: string;
  servings: number;
  prepTimeMin: number;
}

export const RECIPES: Recipe[] = [
  { id: 1, name: 'Spaghetti bolognese', description: 'Klassieker met gehakt', servings: 4, prepTimeMin: 45 },
  { id: 2, name: 'Groentecurry', description: 'Met kokosmelk en rijst', servings: 2, prepTimeMin: 30 },
  { id: 3, name: 'Pannenkoeken', description: 'Basisbeslag', servings: 6, prepTimeMin: 20 },
];