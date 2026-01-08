'use server';

/**
 * @fileOverview A Genkit flow for intelligent service search, providing service suggestions based on user input.
 *
 * - intelligentServiceSearch - A function that suggests services based on a search query.
 * - IntelligentServiceSearchInput - The input type for the intelligentServiceSearch function.
 * - IntelligentServiceSearchOutput - The return type for the intelligentServiceSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentServiceSearchInputSchema = z.object({
  query: z.string().describe('The user\u2019s search query.'),
});
export type IntelligentServiceSearchInput = z.infer<typeof IntelligentServiceSearchInputSchema>;

const IntelligentServiceSearchOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of suggested services based on the query.'),
});
export type IntelligentServiceSearchOutput = z.infer<typeof IntelligentServiceSearchOutputSchema>;

export async function intelligentServiceSearch(input: IntelligentServiceSearchInput): Promise<IntelligentServiceSearchOutput> {
  return intelligentServiceSearchFlow(input);
}

const serviceSuggestionPrompt = ai.definePrompt({
  name: 'serviceSuggestionPrompt',
  input: {schema: IntelligentServiceSearchInputSchema},
  output: {schema: IntelligentServiceSearchOutputSchema},
  prompt: `You are a service suggestion AI. Given a user's search query, you will suggest related services that the user might be interested in. Return an array of service suggestions. The service suggestions should be tailored to the user query and should provide related keywords or phrases. Return no more than 5 suggestions.

Query: {{{query}}}`,
});

const intelligentServiceSearchFlow = ai.defineFlow(
  {
    name: 'intelligentServiceSearchFlow',
    inputSchema: IntelligentServiceSearchInputSchema,
    outputSchema: IntelligentServiceSearchOutputSchema,
  },
  async input => {
    const {output} = await serviceSuggestionPrompt(input);
    return output!;
  }
);
