package com.gettipsi.stripe;

import android.support.annotation.NonNull;

import com.gettipsi.stripe.util.ArgCheck;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by ngoriachev on 30/07/2018.
 */

public final class Errors {

  // Errors
  public static final String API = "api";
  public static final String API_CONNECTION = "apiConnection";
  public static final String BUSY = "busy";
  public static final String CANCELLED = "cancelled";
  public static final String CARD = "card";
  public static final String FAILED_TO_PARSE_RESPONSE = "failedToParseResponse";
  public static final String NATIVE_PAY_NOT_CONFIGURED = "nativePayNotConfigured";
  public static final String PLATFORM_SPECIFIC = "platformSpecific";
  public static final String STRIPE_AUTHENTICATION = "stripeAuthentication";
  public static final String STRIPE_REQUEST = "stripeRequest";
  public static final String STRIPE_SPECIFIC = "stripeSpecific";
  public static final String REDIRECT_SPECIFIC = "redirectSpecific";

  // Messages
  public static final String NO_CURRENT_ACTIVITY_MSG = "Cannot start process with no current activity";
  public static final String PURCHASE_CANCELLED_MSG = "Purchase was cancelled";
  public static final String JSON_PARSING_ERROR_MSG = "Failed to create token from JSON string";
  public static final String PLAY_SERVICES_ARE_NOT_AVAILABLE_MSG = "Play services are not available!";

  private static final Map<String, String> exceptionNameToErrorCode = new HashMap<>();

  static {
    exceptionNameToErrorCode.put("APIConnectionException", API_CONNECTION);
    exceptionNameToErrorCode.put("APIException", API);
    exceptionNameToErrorCode.put("AuthenticationException", STRIPE_AUTHENTICATION);
    exceptionNameToErrorCode.put("CardException", CARD);
    exceptionNameToErrorCode.put("InvalidRequestException", STRIPE_REQUEST);
    exceptionNameToErrorCode.put("StripeException", STRIPE_SPECIFIC);
  }

  static String toErrorCode(@NonNull Exception exception) {
    ArgCheck.nonNull(exception);
    String simpleName = exception.getClass().getSimpleName();
    String errorCode = exceptionNameToErrorCode.get(simpleName);
    ArgCheck.nonNull(errorCode, simpleName);

    return errorCode;
  }

}
