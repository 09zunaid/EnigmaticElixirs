
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, User, Wand2, BookOpen, Calendar, Gift } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/create', label: 'Create', icon: <Wand2 /> },
  { href: '/ingredients', label: 'Ingredients', icon: <BookOpen /> },
  { href: '/consultation', label: 'Consultation', icon: <Calendar /> },
  { href: '/gift-card', label: 'Gift Card', icon: <Gift /> },
];

export function Header() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={cn(
          'relative rounded-md px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:text-accent-foreground flex items-center gap-2',
          isMobile ? 'w-full text-lg' : 'text-lg'
        )}
        onMouseOver={() => setHoveredPath(item.href)}
        onMouseLeave={() => setHoveredPath(pathname)}
      >
        {item.icon}
        <span className="relative z-10">{item.label}</span>
        {item.href === hoveredPath && (
          <motion.div
            className="absolute bottom-0 left-0 h-full w-full rounded-md bg-accent"
            layoutId="navbar"
            aria-hidden="true"
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        )}
         {item.href === pathname && !hoveredPath.includes(item.href) && (
          <motion.div
            className="absolute bottom-0 left-0 h-full w-full rounded-md bg-accent/50"
            aria-hidden="true"
          />
        )}
      </Link>
    ));

  return (
    <header
      className={'sticky top-4 z-50 mx-auto w-[95%] max-w-7xl transition-all duration-300'}
    >
      <div className="relative flex h-16 items-center justify-between rounded-2xl border border-border/20 bg-background/70 px-4 shadow-lg backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <Link href="/" className="flex items-center gap-2">
          <Icons.Logo className="h-7 w-7 text-primary" />
          <span className="font-headline text-3xl font-semibold text-primary">
            Enigmatic Elixirs
          </span>
        </Link>

        <nav className="hidden items-center gap-2 p-1 md:flex">
          {renderNavLinks()}
        </nav>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className='rounded-full'>
                <User className="h-5 w-5" />
                <span className="sr-only">User Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/login">Login</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/signup">Sign Up</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-6">
                <Link href="/" className="flex items-center gap-2 mb-8">
                  <Icons.Logo className="h-7 w-7 text-primary" />
                  <span className="font-headline text-2xl font-semibold tracking-wider text-primary">
                    Enigmatic Elixirs
                  </span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {renderNavLinks(true)}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
