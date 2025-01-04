## Create Next App

```sh
npx create-next-app@14 appName

```

Please use the starter project since it has all the dependencies installed, Tailwind and DaisyUI are already configured. 👍

## DaisyUI

- remove default code from globals.css
  tailwind.config.js

```js
{
plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
```

## React Icons

(React Icons )[https://react-icons.github.io/react-icons/]

```sh
npm install react-icons --save
```

```js
import { FaBeer } from 'react-icons/fa';

<FaBeer>

```

## Setup Dashboard Layout

- setup layout for for all pages
- DaisyUI Drawer Component
  [DaisyUI](https://daisyui.com/components/drawer/)

## Groq for AI