'use client';

import Link from 'next/link';
import { AnnouncementCard } from '@/components/app/AnnouncementCard';
import { useAnnouncements } from '@/context/AnnouncementsContext';

export default function AnnouncementsPage() {
  const { announcements } = useAnnouncements();

  return (
    <div className="min-h-screen bg-white dark:bg-[#262933]">
      <div className="container mt-[10svh] mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-8">
          Announcements
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {announcements.map((announcement) => (
            <Link
              key={announcement.ID}
              href={`/announcements/${announcement.ID}`}
              className="block"
            >
              <AnnouncementCard announcement={announcement} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
