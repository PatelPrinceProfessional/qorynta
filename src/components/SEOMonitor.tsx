import React, { useState } from 'react';
import { insights } from '@/data/insights';

export const SEOMonitor = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Only render in development
  if (!import.meta.env.DEV) return null;

  const totalPublished = insights.filter(p => p.published !== false).length;
  
  const pillars = new Set(insights.map(p => p.pillarTopic));
  const postsPerPillar = Array.from(pillars).map(pillar => {
    return {
      pillar,
      count: insights.filter(p => p.pillarTopic === pillar).length
    };
  });

  const missingCanonical = insights.filter(p => !p.canonical).length;
  const missingMeta = insights.filter(p => !p.description || !p.title).length;
  const missingInternalLinks = insights.filter(p => !p.internalLinks || p.internalLinks.length === 0).length;

  return (
    <div className="fixed bottom-4 left-4 z-50 font-mono text-xs">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-green-400 px-3 py-2 rounded shadow-lg border border-green-900"
        >
          SEO Monitor
        </button>
      )}

      {isOpen && (
        <div className="bg-black/95 text-green-400 p-4 rounded shadow-2xl border border-green-900 w-80 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-green-900">
            <h3 className="font-bold">SEO Content Monitor</h3>
            <button onClick={() => setIsOpen(false)} className="text-red-400">Close</button>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-white">Total Published:</p>
              <p className="text-lg font-bold">{totalPublished}</p>
            </div>

            <div>
              <p className="text-white mb-1">Posts by Pillar:</p>
              <ul className="space-y-1">
                {postsPerPillar.map(p => (
                  <li key={p.pillar} className="flex justify-between border-b border-green-900/50 pb-1">
                    <span className="truncate pr-2">{p.pillar}</span>
                    <span>{p.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-green-900">
              <p className="text-white mb-2">Health Checks:</p>
              <ul className="space-y-1">
                <li className={`flex justify-between ${missingCanonical > 0 ? 'text-red-400' : ''}`}>
                  <span>Missing Canonical:</span> <span>{missingCanonical}</span>
                </li>
                <li className={`flex justify-between ${missingMeta > 0 ? 'text-red-400' : ''}`}>
                  <span>Missing Meta:</span> <span>{missingMeta}</span>
                </li>
                <li className={`flex justify-between ${missingInternalLinks > 0 ? 'text-red-400' : ''}`}>
                  <span>Missing Internal Links:</span> <span>{missingInternalLinks}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
