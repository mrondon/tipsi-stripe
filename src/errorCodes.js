const errorCodes = {
  api: 'api',
  apiConnection: 'apiConnection',
  busy: 'busy',
  card: 'card',
  failedToParseResponse: 'failedToParseResponse',
  nativePayCancelled: 'nativePayCancelled',
  nativePayNotConfigured: 'nativePayNotConfigured',
  platformSpecific: 'platformSpecific',
  stripeAuthentication: 'stripeAuthentication',
  stripeRequest: 'stripeRequest',
  stripeSpecific: 'stripeSpecific',
  unexpected: 'unexpected',
}

export default Object.freeze(errorCodes)
