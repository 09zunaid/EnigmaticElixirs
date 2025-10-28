import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Aria Montgomery',
    role: 'Master Perfumer',
    bio: 'With a nose for nuance and a passion for storytelling, Aria has been the creative force behind our most beloved scents.',
    avatar: 'https://picsum.photos/seed/101/200/200',
    avatarFallback: 'AM',
  },
  {
    name: 'Leo Fitz',
    role: 'Lead Alchemist',
    bio: 'Leo bridges the gap between ancient art and modern science, ensuring every elixir is a masterpiece of stability and sillage.',
    avatar: 'https://picsum.photos/seed/102/200/200',
    avatarFallback: 'LF',
  },
  {
    name: 'Jemma Simmons',
    role: 'Head of Operations',
    bio: 'Jemma orchestrates the journey of our ingredients from source to bottle, ensuring quality and sustainability at every step.',
    avatar: 'https://picsum.photos/seed/103/200/200',
    avatarFallback: 'JS',
  },
];

const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'ingredient-woody');

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[50vh] w-full flex items-center justify-center text-center text-white">
        {aboutHeroImage && (
            <Image
                src={aboutHeroImage.imageUrl}
                alt="Artisanal perfume ingredients"
                fill
                className="object-cover"
                data-ai-hint={aboutHeroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 p-4">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">The Art of Scent</h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-background/90">
            We believe fragrance is a form of art, an expression of identity, and a vessel for memory.
            </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl text-primary">Our Philosophy</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Enigmatic Elixirs was born from a desire to return to the roots of perfumery—a craft built on passion, quality ingredients, and personal stories. In a world of mass-produced fragrances, we offer an alternative: a scent that is uniquely, unequivocally you. We combine age-old techniques with modern sensibilities to help you create not just a perfume, but a personal elixir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl">Meet the Artisans</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The heart of our studio lies in our team's collective passion and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center">
                    <Avatar className="h-32 w-32 mb-4 ring-4 ring-accent">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-2xl">{member.name}</h3>
                    <p className="text-accent font-semibold mb-2">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}