import { Controller, Get, Param } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeListResponseDto, RecipeResponseDto } from './recipe.dto';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  getAllRecipes(): RecipeListResponseDto {
    return this.recipeService.getAll();
  }

  @Get(':id')
  getRecipeById(@Param('id') id: string): RecipeResponseDto {
    return this.recipeService.getById(Number(id));
  }
}