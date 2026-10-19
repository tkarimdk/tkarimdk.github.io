import 'reflect-metadata';
import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller('api')
class PortfolioController {
  @Get('health') health() { return { status: 'ok' }; }
  @Get('profile') profile() {
    return { name: 'Tanzimul Karim', github: 'https://github.com/tkarimdk', thesis: { status: 'ongoing', topic: 'Road deterioration prediction', title: null } };
  }
  private cached: { expires: number; data: unknown } | undefined;
  @Get('repositories') async repositories() {
    if (this.cached && this.cached.expires > Date.now()) return this.cached.data;
    try {
      const response = await fetch('https://api.github.com/users/tkarimdk/repos?per_page=100&sort=updated', { headers: { Accept: 'application/vnd.github+json' }, signal: AbortSignal.timeout(6000) });
      if (!response.ok) throw new Error('GitHub unavailable');
      const repos = await response.json() as Array<Record<string, unknown>>;
      const data = { available: true, repositories: repos.filter(r => !r.fork).map(r => ({ name: r.name, url: r.html_url, language: r.language, stars: r.stargazers_count })) };
      this.cached = { expires: Date.now() + 300000, data };
      return data;
    } catch { return { available: false, repositories: [] }; }
  }
}
@Module({ controllers: [PortfolioController] })
class AppModule {}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.WEB_ORIGIN || 'http://localhost:3000' });
  await app.listen(Number(process.env.PORT || 4000), '127.0.0.1');
}
void bootstrap();
