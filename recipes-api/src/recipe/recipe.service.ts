import { Injectable, NotFoundException } from '@nestjs/common';
import { RECIPES, Recipe } from '../data/mock_data';
import { RecipeListResponseDto, RecipeResponseDto } from './recipe.dto';

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
}