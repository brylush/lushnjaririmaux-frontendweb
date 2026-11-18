import { Injectable, NotFoundException } from '@nestjs/common';
import { RECIPES, Recipe } from '../data/mock_data';
import { CreateRecipeRequestDto, RecipeListResponseDto, RecipeResponseDto } from './recipe.dto';

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
}

