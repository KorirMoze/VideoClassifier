import { describe, it, expect } from 'vitest';
import { getEducationalScore } from '../src/index';

describe('getEducationalScore', () => {
  it('scores highly educational tutorial playlists above 0.8', () => {
    const playlist = {
      title: 'JavaScript Tutorial for Beginners - Complete Course 2024',
      description: 'Learn JavaScript from scratch with this comprehensive tutorial series. Covers fundamentals, DOM manipulation, async programming, and modern ES6+ features. Includes hands-on projects and exercises.',
      videoCount: 35,
      avgDuration: 900
    };

    const score = getEducationalScore(playlist);
    expect(score).toBeGreaterThan(0.8);
  });

  it('scores moderately educational content between 0.5 and 0.8', () => {
    const playlist = {
      title: 'React Crash Course',
      description: 'Complete guide for beginners in React.',
      videoCount: 12,
      avgDuration: 700
    };

    const score = getEducationalScore(playlist);
    expect(score).toBeGreaterThan(0.5);
    expect(score).toBeLessThan(0.8);
  });

  it('scores non-educational content low', () => {
    const playlist = {
      title: 'Funny Cat Videos',
      description: 'Hilarious cat compilation',
      videoCount: 5,
      avgDuration: 180
    };

    const score = getEducationalScore(playlist);
    expect(score).toBeLessThan(0.3);
  });

  it('recognizes tutorial keywords and structures', () => {
    const playlist = {
      title: 'Python Programming Tutorial - Step by Step Guide',
      description: 'Learn Python programming with this step-by-step tutorial series. Perfect for beginners.',
      videoCount: 20,
      avgDuration: 600
    };

    const score = getEducationalScore(playlist);
    expect(score).toBeGreaterThan(0.7);
  });
});