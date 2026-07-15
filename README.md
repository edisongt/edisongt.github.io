<div align="center">

# 🌌 伊甸園・聖經沉浸式閱讀 · Garden of Eden

**一個以電影般畫面呈現整本聖經的沉浸式網頁應用**
*An immersive, cinematic web experience for reading all 66 books of the Bible.*

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github&logoColor=white)](https://pages.github.com/)

🔗 **線上網站 / Live Site** → [https://edisongt.github.io](https://edisongt.github.io)

</div>

---

## ✨ 專案簡介 · Overview

本專案是一個以 **Angular 21** 打造的單頁應用（SPA），將聖經的 66 卷書以**逐幕（scene）呈現的沉浸式動畫**方式重新演繹。頁面會隨著時間、經文與情境切換天空、星空、日月、微風與流星等動態效果，帶來如同置身經文場景的閱讀體驗。

介面以 **繁體中文（zh-TW）** 為主要語言。

> *This is a single-page application built with **Angular 21** that reimagines all 66 books of the Bible as an immersive, scene-by-scene animated experience — complete with dynamic skies, starfields, sun & moon, breeze particles, and shooting stars. The primary UI language is Traditional Chinese.*

---

## 🎬 主要特色 · Features

- 📖 **完整 66 卷聖經** — 每一卷書皆有獨立頁面，依經文分卷分組（律法書、歷史書、詩歌智慧書、先知書、福音書、書信、啟示錄）。
- 🌅 **動態場景** — 天空漸層、星空 canvas、日月運行、白晝微風、夜間流星等即時動畫。
- 🎞️ **逐幕經文** — 每個 `<section class="scene">` 皆搭配 `<app-scene-verse>` 元件呈現經文。
- 🧭 **導覽輔助** — 導覽圓點（nav-dots）、返回按鈕、捲動提示等共用 UI 元件。
- 🏷️ **版本徽章** — 每次部署自動遞增並顯示於頁面右下角的版本號。
- ⚡ **獨立元件與延遲載入** — 使用 Angular standalone components 與 route-level lazy loading。

---

## 🗂️ 專案結構 · Project Structure

```
.
├── src/                              # Angular 原始碼
│   ├── app/
│   │   ├── core/                     # 核心邏輯
│   │   ├── layout/                   # 版面配置
│   │   ├── features/
│   │   │   ├── home/                 # 首頁
│   │   │   ├── wiki/                 # Wiki 頁面
│   │   │   └── books/                # 66 卷聖經（依類別分組）
│   │   │       ├── pentateuch/       # 律法書
│   │   │       ├── historical/       # 歷史書
│   │   │       ├── poetic/           # 詩歌智慧書
│   │   │       ├── major-prophets/   # 大先知書
│   │   │       ├── minor-prophets/   # 小先知書
│   │   │       ├── gospels/          # 四福音
│   │   │       ├── acts/             # 使徒行傳
│   │   │       ├── pauline-epistles/ # 保羅書信
│   │   │       ├── general-epistles/ # 一般書信
│   │   │       └── revelation/       # 啟示錄
│   │   ├── shared/components/        # 共用 UI 元件
│   │   │   ├── scene-verse/          # 經文顯示
│   │   │   ├── scene-heading/        # 場景標題
│   │   │   ├── nav-dots/             # 導覽圓點
│   │   │   ├── back-button/          # 返回按鈕
│   │   │   ├── glass-card/           # 玻璃卡片
│   │   │   ├── scroll-hint/          # 捲動提示
│   │   │   ├── starfield/            # 星空
│   │   │   └── version-badge/        # 版本徽章
│   │   ├── app.routes.ts             # 路由設定
│   │   └── app.ts                    # 根元件
│   └── version.ts                    # APP_VERSION（版本號來源）
├── scripts/
│   └── bump-version.js               # 部署前自動遞增版本號
├── dist/                             # 建置輸出（中介，部署時複製到根目錄）
└── *.js / *.css / *.html             # GitHub Pages 直接服務的正式產物
```

每一卷書皆由三個檔案組成：`<book>.ts`（元件與 scene 定義）、`<book>.html`（版面）、`<book>.scss`（樣式）。

---

## 🛠️ 技術棧 · Tech Stack

| 類別 | 技術 |
| --- | --- |
| 前端框架 | Angular 21（standalone components、SCSS） |
| 語言 | TypeScript 5.9 |
| 測試 | Vitest 4 |
| 格式化 | Prettier |
| 部署 | GitHub Pages（由 repo 根目錄服務，非 `dist/`） |

---

## 🚀 開始使用 · Getting Started

### 需求 · Prerequisites

- [Node.js](https://nodejs.org/)（建議 LTS 版本）
- npm（本專案使用 `npm@11.9.0`）

### 安裝 · Installation

```bash
npm install
```

### 本地開發 · Local Development

```bash
npm start
```

啟動後於瀏覽器開啟 `http://localhost:4200/`，修改原始碼將自動重新載入。

### 測試 · Testing

```bash
npm test
```

---

## 📦 建置與部署 · Build & Deploy

> [!IMPORTANT]
> 本站為 **GitHub Pages** 網站，直接由 repository **根目錄**（`/`）服務。
> 因此每次修改 `src/` 下的檔案後，**務必**執行 `npm run deploy`，將建置產物複製回根目錄。

```bash
npm run deploy
```

此指令會依序執行：

```
node scripts/bump-version.js   # 遞增版本號
&& ng build                    # 正式環境建置
&& cp -a dist/. .              # 將輸出複製到 repo 根目錄供 GitHub Pages 服務
```

### 版本號規則 · Versioning

- 版本來源：`src/version.ts`，匯出 `APP_VERSION` 字串。
- 格式：`Ver.YYYY.MM.DD.N`（`N` 每日重置為 1，同日多次部署則遞增）。
- 由 `scripts/bump-version.js` 在每次建置前自動更新。
- 由 `<app-version-badge>` 元件讀取並固定顯示於每頁右下角。

---

## 🧩 開發慣例 · Conventions

- 每個 `<section class="scene">` 都必須包含一個 `<app-scene-verse>` 元件。
- HTML 中的 Scene ID 必須與對應 `.ts` 檔中宣告的 ID 一致。
- 主要 UI 語言為 **繁體中文**。
- 修改 `src/` 下任何檔案後，於工作結束前務必執行 `npm run deploy`。

---

## 📄 授權 · License

本專案原始碼之授權請參見 repository 設定；第三方套件授權見 [`3rdpartylicenses.txt`](./3rdpartylicenses.txt)。

---

<div align="center">

*「你的話是我腳前的燈，是我路上的光。」— 詩篇 119:105*

Made with ❤️ by [@edisongt](https://github.com/edisongt)

</div>
