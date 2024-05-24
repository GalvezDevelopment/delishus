import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'profile',
  exposes: {
    './Routes': 'profile/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
