//
//  Generated file. Do not edit.
//

#import "GeneratedPluginRegistrant.h"

#if __has_include(<path_provider/PathProviderPlugin.h>)
#import <path_provider/PathProviderPlugin.h>
#else
@import path_provider;
#endif

#if __has_include(<qrscan/QrscanPlugin.h>)
#import <qrscan/QrscanPlugin.h>
#else
@import qrscan;
#endif

@implementation GeneratedPluginRegistrant

+ (void)registerWithRegistry:(NSObject<FlutterPluginRegistry>*)registry {
  [FLTPathProviderPlugin registerWithRegistrar:[registry registrarForPlugin:@"FLTPathProviderPlugin"]];
  [QrscanPlugin registerWithRegistrar:[registry registrarForPlugin:@"QrscanPlugin"]];
}

@end
