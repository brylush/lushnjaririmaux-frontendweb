import { Injectable, NotFoundException } from '@nestjs/common';
import { RECIPES, Recipe } from '../data/mock_data';
import { CreateRecipeRequestDto, RecipeListResponseDto, RecipeResponseDto, UpdateRecipeRequestDto } from './recipe.dto';

@Injectable()
export class RecipeService {
  getAll(): RecipeListResponseDto {
    return { items: RECIPES };
  }

  getById(id: number): RecipeResponseDto {
    const recipe = RECIPES.find((item: Recipe) => item.id === id);

    if (!recipe) {
      throw new NotFoundException('No recipe with this id exists');
    }

    return recipe;
  }

    create(dto: CreateRecipeRequestDto): RecipeResponseDto {
        const newRecipe: Recipe = {
            id: Math.max(0, ...RECIPES.map((item: Recipe) => item.id)) + 1,
            ...dto,
    };
    RECIPES.push(newRecipe);
    return newRecipe;
  }

    updateById(id: number, dto: UpdateRecipeRequestDto): RecipeResponseDto {
        const index = RECIPES.findIndex((item: Recipe) => item.id === id);

    if (index === -1) {
      throw new NotFoundException('No recipe with this id exists');
    }

    RECIPES[index] = { ...RECIPES[index], ...dto };
    return RECIPES[index];
  }

    deleteById(id: number): void {
    const index = RECIPES.findIndex((item: Recipe) => item.id === id);

    if (index === -1) {
      throw new NotFoundException('No recipe with this id exists');
    }

    RECIPES.splice(index, 1);
  }
}

