const errorCodes = {
  api: 'api',
  apiConnection: 'apiConnection',
  busy: 'busy',
  card: 'card',
  cancelled: 'cancelled',
  failedToParseResponse: 'failedToParseResponse',
  nativePayNotConfigured: 'nativePayNotConfigured',
  platformSpecific: 'platformSpecific',
  redirectSpecific: 'redirectSpecific',
  stripeAuthentication: 'stripeAuthentication',
  stripeRequest: 'stripeRequest',
  stripeSpecific: 'stripeSpecific',
  unexpected: 'unexpected',
}

export default Object.freeze(errorCodes)
