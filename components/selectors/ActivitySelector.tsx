'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { JacketActivity } from '@/types/jacket';
import {
  Bike,
  Mountain,
  Building2,
  Snowflake,
  TreePine,
} from 'lucide-react';

interface ActivityOption {
  value: JacketActivity;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const activities: ActivityOption[] = [
  {
    value: 'hiking',
    label: 'Hiking',
    icon: <TreePine className="h-8 w-8" />,
    description: 'Trail adventures and outdoor exploration',
  },
  {
    value: 'skiing',
    label: 'Skiing',
    icon: <Snowflake className="h-8 w-8" />,
    description: 'Winter sports and snow activities',
  },
  {
    value: 'climbing',
    label: 'Climbing',
    icon: <Mountain className="h-8 w-8" />,
    description: 'Rock climbing and mountaineering',
  },
  {
    value: 'urban',
    label: 'Urban',
    icon: <Building2 className="h-8 w-8" />,
    description: 'City life and daily commute',
  },
  {
    value: 'running',
    label: 'Running',
    icon: <Building2 className="h-8 w-8" />,
    description: 'High-output cardio activities',
  },
  {
    value: 'mountaineering',
    label: 'Mountaineering',
    icon: <Mountain className="h-8 w-8" />,
    description: 'Alpine climbing and expeditions',
  },
];

interface ActivitySelectorProps {
  selectedActivity: JacketActivity | null;
  onSelectActivity: (activity: JacketActivity) => void;
}

export function ActivitySelector({ selectedActivity, onSelectActivity }: ActivitySelectorProps) {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">What will you use it for?</h2>
        <p className="text-muted-foreground">Select your primary activity</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {activities.map((activity) => (
          <Card
            key={activity.value}
            className={cn(
              'p-4 cursor-pointer hover:border-primary transition-colors',
              selectedActivity === activity.value && 'border-primary bg-primary/5'
            )}
            onClick={() => onSelectActivity(activity.value)}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              {activity.icon}
              <h3 className="font-semibold">{activity.label}</h3>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}