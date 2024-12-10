'use client';

import { JacketWeather } from '@/types/jacket';
import { weatherConditions } from './WeatherOption';
import { WeatherCard } from './WeatherCard';

interface WeatherSelectorProps {
  selectedWeather: JacketWeather | null;
  onSelectWeather: (weather: JacketWeather) => void;
}

export function WeatherSelector({ selectedWeather, onSelectWeather }: WeatherSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">What weather conditions?</h2>
        <p className="text-muted-foreground">Select the primary weather condition</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {weatherConditions.map((condition) => (
          <WeatherCard
            key={condition.value}
            condition={condition}
            isSelected={selectedWeather === condition.value}
            onSelect={onSelectWeather}
          />
        ))}
      </div>
    </div>
  );
}