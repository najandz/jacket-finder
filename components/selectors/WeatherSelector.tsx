import { JacketWeather } from '@/types/jacket';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Cloud,
  CloudRain,
  CloudSnow,
  Wind,
  Sun,
  Snowflake,
} from 'lucide-react';

interface WeatherOption {
  value: JacketWeather;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const weatherConditions: WeatherOption[] = [
  {
    value: 'rain',
    label: 'Rain',
    icon: <CloudRain className="h-8 w-8" />,
    description: 'Wet conditions and precipitation',
  },
  {
    value: 'snow',
    label: 'Snow',
    icon: <CloudSnow className="h-8 w-8" />,
    description: 'Snowy conditions',
  },
  {
    value: 'wind',
    label: 'Wind',
    icon: <Wind className="h-8 w-8" />,
    description: 'Windy conditions',
  },
  {
    value: 'mild',
    label: 'Mild',
    icon: <Sun className="h-8 w-8" />,
    description: 'Moderate temperatures',
  },
  {
    value: 'cold',
    label: 'Cold',
    icon: <Cloud className="h-8 w-8" />,
    description: 'Cold temperatures',
  },
  {
    value: 'extreme-cold',
    label: 'Extreme Cold',
    icon: <Snowflake className="h-8 w-8" />,
    description: 'Below freezing temperatures',
  },
];

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
          <Card
            key={condition.value}
            className={cn(
              'p-4 cursor-pointer hover:border-primary transition-colors',
              selectedWeather === condition.value && 'border-primary bg-primary/5'
            )}
            onClick={() => onSelectWeather(condition.value)}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              {condition.icon}
              <h3 className="font-semibold">{condition.label}</h3>
              <p className="text-sm text-muted-foreground">{condition.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}