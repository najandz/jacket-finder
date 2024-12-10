import { JacketActivity } from '@/types/jacket';
import { LucideIcon, Mountain, Building2, Snowflake, TreePine } from 'lucide-react';

export interface ActivityOption {
  value: JacketActivity;
  label: string;
  icon: LucideIcon;
  description: string;
}

export const activities: ActivityOption[] = [
  {
    value: 'hiking',
    label: 'Hiking',
    icon: TreePine,
    description: 'Trail adventures and outdoor exploration',
  },
  {
    value: 'skiing',
    label: 'Skiing',
    icon: Snowflake,
    description: 'Winter sports and snow activities',
  },
  {
    value: 'climbing',
    label: 'Climbing',
    icon: Mountain,
    description: 'Rock climbing and mountaineering',
  },
  {
    value: 'urban',
    label: 'Urban',
    icon: Building2,
    description: 'City life and daily commute',
  },
  {
    value: 'running',
    label: 'Running',
    icon: Building2,
    description: 'High-output cardio activities',
  },
  {
    value: 'mountaineering',
    label: 'Mountaineering',
    icon: Mountain,
    description: 'Alpine climbing and expeditions',
  },
];