# Auto-Bumper-Discord

This is an automated Discord bot designed to bump your Discord server using the `!d bump` command provided by the Disboard bot. It runs as a self-bot and bumps your server at random intervals between 2 and 3 hours.

# Features

- Auto Bump: Automatically sends the bump command in the specified channel at random intervals to prevent detection.
- Randomized Timing: Intervals are randomized between 2 hours and 2.5 hours to avoid detection.

# Requirements

- Node.js v16 or higher
- A Discord account token
- Channel ID where bumps will occur
- The Disboard bot added to your server

# Installation

1. Clone the repository:
```bash
git clone https://github.com/blackmagic2023/Auto-Bumper-Discord.git
cd discordautobump
```
2. Install dependencies: Make sure you have Node.js installed. Install the required Node.js packages using:
```bash
npm install
```
3. Setup `.env` file: Create a `.env` file in the root directory of the project, and add your account token and the channel ID where you want to bump your server.

Example `.env` file:
```
TOKEN="your_discord_token_here"
BUMP_CHANNEL="your_bump_channel_id_here"
```
4. Run the bot: Once everything is set up, you can run the bot using:
```bash
npm start
```

# How It Works

1. Selfbot: This bot operates as a selfbot, meaning it uses your own Discord account's token to send the `!d bump` command in the specified channel.
2. Randomized Timing: The bot sends the bump command (`/bump`) at random intervals between 2 hours (7,200,000 milliseconds) and 2.5 hours (9,000,000 milliseconds).
3. Bump Command: The bot fetches the channel using the channel ID provided in the `.env` file, then uses Discord's slash command API to send the `/bump` command to the Disboard bot.

# Important Notes

- Selfbots are against Discord’s Terms of Service: Running a selfbot can get your account banned, so proceed with caution. Always ensure you have the proper permissions and are aware of the risks.
- Environmental Variables: Keep your `.env` file secure as it contains your Discord token. Never share it publicly.

# Example Usage

1. Fetch the channel: The bot fetches the channel based on the ID provided in the `.env` file.
2. Bumping: It sends the `/bump` command using `channel.sendSlash` to the Disboard bot.
3. Random Timer: The bump function repeats at randomized intervals to prevent detection.

# License

This project is licensed under the MIT License.
