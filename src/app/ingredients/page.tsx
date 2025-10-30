
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ingredients, Ingredient, ScentProfile, NoteType } from '@/lib/ingredients';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const scentProfiles: ScentProfile[] = ['Citrus', 'Floral', 'Woody', 'Spicy', 'Fresh', 'Oriental', 'Fruity', 'Gourmand'];

export default function IngredientsPage() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
  const [activeFilter, setActiveFilter] = useState<ScentProfile | 'All'>('All');

  const filteredIngredients = activeFilter === 'All' 
    ? ingredients 
    : ingredients.filter(i => i.scentProfile.includes(activeFilter));

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl">Our Ingredient Library</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our curated collection of the world's finest natural and synthetic essences, the building blocks of your signature scent.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-12">
        <Button
            variant={activeFilter === 'All' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('All')}
        >
            All
        </Button>
        {scentProfiles.map(profile => (
            <Button
                key={profile}
                variant={activeFilter === profile ? 'default' : 'outline'}
                onClick={() => setActiveFilter(profile)}
            >
                {profile}
            </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {filteredIngredients.map(ingredient => {
          const img = PlaceHolderImages.find(p => p.id === ingredient.imageId);
          return (
            <div
              key={ingredient.id}
            >
              <Card
                onClick={() => setSelectedIngredient(ingredient)}
                className="cursor-pointer group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    {img && (
                      <Image
                        src={img.imageUrl}
                        alt={ingredient.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={img.imageHint}
                      />
                    )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                     <h3 className="font-headline text-lg text-white absolute bottom-3 left-3">{ingredient.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <Dialog open={!!selectedIngredient} onOpenChange={(open) => !open && setSelectedIngredient(null)}>
        <DialogContent className="sm:max-w-[600px] grid-cols-1 md:grid-cols-2 gap-6 p-0">
            {selectedIngredient && (
                <>
                <div className="relative aspect-square md:aspect-auto">
                    {(() => {
                        const img = PlaceHolderImages.find(p => p.id === selectedIngredient.imageId);
                        return img ? (
                            <Image
                                src={img.imageUrl}
                                alt={selectedIngredient.name}
                                fill
                                className="object-cover rounded-l-lg"
                                data-ai-hint={img.imageHint}
                            />
                        ) : null;
                    })()}
                </div>
                <div className="p-6 flex flex-col">
                    <DialogHeader>
                        <DialogTitle className="font-headline text-3xl mb-2">{selectedIngredient.name}</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-wrap gap-2 my-4">
                        {selectedIngredient.noteType.map(nt => <Badge key={nt} variant="secondary">{nt} Note</Badge>)}
                        {selectedIngredient.scentProfile.map(sp => <Badge key={sp}>{sp}</Badge>)}
                    </div>
                    <DialogDescription className="text-base text-muted-foreground flex-grow">
                        {selectedIngredient.description}
                    </DialogDescription>
                </div>
                </>
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
