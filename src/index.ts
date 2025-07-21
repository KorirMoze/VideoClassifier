export interface Playlist {
  title: string;
  description?: string;
  videoCount: number;
  avgDuration: number; // in seconds
}

export function getEducationalScore(playlist: Playlist): number {
  const educationalKeywords = [
    'tutorial', 'course', 'learn', 'guide', 'lesson',
    'programming', 'coding', 'development', 'training',
    'bootcamp', 'crash course', 'how to'
  ];

  const title = playlist.title.toLowerCase();
  const description = (playlist.description || '').toLowerCase();

  const matchCount = educationalKeywords.filter(k =>
    title.includes(k) || description.includes(k)
  ).length;

  const keywordScore = matchCount / educationalKeywords.length;
  const videoCountScore = Math.min(playlist.videoCount / 10, 1);
  const durationScore = Math.min(playlist.avgDuration / 600, 1);

  const finalScore = (keywordScore * 0.5) + (videoCountScore * 0.3) + (durationScore * 0.2);
  return Number(finalScore.toFixed(2));
}
