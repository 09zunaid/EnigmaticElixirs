'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ingredients, Ingredient, NoteType } from '@/lib/ingredients';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Check, Sparkles, Wand2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

const steps = [
  { id: '01', name: 'Top Notes', noteType: 'Top' as NoteType, description: 'The initial, lighter scents that you smell first. They are volatile, lasting from a few minutes to an hour.' },
  { id: '02', name: 'Heart Notes', noteType: 'Heart' as NoteType, description: 'The "heart" of the fragrance, emerging after the top notes fade. They form the main body and last for several hours.' },
  { id: '03', name: 'Base Notes', noteType: 'Base' as NoteType, description: 'The deep, rich aromas that emerge last. They are the foundation, providing depth and longevity to the scent.' },
  { id: '04', name: 'Finalize', noteType: null, description: 'Review your unique blend and give it a name. This is your signature scent, your enigmatic elixir.' },
];

type Selections = {
    top: string[];
    heart: string[];
    base: string[];
};

export default function CreatePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Selections>({ top: [], heart: [], base: [] });
  const [fragranceName, setFragranceName] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const progressValue = ((currentStep + 1) / steps.length) * 100;

  const handleSelect = (noteType: NoteType, ingredientId: string) => {
    const key = noteType.toLowerCase() as keyof Selections;
    setSelections(prev => {
        const currentSelection = prev[key];
        if (currentSelection.includes(ingredientId)) {
            return { ...prev, [key]: currentSelection.filter(id => id !== ingredientId) };
        }
        if (currentSelection.length < 3) {
             return { ...prev, [key]: [...currentSelection, ingredientId] };
        }
        return prev;
    });
  };

  const getSelectedIngredients = () => {
    return [
      ...selections.top.map(id => ingredients.find(i => i.id === id)),
      ...selections.heart.map(id => ingredients.find(i => i.id === id)),
      ...selections.base.map(id => ingredients.find(i => i.id === id)),
    ].filter(Boolean) as Ingredient[];
  };

  if (isComplete) {
    return (
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
          <Sparkles className="h-20 w-20 text-accent mb-6" />
          <h1 className="font-headline text-4xl md:text-5xl">Creation Complete!</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Your formula for <span className="font-bold text-primary">{fragranceName}</span> has been saved. Our perfumers will now begin the masterful work of blending your unique elixir.
          </p>
          <Button onClick={() => { setIsComplete(false); setCurrentStep(0); setSelections({ top: [], heart: [], base: []}); setFragranceName(""); }} className="mt-8">Create Another</Button>
        </div>
      );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        <Progress value={progressValue} className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="font-headline text-3xl">{steps[currentStep].name}</h2>
                        <p className="text-muted-foreground mt-2">{steps[currentStep].description}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="md:col-span-3">
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                    {currentStep < 3 && (
                        <IngredientSelector 
                            noteType={steps[currentStep].noteType!} 
                            selection={selections[steps[currentStep].noteType!.toLowerCase() as keyof Selections]}
                            onSelect={handleSelect}
                        />
                    )}
                    {currentStep === 3 && (
                         <FinalizeStep 
                            selections={selections} 
                            name={fragranceName} 
                            setName={setFragranceName}
                         />
                    )}
                    </motion.div>
                </AnimatePresence>
                <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={() => setCurrentStep(s => s - 1)} disabled={currentStep === 0}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                     <Button 
                        onClick={() => currentStep === 3 ? setIsComplete(true) : setCurrentStep(s => s + 1)} 
                        disabled={currentStep === 3 && (!fragranceName || getSelectedIngredients().length === 0)}
                    >
                        {currentStep === 3 ? 'Complete Creation' : 'Next'}
                        {currentStep < 3 && <ArrowRight className="ml-2 h-4 w-4" />}
                        {currentStep === 3 && <Wand2 className="ml-2 h-4 w-4" />}
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

interface IngredientSelectorProps {
    noteType: NoteType;
    selection: string[];
    onSelect: (noteType: NoteType, ingredientId: string) => void;
}

function IngredientSelector({ noteType, selection, onSelect }: IngredientSelectorProps) {
    const available = ingredients.filter(i => i.noteType.includes(noteType));

    return (
        <div>
             <p className="mb-4 text-muted-foreground">Select up to 3 ingredients for your {noteType.toLowerCase()} notes.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {available.map(ingredient => {
                const img = PlaceHolderImages.find(p => p.id === ingredient.imageId);
                const isSelected = selection.includes(ingredient.id);
                return (
                    <Card key={ingredient.id} 
                        onClick={() => onSelect(noteType, ingredient.id)}
                        className={cn(
                            "cursor-pointer transition-all duration-200 overflow-hidden",
                            isSelected ? "ring-2 ring-accent shadow-lg" : "hover:shadow-md hover:-translate-y-1"
                        )}
                    >
                        <CardContent className="p-0 relative">
                             {isSelected && (
                                <div className="absolute top-2 right-2 z-10 bg-accent rounded-full p-1 text-accent-foreground">
                                    <Check className="h-4 w-4" />
                                </div>
                            )}
                            <div className="aspect-square relative">
                                {img && <Image src={img.imageUrl} alt={ingredient.name} fill className="object-cover" data-ai-hint={img.imageHint} />}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <p className="absolute bottom-2 left-2 text-white font-semibold text-sm">{ingredient.name}</p>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
        </div>
    );
}

function FinalizeStep({selections, name, setName}: {selections: Selections, name: string, setName: (name:string) => void}){
    const allSelections = [
      ...selections.top.map(id => ({...ingredients.find(i => i.id === id), noteCat: 'Top'})),
      ...selections.heart.map(id => ({...ingredients.find(i => i.id === id), noteCat: 'Heart'})),
      ...selections.base.map(id => ({...ingredients.find(i => i.id === id), noteCat: 'Base'})),
    ].filter(item => item.id) as (Ingredient & {noteCat: string})[];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Your Formulation</CardTitle>
                <CardDescription>A unique blend, crafted by you.</CardDescription>
            </CardHeader>
            <CardContent>
                {allSelections.length > 0 ? (
                <>
                <div className="space-y-4 mb-6">
                    {Object.entries(selections).map(([key, value]) => value.length > 0 && (
                        <div key={key}>
                            <h4 className="font-semibold capitalize mb-2">{key} Notes</h4>
                             <div className="flex flex-wrap gap-2">
                                {value.map(id => (
                                    <div key={id} className="bg-secondary px-3 py-1 rounded-full text-sm">
                                        {ingredients.find(i => i.id === id)?.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="fragrance-name" className="text-lg">Name Your Elixir</Label>
                    <Input id="fragrance-name" value={name} onChange={e => setName(e.target.value)} placeholder="e.g., 'Midnight Garden' or 'Coastal Driftwood'" />
                </div>
                </>
                ) : (
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">You haven't selected any ingredients yet.</p>
                        <p className="text-sm text-muted-foreground">Go back to add some notes to your creation.</p>
                    </div>
                )}

            </CardContent>
        </Card>
    )
}
