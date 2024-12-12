'use client';

import { useAnnouncements } from '@/context/AnnouncementsContext';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AnnouncementDetailsPage() {
  const { id } = useParams();
  const { announcements, loading } = useAnnouncements();

  const announcement = announcements.find((item) => String(item.ID) === id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#262933]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary-500 border-solid"></div>
      </div>
    );
  }

  if (!announcement) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#262933]">
        <p className="text-gray-700 dark:text-gray-300">Announcement not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#262933] mt-[10svh] px-4 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Image */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-black dark:border-gray-600 bg-gray-300 dark:bg-gray-700">
          <img
            src={announcement.Image}
            alt={announcement.Title}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-black dark:text-white mb-6">
          {announcement.Title}
        </h1>

        {/* Date */}
        <p className="text-center text-gray-700 dark:text-gray-400 mb-8">
          📅 {new Date(announcement.Date).toDateString()}
        </p>

        {/* Markdown Content */}
        <div className="markdown-content text-lg leading-relaxed p-6 rounded-md bg-white text-black dark:bg-[#262933] dark:text-white">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {announcement.Content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
