import { JacketWeather } from '@/types/jacket';
import { LucideIcon, Cloud, CloudRain, CloudSnow, Wind, Sun, Snowflake } from 'lucide-react';

export interface WeatherOption {
  value: JacketWeather;
  label: string;
  icon: LucideIcon;
  description: string;
}

export const weatherConditions: WeatherOption[] = [
  {
    value: 'rain',
    label: 'Rain',
    icon: CloudRain,
    description: 'Wet conditions and precipitation',
  },
  {
    value: 'snow',
    label: 'Snow',
    icon: CloudSnow,
    description: 'Snowy conditions',
  },
  {
    value: 'wind',
    label: 'Wind',
    icon: Wind,
    description: 'Windy conditions',
  },
  {
    value: 'mild',
    label: 'Mild',
    icon: Sun,
    description: 'Moderate temperatures',
  },
  {
    value: 'cold',
    label: 'Cold',
    icon: Cloud,
    description: 'Cold temperatures',
  },
  {
    value: 'extreme-cold',
    label: 'Extreme Cold',
    icon: Snowflake,
    description: 'Below freezing temperatures',
  },
];