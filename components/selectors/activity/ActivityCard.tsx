'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { JacketActivity } from '@/types/jacket';
import { ActivityOption } from './ActivityOption';

interface ActivityCardProps {
  activity: ActivityOption;
  isSelected: boolean;
  onSelect: (activity: JacketActivity) => void;
}

export function ActivityCard({ activity, isSelected, onSelect }: ActivityCardProps) {
   return (
    <Card
      className={cn(
        'p-4 cursor-pointer hover:border-primary transition-colors',
        isSelected && 'border-primary bg-primary/5'
      )}
      onClick={() => onSelect(activity.value)}
    >
      <div className="flex flex-col items-center text-center space-y-2">
         <h3 className="font-semibold">{activity.label}</h3>
        <p className="text-sm text-muted-foreground">{activity.description}</p>
      </div>
    </Card>
  );
}