import { Controller, Get, Param } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeListResponseDto, RecipeResponseDto, CreateRecipeRequestDto } from './recipe.dto';
import { Body, HttpCode, HttpStatus, Post } from '@nestjs/common';

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

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createRecipe(@Body() dto: CreateRecipeRequestDto): RecipeResponseDto {
        return this.recipeService.create(dto);
  }
  
}