export interface WorkItem {
  id: number;
  title: string;
  url?: string;
  imageUrl: string;
  description?: string;
  isComingSoon?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
  description?: string;
  iconName: 'Facebook' | 'Twitter' | 'BookOpen' | 'Globe'; // Mapping to Lucide icons
}