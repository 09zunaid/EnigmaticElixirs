'use server';

/**
 * @fileOverview Generates fragrance formulations based on a user's description or personality.
 *
 * - generateFragranceFormulations - A function that generates fragrance formulations.
 * - GenerateFragranceFormulationsInput - The input type for the generateFragranceFormulations function.
 * - GenerateFragranceFormulationsOutput - The return type for the generateFragranceFormulations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFragranceFormulationsInputSchema = z.object({
  description: z
    .string()
    .describe(
      'A description of the desired fragrance or the user\'s personality.'
    ),
});
export type GenerateFragranceFormulationsInput = z.infer<
  typeof GenerateFragranceFormulationsInputSchema
>;

const GenerateFragranceFormulationsOutputSchema = z.object({
  formulations: z
    .array(z.string())
    .describe('An array of suggested fragrance formulations.'),
});
export type GenerateFragranceFormulationsOutput = z.infer<
  typeof GenerateFragranceFormulationsOutputSchema
>;

export async function generateFragranceFormulations(
  input: GenerateFragranceFormulationsInput
): Promise<GenerateFragranceFormulationsOutput> {
  return generateFragranceFormulationsFlow(input);
}

const generateFragranceFormulationsPrompt = ai.definePrompt({
  name: 'generateFragranceFormulationsPrompt',
  input: {schema: GenerateFragranceFormulationsInputSchema},
  output: {schema: GenerateFragranceFormulationsOutputSchema},
  prompt: `You are a master perfumer, skilled in creating unique fragrance formulations.

  Based on the following description, suggest several fragrance formulations that would be suitable.

  Description: {{{description}}}

  Each formulation should be a concise string describing the blend of top, heart, and base notes.
  Return the response as a JSON array of strings.`,
});

const generateFragranceFormulationsFlow = ai.defineFlow(
  {
    name: 'generateFragranceFormulationsFlow',
    inputSchema: GenerateFragranceFormulationsInputSchema,
    outputSchema: GenerateFragranceFormulationsOutputSchema,
  },
  async input => {
    const {output} = await generateFragranceFormulationsPrompt(input);
    return output!;
  }
);
