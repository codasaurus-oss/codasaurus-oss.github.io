import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://codasaurus-oss.github.io",
  base: "/docs",
  integrations: [
    starlight({
      title: "Codasaurus",
      description:
        "Self-hosted GitHub App for pull request review: deterministic checks first, your LLM key, your infrastructure.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/codasaurus-oss/codasaurus",
        },
      ],
      sidebar: [
        {
          label: "Getting started",
          items: [
            { label: "Overview", link: "/" },
            { label: "Onboarding", slug: "setup-onboarding" },
            { label: "GitHub App", slug: "setup-github-app" },
          ],
        },
        {
          label: "Configure",
          items: [
            { label: "Configuration", slug: "configuration" },
            { label: ".codasaurus.toml", slug: "codasaurus-toml" },
            { label: "Commands", slug: "commands" },
          ],
        },
        {
          label: "Operate",
          items: [
            { label: "Database", slug: "database" },
            { label: "Backup and restore", slug: "operations-backup-restore" },
            { label: "Run for free", slug: "run-for-free" },
          ],
        },
      ],
    }),
  ],
});
