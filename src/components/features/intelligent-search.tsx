'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { searchServices, SearchState } from '@/lib/actions';
import { Badge } from '@/components/ui/badge';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button
            type="submit"
            size="icon"
            aria-disabled={pending}
            disabled={pending}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-10 rounded-md bg-primary hover:bg-primary/90"
        >
            {pending ? (
                <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
                <Search className="h-5 w-5 text-primary-foreground" />
            )}
        </Button>
    );
}

export function IntelligentSearch() {
    const initialState: SearchState = {};
    const [state, dispatch] = useActionState(searchServices, initialState);

    return (
        <div className="w-full max-w-2xl mx-auto">
            <form action={dispatch}>
                <div className="relative">
                    <Input
                        type="text"
                        name="query"
                        placeholder="Busca un servicio: 'Diseño web', 'Entrenador personal', 'Chef a domicilio'..."
                        className="h-12 text-lg pl-4 pr-14 bg-card border-2 border-border focus:border-primary focus:ring-primary"
                        required
                        minLength={3}
                    />
                    <SubmitButton />
                </div>
            </form>
            {(state?.suggestions || state?.error) && (
                <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                    {state.error ? (
                        <p className="text-destructive text-sm">{state.error}</p>
                    ) : state.suggestions && state.suggestions.length > 0 ? (
                        <>
                            <h4 className="text-sm font-semibold text-muted-foreground mb-2">Sugerencias:</h4>
                            <div className="flex flex-wrap gap-2">
                                {state.suggestions.map((suggestion, index) => (
                                    <Badge key={index} variant="secondary" className="text-md px-3 py-1 cursor-pointer hover:bg-accent">
                                        {suggestion}
                                    </Badge>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="text-muted-foreground text-sm">No se encontraron sugerencias. Intenta con otra búsqueda.</p>
                    )}
                </div>
            )}
        </div>
    );
}
