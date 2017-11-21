/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import "RNNotifications.h"




@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"glencode_react"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  // Required to register for notifications
  - (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings
  {
    [RNNotifications didRegisterUserNotificationSettings:notificationSettings];
  }
  
  - (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
  {
    [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
  }
  
  - (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];
  }
  
  // Required for the notification event.
  - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)notification {
    [RNNotifications didReceiveRemoteNotification:notification];
  }
  
  // Required for the localNotification event.
  - (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification
  {
    [RNNotifications didReceiveLocalNotification:notification];
  }
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
