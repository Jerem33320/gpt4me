'use client';

import Chat from '@/components/Chat';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { useEffect } from 'react';

const ChatPage = () => {
  const queryClient = new QueryClient();
  useEffect(() => {
    if (typeof window !== 'undefined') window.localStorage.setItem('theme', "forest");
  }, []);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Chat />
    </HydrationBoundary>
  );
};
export default ChatPage;