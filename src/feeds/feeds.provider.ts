import { MockFeeds } from './mock-feeds';

// We can replace provider with real DB model
export const FeedsProvider = {
  provide: 'CONNECTION',
  useValue: {
    getFeeds() {
      return new Promise((resolve, reject) => {
        resolve(MockFeeds);
      });
    },
    getFeedsBySource(source: string) {
      return new Promise((resolve, reject) => {
        resolve(MockFeeds.filter(item => item.source === source));
      });
    },
  },
};
