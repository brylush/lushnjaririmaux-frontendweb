export class CreateRecipeRequestDto {
  name: string;
  description: string;
  servings: number;
  prepTimeMin: number;
}

export class UpdateRecipeRequestDto extends CreateRecipeRequestDto {}

export class RecipeResponseDto extends CreateRecipeRequestDto {
  id: number;
}

export class RecipeListResponseDto {
  items: RecipeResponseDto[];
}