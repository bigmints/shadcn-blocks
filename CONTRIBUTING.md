# Contributing

Thanks for your interest in contributing to Mobile Blocks! Here's how to get started.

## Development Setup

1. **Fork and clone** the repository:

```bash
git clone https://github.com/bigmints/shadcn-blocks.git
cd shadcn-blocks
```

1. **Install dependencies:**

```bash
npm install
```

1. **Start the dev server:**

```bash
npm run dev
```

## Adding a New Block

1. Create a new directory under `registry/new-york/<block-name>/`.
2. Add your block component as `<block-name>.tsx`.
3. Register the block in `registry.json` with the correct metadata (name, title, description, categories, dependencies).
4. Add the block to the sidebar in `components/blocks-layout.tsx`.
5. Build the registry to verify: `npm run registry:build`.

## Block Guidelines

- Blocks should be **self-contained** — no external API calls or database dependencies.
- Use **shadcn/ui components** and **Lucide icons** for consistency.
- Target a **390×844 viewport** (iPhone-style) for mobile blocks.
- Include the shared `status-bar.tsx` component for realistic mobile framing.
- Follow existing naming conventions: `<category>-<number>` (e.g., `login-01`, `form-02`).

## Pull Requests

- Create a feature branch from `main`.
- Keep changes focused — one block per PR is ideal.
- Include a screenshot or description of the block in the PR body.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE.md).
