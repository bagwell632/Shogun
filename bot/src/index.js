import dotenv from 'dotenv';
import { YouTubeBot } from './services/YouTubeBot.js';
import { GitHubNotifier } from './services/GitHubNotifier.js';
import { MonetizationTracker } from './services/MonetizationTracker.js';

dotenv.config();

const bot = new YouTubeBot();
const github = new GitHubNotifier();
const monetization = new MonetizationTracker();

async function main() {
  const eventName = process.env.GITHUB_EVENT_NAME;
  const eventPath = process.env.GITHUB_EVENT_PATH;

  console.log(`🤖 Event Bot Started - Event: ${eventName}`);

  try {
    switch (eventName) {
      case 'issues':
        await handleIssueEvent();
        break;
      case 'pull_request':
        await handlePullRequestEvent();
        break;
      case 'push':
        await handlePushEvent();
        break;
      case 'workflow_dispatch':
        await handleManualTrigger();
        break;
      default:
        console.log(`Unknown event: ${eventName}`);
    }
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

async function handleIssueEvent() {
  console.log('📋 Processing issue event...');
  // Handle issue-based commands
}

async function handlePullRequestEvent() {
  console.log('🔄 Processing pull request event...');
  // Handle PR-based automation
}

async function handlePushEvent() {
  console.log('📤 Processing push event...');
  // Trigger scheduled tasks on push
  await bot.syncChannelData();
}

async function handleManualTrigger() {
  console.log('⚙️ Manual workflow trigger...');
  // Run all bot tasks
  await bot.uploadVideos();
  await bot.moderateComments();
  await monetization.generateReport();
}

main().catch(console.error);
