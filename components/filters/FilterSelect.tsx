import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FilterSelectProps {
  label: string;
  options: { value: string; label: string }[];
  onValueChange: (value: string) => void;
  placeholder: string;
}

export function FilterSelect({ label, options, onValueChange, placeholder }: FilterSelectProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}