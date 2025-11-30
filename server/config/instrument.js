// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration} from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://82d471d59a19e381759d26d5ab465402@o4510454021423104.ingest.us.sentry.io/4510454031187968",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()

  ]
});

