import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'waiters',
  exposes: {
    './Routes': 'apps/waiters/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
