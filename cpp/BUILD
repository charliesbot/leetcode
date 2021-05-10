package(default_visibility = ["//visibility:public"])
load("@rules_cc//cc:defs.bzl", "cc_test")

cc_library(
    name="exercises",
    hdrs=glob(["*.h"]),
    srcs=glob(["*.cc"]),
    visibility = ["//visibility:public"],
)

cc_test(
  name = "tests",
  srcs = glob(["*_test.cpp"]),
  deps = [
      ":exercises",
      "@com_google_googletest//:gtest_main"
      ],
)