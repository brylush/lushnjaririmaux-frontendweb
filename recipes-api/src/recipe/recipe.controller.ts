import { Controller, Get, Param } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeListResponseDto, RecipeResponseDto, CreateRecipeRequestDto, UpdateRecipeRequestDto } from './recipe.dto';
import { Body, HttpCode, HttpStatus, Post, Put, Delete } from '@nestjs/common';

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

    @Put(':id')
    updateRecipe(
        @Param('id') id: string,
        @Body() dto: UpdateRecipeRequestDto,
  ): RecipeResponseDto {
        return this.recipeService.updateById(Number(id), dto);
  }

    @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteRecipe(@Param('id') id: string): void {
    this.recipeService.deleteById(Number(id));
  }
  
}