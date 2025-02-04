# Discord Auto Bump Bot

Simple script to auto bump your Discord server using Disboard bot.

## ⚠️ Note

Self-bots are against Discord ToS. Use at your own risk!

## 🚀 Quick Start

1. Install [Node.js](https://nodejs.org/)
2. Install dependencies:

```bash
npm install
```

3. Create `.env` file or rename `.env.example` to `.env` and fill it with your Discord token & channel ID:

```env
TOKEN=your_discord_token
BUMP_CHANNEL=your_channel_id
```

4. Run:

```bash
node index.js
```

## 🔍 How to get Discord token & Channel ID

### Discord Token

1. Open Discord in browser (Discord.com)
2. Press F12 to open DevTools
3. Go to Console tab
4. Paste this code:

```js
window.webpackChunkdiscord_app.push([
    [Math.random()],
    {},
    (req) => {
        if (!req.c) return
        for (const m of Object.keys(req.c)
            .map((x) => req.c[x].exports)
            .filter((x) => x)) {
            if (m.default && m.default.getToken !== undefined) {
                return copy(m.default.getToken())
            }
            if (m.getToken !== undefined) {
                return copy(m.getToken())
            }
        }
    },
])
window.webpackChunkdiscord_app.pop()
console.log('%cWorked!', 'font-size: 50px')
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px')
```

5. Token will be copied to your clipboard

### Channel ID

1. Enable Developer Mode in Discord settings
2. Right-click channel → Copy ID

Never share your Discord token! 🤫
