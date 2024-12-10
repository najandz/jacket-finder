'use client';

import { useState } from 'react';
import { FilterSelect } from '@/components/filters/FilterSelect';
import { styleOptions, sizeOptions, materialOptions, colorOptions } from '@/lib/filter-options';
import { JacketStyle, JacketSize, JacketMaterial, JacketColor } from '@/types/jacket';

interface JacketFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  style?: JacketStyle;
  size?: JacketSize;
  material?: JacketMaterial;
  color?: JacketColor;
}

export function JacketFilters({ onFilterChange }: JacketFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({});

  const updateFilter = (key: keyof FilterState, value: string | undefined) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      <FilterSelect
        label="Style"
        options={styleOptions}
        onValueChange={(value) => updateFilter('style', value as JacketStyle)}
        placeholder="Select style"
      />
      <FilterSelect
        label="Size"
        options={sizeOptions}
        onValueChange={(value) => updateFilter('size', value as JacketSize)}
        placeholder="Select size"
      />
      <FilterSelect
        label="Material"
        options={materialOptions}
        onValueChange={(value) => updateFilter('material', value as JacketMaterial)}
        placeholder="Select material"
      />
      <FilterSelect
        label="Color"
        options={colorOptions}
        onValueChange={(value) => updateFilter('color', value as JacketColor)}
        placeholder="Select color"
      />
    </div>
  );
}