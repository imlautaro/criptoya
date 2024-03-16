# CriptoYa

An easy way to use the [CriptoYa Public API](https://criptoya.com/api) in your projects (fully typed 😎).

Note: this package is not official.

## Usage

Install package:

```
# npm
npm install criptoya

# yarn
yarn add criptoya

# pnpm
pnpm add criptoya
```

Import:

```javascript
// ESM
import { createClient } from 'criptoya'

// CommonJS
const { createClient } = require('criptoya')
```

Example:

```javascript
const criptoya = createClient()

const data = await criptoya.exchange({
	exchange: 'belo',
	coin: 'USDT',
	fiat: 'ARS',
})
```

## Available methods

-   Query by cryptocurrency (`coin`)
-   Query by exchange (`exchange`)
-   Query dollar (`dollar`)
-   Query fees (`fees`)
-   Query cer (`cer`)
-   Query uva (`uva`)
-   Query banks (`banks`)
-   Query by bank (`bank`)

💡 You can see all of the required params and the response types in your code editor (VS Code is recommended).

## Development

-   Clone this repository
-   Install dependencies using `pnpm install`
-   Run interactive tests using `pnpm dev`

## License

Made with 💙

Published under [MIT License](./LICENSE).
