/* eslint-disable import/no-anonymous-default-export */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

export default {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "remote_app",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./Widget": "./components/Widget.tsx",
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: false },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
          },
        })
      );
    }
    return config;
  },
};
