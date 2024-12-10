import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Jacket } from '@/types/jacket';
import { ShieldCheck, Wind, Thermometer } from 'lucide-react';

interface JacketCardProps {
  jacket: Jacket;
}

export function JacketCard({ jacket }: JacketCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={jacket.imageUrl}
          alt={jacket.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{jacket.name}</h3>
            <p className="text-sm text-muted-foreground">{jacket.description}</p>
          </div>
          <span className="font-bold text-lg">${jacket.price}</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Best for: {jacket.activities.join(', ')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Weather: {jacket.weather.join(', ')}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {jacket.features.map((feature) => (
            <Badge key={feature} variant="secondary">
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}