import {GOOGLE_ANALYTICS_ID} from './constants'

export default function initGoogleAnalytics() {
  window.analytics.startTrackerWithId(GOOGLE_ANALYTICS_ID);
  window.analytics.setUserId((!checkAndroid()) ? "user-ios" : "user-android");
}
