import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote_app",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Widget": "./components/Widget.tsx",
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
};

export default nextConfig;
