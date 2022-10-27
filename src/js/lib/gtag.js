// Copyright 2012 Google Inc. All rights reserved.
(function() {

  var data = {
      "resource": {
          "version": "1",

          "macros": [{
              "function": "__e"
          }, {
              "function": "__c",
              "vtp_value": "google.cn"
          }, {
              "function": "__c",
              "vtp_value": 1
          }, {
              "vtp_signal": 0,
              "function": "__c",
              "vtp_value": 0
          }],
          "tags": [{
              "function": "__gct",
              "vtp_trackingId": "G-3F1C521DHQ",
              "vtp_sessionDuration": 0,
              "tag_id": 1
          }, {
              "function": "__ccd_conversion_marking",
              "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
              "vtp_instanceDestinationId": "G-3F1C521DHQ",
              "tag_id": 3
          }, {
              "function": "__ccd_em_page_view",
              "vtp_historyEvents": true,
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": "G-3F1C521DHQ",
              "tag_id": 5
          }, {
              "function": "__ccd_em_site_search",
              "vtp_searchQueryParams": "q,s,search,query,keyword",
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": "G-3F1C521DHQ",
              "tag_id": 6
          }, {
              "function": "__ccd_em_download",
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": "G-3F1C521DHQ",
              "tag_id": 7
          }, {
              "function": "__ccd_ga_regscope",
              "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""],
                  ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]
              ],
              "vtp_instanceDestinationId": "G-3F1C521DHQ",
              "tag_id": 8
          }, {
              "function": "__ccd_em_scroll",
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": "G-3F1C521DHQ",
              "tag_id": 9
          }, {
              "function": "__ccd_em_outbound_click",
              "priority": 0,
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": "G-3F1C521DHQ",
              "tag_id": 10
          }, {
              "function": "__ccd_em_video",
              "vtp_includeParams": true,
              "vtp_instanceDestinationId": "G-3F1C521DHQ",
              "tag_id": 11
          }, {
              "function": "__set_product_settings",
              "vtp_instanceDestinationId": "G-3F1C521DHQ",
              "vtp_foreignTldMacroResult": ["macro", 1],
              "vtp_isChinaVipRegionMacroResult": ["macro", 2],
              "tag_id": 12
          }, {
              "function": "__ogt_google_signals",
              "vtp_googleSignals": "DISABLED",
              "vtp_instanceDestinationId": "G-3F1C521DHQ",
              "vtp_serverMacroResult": ["macro", 3],
              "tag_id": 13
          }],
          "predicates": [{
              "function": "_eq",
              "arg0": ["macro", 0],
              "arg1": "gtm.js"
          }, {
              "function": "_eq",
              "arg0": ["macro", 0],
              "arg1": "gtm.init"
          }],
          "rules": [
              [
                  ["if", 0],
                  ["add", 0]
              ],
              [
                  ["if", 1],
                  ["add", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
              ]
          ]
      },
      "runtime": [
          [50, "__ccd_ga_regscope", [46, "a"],
              [50, "k", [46, "m"],
                  [22, [30, [28, [15, "i"]],
                          [21, [17, [15, "i"], "length"], 2]
                      ],
                      [46, [36, false]]
                  ],
                  [52, "n", ["l", [15, "m"]]],
                  [53, [41, "o"],
                      [3, "o", 0],
                      [63, [7, "o"],
                          [23, [15, "o"],
                              [17, [15, "n"], "length"]
                          ],
                          [33, [15, "o"],
                              [3, "o", [0, [15, "o"], 1]]
                          ],
                          [46, [53, [52, "p", [16, [15, "n"],
                                  [15, "o"]
                              ]],
                              [52, "q", [17, [15, "p"], "countryCode"]],
                              [52, "r", [17, [15, "p"], "regionCode"]],
                              [52, "s", [20, [15, "q"],
                                  [15, "i"]
                              ]],
                              [52, "t", [30, [28, [15, "r"]],
                                  [20, [15, "r"],
                                      [15, "j"]
                                  ]
                              ]],
                              [22, [1, [15, "s"],
                                      [15, "t"]
                                  ],
                                  [46, [36, true]]
                              ]
                          ]]
                      ]
                  ],
                  [36, false]
              ],
              [50, "l", [46, "m"],
                  [52, "n", [7]],
                  [22, [28, [15, "m"]],
                      [46, [36, [15, "n"]]]
                  ],
                  [52, "o", [2, [15, "m"], "split", [7, ","]]],
                  [53, [41, "p"],
                      [3, "p", 0],
                      [63, [7, "p"],
                          [23, [15, "p"],
                              [17, [15, "o"], "length"]
                          ],
                          [33, [15, "p"],
                              [3, "p", [0, [15, "p"], 1]]
                          ],
                          [46, [53, [52, "q", [2, [16, [15, "o"],
                                  [15, "p"]
                              ], "trim", [7]]],
                              [22, [28, [15, "q"]],
                                  [46, [6]]
                              ],
                              [52, "r", [2, [15, "q"], "split", [7, "-"]]],
                              [52, "s", [16, [15, "r"], 0]],
                              [52, "t", [39, [20, [17, [15, "r"], "length"], 2],
                                  [15, "q"],
                                  [44]
                              ]],
                              [22, [30, [28, [15, "s"]],
                                      [21, [17, [15, "s"], "length"], 2]
                                  ],
                                  [46, [6]]
                              ],
                              [22, [1, [21, [15, "t"],
                                          [44]
                                      ],
                                      [30, [23, [17, [15, "t"], "length"], 4],
                                          [18, [17, [15, "t"], "length"], 6]
                                      ]
                                  ],
                                  [46, [6]]
                              ],
                              [2, [15, "n"], "push", [7, [8, "countryCode", [15, "s"], "regionCode", [15, "t"]]]]
                          ]]
                      ]
                  ],
                  [36, [15, "n"]]
              ],
              [52, "b", ["require", "getContainerVersion"]],
              [52, "c", ["require", "internal.setRemoteConfigParameter"]],
              [52, "d", ["require", "internal.getCountryCode"]],
              [52, "e", ["require", "internal.getRegionCode"]],
              [22, [28, [17, [15, "a"], "settingsTable"]],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [41, "f"],
              [52, "g", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true],
                  [8, "name", "redact_device_info", "value", true]
              ]]],
              [52, "h", [30, [17, [15, "a"], "instanceDestinationId"],
                  [17, ["b"], "containerId"]
              ]],
              [52, "i", ["d"]],
              [52, "j", ["e"]],
              [53, [41, "m"],
                  [3, "m", 0],
                  [63, [7, "m"],
                      [23, [15, "m"],
                          [17, [17, [15, "a"], "settingsTable"], "length"]
                      ],
                      [33, [15, "m"],
                          [3, "m", [0, [15, "m"], 1]]
                      ],
                      [46, [53, [52, "n", [16, [17, [15, "a"], "settingsTable"],
                              [15, "m"]
                          ]],
                          [22, [30, [17, [15, "n"], "disallowAllRegions"],
                                  ["k", [17, [15, "n"], "disallowedRegions"]]
                              ],
                              [46, [53, [52, "o", [16, [15, "g"],
                                      [17, [15, "n"], "redactFieldGroup"]
                                  ]],
                                  [22, [28, [15, "o"]],
                                      [46, [6]]
                                  ],
                                  [53, [41, "p"],
                                      [3, "p", 0],
                                      [63, [7, "p"],
                                          [23, [15, "p"],
                                              [17, [15, "o"], "length"]
                                          ],
                                          [33, [15, "p"],
                                              [3, "p", [0, [15, "p"], 1]]
                                          ],
                                          [46, [53, [52, "q", [16, [15, "o"],
                                                  [15, "p"]
                                              ]],
                                              ["c", [15, "h"],
                                                  [17, [15, "q"], "name"],
                                                  [17, [15, "q"], "value"]
                                              ]
                                          ]]
                                      ]
                                  ]
                              ]]
                          ]
                      ]]
                  ]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_conversion_marking", [46, "a"],
              [50, "m", [46, "n"],
                  [52, "o", [2, [15, "j"], "parse", [7, [15, "n"]]]],
                  [22, [30, [30, [28, [15, "o"]],
                              [28, [16, [15, "o"], "args"]]
                          ],
                          [21, [17, [16, [15, "o"], "args"], "length"], 2]
                      ],
                      [46, [36]]
                  ],
                  [52, "p", [16, [16, [16, [15, "o"], "args"], 1], "contextValue"]],
                  [22, [30, [30, [30, [28, [15, "p"]],
                                  [21, [16, [15, "p"], "namespaceType"], 1]
                              ],
                              [21, [17, [16, [15, "p"], "keyParts"], "length"], 1]
                          ],
                          [21, [16, [16, [15, "p"], "keyParts"], 0], "eventName"]
                      ],
                      [46, [36, [44]]]
                  ],
                  [52, "q", [16, [16, [15, "o"], "args"], 0]],
                  [36, [1, [15, "q"],
                      [16, [15, "q"], "stringValue"]
                  ]]
              ],
              [22, [30, [28, [17, [15, "a"], "conversionRules"]],
                      [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "b", ["require", "internal.evaluateBooleanExpression"]],
              [52, "c", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", "is_conversion"],
              [52, "f", "syn_or_mod"],
              [22, [16, [15, "c"], "enableCcdGaConversions"],
                  [46, ["d", [17, [15, "a"], "instanceDestinationId"],
                          [51, "", [7, "n"],
                              [22, [2, [15, "n"], "getMetadata", [7, [15, "f"]]],
                                  [46, [36]]
                              ],
                              [52, "o", [8, "preHit", [15, "n"]]],
                              [65, "p", [17, [15, "a"], "conversionRules"],
                                  [46, [22, ["b", [17, [15, "p"], "matchingRules"],
                                          [15, "o"]
                                      ],
                                      [46, [2, [15, "n"], "setMetadata", [7, [15, "e"], true]],
                                          [4]
                                      ]
                                  ]]
                              ]
                          ]
                      ],
                      [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "g", ["require", "internal.setProductSettingsParameter"]],
              [52, "h", ["require", "internal.getProductSettingsParameter"]],
              [52, "i", ["require", "getContainerVersion"]],
              [52, "j", ["require", "JSON"]],
              [52, "k", [30, [17, [15, "a"], "instanceDestinationId"],
                  [17, ["i"], "containerId"]
              ]],
              [52, "l", [30, ["h", [15, "k"], "event_settings"],
                  [8]
              ]],
              [53, [41, "n"],
                  [3, "n", 0],
                  [63, [7, "n"],
                      [23, [15, "n"],
                          [17, [17, [15, "a"], "conversionRules"], "length"]
                      ],
                      [33, [15, "n"],
                          [3, "n", [0, [15, "n"], 1]]
                      ],
                      [46, [53, [52, "o", ["m", [16, [16, [17, [15, "a"], "conversionRules"],
                              [15, "n"]
                          ], "matchingRules"]]],
                          [22, [28, [15, "o"]],
                              [46, [6]]
                          ],
                          [41, "p"],
                          [3, "p", [16, [15, "l"],
                              [15, "o"]
                          ]],
                          [22, [28, [15, "p"]],
                              [46, [3, "p", [8]],
                                  [43, [15, "l"],
                                      [15, "o"],
                                      [15, "p"]
                                  ]
                              ]
                          ],
                          [43, [15, "p"], "conversion", true]
                      ]]
                  ]
              ],
              ["g", [15, "k"], "event_settings", [15, "l"]],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_scroll", [46, "a"],
              [50, "r", [46, "s"],
                  [52, "t", [8]],
                  [43, [15, "t"],
                      [15, "j"], true
                  ],
                  [43, [15, "t"],
                      [15, "f"], true
                  ],
                  [43, [15, "s"], "eventMetadata", [15, "t"]]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "templateStorage"]],
              [52, "f", "speculative"],
              [52, "g", "ae_block_scroll"],
              [52, "h", "scroll"],
              [52, "i", "isRegistered"],
              [52, "j", "em_event"],
              [52, "k", [17, [15, "a"], "instanceDestinationId"]],
              [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
              [22, ["c", [15, "k"],
                      [15, "g"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [22, [15, "l"],
                  [46, ["d", [15, "k"],
                      [51, "", [7, "s"],
                          [22, [30, [21, [2, [15, "s"], "getEventName", [7]],
                                      [15, "h"]
                                  ],
                                  [28, [2, [15, "s"], "getMetadata", [7, [15, "j"]]]]
                              ],
                              [46, [36]]
                          ],
                          [22, ["c", [15, "k"],
                                  [15, "g"]
                              ],
                              [46, [2, [15, "s"], "abort", [7]],
                                  [36]
                              ]
                          ],
                          [2, [15, "s"], "setMetadata", [7, [15, "f"], false]],
                          [22, [28, [17, [15, "a"], "includeParams"]],
                              [46, [2, [15, "s"], "setHitData", [7, "percent_scrolled", [44]]]]
                          ]
                      ]
                  ]]
              ],
              [22, [1, [15, "l"],
                      [2, [15, "e"], "getItem", [7, [15, "i"]]]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "m", ["require", "internal.addDataLayerEventListener"]],
              [52, "n", ["require", "internal.enableAutoEventOnScroll"]],
              [52, "o", ["require", "internal.getDestinationIds"]],
              [52, "p", ["require", "internal.sendGtagEvent"]],
              [52, "q", ["n", [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90]]],
              [22, [28, [15, "q"]],
                  [46, [2, [15, "a"], "gtmOnFailure", [7]],
                      [36]
                  ]
              ],
              [2, [15, "e"], "setItem", [7, [15, "i"], true]],
              ["m", "gtm.scrollDepth", [51, "", [7, "s", "t"],
                      ["t"],
                      [52, "u", [8]],
                      [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                          [46, [43, [15, "u"], "eventId", [16, [15, "s"], "gtm.uniqueEventId"]]]
                      ],
                      [22, [28, [15, "l"]],
                          [46, [53, [52, "w", [39, [28, [28, [17, [15, "a"], "includeParams"]]],
                                  [8, "percent_scrolled", [16, [15, "s"], "gtm.scrollThreshold"]],
                                  [8]
                              ]],
                              ["p", [15, "k"],
                                  [15, "h"],
                                  [15, "w"],
                                  [15, "u"]
                              ],
                              [36]
                          ]]
                      ],
                      [52, "v", [8, "percent_scrolled", [16, [15, "s"], "gtm.scrollThreshold"]]],
                      ["r", [15, "u"]],
                      ["p", ["o"],
                          [15, "h"],
                          [15, "v"],
                          [15, "u"]
                      ]
                  ],
                  [15, "q"]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_video", [46, "a"],
              [50, "t", [46, "u"],
                  [52, "v", [8]],
                  [43, [15, "v"],
                      [15, "l"], true
                  ],
                  [43, [15, "v"],
                      [15, "f"], true
                  ],
                  [43, [15, "u"], "eventMetadata", [15, "v"]]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "templateStorage"]],
              [52, "f", "speculative"],
              [52, "g", "ae_block_video"],
              [52, "h", "video_start"],
              [52, "i", "video_progress"],
              [52, "j", "video_complete"],
              [52, "k", "isRegistered"],
              [52, "l", "em_event"],
              [52, "m", [17, [15, "a"], "instanceDestinationId"]],
              [22, ["c", [15, "m"],
                      [15, "g"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "n", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
              [22, [15, "n"],
                  [46, ["d", [15, "m"],
                      [51, "", [7, "u"],
                          [52, "v", [2, [15, "u"], "getEventName", [7]]],
                          [52, "w", [30, [30, [20, [15, "v"],
                                      [15, "h"]
                                  ],
                                  [20, [15, "v"],
                                      [15, "i"]
                                  ]
                              ],
                              [20, [15, "v"],
                                  [15, "j"]
                              ]
                          ]],
                          [22, [30, [28, [15, "w"]],
                                  [28, [2, [15, "u"], "getMetadata", [7, [15, "l"]]]]
                              ],
                              [46, [36]]
                          ],
                          [22, ["c", [15, "m"],
                                  [15, "g"]
                              ],
                              [46, [2, [15, "u"], "abort", [7]],
                                  [36]
                              ]
                          ],
                          [2, [15, "u"], "setMetadata", [7, [15, "f"], false]],
                          [22, [28, [17, [15, "a"], "includeParams"]],
                              [46, [2, [15, "u"], "setHitData", [7, "video_current_time", [44]]],
                                  [2, [15, "u"], "setHitData", [7, "video_duration", [44]]],
                                  [2, [15, "u"], "setHitData", [7, "video_percent", [44]]],
                                  [2, [15, "u"], "setHitData", [7, "video_provider", [44]]],
                                  [2, [15, "u"], "setHitData", [7, "video_title", [44]]],
                                  [2, [15, "u"], "setHitData", [7, "video_url", [44]]],
                                  [2, [15, "u"], "setHitData", [7, "visible", [44]]]
                              ]
                          ]
                      ]
                  ]]
              ],
              [22, [1, [15, "n"],
                      [2, [15, "e"], "getItem", [7, [15, "k"]]]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "o", ["require", "internal.addDataLayerEventListener"]],
              [52, "p", ["require", "internal.enableAutoEventOnYouTubeActivity"]],
              [52, "q", ["require", "internal.getDestinationIds"]],
              [52, "r", ["require", "internal.sendGtagEvent"]],
              [52, "s", ["p", [8, "captureComplete", true, "captureStart", true, "progressThresholdsPercent", [7, 10, 25, 50, 75]]]],
              [22, [28, [15, "s"]],
                  [46, [2, [15, "a"], "gtmOnFailure", [7]],
                      [36]
                  ]
              ],
              [2, [15, "e"], "setItem", [7, [15, "k"], true]],
              ["o", "gtm.video", [51, "", [7, "u", "v"],
                      ["v"],
                      [52, "w", [16, [15, "u"], "gtm.videoStatus"]],
                      [41, "x"],
                      [22, [20, [15, "w"], "start"],
                          [46, [3, "x", [15, "h"]]],
                          [46, [22, [20, [15, "w"], "progress"],
                              [46, [3, "x", [15, "i"]]],
                              [46, [22, [20, [15, "w"], "complete"],
                                  [46, [3, "x", [15, "j"]]],
                                  [46, [36]]
                              ]]
                          ]]
                      ],
                      [52, "y", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]],
                              [15, "n"]
                          ],
                          [8, "video_current_time", [16, [15, "u"], "gtm.videoCurrentTime"], "video_duration", [16, [15, "u"], "gtm.videoDuration"], "video_percent", [16, [15, "u"], "gtm.videoPercent"], "video_provider", [16, [15, "u"], "gtm.videoProvider"], "video_title", [16, [15, "u"], "gtm.videoTitle"], "video_url", [16, [15, "u"], "gtm.videoUrl"], "visible", [16, [15, "u"], "gtm.videoVisible"]],
                          [8]
                      ]],
                      [52, "z", [8]],
                      [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                          [46, [43, [15, "z"], "eventId", [16, [15, "u"], "gtm.uniqueEventId"]]]
                      ],
                      [22, [15, "n"],
                          [46, ["t", [15, "z"]],
                              ["r", ["q"],
                                  [15, "x"],
                                  [15, "y"],
                                  [15, "z"]
                              ]
                          ],
                          [46, ["r", [15, "m"],
                              [15, "x"],
                              [15, "y"],
                              [15, "z"]
                          ]]
                      ]
                  ],
                  [15, "s"]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_download", [46, "a"],
              [50, "s", [46, "y"],
                  [36, [1, [15, "y"],
                      [21, [2, [2, [15, "y"], "toLowerCase", [7]], "match", [7, [15, "r"]]],
                          [45]
                      ]
                  ]]
              ],
              [50, "t", [46, "y"],
                  [52, "z", [2, [17, [15, "y"], "pathname"], "split", [7, "."]]],
                  [52, "ba", [39, [18, [17, [15, "z"], "length"], 1],
                      [16, [15, "z"],
                          [37, [17, [15, "z"], "length"], 1]
                      ], ""
                  ]],
                  [36, [16, [2, [15, "ba"], "split", [7, "/"]], 0]]
              ],
              [50, "u", [46, "y"],
                  [36, [39, [12, [2, [17, [15, "y"], "pathname"], "substring", [7, 0, 1]], "/"],
                      [17, [15, "y"], "pathname"],
                      [0, "/", [17, [15, "y"], "pathname"]]
                  ]]
              ],
              [50, "v", [46, "y"],
                  [41, "z"],
                  [3, "z", ""],
                  [22, [1, [15, "y"],
                          [17, [15, "y"], "href"]
                      ],
                      [46, [53, [41, "ba"],
                          [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]],
                          [3, "z", [39, [23, [15, "ba"], 0],
                              [17, [15, "y"], "href"],
                              [2, [17, [15, "y"], "href"], "substring", [7, 0, [15, "ba"]]]
                          ]]
                      ]]
                  ],
                  [36, [15, "z"]]
              ],
              [50, "x", [46, "y"],
                  [52, "z", [8]],
                  [43, [15, "z"],
                      [15, "j"], true
                  ],
                  [43, [15, "z"],
                      [15, "f"], true
                  ],
                  [43, [15, "y"], "eventMetadata", [15, "z"]]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "templateStorage"]],
              [52, "f", "speculative"],
              [52, "g", "ae_block_downloads"],
              [52, "h", "file_download"],
              [52, "i", "isRegistered"],
              [52, "j", "em_event"],
              [52, "k", [17, [15, "a"], "instanceDestinationId"]],
              [22, ["c", [15, "k"],
                      [15, "g"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
              [22, [15, "l"],
                  [46, ["d", [15, "k"],
                      [51, "", [7, "y"],
                          [22, [30, [21, [2, [15, "y"], "getEventName", [7]],
                                      [15, "h"]
                                  ],
                                  [28, [2, [15, "y"], "getMetadata", [7, [15, "j"]]]]
                              ],
                              [46, [36]]
                          ],
                          [22, ["c", [15, "k"],
                                  [15, "g"]
                              ],
                              [46, [2, [15, "y"], "abort", [7]],
                                  [36]
                              ]
                          ],
                          [2, [15, "y"], "setMetadata", [7, [15, "f"], false]],
                          [22, [28, [17, [15, "a"], "includeParams"]],
                              [46, [2, [15, "y"], "setHitData", [7, "link_id", [44]]],
                                  [2, [15, "y"], "setHitData", [7, "link_url", [44]]],
                                  [2, [15, "y"], "setHitData", [7, "link_text", [44]]],
                                  [2, [15, "y"], "setHitData", [7, "file_name", [44]]],
                                  [2, [15, "y"], "setHitData", [7, "file_extension", [44]]]
                              ]
                          ]
                      ]
                  ]]
              ],
              [22, [1, [15, "l"],
                      [2, [15, "e"], "getItem", [7, [15, "i"]]]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "m", ["require", "internal.addDataLayerEventListener"]],
              [52, "n", ["require", "internal.enableAutoEventOnLinkClick"]],
              [52, "o", ["require", "internal.getDestinationIds"]],
              [52, "p", ["require", "parseUrl"]],
              [52, "q", ["require", "internal.sendGtagEvent"]],
              [52, "r", [0, "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|", "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma"]],
              [52, "w", ["n", [8, "checkValidation", true]]],
              [22, [28, [15, "w"]],
                  [46, [2, [15, "a"], "gtmOnFailure", [7]],
                      [36]
                  ]
              ],
              [2, [15, "e"], "setItem", [7, [15, "i"], true]],
              ["m", "gtm.linkClick", [51, "", [7, "y", "z"],
                      ["z"],
                      [52, "ba", [8]],
                      [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                          [46, [43, [15, "ba"], "eventId", [16, [15, "y"], "gtm.uniqueEventId"]]]
                      ],
                      [52, "bb", [16, [15, "y"], "gtm.elementUrl"]],
                      [52, "bc", ["p", [15, "bb"]]],
                      [22, [28, [15, "bc"]],
                          [46, [36]]
                      ],
                      [52, "bd", ["t", [15, "bc"]]],
                      [22, [28, ["s", [15, "bd"]]],
                          [46, [36]]
                      ],
                      [52, "be", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]],
                              [15, "l"]
                          ],
                          [8, "link_id", [16, [15, "y"], "gtm.elementId"], "link_url", ["v", [15, "bc"]], "link_text", [16, [15, "y"], "gtm.elementText"], "file_name", ["u", [15, "bc"]], "file_extension", [15, "bd"]],
                          [8]
                      ]],
                      [22, [15, "l"],
                          [46, ["x", [15, "ba"]],
                              ["q", ["o"],
                                  [15, "h"],
                                  [15, "be"],
                                  [15, "ba"]
                              ]
                          ],
                          [46, ["q", [15, "k"],
                              [15, "h"],
                              [15, "be"],
                              [15, "ba"]
                          ]]
                      ]
                  ],
                  [15, "w"]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ogt_google_signals", [46, "a"],
              [52, "b", ["require", "internal.setProductSettingsParameter"]],
              [52, "c", ["require", "getContainerVersion"]],
              [52, "d", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "e", [30, [17, [15, "a"], "instanceDestinationId"],
                  [17, ["c"], "containerId"]
              ]],
              ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]],
              [22, [17, [15, "d"], "enableGa4OnoRemarketing"],
                  [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_outbound_click", [46, "a"],
              [50, "t", [46, "z"],
                  [22, [28, [15, "z"]],
                      [46, [36, [44]]]
                  ],
                  [41, "ba"],
                  [3, "ba", ""],
                  [22, [1, [15, "z"],
                          [17, [15, "z"], "href"]
                      ],
                      [46, [53, [41, "bb"],
                          [3, "bb", [2, [17, [15, "z"], "href"], "indexOf", [7, "#"]]],
                          [3, "ba", [39, [23, [15, "bb"], 0],
                              [17, [15, "z"], "href"],
                              [2, [17, [15, "z"], "href"], "substring", [7, 0, [15, "bb"]]]
                          ]]
                      ]]
                  ],
                  [36, [15, "ba"]]
              ],
              [50, "u", [46, "z"],
                  [22, [28, [15, "z"]],
                      [46, [36, [44]]]
                  ],
                  [41, "ba"],
                  [3, "ba", [17, [15, "z"], "hostname"]],
                  [52, "bb", [2, [15, "ba"], "match", [7, "^www\\d*\\."]]],
                  [22, [1, [15, "bb"],
                          [16, [15, "bb"], 0]
                      ],
                      [46, [3, "ba", [2, [15, "ba"], "substring", [7, [17, [16, [15, "bb"], 0], "length"]]]]]
                  ],
                  [36, [15, "ba"]]
              ],
              [50, "v", [46, "z"],
                  [22, [28, [15, "z"]],
                      [46, [36, false]]
                  ],
                  [52, "ba", [2, [17, [15, "z"], "hostname"], "toLowerCase", [7]]],
                  [41, "bb"],
                  [3, "bb", [2, ["u", ["r", ["q"]]], "toLowerCase", [7]]],
                  [41, "bc"],
                  [3, "bc", [37, [17, [15, "ba"], "length"],
                      [17, [15, "bb"], "length"]
                  ]],
                  [22, [1, [18, [15, "bc"], 0],
                          [29, [2, [15, "bb"], "charAt", [7, 0]], "."]
                      ],
                      [46, [32, [15, "bc"],
                              [3, "bc", [37, [15, "bc"], 1]]
                          ],
                          [3, "bb", [0, ".", [15, "bb"]]]
                      ]
                  ],
                  [22, [1, [19, [15, "bc"], 0],
                          [12, [2, [15, "ba"], "indexOf", [7, [15, "bb"],
                                  [15, "bc"]
                              ]],
                              [15, "bc"]
                          ]
                      ],
                      [46, [36, false]]
                  ],
                  [36, true]
              ],
              [50, "y", [46, "z"],
                  [52, "ba", [8]],
                  [43, [15, "ba"],
                      [15, "j"], true
                  ],
                  [43, [15, "ba"],
                      [15, "f"], true
                  ],
                  [43, [15, "z"], "eventMetadata", [15, "ba"]]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "templateStorage"]],
              [52, "f", "speculative"],
              [52, "g", "ae_block_outbound_click"],
              [52, "h", "click"],
              [52, "i", "isRegistered"],
              [52, "j", "em_event"],
              [52, "k", [17, [15, "a"], "instanceDestinationId"]],
              [22, ["c", [15, "k"],
                      [15, "g"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
              [22, [15, "l"],
                  [46, ["d", [15, "k"],
                      [51, "", [7, "z"],
                          [22, [30, [21, [2, [15, "z"], "getEventName", [7]],
                                      [15, "h"]
                                  ],
                                  [28, [2, [15, "z"], "getMetadata", [7, [15, "j"]]]]
                              ],
                              [46, [36]]
                          ],
                          [22, ["c", [15, "k"],
                                  [15, "g"]
                              ],
                              [46, [2, [15, "z"], "abort", [7]],
                                  [36]
                              ]
                          ],
                          [2, [15, "z"], "setMetadata", [7, [15, "f"], false]],
                          [22, [28, [17, [15, "a"], "includeParams"]],
                              [46, [2, [15, "z"], "setHitData", [7, "link_id", [44]]],
                                  [2, [15, "z"], "setHitData", [7, "link_classes", [44]]],
                                  [2, [15, "z"], "setHitData", [7, "link_url", [44]]],
                                  [2, [15, "z"], "setHitData", [7, "link_domain", [44]]],
                                  [2, [15, "z"], "setHitData", [7, "outbound", [44]]]
                              ]
                          ]
                      ]
                  ]]
              ],
              [22, [1, [15, "l"],
                      [2, [15, "e"], "getItem", [7, [15, "i"]]]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "m", ["require", "internal.addDataLayerEventListener"]],
              [52, "n", ["require", "internal.enableAutoEventOnLinkClick"]],
              [52, "o", ["require", "internal.getDestinationIds"]],
              [52, "p", ["require", "internal.getRemoteConfigParameter"]],
              [52, "q", ["require", "getUrl"]],
              [52, "r", ["require", "parseUrl"]],
              [52, "s", ["require", "internal.sendGtagEvent"]],
              [52, "w", ["p", [15, "k"], "cross_domain_conditions"]],
              [52, "x", ["n", [8, "affiliateDomains", [15, "w"], "checkValidation", true, "waitForTags", false]]],
              [22, [28, [15, "x"]],
                  [46, [2, [15, "a"], "gtmOnFailure", [7]],
                      [36]
                  ]
              ],
              [2, [15, "e"], "setItem", [7, [15, "i"], true]],
              ["m", "gtm.linkClick", [51, "", [7, "z", "ba"],
                      [52, "bb", ["r", [16, [15, "z"], "gtm.elementUrl"]]],
                      [22, [28, ["v", [15, "bb"]]],
                          [46, ["ba"],
                              [36]
                          ]
                      ],
                      [52, "bc", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]],
                              [15, "l"]
                          ],
                          [8, "link_id", [16, [15, "z"], "gtm.elementId"], "link_classes", [16, [15, "z"], "gtm.elementClasses"], "link_url", ["t", [15, "bb"]], "link_domain", ["u", [15, "bb"]], "outbound", true],
                          [8]
                      ]],
                      [43, [15, "bc"], "event_callback", [15, "ba"]],
                      [52, "bd", [8]],
                      [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                          [46, [43, [15, "bd"], "eventId", [16, [15, "z"], "gtm.uniqueEventId"]]]
                      ],
                      [22, [15, "l"],
                          [46, ["y", [15, "bd"]],
                              ["s", ["o"],
                                  [15, "h"],
                                  [15, "bc"],
                                  [15, "bd"]
                              ]
                          ],
                          [46, ["s", [15, "k"],
                              [15, "h"],
                              [15, "bc"],
                              [15, "bd"]
                          ]]
                      ]
                  ],
                  [15, "x"]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_site_search", [46, "a"],
              [50, "f", [46, "k"],
                  [52, "l", [2, [30, [15, "k"], ""], "split", [7, ","]]],
                  [53, [41, "m"],
                      [3, "m", 0],
                      [63, [7, "m"],
                          [23, [15, "m"],
                              [17, [15, "l"], "length"]
                          ],
                          [33, [15, "m"],
                              [3, "m", [0, [15, "m"], 1]]
                          ],
                          [46, [53, [52, "n", ["c", [2, [16, [15, "l"],
                                  [15, "m"]
                              ], "trim", [7]]]],
                              [22, [21, [15, "n"],
                                      [44]
                                  ],
                                  [46, [36, [15, "n"]]]
                              ]
                          ]]
                      ]
                  ]
              ],
              [50, "g", [46, "k", "l"],
                  [52, "m", [8, "search_term", [15, "k"]]],
                  [52, "n", [2, [30, [15, "l"], ""], "split", [7, ","]]],
                  [53, [41, "o"],
                      [3, "o", 0],
                      [63, [7, "o"],
                          [23, [15, "o"],
                              [17, [15, "n"], "length"]
                          ],
                          [33, [15, "o"],
                              [3, "o", [0, [15, "o"], 1]]
                          ],
                          [46, [53, [52, "p", [2, [16, [15, "n"],
                                  [15, "o"]
                              ], "trim", [7]]],
                              [52, "q", ["c", [15, "p"]]],
                              [22, [21, [15, "q"],
                                      [44]
                                  ],
                                  [46, [43, [15, "m"],
                                      [0, "q_", [15, "p"]],
                                      [15, "q"]
                                  ]]
                              ]
                          ]]
                      ]
                  ],
                  [36, [15, "m"]]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "getQueryParameters"]],
              [52, "d", ["require", "internal.sendGtagEvent"]],
              [52, "e", ["require", "getContainerVersion"]],
              [52, "h", ["f", [17, [15, "a"], "searchQueryParams"]]],
              [52, "i", [30, [17, [15, "a"], "instanceDestinationId"],
                  [17, ["e"], "containerId"]
              ]],
              [52, "j", [8, "deferrable", true]],
              [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                  [46, [43, [15, "j"], "eventId", [17, [15, "a"], "gtmEventId"]]]
              ],
              [22, [15, "h"],
                  [46, [53, [52, "k", [39, [28, [28, [17, [15, "a"], "includeParams"]]],
                          ["g", [15, "h"],
                              [17, [15, "a"], "additionalQueryParams"]
                          ],
                          [8]
                      ]],
                      ["d", [15, "i"], "view_search_results", [15, "k"],
                          [15, "j"]
                      ]
                  ]]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__set_product_settings", [46, "a"],
              [52, "b", ["require", "internal.setProductSettingsParameter"]],
              [52, "c", ["require", "getContainerVersion"]],
              [52, "d", [30, [17, [15, "a"], "instanceDestinationId"],
                  [17, ["c"], "containerId"]
              ]],
              ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]],
              ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ],
          [50, "__ccd_em_page_view", [46, "a"],
              [50, "s", [46, "t"],
                  [52, "u", [8]],
                  [43, [15, "u"],
                      [15, "k"], true
                  ],
                  [43, [15, "u"],
                      [15, "g"], true
                  ],
                  [43, [15, "t"], "eventMetadata", [15, "u"]]
              ],
              [22, [28, [17, [15, "a"], "historyEvents"]],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "b", [13, [41, "$0"],
                  [3, "$0", ["require", "internal.getFlags"]],
                  ["$0"]
              ]],
              [52, "c", ["require", "internal.getProductSettingsParameter"]],
              [52, "d", ["require", "internal.registerCcdCallback"]],
              [52, "e", ["require", "internal.setRemoteConfigParameter"]],
              [52, "f", ["require", "templateStorage"]],
              [52, "g", "speculative"],
              [52, "h", "ae_block_history"],
              [52, "i", "page_view"],
              [52, "j", "isRegistered"],
              [52, "k", "em_event"],
              [52, "l", [17, [15, "a"], "instanceDestinationId"]],
              [22, ["c", [15, "l"],
                      [15, "h"]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "m", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
              [22, [15, "m"],
                  [46, ["d", [15, "l"],
                      [51, "", [7, "t"],
                          [22, [30, [21, [2, [15, "t"], "getEventName", [7]],
                                      [15, "i"]
                                  ],
                                  [28, [2, [15, "t"], "getMetadata", [7, [15, "k"]]]]
                              ],
                              [46, [36]]
                          ],
                          [22, ["c", [15, "l"],
                                  [15, "h"]
                              ],
                              [46, [2, [15, "t"], "abort", [7]],
                                  [36]
                              ]
                          ],
                          [2, [15, "t"], "setMetadata", [7, [15, "g"], false]],
                          ["e", [15, "l"], "page_referrer", [2, [15, "t"], "getHitData", [7, "page_referrer"]]],
                          [22, [28, [17, [15, "a"], "includeParams"]],
                              [46, [2, [15, "t"], "setHitData", [7, "page_location", [44]]],
                                  [2, [15, "t"], "setHitData", [7, "page_referrer", [44]]]
                              ]
                          ]
                      ]
                  ]]
              ],
              [22, [1, [15, "m"],
                      [2, [15, "f"], "getItem", [7, [15, "j"]]]
                  ],
                  [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                      [36]
                  ]
              ],
              [52, "n", ["require", "internal.addDataLayerEventListener"]],
              [52, "o", ["require", "internal.enableAutoEventOnHistoryChange"]],
              [52, "p", ["require", "internal.getDestinationIds"]],
              [52, "q", ["require", "internal.sendGtagEvent"]],
              [52, "r", ["o", [8, "interval", 1000]]],
              [22, [28, [15, "r"]],
                  [46, [2, [15, "a"], "gtmOnFailure", [7]],
                      [36]
                  ]
              ],
              [2, [15, "f"], "setItem", [7, [15, "j"], true]],
              ["n", "gtm.historyChange-v2", [51, "", [7, "t", "u"],
                      ["u"],
                      [52, "v", [16, [15, "t"], "gtm.oldUrl"]],
                      [22, [20, [16, [15, "t"], "gtm.newUrl"],
                              [15, "v"]
                          ],
                          [46, [36]]
                      ],
                      [52, "w", [16, [15, "t"], "gtm.historyChangeSource"]],
                      [22, [1, [1, [21, [15, "w"], "pushState"],
                                  [21, [15, "w"], "popstate"]
                              ],
                              [21, [15, "w"], "replaceState"]
                          ],
                          [46, [36]]
                      ],
                      [52, "x", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]],
                              [15, "m"]
                          ],
                          [8, "page_location", [16, [15, "t"], "gtm.newUrl"], "page_referrer", [15, "v"]],
                          [8]
                      ]],
                      [52, "y", [8]],
                      [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                          [46, [43, [15, "y"], "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]]
                      ],
                      [22, [15, "m"],
                          [46, ["s", [15, "y"]],
                              ["q", ["p"],
                                  [15, "i"],
                                  [15, "x"],
                                  [15, "y"]
                              ]
                          ],
                          [46, ["q", [15, "l"],
                                  [15, "i"],
                                  [15, "x"],
                                  [15, "y"]
                              ],
                              ["e", [15, "l"], "page_referrer", [15, "v"]]
                          ]
                      ]
                  ],
                  [15, "r"]
              ],
              [2, [15, "a"], "gtmOnSuccess", [7]]
          ]
      ],
      "permissions": {
          "__ccd_ga_regscope": {
              "read_container_data": {}
          },
          "__ccd_conversion_marking": {
              "read_container_data": {}
          },
          "__ccd_em_scroll": {
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.scrollDepth"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "window",
                      "eventName": "resize"
                  }, {
                      "targetType": "window",
                      "eventName": "scroll"
                  }]
              },
              "access_template_storage": {}
          },
          "__ccd_em_video": {
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.video"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "element",
                      "eventName": "onStateChange"
                  }, {
                      "targetType": "element",
                      "eventName": "onPlaybackRateChange"
                  }]
              },
              "access_template_storage": {}
          },
          "__ccd_em_download": {
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.linkClick"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "document",
                      "eventName": "click"
                  }, {
                      "targetType": "document",
                      "eventName": "auxclick"
                  }]
              },
              "access_template_storage": {}
          },
          "__ogt_google_signals": {
              "read_container_data": {}
          },
          "__ccd_em_outbound_click": {
              "get_url": {
                  "urlParts": "any",
                  "queriesAllowed": "any"
              },
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.linkClick"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "document",
                      "eventName": "click"
                  }, {
                      "targetType": "document",
                      "eventName": "auxclick"
                  }]
              },
              "access_template_storage": {}
          },
          "__ccd_em_site_search": {
              "get_url": {
                  "urlParts": "any",
                  "queriesAllowed": "any"
              },
              "read_container_data": {}
          },
          "__set_product_settings": {
              "read_container_data": {}
          },
          "__ccd_em_page_view": {
              "listen_data_layer": {
                  "accessType": "specific",
                  "allowedEvents": ["gtm.historyChange-v2"]
              },
              "process_dom_events": {
                  "targets": [{
                      "targetType": "window",
                      "eventName": "pushstate"
                  }, {
                      "targetType": "window",
                      "eventName": "popstate"
                  }]
              },
              "access_template_storage": {}
          }
      }

      ,
      "security_groups": {
          "google": ["__ccd_ga_regscope", "__ccd_conversion_marking", "__ccd_em_scroll", "__ccd_em_video", "__ccd_em_download", "__ogt_google_signals", "__ccd_em_outbound_click", "__ccd_em_site_search", "__set_product_settings", "__ccd_em_page_view"]
      }


  };


  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var ba, ca = function(a) {
          var b = 0;
          return function() {
              return b < a.length ? {
                  done: !1,
                  value: a[b++]
              } : {
                  done: !0
              }
          }
      },
      da = function(a) {
          return a.raw = a
      },
      ea = "function" == typeof Object.create ? Object.create : function(a) {
          var b = function() {};
          b.prototype = a;
          return new b
      },
      fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
      var ha;
      a: {
          var ia = {
                  a: !0
              },
              ka = {};
          try {
              ka.__proto__ = ia;
              ha = ka.a;
              break a
          } catch (a) {}
          ha = !1
      }
      fa = ha ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a
      } : null
  }
  var la = fa,
      ma = function(a, b) {
          a.prototype = ea(b.prototype);
          a.prototype.constructor = a;
          if (la) la(a, b);
          else
              for (var c in b)
                  if ("prototype" != c)
                      if (Object.defineProperties) {
                          var d = Object.getOwnPropertyDescriptor(b, c);
                          d && Object.defineProperty(a, c, d)
                      } else a[c] = b[c];
          a.zl = b.prototype
      },
      na = this || self,
      oa = function(a) {
          return a
      };
  var qa = function(a, b) {
      this.h = a;
      this.B = b
  };
  var ra = function(a) {
          return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
      },
      sa = function() {
          this.D = {};
          this.F = !1;
          this.I = {}
      },
      ta = function(a, b) {
          var c = [],
              d;
          for (d in a.D)
              if (a.D.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                  case 1:
                      c.push(d);
                      break;
                  case 2:
                      c.push(a.get(d));
                      break;
                  case 3:
                      c.push([d, a.get(d)])
              }
          return c
      };
  sa.prototype.get = function(a) {
      return this.D["dust." + a]
  };
  sa.prototype.set = function(a, b) {
      this.F || (a = "dust." + a, this.I.hasOwnProperty(a) || (this.D[a] = b))
  };
  sa.prototype.has = function(a) {
      return this.D.hasOwnProperty("dust." + a)
  };
  var ua = function(a, b) {
      b = "dust." + b;
      a.F || a.I.hasOwnProperty(b) || delete a.D[b]
  };
  sa.prototype.Mb = function() {
      this.F = !0
  };
  sa.prototype.Me = function() {
      return this.F
  };
  var va = function(a) {
      this.B = new sa;
      this.h = [];
      this.D = !1;
      a = a || [];
      for (var b in a) a.hasOwnProperty(b) && (ra(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b]))
  };
  ba = va.prototype;
  ba.toString = function(a) {
      if (a && 0 <= a.indexOf(this)) return "";
      for (var b = [], c = 0; c < this.h.length; c++) {
          var d = this.h[c];
          null === d || void 0 === d ? b.push("") : d instanceof va ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
      }
      return b.join(",")
  };
  ba.set = function(a, b) {
      if (!this.D)
          if ("length" === a) {
              if (!ra(b)) throw Error("RangeError: Length property must be a valid integer.");
              this.h.length = Number(b)
          } else ra(a) ? this.h[Number(a)] = b : this.B.set(a, b)
  };
  ba.get = function(a) {
      return "length" === a ? this.length() : ra(a) ? this.h[Number(a)] : this.B.get(a)
  };
  ba.length = function() {
      return this.h.length
  };
  ba.Lb = function() {
      for (var a = ta(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + "");
      return new va(a)
  };
  var wa = function(a, b) {
      ra(b) ? delete a.h[Number(b)] : ua(a.B, b)
  };
  ba = va.prototype;
  ba.pop = function() {
      return this.h.pop()
  };
  ba.push = function(a) {
      return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
  };
  ba.shift = function() {
      return this.h.shift()
  };
  ba.splice = function(a, b, c) {
      return new va(this.h.splice.apply(this.h, arguments))
  };
  ba.unshift = function(a) {
      return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
  };
  ba.has = function(a) {
      return ra(a) && this.h.hasOwnProperty(a) || this.B.has(a)
  };
  ba.Mb = function() {
      this.D = !0;
      Object.freeze(this.h);
      this.B.Mb()
  };
  ba.Me = function() {
      return this.D
  };
  var xa = function() {
      function a(f, g) {
          if (b[f]) {
              if (b[f].Be + g > b[f].max) throw Error("Quota exceeded");
              b[f].Be += g
          }
      }
      var b = {},
          c = void 0,
          d = void 0,
          e = {
              yk: function(f) {
                  c = f
              },
              Qh: function() {
                  c && a(c, 1)
              },
              Ak: function(f) {
                  d = f
              },
              Ob: function(f) {
                  d && a(d, f)
              },
              Yk: function(f, g) {
                  b[f] = b[f] || {
                      Be: 0
                  };
                  b[f].max = g
              },
              Uj: function(f) {
                  return b[f] && b[f].Be || 0
              },
              reset: function() {
                  b = {}
              },
              Fj: a
          };
      e.onFnConsume = e.yk;
      e.consumeFn = e.Qh;
      e.onStorageConsume = e.Ak;
      e.consumeStorage = e.Ob;
      e.setMax = e.Yk;
      e.getConsumed = e.Uj;
      e.reset = e.reset;
      e.consume = e.Fj;
      return e
  };
  var ya = function(a, b) {
      this.D = a;
      this.T = function(c, d, e) {
          return c.apply(d, e)
      };
      this.F = b;
      this.B = new sa;
      this.h = this.I = void 0
  };
  ya.prototype.add = function(a, b) {
      za(this, a, b, !1)
  };
  var za = function(a, b, c, d) {
      if (!a.B.Me())
          if (a.D.Ob(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
              var e = a.B;
              e.set(b, c);
              e.I["dust." + b] = !0
          } else a.B.set(b, c)
  };
  ya.prototype.set = function(a, b) {
      this.B.Me() || (!this.B.has(a) && this.F && this.F.has(a) ? this.F.set(a, b) : (this.D.Ob(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.B.set(a, b)))
  };
  ya.prototype.get = function(a) {
      return this.B.has(a) ? this.B.get(a) : this.F ? this.F.get(a) : void 0
  };
  ya.prototype.has = function(a) {
      return !!this.B.has(a) || !(!this.F || !this.F.has(a))
  };
  var Aa = function(a) {
      var b = new ya(a.D, a);
      a.I && (b.I = a.I);
      b.T = a.T;
      b.h = a.h;
      return b
  };
  var Ba = function() {},
      Ca = function(a) {
          return "function" === typeof a
      },
      k = function(a) {
          return "string" === typeof a
      },
      Da = function(a) {
          return "number" === typeof a && !isNaN(a)
      },
      Ea = Array.isArray,
      Ha = function(a, b) {
          if (a && Ea(a))
              for (var c = 0; c < a.length; c++)
                  if (a[c] && b(a[c])) return a[c]
      },
      Ja = function(a, b) {
          if (!Da(a) || !Da(b) || a > b) a = 0, b = 2147483647;
          return Math.floor(Math.random() * (b - a + 1) + a)
      },
      La = function(a, b) {
          for (var c = new Ka, d = 0; d < a.length; d++) c.set(a[d], !0);
          for (var e = 0; e < b.length; e++)
              if (c.get(b[e])) return !0;
          return !1
      },
      Ma = function(a,
          b) {
          for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
      },
      Na = function(a) {
          return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
      },
      Oa = function(a) {
          return Math.round(Number(a)) || 0
      },
      Pa = function(a) {
          return "false" === String(a).toLowerCase() ? !1 : !!a
      },
      Qa = function(a) {
          var b = [];
          if (Ea(a))
              for (var c = 0; c < a.length; c++) b.push(String(a[c]));
          return b
      },
      Ra = function(a) {
          return a ? a.replace(/^\s+|\s+$/g, "") : ""
      },
      Sa = function() {
          return new Date(Date.now())
      },
      Ta = function() {
          return Sa().getTime()
      },
      Ka = function() {
          this.prefix = "gtm.";
          this.values = {}
      };
  Ka.prototype.set = function(a, b) {
      this.values[this.prefix + a] = b
  };
  Ka.prototype.get = function(a) {
      return this.values[this.prefix + a]
  };
  var Ua = function(a, b, c) {
          return a && a.hasOwnProperty(b) ? a[b] : c
      },
      Va = function(a) {
          var b = a;
          return function() {
              if (b) {
                  var c = b;
                  b = void 0;
                  try {
                      c()
                  } catch (d) {}
              }
          }
      },
      Wa = function(a, b) {
          for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
      },
      Xa = function(a) {
          for (var b in a)
              if (a.hasOwnProperty(b)) return !0;
          return !1
      },
      Ya = function(a, b) {
          for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
          return c
      },
      ab = function(a, b) {
          var c = m;
          b = b || [];
          for (var d = c, e = 0; e < a.length - 1; e++) {
              if (!d.hasOwnProperty(a[e])) return;
              d = d[a[e]];
              if (0 <=
                  b.indexOf(d)) return
          }
          return d
      },
      bb = function(a, b) {
          for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
          d[e[e.length - 1]] = b;
          return c
      },
      cb = /^\w{1,9}$/,
      db = function(a, b) {
          a = a || {};
          b = b || ",";
          var c = [];
          Ma(a, function(d, e) {
              cb.test(d) && e && c.push(d)
          });
          return c.join(b)
      },
      eb = function(a, b) {
          function c() {
              ++d === b && (e(), e = null, c.done = !0)
          }
          var d = 0,
              e = a;
          c.done = !1;
          return c
      };
  var fb = function(a, b) {
      sa.call(this);
      this.T = a;
      this.Ca = b
  };
  ma(fb, sa);
  fb.prototype.toString = function() {
      return this.T
  };
  fb.prototype.Lb = function() {
      return new va(ta(this, 1))
  };
  fb.prototype.h = function(a, b) {
      a.D.Qh();
      return this.Ca.apply(new gb(this, a), Array.prototype.slice.call(arguments, 1))
  };
  fb.prototype.B = function(a, b) {
      try {
          return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
      } catch (c) {}
  };
  var ib = function(a, b) {
          for (var c, d = 0; d < b.length && !(c = hb(a, b[d]), c instanceof qa); d++);
          return c
      },
      hb = function(a, b) {
          try {
              var c = a.get(String(b[0]));
              if (!(c && c instanceof fb)) throw Error("Attempting to execute non-function " + b[0] + ".");
              return c.h.apply(c, [a].concat(b.slice(1)))
          } catch (e) {
              var d = a.I;
              d && d(e, b.context ? {
                  id: b[0],
                  line: b.context.line
              } : null);
              throw e;
          }
      },
      gb = function(a, b) {
          this.B = a;
          this.h = b
      },
      z = function(a, b) {
          return Ea(b) ? hb(a.h, b) : b
      },
      E = function(a) {
          return a.B.T
      };
  var jb = function() {
      sa.call(this)
  };
  ma(jb, sa);
  jb.prototype.Lb = function() {
      return new va(ta(this, 1))
  };
  var kb = {
      control: function(a, b) {
          return new qa(a, z(this, b))
      },
      fn: function(a, b, c) {
          var d = this.h,
              e = z(this, b);
          if (!(e instanceof va)) throw Error("Error: non-List value given for Fn argument names.");
          var f = Array.prototype.slice.call(arguments, 2);
          this.h.D.Ob(a.length + f.length);
          return new fb(a, function() {
              return function(g) {
                  var h = Aa(d);
                  void 0 === h.h && (h.h = this.h.h);
                  for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                      if (l[n] = z(this, l[n]), l[n] instanceof qa) return l[n];
                  for (var p = e.get("length"), q =
                          0; q < p; q++) q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                  h.add("arguments", new va(l));
                  var r = ib(h, f);
                  if (r instanceof qa) return "return" === r.h ? r.B : r
              }
          }())
      },
      list: function(a) {
          var b = this.h.D;
          b.Ob(arguments.length);
          for (var c = new va, d = 0; d < arguments.length; d++) {
              var e = z(this, arguments[d]);
              "string" === typeof e && b.Ob(e.length ? e.length - 1 : 0);
              c.push(e)
          }
          return c
      },
      map: function(a) {
          for (var b = this.h.D, c = new jb, d = 0; d < arguments.length - 1; d += 2) {
              var e = z(this, arguments[d]) + "",
                  f = z(this, arguments[d + 1]),
                  g = e.length;
              g += "string" ===
                  typeof f ? f.length : 1;
              b.Ob(g);
              c.set(e, f)
          }
          return c
      },
      undefined: function() {}
  };
  var lb = function() {
          this.B = xa();
          this.h = new ya(this.B)
      },
      mb = function(a, b, c) {
          var d = new fb(b, c);
          d.Mb();
          a.h.set(b, d)
      },
      nb = function(a, b, c) {
          kb.hasOwnProperty(b) && mb(a, c || b, kb[b])
      };
  lb.prototype.execute = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 0);
      return this.run(c)
  };
  lb.prototype.run = function(a) {
      for (var b, c = 0; c < arguments.length; c++) b = hb(this.h, arguments[c]);
      return b
  };
  lb.prototype.D = function(a, b) {
      var c = Aa(this.h);
      c.h = a;
      for (var d, e = 1; e < arguments.length; e++) d = d = hb(c, arguments[e]);
      return d
  };
  var ob = Array.prototype.indexOf ? function(a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
  } : function(a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++)
          if (c in a && a[c] === b) return c;
      return -1
  };
  /*
      
       SPDX-License-Identifier: Apache-2.0
      */
  var pb, qb = function() {
      if (void 0 === pb) {
          var a = null,
              b = na.trustedTypes;
          if (b && b.createPolicy) {
              try {
                  a = b.createPolicy("goog#html", {
                      createHTML: oa,
                      createScript: oa,
                      createScriptURL: oa
                  })
              } catch (c) {
                  na.console && na.console.error(c.message)
              }
              pb = a
          } else pb = a
      }
      return pb
  };
  var sb = function(a, b) {
      this.h = b === rb ? a : ""
  };
  sb.prototype.toString = function() {
      return this.h + ""
  };
  var tb = function(a) {
          return a instanceof sb && a.constructor === sb ? a.h : "type_error:TrustedResourceUrl"
      },
      rb = {},
      ub = function(a) {
          var b = a,
              c = qb(),
              d = c ? c.createScriptURL(b) : b;
          return new sb(d, rb)
      };
  var vb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function wb() {
      var a = na.navigator;
      if (a) {
          var b = a.userAgent;
          if (b) return b
      }
      return ""
  }

  function xb(a) {
      return -1 != wb().indexOf(a)
  };

  function yb() {
      return xb("Firefox") || xb("FxiOS")
  }

  function zb() {
      return (xb("Chrome") || xb("CriOS")) && !xb("Edge") || xb("Silk")
  };
  var Ab = {},
      Bb = function(a, b) {
          this.h = b === Ab ? a : ""
      };
  Bb.prototype.toString = function() {
      return this.h.toString()
  };
  var Cb = function(a) {
          return a instanceof Bb && a.constructor === Bb ? a.h : "type_error:SafeHtml"
      },
      Db = function(a) {
          var b = a,
              c = qb(),
              d = c ? c.createHTML(b) : b;
          return new Bb(d, Ab)
      };
  var Eb = {};
  var Fb = function() {},
      Gb = function(a) {
          this.h = a
      };
  ma(Gb, Fb);
  Gb.prototype.toString = function() {
      return this.h
  };

  function Hb(a, b) {
      var c = [new Gb(Ib[0].toLowerCase(), Eb)];
      if (0 === c.length) throw Error("No prefixes are provided");
      var d = c.map(function(f) {
              var g;
              if (f instanceof Gb) g = f.h;
              else throw Error("");
              return g
          }),
          e = b.toLowerCase();
      if (d.every(function(f) {
              return 0 !== e.indexOf(f)
          })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
      a.setAttribute(b, "true")
  }

  function Jb(a) {
      if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
      if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
  };

  function Kb() {
      for (var a = Lb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
      return b
  }

  function Mb() {
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      a += a.toLowerCase() + "0123456789-_";
      return a + "."
  }
  var Lb, Nb;

  function Ob(a) {
      Lb = Lb || Mb();
      Nb = Nb || Kb();
      for (var b = [], c = 0; c < a.length; c += 3) {
          var d = c + 1 < a.length,
              e = c + 2 < a.length,
              f = a.charCodeAt(c),
              g = d ? a.charCodeAt(c + 1) : 0,
              h = e ? a.charCodeAt(c + 2) : 0,
              l = f >> 2,
              n = (f & 3) << 4 | g >> 4,
              p = (g & 15) << 2 | h >> 6,
              q = h & 63;
          e || (q = 64, d || (p = 64));
          b.push(Lb[l], Lb[n], Lb[p], Lb[q])
      }
      return b.join("")
  }

  function Pb(a) {
      function b(l) {
          for (; d < a.length;) {
              var n = a.charAt(d++),
                  p = Nb[n];
              if (null != p) return p;
              if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
          }
          return l
      }
      Lb = Lb || Mb();
      Nb = Nb || Kb();
      for (var c = "", d = 0;;) {
          var e = b(-1),
              f = b(0),
              g = b(64),
              h = b(64);
          if (64 === h && -1 === e) return c;
          c += String.fromCharCode(e << 2 | f >> 4);
          64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
      }
  };
  var Qb = {},
      Rb = function(a, b) {
          Qb[a] = Qb[a] || [];
          Qb[a][b] = !0
      },
      Sb = function() {
          delete Qb.GA4_EVENT
      },
      Tb = function(a) {
          for (var b = [], c = Qb[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
          for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
          return b.join("")
      },
      Ub = function(a) {
          var b = Qb[a];
          if (!b || 0 === b.length) return "";
          for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
          0 < d && c.push(String.fromCharCode(d));
          return Ob(c.join("")).replace(/\.+$/, "")
      };
  var m = window,
      H = document,
      Vb = navigator,
      Wb = H.currentScript && H.currentScript.src,
      Xb = function(a, b) {
          var c = m[a];
          m[a] = void 0 === c ? b : c;
          return m[a]
      },
      Yb = function(a, b) {
          b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
              a.readyState in {
                  loaded: 1,
                  complete: 1
              } && (a.onreadystatechange = null, b())
          })
      },
      Zb = {
          async: 1,
          nonce: 1,
          onerror: 1,
          onload: 1,
          src: 1,
          type: 1
      },
      $b = {
          onload: 1,
          src: 1,
          width: 1,
          height: 1,
          style: 1
      };

  function ac(a, b, c) {
      b && Ma(b, function(d, e) {
          d = d.toLowerCase();
          c.hasOwnProperty(d) || a.setAttribute(d, e)
      })
  }
  var bc = function(a, b, c, d, e) {
          var f = H.createElement("script");
          ac(f, d, Zb);
          f.type = "text/javascript";
          f.async = !0;
          var g = ub(a);
          f.src = tb(g);
          var h, l, n, p = null == (n = (l = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(l, "script[nonce]");
          (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
          Yb(f, b);
          c && (f.onerror = c);
          if (e) e.appendChild(f);
          else {
              var q = H.getElementsByTagName("script")[0] || H.body || H.head;
              q.parentNode.insertBefore(f, q)
          }
          return f
      },
      cc = function() {
          if (Wb) {
              var a =
                  Wb.toLowerCase();
              if (0 === a.indexOf("https://")) return 2;
              if (0 === a.indexOf("http://")) return 3
          }
          return 1
      },
      dc = function(a, b, c, d, e) {
          var f;
          f = void 0 === f ? !0 : f;
          var g = e,
              h = !1;
          g || (g = H.createElement("iframe"), h = !0);
          ac(g, c, $b);
          d && Ma(d, function(n, p) {
              g.dataset[n] = p
          });
          f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
          if (h) {
              var l = H.body && H.body.lastChild || H.body || H.head;
              l.parentNode.insertBefore(g, l)
          }
          Yb(g, b);
          void 0 !== a && (g.src = a);
          return g
      },
      ec = function(a, b, c) {
          var d = new Image(1, 1);
          d.onload =
              function() {
                  d.onload = null;
                  b && b()
              };
          d.onerror = function() {
              d.onerror = null;
              c && c()
          };
          d.src = a
      },
      fc = function(a, b, c, d) {
          a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
      },
      gc = function(a, b, c) {
          a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
      },
      I = function(a) {
          m.setTimeout(a, 0)
      },
      hc = function(a, b) {
          return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
      },
      ic = function(a) {
          var b = a.innerText || a.textContent || "";
          b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,
              ""));
          b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
          return b
      },
      jc = function(a) {
          var b = H.createElement("div"),
              c = b,
              d = Db("A<div>" + a + "</div>");
          void 0 !== c.tagName && Jb(c);
          c.innerHTML = Cb(d);
          b = b.lastChild;
          for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
          return e
      },
      kc = function(a, b, c) {
          c = c || 100;
          for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
          for (var f = a, g = 0; f && g <= c; g++) {
              if (d[String(f.tagName).toLowerCase()]) return f;
              f = f.parentElement
          }
          return null
      },
      lc = function(a) {
          var b;
          try {
              b = Vb.sendBeacon && Vb.sendBeacon(a)
          } catch (c) {
              Rb("TAGGING",
                  15)
          }
          b || ec(a)
      },
      mc = function(a, b) {
          var c = a[b];
          c && "string" === typeof c.animVal && (c = c.animVal);
          return c
      },
      nc = function() {
          var a = m.performance;
          if (a && Ca(a.now)) return a.now()
      };
  var oc = function(a, b) {
          return z(this, a) && z(this, b)
      },
      pc = function(a, b) {
          return z(this, a) === z(this, b)
      },
      rc = function(a, b) {
          return z(this, a) || z(this, b)
      },
      sc = function(a, b) {
          a = z(this, a);
          b = z(this, b);
          return -1 < String(a).indexOf(String(b))
      },
      tc = function(a, b) {
          a = String(z(this, a));
          b = String(z(this, b));
          return a.substring(0, b.length) === b
      },
      uc = function(a, b) {
          a = z(this, a);
          b = z(this, b);
          switch (a) {
              case "pageLocation":
                  var c = m.location.href;
                  b instanceof jb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                  return c
          }
      };
  var wc = function() {
      this.h = new lb;
      vc(this)
  };
  wc.prototype.execute = function(a) {
      return this.h.run(a)
  };
  var vc = function(a) {
      nb(a.h, "map");
      var b = function(c, d) {
          mb(a.h, c, d)
      };
      b("and", oc);
      b("contains", sc);
      b("equals", pc);
      b("or", rc);
      b("startsWith", tc);
      b("variable", uc)
  };
  var xc = function(a) {
      if (a instanceof xc) return a;
      this.Ya = a
  };
  xc.prototype.toString = function() {
      return String(this.Ya)
  };
  var zc = function(a) {
      sa.call(this);
      this.h = a;
      this.set("then", yc(this));
      this.set("catch", yc(this, !0));
      this.set("finally", yc(this, !1, !0))
  };
  ma(zc, jb);
  var yc = function(a, b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? !1 : c;
      return new fb("", function(d, e) {
          b && (e = d, d = void 0);
          c && (e = d);
          d instanceof fb || (d = void 0);
          e instanceof fb || (e = void 0);
          var f = Aa(this.h),
              g = function(l) {
                  return function(n) {
                      return c ? (l.h(f), a.h) : l.h(f, n)
                  }
              },
              h = a.h.then(d && g(d), e && g(e));
          return new zc(h)
      })
  };
  /*
       jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Ac = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
      Bc = function(a) {
          if (null == a) return String(a);
          var b = Ac.exec(Object.prototype.toString.call(Object(a)));
          return b ? b[1].toLowerCase() : "object"
      },
      Cc = function(a, b) {
          return Object.prototype.hasOwnProperty.call(Object(a), b)
      },
      Dc = function(a) {
          if (!a || "object" != Bc(a) || a.nodeType || a == a.window) return !1;
          try {
              if (a.constructor && !Cc(a, "constructor") && !Cc(a.constructor.prototype, "isPrototypeOf")) return !1
          } catch (c) {
              return !1
          }
          for (var b in a);
          return void 0 ===
              b || Cc(a, b)
      },
      J = function(a, b) {
          var c = b || ("array" == Bc(a) ? [] : {}),
              d;
          for (d in a)
              if (Cc(a, d)) {
                  var e = a[d];
                  "array" == Bc(e) ? ("array" != Bc(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : Dc(e) ? (Dc(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
              } return c
      };
  var Fc = function(a, b, c) {
          var d = [],
              e = [],
              f = function(h, l) {
                  for (var n = ta(h, 1), p = 0; p < n.length; p++) l[n[p]] = g(h.get(n[p]))
              },
              g = function(h) {
                  var l = d.indexOf(h);
                  if (-1 < l) return e[l];
                  if (h instanceof va) {
                      var n = [];
                      d.push(h);
                      e.push(n);
                      for (var p = h.Lb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                      return n
                  }
                  if (h instanceof zc) return h.h;
                  if (h instanceof jb) {
                      var r = {};
                      d.push(h);
                      e.push(r);
                      f(h, r);
                      return r
                  }
                  if (h instanceof fb) {
                      var u = function() {
                          for (var v = Array.prototype.slice.call(arguments, 0), w = 0; w < v.length; w++) v[w] = Ec(v[w],
                              b, c);
                          var x = b ? b.D : xa(),
                              y = new ya(x);
                          b && (y.h = b.h);
                          return g(h.h.apply(h, [y].concat(v)))
                      };
                      d.push(h);
                      e.push(u);
                      f(h, u);
                      return u
                  }
                  var t = !1;
                  switch (c) {
                      case 1:
                          t = !0;
                          break;
                      case 2:
                          t = !1;
                          break;
                      case 3:
                          t = !1;
                          break;
                      default:
                  }
                  if (h instanceof xc && t) return h.Ya;
                  switch (typeof h) {
                      case "boolean":
                      case "number":
                      case "string":
                      case "undefined":
                          return h;
                      case "object":
                          if (null === h) return null
                  }
              };
          return g(a)
      },
      Ec = function(a,
          b, c) {
          var d = [],
              e = [],
              f = function(h, l) {
                  for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]))
              },
              g = function(h) {
                  var l = d.indexOf(h);
                  if (-1 < l) return e[l];
                  if (Ea(h) || Na(h)) {
                      var n = new va([]);
                      d.push(h);
                      e.push(n);
                      for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                      return n
                  }
                  if (Dc(h)) {
                      var q = new jb;
                      d.push(h);
                      e.push(q);
                      f(h, q);
                      return q
                  }
                  if ("function" === typeof h) {
                      var r = new fb("", function(y) {
                          for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++) A[B] = Fc(z(this, A[B]), b, c);
                          return g((0, this.h.T)(h, h, A))
                      });
                      d.push(h);
                      e.push(r);
                      f(h, r);
                      return r
                  }
                  var w = typeof h;
                  if (null === h || "string" === w || "number" === w || "boolean" === w) return h;
                  var x = !1;
                  switch (c) {
                      case 1:
                          x = !0;
                          break;
                      case 2:
                          x = !1;
                          break;
                      default:
                  }
                  if (void 0 !== h && x) return new xc(h)
              };
          return g(a)
      };
  var Gc = function(a) {
          for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
          return b
      },
      Hc = function(a) {
          if (void 0 === a || Ea(a) || Dc(a)) return !0;
          switch (typeof a) {
              case "boolean":
              case "number":
              case "string":
              case "function":
                  return !0
          }
          return !1
      };
  var Ic = {
      supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
      concat: function(a, b) {
          for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
          for (var e = 1; e < arguments.length; e++)
              if (arguments[e] instanceof va)
                  for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
              else c.push(arguments[e]);
          return new va(c)
      },
      every: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() &&
              d < c; d++)
              if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
          return !0
      },
      filter: function(a, b) {
          for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
          return new va(d)
      },
      forEach: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.h(a, this.get(d), d, this)
      },
      hasOwnProperty: function(a, b) {
          return this.has(b)
      },
      indexOf: function(a, b, c) {
          var d = this.length(),
              e = void 0 === c ? 0 : Number(c);
          0 > e && (e = Math.max(d + e, 0));
          for (var f = e; f < d; f++)
              if (this.has(f) &&
                  this.get(f) === b) return f;
          return -1
      },
      join: function(a, b) {
          for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
          return c.join(b)
      },
      lastIndexOf: function(a, b, c) {
          var d = this.length(),
              e = d - 1;
          void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
          for (var f = e; 0 <= f; f--)
              if (this.has(f) && this.get(f) === b) return f;
          return -1
      },
      map: function(a, b) {
          for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
          return new va(d)
      },
      pop: function() {
          return this.pop()
      },
      push: function(a, b) {
          return this.push.apply(this,
              Array.prototype.slice.call(arguments, 1))
      },
      reduce: function(a, b, c) {
          var d = this.length(),
              e, f = 0;
          if (void 0 !== c) e = c;
          else {
              if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
              for (var g = 0; g < d; g++)
                  if (this.has(g)) {
                      e = this.get(g);
                      f = g + 1;
                      break
                  } if (g === d) throw Error("TypeError: Reduce on List with no elements.");
          }
          for (var h = f; h < d; h++) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
          return e
      },
      reduceRight: function(a, b, c) {
          var d = this.length(),
              e, f = d - 1;
          if (void 0 !== c) e = c;
          else {
              if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
              for (var g = 1; g <= d; g++)
                  if (this.has(d - g)) {
                      e = this.get(d - g);
                      f = d - (g + 1);
                      break
                  } if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
          }
          for (var h = f; 0 <= h; h--) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
          return e
      },
      reverse: function() {
          for (var a = Gc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : wa(this, c);
          return this
      },
      shift: function() {
          return this.shift()
      },
      slice: function(a, b, c) {
          var d = this.length();
          void 0 === b && (b = 0);
          b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
          c = void 0 === c ? d : 0 > c ?
              Math.max(d + c, 0) : Math.min(c, d);
          c = Math.max(b, c);
          for (var e = [], f = b; f < c; f++) e.push(this.get(f));
          return new va(e)
      },
      some: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
              if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
          return !1
      },
      sort: function(a, b) {
          var c = Gc(this);
          void 0 === b ? c.sort() : c.sort(function(e, f) {
              return Number(b.h(a, e, f))
          });
          for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : wa(this, d);
          return this
      },
      splice: function(a, b, c, d) {
          return this.splice.apply(this, Array.prototype.splice.call(arguments,
              1, arguments.length - 1))
      },
      toString: function() {
          return this.toString()
      },
      unshift: function(a, b) {
          return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
      }
  };
  var Jc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
      Kc = new qa("break"),
      Lc = new qa("continue"),
      Mc = function(a, b) {
          return z(this, a) + z(this, b)
      },
      Nc = function(a, b) {
          return z(this, a) && z(this, b)
      },
      Oc = function(a, b, c) {
          a = z(this, a);
          b = z(this, b);
          c = z(this, c);
          if (!(c instanceof va)) throw Error("Error: Non-List argument given to Apply instruction.");
          if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
              b + " of " + a + ".");
          var d = "number" === typeof a;
          if ("boolean" === typeof a || d) {
              if ("toString" === b) {
                  if (d && c.length()) {
                      var e = Fc(c.get(0));
                      try {
                          return a.toString(e)
                      } catch (q) {}
                  }
                  return a.toString()
              }
              throw Error("TypeError: " + a + "." + b + " is not a function.");
          }
          if ("string" === typeof a) {
              if (0 <= Jc.indexOf(b)) {
                  var f = Fc(c);
                  return Ec(a[b].apply(a, f), this.h)
              }
              throw Error("TypeError: " + b + " is not a function");
          }
          if (a instanceof va) {
              if (a.has(b)) {
                  var g = a.get(b);
                  if (g instanceof fb) {
                      var h = Gc(c);
                      h.unshift(this.h);
                      return g.h.apply(g, h)
                  }
                  throw Error("TypeError: " +
                      b + " is not a function");
              }
              if (0 <= Ic.supportedMethods.indexOf(b)) {
                  var l = Gc(c);
                  l.unshift(this.h);
                  return Ic[b].apply(a, l)
              }
          }
          if (a instanceof fb || a instanceof jb) {
              if (a.has(b)) {
                  var n = a.get(b);
                  if (n instanceof fb) {
                      var p = Gc(c);
                      p.unshift(this.h);
                      return n.h.apply(n, p)
                  }
                  throw Error("TypeError: " + b + " is not a function");
              }
              if ("toString" === b) return a instanceof fb ? a.T : a.toString();
              if ("hasOwnProperty" === b) return a.has.apply(a, Gc(c))
          }
          if (a instanceof xc && "toString" === b) return a.toString();
          throw Error("TypeError: Object has no '" +
              b + "' property.");
      },
      Pc = function(a, b) {
          a = z(this, a);
          if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
          var c = this.h;
          if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
          var d = z(this, b);
          c.set(a, d);
          return d
      },
      Qc = function(a) {
          var b = Aa(this.h),
              c = ib(b, Array.prototype.slice.apply(arguments));
          if (c instanceof qa) return c
      },
      Rc = function() {
          return Kc
      },
      Sc = function(a) {
          for (var b = z(this, a), c = 0; c < b.length; c++) {
              var d = z(this, b[c]);
              if (d instanceof qa) return d
          }
      },
      Tc = function(a) {
          for (var b =
                  this.h, c = 0; c < arguments.length - 1; c += 2) {
              var d = arguments[c];
              if ("string" === typeof d) {
                  var e = z(this, arguments[c + 1]);
                  za(b, d, e, !0)
              }
          }
      },
      Uc = function() {
          return Lc
      },
      Vc = function(a, b, c) {
          var d = new va;
          b = z(this, b);
          for (var e = 0; e < b.length; e++) d.push(b[e]);
          var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
          this.h.add(a, z(this, f))
      },
      Wc = function(a, b) {
          return z(this, a) / z(this, b)
      },
      Xc = function(a, b) {
          a = z(this, a);
          b = z(this, b);
          var c = a instanceof xc,
              d = b instanceof xc;
          return c || d ? c && d ? a.Ya == b.Ya : !1 : a ==
              b
      },
      Yc = function(a) {
          for (var b, c = 0; c < arguments.length; c++) b = z(this, arguments[c]);
          return b
      };

  function Zc(a, b, c, d) {
      for (var e = 0; e < b(); e++) {
          var f = a(c(e)),
              g = ib(f, d);
          if (g instanceof qa) {
              if ("break" === g.h) break;
              if ("return" === g.h) return g
          }
      }
  }

  function $c(a, b, c) {
      if ("string" === typeof b) return Zc(a, function() {
          return b.length
      }, function(f) {
          return f
      }, c);
      if (b instanceof jb || b instanceof va || b instanceof fb) {
          var d = b.Lb(),
              e = d.length();
          return Zc(a, function() {
              return e
          }, function(f) {
              return d.get(f)
          }, c)
      }
  }
  var ad = function(a, b, c) {
          a = z(this, a);
          b = z(this, b);
          c = z(this, c);
          var d = this.h;
          return $c(function(e) {
              d.set(a, e);
              return d
          }, b, c)
      },
      bd = function(a, b, c) {
          a = z(this, a);
          b = z(this, b);
          c = z(this, c);
          var d = this.h;
          return $c(function(e) {
              var f = Aa(d);
              za(f, a, e, !0);
              return f
          }, b, c)
      },
      cd = function(a, b, c) {
          a = z(this, a);
          b = z(this, b);
          c = z(this, c);
          var d = this.h;
          return $c(function(e) {
              var f = Aa(d);
              f.add(a, e);
              return f
          }, b, c)
      },
      ed = function(a, b, c) {
          a = z(this, a);
          b = z(this, b);
          c = z(this, c);
          var d = this.h;
          return dd(function(e) {
              d.set(a, e);
              return d
          }, b, c)
      },
      fd =
      function(a, b, c) {
          a = z(this, a);
          b = z(this, b);
          c = z(this, c);
          var d = this.h;
          return dd(function(e) {
              var f = Aa(d);
              za(f, a, e, !0);
              return f
          }, b, c)
      },
      gd = function(a, b, c) {
          a = z(this, a);
          b = z(this, b);
          c = z(this, c);
          var d = this.h;
          return dd(function(e) {
              var f = Aa(d);
              f.add(a, e);
              return f
          }, b, c)
      };

  function dd(a, b, c) {
      if ("string" === typeof b) return Zc(a, function() {
          return b.length
      }, function(d) {
          return b[d]
      }, c);
      if (b instanceof va) return Zc(a, function() {
          return b.length()
      }, function(d) {
          return b.get(d)
      }, c);
      throw new TypeError("The value is not iterable.");
  }
  var hd = function(a, b, c, d) {
          function e(p, q) {
              for (var r = 0; r < f.length(); r++) {
                  var u = f.get(r);
                  q.add(u, p.get(u))
              }
          }
          var f = z(this, a);
          if (!(f instanceof va)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
          var g = this.h;
          d = z(this, d);
          var h = Aa(g);
          for (e(g, h); hb(h, b);) {
              var l = ib(h, d);
              if (l instanceof qa) {
                  if ("break" === l.h) break;
                  if ("return" === l.h) return l
              }
              var n = Aa(g);
              e(h, n);
              hb(n, c);
              h = n
          }
      },
      id = function(a) {
          a = z(this, a);
          var b = this.h,
              c = !1;
          if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
          return b.get(a)
      },
      jd = function(a, b) {
          var c;
          a = z(this, a);
          b = z(this, b);
          if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
          if (a instanceof jb || a instanceof va || a instanceof fb) c = a.get(b);
          else if ("string" === typeof a) "length" === b ? c = a.length : ra(b) && (c = a[b]);
          else if (a instanceof xc) return;
          return c
      },
      kd = function(a, b) {
          return z(this, a) > z(this,
              b)
      },
      ld = function(a, b) {
          return z(this, a) >= z(this, b)
      },
      md = function(a, b) {
          a = z(this, a);
          b = z(this, b);
          a instanceof xc && (a = a.Ya);
          b instanceof xc && (b = b.Ya);
          return a === b
      },
      nd = function(a, b) {
          return !md.call(this, a, b)
      },
      od = function(a, b, c) {
          var d = [];
          z(this, a) ? d = z(this, b) : c && (d = z(this, c));
          var e = ib(this.h, d);
          if (e instanceof qa) return e
      },
      pd = function(a, b) {
          return z(this, a) < z(this, b)
      },
      qd = function(a, b) {
          return z(this, a) <= z(this, b)
      },
      rd = function(a, b) {
          return z(this, a) % z(this, b)
      },
      sd = function(a, b) {
          return z(this, a) * z(this, b)
      },
      td = function(a) {
          return -z(this,
              a)
      },
      ud = function(a) {
          return !z(this, a)
      },
      vd = function(a, b) {
          return !Xc.call(this, a, b)
      },
      wd = function() {
          return null
      },
      xd = function(a, b) {
          return z(this, a) || z(this, b)
      },
      yd = function(a, b) {
          var c = z(this, a);
          z(this, b);
          return c
      },
      zd = function(a) {
          return z(this, a)
      },
      Ad = function(a) {
          return Array.prototype.slice.apply(arguments)
      },
      Bd = function(a) {
          return new qa("return", z(this, a))
      },
      Cd = function(a, b, c) {
          a = z(this, a);
          b = z(this, b);
          c = z(this, c);
          if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
          (a instanceof fb || a instanceof va || a instanceof jb) && a.set(b, c);
          return c
      },
      Dd = function(a, b) {
          return z(this, a) - z(this, b)
      },
      Ed = function(a, b, c) {
          a = z(this, a);
          var d = z(this, b),
              e = z(this, c);
          if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
          for (var f, g = !1, h = 0; h < d.length; h++)
              if (g || a === z(this, d[h]))
                  if (f = z(this, e[h]), f instanceof qa) {
                      var l = f.h;
                      if ("break" === l) return;
                      if ("return" === l || "continue" === l) return f
                  } else g = !0;
          if (e.length === d.length + 1 && (f = z(this, e[e.length - 1]), f instanceof qa && ("return" === f.h || "continue" ===
                  f.h))) return f
      },
      Fd = function(a, b, c) {
          return z(this, a) ? z(this, b) : z(this, c)
      },
      Jd = function(a) {
          a = z(this, a);
          return a instanceof fb ? "function" : typeof a
      },
      Kd = function(a) {
          for (var b = this.h, c = 0; c < arguments.length; c++) {
              var d = arguments[c];
              "string" !== typeof d || b.add(d, void 0)
          }
      },
      Ld = function(a, b, c, d) {
          var e = z(this, d);
          if (z(this, c)) {
              var f = ib(this.h, e);
              if (f instanceof qa) {
                  if ("break" === f.h) return;
                  if ("return" === f.h) return f
              }
          }
          for (; z(this, a);) {
              var g = ib(this.h, e);
              if (g instanceof qa) {
                  if ("break" === g.h) break;
                  if ("return" === g.h) return g
              }
              z(this,
                  b)
          }
      },
      Md = function(a) {
          return ~Number(z(this, a))
      },
      Nd = function(a, b) {
          return Number(z(this, a)) << Number(z(this, b))
      },
      Od = function(a, b) {
          return Number(z(this, a)) >> Number(z(this, b))
      },
      Pd = function(a, b) {
          return Number(z(this, a)) >>> Number(z(this, b))
      },
      Qd = function(a, b) {
          return Number(z(this, a)) & Number(z(this, b))
      },
      Rd = function(a, b) {
          return Number(z(this, a)) ^ Number(z(this, b))
      },
      Sd = function(a, b) {
          return Number(z(this, a)) | Number(z(this, b))
      };
  var Ud = function() {
      this.h = new lb;
      Td(this)
  };
  Ud.prototype.execute = function(a) {
      return Vd(this.h.run(a))
  };
  var Wd = function(a, b, c) {
          return Vd(a.h.D(b, c))
      },
      Td = function(a) {
          var b = function(d, e) {
              nb(a.h, d, String(e))
          };
          b("control", 49);
          b("fn", 51);
          b("list", 7);
          b("map", 8);
          b("undefined", 44);
          var c = function(d, e) {
              mb(a.h, String(d), e)
          };
          c(0, Mc);
          c(1, Nc);
          c(2, Oc);
          c(3, Pc);
          c(53, Qc);
          c(4, Rc);
          c(5, Sc);
          c(52, Tc);
          c(6, Uc);
          c(9, Sc);
          c(50, Vc);
          c(10, Wc);
          c(12, Xc);
          c(13, Yc);
          c(47, ad);
          c(54, bd);
          c(55, cd);
          c(63, hd);
          c(64, ed);
          c(65, fd);
          c(66, gd);
          c(15, id);
          c(16, jd);
          c(17, jd);
          c(18, kd);
          c(19, ld);
          c(20, md);
          c(21, nd);
          c(22, od);
          c(23, pd);
          c(24, qd);
          c(25, rd);
          c(26, sd);
          c(27,
              td);
          c(28, ud);
          c(29, vd);
          c(45, wd);
          c(30, xd);
          c(32, yd);
          c(33, yd);
          c(34, zd);
          c(35, zd);
          c(46, Ad);
          c(36, Bd);
          c(43, Cd);
          c(37, Dd);
          c(38, Ed);
          c(39, Fd);
          c(40, Jd);
          c(41, Kd);
          c(42, Ld);
          c(58, Md);
          c(57, Nd);
          c(60, Od);
          c(61, Pd);
          c(56, Qd);
          c(62, Rd);
          c(59, Sd)
      };

  function Vd(a) {
      if (a instanceof qa || a instanceof fb || a instanceof va || a instanceof jb || a instanceof xc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
  };
  var Xd = function() {
      var a = function(b) {
          return {
              toString: function() {
                  return b
              }
          }
      };
      return {
          zi: a("consent"),
          xg: a("convert_case_to"),
          yg: a("convert_false_to"),
          zg: a("convert_null_to"),
          Ag: a("convert_true_to"),
          Bg: a("convert_undefined_to"),
          ol: a("debug_mode_metadata"),
          Kb: a("function"),
          yf: a("instance_name"),
          nj: a("live_only"),
          oj: a("malware_disabled"),
          pj: a("metadata"),
          sj: a("original_activity_id"),
          sl: a("original_vendor_template_id"),
          rl: a("once_on_load"),
          rj: a("once_per_event"),
          Eh: a("once_per_load"),
          ul: a("priority_override"),
          vl: a("respected_consent_types"),
          Ih: a("setup_tags"),
          Jh: a("tag_id"),
          Kh: a("teardown_tags")
      }
  }();
  var se;
  var te = [],
      ue = [],
      ve = [],
      xe = [],
      ye = [],
      ze = {},
      Ae, Be, De = function() {
          var a = Ce;
          Be = Be || a
      },
      Ee, Fe = function(a, b) {
          var c = {};
          c["function"] = "__" + a;
          for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
          return c
      },
      Ge = function(a, b) {
          var c = a["function"],
              d = b && b.event;
          if (!c) throw Error("Error: No function name given for function call.");
          var e = ze[c],
              f = {},
              g;
          for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Ph && d.Ph(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
          e && d && d.Oh && (f.vtp_gtmCachedValues = d.Oh);
          if (b) {
              if (null ==
                  b.name) {
                  var h;
                  a: {
                      var l = b.index;
                      if (null == l) h = "";
                      else {
                          var n;
                          switch (b.type) {
                              case 2:
                                  n = te[l];
                                  break;
                              case 1:
                                  n = xe[l];
                                  break;
                              default:
                                  h = "";
                                  break a
                          }
                          var p = n && n[Xd.yf];
                          h = p ? String(p) : ""
                      }
                  }
                  b.name = h
              }
              e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
          }
          return void 0 !== e ? e(f) : se(c, f, b)
      },
      Ie = function(a, b, c) {
          c = c || [];
          var d = {},
              e;
          for (e in a) a.hasOwnProperty(e) && (d[e] = He(a[e], b, c));
          return d
      },
      He = function(a, b, c) {
          if (Ea(a)) {
              var d;
              switch (a[0]) {
                  case "function_id":
                      return a[1];
                  case "list":
                      d = [];
                      for (var e = 1; e < a.length; e++) d.push(He(a[e],
                          b, c));
                      return d;
                  case "macro":
                      var f = a[1];
                      if (c[f]) return;
                      var g = te[f];
                      if (!g || b.Uf(g)) return;
                      c[f] = !0;
                      var h = String(g[Xd.yf]);
                      try {
                          var l = Ie(g, b, c);
                          l.vtp_gtmEventId = b.id;
                          b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
                          d = Ge(l, {
                              event: b,
                              index: f,
                              type: 2,
                              name: h
                          });
                          Ee && (d = Ee.Gj(d, l))
                      } catch (y) {
                          b.ci && b.ci(y, Number(f), h), d = !1
                      }
                      c[f] = !1;
                      return d;
                  case "map":
                      d = {};
                      for (var n = 1; n < a.length; n += 2) d[He(a[n], b, c)] = He(a[n + 1], b, c);
                      return d;
                  case "template":
                      d = [];
                      for (var p = !1, q = 1; q < a.length; q++) {
                          var r = He(a[q], b, c);
                          Be && (p = p || r === Be.qe);
                          d.push(r)
                      }
                      return Be && p ? Be.Hj(d) : d.join("");
                  case "escape":
                      d = He(a[1], b, c);
                      if (Be && Ea(a[1]) && "macro" === a[1][0] && Be.jk(a)) return Be.Gk(d);
                      d = String(d);
                      for (var u = 2; u < a.length; u++) Yd[a[u]] && (d = Yd[a[u]](d));
                      return d;
                  case "tag":
                      var t = a[1];
                      if (!xe[t]) throw Error("Unable to resolve tag reference " + t + ".");
                      return d = {
                          Vh: a[2],
                          index: t
                      };
                  case "zb":
                      var v = {
                          arg0: a[2],
                          arg1: a[3],
                          ignore_case: a[5]
                      };
                      v["function"] = a[1];
                      var w = Je(v, b, c),
                          x = !!a[4];
                      return x || 2 !== w ? x !== (1 === w) : null;
                  default:
                      throw Error("Attempting to expand unknown Value type: " +
                          a[0] + ".");
              }
          }
          return a
      },
      Je = function(a, b, c) {
          try {
              return Ae(Ie(a, b, c))
          } catch (d) {
              JSON.stringify(a)
          }
          return 2
      };
  var Ke = function(a, b, c) {
      var d;
      d = Error.call(this);
      this.message = d.message;
      "stack" in d && (this.stack = d.stack);
      this.B = a;
      this.h = c
  };
  ma(Ke, Error);

  function Le(a, b) {
      if (Ea(a)) {
          Object.defineProperty(a, "context", {
              value: {
                  line: b[0]
              }
          });
          for (var c = 1; c < a.length; c++) Le(a[c], b[c])
      }
  };
  var Me = function(a, b) {
      var c;
      c = Error.call(this);
      this.message = c.message;
      "stack" in c && (this.stack = c.stack);
      this.Bk = a;
      this.B = b;
      this.h = []
  };
  ma(Me, Error);
  var Oe = function() {
      return function(a, b) {
          a instanceof Me || (a = new Me(a, Ne));
          b && a.h.push(b);
          throw a;
      }
  };

  function Ne(a) {
      if (!a.length) return a;
      a.push({
          id: "main",
          line: 0
      });
      for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1);
      for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
      a.splice(0, 1);
      return a
  };
  var Re = function(a) {
          function b(r) {
              for (var u = 0; u < r.length; u++) d[r[u]] = !0
          }
          for (var c = [], d = [], e = Pe(a), f = 0; f < ue.length; f++) {
              var g = ue[f],
                  h = Qe(g, e);
              if (h) {
                  for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                  b(g.block || [])
              } else null === h && b(g.block || []);
          }
          for (var p = [], q = 0; q < xe.length; q++) c[q] && !d[q] && (p[q] = !0);
          return p
      },
      Qe = function(a, b) {
          for (var c = a["if"] || [], d = 0; d < c.length; d++) {
              var e = b(c[d]);
              if (0 === e) return !1;
              if (2 === e) return null
          }
          for (var f =
                  a.unless || [], g = 0; g < f.length; g++) {
              var h = b(f[g]);
              if (2 === h) return null;
              if (1 === h) return !1
          }
          return !0
      },
      Pe = function(a) {
          var b = [];
          return function(c) {
              void 0 === b[c] && (b[c] = Je(ve[c], a));
              return b[c]
          }
      };
  var Se = {
      Gj: function(a, b) {
          b[Xd.xg] && "string" === typeof a && (a = 1 == b[Xd.xg] ? a.toLowerCase() : a.toUpperCase());
          b.hasOwnProperty(Xd.zg) && null === a && (a = b[Xd.zg]);
          b.hasOwnProperty(Xd.Bg) && void 0 === a && (a = b[Xd.Bg]);
          b.hasOwnProperty(Xd.Ag) && !0 === a && (a = b[Xd.Ag]);
          b.hasOwnProperty(Xd.yg) && !1 === a && (a = b[Xd.yg]);
          return a
      }
  };
  var Te = function() {
      this.h = {}
  };

  function Ue(a, b, c, d) {
      if (a)
          for (var e = 0; e < a.length; e++) {
              var f = void 0,
                  g = "A policy function denied the permission request";
              try {
                  f = a[e].call(void 0, b, c, d), g += "."
              } catch (h) {
                  g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
              }
              if (!f) throw new Ke(c, d, g);
          }
  }

  function Ve(a, b, c) {
      return function() {
          var d = arguments[0];
          if (d) {
              var e = a.h[d],
                  f = a.h.all;
              if (e || f) {
                  var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                  Ue(e, b, d, g);
                  Ue(f, b, d, g)
              }
          }
      }
  };
  var Ze = function() {
          var a = data.permissions || {},
              b = We.N,
              c = this;
          this.B = new Te;
          this.h = {};
          var d = {},
              e = Ve(this.B, b, function() {
                  var f = arguments[0];
                  return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
              });
          Ma(a, function(f, g) {
              var h = {};
              Ma(g, function(l, n) {
                  var p = Xe(l, n);
                  h[l] = p.assert;
                  d[l] || (d[l] = p.ca)
              });
              c.h[f] = function(l, n) {
                  var p = h[l];
                  if (!p) throw Ye(l, {}, "The requested permission " + l + " is not configured.");
                  var q = Array.prototype.slice.call(arguments, 0);
                  p.apply(void 0, q);
                  e.apply(void 0, q)
              }
          })
      },
      af = function(a) {
          return $e.h[a] || function() {}
      };

  function Xe(a, b) {
      var c = Fe(a, b);
      c.vtp_permissionName = a;
      c.vtp_createPermissionError = Ye;
      try {
          return Ge(c)
      } catch (d) {
          return {
              assert: function(e) {
                  throw new Ke(e, {}, "Permission " + e + " is unknown.");
              },
              ca: function() {
                  for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                  return e
              }
          }
      }
  }

  function Ye(a, b, c) {
      return new Ke(a, b, c)
  };
  var bf = !1;
  var cf = {};
  cf.nl = Pa('');
  cf.Kj = Pa('');
  var df = bf,
      ef = cf.Kj,
      ff = cf.nl;
  var gf = function(a, b) {
      var c = String(a);
      return c
  };
  var hf = [];
  hf[7] = !0;
  hf[9] = !0;
  hf[27] = !0;
  hf[5] = !0;
  hf[6] = !0;
  hf[11] = !0;
  hf[15] = !0;
  hf[18] = !0;
  hf[23] = !0;
  hf[24] = !0;
  hf[29] = !0;
  hf[33] = !0;
  hf[35] = !0;
  hf[36] = !0;
  hf[38] = !0;

  hf[42] = !0;
  hf[43] = !0;
  hf[44] = !0;
  jf(46, 47);
  hf[53] = !0;

  function jf(a, b) {
      for (var c, d, e = 0; c === d;)
          if (c = Math.floor(2 * Math.random()), d = Math.floor(2 * Math.random()), e++, 20 < e) return;
      c ? hf[a] = !0 : hf[b] = !0;
  }
  var K = function(a) {
      return !!hf[a]
  };
  var of = function(a) {
      var b = {},
          c = 0,
          d = K(51) ? 27 : 10;
      Ma(a, function(f, g) {
          if (void 0 !== g)
              if (g = gf(g, 100), kf.hasOwnProperty(f)) b[kf[f]] = lf(g);
              else if (mf.hasOwnProperty(f)) {
              var h = mf[f],
                  l = lf(g);
              b.hasOwnProperty(h) || (b[h] = l)
          } else if ("category" === f)
              for (var n = lf(g).split("/", 5), p = 0; p < n.length; p++) {
                  var q = nf[p],
                      r = n[p];
                  b.hasOwnProperty(q) || (b[q] = r)
              } else if (c < d) {
                  var u = 10 > c ? "" + c : String.fromCharCode(65 + c - 10);
                  b["k" + u] = lf(gf(f, 40));
                  b["v" + u] = lf(g);
                  c++
              }
      });
      var e = [];
      Ma(b, function(f, g) {
          e.push("" + f + g)
      });
      return e.join("~")
  }, lf =
      function(a) {
          return ("" + a).replace(/~/g, function() {
              return "~~"
          })
      }, kf = {
          item_id: "id",
          item_name: "nm",
          item_brand: "br",
          item_category: "ca",
          item_category2: "c2",
          item_category3: "c3",
          item_category4: "c4",
          item_category5: "c5",
          item_variant: "va",
          price: "pr",
          quantity: "qt",
          coupon: "cp",
          item_list_name: "ln",
          index: "lp",
          item_list_id: "li",
          discount: "ds",
          affiliation: "af",
          promotion_id: "pi",
          promotion_name: "pn",
          creative_name: "cn",
          creative_slot: "cs",
          location_id: "lo"
      }, mf = {
          id: "id",
          name: "nm",
          brand: "br",
          variant: "va",
          list_name: "ln",
          list_position: "lp",
          list: "ln",
          position: "lp",
          creative: "cn"
      }, nf = ["ca", "c2", "c3", "c4", "c5"];
  var pf = function(a) {
          var b = [];
          Ma(a, function(c, d) {
              null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
          });
          return b.join("&")
      },
      qf = function(a, b, c, d) {
          this.Ha = a.Ha;
          this.Ub = a.Ub;
          this.Of = a.Of;
          this.h = b;
          this.F = c;
          this.D = pf(a.Ha);
          this.B = pf(a.Of);
          this.I = this.B.length;
          if (d && 16384 < this.I) throw Error("EVENT_TOO_LARGE");
      };
  var rf = function() {
      this.events = [];
      this.h = this.Ha = "";
      this.D = 0;
      this.B = !1
  };
  rf.prototype.add = function(a) {
      return this.F(a) ? (this.events.push(a), this.Ha = a.D, this.h = a.h, this.D += a.I, this.B = a.F, !0) : !1
  };
  rf.prototype.F = function(a) {
      var b = 20 > this.events.length && 16384 > a.I + this.D,
          c = this.Ha === a.D && this.h === a.h && this.B === a.F;
      return 0 == this.events.length || b && c
  };
  var sf = function(a, b) {
          Ma(a, function(c, d) {
              null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
          })
      },
      tf = function(a, b) {
          var c = [];
          a.D && c.push(a.D);
          b && c.push("_s=" + b);
          sf(a.Ub, c);
          var d = !1;
          a.B && (c.push(a.B), d = !0);
          var e = c.join("&"),
              f = "",
              g = e.length + a.h.length + 1;
          d && 2048 < g && (f = c.pop(), e = c.join("&"));
          return {
              hg: e,
              body: f
          }
      },
      uf = function(a, b) {
          var c = a.events;
          if (1 == c.length) return tf(c[0], b);
          var d = [];
          a.Ha && d.push(a.Ha);
          for (var e = {}, f = 0; f < c.length; f++) Ma(c[f].Ub, function(u, t) {
              null != t && (e[u] = e[u] || {}, e[u][String(t)] =
                  e[u][String(t)] + 1 || 1)
          });
          var g = {};
          Ma(e, function(u, t) {
              var v, w = -1,
                  x = 0;
              Ma(t, function(y, A) {
                  x += A;
                  var B = (y.length + u.length + 2) * (A - 1);
                  B > w && (v = y, w = B)
              });
              x == c.length && (g[u] = v)
          });
          sf(g, d);
          b && d.push("_s=" + b);
          for (var h = d.join("&"), l = [], n = {}, p = 0; p < c.length; n = {
                  Od: n.Od
              }, p++) {
              var q = [];
              n.Od = {};
              Ma(c[p].Ub, function(u) {
                  return function(t, v) {
                      g[t] != "" + v && (u.Od[t] = v)
                  }
              }(n));
              c[p].B && q.push(c[p].B);
              sf(n.Od, q);
              l.push(q.join("&"))
          }
          var r = l.join("\r\n");
          return {
              hg: h,
              body: r
          }
      };
  var Ef = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

  function Hf(a, b) {
      return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
  };
  var If = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
      Jf = {
          Fn: "function",
          DustMap: "Object",
          List: "Array"
      },
      L = function(a, b, c) {
          for (var d = 0; d < b.length; d++) {
              var e = If.exec(b[d]);
              if (!e) throw Error("Internal Error in " + a);
              var f = e[1],
                  g = "!" === e[2],
                  h = e[3],
                  l = c[d];
              if (null == l) {
                  if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
              } else if ("*" !== h) {
                  var n = typeof l;
                  l instanceof fb ? n = "Fn" : l instanceof va ? n = "List" : l instanceof jb ? n = "DustMap" : l instanceof xc && (n = "OpaqueValue");
                  if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (Jf[n] || n) + ", which does not match required type " + (Jf[h] || h) + ".");
              }
          }
      };

  function Kf(a) {
      return "" + a
  }

  function Lf(a, b) {
      var c = [];
      return c
  };
  var Mf = function(a, b) {
          var c = new fb(a, function() {
              for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = z(this, d[e]);
              return b.apply(this, d)
          });
          c.Mb();
          return c
      },
      Nf = function(a, b) {
          var c = new jb,
              d;
          for (d in b)
              if (b.hasOwnProperty(d)) {
                  var e = b[d];
                  Ca(e) ? c.set(d, Mf(a + "_" + d, e)) : (Da(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
              } c.Mb();
          return c
      };
  var Of = function(a, b) {
      L(E(this), ["apiName:!string", "message:?string"], arguments);
      var c = {},
          d = new jb;
      return d = Nf("AssertApiSubject", c)
  };
  var Pf = function(a, b) {
      L(E(this), ["actual:?*", "message:?string"], arguments);
      if (a instanceof zc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
      var c = {},
          d = new jb;
      return d = Nf("AssertThatSubject", c)
  };

  function Qf(a) {
      return function() {
          for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(Fc(arguments[d], c));
          return Ec(a.apply(null, b))
      }
  }
  var Sf = function() {
      for (var a = Math, b = Rf, c = {}, d = 0; d < b.length; d++) {
          var e = b[d];
          a.hasOwnProperty(e) && (c[e] = Qf(a[e].bind(a)))
      }
      return c
  };
  var Tf = function(a) {
      var b;
      return b
  };
  var Uf = function(a) {
      var b;
      return b
  };
  var Vf = function(a) {
      return encodeURI(a)
  };
  var Wf = function(a) {
      return encodeURIComponent(a)
  };
  var Xf = function(a) {
      L(E(this), ["message:?string"], arguments);
  };
  var Yf = function(a, b) {
      L(E(this), ["min:!number", "max:!number"], arguments);
      return Ja(a, b)
  };
  var M = function(a, b, c) {
      var d = a.h.h;
      if (!d) throw Error("Missing program state.");
      d.Dj.apply(null, Array.prototype.slice.call(arguments, 1))
  };
  var Zf = function() {
      M(this, "read_container_data");
      var a = new jb;
      a.set("containerId", 'G-3F1C521DHQ');
      a.set("version", '1');
      a.set("environmentName", '');
      a.set("debugMode", df);
      a.set("previewMode", ff);
      a.set("environmentMode", ef);
      a.Mb();
      return a
  };
  var $f = function() {
      return (new Date).getTime()
  };
  var ag = function(a) {
      if (null === a) return "null";
      if (a instanceof va) return "array";
      if (a instanceof fb) return "function";
      if (a instanceof xc) {
          a = a.Ya;
          if (void 0 === a.constructor || void 0 === a.constructor.name) {
              var b = String(a);
              return b.substring(8, b.length - 1)
          }
          return String(a.constructor.name)
      }
      return typeof a
  };
  var bg = function(a) {
      function b(c) {
          return function(d) {
              try {
                  return c(d)
              } catch (e) {
                  (df || ff) && a.call(this, e.message)
              }
          }
      }
      return {
          parse: b(function(c) {
              return Ec(JSON.parse(c))
          }),
          stringify: b(function(c) {
              return JSON.stringify(Fc(c))
          })
      }
  };
  var cg = function(a) {
      return Oa(Fc(a, this.h))
  };
  var dg = function(a) {
      return Number(Fc(a, this.h))
  };
  var eg = function(a) {
      return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
  };
  var fg = function(a, b, c) {
      var d = null,
          e = !1;
      return e ? d : null
  };
  var Rf = "floor ceil round max min abs pow sqrt".split(" ");
  var gg = function() {
          var a = {};
          return {
              Wj: function(b) {
                  return a.hasOwnProperty(b) ? a[b] : void 0
              },
              Zk: function(b, c) {
                  a[b] = c
              },
              reset: function() {
                  a = {}
              }
          }
      },
      hg = function(a, b) {
          return function() {
              var c = Array.prototype.slice.call(arguments, 0);
              c.unshift(b);
              return fb.prototype.h.apply(a, c)
          }
      },
      ig = function(a, b) {
          L(E(this), ["apiName:!string", "mock:?*"], arguments);
      };
  var jg = {};
  jg.keys = function(a) {
      return new va
  };
  jg.values = function(a) {
      return new va
  };
  jg.entries = function(a) {
      return new va
  };
  jg.freeze = function(a) {
      return a
  };
  jg.delete = function(a, b) {
      return !1
  };
  var lg = function() {
      this.h = {};
      this.B = {};
  };
  lg.prototype.get = function(a, b) {
      var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
      return c
  };
  lg.prototype.add = function(a, b, c) {
      if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
      if (this.B.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
      this.h[a] = c ? void 0 : Ca(b) ? Mf(a, b) : Nf(a, b)
  };

  function mg(a, b) {
      var c = void 0;
      return c
  };

  function ng() {
      var a = {};
      return a
  };
  var pg = function(a) {
          return og ? H.querySelectorAll(a) : null
      },
      qg = function(a, b) {
          if (!og) return null;
          if (Element.prototype.closest) try {
              return a.closest(b)
          } catch (e) {
              return null
          }
          var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
              d = a;
          if (!H.documentElement.contains(d)) return null;
          do {
              try {
                  if (c.call(d, b)) return d
              } catch (e) {
                  break
              }
              d = d.parentElement || d.parentNode
          } while (null !== d && 1 === d.nodeType);
          return null
      },
      rg = !1;
  if (H.querySelectorAll) try {
      var sg = H.querySelectorAll(":root");
      sg && 1 == sg.length && sg[0] == H.documentElement && (rg = !0)
  } catch (a) {}
  var og = rg;
  var P = function(a) {
      Rb("GTM", a)
  };
  var tg = function(a) {
          return null == a ? "" : k(a) ? Ra(String(a)) : "e0"
      },
      vg = function(a) {
          return a.replace(ug, "")
      },
      xg = function(a) {
          return wg(a.replace(/\s/g, ""))
      },
      wg = function(a) {
          return Ra(a.replace(yg, "").toLowerCase())
      },
      Ag = function(a) {
          a = a.replace(/[\s-()/.]/g, "");
          "+" !== a.charAt(0) && (a = "+" + a);
          return zg.test(a) ? a : "e0"
      },
      Cg = function(a) {
          var b = a.toLowerCase().split("@");
          if (2 == b.length) {
              var c = b[0];
              /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
              c = c + "@" + b[1];
              if (Bg.test(c)) return c
          }
          return "e0"
      },
      Fg = function(a,
          b) {
          window.Promise || b([]);
          Promise.all(a.map(function(c) {
              return c.value && -1 !== Dg.indexOf(c.name) ? Eg(c.value).then(function(d) {
                  c.value = d
              }) : Promise.resolve()
          })).then(function() {
              b(a)
          }).catch(function() {
              b([])
          })
      },
      Eg = function(a) {
          if ("" === a || "e0" === a) return Promise.resolve(a);
          if (m.crypto && m.crypto.subtle) {
              if (Gg.test(a)) return Promise.resolve(a);
              try {
                  var b = Hg(a);
                  return m.crypto.subtle.digest("SHA-256", b).then(function(c) {
                      var d = Array.from(new Uint8Array(c)).map(function(e) {
                          return String.fromCharCode(e)
                      }).join("");
                      return m.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                  }).catch(function() {
                      return "e2"
                  })
              } catch (c) {
                  return Promise.resolve("e2")
              }
          } else return Promise.resolve("e1")
      },
      Hg = function(a) {
          var b;
          if (m.TextEncoder) b = (new m.TextEncoder("utf-8")).encode(a);
          else {
              for (var c = [], d = 0; d < a.length; d++) {
                  var e = a.charCodeAt(d);
                  128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63,
                      128 | e >> 6 & 63, 128 | e & 63))
              }
              b = new Uint8Array(c)
          }
          return b
      },
      yg = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
      Bg = /^\S+@\S+\.\S+$/,
      zg = /^\+\d{10,15}$/,
      ug = /[.~]/g,
      Ig = /^[0-9A-Za-z_-]{43}$/,
      Gg = /^[0-9A-Fa-f]{64}$/,
      Jg = {},
      Kg = (Jg.email = "em", Jg.phone_number = "pn", Jg.first_name = "fn", Jg.last_name = "ln", Jg.street = "sa", Jg.city = "ct", Jg.region = "rg", Jg.country = "co", Jg.postal_code = "pc", Jg.error_code = "ec", Jg),
      Lg = {},
      Mg = (Lg.email = "sha256_email_address", Lg.phone_number = "sha256_phone_number", Lg.first_name = "sha256_first_name", Lg.last_name =
          "sha256_last_name", Lg.street = "sha256_street", Lg),
      Ng = function(a, b) {
          function c(u, t, v, w) {
              var x = tg(u);
              "" !== x && (Gg.test(x) ? l.push({
                  name: t,
                  value: x,
                  index: w
              }) : l.push({
                  name: t,
                  value: v(x),
                  index: w
              }))
          }

          function d(u, t) {
              var v = u;
              if (k(v) || Ea(v)) {
                  v = Ea(u) ? u : [u];
                  for (var w = 0; w < v.length; ++w) {
                      var x = tg(v[w]),
                          y = Gg.test(x);
                      t && !y && P(89);
                      !t && y && P(88)
                  }
              }
          }

          function e(u, t) {
              var v = u[t];
              d(v, !1);
              var w = Mg[t];
              u.hasOwnProperty(w) && (u.hasOwnProperty(t) && P(90), v = u[w], d(v, !0));
              return v
          }

          function f(u, t, v) {
              var w = e(u, t);
              w = Ea(w) ? w : [w];
              for (var x =
                      0; x < w.length; ++x) c(w[x], t, v)
          }

          function g(u, t, v, w) {
              var x = e(u, t);
              c(x, t, v, w)
          }

          function h(u) {
              return function(t) {
                  P(64);
                  return u(t)
              }
          }
          var l = [];
          if ("https:" === m.location.protocol) {
              f(a, "email", Cg);
              f(a, "phone_number", Ag);
              f(a, "first_name", h(xg));
              f(a, "last_name", h(xg));
              var n = a.home_address || {};
              f(n, "street", h(wg));
              f(n, "city", h(wg));
              f(n, "postal_code", h(vg));
              f(n, "region", h(wg));
              f(n, "country", h(vg));
              var p = a.address || {};
              p = Ea(p) ? p : [p];
              for (var q = 0; q < p.length; q++) {
                  var r = p[q];
                  g(r, "first_name", xg, q);
                  g(r, "last_name", xg, q);
                  g(r, "street", wg, q);
                  g(r, "city", wg, q);
                  g(r, "postal_code", vg, q);
                  g(r, "region", wg, q);
                  g(r, "country", vg, q)
              }
              Fg(l, b)
          } else l.push({
              name: "error_code",
              value: "e3",
              index: void 0
          }), b(l)
      },
      Og = function(a, b) {
          Ng(a, function(c) {
              for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                  var g = c[f].name,
                      h = c[f].value,
                      l = c[f].index,
                      n = Kg[g];
                  n && h && (-1 === Dg.indexOf(g) || /^e\d+$/.test(h) || Ig.test(h) || Gg.test(h)) && (void 0 !== l && (n += l), d.push(n + "." + h), e++)
              }
              1 === c.length && "error_code" === c[0].name && (e = 0);
              b(encodeURIComponent(d.join("~")), e)
          })
      },
      Pg = function(a) {
          if (m.Promise) try {
              return new Promise(function(b) {
                  Og(a,
                      function(c, d) {
                          b({
                              Bd: c,
                              Fk: d
                          })
                      })
              })
          } catch (b) {}
      },
      Dg = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var S = {
          g: {
              J: "ad_storage",
              Z: "analytics_storage",
              Ue: "region",
              wg: "consent_updated",
              Ve: "wait_for_update",
              Di: "app_remove",
              Ei: "app_store_refund",
              Fi: "app_store_subscription_cancel",
              Gi: "app_store_subscription_convert",
              Hi: "app_store_subscription_renew",
              Cg: "add_payment_info",
              Dg: "add_shipping_info",
              Ec: "add_to_cart",
              Fc: "remove_from_cart",
              Eg: "view_cart",
              Zb: "begin_checkout",
              Gc: "select_item",
              Eb: "view_item_list",
              ac: "select_promotion",
              Fb: "view_promotion",
              Ja: "purchase",
              Hc: "refund",
              Oa: "view_item",
              Fg: "add_to_wishlist",
              Ii: "first_open",
              Ji: "first_visit",
              Da: "gtag.config",
              Ka: "gtag.get",
              Ki: "in_app_purchase",
              Ic: "page_view",
              Li: "session_start",
              Xe: "user_engagement",
              bc: "gclid",
              na: "ads_data_redaction",
              fa: "allow_ad_personalization_signals",
              Ye: "allow_custom_scripts",
              Mi: "allow_display_features",
              Jc: "allow_enhanced_conversions",
              Kc: "allow_google_signals",
              Ea: "allow_interest_groups",
              Sd: "auid",
              Ni: "auto_detection_enabled",
              jb: "aw_remarketing",
              Td: "aw_remarketing_only",
              Lc: "discount",
              Mc: "aw_feed_country",
              Nc: "aw_feed_language",
              ia: "items",
              Oc: "aw_merchant_id",
              Gg: "aw_basket_type",
              Ud: "campaign_content",
              Vd: "campaign_id",
              Wd: "campaign_medium",
              Xd: "campaign_name",
              Pc: "campaign",
              Yd: "campaign_source",
              Zd: "campaign_term",
              wb: "client_id",
              Oi: "content_group",
              Pi: "content_type",
              La: "conversion_cookie_prefix",
              Qc: "conversion_id",
              kb: "conversion_label",
              ya: "conversion_linker",
              Ze: "conversion_api",
              lb: "cookie_domain",
              Pa: "cookie_expires",
              nb: "cookie_flags",
              Rc: "cookie_name",
              af: "cookie_path",
              Za: "cookie_prefix",
              Gb: "cookie_update",
              cc: "country",
              va: "currency",
              Sc: "customer_lifetime_value",
              Tc: "custom_map",
              Qi: "debug_mode",
              ja: "developer_id",
              Hg: "disable_merchant_reported_purchases",
              Ri: "dc_custom_params",
              Si: "dc_natural_search",
              bf: "dynamic_event_settings",
              Ti: "affiliation",
              Ig: "checkout_option",
              Jg: "checkout_step",
              Ui: "coupon",
              Kg: "item_list_name",
              Lg: "list_name",
              Vi: "promotions",
              Uc: "shipping",
              Mg: "tax",
              ae: "engagement_time_msec",
              Vc: "enhanced_client_id",
              Wc: "enhanced_conversions",
              Ng: "enhanced_conversions_automatic_settings",
              Xc: "estimated_delivery_date",
              cf: "euid_logged_in_state",
              fc: "event_callback",
              hc: "event_developer_id_string",
              Og: "event",
              be: "event_settings",
              ce: "event_timeout",
              Wi: "experiments",
              df: "firebase_id",
              de: "first_party_collection",
              ee: "_x_20",
              Hb: "_x_19",
              Pg: "fledge",
              Qg: "flight_error_code",
              Rg: "flight_error_message",
              Sg: "gac_gclid",
              fe: "gac_wbraid",
              Tg: "gac_wbraid_multiple_conversions",
              Yc: "ga_restrict_domain",
              ef: "ga_temp_client_id",
              Ug: "gdpr_applies",
              Vg: "geo_granularity",
              ob: "value_callback",
              ab: "value_key",
              ic: "global_developer_id_string",
              pl: "google_ono",
              xb: "google_signals",
              he: "google_tld",
              ie: "groups",
              Wg: "gsa_experiment_id",
              Xg: "iframe_state",
              je: "ignore_referrer",
              ff: "internal_traffic_results",
              Yg: "is_passthrough",
              Qa: "language",
              hf: "legacy_developer_id_string",
              za: "linker",
              jc: "accept_incoming",
              kc: "decorate_forms",
              aa: "domains",
              Zc: "url_position",
              Zg: "method",
              mc: "new_customer",
              ah: "non_interaction",
              Xi: "optimize_id",
              Ra: "page_location",
              jf: "page_path",
              Sa: "page_referrer",
              nc: "page_title",
              bh: "passengers",
              dh: "phone_conversion_callback",
              Yi: "phone_conversion_country_code",
              eh: "phone_conversion_css_class",
              Zi: "phone_conversion_ids",
              fh: "phone_conversion_number",
              gh: "phone_conversion_options",
              hh: "quantity",
              ke: "redact_device_info",
              ih: "redact_enhanced_user_id",
              aj: "redact_ga_client_id",
              bj: "redact_user_id",
              me: "referral_exclusion_definition",
              yb: "restricted_data_processing",
              cj: "retoken",
              jh: "screen_name",
              Ib: "screen_resolution",
              dj: "search_term",
              Fa: "send_page_view",
              Jb: "send_to",
              ad: "session_duration",
              ne: "session_engaged",
              kf: "session_engaged_time",
              zb: "session_id",
              oe: "session_number",
              oc: "delivery_postal_code",
              kh: "tc_privacy_string",
              lh: "temporary_client_id",
              ej: "tracking_id",
              lf: "traffic_type",
              Ma: "transaction_id",
              wa: "transport_url",
              mh: "trip_type",
              bd: "update",
              pb: "url_passthrough",
              nf: "_user_agent_architecture",
              pf: "_user_agent_bitness",
              qf: "_user_agent_full_version_list",
              nh: "_user_agent_mobile",
              rf: "_user_agent_model",
              sf: "_user_agent_platform",
              tf: "_user_agent_platform_version",
              oh: "_user_agent_wait",
              uf: "_user_agent_wow64",
              ka: "user_data",
              ph: "user_data_auto_latency",
              qh: "user_data_auto_meta",
              rh: "user_data_auto_multi",
              sh: "user_data_auto_selectors",
              th: "user_data_auto_status",
              uh: "user_data_mode",
              vf: "user_data_settings",
              Aa: "user_id",
              Ta: "user_properties",
              vh: "us_privacy_string",
              ra: "value",
              pe: "wbraid",
              wh: "wbraid_multiple_conversions",
              zh: "_host_name",
              Ah: "_in_page_command",
              Bh: "_is_linker_valid",
              Ch: "_is_passthrough_cid",
              Dh: "non_personalized_ads"
          }
      },
      Qg = {},
      Rg = Object.freeze((Qg[S.g.fa] = 1, Qg[S.g.Jc] = 1, Qg[S.g.Kc] = 1, Qg[S.g.ia] = 1, Qg[S.g.lb] = 1, Qg[S.g.Pa] = 1, Qg[S.g.nb] = 1, Qg[S.g.Rc] = 1, Qg[S.g.af] = 1, Qg[S.g.Za] = 1, Qg[S.g.Gb] = 1, Qg[S.g.Tc] = 1, Qg[S.g.ja] = 1, Qg[S.g.bf] = 1, Qg[S.g.fc] = 1, Qg[S.g.be] = 1,
          Qg[S.g.ce] = 1, Qg[S.g.de] = 1, Qg[S.g.Yc] = 1, Qg[S.g.xb] = 1, Qg[S.g.he] = 1, Qg[S.g.ie] = 1, Qg[S.g.ff] = 1, Qg[S.g.za] = 1, Qg[S.g.me] = 1, Qg[S.g.yb] = 1, Qg[S.g.Fa] = 1, Qg[S.g.Jb] = 1, Qg[S.g.ad] = 1, Qg[S.g.kf] = 1, Qg[S.g.oc] = 1, Qg[S.g.wa] = 1, Qg[S.g.bd] = 1, Qg[S.g.vf] = 1, Qg[S.g.Ta] = 1, Qg));
  Object.freeze([S.g.Ra, S.g.Sa, S.g.nc, S.g.Qa, S.g.jh, S.g.Aa, S.g.df, S.g.Oi]);
  var Sg = {},
      Tg = Object.freeze((Sg[S.g.Di] = 1, Sg[S.g.Ei] = 1, Sg[S.g.Fi] = 1, Sg[S.g.Gi] = 1, Sg[S.g.Hi] = 1, Sg[S.g.Ii] = 1, Sg[S.g.Ji] = 1, Sg[S.g.Ki] = 1, Sg[S.g.Li] = 1, Sg[S.g.Xe] = 1, Sg)),
      Ug = {},
      Vg = Object.freeze((Ug[S.g.Cg] = 1, Ug[S.g.Dg] = 1, Ug[S.g.Ec] = 1, Ug[S.g.Fc] = 1, Ug[S.g.Eg] = 1, Ug[S.g.Zb] = 1, Ug[S.g.Gc] = 1, Ug[S.g.Eb] = 1, Ug[S.g.ac] = 1, Ug[S.g.Fb] = 1, Ug[S.g.Ja] = 1, Ug[S.g.Hc] = 1, Ug[S.g.Oa] = 1, Ug[S.g.Fg] = 1, Ug)),
      Wg = Object.freeze([S.g.fa, S.g.Kc, S.g.Gb]),
      Xg = Object.freeze([].concat(Wg)),
      Yg = Object.freeze([S.g.Pa, S.g.ce, S.g.ad, S.g.kf, S.g.ae]),
      Zg = Object.freeze([].concat(Yg)),
      $g = {},
      ah = ($g[S.g.J] = "1", $g[S.g.Z] = "2", $g),
      bh = {},
      ch = Object.freeze((bh[S.g.fa] = 1, bh[S.g.Jc] = 1, bh[S.g.Ea] = 1, bh[S.g.jb] = 1, bh[S.g.Td] = 1, bh[S.g.Lc] = 1, bh[S.g.Mc] = 1, bh[S.g.Nc] = 1, bh[S.g.ia] = 1, bh[S.g.Oc] = 1, bh[S.g.La] = 1, bh[S.g.ya] = 1, bh[S.g.lb] = 1, bh[S.g.Pa] = 1, bh[S.g.nb] = 1, bh[S.g.Za] = 1, bh[S.g.va] = 1, bh[S.g.Sc] = 1, bh[S.g.ja] = 1, bh[S.g.Hg] = 1, bh[S.g.Wc] = 1, bh[S.g.Xc] = 1, bh[S.g.df] = 1, bh[S.g.de] = 1, bh[S.g.Qa] = 1, bh[S.g.mc] = 1, bh[S.g.Ra] = 1, bh[S.g.Sa] = 1, bh[S.g.dh] = 1, bh[S.g.eh] = 1, bh[S.g.fh] = 1,
          bh[S.g.gh] = 1, bh[S.g.yb] = 1, bh[S.g.Fa] = 1, bh[S.g.Jb] = 1, bh[S.g.oc] = 1, bh[S.g.Ma] = 1, bh[S.g.wa] = 1, bh[S.g.bd] = 1, bh[S.g.pb] = 1, bh[S.g.ka] = 1, bh[S.g.Aa] = 1, bh[S.g.ra] = 1, bh));
  Object.freeze(S.g);
  var dh = {},
      eh = m.google_tag_manager = m.google_tag_manager || {},
      fh = Math.random();
  dh.ed = "aj0";
  dh.Bf = Number("") || 0;
  dh.ma = "dataLayer";
  dh.Bi = "ChEI8O/YmgYQmpbwysTozpKkARIlAGh49XG4xZDIcBqih3jcoLXmiLDXiF2rg69owhFWpBPCTqBizRoCfZ4\x3d";
  var gh = {
          __cl: !0,
          __ecl: !0,
          __ehl: !0,
          __evl: !0,
          __fal: !0,
          __fil: !0,
          __fsl: !0,
          __hl: !0,
          __jel: !0,
          __lcl: !0,
          __sdl: !0,
          __tl: !0,
          __ytl: !0
      },
      hh = {
          __paused: !0,
          __tg: !0
      },
      ih;
  for (ih in gh) gh.hasOwnProperty(ih) && (hh[ih] = !0);
  var jh = Pa("true"),
      kh = Pa(""),
      lh, mh = !1;
  mh = !0;
  lh = mh;
  var nh, oh = !1;
  nh = oh;
  var ph, qh = !1;
  ph = qh;
  var rh, sh = !1;
  rh = sh;
  dh.Rd = "www.googletagmanager.com";
  var th = "" + dh.Rd + (lh ? "/gtag/js" : "/gtm.js"),
      uh = null,
      vh = null,
      wh = {},
      xh = {},
      yh = function() {
          var a = eh.sequence || 1;
          eh.sequence = a + 1;
          return a
      };
  dh.Ai = "true";
  var zh = "";
  dh.ve = zh;
  var Ah = new Ka,
      Ih = {},
      Jh = {},
      Mh = {
          name: dh.ma,
          set: function(a, b) {
              J(bb(a, b), Ih);
              Kh()
          },
          get: function(a) {
              return Lh(a, 2)
          },
          reset: function() {
              Ah = new Ka;
              Ih = {};
              Kh()
          }
      },
      Lh = function(a, b) {
          return 2 != b ? Ah.get(a) : Nh(a)
      },
      Nh = function(a, b) {
          var c = a.split(".");
          b = b || [];
          for (var d = Ih, e = 0; e < c.length; e++) {
              if (null === d) return !1;
              if (void 0 === d) break;
              d = d[c[e]];
              if (-1 !== b.indexOf(d)) return
          }
          return d
      },
      Oh = function(a, b) {
          Jh.hasOwnProperty(a) || (Ah.set(a, b), J(bb(a, b), Ih), Kh())
      },
      Ph = function() {
          for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                  "gtm.blacklist", "tagTypeBlacklist"
              ], b = 0; b < a.length; b++) {
              var c = a[b],
                  d = Lh(c, 1);
              if (Ea(d) || Dc(d)) d = J(d);
              Jh[c] = d
          }
      },
      Kh = function(a) {
          Ma(Jh, function(b, c) {
              Ah.set(b, c);
              J(bb(b), Ih);
              J(bb(b, c), Ih);
              a && delete Jh[b]
          })
      },
      Qh = function(a, b) {
          var c, d = 1 !== (void 0 === b ? 2 : b) ? Nh(a) : Ah.get(a);
          "array" === Bc(d) || "object" === Bc(d) ? c = J(d) : c = d;
          return c
      };
  var Rh, Sh = !1;

  function Th() {
      Sh = !0;
      Rh = Rh || {}
  }
  var Uh = function(a) {
      Sh || Th();
      return Rh[a]
  };
  var Vh = function() {
          var a = m.screen;
          return {
              width: a ? a.width : 0,
              height: a ? a.height : 0
          }
      },
      Wh = function(a) {
          if (H.hidden) return !0;
          var b = a.getBoundingClientRect();
          if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
          var c = m.getComputedStyle(a, null);
          if ("hidden" === c.visibility) return !0;
          for (var d = a, e = c; d;) {
              if ("none" === e.display) return !0;
              var f = e.opacity,
                  g = e.filter;
              if (g) {
                  var h = g.indexOf("opacity(");
                  0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                      f))
              }
              if (void 0 !== f && 0 >= f) return !0;
              (d = d.parentElement) && (e = m.getComputedStyle(d, null))
          }
          return !1
      };
  var Xh = function() {
          var a = H.body,
              b = H.documentElement || a && a.parentElement,
              c, d;
          if (H.compatMode && "BackCompat" !== H.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
          else {
              var e = function(f, g) {
                  return f && g ? Math.min(f, g) : Math.max(f, g)
              };
              c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
              d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
          }
          return {
              width: d,
              height: c
          }
      },
      Yh = function(a) {
          var b = Xh(),
              c = b.height,
              d = b.width,
              e = a.getBoundingClientRect(),
              f = e.bottom - e.top,
              g = e.right - e.left;
          return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
              d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
      };
  var Zh = [],
      $h = !(!m.IntersectionObserver || !m.IntersectionObserverEntry),
      ai = function(a, b, c) {
          for (var d = new m.IntersectionObserver(a, {
                  threshold: c
              }), e = 0; e < b.length; e++) d.observe(b[e]);
          for (var f = 0; f < Zh.length; f++)
              if (!Zh[f]) return Zh[f] = d, f;
          return Zh.push(d) - 1
      },
      bi = function(a, b, c) {
          function d(h, l) {
              var n = {
                      top: 0,
                      bottom: 0,
                      right: 0,
                      left: 0,
                      width: 0,
                      height: 0
                  },
                  p = {
                      boundingClientRect: h.getBoundingClientRect(),
                      intersectionRatio: l,
                      intersectionRect: n,
                      isIntersecting: 0 < l,
                      rootBounds: n,
                      target: h,
                      time: Ta()
                  };
              I(function() {
                  return a(p)
              })
          }
          for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
          c.sort(function(h, l) {
              return h - l
          });
          return function() {
              for (var h = 0; h < b.length; h++) {
                  var l = Yh(b[h]);
                  if (l > e[h])
                      for (; f[h] < c.length - 1 && l >= c[f[h] + 1];) d(b[h], l), f[h]++;
                  else if (l < e[h])
                      for (; 0 <= f[h] && l <= c[f[h]];) d(b[h], l), f[h]--;
                  e[h] = l
              }
          }
      },
      ci = function(a, b, c) {
          for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
          if ($h) {
              var e = !1;
              I(function() {
                  e ||
                      bi(a, b, c)()
              });
              return ai(function(f) {
                  e = !0;
                  for (var g = {
                          zc: 0
                      }; g.zc < f.length; g = {
                          zc: g.zc
                      }, g.zc++) I(function(h) {
                      return function() {
                          return a(f[h.zc])
                      }
                  }(g))
              }, b, c)
          }
          return m.setInterval(bi(a, b, c), 1E3)
      },
      di = function(a) {
          $h ? 0 <= a && a < Zh.length && Zh[a] && (Zh[a].disconnect(), Zh[a] = void 0) : m.clearInterval(a)
      };
  var ei = /:[0-9]+$/,
      fi = function(a, b, c, d) {
          for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
              var h = f[g].split("=");
              if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                  var l = h.slice(1).join("=");
                  if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                  e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
              }
          }
          return c ? e : void 0
      },
      ii = function(a, b, c, d, e) {
          b && (b = String(b).toLowerCase());
          if ("protocol" === b || "port" === b) a.protocol = gi(a.protocol) || gi(m.location.protocol);
          "port" === b ? a.port = String(Number(a.hostname ? a.port :
              m.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || m.location.hostname).replace(ei, "").toLowerCase());
          return hi(a, b, c, d, e)
      },
      hi = function(a, b, c, d, e) {
          var f, g = gi(a.protocol);
          b && (b = String(b).toLowerCase());
          switch (b) {
              case "url_no_fragment":
                  f = ji(a);
                  break;
              case "protocol":
                  f = g;
                  break;
              case "host":
                  f = a.hostname.replace(ei, "").toLowerCase();
                  if (c) {
                      var h = /^www\d*\./.exec(f);
                      h && h[0] && (f = f.substr(h[0].length))
                  }
                  break;
              case "port":
                  f = String(Number(a.port) || ("http" ===
                      g ? 80 : "https" === g ? 443 : ""));
                  break;
              case "path":
                  a.pathname || a.hostname || Rb("TAGGING", 1);
                  f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                  var l = f.split("/");
                  0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
                  f = l.join("/");
                  break;
              case "query":
                  f = a.search.replace("?", "");
                  e && (f = fi(f, e, !1));
                  break;
              case "extension":
                  var n = a.pathname.split(".");
                  f = 1 < n.length ? n[n.length - 1] : "";
                  f = f.split("/")[0];
                  break;
              case "fragment":
                  f = a.hash.replace("#", "");
                  break;
              default:
                  f = a && a.href
          }
          return f
      },
      gi = function(a) {
          return a ? a.replace(":",
              "").toLowerCase() : ""
      },
      ji = function(a) {
          var b = "";
          if (a && a.href) {
              var c = a.href.indexOf("#");
              b = 0 > c ? a.href : a.href.substr(0, c)
          }
          return b
      },
      ki = function(a) {
          var b = H.createElement("a");
          a && (b.href = a);
          var c = b.pathname;
          "/" !== c[0] && (a || Rb("TAGGING", 1), c = "/" + c);
          var d = b.hostname.replace(ei, "");
          return {
              href: b.href,
              protocol: b.protocol,
              host: b.host,
              hostname: d,
              pathname: c,
              search: b.search,
              hash: b.hash,
              port: b.port
          }
      },
      li = function(a) {
          function b(n) {
              var p = n.split("=")[0];
              return 0 > d.indexOf(p) ? n : p + "=0"
          }

          function c(n) {
              return n.split("&").map(b).filter(function(p) {
                  return void 0 !==
                      p
              }).join("&")
          }
          var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
              e = ki(a),
              f = a.split(/[?#]/)[0],
              g = e.search,
              h = e.hash;
          "?" === g[0] && (g = g.substring(1));
          "#" === h[0] && (h = h.substring(1));
          g = c(g);
          h = c(h);
          "" !== g && (g = "?" + g);
          "" !== h && (h = "#" + h);
          var l = "" + f + g + h;
          "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
          return l
      };
  var mi = {};
  var oi = function(a, b, c) {
          if (a) {
              var d = a.element,
                  e = {
                      Xa: a.Xa,
                      tagName: d.tagName,
                      type: 1
                  };
              b && (e.querySelector = ni(d));
              c && (e.isVisible = !Wh(d));
              return e
          }
      },
      ri = function(a) {
          if (0 != a.length) {
              var b;
              b = pi(a, function(c) {
                  return !qi.test(c.Xa)
              });
              b = pi(b, function(c) {
                  return "INPUT" === c.element.tagName.toUpperCase()
              });
              b = pi(b, function(c) {
                  return !Wh(c.element)
              });
              return b[0]
          }
      },
      pi = function(a, b) {
          if (1 >= a.length) return a;
          var c = a.filter(b);
          return 0 == c.length ? a : c
      },
      ni = function(a) {
          var b;
          if (a === H.body) b = "body";
          else {
              var c;
              if (a.id) c = "#" + a.id;
              else {
                  var d;
                  if (a.parentElement) {
                      var e;
                      a: {
                          var f = a.parentElement;
                          if (f) {
                              for (var g = 0; g < f.childElementCount; g++)
                                  if (f.children[g] === a) {
                                      e = g + 1;
                                      break a
                                  } e = -1
                          } else e = 1
                      }
                      d = ni(a.parentElement) + ">:nth-child(" + e + ")"
                  } else d = "";
                  c = d
              }
              b = c
          }
          return b
      },
      si = !0,
      ti = !1;
  mi.xi = "true";
  var ui = function(a) {
          if ("false" === mi.xi || !si) return !1;
          if (ti) return !0;
          var b = Uh("AW-" + a);
          return !!b && !!b.preAutoPii
      },
      vi = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
      wi = /@(gmail|googlemail)\./i,
      qi = /support|noreply/i,
      xi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
      yi = ["BR"],
      zi = {},
      Ai = function(a) {
          a = a || {
              Pb: !0,
              Qb: !0
          };
          a.qb = a.qb || {
              email: !0,
              phone: !0,
              address: !0
          };
          var b, c = a,
              d = !!c.Pb + "." + !!c.Qb;
          c && c.nd && c.nd.length && (d += "." + c.nd.join("."));
          c && c.qb && (d += "." + c.qb.email + "." + c.qb.phone + "." + c.qb.address);
          b = d;
          var e = zi[b];
          if (e && 200 > Ta() - e.timestamp) return e.result;
          var f;
          var g = [],
              h = H.body;
          if (h) {
              for (var l = h.querySelectorAll("*"), n = 0; n < l.length && 1E4 > n; n++) {
                  var p = l[n];
                  if (!(0 <= xi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                      for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                          if (!(0 <= yi.indexOf(p.children[r].tagName.toUpperCase()))) {
                              q = !0;
                              break
                          } q || g.push(p)
                  }
              }
              f = {
                  elements: g,
                  status: 1E4 < l.length ? "2" : "1"
              }
          } else f = {
              elements: g,
              status: "4"
          };
          var u = f,
              t = u.status,
              v = [],
              w;
          if (a.qb && a.qb.email) {
              for (var x =
                      u.elements, y = [], A = 0; A < x.length; A++) {
                  var B = x[A],
                      C = B.textContent;
                  "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
                  if (C) {
                      var F = C.match(vi);
                      if (F) {
                          var G = F[0],
                              D;
                          if (m.location) {
                              var N = hi(m.location, "host", !0);
                              D = 0 <= G.toLowerCase().indexOf(N)
                          } else D = !1;
                          D || y.push({
                              element: B,
                              Xa: G
                          })
                      }
                  }
              }
              var R = a && a.nd;
              if (R && 0 !== R.length) {
                  for (var U = [], pa = 0; pa < y.length; pa++) {
                      for (var Q = !0, O = 0; O < R.length; O++) {
                          var ja = R[O];
                          if (ja && qg(y[pa].element, ja)) {
                              Q = !1;
                              break
                          }
                      }
                      Q && U.push(y[pa])
                  }
                  v = U
              } else v = y;
              w = ri(v);
              10 < y.length && (t = "3")
          }
          var aa = [];
          !a.pg && w && (v = [w]);
          for (var V = 0; V < v.length; V++) aa.push(oi(v[V], a.Pb, a.Qb));
          var Fa = {
              elements: aa.slice(0, 10),
              Ne: oi(w, a.Pb, a.Qb),
              status: t
          };
          zi[b] = {
              timestamp: Ta(),
              result: Fa
          };
          return Fa
      },
      Bi = function(a) {
          return a.tagName + ":" + a.isVisible + ":" + a.Xa.length + ":" + wi.test(a.Xa)
      };
  var Ci = function(a, b, c) {
          if (!c) return !1;
          var d = c.selector_type,
              e = String(c.value),
              f;
          if ("js_variable" === d) {
              e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
              for (var g = e.split(","), h = 0; h < g.length; h++) {
                  var l = g[h].trim();
                  if (l) {
                      if (0 === l.indexOf("dataLayer.")) f = Lh(l.substring(10));
                      else {
                          var n = l.split(".");
                          f = m[n.shift()];
                          for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                      }
                      if (void 0 !== f) break
                  }
              }
          } else if ("css_selector" === d && og) {
              var q = pg(e);
              if (q && 0 < q.length) {
                  f = [];
                  for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(ic(q[r]) ||
                      Ra(q[r].value));
                  f = 1 === f.length ? f[0] : f
              }
          }
          return f ? (a[b] = f, !0) : !1
      },
      Di = function(a) {
          if (a) {
              var b = {},
                  c = !1;
              c = Ci(b, "email", a.email) || c;
              c = Ci(b, "phone_number", a.phone) || c;
              b.address = [];
              for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                  var f = {};
                  c = Ci(f, "first_name", d[e].first_name) || c;
                  c = Ci(f, "last_name", d[e].last_name) || c;
                  c = Ci(f, "street", d[e].street) || c;
                  c = Ci(f, "city", d[e].city) || c;
                  c = Ci(f, "region", d[e].region) || c;
                  c = Ci(f, "country", d[e].country) || c;
                  c = Ci(f, "postal_code", d[e].postal_code) || c;
                  b.address.push(f)
              }
              return c ?
                  b : void 0
          }
      },
      Ei = function(a) {
          return a.D[S.g.vf]
      },
      Fi = function(a) {
          if (!Dc(a)) return !1;
          var b = a.mode;
          return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
      },
      Gi = function(a) {
          if (a) {
              if ("selectors" === a.mode || Dc(a.selectors)) return Di(a.selectors);
              if ("auto_detect" === a.mode || Dc(a.auto_detect)) {
                  var b;
                  var c = a.auto_detect;
                  if (c) {
                      var d = Ai({
                              Pb: !1,
                              Qb: !1,
                              nd: c.exclude_element_selectors,
                              qb: {
                                  email: !!c.email,
                                  phone: !!c.phone,
                                  address: !!c.address
                              }
                          }).elements,
                          e = {};
                      if (0 < d.length)
                          for (var f = 0; f < d.length; f++) {
                              var g =
                                  d[f];
                              if (1 === g.type) {
                                  e.email = g.Xa;
                                  break
                              }
                          }
                      b = e
                  } else b = void 0;
                  return b
              }
          }
      };
  var Oi = {},
      Pi = function(a, b) {
          if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
          void 0 === Oi[a] && (Oi[a] = Math.floor(Math.random() * b));
          return Oi[a]
      };
  var Ri = {
      Jf: "CN",
      ii: ""
  };
  var Si = new function(a, b) {
      this.h = a;
      this.defaultValue = void 0 === b ? !1 : b
  }(1933);
  var Ti = function(a) {
      Ti[" "](a);
      return a
  };
  Ti[" "] = function() {};
  var Vi = function() {
      var a = Ui,
          b = "Sf";
      if (a.Sf && a.hasOwnProperty(b)) return a.Sf;
      var c = new a;
      return a.Sf = c
  };
  var Ui = function() {
      var a = {};
      this.h = function() {
          var b = Si.h,
              c = Si.defaultValue;
          return null != a[b] ? a[b] : c
      };
      this.B = function() {
          a[Si.h] = !0
      }
  };
  var Wi = [];

  function Xi() {
      var a = Xb("google_tag_data", {});
      a.ics || (a.ics = {
          entries: {},
          set: Yi,
          update: Zi,
          addListener: $i,
          notifyListeners: aj,
          active: !1,
          usedDefault: !1,
          usedUpdate: !1,
          accessedDefault: !1,
          accessedAny: !1,
          wasSetLate: !1
      });
      return a.ics
  }

  function Yi(a, b, c, d, e, f) {
      var g = Xi();
      g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
      g.active = !0;
      g.usedDefault = !0;
      if (void 0 != b) {
          var h = g.entries,
              l = h[a] || {},
              n = l.region,
              p = c && k(c) ? c.toUpperCase() : void 0;
          d = d.toUpperCase();
          e = e.toUpperCase();
          if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
              var q = !!(f && 0 < f && void 0 === l.update),
                  r = {
                      region: p,
                      initial: "granted" === b,
                      update: l.update,
                      quiet: q
                  };
              if ("" !== d || !1 !== l.initial) h[a] = r;
              q && m.setTimeout(function() {
                  h[a] === r && r.quiet && (r.quiet = !1, bj(a), aj(), Rb("TAGGING",
                      2))
              }, f)
          }
      }
  }

  function Zi(a, b) {
      var c = Xi();
      c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
      c.active = !0;
      c.usedUpdate = !0;
      if (void 0 != b) {
          var d = cj(c, a),
              e = c.entries,
              f = e[a] = e[a] || {};
          f.update = "granted" === b;
          var g = cj(c, a);
          f.quiet ? (f.quiet = !1, bj(a)) : g !== d && bj(a)
      }
  }

  function $i(a, b) {
      Wi.push({
          Hf: a,
          Pj: b
      })
  }

  function bj(a) {
      for (var b = 0; b < Wi.length; ++b) {
          var c = Wi[b];
          Ea(c.Hf) && -1 !== c.Hf.indexOf(a) && (c.fi = !0)
      }
  }

  function aj(a, b) {
      for (var c = 0; c < Wi.length; ++c) {
          var d = Wi[c];
          if (d.fi) {
              d.fi = !1;
              try {
                  d.Pj({
                      consentEventId: a,
                      consentPriorityId: b
                  })
              } catch (e) {}
          }
      }
  }

  function cj(a, b) {
      var c = a.entries[b] || {};
      return void 0 !== c.update ? c.update : c.initial
  }
  var dj = function(a) {
          var b = Xi();
          b.accessedAny = !0;
          return cj(b, a)
      },
      ej = function(a) {
          var b = Xi();
          b.accessedDefault = !0;
          return (b.entries[a] || {}).initial
      },
      fj = function(a) {
          var b = Xi();
          b.accessedAny = !0;
          return !(b.entries[a] || {}).quiet
      },
      gj = function() {
          if (!Vi().h()) return !1;
          var a = Xi();
          a.accessedAny = !0;
          return a.active
      },
      hj = function() {
          var a = Xi();
          a.accessedDefault = !0;
          return a.usedDefault
      },
      ij = function(a, b) {
          Xi().addListener(a, b)
      },
      jj = function(a, b) {
          Xi().notifyListeners(a, b)
      },
      kj = function(a, b) {
          function c() {
              for (var e = 0; e < b.length; e++)
                  if (!fj(b[e])) return !0;
              return !1
          }
          if (c()) {
              var d = !1;
              ij(b, function(e) {
                  d || c() || (d = !0, a(e))
              })
          } else a({})
      },
      lj = function(a, b) {
          function c() {
              for (var f = [], g = 0; g < d.length; g++) {
                  var h = d[g];
                  !1 === dj(h) || e[h] || (f.push(h), e[h] = !0)
              }
              return f
          }
          var d = k(b) ? [b] : b,
              e = {};
          c().length !== d.length && ij(d, function(f) {
              var g = c();
              0 < g.length && (f.Hf = g, a(f))
          })
      };

  function mj() {}

  function nj() {};

  function oj(a) {
      for (var b = [], c = 0; c < pj.length; c++) {
          var d = a(pj[c]);
          b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
      }
      return b.join("")
  }
  var pj = [S.g.J, S.g.Z],
      qj = function(a) {
          var b = a[S.g.Ue];
          b && P(40);
          var c = a[S.g.Ve];
          c && P(41);
          for (var d = Ea(b) ? b : [b], e = {
                  Ac: 0
              }; e.Ac < d.length; e = {
                  Ac: e.Ac
              }, ++e.Ac) Ma(a, function(f) {
              return function(g, h) {
                  if (g !== S.g.Ue && g !== S.g.Ve) {
                      var l = d[f.Ac],
                          n = Ri.Jf,
                          p = Ri.ii;
                      Xi().set(g, h, l, n, p, c)
                  }
              }
          }(e))
      },
      rj = 0,
      sj = function(a, b) {
          Ma(a, function(e, f) {
              Xi().update(e, f)
          });
          jj(b.eventId, b.priorityId);
          var c = Ta(),
              d = c - rj;
          rj && 0 <= d && 1E3 > d && P(66);
          rj = c
      },
      tj = function(a) {
          var b = dj(a);
          return void 0 != b ? b : !0
      },
      uj = function() {
          return "G1" + oj(dj)
      },
      vj = function(a,
          b) {
          ij(a, b)
      },
      wj = function(a, b) {
          lj(a, b)
      },
      xj = function(a, b) {
          kj(a, b)
      };
  var yj = function(a) {
      var b = 1,
          c, d, e;
      if (a)
          for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
      return b
  };
  var zj = function(a, b, c) {
      for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
          var g = e[f].split("="),
              h = g[0].replace(/^\s*|\s*$/g, "");
          if (h && h == a) {
              var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
              l && c && (l = decodeURIComponent(l));
              d.push(l)
          }
      }
      return d
  };
  var Aj = function(a, b) {
          var c = function() {};
          c.prototype = a.prototype;
          var d = new c;
          a.apply(d, Array.prototype.slice.call(arguments, 1));
          return d
      },
      Bj = function(a) {
          var b = a;
          return function() {
              if (b) {
                  var c = b;
                  b = null;
                  c()
              }
          }
      };

  function Cj(a) {
      return "null" !== a.origin
  };
  var Fj = function(a, b, c, d) {
          return Dj(d) ? zj(a, String(b || Ej()), c) : []
      },
      Ij = function(a, b, c, d, e) {
          if (Dj(e)) {
              var f = Gj(a, d, e);
              if (1 === f.length) return f[0].id;
              if (0 !== f.length) {
                  f = Hj(f, function(g) {
                      return g.De
                  }, b);
                  if (1 === f.length) return f[0].id;
                  f = Hj(f, function(g) {
                      return g.Cd
                  }, c);
                  return f[0] ? f[0].id : void 0
              }
          }
      };

  function Jj(a, b, c, d) {
      var e = Ej(),
          f = window;
      Cj(f) && (f.document.cookie = a);
      var g = Ej();
      e = a; g = a;
      return e != g || void 0 != c && 0 <= Fj(b, g, !1, d).indexOf(c)
  }
  var Nj = function(a, b, c, d) {
          function e(w, x, y) {
              if (null == y) return delete h[x], w;
              h[x] = y;
              return w + "; " + x + "=" + y
          }

          function f(w, x) {
              if (null == x) return delete h[x], w;
              h[x] = !0;
              return w + "; " + x
          }
          if (!Dj(c.Cb)) return 2;
          var g;
          void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Kj(b), g = a + "=" + b);
          var h = {};
          g = e(g, "path", c.path);
          var l;
          c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
          g = e(g, "expires", l);
          g = e(g, "max-age", c.vk);
          g = e(g, "samesite",
              c.Rk);
          c.Tk && (g = f(g, "secure"));
          var n = c.domain;
          if (n && "auto" === n.toLowerCase()) {
              for (var p = Lj(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
                  var t = "none" !== p[u] ? p[u] : void 0,
                      v = e(g, "domain", t);
                  v = f(v, c.flags);
                  try {
                      d && d(a, h)
                  } catch (w) {
                      q = w;
                      continue
                  }
                  r = !0;
                  if (!Mj(t, c.path) && Jj(v, a, b, c.Cb)) return 0
              }
              if (q && !r) throw q;
              return 1
          }
          n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
          g = f(g, c.flags);
          d && d(a, h);
          return Mj(n, c.path) ? 1 : Jj(g, a, b, c.Cb) ? 0 : 1
      },
      Oj = function(a, b, c) {
          null == c.path && (c.path = "/");
          c.domain || (c.domain = "auto");
          return Nj(a,
              b, c)
      };

  function Hj(a, b, c) {
      for (var d = [], e = [], f, g = 0; g < a.length; g++) {
          var h = a[g],
              l = b(h);
          l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h)
      }
      return 0 < d.length ? d : e
  }

  function Gj(a, b, c) {
      for (var d = [], e = Fj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
          var g = e[f].split("."),
              h = g.shift();
          if (!b || -1 !== b.indexOf(h)) {
              var l = g.shift();
              l && (l = l.split("-"), d.push({
                  id: g.join("."),
                  De: 1 * l[0] || 1,
                  Cd: 1 * l[1] || 1
              }))
          }
      }
      return d
  }
  var Kj = function(a) {
          a && 1200 < a.length && (a = a.substring(0, 1200));
          return a
      },
      Pj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
      Qj = /(^|\.)doubleclick\.net$/i,
      Mj = function(a, b) {
          return Qj.test(window.document.location.hostname) || "/" === b && Pj.test(a)
      },
      Ej = function() {
          return Cj(window) ? window.document.cookie : ""
      },
      Lj = function() {
          var a = [],
              b = window.document.location.hostname.split(".");
          if (4 === b.length) {
              var c = b[b.length - 1];
              if (parseInt(c, 10).toString() === c) return ["none"]
          }
          for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
          var e = window.document.location.hostname;
          Qj.test(e) || Pj.test(e) || a.push("none");
          return a
      },
      Dj = function(a) {
          if (!Vi().h() || !a || !gj()) return !0;
          if (!fj(a)) return !1;
          var b = dj(a);
          return null == b ? !0 : !!b
      };
  var Rj = function(a) {
          var b = Math.round(2147483647 * Math.random());
          return a ? String(b ^ yj(a) & 2147483647) : String(b)
      },
      Sj = function(a) {
          return [Rj(a), Math.round(Ta() / 1E3)].join(".")
      },
      Vj = function(a, b, c, d, e) {
          var f = Tj(b);
          return Ij(a, f, Uj(c), d, e)
      },
      Wj = function(a, b, c, d) {
          var e = "" + Tj(c),
              f = Uj(d);
          1 < f && (e += "-" + f);
          return [b, e, a].join(".")
      },
      Tj = function(a) {
          if (!a) return 1;
          a = 0 === a.indexOf(".") ? a.substr(1) : a;
          return a.split(".").length
      },
      Uj = function(a) {
          if (!a || "/" === a) return 1;
          "/" !== a[0] && (a = "/" + a);
          "/" !== a[a.length - 1] && (a += "/");
          return a.split("/").length -
              1
      };
  var Xj = function() {
      eh.dedupe_gclid || (eh.dedupe_gclid = "" + Sj());
      return eh.dedupe_gclid
  };
  var Yj = function() {
      var a = !1;
      return a
  };
  var We = {
          N: "G-3F1C521DHQ",
          Yb: "71030025"
      },
      Zj = {
          di: "G-3F1C521DHQ",
          ei: "G-3F1C521DHQ"
      };
  We.zf = Pa("");
  var ak = function() {
          return Zj.di ? Zj.di.split("|") : [We.N]
      },
      bk = function() {
          if (Zj.ei) return Zj.ei.split("|");
          P(84);
          return []
      },
      ck = function() {
          this.container = {};
          this.destination = {};
          this.canonical = {}
      },
      ek = function() {
          for (var a = dk(), b = ak(), c = 0; c < b.length; c++) {
              var d = a.container[b[c]];
              !d || Da(d) ? a.container[b[c]] = {
                  state: 2
              } : d.state = 2
          }
          for (var e = bk(), f = 0; f < e.length; f++) {
              var g = a.destination[e[f]];
              g && 0 === g.state && P(93);
              g ? g.state = 2 : a.destination[e[f]] = {
                  state: 2
              }
          }
          a.canonical[We.Yb] = 2
      },
      fk = function(a) {
          return !!dk().container[a]
      },
      gk = function() {
          var a = dk().container,
              b;
          for (b in a)
              if (a.hasOwnProperty(b)) {
                  var c = a[b];
                  if (Da(c)) {
                      if (1 === c) return !0
                  } else if (1 === c.state) return !0
              } return !1
      },
      hk = function() {
          var a = {};
          Ma(dk().destination, function(b, c) {
              0 === c.state && (a[b] = c)
          });
          return a
      };

  function dk() {
      var a = eh.tidr;
      a || (a = new ck, eh.tidr = a);
      return a
  }
  var ik = {
          "": "n",
          UA: "u",
          AW: "a",
          DC: "d",
          G: "e",
          GF: "f",
          GT: "t",
          HA: "h",
          MC: "m",
          GTM: "g",
          OPT: "o"
      },
      jk = {
          UA: 1,
          AW: 2,
          DC: 3,
          G: 4,
          GF: 5,
          GT: 12,
          GTM: 10,
          HA: 6,
          MC: 7
      },
      kk = function(a) {
          var b = We.N.split("-"),
              c = b[0].toUpperCase();
          if (K(45)) {
              var d = {};
              d.Ij = We.N;
              d.Nk = dh.Bf;
              d.Qk = dh.ed;
              d.tk = We.zf ? 2 : 1;
              lh ? (d.Qe = jk[c], d.Qe || (d.Qe = 0)) : d.Qe = rh ? 13 : 10;
              ph ? d.bi = 1 : Yj() && (d.bi = 2);
              var e;
              var f = d.Qe,
                  g = d.bi;
              void 0 === f ? e = "" : (g || (g = 0), e = "" + Hf(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | g]);
              var h = d.wl,
                  l = "4" + e + (h ? "" + Hf(2,
                      1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h] : ""),
                  n, p = d.Qk;
              n = p && Ef.test(p) ? "" + Hf(3, 2) + p : "";
              var q, r = d.Nk;
              q = r ? "" + Hf(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [r] : "";
              var u;
              var t = d.Ij;
              if (t && a) {
                  var v = t.split("-"),
                      w = v[0].toUpperCase();
                  if ("GTM" !== w && "OPT" !== w) u = "";
                  else {
                      var x = v[1];
                      u = "" + Hf(5, 3) + (1 + x.length) + (d.tk || 0) + x
                  }
              } else u = "";
              return l + n + q + u
          }
          var y = ik[c] || "i",
              A = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
              B = "w";
          lh && (B = Yj() ? "s" : "o");
          nh ? ("w" === B && (B = "x"), "o" ===
              B && (B = "q")) : ph ? ("w" === B && (B = "y"), "o" === B && (B = "r")) : rh && (B = "z");
          return "2" + B + y + (4 === dh.ed.length ? dh.ed.slice(1) : dh.ed) + A
      };

  function lk(a, b) {
      if ("" === a) return b;
      var c = Number(a);
      return isNaN(c) ? b : c
  };
  var mk = function(a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1)
  };

  function nk() {
      return xb("iPhone") && !xb("iPod") && !xb("iPad")
  }

  function ok() {
      nk() || xb("iPad") || xb("iPod")
  };
  xb("Opera");
  xb("Trident") || xb("MSIE");
  xb("Edge");
  !xb("Gecko") || -1 != wb().toLowerCase().indexOf("webkit") && !xb("Edge") || xb("Trident") || xb("MSIE") || xb("Edge"); - 1 != wb().toLowerCase().indexOf("webkit") && !xb("Edge") && xb("Mobile");
  xb("Macintosh");
  xb("Windows");
  xb("Linux") || xb("CrOS");
  var pk = na.navigator || null;
  pk && (pk.appVersion || "").indexOf("X11");
  xb("Android");
  nk();
  xb("iPad");
  xb("iPod");
  ok();
  wb().toLowerCase().indexOf("kaios");
  var qk = function(a, b, c, d) {
          for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
              var g = a.charCodeAt(e - 1);
              if (38 == g || 63 == g) {
                  var h = a.charCodeAt(e + f);
                  if (!h || 61 == h || 38 == h || 35 == h) return e
              }
              e += f + 1
          }
          return -1
      },
      rk = /#|$/,
      sk = function(a, b) {
          var c = a.search(rk),
              d = qk(a, 0, b, c);
          if (0 > d) return null;
          var e = a.indexOf("&", d);
          if (0 > e || e > c) e = c;
          d += b.length + 1;
          return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
      },
      tk = /[?&]($|#)/,
      uk = function(a, b, c) {
          for (var d, e = a.search(rk), f = 0, g, h = []; 0 <= (g = qk(a, f, b, e));) h.push(a.substring(f,
              g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
          h.push(a.slice(f));
          d = h.join("").replace(tk, "$1");
          var l, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
          var p = b + n;
          if (p) {
              var q, r = d.indexOf("#");
              0 > r && (r = d.length);
              var u = d.indexOf("?"),
                  t;
              0 > u || u > r ? (u = r, t = "") : t = d.substring(u + 1, r);
              q = [d.slice(0, u), t, d.slice(r)];
              var v = q[1];
              q[1] = p ? v ? v + "&" + p : p : v;
              l = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
          } else l = d;
          return l
      };
  var vk = function(a, b) {
      if (a)
          for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
  };

  function wk(a) {
      if (!a || !H.head) return null;
      var b = xk("META");
      H.head.appendChild(b);
      b.httpEquiv = "origin-trial";
      b.content = a;
      return b
  }
  var yk = function() {
          if (m.top == m) return 0;
          var a = m.location.ancestorOrigins;
          if (a) return a[a.length - 1] == m.location.origin ? 1 : 2;
          var b;
          var c = m.top;
          try {
              var d;
              if (d = !!c && null != c.location.href) b: {
                  try {
                      Ti(c.foo);
                      d = !0;
                      break b
                  } catch (e) {}
                  d = !1
              }
              b = d
          } catch (e) {
              b = !1
          }
          return b ? 1 : 2
      },
      xk = function(a, b) {
          b = void 0 === b ? document : b;
          return b.createElement(String(a).toLowerCase())
      };

  function zk(a, b, c) {
      a.google_image_requests || (a.google_image_requests = []);
      var d = xk("IMG", a.document);
      if (c) {
          var e = function() {
              if (c) {
                  var f = a.google_image_requests,
                      g = ob(f, d);
                  0 <= g && Array.prototype.splice.call(f, g, 1)
              }
              d.removeEventListener && d.removeEventListener("load", e, !1);
              d.removeEventListener && d.removeEventListener("error", e, !1)
          };
          mk(d, "load", e);
          mk(d, "error", e)
      }
      d.src = b;
      a.google_image_requests.push(d)
  }
  var Bk = function(a) {
          var b;
          b = void 0 === b ? !1 : b;
          var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
          vk(a, function(d, e) {
              d && (c += "&" + e + "=" + encodeURIComponent(d))
          });
          Ak(c, b)
      },
      Ak = function(a, b) {
          var c = window;
          b = void 0 === b ? !1 : b;
          c.fetch ? c.fetch(a, {
              keepalive: !0,
              credentials: "include",
              redirect: "follow",
              method: "get",
              mode: "no-cors"
          }) : zk(c, a, void 0 === b ? !1 : b)
      };
  var Ck = function() {};
  var Dk = function(a) {
          void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
          void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
          return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
      },
      Ek = function(a, b, c) {
          this.B = a;
          this.h = null;
          this.I = {};
          this.Ca = 0;
          this.T = void 0 === b ? 500 : b;
          this.F = void 0 === c ? !1 : c;
          this.D = null
      };
  ma(Ek, Ck);
  Ek.prototype.addEventListener = function(a) {
      var b = this,
          c = {
              internalBlockOnErrors: this.F
          },
          d = Bj(function() {
              return a(c)
          }),
          e = 0; - 1 !== this.T && (e = setTimeout(function() {
          c.tcString = "tcunavailable";
          c.internalErrorState = 1;
          d()
      }, this.T));
      var f = function(g, h) {
          clearTimeout(e);
          g ? (c = g, c.internalErrorState = Dk(c), c.internalBlockOnErrors = b.F, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
          a(c)
      };
      try {
          Fk(this, "addEventListener", f)
      } catch (g) {
          c.tcString =
              "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
      }
  };
  Ek.prototype.removeEventListener = function(a) {
      a && a.listenerId && Fk(this, "removeEventListener", null, a.listenerId)
  };
  var Hk = function(a, b, c) {
          var d;
          d = void 0 === d ? "755" : d;
          var e;
          a: {
              if (a.publisher && a.publisher.restrictions) {
                  var f = a.publisher.restrictions[b];
                  if (void 0 !== f) {
                      e = f[void 0 === d ? "755" : d];
                      break a
                  }
              }
              e = void 0
          }
          var g = e;
          if (0 === g) return !1;
          var h = c;
          2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
          var l;
          if (0 === h)
              if (a.purpose && a.vendor) {
                  var n = Gk(a.vendor.consents, void 0 === d ? "755" : d);
                  l = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Gk(a.purpose.consents, b)
              } else l = !0;
          else l = 1 === h ? a.purpose && a.vendor ? Gk(a.purpose.legitimateInterests,
              b) && Gk(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
          return l
      },
      Gk = function(a, b) {
          return !(!a || !a[b])
      },
      Fk = function(a, b, c, d) {
          c || (c = function() {});
          if ("function" === typeof a.B.__tcfapi) {
              var e = a.B.__tcfapi;
              e(b, 2, c, d)
          } else if (Ik(a)) {
              Jk(a);
              var f = ++a.Ca;
              a.I[f] = c;
              if (a.h) {
                  var g = {};
                  a.h.postMessage((g.__tcfapiCall = {
                      command: b,
                      version: 2,
                      callId: f,
                      parameter: d
                  }, g), "*")
              }
          } else c({}, !1)
      },
      Ik = function(a) {
          if (a.h) return a.h;
          var b;
          a: {
              for (var c = a.B, d = 0; 50 > d; ++d) {
                  var e;
                  try {
                      e = !(!c.frames || !c.frames.__tcfapiLocator)
                  } catch (h) {
                      e = !1
                  }
                  if (e) {
                      b = c;
                      break a
                  }
                  var f;
                  b: {
                      try {
                          var g = c.parent;
                          if (g && g != c) {
                              f = g;
                              break b
                          }
                      } catch (h) {}
                      f = null
                  }
                  if (!(c = f)) break
              }
              b = null
          }
          a.h = b;
          return a.h
      },
      Jk = function(a) {
          a.D || (a.D = function(b) {
              try {
                  var c;
                  c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                  a.I[c.callId](c.returnValue, c.success)
              } catch (d) {}
          }, mk(a.B, "message", a.D))
      },
      Kk = function(a) {
          if (!1 === a.gdprApplies) return !0;
          void 0 === a.internalErrorState && (a.internalErrorState = Dk(a));
          return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
              (Bk({
                  e: String(a.internalErrorState)
              }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
      };
  var Lk = !0;
  Lk = !1;
  var Mk = {
          1: 0,
          3: 0,
          4: 0,
          7: 3,
          9: 3,
          10: 3
      },
      Nk = lk("", 550),
      Ok = lk("", 500);

  function Pk() {
      var a = eh.tcf || {};
      return eh.tcf = a
  }
  var Uk = function() {
      var a = Pk(),
          b = new Ek(m, Lk ? 3E3 : -1);
      if (!0 === m.gtag_enable_tcf_support && !a.active && ("function" === typeof m.__tcfapi || "function" === typeof b.B.__tcfapi || null != Ik(b))) {
          a.active = !0;
          a.Fd = {};
          Qk();
          var c = null;
          Lk ? c = m.setTimeout(function() {
              Rk(a);
              Sk(a);
              c = null
          }, Ok) : a.tcString = "tcunavailable";
          try {
              b.addEventListener(function(d) {
                  c && (clearTimeout(c), c = null);
                  if (0 !== d.internalErrorState) Rk(a), Sk(a);
                  else {
                      var e;
                      a.gdprApplies = d.gdprApplies;
                      if (!1 === d.gdprApplies) e = Tk(), b.removeEventListener(d);
                      else if ("tcloaded" ===
                          d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                          var f = {},
                              g;
                          for (g in Mk)
                              if (Mk.hasOwnProperty(g))
                                  if ("1" === g) {
                                      var h, l = d,
                                          n = !0;
                                      n = void 0 === n ? !1 : n;
                                      h = Kk(l) ? !1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies && !n || "string" !== typeof l.tcString || !l.tcString.length ? !0 : Hk(l, "1", 0) : !1;
                                      f["1"] = h
                                  } else f[g] = Hk(d, g, Mk[g]);
                          e = f
                      }
                      e && (a.tcString = d.tcString || "tcempty", a.Fd = e, Sk(a))
                  }
              })
          } catch (d) {
              c && (clearTimeout(c), c = null), Rk(a), Sk(a)
          }
      }
  };

  function Rk(a) {
      a.type = "e";
      a.tcString = "tcunavailable";
      Lk && (a.Fd = Tk())
  }

  function Qk() {
      var a = {},
          b = (a.ad_storage = "denied", a.wait_for_update = Nk, a);
      qj(b)
  }

  function Tk() {
      var a = {},
          b;
      for (b in Mk) Mk.hasOwnProperty(b) && (a[b] = !0);
      return a
  }

  function Sk(a) {
      var b = {},
          c = (b.ad_storage = a.Fd["1"] ? "granted" : "denied", b);
      sj(c, {
          eventId: 0
      }, {
          gdprApplies: a ? a.gdprApplies : void 0,
          tcString: Vk()
      })
  }
  var Vk = function() {
          var a = Pk();
          return a.active ? a.tcString || "" : ""
      },
      Wk = function() {
          var a = Pk();
          return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
      },
      Xk = function(a) {
          if (!Mk.hasOwnProperty(String(a))) return !0;
          var b = Pk();
          return b.active && b.Fd ? !!b.Fd[String(a)] : !0
      };

  function Yk(a, b, c, d) {
      var e, f = Number(null != a.fb ? a.fb : void 0);
      0 !== f && (e = new Date((b || Ta()) + 1E3 * (f || 7776E3)));
      return {
          path: a.path,
          domain: a.domain,
          flags: a.flags,
          encode: !!c,
          expires: e,
          Cb: d
      }
  };
  var Zk = ["1"],
      $k = {},
      al = {},
      cl = function(a) {
          return $k[bl(a)]
      },
      fl = function(a, b) {
          b = void 0 === b ? !0 : b;
          var c = bl(a.prefix);
          if (!$k[c] && !dl(c, a.path, a.domain) && b) {
              var d = bl(a.prefix),
                  e = Sj();
              if (0 === el(d, e, a)) {
                  var f = Xb("google_tag_data", {});
                  f._gcl_au ? Rb("GTM", 57) : f._gcl_au = e
              }
              dl(c, a.path, a.domain)
          }
      };

  function el(a, b, c, d) {
      var e = Wj(b, "1", c.domain, c.path),
          f = Yk(c, d);
      f.Cb = "ad_storage";
      return Oj(a, e, f)
  }

  function dl(a, b, c) {
      var d = Vj(a, b, c, Zk, "ad_storage");
      if (!d) return !1;
      var e = d.split(".");
      5 === e.length ? ($k[a] = e.slice(0, 2).join("."), al[a] = {
          id: e.slice(2, 4).join("."),
          ai: Number(e[4]) || 0
      }) : 3 === e.length ? al[a] = {
          id: e.slice(0, 2).join("."),
          ai: Number(e[2]) || 0
      } : $k[a] = d;
      return !0
  }

  function bl(a) {
      return (a || "_gcl") + "_au"
  };
  var gl;
  var zl = function() {
          var a = hl,
              b = il,
              c = jl(),
              d = function(g) {
                  a(g.target || g.srcElement || {})
              },
              e = function(g) {
                  b(g.target || g.srcElement || {})
              };
          if (!c.init) {
              fc(H, "mousedown", d);
              fc(H, "keyup", d);
              fc(H, "submit", e);
              var f = HTMLFormElement.prototype.submit;
              HTMLFormElement.prototype.submit = function() {
                  b(this);
                  f.call(this)
              };
              c.init = !0
          }
      },
      Al = function(a, b, c, d, e) {
          var f = {
              callback: a,
              domains: b,
              fragment: 2 === c,
              placement: c,
              forms: d,
              sameHost: e
          };
          jl().decorators.push(f)
      },
      Bl = function(a, b, c) {
          for (var d = jl().decorators, e = {}, f = 0; f < d.length; ++f) {
              var g =
                  d[f],
                  h;
              if (h = !c || g.forms) a: {
                  var l = g.domains,
                      n = a,
                      p = !!g.sameHost;
                  if (l && (p || n !== H.location.hostname))
                      for (var q = 0; q < l.length; q++)
                          if (l[q] instanceof RegExp) {
                              if (l[q].test(n)) {
                                  h = !0;
                                  break a
                              }
                          } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                      h = !0;
                      break a
                  }
                  h = !1
              }
              if (h) {
                  var r = g.placement;
                  void 0 == r && (r = g.fragment ? 2 : 1);
                  r === b && Wa(e, g.callback())
              }
          }
          return e
      };

  function jl() {
      var a = Xb("google_tag_data", {}),
          b = a.gl;
      b && b.decorators || (b = {
          decorators: []
      }, a.gl = b);
      return b
  };
  var Cl = /(.*?)\*(.*?)\*(.*)/,
      Dl = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
      El = /^(?:www\.|m\.|amp\.)+/,
      Fl = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function Gl(a) {
      return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
  }
  var Il = function(a) {
      var b = [],
          c;
      for (c in a)
          if (a.hasOwnProperty(c)) {
              var d = a[c];
              void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Ob(String(d))))
          } var e = b.join("*");
      return ["1", Hl(e), e].join("*")
  };

  function Hl(a, b) {
      var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Vb.userLanguage || Vb.language, Math.floor(Ta() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
          d;
      if (!(d = gl)) {
          for (var e = Array(256), f = 0; 256 > f; f++) {
              for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
              e[f] = g
          }
          d = e
      }
      gl = d;
      for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ gl[(l ^ c.charCodeAt(n)) & 255];
      return ((l ^ -1) >>> 0).toString(36)
  }

  function Jl() {
      return function(a) {
          var b = ki(m.location.href),
              c = b.search.replace("?", ""),
              d = fi(c, "_gl", !1, !0) || "";
          a.query = Kl(d) || {};
          var e = ii(b, "fragment").match(Gl("_gl"));
          a.fragment = Kl(e && e[3] || "") || {}
      }
  }

  function Ll(a, b) {
      var c = Gl(a).exec(b),
          d = b;
      if (c) {
          var e = c[2],
              f = c[4];
          d = c[1];
          f && (d = d + e + f)
      }
      return d
  }
  var Ml = function(a, b) {
          b || (b = "_gl");
          var c = Fl.exec(a);
          if (!c) return "";
          var d = c[1],
              e = Ll(b, (c[2] || "").slice(1)),
              f = Ll(b, (c[3] || "").slice(1));
          e.length && (e = "?" + e);
          f.length && (f = "#" + f);
          return "" + d + e + f
      },
      Nl = function(a) {
          var b = Jl(),
              c = jl();
          c.data || (c.data = {
              query: {},
              fragment: {}
          }, b(c.data));
          var d = {},
              e = c.data;
          e && (Wa(d, e.query), a && Wa(d, e.fragment));
          return d
      },
      Kl = function(a) {
          try {
              var b = Ol(a, 3);
              if (void 0 !== b) {
                  for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                      var f = d[e],
                          g = Pb(d[e + 1]);
                      c[f] = g
                  }
                  Rb("TAGGING", 6);
                  return c
              }
          } catch (h) {
              Rb("TAGGING",
                  8)
          }
      };

  function Ol(a, b) {
      if (a) {
          var c;
          a: {
              for (var d = a, e = 0; 3 > e; ++e) {
                  var f = Cl.exec(d);
                  if (f) {
                      c = f;
                      break a
                  }
                  d = decodeURIComponent(d)
              }
              c = void 0
          }
          var g = c;
          if (g && "1" === g[1]) {
              var h = g[3],
                  l;
              a: {
                  for (var n = g[2], p = 0; p < b; ++p)
                      if (n === Hl(h, p)) {
                          l = !0;
                          break a
                      } l = !1
              }
              if (l) return h;
              Rb("TAGGING", 7)
          }
      }
  }

  function Pl(a, b, c, d) {
      function e(p) {
          p = Ll(a, p);
          var q = p.charAt(p.length - 1);
          p && "&" !== q && (p += "&");
          return p + n
      }
      d = void 0 === d ? !1 : d;
      var f = Fl.exec(c);
      if (!f) return "";
      var g = f[1],
          h = f[2] || "",
          l = f[3] || "",
          n = a + "=" + b;
      d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
      return "" + g + h + l
  }

  function Ql(a, b) {
      var c = "FORM" === (a.tagName || "").toUpperCase(),
          d = Bl(b, 1, c),
          e = Bl(b, 2, c),
          f = Bl(b, 3, c);
      if (Xa(d)) {
          var g = Il(d);
          c ? Rl("_gl", g, a) : Sl("_gl", g, a, !1)
      }
      if (!c && Xa(e)) {
          var h = Il(e);
          Sl("_gl", h, a, !0)
      }
      for (var l in f)
          if (f.hasOwnProperty(l)) a: {
              var n = l,
                  p = f[l],
                  q = a;
              if (q.tagName) {
                  if ("a" === q.tagName.toLowerCase()) {
                      Sl(n, p, q);
                      break a
                  }
                  if ("form" === q.tagName.toLowerCase()) {
                      Rl(n, p, q);
                      break a
                  }
              }
              "string" == typeof q && Pl(n, p, q)
          }
  }

  function Sl(a, b, c, d) {
      if (c.href) {
          var e = Pl(a, b, c.href, void 0 === d ? !1 : d);
          vb.test(e) && (c.href = e)
      }
  }

  function Rl(a, b, c) {
      if (c && c.action) {
          var d = (c.method || "").toLowerCase();
          if ("get" === d) {
              for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                  var h = e[g];
                  if (h.name === a) {
                      h.setAttribute("value", b);
                      f = !0;
                      break
                  }
              }
              if (!f) {
                  var l = H.createElement("input");
                  l.setAttribute("type", "hidden");
                  l.setAttribute("name", a);
                  l.setAttribute("value", b);
                  c.appendChild(l)
              }
          } else if ("post" === d) {
              var n = Pl(a, b, c.action);
              vb.test(n) && (c.action = n)
          }
      }
  }

  function hl(a) {
      try {
          var b;
          a: {
              for (var c = a, d = 100; c && 0 < d;) {
                  if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                      b = c;
                      break a
                  }
                  c = c.parentNode;
                  d--
              }
              b = null
          }
          var e = b;
          if (e) {
              var f = e.protocol;
              "http:" !== f && "https:" !== f || Ql(e, e.hostname)
          }
      } catch (g) {}
  }

  function il(a) {
      try {
          if (a.action) {
              var b = ii(ki(a.action), "host");
              Ql(a, b)
          }
      } catch (c) {}
  }
  var Tl = function(a, b, c, d) {
          zl();
          Al(a, b, "fragment" === c ? 2 : 1, !!d, !1)
      },
      Ul = function(a, b) {
          zl();
          Al(a, [hi(m.location, "host", !0)], b, !0, !0)
      },
      Vl = function() {
          var a = H.location.hostname,
              b = Dl.exec(H.referrer);
          if (!b) return !1;
          var c = b[2],
              d = b[1],
              e = "";
          if (c) {
              var f = c.split("/"),
                  g = f[1];
              e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
          } else if (d) {
              if (0 === d.indexOf("xn--")) return !1;
              e = d.replace(/-/g, ".").replace(/\.\./g, "-")
          }
          var h = a.replace(El, ""),
              l = e.replace(El, ""),
              n;
          if (!(n = h === l)) {
              var p = "." + l;
              n = h.substring(h.length - p.length,
                  h.length) === p
          }
          return n
      },
      Wl = function(a, b) {
          return !1 === a ? !1 : a || b || Vl()
      };
  var Xl = {};
  var Yl = function(a) {
      for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
          var f = c[e].match(d);
          f && b.push({
              rg: f[1],
              value: f[2],
              timestamp: Number(f[2].split(".")[1]) || 0
          })
      }
      b.sort(function(g, h) {
          return h.timestamp - g.timestamp
      });
      return b
  };

  function Zl(a, b) {
      var c = Yl(a),
          d = {};
      if (!c || !c.length) return d;
      for (var e = 0; e < c.length; e++) {
          var f = c[e].value.split(".");
          if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
              d[c[e].rg] || (d[c[e].rg] = []);
              var g = {
                  version: f[0],
                  timestamp: 1E3 * Number(f[1]),
                  la: f[2]
              };
              b && 3 < f.length && (g.labels = f.slice(3));
              d[c[e].rg].push(g)
          }
      }
      return d
  };
  var $l = /^\w+$/,
      am = /^[\w-]+$/,
      bm = {
          aw: "_aw",
          dc: "_dc",
          gf: "_gf",
          ha: "_ha",
          gp: "_gp",
          gb: "_gb"
      },
      cm = function() {
          if (!Vi().h() || !gj()) return !0;
          var a = dj("ad_storage");
          return null == a ? !0 : !!a
      },
      dm = function(a, b) {
          fj("ad_storage") ? cm() ? a() : lj(a, "ad_storage") : b ? Rb("TAGGING", 3) : kj(function() {
              dm(a, !0)
          }, ["ad_storage"])
      },
      fm = function(a) {
          return em(a).map(function(b) {
              return b.la
          })
      },
      em = function(a) {
          var b = [];
          if (!Cj(m) || !H.cookie) return b;
          var c = Fj(a, H.cookie, void 0, "ad_storage");
          if (!c || 0 == c.length) return b;
          for (var d = {}, e = 0; e < c.length; d = {
                  Md: d.Md
              }, e++) {
              var f = gm(c[e]);
              if (null != f) {
                  var g = f,
                      h = g.version;
                  d.Md = g.la;
                  var l = g.timestamp,
                      n = g.labels,
                      p = Ha(b, function(q) {
                          return function(r) {
                              return r.la === q.Md
                          }
                      }(d));
                  p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = hm(p.labels, n || [])) : b.push({
                      version: h,
                      la: d.Md,
                      timestamp: l,
                      labels: n
                  })
              }
          }
          b.sort(function(q, r) {
              return r.timestamp - q.timestamp
          });
          return im(b)
      };

  function hm(a, b) {
      for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
      for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
      return d
  }

  function jm(a) {
      return a && "string" == typeof a && a.match($l) ? a : "_gcl"
  }
  var lm = function() {
          var a = ki(m.location.href),
              b = ii(a, "query", !1, void 0, "gclid"),
              c = ii(a, "query", !1, void 0, "gclsrc"),
              d = ii(a, "query", !1, void 0, "wbraid"),
              e = ii(a, "query", !1, void 0, "dclid");
          if (!b || !c || !d) {
              var f = a.hash.replace("#", "");
              b = b || fi(f, "gclid", !1);
              c = c || fi(f, "gclsrc", !1);
              d = d || fi(f, "wbraid", !1)
          }
          return km(b, c, e, d)
      },
      km = function(a, b, c, d) {
          var e = {},
              f = function(g, h) {
                  e[h] || (e[h] = []);
                  e[h].push(g)
              };
          e.gclid = a;
          e.gclsrc = b;
          e.dclid = c;
          void 0 !== d && am.test(d) && (e.gbraid = d, f(d, "gb"));
          if (void 0 !== a && a.match(am)) switch (b) {
              case void 0:
                  f(a,
                      "aw");
                  break;
              case "aw.ds":
                  f(a, "aw");
                  f(a, "dc");
                  break;
              case "ds":
                  f(a, "dc");
                  break;
              case "3p.ds":
                  f(a, "dc");
                  break;
              case "gf":
                  f(a, "gf");
                  break;
              case "ha":
                  f(a, "ha")
          }
          c && f(c, "dc");
          return e
      },
      nm = function(a) {
          var b = lm();
          dm(function() {
              mm(b, !1, a)
          })
      };

  function mm(a, b, c, d, e) {
      function f(w, x) {
          var y = om(w, g);
          y && (Oj(y, x, h), l = !0)
      }
      c = c || {};
      e = e || [];
      var g = jm(c.prefix);
      d = d || Ta();
      var h = Yk(c, d, !0);
      h.Cb = "ad_storage";
      var l = !1,
          n = Math.round(d / 1E3),
          p = function(w) {
              var x = ["GCL", n, w];
              0 < e.length && x.push(e.join("."));
              return x.join(".")
          };
      a.aw && f("aw", p(a.aw[0]));
      a.dc && f("dc", p(a.dc[0]));
      a.gf && f("gf", p(a.gf[0]));
      a.ha && f("ha", p(a.ha[0]));
      a.gp && f("gp", p(a.gp[0]));
      if ((void 0 == Xl.enable_gbraid_cookie_write ? 0 : Xl.enable_gbraid_cookie_write) && !l && a.gb) {
          var q = a.gb[0],
              r = om("gb",
                  g),
              u = !1;
          if (!b)
              for (var t = em(r), v = 0; v < t.length; v++) t[v].la === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
          u || f("gb", p(q))
      }
  }
  var qm = function(a, b) {
          var c = Nl(!0);
          dm(function() {
              for (var d = jm(b.prefix), e = 0; e < a.length; ++e) {
                  var f = a[e];
                  if (void 0 !== bm[f]) {
                      var g = om(f, d),
                          h = c[g];
                      if (h) {
                          var l = Math.min(pm(h), Ta()),
                              n;
                          b: {
                              var p = l;
                              if (Cj(m))
                                  for (var q = Fj(g, H.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                      if (pm(q[r]) > p) {
                                          n = !0;
                                          break b
                                      } n = !1
                          }
                          if (!n) {
                              var u = Yk(b, l, !0);
                              u.Cb = "ad_storage";
                              Oj(g, h, u)
                          }
                      }
                  }
              }
              mm(km(c.gclid, c.gclsrc), !1, b)
          })
      },
      om = function(a, b) {
          var c = bm[a];
          if (void 0 !== c) return b + c
      },
      pm = function(a) {
          return 0 !== rm(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
              0) : 0
      };

  function gm(a) {
      var b = rm(a.split("."));
      return 0 === b.length ? null : {
          version: b[0],
          la: b[2],
          timestamp: 1E3 * (Number(b[1]) || 0),
          labels: b.slice(3)
      }
  }

  function rm(a) {
      return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !am.test(a[2]) ? [] : a
  }
  var sm = function(a, b, c, d, e) {
          if (Ea(b) && Cj(m)) {
              var f = jm(e),
                  g = function() {
                      for (var h = {}, l = 0; l < a.length; ++l) {
                          var n = om(a[l], f);
                          if (n) {
                              var p = Fj(n, H.cookie, void 0, "ad_storage");
                              p.length && (h[n] = p.sort()[p.length - 1])
                          }
                      }
                      return h
                  };
              dm(function() {
                  Tl(g, b, c, d)
              })
          }
      },
      im = function(a) {
          return a.filter(function(b) {
              return am.test(b.la)
          })
      },
      tm = function(a, b) {
          if (Cj(m)) {
              for (var c = jm(b.prefix), d = {}, e = 0; e < a.length; e++) bm[a[e]] && (d[a[e]] = bm[a[e]]);
              dm(function() {
                  Ma(d, function(f, g) {
                      var h = Fj(c + g, H.cookie, void 0, "ad_storage");
                      h.sort(function(u,
                          t) {
                          return pm(t) - pm(u)
                      });
                      if (h.length) {
                          var l = h[0],
                              n = pm(l),
                              p = 0 !== rm(l.split(".")).length ? l.split(".").slice(3) : [],
                              q = {},
                              r;
                          r = 0 !== rm(l.split(".")).length ? l.split(".")[2] : void 0;
                          q[f] = [r];
                          mm(q, !0, b, n, p)
                      }
                  })
              })
          }
      };

  function um(a, b) {
      for (var c = 0; c < b.length; ++c)
          if (a[b[c]]) return !0;
      return !1
  }
  var vm = function(a) {
          function b(e, f, g) {
              g && (e[f] = g)
          }
          if (gj()) {
              var c = lm();
              if (um(c, a)) {
                  var d = {};
                  b(d, "gclid", c.gclid);
                  b(d, "dclid", c.dclid);
                  b(d, "gclsrc", c.gclsrc);
                  b(d, "wbraid", c.gbraid);
                  Ul(function() {
                      return d
                  }, 3);
                  Ul(function() {
                      var e = {};
                      return e._up = "1", e
                  }, 1)
              }
          }
      },
      wm = function(a, b, c, d) {
          var e = [];
          c = c || {};
          if (!cm()) return e;
          var f = em(a);
          if (!f.length) return e;
          for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
          if (d) return e;
          if (1 !== e[0]) {
              var h = f[0],
                  l = f[0].timestamp,
                  n = [h.version, Math.round(l /
                      1E3), h.la].concat(h.labels || [], [b]).join("."),
                  p = Yk(c, l, !0);
              p.Cb = "ad_storage";
              Oj(a, n, p)
          }
          return e
      };

  function xm(a, b) {
      var c = jm(b),
          d = om(a, c);
      if (!d) return 0;
      for (var e = em(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
      return f
  }

  function ym(a) {
      var b = 0,
          c;
      for (c in a)
          for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
      return b
  }
  var zm = function(a) {
      var b = Math.max(xm("aw", a), ym(cm() ? Zl() : {}));
      return Math.max(xm("gb", a), ym(cm() ? Zl("_gac_gb", !0) : {})) > b
  };
  var Em = /[A-Z]+/,
      Fm = /\s/,
      Gm = function(a) {
          if (k(a)) {
              a = Ra(a);
              var b = a.indexOf("-");
              if (!(0 > b)) {
                  var c = a.substring(0, b);
                  if (Em.test(c)) {
                      for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                          if (!d[e] || Fm.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                      return {
                          id: a,
                          prefix: c,
                          V: c + "-" + d[0],
                          M: d
                      }
                  }
              }
          }
      },
      Im = function(a) {
          for (var b = {}, c = 0; c < a.length; ++c) {
              var d = Gm(a[c]);
              d && (b[d.id] = d)
          }
          Hm(b);
          var e = [];
          Ma(b, function(f, g) {
              e.push(g)
          });
          return e
      };

  function Hm(a) {
      var b = [],
          c;
      for (c in a)
          if (a.hasOwnProperty(c)) {
              var d = a[c];
              "AW" === d.prefix && d.M[1] && b.push(d.V)
          } for (var e = 0; e < b.length; ++e) delete a[b[e]]
  };
  var Km = function(a, b, c, d) {
          return (2 === Jm() || d || "http:" != m.location.protocol ? a : b) + c
      },
      Jm = function() {
          var a = cc(),
              b;
          if (1 === a) a: {
              var c = th;c = c.toLowerCase();
              for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                  var l = g[h].src;
                  if (l) {
                      l = l.toLowerCase();
                      if (0 === l.indexOf(e)) {
                          b = 3;
                          break a
                      }
                      1 === f && 0 === l.indexOf(d) && (f = 2)
                  }
              }
              b = f
          }
          else b = a;
          return b
      };
  var Wm = function(a, b, c) {
          this.target = a;
          this.eventName = b;
          this.s = c;
          this.C = {};
          this.metadata = J(c.eventMetadata || {});
          this.K = !1
      },
      Xm = function(a, b, c) {
          var d = T(a.s, b);
          void 0 !== d ? a.C[b] = d : void 0 !== c && (a.C[b] = c)
      },
      Ym = function(a, b, c) {
          var d = Uh(a.target.V);
          return d && d.hasOwnProperty(b) ? d[b] : c
      };

  function Zm(a) {
      return {
          getDestinationId: function() {
              return a.target.V
          },
          getEventName: function() {
              return a.eventName
          },
          setEventName: function(b) {
              return void(a.eventName = b)
          },
          getHitData: function(b) {
              return a.C[b]
          },
          setHitData: function(b, c) {
              return void(a.C[b] = c)
          },
          setHitDataIfNotDefined: function(b, c) {
              void 0 === a.C[b] && (a.C[b] = c)
          },
          copyToHitData: function(b, c) {
              Xm(a, b, c)
          },
          getMetadata: function(b) {
              return a.metadata[b]
          },
          setMetadata: function(b, c) {
              return void(a.metadata[b] = c)
          },
          abort: function() {
              return void(a.K = !0)
          },
          getProcessedEvent: function() {
              return a
          },
          getFromEventContext: function(b) {
              return T(a.s, b)
          }
      }
  };
  var an = function(a) {
          var b = $m[a.target.V];
          if (!a.K && b)
              for (var c = Zm(a), d = 0; d < b.length; ++d) {
                  try {
                      b[d](c)
                  } catch (e) {
                      a.K = !0
                  }
                  if (a.K) break
              }
      },
      bn = function(a, b) {
          var c = $m[a];
          c || (c = $m[a] = []);
          c.push(b)
      },
      $m = {};
  var tn = ["L", "S", "Y"],
      un = ["S", "E"],
      vn = {
          sampleRate: "0.005000",
          vi: "",
          ui: Number("5")
      },
      wn = 0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="),
      xn;
  if (!(xn = wn)) {
      var yn = Math.random(),
          zn = vn.sampleRate;
      xn = yn < zn
  }
  var An = xn,
      Bn = "https://www.googletagmanager.com/a?id=" + We.N + "&cv=1",
      Cn = {
          label: We.N + " Container",
          children: [{
              label: "Initialization",
              children: []
          }]
      };

  function Dn() {
      return [Bn, "&v=3&t=t", "&pid=" + Ja(), "&rv=" + dh.ed].join("")
  }
  var En = Dn();

  function Fn() {
      En = Dn()
  }
  var Gn = {},
      Hn = "",
      In = "",
      Jn = "",
      Kn = "",
      Ln = [],
      Mn = "",
      Nn = {},
      On = !1,
      Pn = {},
      Qn = {},
      Rn = "",
      Sn = void 0,
      Tn = {},
      Un = {},
      Vn = void 0,
      Wn = 5;
  0 < vn.ui && (Wn = vn.ui);
  var Xn = function(a, b) {
          for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
          return {
              kk: function() {
                  return c < a ? !1 : Ta() - d[c % a] < b
              },
              Kk: function() {
                  var f = c++ % a;
                  d[f] = Ta()
              }
          }
      }(Wn, 1E3),
      Yn = 1E3;

  function Zn(a, b) {
      var c = Sn;
      if (void 0 === c) return "";
      var d = K(53) ? Ub("GTM") : Tb("GTM"),
          e = K(53) ? Ub("TAGGING") : Tb("TAGGING"),
          f = Ub("HEALTH"),
          g = En,
          h = Gn[c] ? "" : "&es=1",
          l = Tn[c],
          n = $n(c),
          p = ao(),
          q = Hn,
          r = In,
          u = Rn,
          t = bo(a),
          v = Jn,
          w = Kn,
          x = co(a, b),
          y;
      return [g, h, l, n, d ? "&u=" + d : "", e ? "&ut=" + e : "", f ? "&h=" + f : "", p, q, r, u, t, v, w, x, y, Mn ? "&dl=" + encodeURIComponent(Mn) :
          "", 0 < Ln.length ? "&tdp=" + Ln.join(".") : "", dh.Bf ? "&x=" + dh.Bf : "", "&z=0"
      ].join("")
  }

  function fo(a) {
      Vn && (m.clearTimeout(Vn), Vn = void 0);
      if (void 0 !== Sn && (!Gn[Sn] || Hn || In || go(a)))
          if (void 0 === ho[Sn] && (Un[Sn] || Xn.kk() || 0 >= Yn--)) P(1), Un[Sn] = !0;
          else {
              void 0 === ho[Sn] && Xn.Kk();
              var b = Zn(!0, a);
              a ? lc(b) : ec(b);
              if (Kn || Mn && 0 < Ln.length) {
                  var c = b.replace("/a?", "/td?");
                  ec(c)
              }
              Gn[Sn] = !0;
              Mn = Kn = Jn = Rn = In = Hn = "";
              Ln = []
          }
  }

  function io() {
      Vn || (Vn = m.setTimeout(fo, 500))
  }

  function jo(a) {
      return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
  }

  function ko() {
      2022 <= Zn().length && fo()
  }

  function ao() {
      return "&tc=" + xe.filter(function(a) {
          return a
      }).length
  }
  var mo = function(a, b) {
          if (An && !Un[a] && Sn !== a) {
              fo();
              Sn = a;
              Jn = Hn = "";
              Tn[a] = "&e=" + jo(b) + "&eid=" + a;
              io();
          }
      },
      no = function(a, b, c, d) {
          if (An && b) {
              var e, f = String(b[Xd.Kb] || "").replace(/_/g, "");
              0 === f.indexOf("cvt") && (f = "cvt");
              e = f;
              var g = c + e;
              if (!Un[a]) {
                  a !== Sn && (fo(), Sn = a);
                  Hn = Hn ? Hn + "." + g : "&tr=" + g;
                  var h = b["function"];
                  if (!h) throw Error("Error: No function name given for function call.");
                  var l = (ze[h] ? "1" : "2") + e;
                  Jn = Jn ? Jn + "." + l : "&ti=" + l;
                  io();
                  ko()
              }
          }
      };

  function bo(a) {}

  function $n(a) {}
  var uo = function(a, b, c) {
          if (An && void 0 !== a && !Un[a]) {
              a !== Sn && (fo(), Sn = a);
              var d = c + b;
              In = In ? In + "." + d : "&epr=" + d;
              io();
              ko()
          }
      },
      vo = function(a, b, c) {},
      wo = ["S", "P", "C", "Z"],
      xo = {},
      yo = (xo[1] = 5, xo[2] = 5, xo[3] = 5, xo),
      zo = {},
      ho = {},
      eo = void 0,
      Ao = function(a, b) {
          var c = !1;
          if (!An || ho[a] || 0 === yo[b]) return !1;
          --yo[b];
          ho[a] = b;
          c = !0;
          return c
      },
      Bo = function(a, b, c) {
          if (!An || !ho[a]) return;
          var d = zo[a];
          d || (zo[a] = d = {});
          d[b] = c;
      };

  function co(a, b) {
      var c;
      if (!Sn || !go(b)) return "";
      var d = zo[Sn];
      c = "&al=" + wo.filter(function(e) {
          return void 0 !== d[e]
      }).map(function(e) {
          return e + Math.floor(d[e])
      }).join(".") + (".Z" + ho[Sn]);
      a && delete zo[Sn];
      return c
  }

  function go(a) {
      var b = !1;
      if (!Sn || !zo[Sn]) return !1;
      b = a || "C" in zo[Sn];
      return b
  }
  var Co = function() {
      if (An) {
          m.setInterval(Fn, 864E5);
          fc(m, "pagehide", function() {
              Sn && ho[Sn] && fo(!0);
              for (var a in zo) zo.hasOwnProperty(a) && (Sn = Number(a), fo(!0));
          });
      }
  };
  var Do = function(a, b, c, d, e, f, g, h, l, n, p, q) {
          this.eventId = a;
          this.priorityId = b;
          this.h = c;
          this.I = d;
          this.B = e;
          this.F = f;
          this.T = g;
          this.D = h;
          this.eventMetadata = l;
          this.X = n;
          this.W = p;
          this.H = q
      },
      T = function(a, b, c) {
          if (void 0 !== a.h[b]) return a.h[b];
          if (void 0 !== a.I[b]) return a.I[b];
          if (void 0 !== a.B[b]) return a.B[b];
          An && Eo(a, a.F[b], a.T[b]) && (P(71), P(79));
          return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.D[b] ? a.D[b] : c
      },
      Fo = function(a) {
          function b(g) {
              for (var h = Object.keys(g), l = 0; l < h.length; ++l) c[h[l]] = 1
          }
          var c = {};
          b(a.h);
          b(a.I);
          b(a.B);
          b(a.F);
          if (An)
              for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
                  var f = d[e];
                  if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                      P(71);
                      P(80);
                      break
                  }
              }
          return Object.keys(c)
      },
      Go = function(a, b, c) {
          function d(l) {
              Dc(l) && Ma(l, function(n, p) {
                  f = !0;
                  e[n] = p
              })
          }
          var e = {},
              f = !1;
          c && 1 !== c || (d(a.D[b]), d(a.F[b]), d(a.B[b]), d(a.I[b]));
          c && 2 !== c || d(a.h[b]);
          if (An) {
              var g = f,
                  h = e;
              e = {};
              f = !1;
              c && 1 !== c || (d(a.D[b]), d(a.T[b]), d(a.B[b]), d(a.I[b]));
              c && 2 !== c || d(a.h[b]);
              if (f !== g || Eo(a, e, h)) P(71), P(81);
              f = g;
              e = h
          }
          return f ? e : void 0
      },
      Ho = function(a) {
          var b = [S.g.Pc, S.g.Ud, S.g.Vd, S.g.Wd, S.g.Xd, S.g.Yd, S.g.Zd],
              c = {},
              d = !1,
              e = function(h) {
                  for (var l = 0; l < b.length; l++) void 0 !== h[b[l]] && (c[b[l]] = h[b[l]], d = !0);
                  return d
              };
          if (e(a.h) || e(a.I) || e(a.B)) return c;
          e(a.F);
          if (An) {
              var f = c,
                  g = d;
              c = {};
              d = !1;
              e(a.T);
              Eo(a, c, f) && (P(71), P(82));
              c = f;
              d = g
          }
          if (d) return c;
          e(a.D);
          return c
      },
      Eo = function(a, b, c) {
          if (!An) return !1;
          try {
              if (b === c) return !1;
              var d = Bc(b);
              if (d !== Bc(c) || !(Dc(b) && Dc(c) || "array" === d)) return !0;
              if ("array" === d) {
                  if (b.length !== c.length) return !0;
                  for (var e = 0; e < b.length; e++)
                      if (Eo(a,
                              b[e], c[e])) return !0
              } else {
                  for (var f in c)
                      if (!b.hasOwnProperty(f)) return !0;
                  for (var g in b)
                      if (!c.hasOwnProperty(g) || Eo(a, b[g], c[g])) return !0
              }
          } catch (h) {
              P(72)
          }
          return !1
      },
      Io = function(a, b) {
          this.ij = a;
          this.jj = b;
          this.F = {};
          this.xh = {};
          this.h = {};
          this.I = {};
          this.B = {};
          this.cd = {};
          this.D = {};
          this.Dc = function() {};
          this.Ca = function() {};
          this.T = !1
      },
      Jo = function(a, b) {
          a.F = b;
          return a
      },
      Ko = function(a, b) {
          a.xh = b;
          return a
      },
      Lo = function(a, b) {
          a.h = b;
          return a
      },
      Mo = function(a, b) {
          a.I = b;
          return a
      },
      No = function(a, b) {
          a.B = b;
          return a
      },
      Oo = function(a,
          b) {
          a.cd = b;
          return a
      },
      Po = function(a, b) {
          a.D = b || {};
          return a
      },
      Qo = function(a, b) {
          a.Dc = b;
          return a
      },
      Ro = function(a, b) {
          a.Ca = b;
          return a
      },
      So = function(a) {
          a.T = !0;
          return a
      },
      To = function(a) {
          return new Do(a.ij, a.jj, a.F, a.xh, a.h, a.I, a.B, a.cd, a.D, a.Dc, a.Ca, a.T)
      };
  var Xo = function(a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
      }
      return b
  };
  yb();
  nk() || xb("iPod");
  xb("iPad");
  !xb("Android") || zb() || yb() || xb("Opera") || xb("Silk");
  zb();
  !xb("Safari") || zb() || xb("Coast") || xb("Opera") || xb("Edge") || xb("Edg/") || xb("OPR") || yb() || xb("Silk") || xb("Android") || ok();
  var Yo = {},
      Zo = null,
      $o = function(a) {
          for (var b = [], c = 0, d = 0; d < a.length; d++) {
              var e = a.charCodeAt(d);
              255 < e && (b[c++] = e & 255, e >>= 8);
              b[c++] = e
          }
          var f = 4;
          void 0 === f && (f = 0);
          if (!Zo) {
              Zo = {};
              for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++) {
                  var n = g.concat(h[l].split(""));
                  Yo[l] = n;
                  for (var p = 0; p < n.length; p++) {
                      var q = n[p];
                      void 0 === Zo[q] && (Zo[q] = p)
                  }
              }
          }
          for (var r = Yo[f], u = Array(Math.floor(b.length / 3)), t = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
              var x = b[v],
                  y = b[v + 1],
                  A = b[v + 2],
                  B = r[x >> 2],
                  C = r[(x & 3) << 4 | y >> 4],
                  F = r[(y & 15) << 2 | A >> 6],
                  G = r[A & 63];
              u[w++] = "" + B + C + F + G
          }
          var D = 0,
              N = t;
          switch (b.length - v) {
              case 2:
                  D = b[v + 1], N = r[(D & 15) << 2] || t;
              case 1:
                  var R = b[v];
                  u[w] = "" + r[R >> 2] + r[(R & 3) << 4 | D >> 4] + N + t
          }
          return u.join("")
      };
  var ap = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

  function bp(a) {
      var b;
      return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
  }

  function cp() {
      var a = m.google_tag_data,
          b;
      if (null != a && a.uach) {
          var c = a.uach,
              d = Object.assign({}, c);
          c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
          b = d
      } else b = null;
      return b
  }

  function dp() {
      var a, b;
      return null != (b = null == (a = m.google_tag_data) ? void 0 : a.uach_promise) ? b : null
  }

  function ep(a) {
      var b, c;
      return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
  }

  function fp() {
      var a = m;
      if (!ep(a)) return null;
      var b = bp(a);
      if (b.uach_promise) return b.uach_promise;
      var c = a.navigator.userAgentData.getHighEntropyValues(ap).then(function(d) {
          null != b.uach || (b.uach = d);
          return d
      });
      return b.uach_promise = c
  };
  var gp, hp = function() {
          if (ep(m) && (gp = Ta(), !dp())) {
              var a = fp();
              a && (a.then(function() {
                  P(95);
              }), a.catch(function() {
                  P(96)
              }))
          }
      },
      jp = function(a) {
          var b = ip.ml,
              c = function(g, h) {
                  try {
                      a(g, h)
                  } catch (l) {}
              },
              d = cp();
          if (d) c(d);
          else {
              var e = dp();
              if (e) {
                  b =
                      Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                  var f = m.setTimeout(function() {
                      c.yd || (c.yd = !0, P(106), c(null, Error("Timeout")))
                  }, b);
                  e.then(function(g) {
                      c.yd || (c.yd = !0, P(104), m.clearTimeout(f), c(g))
                  }).catch(function(g) {
                      c.yd || (c.yd = !0, P(105), m.clearTimeout(f), c(null, g))
                  })
              } else c(null)
          }
      },
      kp = function(a, b, c) {
          c = void 0 === c ? !1 : c;
          a && (b.C[S.g.nf] = a.architecture, b.C[S.g.pf] = a.bitness, a.fullVersionList && (b.C[S.g.qf] = a.fullVersionList.map(function(d) {
              return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version ||
                  "")
          }).join("|")), c && (b.C[S.g.nh] = a.mobile ? "1" : "0"), b.C[S.g.rf] = a.model, b.C[S.g.sf] = a.platform, b.C[S.g.tf] = a.platformVersion, b.C[S.g.uf] = a.wow64 ? "1" : "0")
      };

  function lp() {
      return "attribution-reporting"
  }

  function mp(a) {
      var b;
      b = void 0 === b ? document : b;
      var c;
      return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
  };
  var np = !1;

  function op() {
      if (mp("join-ad-interest-group") && Ca(Vb.joinAdInterestGroup)) return !0;
      np || (wk('A7bG5hJ4XpMV5a3V1wwAR0PalkFSxLOZeL9D/YBYdupYUIgUgGhfVJ1zBFOqGybb7gRhswfJ+AmO7S2rNK2IOwkAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), np = !0);
      return mp("join-ad-interest-group") && Ca(Vb.joinAdInterestGroup)
  }

  function pp(a, b) {
      var c = void 0;
      try {
          c = H.querySelector('iframe[data-tagging-id="' + b + '"]')
      } catch (e) {}
      if (c) {
          var d = Number(c.dataset.loadTime);
          if (d && 6E4 > Ta() - d) {
              Rb("TAGGING", 9);
              return
          }
      } else try {
          if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
              Rb("TAGGING", 10);
              return
          }
      } catch (e) {}
      dc(a, void 0, {
          allow: "join-ad-interest-group"
      }, {
          taggingId: b,
          loadTime: Ta()
      }, c)
  };
  var qp = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
      rp = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
      sp = /^\d+\.fls\.doubleclick\.net$/,
      tp = /;gac=([^;?]+)/,
      up = /;gacgb=([^;?]+)/,
      vp = /;gclaw=([^;?]+)/,
      wp = /;gclgb=([^;?]+)/;

  function xp(a, b) {
      if (sp.test(H.location.host)) {
          var c = H.location.href.match(b);
          return c && 2 == c.length && c[1].match(qp) ? decodeURIComponent(c[1]) : ""
      }
      var d = [],
          e;
      for (e in a) {
          for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].la);
          d.push(e + ":" + f.join(","))
      }
      return 0 < d.length ? d.join(";") : ""
  }
  var yp = function(a, b, c) {
      var d = cm() ? Zl("_gac_gb", !0) : {},
          e = [],
          f = !1,
          g;
      for (g in d) {
          var h = wm("_gac_gb_" + g, a, b, c);
          f = f || 0 !== h.length && h.some(function(l) {
              return 1 === l
          });
          e.push(g + ":" + h.join(","))
      }
      return {
          Sj: f ? e.join(";") : "",
          Rj: xp(d, up)
      }
  };

  function zp(a, b, c) {
      if (sp.test(H.location.host)) {
          var d = H.location.href.match(c);
          if (d && 2 == d.length && d[1].match(rp)) return [{
              la: d[1]
          }]
      } else return em((a || "_gcl") + b);
      return []
  }
  var Ap = function(a) {
          return zp(a, "_aw", vp).map(function(b) {
              return b.la
          }).join(".")
      },
      Bp = function(a) {
          return zp(a, "_gb", wp).map(function(b) {
              return b.la
          }).join(".")
      },
      Cp = function(a, b) {
          var c = wm((b && b.prefix || "_gcl") + "_gb", a, b);
          return 0 === c.length || c.every(function(d) {
              return 0 === d
          }) ? "" : c.join(".")
      };
  var Dp = function() {
      if (Ca(m.__uspapi)) {
          var a = "";
          try {
              m.__uspapi("getUSPData", 1, function(b, c) {
                  if (c && b) {
                      var d = b.uspString;
                      d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                  }
              })
          } catch (b) {}
          return a
      }
  };
  var mq = function(a, b) {
      var c = m,
          d, e = c.GooglebQhCsO;
      e || (e = {}, c.GooglebQhCsO = e);
      d = e;
      if (d[a]) return !1;
      d[a] = [];
      d[a][0] = b;
      return !0
  };
  var nq = function(a, b) {
      var c = sk(a, "fmt");
      if (b) {
          var d = sk(a, "random"),
              e = sk(a, "label") || "";
          if (!d) return !1;
          var f = $o(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
          if (!mq(f, b)) return !1
      }
      c && 4 != c && (a = uk(a, "rfmt", c));
      var g = uk(a, "fmt", 4);
      bc(g, function() {
          m.google_noFurtherRedirects && b && b.call && (m.google_noFurtherRedirects = null, b())
      }, void 0, void 0, H.getElementsByTagName("script")[0].parentElement || void 0);
      return !0
  };
  var Dq = function() {
          this.h = {}
      },
      Eq = function(a, b, c) {
          null != c && (a.h[b] = c)
      },
      Fq = function(a) {
          return Object.keys(a.h).map(function(b) {
              return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
          }).join("&")
      },
      Hq = function(a, b, c, d, e) {};

  function Jq(a, b) {
      if (a) {
          var c = "" + a;
          0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
          "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
          return ki("" + c + b).href
      }
  }

  function Kq(a, b) {
      return nh || ph ? Jq(a, b) : void 0
  }

  function Lq() {
      return !!dh.ve && "SGTM_TOKEN" !== dh.ve.split("@@").join("")
  };
  var Nq = function(a, b, c, d) {
          if (!Mq() && !fk(a)) {
              var e = c ? "/gtag/js" : "/gtm.js",
                  f = "?id=" + encodeURIComponent(a) + "&l=" + dh.ma,
                  g = 0 === a.indexOf("GTM-");
              g || (f += "&cx=c");
              var h = Lq();
              h && (f += "&sign=" + dh.ve);
              var l = Kq(b, e + f);
              if (!l) {
                  var n = dh.Rd + e;
                  h && Wb && g && (n = Wb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                  l = Km("https://", "http://", n + f)
              }
              dk().container[a] = {
                  state: 1,
                  context: d
              };
              bc(l)
          }
      },
      Oq = function(a, b, c) {
          var d;
          if (d = !Mq()) {
              var e = dk().destination[a];
              d = !(e && e.state)
          }
          if (d)
              if (gk()) dk().destination[a] = {
                  state: 0,
                  transportUrl: b,
                  context: c
              }, P(91);
              else {
                  var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + dh.ma + "&cx=c";
                  Lq() && (f += "&sign=" + dh.ve);
                  var g = Kq(b, f);
                  g || (g = Km("https://", "http://", dh.Rd + f));
                  dk().destination[a] = {
                      state: 1,
                      context: c
                  };
                  bc(g)
              }
      };

  function Mq() {
      if (Yj()) {
          return !0
      }
      return !1
  };
  var Pq = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
      Qq = {
          cl: ["ecl"],
          customPixels: ["nonGooglePixels"],
          ecl: ["cl"],
          ehl: ["hl"],
          hl: ["ehl"],
          html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
          customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
          nonGooglePixels: [],
          nonGoogleScripts: ["nonGooglePixels"],
          nonGoogleIframes: ["nonGooglePixels"]
      },
      Rq = {
          cl: ["ecl"],
          customPixels: ["customScripts", "html"],
          ecl: ["cl"],
          ehl: ["hl"],
          hl: ["ehl"],
          html: ["customScripts"],
          customScripts: ["html"],
          nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
          nonGoogleScripts: ["customScripts", "html"],
          nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
      },
      Sq = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
  var Uq = function(a) {
          var b = Lh("gtm.allowlist") || Lh("gtm.whitelist");
          b && P(9);
          lh && (b = ["google", "gtagfl", "lcl", "zone"]);
          var c = b && Ya(Qa(b), Qq),
              d = Lh("gtm.blocklist") || Lh("gtm.blacklist");
          d || (d = Lh("tagTypeBlacklist")) && P(3);
          d ? P(8) : d = [];
          Tq() && (d = Qa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
          0 <= Qa(d).indexOf("google") && P(2);
          var e = d && Ya(Qa(d), Rq),
              f = {};
          return function(g) {
              var h = g && g[Xd.Kb];
              if (!h || "string" != typeof h) return !0;
              h = h.replace(/^_*/, "");
              if (void 0 !== f[h]) return f[h];
              var l = xh[h] || [],
                  n = a(h, l);
              if (b) {
                  var p;
                  if (p = n) a: {
                      if (0 > c.indexOf(h))
                          if (l && 0 < l.length)
                              for (var q = 0; q < l.length; q++) {
                                  if (0 > c.indexOf(l[q])) {
                                      P(11);
                                      p = !1;
                                      break a
                                  }
                              } else {
                                  p = !1;
                                  break a
                              }
                      p = !0
                  }
                  n = p
              }
              var r = !1;
              if (d) {
                  var u = 0 <= e.indexOf(h);
                  if (u) r = u;
                  else {
                      var t = La(e, l || []);
                      t && P(10);
                      r = t
                  }
              }
              var v = !n || r;
              v || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = La(e, Sq));
              return f[h] = v
          }
      },
      Tq = function() {
          return Pq.test(m.location && m.location.hostname)
      };
  var Vq = {
          initialized: 11,
          complete: 12,
          interactive: 13
      },
      Wq = {},
      Xq = Object.freeze((Wq[S.g.Fa] = !0, Wq)),
      Yq = 0 <= H.location.search.indexOf("?gtm_diagnostics=") || 0 <= H.location.search.indexOf("&gtm_diagnostics="),
      $q = function(a, b, c) {
          if (An && "config" === a && !(1 < Gm(b).M.length)) {
              var d, e = Xb("google_tag_data", {});
              e.td || (e.td = {});
              d = e.td;
              var f = J(c.F);
              J(c.h, f);
              var g = [],
                  h;
              for (h in d) {
                  var l = Zq(d[h], f);
                  l.length && (Yq && console.log(l), g.push(h))
              }
              if (g.length) {
                  if (g.length) {
                      var n = b + "*" + g.join(".");
                      Kn = Kn ? Kn + "!" + n : "&tdc=" + n
                  }
                  Rb("TAGGING",
                      Vq[H.readyState] || 14)
              }
              d[b] = f
          }
      };

  function ar(a, b) {
      var c = {},
          d;
      for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
      for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
      return c
  }

  function Zq(a, b, c, d) {
      c = void 0 === c ? {} : c;
      d = void 0 === d ? "" : d;
      if (a === b) return [];
      var e = function(q, r) {
              var u = r[q];
              return void 0 === u ? Xq[q] : u
          },
          f;
      for (f in ar(a, b)) {
          var g = (d ? d + "." : "") + f,
              h = e(f, a),
              l = e(f, b),
              n = "object" === Bc(h) || "array" === Bc(h),
              p = "object" === Bc(l) || "array" === Bc(l);
          if (n && p) Zq(h, l, c, g);
          else if (n || p || h !== l) c[g] = !0
      }
      return Object.keys(c)
  };
  var br = !1,
      cr = 0,
      dr = [];

  function er(a) {
      if (!br) {
          var b = H.createEventObject,
              c = "complete" == H.readyState,
              d = "interactive" == H.readyState;
          if (!a || "readystatechange" != a.type || c || !b && d) {
              br = !0;
              for (var e = 0; e < dr.length; e++) I(dr[e])
          }
          dr.push = function() {
              for (var f = 0; f < arguments.length; f++) I(arguments[f]);
              return 0
          }
      }
  }

  function fr() {
      if (!br && 140 > cr) {
          cr++;
          try {
              H.documentElement.doScroll("left"), er()
          } catch (a) {
              m.setTimeout(fr, 50)
          }
      }
  }
  var gr = function(a) {
      br ? a() : dr.push(a)
  };
  var hr = function() {
      this.I = 0;
      this.h = {}
  };
  hr.prototype.B = function(a, b, c) {
      var d = ++this.I;
      this.h[a] = this.h[a] || {};
      this.h[a][String(d)] = {
          listener: b,
          hb: c
      };
      return d
  };
  hr.prototype.D = function(a, b) {
      var c = this.h[a],
          d = String(b);
      if (!c || !c[d]) return !1;
      delete c[d];
      return !0
  };
  hr.prototype.F = function(a, b) {
      var c = [];
      Ma(this.h[a], function(d, e) {
          0 > c.indexOf(e.listener) && (void 0 === e.hb || 0 <= b.indexOf(e.hb)) && c.push(e.listener)
      });
      return c
  };
  var ir = function(a, b, c) {
      return {
          entityType: a,
          indexInOriginContainer: b,
          nameInOriginContainer: c,
          originContainerId: We.N
      }
  };
  var kr = function(a, b) {
          this.h = !1;
          this.F = [];
          this.I = {
              tags: []
          };
          this.T = !1;
          this.B = this.D = 0;
          jr(this, a, b)
      },
      lr = function(a, b, c, d) {
          if (hh.hasOwnProperty(b) || "__zone" === b) return -1;
          var e = {};
          Dc(d) && (e = J(d, e));
          e.id = c;
          e.status = "timeout";
          return a.I.tags.push(e) - 1
      },
      mr = function(a, b, c, d) {
          var e = a.I.tags[b];
          e && (e.status = c, e.executionTime = d)
      },
      nr = function(a) {
          if (!a.h) {
              for (var b = a.F, c = 0; c < b.length; c++) b[c]();
              a.h = !0;
              a.F.length = 0
          }
      },
      jr = function(a, b, c) {
          void 0 !== b && a.xe(b);
          c && m.setTimeout(function() {
              return nr(a)
          }, Number(c))
      };
  kr.prototype.xe = function(a) {
      var b = this,
          c = Va(function() {
              return I(function() {
                  a(We.N, b.I)
              })
          });
      this.h ? c() : this.F.push(c)
  };
  var or = function(a) {
          a.D++;
          return Va(function() {
              a.B++;
              a.T && a.B >= a.D && nr(a)
          })
      },
      pr = function(a) {
          a.T = !0;
          a.B >= a.D && nr(a)
      };
  var qr = function() {
          function a(d) {
              return !Da(d) || 0 > d ? 0 : d
          }
          if (!eh._li && m.performance && m.performance.timing) {
              var b = m.performance.timing.navigationStart,
                  c = Da(Mh.get("gtm.start")) ? Mh.get("gtm.start") : 0;
              eh._li = {
                  cst: a(c - b),
                  cbt: a(vh - b)
              }
          }
      },
      rr = function(a) {
          m.performance && m.performance.mark(We.N + "_" + a + "_start")
      },
      sr = function(a) {
          if (m.performance) {
              var b = We.N + "_" + a + "_start",
                  c = We.N + "_" + a + "_duration";
              m.performance.measure(c, b);
              var d = m.performance.getEntriesByName(c)[0];
              m.performance.clearMarks(b);
              m.performance.clearMeasures(c);
              var e = eh._p || {};
              void 0 === e[a] && (e[a] = d.duration, eh._p = e);
              return d.duration
          }
      },
      tr = function() {
          var a = nc();
          if (void 0 !== a) {
              var b = eh._p || {};
              b.PAGEVIEW = a;
              eh._p = b
          }
      };
  var ur = {},
      vr = function() {
          return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject]
      },
      wr = !1;

  function zr() {
      return m.GoogleAnalyticsObject || "ga"
  }
  var Ar = function(a) {},
      Br = function(a, b) {
          return function() {
              var c = vr(),
                  d = c && c.getByName && c.getByName(a);
              if (d) {
                  var e = d.get("sendHitTask");
                  d.set("sendHitTask", function(f) {
                      var g = f.get("hitPayload"),
                          h = f.get("hitCallback"),
                          l = 0 > g.indexOf("&tid=" + b);
                      l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                      e(f);
                      l && (f.set("hitPayload",
                          g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                  })
              }
          }
      };

  function Gr(a, b, c, d) {
      var e = xe[a],
          f = Hr(a, b, c, d);
      if (!f) return null;
      var g = He(e[Xd.Ih], c, []);
      if (g && g.length) {
          var h = g[0];
          f = Gr(h.index, {
              X: f,
              W: 1 === h.Vh ? b.terminate : f,
              terminate: b.terminate
          }, c, d)
      }
      return f
  }

  function Hr(a, b, c, d) {
      function e() {
          if (f[Xd.oj]) h();
          else {
              var w = Ie(f, c, []),
                  x = w[Xd.zi];
              if (null != x)
                  for (var y = 0; y < x.length; y++)
                      if (!tj(x[y])) {
                          h();
                          return
                      } var A = lr(c.Ab, String(f[Xd.Kb]), Number(f[Xd.Jh]), w[Xd.pj]),
                  B = !1;
              w.vtp_gtmOnSuccess = function() {
                  if (!B) {
                      B = !0;
                      var G = Ta() - F;
                      no(c.id, xe[a], "5", G);
                      mr(c.Ab, A, "success", G);
                      g()
                  }
              };
              w.vtp_gtmOnFailure = function() {
                  if (!B) {
                      B = !0;
                      var G = Ta() - F;
                      no(c.id, xe[a], "6", G);
                      mr(c.Ab, A, "failure", G);
                      h()
                  }
              };
              w.vtp_gtmTagId = f.tag_id;
              w.vtp_gtmEventId = c.id;
              c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
              no(c.id, f, "1");
              var C = function() {
                  var G = Ta() - F;
                  no(c.id, f, "7", G);
                  mr(c.Ab, A, "exception", G);
                  B || (B = !0, h())
              };
              var F = Ta();
              try {
                  Ge(w, {
                      event: c,
                      index: a,
                      type: 1
                  })
              } catch (G) {
                  C(G)
              }
          }
      }
      var f = xe[a],
          g = b.X,
          h = b.W,
          l = b.terminate;
      if (c.Uf(f)) return null;
      var n = He(f[Xd.Kh], c,
          []);
      if (n && n.length) {
          var p = n[0],
              q = Gr(p.index, {
                  X: g,
                  W: h,
                  terminate: l
              }, c, d);
          if (!q) return null;
          g = q;
          h = 2 === p.Vh ? l : q
      }
      if (f[Xd.Eh] || f[Xd.rj]) {
          var r = f[Xd.Eh] ? ye : c.al,
              u = g,
              t = h;
          if (!r[a]) {
              e = Va(e);
              var v = Ir(a, r, e);
              g = v.X;
              h = v.W
          }
          return function() {
              r[a](u, t)
          }
      }
      return e
  }

  function Ir(a, b, c) {
      var d = [],
          e = [];
      b[a] = Jr(d, e, c);
      return {
          X: function() {
              b[a] = Kr;
              for (var f = 0; f < d.length; f++) d[f]()
          },
          W: function() {
              b[a] = Lr;
              for (var f = 0; f < e.length; f++) e[f]()
          }
      }
  }

  function Jr(a, b, c) {
      return function(d, e) {
          a.push(d);
          b.push(e);
          c()
      }
  }

  function Kr(a) {
      a()
  }

  function Lr(a, b) {
      b()
  };
  var Nr = function(a, b) {
          return 1 === arguments.length ? Mr("set", a) : Mr("set", a, b)
      },
      Or = function(a, b) {
          return 1 === arguments.length ? Mr("config", a) : Mr("config", a, b)
      },
      Pr = function(a, b, c) {
          c = c || {};
          c[S.g.Jb] = a;
          return Mr("event", b, c)
      };

  function Mr(a) {
      return arguments
  }
  var Qr = function() {
      this.h = [];
      this.B = []
  };
  Qr.prototype.enqueue = function(a, b, c) {
      var d = this.h.length + 1;
      a["gtm.uniqueEventId"] = b;
      a["gtm.priorityId"] = d;
      c.eventId = b;
      c.fromContainerExecution = !0;
      c.priorityId = d;
      var e = {
          message: a,
          notBeforeEventId: b,
          priorityId: d,
          messageContext: c
      };
      this.h.push(e);
      for (var f = 0; f < this.B.length; f++) try {
          this.B[f](e)
      } catch (g) {}
  };
  Qr.prototype.listen = function(a) {
      this.B.push(a)
  };
  Qr.prototype.get = function() {
      for (var a = {}, b = 0; b < this.h.length; b++) {
          var c = this.h[b],
              d = a[c.notBeforeEventId];
          d || (d = [], a[c.notBeforeEventId] = d);
          d.push(c)
      }
      return a
  };
  Qr.prototype.prune = function(a) {
      for (var b = [], c = [], d = 0; d < this.h.length; d++) {
          var e = this.h[d];
          e.notBeforeEventId === a ? b.push(e) : c.push(e)
      }
      this.h = c;
      return b
  };
  var Sr = function(a, b, c) {
          Rr().enqueue(a, b, c)
      },
      Ur = function() {
          var a = Tr;
          Rr().listen(a)
      };

  function Rr() {
      var a = eh.mb;
      a || (a = new Qr, eh.mb = a);
      return a
  }
  var bs = function(a) {
          var b = eh.zones;
          return b ? b.getIsAllowedFn(ak(), a) : function() {
              return !0
          }
      },
      cs = function(a) {
          var b = eh.zones;
          return b ? b.isActive(ak(), a) : !0
      };
  var fs = function(a, b) {
      for (var c = [], d = 0; d < xe.length; d++)
          if (a[d]) {
              var e = xe[d];
              var f = or(b.Ab);
              try {
                  var g = Gr(d, {
                      X: f,
                      W: f,
                      terminate: f
                  }, b, d);
                  if (g) {
                      var h = c,
                          l = h.push,
                          n = d,
                          p = e["function"];
                      if (!p) throw "Error: No function name given for function call.";
                      var q = ze[p];
                      l.call(h, {
                          oi: n,
                          gi: q ? q.priorityOverride || 0 : 0,
                          execute: g
                      })
                  } else ds(d, b), f()
              } catch (u) {
                  f()
              }
          } c.sort(es);
      for (var r = 0; r < c.length; r++) c[r].execute();
      return 0 < c.length
  };
  var hs = function(a, b) {
      if (!gs) return !1;
      var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
          d = gs.F(a.event, c ? String(c).split(",") : []);
      if (!d.length) return !1;
      for (var e = 0; e < d.length; ++e) {
          var f = or(b);
          try {
              d[e](a, f)
          } catch (g) {
              f()
          }
      }
      return !0
  };

  function es(a, b) {
      var c, d = b.gi,
          e = a.gi;
      c = d > e ? 1 : d < e ? -1 : 0;
      var f;
      if (0 !== c) f = c;
      else {
          var g = a.oi,
              h = b.oi;
          f = g > h ? 1 : g < h ? -1 : 0
      }
      return f
  }

  function ds(a, b) {
      if (An) {
          var c = function(d) {
              var e = b.Uf(xe[d]) ? "3" : "4",
                  f = He(xe[d][Xd.Ih], b, []);
              f && f.length && c(f[0].index);
              no(b.id, xe[d], e);
              var g = He(xe[d][Xd.Kh], b, []);
              g && g.length && c(g[0].index)
          };
          c(a)
      }
  }
  var is = !1,
      gs;
  var js = function() {
      gs || (gs = new hr);
      return gs
  };
  var os = function(a) {
      var b = Ta(),
          c = a["gtm.uniqueEventId"],
          d = a["gtm.priorityId"],
          e = a.event;
      if ("gtm.js" === e) {
          if (is) return !1;
          is = !0;
      }
      var h, l = !1;
      if (cs(c)) h = bs(c);
      else {
          if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
          l = !0;
          h = bs(Number.MAX_SAFE_INTEGER)
      }
      mo(c, e);
      var n = a.eventCallback,
          p = a.eventTimeout,
          q = n;
      var r = {
              id: c,
              priorityId: d,
              name: e,
              Uf: Uq(h),
              al: [],
              ci: function() {
                  P(6);
                  Rb("HEALTH", 0)
              },
              Oh: ks(),
              Ph: ls(c),
              Ab: new kr(q, p)
          },
          u = Re(r);
      l && (u = ms(u));
      var t = fs(u, r),
          v = !1;
      v = hs(a, r.Ab);
      pr(r.Ab);
      "gtm.js" !== e && "gtm.sync" !== e || Ar(We.N);
      return ns(u, t) || v
  };

  function ls(a) {
      return function(b) {
          An && (Hc(b) || vo(a, "input", b))
      }
  }

  function ks() {
      var a = {};
      a.event = Qh("event", 1);
      a.ecommerce = Qh("ecommerce", 1);
      a.gtm = Qh("gtm");
      a.eventModel = Qh("eventModel");
      return a
  }

  function ms(a) {
      for (var b = [], c = 0; c < a.length; c++)
          if (a[c]) {
              var d = String(xe[c][Xd.Kb]),
                  e;
              if (!(e = gh[d] || void 0 !== xe[c][Xd.sj])) {
                  var f = xe[c]["function"];
                  if (!f) throw "Error: No function name given for function call.";
                  var g = ze[f];
                  e = g ? g.isInfrastructure || !1 : !1
              }
              if (e || 0 === d.indexOf("__ccd") || 0 === d.indexOf("__ogt") || "__set_product_settings" === d) b[c] = !0
          } return b
  }

  function ns(a, b) {
      if (!b) return b;
      for (var c = 0; c < a.length; c++)
          if (a[c] && xe[c] && !hh[String(xe[c][Xd.Kb])]) return !0;
      return !1
  }
  var qs = function(a, b, c, d) {
          ps.push("event", [b, a], c, d)
      },
      rs = function(a, b, c, d) {
          ps.push("get", [a, b], c, d)
      },
      ss = function() {
          this.status = 1;
          this.I = {};
          this.h = {};
          this.B = {};
          this.T = null;
          this.F = {};
          this.D = !1
      },
      ts = function(a, b, c, d) {
          var e = Ta();
          this.type = a;
          this.B = e;
          this.da = b || "";
          this.h = c;
          this.messageContext = d
      },
      us = function() {
          this.B = {};
          this.D = {};
          this.h = []
      },
      vs = function(a, b) {
          var c = Gm(b);
          return a.B[c.V] = a.B[c.V] || new ss
      },
      ws = function(a, b, c, d) {
          if (d.da) {
              var e = vs(a, d.da),
                  f = e.T;
              if (f) {
                  var g = J(c),
                      h = J(e.I[d.da]),
                      l = J(e.F),
                      n = J(e.h),
                      p = J(a.D),
                      q = {};
                  if (An) try {
                      q = J(Ih)
                  } catch (v) {
                      P(72)
                  }
                  var r = Gm(d.da).prefix,
                      u = function(v) {
                          uo(d.messageContext.eventId, r, v);
                          var w = g[S.g.fc];
                          w && I(w)
                      },
                      t = To(Ro(Qo(Po(No(Mo(Oo(Lo(Ko(Jo(new Io(d.messageContext.eventId, d.messageContext.priorityId), g), h), l), n), p), q), d.messageContext.eventMetadata), function() {
                          if (u) {
                              var v = u;
                              u = void 0;
                              v("2")
                          }
                      }), function() {
                          if (u) {
                              var v = u;
                              u = void 0;
                              v("3")
                          }
                      }));
                  try {
                      uo(d.messageContext.eventId, r, "1"), $q(d.type, d.da, t), f(d.da, b, d.B, t)
                  } catch (v) {
                      uo(d.messageContext.eventId, r, "4")
                  }
              }
          }
      };
  us.prototype.register = function(a, b, c) {
      var d = vs(this, a);
      3 !== d.status && (d.T = b, d.status = 3, c && (J(d.h, c), d.h = c), this.flush())
  };
  us.prototype.push = function(a, b, c, d) {
      if (void 0 !== c) {
          if (!Gm(c)) return;
          if (c) {
              var e = Gm(c);
              e && 1 === vs(this, c).status && (vs(this, c).status = 2, this.push("require", [{}], e.V, {}))
          }
          vs(this, c).D && (d.deferrable = !1)
      }
      this.h.push(new ts(a, c, b, d));
      d.deferrable || this.flush()
  };
  us.prototype.flush = function(a) {
      for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
          var f = this.h[0];
          if (f.messageContext.deferrable) !f.da || vs(this, f.da).D ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
          else {
              var g = void 0;
              switch (f.type) {
                  case "require":
                      g = vs(this, f.da);
                      if (3 !== g.status && !a) {
                          this.h.push.apply(this.h, c);
                          return
                      }
                      break;
                  case "set":
                      Ma(f.h[0], function(r, u) {
                          J(bb(r, u), b.D)
                      });
                      break;
                  case "config":
                      g = vs(this, f.da);
                      e.tb = {};
                      Ma(f.h[0], function(r) {
                          return function(u, t) {
                              J(bb(u, t), r.tb)
                          }
                      }(e));
                      var h = !!e.tb[S.g.bd];
                      delete e.tb[S.g.bd];
                      var l = Gm(f.da),
                          n = l.V === l.id;
                      h || (n ? g.F = {} : g.I[f.da] = {});
                      g.D && h || ws(this, S.g.Da, e.tb, f);
                      g.D = !0;
                      n ? J(e.tb, g.F) : (J(e.tb, g.I[f.da]), P(70));
                      d = !0;
                      break;
                  case "event":
                      g = vs(this, f.da);
                      e.Ld = {};
                      Ma(f.h[0], function(r) {
                          return function(u, t) {
                              J(bb(u, t), r.Ld)
                          }
                      }(e));
                      ws(this, f.h[1], e.Ld, f);
                      break;
                  case "get":
                      g = vs(this, f.da);
                      var p = {},
                          q = (p[S.g.ab] = f.h[0], p[S.g.ob] = f.h[1], p);
                      ws(this, S.g.Ka, q, f)
              }
              this.h.shift();
              xs(this, f)
          }
          e = {
              tb: e.tb,
              Ld: e.Ld
          }
      }
      this.h.push.apply(this.h, c);
      d && this.flush()
  };
  var xs = function(a, b) {
          if ("require" !== b.type)
              if (b.da)
                  for (var c = vs(a, b.da).B[b.type] || [], d = 0; d < c.length; d++) c[d]();
              else
                  for (var e in a.B)
                      if (a.B.hasOwnProperty(e)) {
                          var f = a.B[e];
                          if (f && f.B)
                              for (var g = f.B[b.type] || [], h = 0; h < g.length; h++) g[h]()
                      }
      },
      ys = function(a, b) {
          var c = ps,
              d = J(b);
          J(vs(c, a).h, d);
          vs(c, a).h = d
      },
      ps = new us;
  var $e;
  var zs = {},
      As = {},
      Bs = function(a) {
          for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                  Qd: d.Qd,
                  Nd: d.Nd
              }, e++) {
              var f = a[e];
              if (0 <= f.indexOf("-")) {
                  if (d.Qd = Gm(f), d.Qd) {
                      var g = bk();
                      Ha(g, function(q) {
                          return function(r) {
                              return q.Qd.V === r
                          }
                      }(d)) ? b.push(f) : c.push(f)
                  }
              } else {
                  var h = zs[f] || [];
                  d.Nd = {};
                  h.forEach(function(q) {
                      return function(r) {
                          return q.Nd[r] = !0
                      }
                  }(d));
                  for (var l = ak(), n = 0; n < l.length; n++)
                      if (d.Nd[l[n]]) {
                          b = b.concat(bk());
                          break
                      } var p = As[f] || [];
                  p.length && (b = b.concat(p))
              }
          }
          return {
              uk: b,
              xk: c
          }
      },
      Cs = function(a) {
          Ma(zs, function(b, c) {
              var d =
                  c.indexOf(a);
              0 <= d && c.splice(d, 1)
          })
      },
      Ds = function(a) {
          Ma(As, function(b, c) {
              var d = c.indexOf(a);
              0 <= d && c.splice(d, 1)
          })
      };
  var Es = "HA GF G UA AW DC MC".split(" "),
      Fs = !1,
      Gs = !1;

  function Hs(a, b) {
      a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
          value: yh()
      });
      b.eventId = a["gtm.uniqueEventId"];
      b.priorityId = a["gtm.priorityId"];
      return {
          eventId: b.eventId,
          priorityId: b.priorityId
      }
  }
  var Is = {
          config: function(a, b) {
              var c = Hs(a, b);
              if (!(2 > a.length) && k(a[1])) {
                  var d = {};
                  if (2 < a.length) {
                      if (void 0 != a[2] && !Dc(a[2]) || 3 < a.length) return;
                      d = a[2]
                  }
                  var e = Gm(a[1]);
                  if (e) {
                      mo(c.eventId, "gtag.config");
                      var f = e.V,
                          g = e.id !== f;
                      if (g ? -1 === bk().indexOf(f) : -1 === ak().indexOf(f)) {
                          var h = d[S.g.wa] || ps.D[S.g.wa];
                          g ? Oq(f, h, {
                              source: 2,
                              fromContainerExecution: b.fromContainerExecution
                          }) : Nq(f, h, !0, {
                              source: 2,
                              fromContainerExecution: b.fromContainerExecution
                          })
                      } else {
                          if (kh && !g && !d[S.g.bd]) {
                              var l = Gs;
                              Gs = !0;
                              if (l) return
                          }
                          Fs || P(43);
                          if (!b.noTargetGroup)
                              if (g) {
                                  Ds(e.id);
                                  var n = e.id,
                                      p = d[S.g.ie] || "default";
                                  p = String(p).split(",");
                                  for (var q = 0; q < p.length; q++) {
                                      var r = As[p[q]] || [];
                                      As[p[q]] = r;
                                      0 > r.indexOf(n) && r.push(n)
                                  }
                              } else {
                                  Cs(e.id);
                                  var u = e.id,
                                      t = d[S.g.ie] || "default";
                                  t = t.toString().split(",");
                                  for (var v = 0; v < t.length; v++) {
                                      var w = zs[t[v]] || [];
                                      zs[t[v]] = w;
                                      0 > w.indexOf(u) && w.push(u)
                                  }
                              } delete d[S.g.ie];
                          var x = b.eventMetadata || {};
                          x.hasOwnProperty("is_external_event") || (x.is_external_event = !b.fromContainerExecution);
                          b.eventMetadata = x;
                          delete d[S.g.fc];
                          for (var y = g ? [e.id] : bk(), A = 0; A < y.length; A++) {
                              var B =
                                  J(b);
                              ps.push("config", [d], y[A], B)
                          }
                      }
                  }
              }
          },
          consent: function(a, b) {
              if (3 === a.length) {
                  P(39);
                  var c = Hs(a, b),
                      d = a[1];
                  "default" === d ? qj(a[2]) : "update" === d && sj(a[2], c)
              }
          },
          event: function(a, b) {
              var c = a[1];
              if (!(2 > a.length) && k(c)) {
                  var d;
                  if (2 < a.length) {
                      if (!Dc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                      d = a[2]
                  }
                  var e = d,
                      f = {},
                      g = (f.event = c, f);
                  e && (g.eventModel = J(e), e[S.g.fc] && (g.eventCallback = e[S.g.fc]), e[S.g.ce] && (g.eventTimeout = e[S.g.ce]));
                  var h = Hs(a, b),
                      l = h.eventId,
                      n = h.priorityId;
                  g["gtm.uniqueEventId"] = l;
                  n && (g["gtm.priorityId"] =
                      n);
                  if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                  var p;
                  var q = d,
                      r = q && q[S.g.Jb];
                  void 0 === r && (r = Lh(S.g.Jb, 2), void 0 === r && (r = "default"));
                  if (k(r) || Ea(r)) {
                      var u = r.toString().replace(/\s+/g, "").split(","),
                          t = Bs(u),
                          v = t.uk,
                          w = t.xk;
                      if (w.length)
                          for (var x = q && q[S.g.wa] || ps.D[S.g.wa], y = 0; y < w.length; y++) {
                              var A = Gm(w[y]);
                              A && Oq(A.V, x, {
                                  source: 3,
                                  fromContainerExecution: b.fromContainerExecution
                              })
                          }
                      p = Im(v)
                  } else p = void 0;
                  var B = p;
                  if (B) {
                      mo(l, c);
                      for (var C = [], F = 0; F < B.length; F++) {
                          var G = B[F],
                              D = J(b);
                          if (-1 !== Es.indexOf(G.prefix)) {
                              var N =
                                  J(d),
                                  R = D.eventMetadata || {};
                              R.hasOwnProperty("is_external_event") || (R.is_external_event = !D.fromContainerExecution);
                              D.eventMetadata = R;
                              delete N[S.g.fc];
                              qs(c, N, G.id, D)
                          }
                          C.push(G.id)
                      }
                      g.eventModel = g.eventModel || {};
                      0 < B.length ? g.eventModel[S.g.Jb] = C.join() : delete g.eventModel[S.g.Jb];
                      Fs || P(43);
                      return b.noGtmEvent ? void 0 : g
                  }
              }
          },
          get: function(a, b) {
              P(53);
              if (4 === a.length && k(a[1]) && k(a[2]) && Ca(a[3])) {
                  var c = Gm(a[1]),
                      d = String(a[2]),
                      e = a[3];
                  if (c) {
                      Fs || P(43);
                      var f = ps.D[S.g.wa];
                      if (!Ha(bk(), function(h) {
                              return c.V === h
                          })) Oq(c.V,
                          f, {
                              source: 4,
                              fromContainerExecution: b.fromContainerExecution
                          });
                      else if (-1 !== Es.indexOf(c.prefix)) {
                          Hs(a, b);
                          var g = {};
                          mj(J((g[S.g.ab] = d, g[S.g.ob] = e, g)));
                          rs(d, function(h) {
                              I(function() {
                                  return e(h)
                              })
                          }, c.id, b)
                      }
                  }
              }
          },
          js: function(a, b) {
              if (2 == a.length && a[1].getTime) {
                  Fs = !0;
                  var c = Hs(a, b),
                      d = c.eventId,
                      e = c.priorityId,
                      f = {};
                  return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
              }
          },
          policy: function(a) {
              if (3 === a.length && k(a[1]) && Ca(a[2])) {
                  var b = a[1],
                      c = a[2],
                      d = $e.B;
                  d.h[b] ? d.h[b].push(c) :
                      d.h[b] = [c];
                  if (P(74), "all" === a[1]) {
                      P(75);
                      var e = !1;
                      try {
                          e = a[2](We.N, "unknown", {})
                      } catch (f) {}
                      e || P(76)
                  }
              } else {
                  P(73);
              }
          },
          set: function(a, b) {
              var c;
              2 == a.length && Dc(a[1]) ? c = J(a[1]) : 3 == a.length && k(a[1]) && (c = {}, Dc(a[2]) || Ea(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
              if (c) {
                  var d = Hs(a,
                          b),
                      e = d.eventId,
                      f = d.priorityId;
                  J(c);
                  var g = J(c);
                  ps.push("set", [g], void 0, b);
                  c["gtm.uniqueEventId"] = e;
                  f && (c["gtm.priorityId"] = f);
                  K(30) && delete c.event;
                  b.overwriteModelFields = !0;
                  return c
              }
          }
      },
      Js = {
          policy: !0
      };
  var Ks = function(a) {
          var b = m[dh.ma].hide;
          if (b && void 0 !== b[a] && b.end) {
              b[a] = !1;
              var c = !0,
                  d;
              for (d in b)
                  if (b.hasOwnProperty(d) && !0 === b[d]) {
                      c = !1;
                      break
                  } c && (b.end(), b.end = null)
          }
      },
      Ls = function(a) {
          var b = m[dh.ma],
              c = b && b.hide;
          c && c.end && (c[a] = !0)
      };
  var Ms = !1,
      Ns = [];

  function Os() {
      if (!Ms) {
          Ms = !0;
          for (var a = 0; a < Ns.length; a++) I(Ns[a])
      }
  }
  var Ps = function(a) {
      Ms ? I(a) : Ns.push(a)
  };
  var Et = function(a) {
      if (Dt(a)) return a;
      this.Ya = a
  };
  Et.prototype.getUntrustedMessageValue = function() {
      return this.Ya
  };
  var Dt = function(a) {
      return !a || "object" !== Bc(a) || Dc(a) ? !1 : "getUntrustedMessageValue" in a
  };
  Et.prototype.getUntrustedMessageValue = Et.prototype.getUntrustedMessageValue;
  var Ft = 0,
      Gt = {},
      Ht = [],
      It = [],
      Jt = !1,
      Kt = !1;

  function Lt(a, b) {
      return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
  }
  var Mt = function(a) {
          return m[dh.ma].push(a)
      },
      Nt = function(a, b, c) {
          a.eventCallback = b;
          c && (a.eventTimeout = c);
          return Mt(a)
      },
      Ot = function(a, b) {
          var c = eh[dh.ma],
              d = c ? c.subscribers : 1,
              e = 0,
              f = !1,
              g = void 0;
          b && (g = m.setTimeout(function() {
              f || (f = !0, a());
              g = void 0
          }, b));
          return function() {
              ++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0))
          }
      };

  function Pt(a, b) {
      var c = a._clear || b.overwriteModelFields;
      Ma(a, function(e, f) {
          "_clear" !== e && (c && Oh(e), Oh(e, f))
      });
      uh || (uh = a["gtm.start"]);
      var d = a["gtm.uniqueEventId"];
      if (!a.event) return !1;
      "number" !== typeof d && (d = yh(), a["gtm.uniqueEventId"] = d, Oh("gtm.uniqueEventId", d));
      return os(a)
  }

  function Qt(a) {
      if (null == a || "object" !== typeof a) return !1;
      if (a.event) return !0;
      if (Na(a)) {
          var b = a[0];
          if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
      }
      return !1
  }

  function Rt() {
      var a;
      if (It.length) a = It.shift();
      else if (Ht.length) a = Ht.shift();
      else return;
      var b;
      var c = a;
      if (Jt || !Qt(c.message)) b = c;
      else {
          Jt = !0;
          var d = c.message["gtm.uniqueEventId"];
          "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = yh());
          var e = {},
              f = {
                  message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                  messageContext: {
                      eventId: d - 2
                  }
              },
              g = {},
              h = {
                  message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                  messageContext: {
                      eventId: d - 1
                  }
              };
          Ht.unshift(h, c);
          if (An && We.N) {
              var l;
              if (We.zf) {
                  var n = We.N,
                      p = dk().destination[n];
                  l = p && p.context
              } else {
                  var q = We.N,
                      r = dk().container[q];
                  l = r && r.context
              }
              var u = l,
                  t, v = ki(m.location.href);
              t = v.hostname + v.pathname;
              var w = u && u.fromContainerExecution,
                  x = u && u.source,
                  y = We.N,
                  A = We.Yb,
                  B = We.zf;
              Mn || (Mn = t);
              Ln.push(y + ";" + A + ";" + (w ? 1 : 0) + ";" + (x || 0) + ";" + (B ? 1 : 0))
          }
          b = f
      }
      return b
  }

  function St() {
      for (var a = !1, b; !Kt && (b = Rt());) {
          Kt = !0;
          delete Ih.eventModel;
          Kh();
          var c = b,
              d = c.message,
              e = c.messageContext;
          if (null == d) Kt = !1;
          else {
              e.fromContainerExecution && Ph();
              try {
                  if (Ca(d)) try {
                      d.call(Mh)
                  } catch (x) {} else if (Ea(d)) {
                      var f = d;
                      if (k(f[0])) {
                          var g = f[0].split("."),
                              h = g.pop(),
                              l = f.slice(1),
                              n = Lh(g.join("."), 2);
                          if (null != n) try {
                              n[h].apply(n, l)
                          } catch (x) {}
                      }
                  } else {
                      var p = void 0,
                          q = !1;
                      if (Na(d)) {
                          a: {
                              if (d.length &&
                                  k(d[0])) {
                                  var r = Is[d[0]];
                                  if (r && (!e.fromContainerExecution || !Js[d[0]])) {
                                      p = r(d, e);
                                      break a
                                  }
                              }
                              p = void 0
                          }(q = p && "set" === d[0] && !!p.event) && P(101)
                      }
                      else p = d;
                      if (p) {
                          var u = Pt(p, e);
                          a = u || a;
                          q && u && P(113)
                      }
                  }
              } finally {
                  e.fromContainerExecution && Kh(!0);
                  var t = d["gtm.uniqueEventId"];
                  if ("number" === typeof t) {
                      for (var v = Gt[String(t)] || [], w = 0; w < v.length; w++) It.push(Tt(v[w]));
                      v.length && It.sort(Lt);
                      delete Gt[String(t)];
                      t > Ft && (Ft = t)
                  }
                  Kt = !1
              }
          }
      }
      return !a
  }

  function Ut() {
      var b = St();
      try {
          Ks(We.N)
      } catch (c) {}
      return b
  }

  function Tr(a) {
      if (Ft < a.notBeforeEventId) {
          var b = String(a.notBeforeEventId);
          Gt[b] = Gt[b] || [];
          Gt[b].push(a)
      } else It.push(Tt(a)), It.sort(Lt), I(function() {
          Kt || St()
      })
  }

  function Tt(a) {
      return {
          message: a.message,
          messageContext: a.messageContext
      }
  }
  var Wt = function() {
          function a(f) {
              var g = {};
              if (Dt(f)) {
                  var h = f;
                  f = Dt(h) ? h.getUntrustedMessageValue() : void 0;
                  g.fromContainerExecution = !0
              }
              return {
                  message: f,
                  messageContext: g
              }
          }
          var b = Xb(dh.ma, []),
              c = eh[dh.ma] = eh[dh.ma] || {};
          !0 === c.pruned && P(83);
          Gt = Rr().get();
          Ur();
          gr(function() {
              if (!c.gtmDom) {
                  c.gtmDom = !0;
                  var f = {};
                  b.push((f.event = "gtm.dom", f))
              }
          });
          Ps(function() {
              if (!c.gtmLoad) {
                  c.gtmLoad = !0;
                  var f = {};
                  b.push((f.event = "gtm.load", f))
              }
          });
          c.subscribers = (c.subscribers || 0) + 1;
          var d = b.push;
          b.push = function() {
              var f;
              if (0 < eh.SANDBOXED_JS_SEMAPHORE) {
                  f = [];
                  for (var g = 0; g < arguments.length; g++) f[g] = new Et(arguments[g])
              } else f = [].slice.call(arguments, 0);
              var h = f.map(function(q) {
                  return a(q)
              });
              Ht.push.apply(Ht, h);
              var l = d.apply(b, f),
                  n = Math.max(100, Number("1000") || 300);
              if (this.length > n)
                  for (P(4), c.pruned = !0; this.length > n;) this.shift();
              var p = "boolean" !== typeof l || l;
              return St() && p
          };
          var e = b.slice(0).map(function(f) {
              return a(f)
          });
          Ht.push.apply(Ht, e);
          if (Vt()) {
              I(Ut)
          }
      },
      Vt = function() {
          var a = !0;
          return a
      };

  function Xt(a) {
      if (null == a || 0 === a.length) return !1;
      var b = Number(a),
          c = Ta();
      return b < c + 3E5 && b > c - 9E5
  }

  function Yt(a) {
      return a && 0 === a.indexOf("pending:") ? Xt(a.substr(8)) : !1
  };
  var Ce = {};
  Ce.qe = new String("undefined");
  var au = function(a, b, c) {
          var d = {
              event: b,
              "gtm.element": a,
              "gtm.elementClasses": mc(a, "className"),
              "gtm.elementId": a["for"] || hc(a, "id") || "",
              "gtm.elementTarget": a.formTarget || mc(a, "target") || ""
          };
          c && (d["gtm.triggers"] = c.join(","));
          d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || mc(a, "href") || a.src || a.code || a.codebase || "";
          return d
      },
      bu = function(a) {
          eh.hasOwnProperty("autoEventsSettings") || (eh.autoEventsSettings = {});
          var b = eh.autoEventsSettings;
          b.hasOwnProperty(a) || (b[a] = {});
          return b[a]
      },
      cu = function(a, b, c) {
          bu(a)[b] = c
      },
      du = function(a, b, c, d) {
          var e = bu(a),
              f = Ua(e, b, d);
          e[b] = c(f)
      },
      eu = function(a, b, c) {
          var d = bu(a);
          return Ua(d, b, c)
      },
      fu = function(a) {
          return "string" === typeof a ? a : String(yh())
      };
  var lu = !!m.MutationObserver,
      mu = void 0,
      nu = function(a) {
          if (!mu) {
              var b = function() {
                  var c = H.body;
                  if (c)
                      if (lu)(new MutationObserver(function() {
                          for (var e = 0; e < mu.length; e++) I(mu[e])
                      })).observe(c, {
                          childList: !0,
                          subtree: !0
                      });
                      else {
                          var d = !1;
                          fc(c, "DOMNodeInserted", function() {
                              d || (d = !0, I(function() {
                                  d = !1;
                                  for (var e = 0; e < mu.length; e++) I(mu[e])
                              }))
                          })
                      }
              };
              mu = [];
              H.body ? b() : I(b)
          }
          mu.push(a)
      };
  var yu = function(a, b, c) {
      function d() {
          var g = a();
          f += e ? (Ta() - e) * g.playbackRate / 1E3 : 0;
          e = Ta()
      }
      var e = 0,
          f = 0;
      return {
          createEvent: function(g, h, l) {
              var n = a(),
                  p = n.Nf,
                  q = void 0 !== l ? Math.round(l) : void 0 !== h ? Math.round(n.Nf * h) : Math.round(n.Th),
                  r = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                  u = H.hidden ? !1 : .5 <= Yh(c);
              d();
              var t = void 0;
              void 0 !== b && (t = [b]);
              var v = au(c, "gtm.video", t);
              v["gtm.videoProvider"] = "youtube";
              v["gtm.videoStatus"] = g;
              v["gtm.videoUrl"] = n.url;
              v["gtm.videoTitle"] = n.title;
              v["gtm.videoDuration"] =
                  Math.round(p);
              v["gtm.videoCurrentTime"] = Math.round(q);
              v["gtm.videoElapsedTime"] = Math.round(f);
              v["gtm.videoPercent"] = r;
              v["gtm.videoVisible"] = u;
              return v
          },
          li: function() {
              e = Ta()
          },
          sc: function() {
              d()
          }
      }
  };
  var zu = m.clearTimeout,
      Au = m.setTimeout,
      W = function(a, b, c, d) {
          if (Yj()) {
              b && I(b)
          } else return bc(a, b, c, d)
      },
      Bu = function() {
          return new Date
      },
      Cu = function() {
          return m.location.href
      },
      Du = function(a) {
          return ii(ki(a), "fragment")
      },
      Eu = function(a) {
          return ji(ki(a))
      },
      Fu = function(a, b) {
          return Lh(a, b || 2)
      },
      Gu = function(a, b, c) {
          return b ? Nt(a, b, c) : Mt(a)
      },
      Hu = function(a, b) {
          m[a] = b
      },
      X = function(a, b, c) {
          b && (void 0 === m[a] || c && !m[a]) && (m[a] = b);
          return m[a]
      },
      Iu = function(a, b, c) {
          return Fj(a, b, void 0 === c ? !0 : !!c)
      },
      Ju = function(a, b, c) {
          return 0 === Oj(a, b, c)
      },
      Ku = function(a, b) {
          if (Yj()) {
              b && I(b)
          } else dc(a, b)
      },
      Lu = function(a) {
          return !!eu(a, "init", !1)
      },
      Mu = function(a) {
          cu(a, "init", !0)
      },
      Nu = function(a, b, c) {
          An && (Hc(a) || vo(c, b, a))
      };
  var kv = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

  function lv(a, b) {
      a = String(a);
      b = String(b);
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) === c
  }
  var mv = new Ka;

  function nv(a, b, c) {
      var d = c ? "i" : void 0;
      try {
          var e = String(b) + d,
              f = mv.get(e);
          f || (f = new RegExp(b, d), mv.set(e, f));
          return f.test(a)
      } catch (g) {
          return !1
      }
  }

  function ov(a, b) {
      function c(g) {
          var h = ki(g),
              l = ii(h, "protocol"),
              n = ii(h, "host", !0),
              p = ii(h, "port"),
              q = ii(h, "path").toLowerCase().replace(/\/$/, "");
          if (void 0 === l || "http" === l && "80" === p || "https" === l && "443" === p) l = "web", p = "default";
          return [l, n, p, q]
      }
      for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
          if (d[f] !== e[f]) return !1;
      return !0
  }

  function pv(a, b) {
      return 0 <= String(a).indexOf(String(b))
  }

  function qv(a, b) {
      return String(a) === String(b)
  }

  function rv(a, b) {
      return Number(a) >= Number(b)
  }

  function sv(a, b) {
      return Number(a) <= Number(b)
  }

  function tv(a, b) {
      return Number(a) > Number(b)
  }

  function uv(a, b) {
      return Number(a) < Number(b)
  }

  function vv(a, b) {
      return 0 === String(a).indexOf(String(b))
  }

  function wv(a) {
      return xv(a) ? 1 : 0
  }

  function xv(a) {
      var b = a.arg0,
          c = a.arg1;
      if (a.any_of && Array.isArray(c)) {
          for (var d = 0; d < c.length; d++) {
              var e = J(a, {});
              J({
                  arg1: c[d],
                  any_of: void 0
              }, e);
              if (wv(e)) return !0
          }
          return !1
      }
      switch (a["function"]) {
          case "_cn":
              return pv(b, c);
          case "_css":
              var f;
              a: {
                  if (b) try {
                      for (var g = 0; g < kv.length; g++) {
                          var h = kv[g];
                          if (b[h]) {
                              f = b[h](c);
                              break a
                          }
                      }
                  } catch (l) {}
                  f = !1
              }
              return f;
          case "_ew":
              return lv(b, c);
          case "_eq":
              return qv(b, c);
          case "_ge":
              return rv(b, c);
          case "_gt":
              return tv(b, c);
          case "_lc":
              return 0 <= String(b).split(",").indexOf(String(c));
          case "_le":
              return sv(b, c);
          case "_lt":
              return uv(b, c);
          case "_re":
              return nv(b, c, a.ignore_case);
          case "_sw":
              return vv(b, c);
          case "_um":
              return ov(b, c)
      }
      return !1
  };

  function yv(a, b) {
      var c = this;
  }
  yv.R = "addConsentListener";
  var zv;
  var Av = function(a) {
      for (var b = 0; b < a.length; ++b)
          if (zv) try {
              a[b]()
          } catch (c) {
              P(77)
          } else a[b]()
  };

  function Bv(a, b, c) {
      var d = this,
          e;
      L(E(this), ["eventName:!string", "callback:!Fn", "triggerId:?string"], arguments), Av([function() {
          return M(d, "listen_data_layer", a)
      }]), e = js().B(a, Fc(b), c);
      return e
  }
  Bv.P = "internal.addDataLayerEventListener";

  function Cv(a, b, c) {}
  Cv.R = "addDocumentEventListener";

  function Dv(a, b, c, d) {}
  Dv.R = "addElementEventListener";

  function Ev(a) {}
  Ev.R = "addEventCallback";

  function Iv(a) {}
  Iv.P = "internal.addFormAbandonmentListener";
  var Jv = {},
      Kv = [],
      Lv = {},
      Mv = 0,
      Nv = 0;

  function Uv(a, b) {}
  Uv.P = "internal.addFormInteractionListener";

  function aw(a, b) {}
  aw.P = "internal.addFormSubmitListener";

  function fw(a) {}
  fw.P = "internal.addGaSendListener";
  var gw = {},
      hw = [];
  var ow = function(a, b) {};
  ow.P = "internal.addHistoryChangeListener";

  function pw(a, b, c) {}
  pw.R = "addWindowEventListener";

  function qw(a, b) {
      return !0
  }
  qw.R = "aliasInWindow";

  function rw(a, b, c) {}
  rw.P = "internal.appendRemoteConfigParameter";

  function sw() {
      var a = 2;
      return a
  };

  function tw(a, b) {
      var c;
      return c
  }
  tw.R = "callInWindow";

  function uw(a) {}
  uw.R = "callLater";

  function vw(a) {}
  vw.P = "callOnDomReady";

  function ww(a) {}
  ww.P = "callOnWindowLoad";

  function xw(a) {
      var b;
      return b
  }
  xw.P = "internal.computeGtmParameter";

  function yw(a, b) {
      var c;
      var d = Ec(c, this.h, sw());
      void 0 === d && void 0 !== c && P(45);
      return d
  }
  yw.R = "copyFromDataLayer";

  function zw(a) {
      var b;
      return b
  }
  zw.R = "copyFromWindow";

  function Aw(a, b) {
      var c;
      return c
  }
  Aw.P = "internal.copyPreHit";

  function Bw(a, b) {
      var c = null,
          d = sw();
      return Ec(c, this.h, d)
  }
  Bw.R = "createArgumentsQueue";

  function Cw(a) {
      var b;
      return Ec(b, this.h,
          sw())
  }
  Cw.R = "createQueue";
  var Dw = {},
      Ew = [],
      Fw = {},
      Gw = 0,
      Hw = 0;

  function Nw(a, b) {
      var c = this;
      return b
  }
  Nw.P = "internal.enableAutoEventOnFormInteraction";

  function Sw(a, b) {
      var c = this;
      return b
  }
  Sw.P = "internal.enableAutoEventOnFormSubmit";

  function Xw() {
      var a = this;
  }
  Xw.P = "internal.enableAutoEventOnGaSend";
  var Yw = {},
      Zw = [];
  var ax = function(a, b) {
          var c = "" + b;
          if (Yw[c]) Yw[c].push(a);
          else {
              var d = [a];
              Yw[c] = d;
              var e = $w(),
                  f = -1;
              Zw.push(function(g) {
                  0 <= f && m.clearTimeout(f);
                  b ? f = m.setTimeout(function() {
                      e(g, d);
                      f = -1
                  }, b) : e(g, d)
              })
          }
      },
      $w = function() {
          var a = m.location.href,
              b = {
                  source: null,
                  state: m.history.state || null,
                  url: ji(ki(a)),
                  U: ii(ki(a), "fragment")
              };
          return function(c, d) {
              var e = b,
                  f = {};
              f[e.source] = !0;
              f[c.source] = !0;
              if (!f.popstate || !f.hashchange || e.U != c.U) {
                  var g = {},
                      h = (g.event = "gtm.historyChange-v2", g["gtm.historyChangeSource"] = c.source, g["gtm.oldUrlFragment"] =
                          b.U, g["gtm.newUrlFragment"] = c.U, g["gtm.oldHistoryState"] = b.state, g["gtm.newHistoryState"] = c.state, g["gtm.oldUrl"] = b.url, g["gtm.newUrl"] = c.url, g["gtm.triggers"] = d.join(","), g);
                  b = c;
                  Mt(h)
              }
          }
      },
      bx = function(a, b) {
          var c = m.history,
              d = c[a];
          if (Ca(d)) try {
              c[a] = function(e, f, g) {
                  d.apply(c, [].slice.call(arguments, 0));
                  var h = m.location.href;
                  b({
                      source: a,
                      state: e,
                      url: ji(ki(h)),
                      U: ii(ki(h), "fragment")
                  })
              }
          } catch (e) {}
      },
      dx = function(a) {
          m.addEventListener("popstate", function(b) {
              var c = cx(b);
              a({
                  source: "popstate",
                  state: b.state,
                  url: ji(ki(c)),
                  U: ii(ki(c), "fragment")
              })
          })
      },
      ex = function(a) {
          m.addEventListener("hashchange", function(b) {
              var c = cx(b);
              a({
                  source: "hashchange",
                  state: null,
                  url: ji(ki(c)),
                  U: ii(ki(c), "fragment")
              })
          })
      },
      cx = function(a) {
          return a.target && a.target.location && a.target.location.href ? a.target.location.href : m.location.href
      };

  function fx(a, b) {
      var c = this;
      L(E(this), ["options:?DustMap", "triggerId:?*"], arguments);
      Av([function() {
          return M(c, "process_dom_events", "window", "popstate")
      }, function() {
          return M(c, "process_dom_events", "window", "pushstate")
      }]);
      b = fu(b);
      var d = Number(a && a.get("interval"));
      0 < d && isFinite(d) || (d = 0);
      if (eu("ehl", "init", !1)) {
          var e = eu("ehl", "reg");
          e && e(b, d)
      } else {
          var f = function(g) {
              for (var h = 0; h < Zw.length; h++) Zw[h](g)
          };
          ex(f);
          dx(f);
          bx("pushState",
              f);
          bx("replaceState", f);
          ax(b, d);
          cu("ehl", "reg", ax);
          cu("ehl", "init", !0)
      }
      return b
  }
  fx.P = "internal.enableAutoEventOnHistoryChange";
  var gx = function(a, b) {
          if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) return !1;
          var c = mc(b, "href"),
              d = c.indexOf("#"),
              e = mc(b, "target");
          if (e && "_self" !== e && "_parent" !== e && "_top" !== e || 0 === d) return !1;
          if (0 < d) {
              var f = ji(ki(c)),
                  g = ji(ki(m.location.href));
              return f !== g
          }
          return !0
      },
      hx = function(a, b) {
          for (var c = ii(ki((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || mc(b, "href") || b.src || b.code || b.codebase || ""), "host"), d = 0; d < a.length; d++) try {
              if ((new RegExp(a[d])).test(c)) return !1
          } catch (e) {}
          return !0
      },
      ix = function() {
          var a = 0,
              b = function(c) {
                  var d = c.target;
                  if (d && 3 !== c.which && !(c.Vf || c.timeStamp && c.timeStamp === a)) {
                      a = c.timeStamp;
                      d = kc(d, ["a", "area"], 100);
                      if (!d) return c.returnValue;
                      var e = c.defaultPrevented || !1 === c.returnValue,
                          f = eu("aelc", e ? "nv.mwt" : "mwt", 0),
                          g;
                      g = e ? eu("aelc", "nv.ids", []) : eu("aelc", "ids", []);
                      for (var h = [], l = 0; l < g.length; l++) {
                          var n = g[l],
                              p = eu("aelc", "aff.map", {})[n];
                          p && !hx(p, d) || h.push(n)
                      }
                      if (h.length) {
                          var q = gx(c, d),
                              r = au(d, "gtm.linkClick", h);
                          r["gtm.elementText"] = ic(d);
                          r["gtm.willOpenInNewWindow"] = !q;
                          if (q && !e && f && d.href) {
                              var u = !!Ha(String(mc(d, "rel") || "").split(" "), function(x) {
                                  return "noreferrer" === x.toLowerCase()
                              });
                              u && P(36);
                              var t = m[(mc(d, "target") || "_self").substring(1)],
                                  v = !0,
                                  w = Ot(function() {
                                      var x;
                                      if (x = v && t) {
                                          var y;
                                          a: if (u) {
                                              var A;
                                              try {
                                                  A = new MouseEvent(c.type, {
                                                      bubbles: !0
                                                  })
                                              } catch (B) {
                                                  if (!H.createEvent) {
                                                      y = !1;
                                                      break a
                                                  }
                                                  A = H.createEvent("MouseEvents");
                                                  A.initEvent(c.type, !0, !0)
                                              }
                                              A.Vf = !0;
                                              c.target.dispatchEvent(A);
                                              y = !0
                                          } else y = !1;
                                          x = !y
                                      }
                                      x && (t.location.href = mc(d, "href"))
                                  }, f);
                              if (Nt(r, w, f)) v = !1;
                              else return c.preventDefault &&
                                  c.preventDefault(), c.returnValue = !1
                          } else Nt(r, function() {}, f || 2E3);
                          return !0
                      }
                  }
              };
          fc(H, "click", b, !1);
          fc(H, "auxclick", b, !1)
      };

  function jx(a, b) {
      var c = this;
      L(E(this), ["dustOptions:?DustMap", "triggerId:?*"], arguments);
      Av([function() {
          return M(c, "process_dom_events", "document", "click")
      }, function() {
          return M(c, "process_dom_events", "document", "auxclick")
      }]);
      var d = Fc(a),
          e = d && !!d.waitForTags,
          f = d && !!d.checkValidation,
          g = d ? d.affiliateDomains : void 0;
      b = fu(b);
      if (e) {
          var h = Number(d.waitForTagsTimeout);
          0 < h && isFinite(h) || (h = 2E3);
          var l = function(p) {
              return Math.max(h, p)
          };
          du("aelc", "mwt", l, 0);
          f || du("aelc", "nv.mwt", l, 0)
      }
      var n = function(p) {
          p.push(b);
          return p
      };
      du("aelc", "ids", n, []);
      f || du("aelc", "nv.ids", n, []);
      g && du("aelc", "aff.map", function(p) {
          p[b] = g;
          return p
      }, {});
      eu("aelc", "init", !1) || (ix(), cu("aelc", "init", !0));
      return b
  }
  jx.P = "internal.enableAutoEventOnLinkClick";
  var kx, lx;
  var mx = function(a) {
          return eu("sdl", a, {})
      },
      nx = function(a, b, c) {
          b && (Array.isArray(a) || (a = [a]), du("sdl", c, function(d) {
              for (var e = 0; e < a.length; e++) {
                  var f = String(a[e]);
                  d.hasOwnProperty(f) || (d[f] = []);
                  d[f].push(b)
              }
              return d
          }, {}))
      },
      qx = function() {
          var a = 250,
              b = !1;
          H.scrollingElement && H.documentElement && m.addEventListener && (a = 50, b = !0);
          var c = 0,
              d = !1,
              e = function() {
                  d ? c = m.setTimeout(e, a) : (c = 0, ox(), eu("sdl", "init", !1) && !px() && (gc(m, "scroll", f), gc(m, "resize", f), cu("sdl", "init", !1)));
                  d = !1
              },
              f = function() {
                  b && kx();
                  c ? d = !0 : (c =
                      m.setTimeout(e, a), cu("sdl", "pending", !0))
              };
          return f
      },
      ox = function() {
          var a = kx(),
              b = a.Lf,
              c = a.Mf,
              d = b / lx.scrollWidth * 100,
              e = c / lx.scrollHeight * 100;
          rx(b, "horiz.pix", "PIXELS", "horizontal");
          rx(d, "horiz.pct", "PERCENT", "horizontal");
          rx(c, "vert.pix", "PIXELS", "vertical");
          rx(e, "vert.pct", "PERCENT", "vertical");
          cu("sdl", "pending", !1)
      },
      rx = function(a, b, c, d) {
          var e = mx(b),
              f = {},
              g;
          for (g in e) {
              f.Wb = g;
              if (e.hasOwnProperty(f.Wb)) {
                  var h = Number(f.Wb);
                  if (!(a < h)) {
                      var l = {};
                      Mt((l.event = "gtm.scrollDepth", l["gtm.scrollThreshold"] = h,
                          l["gtm.scrollUnits"] = c.toLowerCase(), l["gtm.scrollDirection"] = d, l["gtm.triggers"] = e[f.Wb].join(","), l));
                      du("sdl", b, function(n) {
                          return function(p) {
                              delete p[n.Wb];
                              return p
                          }
                      }(f), {})
                  }
              }
              f = {
                  Wb: f.Wb
              }
          }
      },
      tx = function() {
          du("sdl", "scr", function(a) {
              a || (a = H.scrollingElement || H.body && H.body.parentNode);
              return lx = a
          }, !1);
          du("sdl", "depth", function(a) {
              a || (a = sx());
              return kx = a
          }, !1)
      },
      sx = function() {
          var a = 0,
              b = 0;
          return function() {
              var c = Xh(),
                  d = c.height;
              a = Math.max(lx.scrollLeft + c.width, a);
              b = Math.max(lx.scrollTop + d, b);
              return {
                  Lf: a,
                  Mf: b
              }
          }
      },
      px = function() {
          return !!(Object.keys(mx("horiz.pix")).length || Object.keys(mx("horiz.pct")).length || Object.keys(mx("vert.pix")).length || Object.keys(mx("vert.pct")).length)
      };

  function ux(a, b) {
      var c = this;
      L(E(this), ["options:!DustMap", "triggerId:?*"], arguments);
      Av([function() {
          return M(c, "process_dom_events", "window", "resize")
      }, function() {
          return M(c, "process_dom_events", "window", "scroll")
      }]);
      tx();
      if (!lx) return;
      b = fu(b);
      var d = Fc(a);
      switch (d.horizontalThresholdUnits) {
          case "PIXELS":
              nx(d.horizontalThresholds, b, "horiz.pix");
              break;
          case "PERCENT":
              nx(d.horizontalThresholds, b, "horiz.pct")
      }
      switch (d.verticalThresholdUnits) {
          case "PIXELS":
              nx(d.verticalThresholds,
                  b, "vert.pix");
              break;
          case "PERCENT":
              nx(d.verticalThresholds, b, "vert.pct")
      }
      eu("sdl", "init", !1) ? eu("sdl", "pending", !1) || I(function() {
          return ox()
      }) : (cu("sdl", "init", !0), cu("sdl", "pending", !0), I(function() {
          ox();
          if (px()) {
              var e = qx();
              fc(m, "scroll", e);
              fc(m, "resize", e)
          } else cu("sdl", "init", !1)
      }));
      return b
  }
  ux.P = "internal.enableAutoEventOnScroll";
  var Ib = da(["data-gtm-yt-inspected-"]),
      vx = ["www.youtube.com", "www.youtube-nocookie.com"],
      wx, xx = !1;
  var yx = function(a, b, c) {
          var d = a.map(function(g) {
              return {
                  xa: g,
                  Gd: g,
                  Dd: void 0
              }
          });
          if (!b.length) return d;
          var e = b.map(function(g) {
              return {
                  xa: g * c,
                  Gd: void 0,
                  Dd: g
              }
          });
          if (!d.length) return e;
          var f = d.concat(e);
          f.sort(function(g, h) {
              return g.xa - h.xa
          });
          return f
      },
      zx = function(a) {
          a = void 0 === a ? [] : a;
          for (var b = [], c = 0; c < a.length; c++) 0 > a[c] || b.push(a[c]);
          b.sort(function(d, e) {
              return d - e
          });
          return b
      },
      Ax = function(a) {
          a = void 0 === a ? [] : a;
          for (var b = [], c = 0; c < a.length; c++) 100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
          b.sort(function(d, e) {
              return d -
                  e
          });
          return b
      },
      Bx = function(a, b) {
          var c, d;

          function e() {
              u = yu(function() {
                  return {
                      url: w,
                      title: x,
                      Nf: v,
                      Th: a.getCurrentTime(),
                      playbackRate: y
                  }
              }, b.hb, a.getIframe());
              v = 0;
              x = w = "";
              y = 1;
              return f
          }

          function f(F) {
              switch (F) {
                  case 1:
                      v = Math.round(a.getDuration());
                      w = a.getVideoUrl();
                      if (a.getVideoData) {
                          var G = a.getVideoData();
                          x = G ? G.title : ""
                      }
                      y = a.getPlaybackRate();
                      b.Gf ? Mt(u.createEvent("start")) : u.sc();
                      t = yx(b.kg, b.jg, a.getDuration());
                      return g(F);
                  default:
                      return f
              }
          }

          function g() {
              A = a.getCurrentTime();
              B = Sa().getTime();
              u.li();
              r();
              return h
          }

          function h(F) {
              var G;
              switch (F) {
                  case 0:
                      return n(F);
                  case 2:
                      G = "pause";
                  case 3:
                      var D = a.getCurrentTime() - A;
                      G = 1 < Math.abs((Sa().getTime() - B) / 1E3 * y - D) ? "seek" : G || "buffering";
                      a.getCurrentTime() && (b.Ff ? Mt(u.createEvent(G)) : u.sc());
                      q();
                      return l;
                  case -1:
                      return e(F);
                  default:
                      return h
              }
          }

          function l(F) {
              switch (F) {
                  case 0:
                      return n(F);
                  case 1:
                      return g(F);
                  case -1:
                      return e(F);
                  default:
                      return l
              }
          }

          function n() {
              for (; d;) {
                  var F = c;
                  m.clearTimeout(d);
                  F()
              }
              b.Ef && Mt(u.createEvent("complete", 1));
              return e(-1)
          }

          function p() {}

          function q() {
              d &&
                  (m.clearTimeout(d), d = 0, c = p)
          }

          function r() {
              if (t.length && 0 !== y) {
                  var F = -1,
                      G;
                  do {
                      G = t[0];
                      if (G.xa > a.getDuration()) return;
                      F = (G.xa - a.getCurrentTime()) / y;
                      if (0 > F && (t.shift(), 0 === t.length)) return
                  } while (0 > F);
                  c = function() {
                      d = 0;
                      c = p;
                      0 < t.length && t[0].xa === G.xa && (t.shift(), Mt(u.createEvent("progress", G.Dd, G.Gd)));
                      r()
                  };
                  d = m.setTimeout(c, 1E3 * F)
              }
          }
          var u, t = [],
              v, w, x, y, A, B, C = e(-1);
          d = 0;
          c = p;
          return {
              onStateChange: function(F) {
                  C = C(F)
              },
              onPlaybackRateChange: function(F) {
                  A = a.getCurrentTime();
                  B = Sa().getTime();
                  u.sc();
                  y = F;
                  q();
                  r()
              }
          }
      },
      Dx =
      function(a) {
          I(function() {
              function b() {
                  for (var d = c.getElementsByTagName("iframe"), e = d.length, f = 0; f < e; f++) Cx(d[f], a)
              }
              var c = H;
              b();
              nu(b)
          })
      },
      Cx = function(a, b) {
          if (!a.getAttribute("data-gtm-yt-inspected-" + b.hb) && (Hb(a, "data-gtm-yt-inspected-" + b.hb), Ex(a, b.rd))) {
              a.id || (a.id = Fx());
              var c = m.YT,
                  d = c.get(a.id);
              d || (d = new c.Player(a.id));
              var e = Bx(d, b),
                  f = {},
                  g;
              for (g in e) f.Bc = g, e.hasOwnProperty(f.Bc) && d.addEventListener(f.Bc, function(h) {
                  return function(l) {
                      return e[h.Bc](l.data)
                  }
              }(f)), f = {
                  Bc: f.Bc
              }
          }
      },
      Ex = function(a, b) {
          var c =
              a.getAttribute("src");
          if (Gx(c, "embed/")) {
              if (0 < c.indexOf("enablejsapi=1")) return !0;
              if (b) {
                  var d;
                  var e = -1 !== c.indexOf("?") ? "&" : "?"; - 1 < c.indexOf("origin=") ? d = c + e + "enablejsapi=1" : (wx || (wx = H.location.protocol + "//" + H.location.hostname, H.location.port && (wx += ":" + H.location.port)), d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(wx));
                  var f;
                  f = ub(d);
                  a.src = tb(f).toString();
                  return !0
              }
          }
          return !1
      },
      Gx = function(a, b) {
          if (!a) return !1;
          for (var c = 0; c < vx.length; c++)
              if (0 <= a.indexOf("//" + vx[c] + "/" + b)) return !0;
          return !1
      },
      Fx = function() {
          var a =
              Math.round(1E9 * Math.random()) + "";
          return H.getElementById(a) ? Fx() : a
      };

  function Hx(a, b) {
      var c = this;
      L(E(this), ["dustOptions:!DustMap", "triggerId:?*"], arguments);
      Av([function() {
          return M(c, "process_dom_events", "element", "onStateChange")
      }, function() {
          return M(c, "process_dom_events", "element", "onPlaybackRateChange")
      }]);
      b = fu(b);
      var d = !!a.get("captureStart"),
          e = !!a.get("captureComplete"),
          f = !!a.get("capturePause"),
          g = Ax(Fc(a.get("progressThresholdsPercent"))),
          h = zx(Fc(a.get("progressThresholdsTimeInSeconds"))),
          l = !!a.get("fixMissingApi");
      if (!(d || e || f || g.length || h.length)) return;
      var n = {
              Gf: d,
              Ef: e,
              Ff: f,
              jg: g,
              kg: h,
              rd: l,
              hb: b
          },
          p = m.YT,
          q = function() {
              Dx(n)
          };
      if (p) return p.ready && p.ready(q), b;
      var r = m.onYouTubeIframeAPIReady;
      m.onYouTubeIframeAPIReady = function() {
          r && r();
          q()
      };
      I(function() {
          for (var u = H.getElementsByTagName("script"), t = u.length, v = 0; v < t; v++) {
              var w = u[v].getAttribute("src");
              if (Gx(w, "iframe_api") || Gx(w, "player_api")) return b
          }
          for (var x = H.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++)
              if (!xx && Ex(x[A], n.rd)) return bc("https://www.youtube.com/iframe_api"),
                  xx = !0, b
      });
      return b
  }
  Hx.P = "internal.enableAutoEventOnYouTubeActivity";

  function Ix(a, b) {
      var c = !1;
      L(E(this), ["booleanExpression:!string", "context:?DustMap"], arguments);
      var d = JSON.parse(a);
      if (!d) throw Error("Invalid boolean expression string was given.");
      var e = b ? Fc(b) : {};
      c = Jx(d, e);
      return c
  }
  var Kx = function(a, b) {
          for (var c = 0; c < b.length; c++) {
              if (void 0 === a) return;
              a = a[b[c]]
          }
          return a
      },
      Lx = function(a, b) {
          if (1 === a.namespace_type) {
              var c = b.preHit;
              if (!c) return;
              var d = a.key_parts;
              if (!d || 0 === d.length) return;
              var e = d[0];
              switch (e) {
                  case "hitData":
                      return 2 > d.length ? void 0 : Kx(c.getHitData(d[1]), d.slice(2));
                  case "metadata":
                      return 2 > d.length ? void 0 : Kx(c.getMetadata(d[1]), d.slice(2));
                  case "eventName":
                      return c.getEventName();
                  case "destinationId":
                      return c.getDestinationId();
                  default:
                      throw Error(e + " is not a valid field that can be accessed\n                        from PreHit data.");
              }
          }
          throw Error("Unknown Namespace Type used:\n                      " + a.namespace_type);
      },
      Mx = function(a, b) {
          if (a) {
              if (void 0 !== a.context_value) return Lx(a.context_value, b);
              if (void 0 !== a.boolean_expression_value) return Jx(a.boolean_expression_value, b);
              if (void 0 !== a.boolean_value) return !!a.boolean_value;
              if (void 0 !== a.string_value) return String(a.string_value);
              if (void 0 !== a.integer_value) return Number(a.integer_value);
              if (void 0 !== a.double_value) return Number(a.double_value);
              throw Error("Unknown field used for variable of type ExpressionValue:" +
                  a);
          }
      },
      Jx = function(a, b) {
          var c = a.args;
          if (!Ea(c) || 0 === c.length) throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
          var d = function(g) {
              return Mx(g, b)
          };
          switch (a.type) {
              case 1:
                  for (var e = 0; e < c.length; e++)
                      if (d(c[e])) return !0;
                  return !1;
              case 2:
                  for (var f = 0; f < c.length; f++)
                      if (!d(c[f])) return !1;
                  return 0 < c.length;
              case 3:
                  return !d(c[0]);
              case 4:
                  return nv(d(c[0]), d(c[1]), !1);
              case 5:
                  return qv(d(c[0]), d(c[1]));
              case 6:
                  return vv(d(c[0]), d(c[1]));
              case 7:
                  return lv(d(c[0]),
                      d(c[1]));
              case 8:
                  return pv(d(c[0]), d(c[1]));
              case 9:
                  return uv(d(c[0]), d(c[1]));
              case 10:
                  return sv(d(c[0]), d(c[1]));
              case 11:
                  return tv(d(c[0]), d(c[1]));
              case 12:
                  return rv(d(c[0]), d(c[1]));
              default:
                  throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
          }
      };
  Ix.P = "internal.evaluateBooleanExpression";
  var Nx;

  function Ox(a) {
      var b = !1;
      return b
  }
  Ox.P = "internal.evaluateMatchingRules";
  var Qx = function(a, b, c) {
          if (c) switch (c.type) {
              case "event_name":
                  return a;
              case "const":
                  return c.const_value;
              case "event_param":
                  var d = c.event_param.param_name;
                  if (d === S.g.jf) return Px(b);
                  return b[d]
          }
      },
      Ux = function(a, b, c, d) {
          Rx = !1;
          if (c && !Sx(a, b, c)) return !1;
          if (!d || 0 === d.length) return !0;
          for (var e = 0; e < d.length; e++)
              if (Tx(a, b, d[e].predicates || [])) return !0;
          return !1
      },
      Tx = function(a, b, c) {
          for (var d = 0; d < c.length; d++)
              if (!Sx(a,
                      b, c[d])) return !1;
          return !0
      },
      Sx = function(a, b, c) {
          var d = c.values || [],
              e = Qx(a, b, d[0]),
              f = Qx(a, b, d[1]),
              g = c.type;
          if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g) k(e) && (e = e.toLowerCase()), k(f) && (f = f.toLowerCase());
          var h = !1;
          switch (g) {
              case "eq":
              case "eqi":
                  h = qv(e, f);
                  break;
              case "sw":
              case "swi":
                  h = vv(e, f);
                  break;
              case "ew":
              case "ewi":
                  h = lv(e, f);
                  break;
              case "cn":
              case "cni":
                  h = pv(e, f);
                  break;
              case "lt":
                  h = uv(e, f);
                  break;
              case "le":
                  h = sv(e, f);
                  break;
              case "gt":
                  h = tv(e, f);
                  break;
              case "ge":
                  h = rv(e, f);
                  break;
              case "re":
              case "rei":
                  h = nv(e,
                      f, "rei" === g)
          }
          return !!c.negate !== h
      },
      Rx = !1;
  var Px = function(a) {
      var b = a[S.g.jf];
      if (b) return b;
      Rx = !0;
      var c = a[S.g.Ra];
      if (k(c)) {
          if (Ca(URL)) try {
              return (new URL(c)).pathname
          } catch (e) {
              return
          }
          var d = ki(c);
          return d.hostname ? ii(d, "path") : void 0
      }
  };

  function Vx(a, b) {
      var c = !1;
      return c
  }
  Vx.P = "internal.evaluatePredicates";
  var Wx = function(a) {
      var b;
      return b
  };

  function Xx(a, b) {
      b = void 0 === b ? !0 : b;
      var c;
      return c
  }
  Xx.R = "getCookieValues";

  function Yx() {
      return Ri.Jf
  }
  Yx.P = "internal.getCountryCode";

  function Zx() {
      var a = [];
      a = bk();
      return Ec(a)
  }
  Zx.P = "internal.getDestinationIds";

  function $x(a) {
      var b = null;
      return b
  }
  $x.R = "getElementById";
  var ay = {};
  ay.disablePinterestEnhancedMatch = K(42);
  ay.enableAdsHistoryChangeEvents = K(36);
  ay.enableAlwaysSendFormStart = K(38);
  ay.enableCcdEnhancedMeasurement = K(41);
  ay.enableCcdEventBlocking = K(40);
  ay.enableCcdEventEditingAndCreation = K(26);
  ay.enableCcdGaConversions = K(39);
  ay.enableCcdPreAutoPiiDetection = K(49);
  ay.enableCcdUserData = K(16);
  ay.enableEesPagePath = K(43);
  ay.enableEmFormCcd = K(35);
  ay.enableEmFormCcdPart2 = K(31) || K(33);
  ay.enableEuidAutoMode = K(37);
  ay.enableGa4OnoRemarketing = K(34);
  ay.enableSendGtagEventId = K(44);
  ay.autoPiiEligible = !0;

  function by() {
      return Ec(ay)
  }
  by.P = "internal.getFlags";

  function cy(a, b) {
      var c;
      L(E(this), ["targetId:!string", "name:!string"], arguments);
      var d = Uh(a) || {};
      c = Ec(d[b], this.h);
      return c
  }
  cy.P = "internal.getProductSettingsParameter";

  function dy(a, b) {
      var c;
      L(E(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
      M(this, "get_url", "query", a);
      var d = ii(ki(m.location.href), "query"),
          e = fi(d, a, b);
      c = Ec(e, this.h);
      return c
  }
  dy.R = "getQueryParameters";

  function ey(a, b) {
      var c;
      return c
  }
  ey.R = "getReferrerQueryParameters";

  function fy(a) {
      var b = "";
      return b
  }
  fy.R = "getReferrerUrl";

  function gy() {
      return Ri.ii
  }
  gy.P = "internal.getRegionCode";

  function hy(a, b) {
      var c;
      L(E(this), ["targetId:!string", "name:!string"], arguments);
      var d = vs(ps, a).h;
      c = Ec(d[b], this.h);
      return c
  }
  hy.P = "internal.getRemoteConfigParameter";

  function iy(a) {
      var b = "";
      L(E(this), ["component:?string"], arguments), M(this, "get_url", a), b = ii(ki(m.location.href), a);
      return b
  }
  iy.R = "getUrl";

  function jy() {
      M(this, "get_user_agent");
      return m.navigator.userAgent
  }
  jy.R = "getUserAgent";

  function ky(a) {
      if (!a) return {};
      var b = a.Oj;
      return ir(b.type, b.index, b.name)
  }

  function ly(a) {
      return a ? {
          originatingEntity: ky(a)
      } : {}
  };

  function ny(a, b) {}
  ny.R = "gtagSet";

  function oy(a, b) {}
  oy.R = "injectHiddenIframe";
  var py = {};

  function ry(a, b, c, d) {}
  var sy = Object.freeze({
          dl: 1,
          id: 1
      }),
      ty = {};

  function uy(a, b, c, d) {}
  ry.R = "injectScript";
  uy.P = "internal.injectScript";

  function vy(a) {
      var b = !0;
      return b
  }
  vy.R = "isConsentGranted";
  var wy = function() {
      var a = bg(function(b) {
          this.h.h.log("error", b)
      });
      a.R = "JSON";
      return a
  };
  var xy = function() {
          return !1
      },
      yy = {
          getItem: function(a) {
              var b = null;
              return b
          },
          setItem: function(a,
              b) {
              return !1
          },
          removeItem: function(a) {}
      };
  var zy = ["textContent", "value", "tagName", "children", "childElementCount"];

  function Ay(a) {
      var b;
      return b
  }
  Ay.P = "internal.locateUserData";

  function Cy() {}
  Cy.R = "logToConsole";

  function Dy(a) {
      var b = void 0;
      if ("function" === typeof URL) {
          var c;
          a: {
              var d;
              try {
                  d = new URL(a)
              } catch (w) {
                  c = void 0;
                  break a
              }
              for (var e = {}, f = Array.from(d.searchParams), g = 0; g < f.length; g++) {
                  var h = f[g][0],
                      l = f[g][1];
                  e.hasOwnProperty(h) ? "string" === typeof e[h] ? e[h] = [e[h], l] : e[h].push(l) : e[h] = l
              }
              c = Ec({
                  href: d.href,
                  origin: d.origin,
                  protocol: d.protocol,
                  username: d.username,
                  password: d.password,
                  host: d.host,
                  hostname: d.hostname,
                  port: d.port,
                  pathname: d.pathname,
                  search: d.search,
                  searchParams: e,
                  hash: d.hash
              })
          }
          return c
      }
      var n;
      try {
          n = ki(a)
      } catch (w) {
          return
      }
      if (!n.protocol || !n.host) return;
      var p = {};
      if (n.search)
          for (var q = n.search.replace("?", "").split("&"), r = 0; r < q.length; r++) {
              var u = q[r].split("="),
                  t = u[0],
                  v = decodeURIComponent(u.splice(1).join("="));
              p.hasOwnProperty(t) ? "string" === typeof p[t] ? p[t] = [p[t], v] : p[t].push(v) : p[t] = v
          }
      n.searchParams = p;
      n.origin = n.protocol + "//" + n.host;
      n.username = "";
      n.password = "";
      b = Ec(n);
      return b
  }
  Dy.R = "parseUrl";

  function Ey(a) {}
  Ey.P = "internal.processAsNewEvent";

  function Fy(a, b) {
      var c = !1;
      return c
  }
  Fy.R = "queryPermission";

  function Gy() {
      var a = "";
      return a
  }
  Gy.R = "readCharacterSet";

  function Hy() {
      var a = "";
      return a
  }
  Hy.R = "readTitle";

  function Iy(a, b) {
      var c = this;
      L(E(this), ["destinationId:!string", "callback:!Fn"], arguments), bn(a, function(d) {
          b.h(c.h, Ec(d, c.h, 1))
      });
  }
  Iy.P = "internal.registerCcdCallback";
  var Jy = Object.freeze(["config", "event", "get", "set"]);

  function Ky(a, b, c) {}
  Ky.P = "internal.registerGtagCommandListener";

  function Ly(a, b) {
      var c = !1;
      return c
  }
  Ly.P = "internal.removeDataLayerEventListener";

  function My() {}
  My.R = "resetDataLayer";
  var Ny = function(a) {
          var b = !1;
          return b
      },
      Oy = function(a) {
          if (a.metadata.is_merchant_center) return !1;
          var b = T(a.s, S.g.de);
          return !(!0 !== b && "true" !== b || !T(a.s, S.g.wa))
      },
      Py = function(a) {
          var b = a.metadata.user_data;
          if (Dc(b)) return b
      },
      Qy = function(a, b) {
          var c = Ym(a, S.g.be, a.s.D[S.g.be]);
          if (c && void 0 !== c[b || a.eventName]) return c[b || a.eventName]
      };
  var Ry = !1,
      Sy = function(a) {
          var b = a.eventName === S.g.Ic && gj() && Oy(a),
              c = a.metadata.batch_on_navigation,
              d = a.metadata.is_conversion,
              e = a.metadata.is_session_start,
              f = a.metadata.create_dc_join,
              g = a.metadata.create_google_join,
              h = a.metadata.euid_mode_enabled && !!Py(a);
          return !(!Vb.sendBeacon || d || h || e || f || g || b || !c && Ry)
      };
  var Ty = function(a) {
      Rb("GA4_EVENT", a)
  };
  var Vy = function(a) {
          return !a || Uy.test(a) || Tg.hasOwnProperty(a)
      },
      Wy = function(a, b, c) {
          for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
              var f = d[e];
              if (f.edit_param) {
                  var g = f.edit_param.param_name,
                      h = Qx(a, b, f.edit_param.param_value),
                      l;
                  if (h) {
                      var n = Number(h);
                      l = isNaN(n) ? h : n
                  } else l = h;
                  b[g] = l
              } else f.delete_param && delete b[f.delete_param.param_name]
          }
      },
      Uy = /^(_|ga_|google_|gtag\.|firebase_).*$/;
  var Xy = function(a) {
          var b = 0,
              c = 0;
          return {
              start: function() {
                  b = Ta()
              },
              stop: function() {
                  c = this.get()
              },
              get: function() {
                  var d = 0;
                  a.Xf() && (d = Ta() - b);
                  return d + c
              }
          }
      },
      Yy = function() {
          this.h = void 0;
          this.B = 0;
          this.isActive = this.isVisible = this.D = !1;
          this.I = this.F = void 0
      };
  ba = Yy.prototype;
  ba.kj = function(a) {
      var b = this;
      if (!this.h) {
          this.D = H.hasFocus();
          this.isVisible = !H.hidden;
          this.isActive = !0;
          var c = function(d, e, f) {
              fc(d, e, function(g) {
                  b.h.stop();
                  f(g);
                  b.Xf() && b.h.start()
              })
          };
          c(m, "focus", function() {
              b.D = !0
          });
          c(m, "blur", function() {
              b.D = !1
          });
          c(m, "pageshow", function(d) {
              b.isActive = !0;
              d.persisted && P(56);
              b.I && b.I()
          });
          c(m, "pagehide", function() {
              b.isActive = !1;
              b.F && b.F()
          });
          c(H, "visibilitychange", function() {
              b.isVisible = !H.hidden
          });
          Oy(a) && -1 === (Vb.userAgent || "").indexOf("Firefox") && -1 === (Vb.userAgent || "").indexOf("FxiOS") && c(m, "beforeunload", function() {
              Ry = !0
          });
          this.mg();
          this.B = 0
      }
  };
  ba.mg = function() {
      this.B += this.Je();
      this.h = Xy(this);
      this.Xf() && this.h.start()
  };
  ba.il = function(a) {
      var b = this.Je();
      0 < b && (a.C[S.g.ae] = b)
  };
  ba.dk = function(a) {
      a.C[S.g.ae] =
          void 0;
      this.mg();
      this.B = 0
  };
  ba.Xf = function() {
      return this.D && this.isVisible && this.isActive
  };
  ba.Zj = function() {
      return this.B + this.Je()
  };
  ba.Je = function() {
      return this.h && this.h.get() || 0
  };
  ba.Mk = function(a) {
      this.F = a
  };
  ba.ji = function(a) {
      this.I = a
  };

  function Zy() {
      return m.gaGlobal = m.gaGlobal || {}
  }
  var $y = function() {
          var a = Zy();
          a.hid = a.hid || Ja();
          return a.hid
      },
      az = function(a, b) {
          var c = Zy();
          if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
      };
  var bz = function(a, b, c) {
          var d = a.metadata.client_id_source;
          if (void 0 === d || c <= d) a.C[S.g.wb] = b, a.metadata.client_id_source = c
      },
      ez = function(a, b) {
          var c;
          var d = b.metadata.cookie_options,
              e = d.prefix + "_ga",
              f = Yk(d, void 0, void 0, S.g.Z);
          if (!1 === T(b.s, S.g.Gb) && cz(b) === a) c = !0;
          else {
              var g = Wj(a, dz[0], d.domain, d.path);
              c = 1 !== Oj(e, g, f)
          }
          return c
      },
      cz = function(a) {
          var b = a.metadata.cookie_options,
              c = b.prefix + "_ga",
              d = Vj(c, b.domain, b.path, dz, S.g.Z);
          if (!d) {
              var e = String(T(a.s, S.g.Rc, ""));
              e && e != c && (d = Vj(e, b.domain, b.path, dz, S.g.Z))
          }
          return d
      },
      dz = ["GA1"],
      fz = function(a, b) {
          var c = a.C[S.g.wb];
          if (b && c === b) return c;
          if (c) {
              c = "" + c;
              if (!ez(c, a)) return P(31), a.K = !0, "";
              az(c, tj(S.g.Z));
              return c
          }
          P(32);
          a.K = !0;
          return ""
      };
  var iz = function(a, b, c) {
          if (!b) return a;
          if (!a) return b;
          var d = gz(a);
          if (!d) return b;
          var e, f = Oa(null != (e = T(c.s, S.g.ad)) ? e : 30);
          if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.zd + 60 * f)) return a;
          var g = gz(b);
          if (!g) return a;
          g.Tb = d.Tb + 1;
          var h;
          return null != (h = hz(g.sessionId, g.Tb, g.xc, g.zd, g.Yf, g.Rb, g.md)) ? h : b
      },
      lz = function(a, b) {
          var c = b.metadata.cookie_options,
              d = jz(b, c),
              e = Wj(a, kz[0], c.domain, c.path),
              f = {
                  Cb: S.g.Z,
                  domain: c.domain,
                  path: c.path,
                  expires: c.fb ? new Date(Ta() + 1E3 * c.fb) : void 0,
                  flags: c.flags
              };
          K(52) &&
              Oj(d, void 0, f);
          return 1 !== Oj(d, e, f)
      },
      mz = function(a) {
          var b = a.metadata.cookie_options,
              c = jz(a, b),
              d = Vj(c, b.domain, b.path, kz, S.g.Z);
          if (!d || !An && !K(52)) return d;
          var e = Fj(c, void 0, void 0, S.g.Z);
          if (d && 1 < e.length) {
              P(114);
              for (var f = void 0, g = void 0, h = 0; h < e.length; h++) {
                  var l = e[h].split(".");
                  if (!(7 > l.length)) {
                      var n = Number(l[5]);
                      n && (!g || n > g) && (g = n, f = e[h])
                  }
              }
              f && !f.endsWith(d) && (P(115), K(52) && (d = f.split(".").slice(2).join(".")))
          }
          return d
      },
      hz = function(a, b, c, d, e, f, g) {
          if (a && b) {
              var h = [a, b, Oa(c), d, e];
              h.push(f ? "1" : "0");
              h.push(g || "0");
              return h.join(".")
          }
      },
      kz = ["GS1"],
      jz = function(a, b) {
          return b.prefix + "_ga_" + a.target.M[0]
      },
      gz = function(a) {
          if (a) {
              var b = a.split(".");
              if (!(5 > b.length || 7 < b.length)) return 7 > b.length && P(67), {
                  sessionId: b[0],
                  Tb: Number(b[1]),
                  xc: !!Number(b[2]),
                  zd: Number(b[3]),
                  Yf: Number(b[4] || 0),
                  Rb: "1" === b[5],
                  md: "0" !== b[6] ? b[6] : void 0
              }
          }
      },
      nz = function(a) {
          return hz(a.C[S.g.zb], a.C[S.g.oe], a.C[S.g.ne], Math.floor(a.metadata.event_start_timestamp_ms / 1E3), a.metadata.join_timer_sec || 0, !!a.metadata[S.g.cf], a.C[S.g.Vc])
      };

  var oz = function(a) {
          var b = T(a.s, S.g.za),
              c = a.s.D[S.g.za];
          if (c === b) return c;
          var d = J(b);
          c && c[S.g.aa] && (d[S.g.aa] = (d[S.g.aa] || []).concat(c[S.g.aa]));
          return d
      },
      pz = function(a, b) {
          var c = Nl(!0);
          return "1" !== c._up ? {} : {
              clientId: c[a],
              mi: c[b]
          }
      },
      qz = function(a, b, c) {
          var d = Nl(!0),
              e = d[b];
          e && (bz(a, e, 2), ez(e, a));
          var f = d[c];
          f && lz(f, a);
          return !(!e || !f)
      },
      rz = !1,
      sz = function(a) {
          var b = oz(a) || {},
              c = a.metadata.cookie_options,
              d = c.prefix + "_ga",
              e = jz(a, c);
          Wl(b[S.g.jc], !!b[S.g.aa]) && qz(a, d, e) && (rz = !0);
          b[S.g.aa] && Tl(function() {
              var f = {},
                  g = cz(a);
              g && (f[d] = g);
              var h = mz(a);
              h && (f[e] = h);
              var l = Fj("FPLC", void 0, void 0, S.g.Z);
              l.length && (f._fplc = l[0]);
              return f
          }, b[S.g.aa], b[S.g.Zc], !!b[S.g.kc])
      },
      uz = function(a) {
          if (!T(a.s, S.g.pb)) return {};
          var b = a.metadata.cookie_options,
              c = b.prefix + "_ga",
              d = jz(a, b);
          Ul(function() {
              var e;
              if (tj("analytics_storage")) e = {};
              else {
                  var f = {};
                  e = (f._up = "1", f[c] = a.C[S.g.wb], f[d] = nz(a), f)
              }
              return e
          }, 1);
          return !tj("analytics_storage") && tz() ? pz(c, d) : {}
      },
      tz = function() {
          var a = hi(m.location, "host"),
              b = hi(ki(H.referrer), "host");
          return a &&
              b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
      },
      vz = function(a) {
          if (!a) return a;
          var b = String(a);
          b = Ml(b);
          return b = Ml(b, "_ga")
      };
  var wz = function() {
      var a = Ta(),
          b = a + 864E5,
          c = 20,
          d = 5E3;
      return function() {
          var e = Ta();
          e >= b && (b = e + 864E5, d = 5E3);
          if (1 > d) return !1;
          c = Math.min(c + (e - a) / 1E3 * 5, 20);
          a = e;
          if (1 > c) return !1;
          d--;
          c--;
          return !0
      }
  };
  var xz = function() {
          var a = !0;
          Xk(7) && Xk(9) && Xk(10) || (a = !1);
          return a
      },
      yz = function() {
          var a = !0;
          Xk(3) && Xk(4) || (a = !1);
          return a
      };
  var zz = function(a, b) {
          if (Oy(b)) {
              var c = Dp();
              c && (a.us_privacy = c);
              var d = Wk();
              d && (a.gdpr = d);
              var e = Vk();
              e && (a.gdpr_consent = e)
          }
      },
      Az = function(a, b) {
          if (gj()) {
              a.gcs = uj();
              var c = b.metadata.is_consent_update;
              c && (a.gcu = "1");
              if (Oy(b)) {
                  hj() && (a.gcd = "G1" + oj(ej));
                  var d = T(b.s, S.g.na);
                  a.adr = void 0 !== d && !1 !== d ? "1" : "0";
                  c && (a.gcut = ah[b.metadata.consent_update_type || ""])
              }
          }
      },
      Bz = function(a, b, c) {
          void 0 === c && (c = {});
          if ("object" === typeof b)
              for (var d in b) Bz(a + "." + d, b[d], c);
          else c[a] = b;
          return c
      },
      Ez = function(a) {
          if (a.metadata.is_merchant_center) return "https://www.merchant-center-analytics.goog/mc/collect";
          var b = Jq(T(a.s, S.g.wa), "/g/collect");
          if (b) return b;
          var c = Ym(a, S.g.xb, T(a.s, S.g.xb));
          var d = T(a.s, S.g.Kc);
          return c && !Ym(a, S.g.Yc, !1) && !1 !== d && xz() && tj(S.g.J) && tj(S.g.Z) ? Cz() : Dz()
      },
      Fz = "",
      Gz = !1;
  Gz = !0;
  var Hz = {};
  Hz[S.g.ej] = "tid";
  Hz[S.g.wb] = "cid";
  Hz[S.g.Qa] = "ul";
  Hz[S.g.df] = "_fid";
  Hz[S.g.lf] = "tt";
  Hz[S.g.je] = "ir";
  Hz[S.g.Ib] = "sr";
  Hz[S.g.ic] = "gdid";
  Hz[S.g.ke] = "_rdi";
  Hz[S.g.Vg] = "_geo";
  Hz[S.g.Ch] = "gtm_up";
  Hz[S.g.Bh] = "_glv";
  Hz[S.g.nf] =
      "uaa", Hz[S.g.pf] = "uab", Hz[S.g.qf] = "uafvl", Hz[S.g.nh] = "uamb", Hz[S.g.rf] = "uam", Hz[S.g.sf] = "uap", Hz[S.g.tf] = "uapv", Hz[S.g.oh] = "uaW", Hz[S.g.uf] = "uaw";
  var Iz = {};
  Iz[S.g.zb] = "sid";
  Iz[S.g.oe] = "sct";
  Iz[S.g.ne] = "seg";
  Iz[S.g.Ra] = "dl";
  Iz[S.g.Sa] = "dr";
  Iz[S.g.nc] = "dt";
  Iz[S.g.va] = "cu";
  Iz[S.g.Aa] = "uid";
  Iz[S.g.Ud] = "cc";
  Iz[S.g.Vd] = "ci";
  Iz[S.g.Wd] = "cm";
  Iz[S.g.Xd] = "cn";
  Iz[S.g.Yd] = "cs";
  Iz[S.g.Zd] = "ck";
  var Jz = {};
  Jz[S.g.ae] = "_et";
  Jz[S.g.hc] = "edid";
  var Kz = {};
  Kz[S.g.Ud] = "cc";
  Kz[S.g.Vd] = "ci";
  Kz[S.g.Wd] = "cm";
  Kz[S.g.Xd] = "cn";
  Kz[S.g.Yd] = "cs";
  Kz[S.g.Zd] = "ck";
  var Lz = {},
      Mz = Object.freeze((Lz[S.g.ka] = !0, Lz)),
      Dz = function() {
          var a = "www";
          Gz && Fz && (a = Fz);
          return "https://" + a + ".google-analytics.com/g/collect"
      },
      Cz = function() {
          var a;
          Gz && Fz && (a = Fz);
          return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
      },
      Nz = function(a, b, c) {
          var d = {},
              e = {},
              f = {};
          d.v = "2";
          d.tid = a.target.V;
          d.gtm = kk();
          d._p = $y();
          c && (d.em = c);
          a.metadata.create_google_join && (d._gaz = 1);
          Az(d, a);
          zz(d, a);
          var g = a.C[S.g.ic];
          g && (d.gdid = g);
          e.en = gf(a.eventName, 40);
          a.metadata.is_first_visit && (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
          a.metadata.is_new_to_site && (e._nsi = 1);
          a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ?
              2 : 1);
          a.metadata.is_conversion && (e._c = 1);
          a.metadata.is_external_event && (e._ee = 1);
          if (a.metadata.is_ecommerce) {
              var h = a.C[S.g.ia] || T(a.s, S.g.ia);
              if (Ea(h))
                  for (var l = 0; l < h.length && 200 > l; l++) e["pr" + (l + 1)] = of (h[l])
          }
          var n = a.C[S.g.hc];
          n && (e.edid = n);
          var p = function(t, v) {
                  if (!K(23) || "object" !== typeof v || !Mz[t]) {
                      t = gf(t, 40);
                      var w = "ep." + t,
                          x = "epn." + t;
                      t = Da(v) ? x : w;
                      var y = Da(v) ? w : x;
                      e.hasOwnProperty(y) && delete e[y];
                      e[t] = gf(v, 100)
                  }
              },
              q = function(t, v) {
                  if (K(23)) return !1;
                  var w = t.split(".");
                  if (t === S.g.ka && "object" !== typeof v) return p(t,
                      v), !0;
                  if (w[0] === S.g.ka) {
                      if ((1 < w.length || "object" === typeof v) && Oy(a)) {
                          var x = Bz(t, v);
                          Ma(x, function(y, A) {
                              return void p(y, A)
                          })
                      }
                      return !0
                  }
                  return !1
              };
          Ma(a.C, function(t, v) {
              if (void 0 !== v && !Rg.hasOwnProperty(t)) {
                  null === v && (v = "");
                  var w;
                  t !== S.g.Vc ? w = !1 : a.metadata.euid_mode_enabled ? (d.ecid = v, w = !0) : w = void 0;
                  if (!w && t !== S.g.cf) {
                      var x = v;
                      !0 === v && (x = "1");
                      !1 === v && (x = "0");
                      var y;
                      if (Hz[t]) y = Hz[t], d[y] = gf(x, 420);
                      else if (Iz[t]) y = Iz[t], f[y] = gf(x, 420);
                      else if (Jz[t]) y = Jz[t], e[y] = gf(x, 420);
                      else if ("_" === t.charAt(0)) d[t] = gf(x,
                          420);
                      else {
                          var A;
                          (A = q(t, v)) || (Kz[t] ? A = !0 : t !== S.g.Pc ? A = !1 : ("object" !== typeof v && p(t, v), A = !0));
                          A || p(t, v)
                      }
                  }
              }
          });
          a.metadata.user_data && q("user_data", a.metadata.user_data);
          var r = a.C[S.g.Ta] || {};
          !1 !== T(a.s, S.g.fa) && yz() || (r._npa = "1");
          Ma(r, function(t, v) {
              if (void 0 !== v)
                  if (null === v && (v = ""), t === S.g.Aa && !f.uid) f.uid = gf(v, 36);
                  else if (b[t] !== v) {
                  var w = (Da(v) ? "upn." : "up.") + gf(t, 24);
                  e[w] = gf(v, 36);
                  b[t] = v
              }
          });
          var u = !1;
          return qf.call(this, {
              Ha: d,
              Ub: f,
              Of: e
          }, Ez(a), Oy(a), u) || this
      };
  ma(Nz, qf);
  var Oz = function(a, b) {
          return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
              return b[d] || c
          })
      },
      Pz = function(a) {
          var b = a.search;
          return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
      },
      Qz = function(a) {
          var b = {},
              c = "",
              d = a.pathname.indexOf("/g/collect");
          0 <= d && (c = a.pathname.substring(0, d));
          b.transport_url = a.protocol + "//" + a.hostname + c;
          return b
      },
      Rz = function(a, b) {
          var c = new m.XMLHttpRequest;
          c.withCredentials = !0;
          var d = b ? "POST" : "GET",
              e = "",
              f = 0,
              g = ki(a),
              h = Qz(g),
              l = Pz(g);
          c.onprogress = function(n) {
              if (200 ===
                  c.status) {
                  e += c.responseText.substring(f);
                  f = n.loaded;
                  for (var p = Oz(e, h), q = p.indexOf("\n\n"); - 1 !== q;) {
                      var r;
                      a: {
                          var u, t = p.substring(0, q).split("\n"),
                              v = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];u = v ? v.call(t) : {
                              next: ca(t)
                          };
                          var w = u.next().value,
                              x = u.next().value;
                          if (w.startsWith("event: message") && x.startsWith("data: ")) try {
                              r = JSON.parse(x.substring(x.indexOf(":") + 1));
                              break a
                          } catch (B) {}
                          r = void 0
                      }
                      if (r) {
                          var y = r.send_pixel || [];
                          if (Array.isArray(y))
                              for (var A = 0; A < y.length; A++) ec(y[A])
                      }
                      p = p.substring(q +
                          2);
                      q = p.indexOf("\n\n")
                  }
                  e = p
              }
          };
          c.open(d, l);
          c.send(b)
      };
  var Uz = function(a, b, c, d) {
          var e = a + "?" + b;
          Sz && (d = !(0 === e.indexOf(Dz()) || 0 === e.indexOf(Cz())));
          d && !Ry ? Rz(e, c) : Tz(a, b, c)
      },
      Vz = function(a) {},
      Wz = function(a, b) {
          function c(u) {
              q.push(u + "=" + encodeURIComponent("" + a.Ha[u]))
          }
          var d = b.Uk,
              e = b.Vk,
              f = b.ck,
              g = b.Aj,
              h = b.zj,
              l = b.ik,
              n = b.Wk,
              p = b.hk;
          if (d || e || n) {
              var q = [];
              c("tid");
              c("cid");
              c("gtm");
              q.push("aip=1");
              a.Ub.uid && !p && q.push("uid=" + encodeURIComponent("" + a.Ub.uid));
              d && (Tz("https://stats.g.doubleclick.net/g/collect", "v=2&" + q.join("&")), nj("https://stats.g.doubleclick.net/g/collect?v=2&" +
                  q.join("&")));
              if (e) {
                  q.push("z=" + Ja());
                  if (!l) {
                      var r = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                      r && ec(r + q.join("&"))
                  }
                  K(28) && g && h && op() && (q = [], c("tid"), q.push("gacid=" + encodeURIComponent(String(a.Ha.cid))), c("gtm"), q.push("aip=1"), q.push("fledge=1"), q.push("z=" + Ja()), pp("https://googleads.g.doubleclick.net/td/ga/rul?" + q.join("&"), a.Ha.tid))
              }
              n && Vz(a)
          }
      },
      Sz = !1;
  var Xz = function() {
      this.F = 1;
      this.I = {};
      this.h = new rf;
      this.B = -1
  };
  Xz.prototype.D = function(a, b) {
      var c = this,
          d;
      d = new Nz(a, this.I, b);
      var e = Sy(a);
      e && this.h.F(d) || this.flush();
      if (e && this.h.add(d)) {
          if (0 > this.B) {
              var f = m.setTimeout,
                  g;
              Oy(a) ? Yz ? (Yz = !1, g = Zz) : g = $z : g = 5E3;
              this.B = f.call(m, function() {
                  return c.flush()
              }, g)
          }
      } else {
          var h = tf(d, this.F++);
          Uz(d.h, h.hg, h.body, d.F);
          var l = a.metadata.create_dc_join,
              n = a.metadata.create_google_join,
              p = !1 !== T(a.s,
                  S.g.Ea),
              q = !1 !== T(a.s, S.g.fa),
              r = {
                  eventId: a.s.eventId,
                  priorityId: a.s.priorityId
              },
              u = {
                  Uk: l,
                  Vk: n,
                  ck: String(Ym(a, S.g.he, T(a.s, S.g.he))),
                  Aj: p,
                  zj: q,
                  ik: Ym(a, S.g.Yc, !1),
                  hk: a.metadata.euid_mode_enabled,
                  yl: r
              };
          Wz(d, u)
      }
  };
  Xz.prototype.add = function(a) {
      a.metadata.euid_mode_enabled && !Ry ? this.T(a) : this.D(a)
  };
  Xz.prototype.flush = function() {
      if (this.h.events.length) {
          var a =
              uf(this.h, this.F++);
          Uz(this.h.h, a.hg, a.body, this.h.B);
          this.h = new rf;
          0 <= this.B && (m.clearTimeout(this.B), this.B = -1)
      }
  };
  Xz.prototype.T = function(a) {
      var b = this,
          c = Py(a);
      c ? Og(c, function(d) {
          b.D(a, 1 === d.split("~").length ? void 0 : d)
      }) : this.D(a)
  };
  var Tz = function(a, b, c) {
          var d = a + "?" + b;
          if (c) try {
              Vb.sendBeacon && Vb.sendBeacon(d, c)
          } catch (e) {
              Rb("TAGGING", 15)
          } else lc(d)
      },
      Zz = lk('', 500),
      $z = lk('', 5E3),
      Yz = !0;
  var aA = window,
      bA = document,
      cA = function(a) {
          var b = aA._gaUserPrefs;
          if (b && b.ioo && b.ioo() || a && !0 === aA["ga-disable-" + a]) return !0;
          try {
              var c = aA.external;
              if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
          } catch (f) {}
          for (var d = zj("AMP_TOKEN", String(bA.cookie), !0), e = 0; e < d.length; e++)
              if ("$OPT_OUT" == d[e]) return !0;
          return bA.getElementById("__gaOptOutExtension") ? !0 : !1
      };
  var dA = function(a, b, c) {
          c || (c = function() {});
          void 0 !== a.C[b] && (a.C[b] = c(a.C[b]))
      },
      eA = function(a, b) {
          var c = S.g.J;
          tj(c) || wj(function() {
              b.metadata.is_consent_update = !0;
              b.metadata.consent_update_type = c;
              a.Mh(b)
          }, c)
      },
      fA = function(a, b, c) {
          void 0 === c && (c = {});
          if ("object" === typeof b)
              for (var d in b) fA(a + "." + d, b[d], c);
          else c[a] = b;
          return c
      },
      gA = !1;
  var ip = {
          Mj: "",
          ml: Number("")
      },
      hA = {},
      iA = (hA[S.g.Ud] = !0, hA[S.g.Vd] = !0, hA[S.g.Wd] = !0, hA[S.g.Xd] = !0, hA[S.g.Yd] = !0, hA[S.g.Zd] = !0, hA),
      jA = function(a) {
          this.T = a;
          this.Ca = new Xz;
          this.B = void 0;
          this.F = new Yy;
          this.D = this.h = void 0;
          this.I = !1;
          this.cd = void 0;
          this.Dc = !1
      };
  ba = jA.prototype;
  ba.Hk = function(a, b, c) {
      var d = this,
          e = Gm(this.T);
      if (e)
          if (c.eventMetadata.is_external_event && "_" === a.charAt(0)) c.W();
          else {
              a !== S.g.Da && a !== S.g.Ka && Vy(a) && P(58);
              kA(c.h);
              var f = new Wm(e, a, c);
              f.metadata.event_start_timestamp_ms = b;
              var g = [S.g.Z];
              (Ym(f, S.g.xb, T(f.s, S.g.xb)) || Oy(f)) && g.push(S.g.J);
              var h = function() {
                  xj(function() {
                      d.Ik(f)
                  }, g)
              };
              K(11) && K(25) ? jp(h) : h()
          }
      else c.W()
  };
  ba.Ik = function(a) {
      this.D = a;
      try {
          
          cA(a.target.V) && (P(28), a.K = !0);
          if (0 <= ip.Mj.replace(/\s+/g, "").split(",").indexOf(a.eventName)) P(33), a.K = !0;
          else {
              var b = Qy(a);
              b && b.blacklisted && (P(34), a.K = !0)
          }
          var c = H.location.protocol;
          "cyfs:" != c && "http:" != c && "https:" != c && (P(29), a.K = !0);
          Vb && "preview" == Vb.loadPurpose && (P(30), a.K = !0);
          var d = eh.grl;
          d || (d = wz(), eh.grl = d);
          d() || (P(35), a.K = !0);
          if (a.K) {
              a.s.W();
              Sb();
              return
          }
          var e = {
              prefix: String(T(a.s, S.g.Za, "")),
              path: String(T(a.s, S.g.af, "/")),
              flags: String(T(a.s, S.g.nb, "")),
              domain: String(T(a.s, S.g.lb, "auto")),
              fb: Number(T(a.s, S.g.Pa, 63072E3))
          };
          a.metadata.cookie_options = e;
          lA(a);
          this.lj(a);
          this.F.il(a);
          a.metadata.is_merchant_center || T(a.s, S.g.ih) ? a.metadata.euid_mode_enabled = !1 : a.metadata.euid_mode_enabled = Fi(Ei(a.s));
          if (a.metadata.euid_mode_enabled) {
              var f =
                  Ei(a.s);
              if (Fi(f)) {
                  var g = T(a.s, S.g.ka);
                  if (void 0 !== g) a.metadata.user_data = g, a.C._udm = "c";
                  else {
                      var h = Gi(f);
                      a.metadata.user_data = h;
                      if ("selectors" === f.mode || Dc(f.selectors)) a.C._udm = "s";
                      else if ("auto_detect" === f.mode || Dc(f.auto_detect)) a.C._udm = "a"
                  }
              }
          }
          var l = this.hi,
              n;
          T(a.s, S.g.pb) && (tj(S.g.Z) || T(a.s, S.g.wb) || (a.C[S.g.Ch] = !0));
          var p;
          var q;
          q = void 0 === q ? 3 : q;
          var r = m.location.href;
          if (r) {
              var u = ki(r).search.replace("?", ""),
                  t = fi(u, "_gl", !1, !0) || "";
              p = t ? void 0 !== Ol(t, q) : !1
          } else p = !1;
          p && Oy(a) && (a.C[S.g.Bh] = !0);
          a.eventName ===
              S.g.Da ? (T(a.s, S.g.pb) && vm(["aw", "dc"]), sz(a), n = uz(a)) : n = {};
          l.call(this, n);
          a.eventName == S.g.Da && (T(a.s, S.g.Fa, !0) ? (a.s.h[S.g.ja] && (a.s.B[S.g.ja] = a.s.h[S.g.ja], a.s.h[S.g.ja] = void 0, a.C[S.g.ja] = void 0), a.eventName = S.g.Ic) : a.K = !0);
          var v = db(Go(a.s, S.g.ja, 1), ".");
          v && (a.C[S.g.ic] = v);
          var w = db(Go(a.s, S.g.ja, 2), ".");
          w && (a.C[S.g.hc] = w);
          var x = this.h,
              y = this.F,
              A = !this.Dc,
              B = this.B,
              C = T(a.s, S.g.wb),
              F = C ? 1 : 8;
          a.metadata.is_new_to_site = !1;
          C || (C = cz(a), F = 3);
          C || (C = B, F = 5);
          if (!C) {
              var G = tj(S.g.Z),
                  D = Zy();
              C = !D.from_cookie || G ?
                  D.vid : void 0;
              F = 6
          }
          C ? C = "" + C : (C = Sj(), F = 7, a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
          bz(a, C, F);
          var N = Math.floor(a.metadata.event_start_timestamp_ms / 1E3),
              R = void 0;
          a.metadata.is_new_to_site || (R = mz(a) || x);
          var U = Oa(T(a.s, S.g.ad, 30));
          U = Math.min(475, U);
          U = Math.max(5, U);
          var pa = Oa(T(a.s, S.g.kf, 1E4)),
              Q = gz(R);
          a.metadata.is_first_visit = !1;
          a.metadata.is_session_start = !1;
          a.metadata.join_timer_sec = 0;
          Q && Q.Yf && (a.metadata.join_timer_sec = Math.max(0, Q.Yf - Math.max(0, N - Q.zd)));
          var O = !1;
          Q || (O = a.metadata.is_first_visit = !0, Q = {
              sessionId: String(N),
              Tb: 1,
              xc: !1,
              zd: N,
              Rb: !1,
              md: void 0
          });
          N > Q.zd + 60 * U && (O = !0, Q.sessionId = String(N), Q.Tb++, Q.xc = !1, Q.md = void 0);
          if (O) a.metadata.is_session_start = !0, y.dk(a);
          else if (y.Zj() > pa || a.eventName == S.g.Ic) Q.xc = !0;
          a.metadata.euid_mode_enabled ? T(a.s, S.g.Aa) ? Q.Rb = !0 : (Q.Rb && (Q.md = void 0), Q.Rb = !1) : Q.Rb = !1;
          var ja = Q.md;
          if (a.metadata.euid_mode_enabled) {
              var aa = T(a.s, S.g.Vc),
                  V = aa ? 1 : 8;
              aa || (aa = ja, V = 4);
              aa || (aa = Rj(), V = 7);
              var Fa = V,
                  Za = a.metadata.enhanced_client_id_source;
              if (void 0 === Za || Fa <= Za) a.C[S.g.Vc] =
                  aa.toString(), a.metadata.enhanced_client_id_source = Fa
          }
          A ? (Xm(a, S.g.zb, Q.sessionId), Xm(a, S.g.oe, Q.Tb), Xm(a, S.g.ne, Q.xc ? 1 : 0)) : (a.C[S.g.zb] = Q.sessionId, a.C[S.g.oe] = Q.Tb, a.C[S.g.ne] = Q.xc ? 1 : 0);
          a.metadata[S.g.cf] = Q.Rb ? 1 : 0;
          mA(a);
          var Ga = "",
              Ia = H.location;
          if (Ia) {
              var $a = Ia.pathname || "";
              "/" != $a.charAt(0) && ($a = "/" + $a);
              Ga = Ia.protocol + "//" + Ia.hostname + $a + Ia.search
          }
          Xm(a, S.g.Ra, Ga);
          var Gd = S.g.Sa,
              qc;
          a: {
              var we = Fj("_opt_expid", void 0, void 0, S.g.Z)[0];
              if (we) {
                  var Zs = decodeURIComponent(we).split("$");
                  if (3 === Zs.length) {
                      qc =
                          Zs[2];
                      break a
                  }
              }
              if (void 0 !== eh.ga4_referrer_override) qc = eh.ga4_referrer_override;
              else {
                  var $s = Lh("gtm.gtagReferrer." + a.target.V);
                  qc = $s ? "" + $s : H.referrer
              }
          }
          Xm(a, Gd, qc || void 0);
          Xm(a, S.g.nc, H.title);
          Xm(a, S.g.Qa, (Vb.language || "").toLowerCase());
          var at = Vh();
          Xm(a, S.g.Ib, at.width + "x" + at.height);
          a.metadata.create_dc_join = !1;
          a.metadata.create_google_join = !1;
          if (!a.metadata.is_merchant_center && !1 !== T(a.s, S.g.Kc) && xz() && tj(S.g.J)) {
              var Bh = Ym(a, S.g.xb, T(a.s, S.g.xb));
              if (a.metadata.is_session_start || T(a.s, S.g.ef)) {
                  a.metadata.create_dc_join = !!Bh;
              }
              var bt;
              bt = a.metadata.join_timer_sec;
              Bh && 0 === (bt || 0) && (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0)
          }
          nA(a);
          Vg.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0, Xm(a, S.g.ia), Xm(a, S.g.va));
          Xm(a, S.g.lf);
          for (var ct = T(a.s, S.g.ff) || [], kl = 0; kl < ct.length; kl++) {
              var dt = ct[kl];
              if (dt.rule_result) {
                  Xm(a, S.g.lf, dt.traffic_type);
                  Ty(3);
                  break
              }
          }
          if (!a.metadata.is_merchant_center && T(a.s, S.g.wa)) {
              var et = oz(a) || {},
                  TC = (Wl(et[S.g.jc], !!et[S.g.aa]) ? Nl(!0)._fplc : void 0) || (0 < Fj("FPLC", void 0, void 0, S.g.Z).length ? void 0 : "0");
              a.C._fplc = TC
          }
          if (void 0 !== T(a.s, S.g.je)) Xm(a, S.g.je);
          else {
              var ft = T(a.s, S.g.me),
                  ll, Ch;
              a: {
                  if (rz) {
                      var ml = oz(a) || {};
                      if (ml && ml[S.g.aa])
                          for (var gt = ii(ki(a.C[S.g.Sa]),
                                  "host", !0), Dh = ml[S.g.aa], Ff = 0; Ff < Dh.length; Ff++)
                              if (Dh[Ff] instanceof RegExp) {
                                  if (Dh[Ff].test(gt)) {
                                      Ch = !0;
                                      break a
                                  }
                              } else if (0 <= gt.indexOf(Dh[Ff])) {
                          Ch = !0;
                          break a
                      }
                  }
                  Ch = !1
              }
              if (!(ll = Ch)) {
                  var Eh;
                  if (Eh = ft) a: {
                      for (var ht = ft.include_conditions || [], UC = ii(ki(a.C[S.g.Sa]), "host", !0), nl = 0; nl < ht.length; nl++)
                          if (ht[nl].test(UC)) {
                              Eh = !0;
                              break a
                          } Eh = !1
                  }
                  ll = Eh
              }
              ll && (a.C[S.g.je] = "1", Ty(4))
          }
          Oy(a) && (K(5) && (Lq() || (a.C._uc = Ri.Jf)), gj() && (a.C._rnd = Xj()));
          if (K(11))
              if (K(25) && (a.C[S.g.oh] = "1"), !ep(m)) P(87);
              else if (void 0 !== gp) {
              P(85);
              var it =
                  cp();
              it ? T(a.s, S.g.ke) || kp(it, a, !0) : P(86)
          }
          if (a.eventName == S.g.Ka) {
              var jt = T(a.s, S.g.ab),
                  VC = T(a.s, S.g.ob),
                  kt = void 0;
              kt = a.C[jt];
              VC(kt || T(a.s, jt));
              a.K = !0
          }
          if (!K(26) && !a.s.eventMetadata.syn_or_mod) {
              var ol = T(a.s, S.g.bf);
              if (ol) {
                  var Hd = J(a.s.h);
                  J(a.C, Hd);
                  for (var lt = ol.edit_rules || [], mt = !1, pl = 0; pl < lt.length; pl++) {
                      var Fh;
                      a: {
                          var Gh = a,
                              Id = lt[pl];
                          if (Ux(Gh.eventName, Hd, Id.event_name_predicate, Id.conditions || [])) {
                              if (Id.new_event_name) {
                                  var nt = k(Id.new_event_name) ? String(Id.new_event_name) : Qx(Gh.eventName, Hd, Id.new_event_name);
                                  if (Vy(nt)) {
                                      Fh = !1;
                                      break a
                                  }
                                  Gh.eventName = String(nt)
                              }
                              Wy(Gh.eventName, Hd, Id);
                              Ty(2);
                              Fh = !0
                          } else Fh = !1
                      }
                      Fh && (mt = !0)
                  }
                  for (var ot = ol.synthesis_rules || [], ql = 0; ql < ot.length; ql++) {
                      var rl = a,
                          Gf = ot[ql];
                      if (Ux(rl.eventName, Hd, Gf.event_name_predicate, Gf.conditions || [])) {
                          var sl = Gf.new_event_name;
                          if (!Vy(sl)) {
                              var pt = Gf.merge_source_event_params ? J(Hd) : {};
                              Wy(sl, pt, Gf);
                              var qt = {},
                                  rt = {
                                      eventMetadata: (qt.syn_or_mod = !0, qt)
                                  };
                              Rx && (rt.eventMetadata.event_usage = [10]);
                              var WC = Pr(rl.target.V, sl, pt);
                              Sr(WC, rl.s.eventId, rt);
                              Ty(1)
                          }
                      }
                  }
                  if (mt) {
                      for (var tl = {}, st = {
                              eventMetadata: (tl.syn_or_mod = !0, tl.is_external_event = !!a.s.eventMetadata.is_external_event, tl)
                          }, tt, ul = [], ut = Qb.GA4_EVENT || [], Hh = 0; Hh < ut.length; Hh++) ut[Hh] && ul.push(Hh);
                      (tt = 0 < ul.length ? ul : void 0) && (st.eventMetadata.event_usage = tt);
                      var XC = Pr(a.target.V, a.eventName, Hd);
                      Sr(XC, a.s.eventId, st);
                      a.K = !0
                  }
              }
          }
          an(a);
          oA(a);
          var vl = a.metadata.event_usage;
          if (Ea(vl))
              for (var wl = 0; wl < vl.length; wl++) Ty(vl[wl]);
          var vt = K(53) ? Ub("GA4_EVENT") : Tb("GA4_EVENT");
          vt && (a.C._eu = vt);
          Xm(a, S.g.Aa);
          Xm(a, S.g.Ta);
          if (a.metadata.speculative ||
              a.K) {
              a.s.W();
              Sb();
              return
          }
          var ZC = this.hi,
              wt, $C = this.B,
              xl;
          a: {
              var yl = nz(a);
              if (yl) {
                  if (lz(yl, a)) {
                      xl = yl;
                      break a
                  }
                  P(25);
                  a.K = !0
              }
              xl = void 0
          }
          var aD = xl;
          wt = {
              clientId: fz(a, $C),
              mi: aD
          };
          ZC.call(this, wt);
          this.Dc = !0;
          this.bl(a);
          if (Oy(a)) {
              var bD = a.metadata.is_conversion;
              ("page_view" === a.eventName || bD) && eA(this, a)
          }
          this.F.mg();
          this.cd = pA(a, this.cd);
          T(a.s, S.g.ke) && (a.C[S.g.ke] = !0, dA(a, S.g.Ib));
          Xm(a, S.g.Vg);
          if (a.K) {
              a.s.W();
              Sb();
              return
          }
          this.Mh(a);
          a.s.X()
      } catch (iE) {
          a.s.W()
      }
      Sb()
  };
  ba.Mh = function(a) {
      this.Ca.add(a)
  };
  ba.hi = function(a) {
      var b =
          a.clientId,
          c = a.mi;
      b && c && (this.B = b, this.h = c)
  };
  ba.flush = function() {
      this.Ca.flush()
  };
  ba.bl = function(a) {
      var b = this;
      if (!this.I) {
          var c = tj(S.g.Z);
          vj([S.g.Z], function() {
              var d = tj(S.g.Z);
              if (c ^ d && b.D && b.h && b.B) {
                  var e = b.B;
                  if (d) {
                      var f = cz(b.D);
                      if (f) {
                          b.B = f;
                          var g = mz(b.D);
                          g ? K(12) ? (b.h = iz(g, b.h, b.D), lz(b.h, b.D)) : b.h = g : lz(b.h, b.D)
                      } else ez(b.B, b.D), az(b.B, !0), lz(b.h, b.D);
                      var h = {};
                      h[S.g.ef] = e;
                      var l = Pr(b.T, S.g.Xe, h);
                      Sr(l, a.s.eventId, {});
                  } else {
                      b.h =
                          void 0;
                      b.B = void 0;
                      m.gaGlobal = {};
                  }
                  c = d
              }
          });
          this.I = !0
      }
  };
  ba.lj = function(a) {
      a.eventName !== S.g.Ka && this.F.kj(a)
  };
  var oA = function(a) {
          if (K(23) && Oy(a)) {
              var b = function(d) {
                      var e = fA(S.g.ka, d);
                      Ma(e, function(f, g) {
                          a.C[f] = g
                      })
                  },
                  c = T(a.s, S.g.ka);
              void 0 !== c ? b(c) : b(a.metadata.user_data);
              a.metadata.user_data = void 0
          }
      },
      lA = function(a) {
          function b(c, d) {
              Rg[c] || void 0 === d || (a.C[c] = d)
          }
          Ma(a.s.B, b);
          Ma(a.s.h, b)
      },
      mA = function(a) {
          var b =
              Ho(a.s),
              c = function(d, e) {
                  iA[d] && (a.C[d] = e)
              };
          Dc(b[S.g.Pc]) ? Ma(b[S.g.Pc], function(d, e) {
              c((S.g.Pc + "_" + d).toLowerCase(), e)
          }) : Ma(b, c)
      },
      nA = function(a) {
          var b = function(c) {
              return !!c && c.conversion
          };
          a.metadata.is_conversion = b(Qy(a));
          a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(Qy(a, "first_visit")));
          a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(Qy(a, "session_start")))
      },
      pA = function(a, b) {
          var c = void 0;
          return c
      };

  function kA(a) {
      Ma(a, function(c) {
          "_" === c.charAt(0) && delete a[c]
      });
      var b = a[S.g.Ta] || {};
      Ma(b, function(c) {
          "_" === c.charAt(0) && delete b[c]
      })
  };
  var qA = function(a) {
          if ("prerender" == H.visibilityState) return !1;
          a();
          return !0
      },
      rA = function(a) {
          if (!qA(a)) {
              var b = !1,
                  c = function() {
                      !b && qA(a) && (b = !0, gc(H, "visibilitychange", c), P(55))
                  };
              fc(H, "visibilitychange", c);
              P(54)
          }
      };
  var tA = function(a, b) {
      rA(function() {
          var c = Gm(a);
          if (c) {
              var d = sA(c, b);
              ps.register(a, d)
          }
      });
  };

  function sA(a, b) {
      var c = function() {};
      var d = new jA(a.id),
          e = "MC" === a.prefix;
      c = function(f, g, h, l) {
          e && (l.eventMetadata.is_merchant_center = !0);
          d.Hk(g, h, l)
      };
      uA(a, d, b);
      return c
  }

  function uA(a, b, c) {
      var d = b.F,
          e = {},
          f = {
              eventId: c,
              eventMetadata: (e.batch_on_navigation = !0, e)
          };
      d.Mk(function() {
          Ry = !0;
          ps.flush();
          1E3 <= d.Je() && Vb.sendBeacon && qs(S.g.Xe, {}, a.id, f);
          b.flush();
          d.ji(function() {
              Ry = !1;
              d.ji()
          })
      });
  };
  var pC = sA;

  function rC(a, b, c, d) {
      L(E(this), ["destinationIds:!*", "eventName:!*", "eventParameters:?DustMap", "messageContext:?DustMap"], arguments);
      var e = c ? Fc(c) : {},
          f = Fc(a);
      Array.isArray(f) || (f = [f]);
      b = String(b);
      var g = d ? Fc(d) : {},
          h = this.h.h;
      g.originatingEntity = ky(h);
      for (var l = 0; l < f.length; l++) {
          var n = f[l];
          if ("string" === typeof n) {
              var p = J(e),
                  q = J(g),
                  r = Pr(n, b, p);
              Sr(r, g.eventId || h.eventId, q)
          }
      }
  }
  rC.P = "internal.sendGtagEvent";

  function sC(a, b, c) {}
  sC.R = "sendPixel";

  function tC(a, b, c, d) {
      var e = this;
      d = void 0 === d ? !0 : d;
      var f = !1;
      return f
  }
  tC.R = "setCookie";

  function uC(a) {
      L(E(this), ["consentSettings:!DustMap"], arguments);
      for (var b = a.Lb(), c = b.length(), d = 0; d < c; d++) {
          var e = b.get(d);
          e === S.g.Ue || K(17) && e === S.g.Ve || M(this, "access_consent", e, "write")
      }
      var f = this.h.h,
          g = f.eventId,
          h = ly(f),
          l = Mr("consent", "default", Fc(a));
      Sr(l, g, h)
  }
  uC.R = "setDefaultConsentState";

  function vC(a, b, c) {
      return !1
  }
  vC.R = "setInWindow";

  function wC(a, b, c) {
      L(E(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
      var d = Uh(a) || {};
      d[b] = Fc(c, this.h);
      var e = a;
      Sh || Th();
      Rh[e] = d;
  }
  wC.P = "internal.setProductSettingsParameter";

  function xC(a, b, c) {
      L(E(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
      for (var d = b.split("."), e = vs(ps, a).h, f = 0; f < d.length - 1; f++) {
          if (void 0 === e[d[f]]) e[d[f]] = {};
          else if (!Dc(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
          e = e[d[f]]
      }
      e[d[f]] = Fc(c, this.h);
  }
  xC.P = "internal.setRemoteConfigParameter";

  function yC(a, b, c, d) {
      var e = this;
  }
  yC.R = "sha256";

  function zC(a, b, c) {}
  zC.P = "internal.sortRemoteConfigParameters";
  var AC = {},
      BC = {};
  AC.R = "templateStorage";
  AC.getItem = function(a) {
      var b = null;
      M(this, "access_template_storage");
      var c = this.h.h;
      if (!c) throw Error("invalid program state");
      var d = c.sd();
      BC[d] && (b = BC[d].hasOwnProperty("gtm." + a) ? BC[d]["gtm." + a] : null);
      return b
  };
  AC.setItem = function(a, b) {
      M(this, "access_template_storage");
      var c = this.h.h;
      if (!c) throw Error("invalid program state");
      var d = c.sd();
      BC[d] = BC[d] || {};
      BC[d]["gtm." + a] = b;
  };
  AC.removeItem = function(a) {
      M(this, "access_template_storage");
      var b = this.h.h;
      if (!b) throw Error("invalid program state");
      var c = b.sd();
      if (!BC[c] || !BC[c].hasOwnProperty("gtm." + a)) return;
      delete BC[c]["gtm." + a];
  };
  AC.clear = function() {
      M(this, "access_template_storage");
      var a = this.h.h;
      if (!a) throw Error("invalid program state");
      delete BC[a.sd()];
  };
  var CC = function(a) {
      var b;
      return b
  };

  function DC(a) {
      L(E(this), ["consentSettings:!DustMap"], arguments);
      var b = Fc(a),
          c;
      for (c in b) b.hasOwnProperty(c) && M(this, "access_consent", c, "write");
      var d = this.h.h;
      Sr(Mr("consent", "update", b), d.eventId, ly(d))
  }
  DC.R = "updateConsentState";
  var EC = function() {
      var a = new lg,
          b = function(d) {
              var e = d.P;
              if (a.B.hasOwnProperty(e)) throw "Attempting to add a private function which already exists: " + e + ".";
              if (a.h.hasOwnProperty(e)) throw "Attempting to add a private function with an existing API name: " + e + ".";
              a.B[e] = Ca(d) ? Mf(e, d) : Nf(e, d)
          },
          c = function(d) {
              return a.add(d.R, d)
          };
      c(yv);
      c(Ev);
      c(qw);
      c(tw);
      c(uw);
      c(yw);
      c(zw);
      c(Bw);
      c(wy());
      c(Cw);
      c(Xx);
      c(dy);
      c(ey);
      c(fy);
      c(iy);
      c(ny);
      c(oy);
      c(ry);
      c(vy);
      c(Cy);
      c(Dy);
      c(Fy);
      c(Gy);
      c(Hy);
      c(sC);
      c(tC);
      c(uC);
      c(vC);
      c(yC);
      c(AC);
      c(DC);
      a.add("Math", Sf());
      a.add("Object", jg);
      a.add("TestHelper", ng());
      a.add("assertApi", Of);
      a.add("assertThat", Pf);
      a.add("decodeUri", Tf);
      a.add("decodeUriComponent", Uf);
      a.add("encodeUri", Vf);
      a.add("encodeUriComponent", Wf);
      a.add("fail", Xf);
      a.add("generateRandom", Yf);
      a.add("getContainerVersion", Zf);
      a.add("getTimestamp", $f);
      a.add("getTimestampMillis", $f);
      a.add("getType", ag);
      a.add("makeInteger", cg);
      a.add("makeNumber", dg);
      a.add("makeString", eg);
      a.add("makeTableMap", fg);
      a.add("mock", ig);
      a.add("fromBase64",
          Wx, !("atob" in m));
      a.add("localStorage", yy, !xy());
      a.add("toBase64", CC, !("btoa" in m));
      b(Bv);
      b(Uv);
      b(aw);
      b(fw);
      b(ow);
      b(rw);
      b(ww);
      b(Nw);
      b(Sw);
      b(Xw);
      b(fx);
      b(jx);
      b(ux);
      b(Hx);
      b(Ix);
      b(Ox);
      b(Yx);
      b(Zx);
      b(by);
      b(cy);
      b(gy);
      b(hy);
      b(uy);
      b(Ay);
      b(Ey);
      b(Iy);
      b(Ky);
      b(Ly);
      b(rC);
      b(wC);
      b(xC);
      b(zC);
      b(Aw);
      return function(d) {
          var e;
          if (a.h.hasOwnProperty(d)) e = a.get(d, this);
          else {
              var f;
              if (f = a.B.hasOwnProperty(d)) {
                  var g = !1,
                      h = this.h.h;
                  if (h) {
                      var l = h.sd();
                      if (l) {
                          0 !== l.indexOf("__cvt_") && (g = !0);
                      }
                  }
                  f = g
              }
              if (f) {
                  var n = a.B.hasOwnProperty(d) ? a.B[d] : void 0;
                  e = n
              } else throw Error(d + " is not a valid API name.");
          }
          return e
      }
  };
  var FC = function() {
          return !1
      },
      GC = function() {
          var a = {};
          return function(b, c, d) {}
      };
  var HC;

  function IC() {
      var a = HC;
      return function(b, c, d) {
          var e = d && d.event;
          JC(c);
          var f = new jb;
          Ma(c, function(q, r) {
              var u = Ec(r);
              void 0 === u && void 0 !== r && P(44);
              f.set(q, u)
          });
          a.h.h.I = Oe();
          var g = {
              Dj: af(b),
              eventId: void 0 !== e ? e.id : void 0,
              priorityId: void 0 !== e ? e.priorityId : void 0,
              xe: void 0 !== e ? function(q) {
                  return e.Ab.xe(q)
              } : void 0,
              sd: function() {
                  return b
              },
              log: function() {},
              Oj: {
                  index: d && d.index,
                  type: d && d.type,
                  name: d && d.name
              }
          };
          if (FC()) {
              var h = GC(),
                  l = void 0,
                  n = void 0;
              g.Wa = {
                  qg: [],
                  gd: {},
                  eb: function(q, r, u) {
                      1 === r && (l = q);
                      7 === r && (n =
                          u);
                      h(q, r, u)
                  },
                  cg: gg()
              };
              g.log = function(q, r) {
                  if (l) {
                      var u = Array.prototype.slice.call(arguments, 1);
                      h(l, 4, {
                          level: q,
                          source: n,
                          message: u
                      })
                  }
              }
          }
          var p = Wd(a, g, [b, f]);
          a.h.h.I = void 0;
          p instanceof qa && "return" === p.h && (p = p.B);
          return Fc(p)
      }
  }

  function JC(a) {
      var b = a.gtmOnSuccess,
          c = a.gtmOnFailure;
      Ca(b) && (a.gtmOnSuccess = function() {
          I(b)
      });
      Ca(c) && (a.gtmOnFailure = function() {
          I(c)
      })
  }

  function KC() {
      HC.h.h.T = function(a, b, c) {
          eh.SANDBOXED_JS_SEMAPHORE = eh.SANDBOXED_JS_SEMAPHORE || 0;
          eh.SANDBOXED_JS_SEMAPHORE++;
          try {
              return a.apply(b, c)
          } finally {
              eh.SANDBOXED_JS_SEMAPHORE--
          }
      }
  }

  function LC(a) {
      void 0 !== a && Ma(a, function(b, c) {
          for (var d = 0; d < c.length; d++) {
              var e = c[d].replace(/^_*/, "");
              xh[e] = xh[e] || [];
              xh[e].push(b)
          }
      })
  };
  var MC = encodeURI,
      Y = encodeURIComponent,
      NC = function(a, b, c) {
          ec(a, b, c)
      },
      OC = function(a, b) {
          if (!a) return !1;
          var c = ii(ki(a), "host");
          if (!c) return !1;
          for (var d = 0; b && d < b.length; d++) {
              var e = b[d] && b[d].toLowerCase();
              if (e) {
                  var f = c.length - e.length;
                  0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                  if (0 <= f && c.indexOf(e, f) == f) return !0
              }
          }
          return !1
      },
      PC = function(a, b, c) {
          for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
              a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
          return e ? d : null
      };
  var Z = {
      m: {}
  };
  Z.m.access_template_storage = ["google"],
      function() {
          (function(a) {
              Z.__access_template_storage = a;
              Z.__access_template_storage.o = "access_template_storage";
              Z.__access_template_storage.isVendorTemplate = !0;
              Z.__access_template_storage.priorityOverride = 0;
              Z.__access_template_storage.isInfrastructure = !1
          })(function() {
              return {
                  assert: function() {},
                  ca: function() {
                      return {}
                  }
              }
          })
      }();

  Z.m.c = ["google"],
      function() {
          (function(a) {
              Z.__c = a;
              Z.__c.o = "c";
              Z.__c.isVendorTemplate = !0;
              Z.__c.priorityOverride = 0;
              Z.__c.isInfrastructure = !1
          })(function(a) {
              Nu(a.vtp_value, "c", a.vtp_gtmEventId);
              return a.vtp_value
          })
      }();
  Z.m.e = ["google"],
      function() {
          (function(a) {
              Z.__e = a;
              Z.__e.o = "e";
              Z.__e.isVendorTemplate = !0;
              Z.__e.priorityOverride = 0;
              Z.__e.isInfrastructure = !1
          })(function(a) {
              return String(a.vtp_gtmCachedValues.event)
          })
      }();
  Z.m.v = ["google"],
      function() {
          (function(a) {
              Z.__v = a;
              Z.__v.o = "v";
              Z.__v.isVendorTemplate = !0;
              Z.__v.priorityOverride = 0;
              Z.__v.isInfrastructure = !1
          })(function(a) {
              var b = a.vtp_name;
              if (!b || !b.replace) return !1;
              var c = Fu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                  d = void 0 !== c ? c : a.vtp_defaultValue;
              Nu(d, "v", a.vtp_gtmEventId);
              return d
          })
      }();

  Z.m.process_dom_events = ["google"],
      function() {
          function a(b, c, d) {
              return {
                  targetType: c,
                  eventName: d
              }
          }(function(b) {
              Z.__process_dom_events = b;
              Z.__process_dom_events.o = "process_dom_events";
              Z.__process_dom_events.isVendorTemplate = !0;
              Z.__process_dom_events.priorityOverride = 0;
              Z.__process_dom_events.isInfrastructure = !1
          })(function(b) {
              for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) {
                  var g = c[f];
                  e[g.targetType] = e[g.targetType] || [];
                  e[g.targetType].push(g.eventName)
              }
              return {
                  assert: function(h,
                      l, n) {
                      if (!e[l]) throw d(h, {}, "Prohibited event target " + l + ".");
                      if (-1 === e[l].indexOf(n)) throw d(h, {}, "Prohibited listener registration for DOM event " + n + ".");
                  },
                  ca: a
              }
          })
      }();






  Z.m.read_container_data = ["google"],
      function() {
          (function(a) {
              Z.__read_container_data = a;
              Z.__read_container_data.o = "read_container_data";
              Z.__read_container_data.isVendorTemplate = !0;
              Z.__read_container_data.priorityOverride = 0;
              Z.__read_container_data.isInfrastructure = !1
          })(function() {
              return {
                  assert: function() {},
                  ca: function() {
                      return {}
                  }
              }
          })
      }();
  Z.m.listen_data_layer = ["google"],
      function() {
          function a(b, c) {
              return {
                  eventName: c
              }
          }(function(b) {
              Z.__listen_data_layer = b;
              Z.__listen_data_layer.o = "listen_data_layer";
              Z.__listen_data_layer.isVendorTemplate = !0;
              Z.__listen_data_layer.priorityOverride = 0;
              Z.__listen_data_layer.isInfrastructure = !1
          })(function(b) {
              var c = b.vtp_accessType,
                  d = b.vtp_allowedEvents || [],
                  e = b.vtp_createPermissionError;
              return {
                  assert: function(f, g) {
                      if (!k(g)) throw e(f, {
                          eventName: g
                      }, "Event name must be a string.");
                      if (!("any" === c || "specific" ===
                              c && 0 <= d.indexOf(g))) throw e(f, {
                          eventName: g
                      }, "Prohibited listen on data layer event.");
                  },
                  ca: a
              }
          })
      }();


  Z.m.get_url = ["google"],
      function() {
          function a(b, c, d) {
              return {
                  component: c,
                  queryKey: d
              }
          }(function(b) {
              Z.__get_url = b;
              Z.__get_url.o = "get_url";
              Z.__get_url.isVendorTemplate = !0;
              Z.__get_url.priorityOverride = 0;
              Z.__get_url.isInfrastructure = !1
          })(function(b) {
              var c = "any" === b.vtp_urlParts ? null : [];
              c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"), b.vtp_fragment && c.push("fragment"));
              var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
                  e = b.vtp_createPermissionError;
              return {
                  assert: function(f, g, h) {
                      if (g) {
                          if (!k(g)) throw e(f, {}, "URL component must be a string.");
                          if (c && 0 > c.indexOf(g)) throw e(f, {}, "Prohibited URL component: " + g);
                          if ("query" === g && d) {
                              if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                              if (!k(h)) throw e(f, {}, "Query key must be a string.");
                              if (0 > d.indexOf(h)) throw e(f, {}, "Prohibited query key: " + h);
                          }
                      } else if (c) throw e(f, {},
                          "Prohibited from getting entire URL when components are specified.");
                  },
                  ca: a
              }
          })
      }();
  Z.m.gct = ["google"],
      function() {
          function a(d) {
              for (var e = [], f = 0; f < d.length; f++) try {
                  e.push(new RegExp(d[f]))
              } catch (g) {}
              return e
          }

          function b(d) {
              return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
          }

          function c(d) {
              for (var e = [], f = 0; f < d.length; f++) {
                  var g = d[f].matchValue,
                      h;
                  switch (d[f].matchType) {
                      case "BEGINS_WITH":
                          h = "^" + b(g);
                          break;
                      case "ENDS_WITH":
                          h = b(g) + "$";
                          break;
                      case "EQUALS":
                          h = "^" + b(g) + "$";
                          break;
                      case "REGEX":
                          h = g;
                          break;
                      default:
                          h = b(g)
                  }
                  e.push(h)
              }
              return e
          }(function(d) {
              Z.__gct = d;
              Z.__gct.o = "gct";
              Z.__gct.isVendorTemplate = !0;
              Z.__gct.priorityOverride = 0;
              Z.__gct.isInfrastructure = !1
          })(function(d) {
              var e = {},
                  f = d.vtp_sessionDuration;
              0 < f && (e[S.g.ad] = f);
              e[S.g.be] = d.vtp_eventSettings;
              e[S.g.bf] = d.vtp_dynamicEventSettings;
              e[S.g.xb] = 1 === d.vtp_googleSignals;
              e[S.g.he] = d.vtp_foreignTld;
              e[S.g.Yc] = 1 === d.vtp_restrictDomain;
              e[S.g.ff] = d.vtp_internalTrafficResults;
              var g = S.g.za,
                  h = d.vtp_linker;
              h && h[S.g.aa] && (h[S.g.aa] = a(h[S.g.aa]));
              e[g] = h;
              var l = S.g.me,
                  n = d.vtp_referralExclusionDefinition;
              n && n.include_conditions && (n.include_conditions = a(n.include_conditions));
              e[l] = n;
              var p = d.vtp_trackingId,
                  q = vs(ps, p).h,
                  r = q.referral_exclusion_conditions;
              r && (r.length && "object" === typeof r[0] && (r = c(r)), e[S.g.me] = {
                  include_conditions: a(r)
              });
              var u = q.cross_domain_conditions;
              if (u) {
                  u.length && "object" === typeof u[0] && (u = c(u));
                  var t = {};
                  e[S.g.za] = (t[S.g.aa] = a(u), t[S.g.kc] = !0, t[S.g.jc] = !0, t[S.g.Zc] = "query", t)
              }
              ys(p, e);
              tA(p, d.vtp_gtmEventId);
              I(d.vtp_gtmOnSuccess)
          })
      }();

  Z.m.get = ["google"],
      function() {
          (function(a) {
              Z.__get = a;
              Z.__get.o = "get";
              Z.__get.isVendorTemplate = !0;
              Z.__get.priorityOverride = 0;
              Z.__get.isInfrastructure = !1
          })(function(a) {
              var b = a.vtp_settings,
                  c = b.eventParameters || {},
                  d = String(a.vtp_eventName),
                  e = {};
              e.eventId = a.vtp_gtmEventId;
              e.priorityId = a.vtp_gtmPriorityId;
              a.vtp_deferrable && (e.deferrable = !0);
              var f = Pr(String(b.streamId), d, c);
              Sr(f, e.eventId, e);
              a.vtp_gtmOnSuccess()
          })
      }();





  var gE = {};
  gE.dataLayer = Mh;
  gE.callback = function(a) {
      wh.hasOwnProperty(a) && Ca(wh[a]) && wh[a]();
      delete wh[a]
  };
  gE.bootstrap = 0;
  gE._spx = !1;

  function hE() {
      eh[We.N] = eh[We.N] || gE;
      We.Yb && (eh["ctid_" + We.Yb] = gE);
      ek();
      gk() || Ma(hk(), function(a, b) {
          Oq(a, b.transportUrl, b.context);
          P(92)
      });
      Wa(xh, Z.m);
      Ee = Se
  }
  (function(a) {
      function b() {
          l = H.documentElement.getAttribute("data-tag-assistant-present");
          Xt(l) && (h = g.fj)
      }
      if (!m["__TAGGY_INSTALLED"]) {
          var c = !1;
          if (H.referrer) {
              var d = ki(H.referrer);
              c = "cct.google" === hi(d, "host")
          }
          if (!c) {
              var e = Fj("googTaggyReferrer");
              c = e.length && e[0].length
          }
          c && (m["__TAGGY_INSTALLED"] = !0, bc("https://cct.google/taggy/agent.js"))
      }
      if (rh) a();
      else {
          var f = function(t) {
                  var v = "GTM",
                      w = "GTM";
                  lh ? (v = "OGT", w = "GTAG") : rh && (w = v = "OPT");
                  var x = m["google.tagmanager.debugui2.queue"];
                  x || (x = [],
                      m["google.tagmanager.debugui2.queue"] = x, bc("https://" + dh.Rd + "/debug/bootstrap?id=" + We.N + "&src=" + w + "&cond=" + t + "&gtm=" + kk()));
                  var y = {
                      messageType: "CONTAINER_STARTING",
                      data: {
                          scriptSource: Wb,
                          containerProduct: v,
                          debug: !1,
                          id: We.N,
                          isGte: kh
                      }
                  };
                  y.data.resume = function() {
                      a()
                  };
                  dh.Ai && (y.data.initialPublish = !0);
                  x.push(y)
              },
              g = {
                  ql: 1,
                  gj: 2,
                  tj: 3,
                  Ci: 4,
                  fj: 5
              },
              h = void 0,
              l = void 0,
              n = ii(m.location, "query", !1, void 0, "gtm_debug");
          Xt(n) && (h = g.gj);
          if (!h && H.referrer) {
              var p = ki(H.referrer);
              "tagassistant.google.com" === hi(p, "host") && (h = g.tj)
          }
          if (!h) {
              var q =
                  Fj("__TAG_ASSISTANT");
              q.length && q[0].length && (h = g.Ci)
          }
          h || b();
          if (!h && K(54) && Yt(l)) {
              var r = function() {
                      if (u) return !0;
                      u = !0;
                      b();
                      h && Wb ? f(h) : a()
                  },
                  u = !1;
              fc(H, "TADebugSignal", function() {
                  r()
              }, !1);
              m.setTimeout(function() {
                  r()
              }, 200)
          } else h && Wb ? f(h) : a()
      }
  })(function() {
      var a = !1;
      a && rr("INIT");
      Vi().B();
      Uk();
      Xl.enable_gbraid_cookie_write = !0;
      if (We.Yb ? eh["ctid_" + We.Yb] : eh[We.N]) {
          var b = eh.zones;
          b && b.unregisterChild(ak());
      } else {
          (K(11) || K(13) || K(48)) && hp();
          for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) te.push(d[e]);
          for (var f = c.tags || [], g = 0; g < f.length; g++) xe.push(f[g]);
          for (var h = c.predicates || [], l = 0; l < h.length; l++) ve.push(h[l]);
          for (var n = c.rules || [], p = 0; p < n.length; p++) {
              for (var q = n[p], r = {}, u = 0; u < q.length; u++) r[q[u][0]] = Array.prototype.slice.call(q[u], 1);
              ue.push(r)
          }
          ze = Z;
          Ae = wv;
          $e = new Ze;
          var t = data.sandboxed_scripts,
              v = data.security_groups,
              w = data.runtime || [],
              x = data.runtime_lines;
          HC = new Ud;
          KC();
          se = IC();
          var y = HC,
              A = EC();
          mb(y.h, "require", A);
          for (var B = 0; B < w.length; B++) {
              var C = w[B];
              if (!Ea(C) || 3 > C.length) {
                  if (0 === C.length) continue;
                  break
              }
              x && x[B] && x[B].length && Le(C, x[B]);
              HC.execute(C)
          }
          if (void 0 !== t)
              for (var F = ["sandboxedScripts"], G = 0; G <
                  t.length; G++) {
                  var D = t[G].replace(/^_*/, "");
                  xh[D] = F
              }
          LC(v);
          hE();
          Wt();
          br = !1;
          cr = 0;
          if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) er();
          else {
              fc(H, "DOMContentLoaded", er);
              fc(H, "readystatechange", er);
              if (H.createEventObject && H.documentElement.doScroll) {
                  var N = !0;
                  try {
                      N = !m.frameElement
                  } catch (O) {}
                  N && fr()
              }
              fc(m, "load", er)
          }
          Ms = !1;
          "complete" === H.readyState ? Os() : fc(m, "load", Os);
          Co();
          K(46) && P(111);
          K(47) && P(112);
          vh = Ta();
          gE.bootstrap = vh;
          if (a) {
              var Q = sr("INIT");
          }
      }
  });

})()