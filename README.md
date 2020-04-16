# next-link

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/next-link
[downloads-image]:https://img.shields.io/npm/dm/@moxy/next-link.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/next-link.svg
[build-status-url]:https://github.com/moxystudio/next-link/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/next-link/Node%20CI/master
[codecov-url]:https://codecov.io/gh/moxystudio/next-link
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/next-link/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/next-link
[david-dm-image]:https://img.shields.io/david/moxystudio/next-link.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/next-link?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/next-link.svg

A wrapper component that uses [next/link](https://nextjs.org/docs/api-reference/next/link) to enable client-side transitions between routes as well as external URLs.

## Installation

```sh
$ npm install @moxy/next-link
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.

## Motivation

When using Next.js, we have [next/link](https://nextjs.org/docs/api-reference/next/link) to navigate between client-side routes, but when we need to navigate to external URLs an anchor tag has to be used.

This component supports both, using `NextLink` we can pass an internal or external URL, using the same component for both. With the `external` prop we specify the type of route and it takes care of the rest for us, rendering the `next/link` or an `<a>` tag, maintaining the same styles between the two.

## Usage

```js
import React from 'react';
import NextLink from '@moxy/next-link';

const MyPage = (props) => (
    <div className="container">
        <NextLink href="/about">About</NextLink>
        <NextLink href="/contact">Contact</NextLink>
        <NextLink external href="https://moxy.studio">MOXY</NextLink>
    </div>
);

export default MyPage;
```

## API

Besides the following supported props by the `NextLink` component, additional props will be spread to the anchor tag.

#### href

Type: `string` | Required: `true`

The path for an internal or external URL.

#### children

Type: `node` | Required: `true`

What to render inside the component.

#### className

Type: `string` | Required: `false`

A className to apply to the component wrapper.

#### newTab

Type: `bool` | Required: `false` | Default: `false`

If set to true, opens the link in a new tab.

#### external

Type: `bool` | Required: `false` | Default: `false`

If set to *true*, opens an external URL. If set to *false*, navigates to an internal page.

#### prefetch

Type: `bool` | Required: `false` | Default: `true`

Prefetch the page in the background.

Only available if `external` is set to *false*. Check the [next/link](https://nextjs.org/docs/api-reference/next/link) documentation to learn more.

#### as

Type: `string` | Required: `false`

The path that will be rendered in the browser URL bar. Used for dynamic routes.

Only available if `external` is set to *false*. Check the [next/link](https://nextjs.org/docs/api-reference/next/link) documentation to learn more.

#### scroll

Type: `bool` | Required: `false` | Default: `true`

Scroll to the top of the page after a navigation.

Only available if `external` is set to *false*. Check the [next/link](https://nextjs.org/docs/api-reference/next/link) documentation to learn more.


## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```

## License

Released under the [MIT License](./LICENSE).
