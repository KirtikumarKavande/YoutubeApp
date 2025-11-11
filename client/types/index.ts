// Type definitions for the YouTube clone application

export interface Video {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
}

export interface DetailedVideo extends Video {
  subscribers: string;
  likes: string;
  uploadDate: string;
  description: string;
}

export interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  href?: string;
}

export interface SidebarProps {
  isOpen: boolean;
}

export interface NavbarProps {
  onMenuClick: () => void;
}

export interface VideoCardProps {
  video: Video;
}

export interface VideoPlayerProps {
  video: DetailedVideo;
}
