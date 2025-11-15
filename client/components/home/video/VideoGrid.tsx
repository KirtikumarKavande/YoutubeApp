"use client";

import VideoCard from "./VideoCard";

// Sample video data
const sampleVideos = [
  {
    id: "1",
    thumbnail: "https://picsum.photos/seed/video1/640/360",
    title: "Building a Full Stack Application with Next.js 14 - Complete Tutorial",
    channel: "Code Master",
    channelAvatar: "https://picsum.photos/seed/avatar1/100/100",
    views: "1.2M",
    timestamp: "2 days ago",
    duration: "15:23",
  },
  {
    id: "2",
    thumbnail: "https://picsum.photos/seed/video2/640/360",
    title: "React 18 New Features Explained - Concurrent Rendering & Suspense",
    channel: "Tech Guru",
    channelAvatar: "https://picsum.photos/seed/avatar2/100/100",
    views: "856K",
    timestamp: "1 week ago",
    duration: "22:45",
  },
  {
    id: "3",
    thumbnail: "https://picsum.photos/seed/video3/640/360",
    title: "CSS Grid vs Flexbox: When to Use Each",
    channel: "Design Pro",
    channelAvatar: "https://picsum.photos/seed/avatar3/100/100",
    views: "543K",
    timestamp: "3 days ago",
    duration: "18:12",
  },
  {
    id: "4",
    thumbnail: "https://picsum.photos/seed/video4/640/360",
    title: "TypeScript Advanced Types and Generics Tutorial",
    channel: "Dev Academy",
    channelAvatar: "https://picsum.photos/seed/avatar4/100/100",
    views: "2.1M",
    timestamp: "5 days ago",
    duration: "31:08",
  },
  {
    id: "5",
    thumbnail: "https://picsum.photos/seed/video5/640/360",
    title: "Understanding Database Design Patterns for Scalable Applications",
    channel: "System Design",
    channelAvatar: "https://picsum.photos/seed/avatar5/100/100",
    views: "678K",
    timestamp: "4 days ago",
    duration: "25:56",
  },
  {
    id: "6",
    thumbnail: "https://picsum.photos/seed/video6/640/360",
    title: "JavaScript ES2024 New Features You Need to Know",
    channel: "JS Weekly",
    channelAvatar: "https://picsum.photos/seed/avatar6/100/100",
    views: "421K",
    timestamp: "1 day ago",
    duration: "12:34",
  },
  {
    id: "7",
    thumbnail: "https://picsum.photos/seed/video7/640/360",
    title: "Docker and Kubernetes for Beginners - DevOps Tutorial",
    channel: "Cloud Master",
    channelAvatar: "https://picsum.photos/seed/avatar7/100/100",
    views: "1.5M",
    timestamp: "1 week ago",
    duration: "42:15",
  },
  {
    id: "8",
    thumbnail: "https://picsum.photos/seed/video8/640/360",
    title: "Building RESTful APIs with Node.js and Express",
    channel: "Backend Dev",
    channelAvatar: "https://picsum.photos/seed/avatar8/100/100",
    views: "923K",
    timestamp: "6 days ago",
    duration: "28:47",
  },
  {
    id: "9",
    thumbnail: "https://picsum.photos/seed/video9/640/360",
    title: "Modern UI/UX Design Principles for 2024",
    channel: "Design Studio",
    channelAvatar: "https://picsum.photos/seed/avatar9/100/100",
    views: "734K",
    timestamp: "3 days ago",
    duration: "19:23",
  },
  {
    id: "10",
    thumbnail: "https://picsum.photos/seed/video10/640/360",
    title: "Git and GitHub Complete Guide - From Basics to Advanced",
    channel: "Code School",
    channelAvatar: "https://picsum.photos/seed/avatar10/100/100",
    views: "1.8M",
    timestamp: "2 weeks ago",
    duration: "36:52",
  },
  {
    id: "11",
    thumbnail: "https://picsum.photos/seed/video11/640/360",
    title: "Machine Learning Basics: Introduction to Neural Networks",
    channel: "AI Academy",
    channelAvatar: "https://picsum.photos/seed/avatar11/100/100",
    views: "612K",
    timestamp: "5 days ago",
    duration: "44:18",
  },
  {
    id: "12",
    thumbnail: "https://picsum.photos/seed/video12/640/360",
    title: "Web Performance Optimization Techniques",
    channel: "Performance Pro",
    channelAvatar: "https://picsum.photos/seed/avatar12/100/100",
    views: "489K",
    timestamp: "1 week ago",
    duration: "21:39",
  },
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
      {sampleVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
