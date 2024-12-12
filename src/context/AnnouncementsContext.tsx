'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Announcement {
  ID: string;
  Title: string;
  Excerpt: string;
  Date: string;
  Image: string;
  Content: string;
}

interface AnnouncementsContextValue {
  announcements: Announcement[];
  loading: boolean; // Add loading state
  fetchAnnouncements: () => Promise<void>;
}

const AnnouncementsContext = createContext<AnnouncementsContextValue | undefined>(undefined);

export function AnnouncementsProvider({ children }: { children: ReactNode }) {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true); // Track loading state

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzlFCKA483vhKbs663gv_lrlPxPLaTEVZ2sqtZ3OX0lHC2o4xJxGrIGClm9Ki5oDFYmiQ/exec', {
        cache: 'no-store',
      });
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <AnnouncementsContext.Provider value={{ announcements, loading, fetchAnnouncements }}>
      {children}
    </AnnouncementsContext.Provider>
  );
}

export function useAnnouncements() {
  const context = useContext(AnnouncementsContext);
  if (!context) {
    throw new Error('useAnnouncements must be used within an AnnouncementsProvider');
  }
  return context;
}
