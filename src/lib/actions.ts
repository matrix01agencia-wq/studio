
'use server';

import { intelligentServiceSearch, IntelligentServiceSearchInput } from '@/ai/flows/intelligent-service-search';
import { z } from 'zod';

const SearchSchema = z.object({
    query: z.string().min(3, 'Query must be at least 3 characters'),
});

export type SearchState = {
    suggestions?: string[];
    error?: string;
};

export async function searchServices(
    prevState: SearchState,
    formData: FormData
): Promise<SearchState> {
    const validatedFields = SearchSchema.safeParse({
        query: formData.get('query'),
    });

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors.query?.[0],
        };
    }
    
    const input: IntelligentServiceSearchInput = {
        query: validatedFields.data.query,
    };
    
    try {
        const result = await intelligentServiceSearch(input);
        if (result.suggestions && result.suggestions.length > 0) {
            return { suggestions: result.suggestions };
        }
        return { suggestions: [] };
    } catch (e) {
        return { error: 'AI service is currently unavailable. Please try again later.' };
    }
}
