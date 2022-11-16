import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={clsx(
            'py-2 w-32 px-1 bg-roxo border-2 rounded-full font-semibold text-white text-sm transition-colors border-roxo-claro ',
            )}
            >
                {children}
            </Comp>

            
        )
        
}
export function Button2({children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={clsx(
            'py-2 w-32 px-1 bg-roxo-claro border-2 rounded-full font-semibold text-white text-sm transition-colors border-roxo-claro ',
            )}
            >
                {children}
            </Comp>

            
        )
        
}