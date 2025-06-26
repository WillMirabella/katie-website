&apos;use client&apos;;

import { useState } from 'react';
import { trips } from '@/data/trips';

export default function TripsPage() {
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);

  const handleTripClick = (tripId: string) => {
    setSelectedTrip(selectedTrip === tripId ? null : tripId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Travel Adventures</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stories from the road, memories from around the world, and the experiences 
          that have shaped my perspective on travel and life.
        </p>
      </div>

      <div className="space-y-6">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2 sm:mb-0">
                      {trip.destination}
                    </h2>
                    <div className="text-sm text-gray-500">
                      <span className="block sm:inline">{trip.date}</span>
                      <span className="hidden sm:inline mx-2">•</span>
                      <span className="block sm:inline">{trip.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {trip.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {trip.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-light text-gray-700"
                      >
                        {highlight}
                      </span>
                    ))}
                    {trip.highlights.length > 3 && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                        +{trip.highlights.length - 3} more
                      </span>
                    )}
                  </div>

                  {trip.detailedView && (
                    <button
                      onClick={() => handleTripClick(trip.id)}
                      className="inline-flex items-center text-primary-medium hover:text-primary-medium/80 font-medium transition-colors"
                    >
                      {selectedTrip === trip.id ? 'Show less' : 'Read more'}
                      <svg
                        className={`ml-2 w-4 h-4 transition-transform ${
                          selectedTrip === trip.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-8 lg:w-64">
                  <div className="aspect-[4/3] bg-accent-light rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <p className="text-sm">{trip.destination}</p>
                    </div>
                  </div>
                </div>
              </div>

              {selectedTrip === trip.id && trip.detailedView && (
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {trip.detailedView}
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {trip.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-primary-medium mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}