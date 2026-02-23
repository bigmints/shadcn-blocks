# Mobile Blocks

Production-ready mobile app UI blocks built with [shadcn/ui](https://ui.shadcn.com). Copy and paste into your apps. Free. Open Source.

[![Deploy](https://github.com/bigmints/shadcn-blocks/actions/workflows/deploy.yml/badge.svg)](https://github.com/bigmints/shadcn-blocks/actions/workflows/deploy.yml)

> Browse all blocks with live previews at [blocks.bigmints.com](https://blocks.bigmints.com)

## Usage

To use blocks from this registry, configure your `components.json` with the remote registry:

```json
{
  "registries": {
    "@mobile": "https://blocks.bigmints.com/r/{name}.json"
  }
}
```

Then add blocks to your project using the shadcn CLI:

```bash
# Add a specific block
npx shadcn@latest add @mobile/shell-01

# Add a login block
npx shadcn@latest add @mobile/login-01

# Add a payment block
npx shadcn@latest add @mobile/payment-01
```

Alternatively, you can add blocks directly from the registry URL:

```bash
npx shadcn@latest add https://blocks.bigmints.com/r/shell-01.json
```

## Blocks

| Category | Block | Description |
|---|---|---|
| **App Shells** | `shell-01` | Tab Bar Navigation |
| | `shell-02` | Drawer Navigation |
| | `shell-03` | Stack Navigation |
| **Authentication** | `login-01` | Email + Password Login |
| | `login-02` | Phone + OTP Verification |
| | `login-03` | PIN / Biometric Unlock |
| **Forms** | `form-01` | Profile Form with Validation |
| | `form-02` | Multi-Step Wizard Form |
| | `form-03` | Search + Filter Form |
| **Lists & Grids** | `list-01` | Contact Card List |
| | `list-02` | Product Grid |
| | `list-03` | Settings Page |
| **Filters** | `filter-01` | Bottom Sheet Filter |
| | `filter-02` | Chip Filter Bar |
| **Status Pages** | `error-01` | Empty State / 404 |
| | `error-02` | Network Error |
| | `confirmation-01` | Payment Success |
| | `confirmation-02` | Order Summary |
| **Payment** | `payment-01` | Card Entry Form |
| | `payment-02` | Payment Method Selection |
| | `payment-03` | Checkout Flow |
| **Overlays** | `sheet-01` | Bottom Sheet |
| | `modal-01` | Modal Dialog |
| | `notification-01` | Push Notifications |

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build registry
npm run registry:build
```

## Contributing

We welcome contributions! Please read our [contributing guide](CONTRIBUTING.md) to get started.

## License

Licensed under the [MIT License](LICENSE.md).

---

Built by [bigmints](https://bigmints.com).
