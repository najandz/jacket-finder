'use client';

import { useState } from 'react';
import { JacketGrid } from '@/components/JacketGrid';
import { ActivitySelector } from '@/components/selectors/activity/ActivitySelector';
import { WeatherSelector } from '@/components/selectors/weather/WeatherSelector';
import { Button } from '@/components/ui/button';
import { jackets } from '@/data/jackets';
import { JacketActivity, JacketWeather } from '@/types/jacket';

export default function Home() {
  const [selectedActivity, setSelectedActivity] = useState<JacketActivity | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<JacketWeather | null>(null);

  const filteredJackets = jackets.filter((jacket) => {
    if (selectedActivity && !jacket.activities.includes(selectedActivity)) {
      return false;
    }
    if (selectedWeather && !jacket.weather.includes(selectedWeather)) {
      return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedActivity(null);
    setSelectedWeather(null);
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative h-[60vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1605908502724-9093a79a1b39)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="container mx-auto h-full flex flex-col justify-center px-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Find Your Perfect Jacket
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Tell us how you'll use your jacket, and we'll find the perfect match for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <ActivitySelector
              selectedActivity={selectedActivity}
              onSelectActivity={setSelectedActivity}
            />
            
            {selectedActivity && (
              <WeatherSelector
                selectedWeather={selectedWeather}
                onSelectWeather={setSelectedWeather}
              />
            )}

            {(selectedActivity || selectedWeather) && (
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="text-sm"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>

          <div className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">
                {filteredJackets.length} {filteredJackets.length === 1 ? 'Jacket' : 'Jackets'} Found
              </h2>
            </div>
            <JacketGrid jackets={filteredJackets} />
          </div>
        </div>
      </section>
    </main>
  );
}