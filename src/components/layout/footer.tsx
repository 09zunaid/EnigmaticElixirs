
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Icons.Logo className="h-8 w-8 text-primary" />
              <span className="font-headline text-3xl font-semibold tracking-wider text-primary">
                Enigmatic Elixirs
              </span>
            </Link>
            <p className="max-w-xs text-muted-foreground">
              Crafting unique, personal fragrances to tell your story through scent.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/create" className="hover:text-accent transition-colors">Create Your Scent</Link></li>
              <li><Link href="/ingredients" className="hover:text-accent transition-colors">Ingredient Library</Link></li>
              <li><Link href="/consultation" className="hover:text-accent transition-colors">Consultations</Link></li>
              <li><Link href="/gift-card" className="hover:text-accent transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-1">
            <h3 className="font-headline text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Receive updates on new ingredients and exclusive offers.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-background" />
              <Button type="submit" variant="default">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Enigmatic Elixirs. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
