
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
  { href: '/create', label: 'Create', icon: <Wand2 className="h-5 w-5" /> },
  { href: '/ingredients', label: 'Ingredients', icon: <BookOpen className="h-5 w-5" /> },
  { href: '/consultation', label: 'Consultation', icon: <Calendar className="h-5 w-5" /> },
  { href: '/gift-card', label: 'Gift Card', icon: <Gift className="h-5 w-5" /> },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={cn(
          'relative flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
          {
            'bg-accent text-accent-foreground': pathname === item.href,
          },
          isMobile ? 'w-full text-lg' : ''
        )}
      >
        <span>{item.icon}</span>
        <span>{item.label}</span>
      </Link>
    ));

  return (
    <header
      className={'sticky top-4 z-50 mx-auto w-[95%] max-w-7xl transition-all duration-300'}
    >
      <div className="relative flex h-20 items-center justify-between rounded-2xl border border-border/20 bg-background/80 px-6 shadow-lg backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2">
          <Icons.Logo className="h-7 w-7 text-primary" />
          <span className="font-headline text-3xl font-semibold text-primary">
            Enigmatic Elixirs
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/20 bg-background/50 p-2 md:flex">
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
