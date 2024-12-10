'use client';

import { JacketActivity } from '@/types/jacket';
import { activities } from './ActivityOption';
import { ActivityCard } from './ActivityCard';

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
          <ActivityCard
            key={activity.value}
            activity={activity}
            isSelected={selectedActivity === activity.value}
            onSelect={onSelectActivity}
          />
        ))}
      </div>
    </div>
  );
}