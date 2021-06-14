load("@npm//@bazel/typescript:index.bzl", "ts_project", "ts_config")

exports_files(["tsconfig.json"])

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
)

ts_project(
    name = "exercises",
    srcs = glob(
        ["**/**/*.ts"],
        exclude = ["**/**/*.test.ts"]
    ),
    visibility = ["//visibility:public"],
    tsconfig = ":tsconfig.json"
)
