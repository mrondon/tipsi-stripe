import { Platform } from 'react-native'

const errorCodes = {
  busy: {
    errorCode: 'busy',
    description: 'Previous request is not completed'
  },
  cancelled: {
		errorCode: 'cancelled',
		description: 'Canceled by user',
  },
  sourceStatusCanceled: {
    errorCode: 'sourceStatusCanceled',
    description: 'Canceled by user',
  },
  sourceStatusPending: {
    errorCode: 'sourceStatusPending',
    description: 'The source has been created and is awaiting customer action',
  },
  sourceStatusFailed: {
    errorCode: 'sourceStatusFailed',
    description: 'The source status is unknown. You shouldn\'t encounter this value.',
  },
  sourceStatusUnknown: {
    errorCode: 'sourceStatusUnknown',
    description: 'Source polling unknown error',
  },
  deviceNotSupportsNativePay: {
    errorCode: 'deviceSupportsApplePay',
    description: Platform.select({
      ios: 'This device does not support Apple Pay',
      android: 'This device does not support Android Pay',
    }),
  },
  noPaymentRequest: {
    errorCode: 'noPaymentRequest',
    description: 'Missing payment request',
  },
  noMerchantIdentifier: {
    errorCode: 'noMerchantIdentifier',
    description: ' Missing merchant identifier',
  },
  noAmount: {
    errorCode: 'noAmount',
    description: 'Amount should be greater 0',
  }
  // description provided by stripe api
  api: {
    errorCode: 'api',
  },
  redirectSpecific: {
    errorCode: 'redirectSpecific',
  }
}

export default Object.freeze(errorCodes)
