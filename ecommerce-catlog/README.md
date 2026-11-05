# E-Commerce Product Catalog

## Overview

A responsive e-commerce product catalog built using Vue 3, TypeScript, Composition API and Pinia.

The application allows users to:
- Browse products grouped by category.
- View products sorted by rating (highest first).
- Search products by name.
- View detailed product information.
- Navigate between dashboard and product details.

## Tech Stack

- Vue 3
- TypeScript
- Composition API
- Pinia
- Vue Router
- Native Fetch API
- Vitest
- Vue Test Utils

## APIs

- https://fakestoreapi.com/products
- https://fakestoreapi.com/products/categories
- https://fakestoreapi.com/products/:id

## Setup Instructions

### Prerequisites

- Node.js
- NPM

### Installation

```bash
git clone <repository-url>
cd ecommerce-catalog
npm install
npm run dev
```

### Run Tests

```bash
npm run test:run
```

### Production Build

```bash
npm run build
```

## Architecture Decisions

1. Components are separated based on their responsibilities.
2. API communication is centralized in the services layer.
3. Pinia manages shared product and category state.
4. Computed properties handle search, grouping and reactive data transformations.
5. Vue Router manages dashboard and product detail navigation.
6. TypeScript interfaces provide type safety.
7. Vitest and Vue Test Utils are used for unit testing.

## Node.js and NPM Versions

Record the versions used during development:

```bash
node --version
npm --version
```

## Error Handling

- Loading indicators during API requests.
- Error messages when API requests fail.
- Retry functionality.
- Empty search results handling.
- Invalid product ID handling.

## Responsive Design

The application supports desktop, tablet and mobile layouts using responsive CSS and horizontally scrollable product sections.