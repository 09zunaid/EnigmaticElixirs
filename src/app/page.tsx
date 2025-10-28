
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ScentProfileTool } from '@/components/scent-profile-tool';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Beaker, Bot, Feather, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-perfume');
const featuredIngredients = [
  PlaceHolderImages.find((img) => img.id === 'ingredient-citrus'),
  PlaceHolderImages.find((img) => img.id === 'ingredient-floral'),
  PlaceHolderImages.find((img) => img.id === 'ingredient-woody'),
  PlaceHolderImages.find((img) => img.id === 'ingredient-spicy'),
].filter(Boolean) as (typeof PlaceHolderImages)[number][];

const howItWorksSteps = [
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: 'Describe Your Scent',
    description: 'Use our Scent Profile Tool to describe your ideal fragrance or personality, and let our AI provide initial inspiration.',
  },
  {
    icon: <Beaker className="h-10 w-10 text-accent" />,
    title: 'Craft Your Elixir',
    description: 'Dive into our interactive creator to select your top, heart, and base notes from our library of exquisite ingredients.',
  },
  {
    icon: <Feather className="h-10 w-10 text-accent" />,
    title: 'Personalize & Finalize',
    description: 'Give your unique creation a name and choose a bottle. Your personalized scent is then masterfully blended by us.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center space-y-6 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Your Essence, Bottled
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl text-lg md:text-xl text-white/90">
            Discover the art of personal perfumery. A journey to a fragrance that is an extension of you.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/create">
                Begin Your Creation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/ingredients">Explore Ingredients</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section id="scent-profile" className="py-20 md:py-32 bg-background">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Sparkles className="mx-auto h-12 w-12 text-accent" />
            <h2 className="font-headline text-3xl md:text-5xl mt-4">Find Your Fragrance Formula</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Don't know where to start? Describe your desired mood, a cherished memory, or your personality, and let our AI suggest a bespoke formula for you.
            </p>
          </div>
          <ScentProfileTool />
        </motion.div>
      </section>

      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             variants={containerVariants}
            className="text-center mb-12">
            <motion.h2 variants={itemVariants} className="font-headline text-3xl md:text-5xl">How It Works</motion.h2>
            <motion.p variants={itemVariants} className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Three simple steps to your personalized elixir.
            </motion.p>
          </motion.div>
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 md:gap-12">
            {howItWorksSteps.map((step, index) => (
              <motion.div variants={itemVariants} key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-background mb-6 shadow-md">
                  {step.icon}
                </div>
                <h3 className="font-headline text-2xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             variants={containerVariants}
            className="text-center mb-12">
            <motion.h2 variants={itemVariants} className="font-headline text-3xl md:text-5xl">Featured Ingredients</motion.h2>
            <motion.p variants={itemVariants} className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A glimpse into our curated library of the world's finest essences.
            </motion.p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {featuredIngredients.map((ingredient) => (
              <motion.div variants={itemVariants} key={ingredient.id}>
                <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="aspect-square relative">
                      <Image
                        src={ingredient.imageUrl}
                        alt={ingredient.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={ingredient.imageHint}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
           <div className="text-center mt-12">
            <Button asChild size="lg" variant="link" className="text-accent text-lg">
              <Link href="/ingredients">
                Discover All Ingredients <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
