import * as React from 'react';

import { cn } from '@/lib/utils';

export interface SloganProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function Slogan({ className, ...props }: SloganProps) {
  return (
    <div
      className={cn(
        'text-gradient mb-[12px] text-center font-roboto text-2xl font-bold sm:text-3xl sm:!leading-[2.5rem] md:text-4xl md:!leading-[3rem] xl:text-5xl xl:!leading-[4rem]',
        className
      )}
      {...props}
    />
  );
}

export { Slogan };
