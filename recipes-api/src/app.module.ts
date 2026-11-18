import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [RecipeModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
