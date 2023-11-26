---
title: Rust, 启动！
author: AUTHOR
description: 新建并启动一个 Rust 项目
date: 2023-11-27 00:40:45
tags: Rust, Cargo
categories:
---

# Hello Cargo!

> Cargo 是 Rust 的构建系统和包管理器。大多数 Rustacean 们使用 Cargo 来管理他们的 Rust 项目，因为它可以为你处理很多任务，比如构建代码、下载依赖库并编译这些库。（我们把代码所需要的库叫做 依赖（dependencies））。

虽然也可以使用Rustc 来完成代码编译，但是Cargo更加简单易用，而且当项目逐渐变大之后也可以用 `Cargo` 来进行包和依赖的管理（目前体验上堪比 `npm` 和 `yarn`）。

基于此，我们选择使用 `Cargo` 来进行 `Rust` 的 启——————动————————

::: tip
请确保你已经安装了 `Rust` 和 `Cargo`，如果没有，请参考 [Rust 安装](https://kaisery.github.io/trpl-zh-cn/ch01-01-installation.html)
:::

```bash
  cargo --version
```

如果你看到了版本号，说明已安装！如果看到类似 command not found 的错误：[传送门](https://kaisery.github.io/trpl-zh-cn/ch01-01-installation.html)

## 使用 Cargo 创建项目

```bash
  cargo new hello_cargo
  cd hello_cargo

  # 也可以使用 cargo init 在当前目录下创建项目
  cargo init
```

可以看到，Cargo 为我们创建了一个 `hello_cargo` 的文件夹，里面包含了一些文件和文件夹：

```bash
  .
  ├── Cargo.toml
  └── src
      └── main.rs
```

在 `main.rs` 中，Cargo 已经为我们创建了一个 `Hello, world!` 的实例代码：

```rust
  fn main() {
      println!("Hello, world!");
  }
```

而 `Cargo.toml` 则是一个配置文件，类似于 `package.json`，用于描述项目的元数据和依赖。

```toml
[package]
name = "RustActivate"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```

第一行，`[package]`，是一个片段（section）标题，表明下面的语句用来配置一个包。随着我们在这个文件增加更多的信息，还将增加其他片段（section）。

接下来的三行设置了 Cargo 编译程序所需的配置：项目的名称、项目的版本以及要使用的 Rust 版本。

最后一行，`[dependencies]`，是罗列项目依赖的片段的开始。在 `Rust` 中，代码包被称为 `crates`。这个项目并不需要其他的 `crate`，不过在第二章的第一个项目会用到依赖，那时会用得上这个片段。

## 构建并运行

Cargo 构建和运行项目的方式与 `npm` 和 `yarn` 类似：

```bash
  cargo build
  cargo run
```

`cargo run` 会在构建完成后立即运行项目，如果你只想构建项目，可以使用 `cargo build`。

但是需要注意：这些编译在默认情况下是在 debug 模式下进行的，这意味着编译器会为你的程序增加一些有用的开发工具，但是会降低程序的运行速度。当你准备好发布你的程序时，可以使用 `cargo build --release` 来进行编译，这会在编译完成后对程序进行优化，但是会花费更长的时间（这比直接编译 dev 版本要慢得多，但是程序编译完成后的执行速度也会有极大提升）。

如果你不确定自己的代码是否可以编译，可以使用 `cargo check` 来进行检查，这会快速检查代码是否可以编译，但是不会生成可执行文件。

以上就是 `Cargo` 的基本使用方法，可以看到，`Cargo` 为我们提供了很多便利，让我们可以专注于代码的编写，而不是编译和构建的细节，同时也为对 `Node.js` 有所了解的同学提供类似的体验。
