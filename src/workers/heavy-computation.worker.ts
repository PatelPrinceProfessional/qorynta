import * as comlink from 'comlink';

/**
 * Heavy Computation Web Worker
 * Offloads massive JSON parsing, cryptography, or mathematical loops 
 * from the main UI thread to prevent blocking (Total Blocking Time).
 */
const heavyTasks = {
  processMassiveDataset: async (data: any[]) => {
    console.log("Worker received data:", data.length);
    // Simulate heavy synchronous block that would normally freeze the UI for 1.6s
    const start = performance.now();
    let result = 0;
    for(let i = 0; i < 50000000; i++) {
        result += Math.sqrt(i);
    }
    const end = performance.now();
    return {
      status: 'success',
      processedItems: data.length,
      computeTimeMs: end - start,
      mockResult: result
    };
  }
};

export type HeavyTasks = typeof heavyTasks;

comlink.expose(heavyTasks);
