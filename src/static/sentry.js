Sentry.init({
    dsn: "https://4956a10ef18b46639a286ee1fb5b4ae4@logs.syvita.org/5",
    integrations: [new Sentry.Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    sendDefaultPii: false,
});

// this acts as a safeguard to ensure everyone can prove that we are not 
// collecting user IPs. we don't want it or need it. we also have enhanced privacy
// controls to remove personally identifiable information (PII) as well as source 
// code in things like notifications. we prevent IPs being stored client-side,
// and also scrub things like passwords, MAC addresses and other similar PII from
// ever being stored on our Sentry instances.
Sentry.setUser({ ip_address: "0.0.0.0" });