## 🎬 YouTube Event Bot

Automate your YouTube channel with GitHub Actions - manage uploads, comments, analytics, and monetization tracking!

### ✨ Features

- **📹 Video Upload Automation** - Auto-upload videos from your repository
- **🗨️ Comment Moderation** - Spam detection and comment filtering
- **📊 Analytics Tracking** - Real-time viewer and engagement metrics
- **💰 Monetization Management** - Track revenue, CPM, and growth projections
- **📅 Post Scheduling** - Schedule videos and content releases
- **🔔 GitHub Integration** - Receive notifications via GitHub issues

### 🚀 Setup

#### 1. Prerequisites
- Node.js 18+
- YouTube API credentials
- GitHub personal access token

#### 2. Install Dependencies
```bash
cd bot
npm install
```

#### 3. Configure Environment
Copy `.env.example` to `.env` and fill in your credentials:
```bash
cp .env.example .env
```

Required environment variables:
```
YOUTUBE_API_KEY=<your-api-key>
YOUTUBE_CHANNEL_ID=<your-channel-id>
GITHUB_TOKEN=<your-github-token>
```

#### 4. Set GitHub Secrets
In your repository settings, add these secrets:
- `YOUTUBE_API_KEY`
- `YOUTUBE_CHANNEL_ID`

#### 5. Run the Bot
```bash
npm start
```

### 📋 Usage

#### Manual Trigger
Go to **Actions** → **Event Bot** → **Run workflow** → **Run workflow**

#### Automatic Triggers
The bot runs on:
- 📋 Issue events (open, edit, close, label)
- 🔄 Pull request events
- 📤 Push to `main` or `develop` branches
- 💬 Comments on issues/PRs

### 📊 Monetization Tracking

The bot generates monthly reports with:
- Estimated revenue
- Ad impressions & CTR
- CPM & RPM metrics
- Growth recommendations

Reports are saved to `./data/` and posted as GitHub issues.

### 🔧 Configuration

Edit `bot/config.js` to customize:
- Spam keywords
- Report frequency
- Auto-upload settings
- Moderation rules

### 📁 Project Structure
```
bot/
├── src/
│   ├── index.js                 # Main entry point
│   ├── services/
│   │   ├── YouTubeBot.js        # Video & comment management
│   │   ├── MonetizationTracker.js  # Revenue tracking
│   │   └── GitHubNotifier.js    # GitHub integration
├── .env.example                 # Environment template
├── package.json
└── README.md
```

### 🔐 Security

- API keys stored in GitHub secrets
- No sensitive data in repository
- Use `.env` for local development only
- Keep `node_modules` out of version control

### 📈 Revenue Projections

The bot calculates:
- Daily, weekly, monthly, and yearly projections
- Growth trends
- Optimization recommendations

Example report:
```json
{
  "date": "2026-06-03",
  "monetization": {
    "estimatedRevenue": 125.50,
    "adImpressions": 25000,
    "ctr": 2.5,
    "cpm": 5.02,
    "rpm": 4.80
  }
}
```

### ⚠️ Limitations

- YouTube API rate limits apply
- Comment moderation works on public comments only
- Monetization data requires YouTube Partner Program status
- Auto-upload requires proper file formatting

### 🤝 Contributing

Issues and PRs welcome! Please follow the existing code style.

### 📄 License

MIT

---

**Get started today and automate your YouTube empire! 🚀**
