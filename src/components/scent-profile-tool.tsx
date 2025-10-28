'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateFragranceFormulations, GenerateFragranceFormulationsOutput } from '@/ai/flows/generate-fragrance-formulations';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Wand2, AlertTriangle, FlaskConical } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  description: z.string().min(20, {
    message: 'Please describe your desired scent, personality, or a memory in at least 20 characters.',
  }).max(500, {
    message: 'Description must be 500 characters or less.',
  }),
});

export function ScentProfileTool() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateFragranceFormulationsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const response = await generateFragranceFormulations(values);
      setResult(response);
    } catch (e) {
      console.error(e);
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: 'Failed to generate formulations. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-2 border-accent/20 shadow-xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">AI Perfumer's Apprentice</CardTitle>
              <CardDescription>e.g., "A walk in a pine forest after the rain" or "Confident, warm, and a little mysterious".</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your essence..."
                        className="resize-none min-h-[120px] bg-background text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                {loading ? (
                  <>
                    <Skeleton className="h-5 w-5 mr-2 animate-spin rounded-full" />
                    Conjuring...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Generate Formulations
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {loading && (
        <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Skeleton className="h-32 rounded-lg" />
              <Skeleton className="h-32 rounded-lg" />
              <Skeleton className="h-32 rounded-lg" />
            </div>
        </div>
      )}

      {result && (
        <div className="mt-12">
           <h3 className="font-headline text-2xl md:text-3xl text-center mb-8">Your Suggested Formulations</h3>
          {result.formulations && result.formulations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {result.formulations.map((formulation, index) => (
                <Card key={index} className="flex flex-col justify-center items-center text-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <FlaskConical className="h-8 w-8 text-accent mb-4"/>
                    <p className="font-medium text-lg">{formulation}</p>
                </Card>
              ))}
            </div>
          ) : (
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>No Formulations Found</AlertTitle>
                <AlertDescription>
                    Our AI perfumer couldn't quite capture that. Please try a different description.
                </AlertDescription>
            </Alert>
          )}
        </div>
      )}
    </div>
  );
}
