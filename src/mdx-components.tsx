import type { MDXComponents } from 'mdx/types'

import Link from 'next/link'

import EditThisPage from '@/components/app/EditThisPage'
import Pagination from '@/components/app/Pagination'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { cn } from '@/lib/utils'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
      <Tabs className={cn(className, 'w-full')} {...props} />
    ),
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>) => (
      <TabsList
        className={cn(
          className,
          'w-full overflow-x-hidden rounded-b-none m750:h-10 shadow-light rounded-t-base bg-white p-0 dark:bg-secondaryBlack',
        )}
        {...props}
      />
    ),
    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
      <TabsTrigger
        className={cn(
          className,
          'h-full border-0 border-r-2 z-10 m400:text-xs border-r-border rounded-none sm:text-base bg-main data-[state=active]:bg-mainAccent text-text last:border-r-0',
        )}
        {...props}
      />
    ),
    TabsContent: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsContent>) => (
      <TabsContent className="mt-0" {...props} />
    ),
    EditThisPage: ({ ...props }) => <EditThisPage {...props} />,
    Pagination: ({ ...props }) => <Pagination {...props} />,
    Link: ({ ...props }) => <Link {...props} />,
    ...components,
  }
}