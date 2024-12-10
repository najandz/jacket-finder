'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { JacketWeather } from '@/types/jacket';
import { WeatherOption } from './WeatherOption';

interface WeatherCardProps {
  condition: WeatherOption;
  isSelected: boolean;
  onSelect: (weather: JacketWeather) => void;
}

export function WeatherCard({ condition, isSelected, onSelect }: WeatherCardProps) {
  const Icon = condition.icon;
  
  return (
    <Card
      className={cn(
        'p-4 cursor-pointer hover:border-primary transition-colors',
        isSelected && 'border-primary bg-primary/5'
      )}
      onClick={() => onSelect(condition.value)}
    >
      <div className="flex flex-col items-center text-center space-y-2">
        <Icon className="h-8 w-8" />
        <h3 className="font-semibold">{condition.label}</h3>
        <p className="text-sm text-muted-foreground">{condition.description}</p>
      </div>
    </Card>
  );
}