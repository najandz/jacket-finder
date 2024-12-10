import { JacketCard } from './JacketCard';
import { Jacket } from '@/types/jacket';

interface JacketGridProps {
  jackets: Jacket[];
}

export function JacketGrid({ jackets }: JacketGridProps) {
  if (jackets.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No jackets found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {jackets.map((jacket) => (
        <JacketCard key={jacket.id} jacket={jacket} />
      ))}
    </div>
  );
}