interface Announcement {
    ID: string;
    Image: string; // Ensure this property exists
    Title: string; // Ensure this property exists
    Excerpt: string; // Ensure this property exists
    Date: string; // Ensure this property exists
  }
  
  interface AnnouncementCardProps {
    announcement: Announcement;
  }
  'use client';

export function AnnouncementCard({ announcement }: { announcement: any }) {
  return (
    <div className="flex cursor-pointer items-center p-4 bg-[#feea63] dark:bg-[#212121] border-2 border-black dark:border-gray-700 rounded-lg shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#feea63] transition-transform hover:translate-x-1 hover:translate-y-1">
      <div className="w-16 h-16 rounded-lg bg-gray-300 flex-shrink-0 mr-4 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#555]">
        <img
          src={announcement.Image}
          alt={announcement.Title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg text-black dark:text-[#feea63]">
          {announcement.Title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {announcement.Excerpt}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex items-center">
          📅 {announcement.Date}
        </p>
      </div>
    </div>
  );
}

