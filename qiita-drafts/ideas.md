# Qiita 記事ネタ一覧

学習中に発見した「これ記事になるな」というネタをストック。

ステータス凡例:
- 🆕 `idea` - ネタとしてストック中
- ✏️ `in-progress` - 執筆中
- ✅ `published` - 公開済み

---

## 📚 Next.js App Router

### 「Next.js App Router で `src/app/` に置いてはいけないファイル」
- **ステータス**: 🆕 idea
- **元ネタ**: 2026-04-24 学習中に発生した Turbopack panic エラー
- **想定読者**: Next.js 14/15/16 を学習中の人
- **要点**:
  - `src/app/lib/schemas/` のような配置で Turbopack エラー
  - `src/app/` は予約ディレクトリ（ルーティング専用）
  - 正しい配置: `src/lib/`, `src/types/`, `src/components/`
- **刺さり度**: ⭐⭐⭐（実害ある罠、SEO 強い）

### 「Next.js 15+ の async params に対応する」
- **ステータス**: 🆕 idea
- **元ネタ**: Step 1-5 詳細ページ実装
- **想定読者**: Next.js 14 から 15/16 にアップグレードした人
- **要点**:
  - `params: { id: string }` → `params: Promise<{ id: string }>`
  - `await params` が必要
- **刺さり度**: ⭐⭐⭐（移行時に必ず引っかかる）

---

## 📚 React / Server Component

### 「Server Component と Hydration の関係を味噌汁で説明する」
- **ステータス**: ✏️ in-progress（2026-04-24 開始）
- **想定読者**: React/Next.js 学習者
- **要点**:
  - Hydration = HTML に JS を後付けする工程
  - 味噌汁の比喩（乾燥具材 + お湯）
  - Server Component が速い理由
  - Hydration Mismatch エラー
- **刺さり度**: ⭐⭐（比喩が面白い、概念理解の入口）

### 「Container/Presentational パターンを Next.js App Router で実装する」
- **ステータス**: 🆕 idea
- **元ネタ**: FormField コンポーネントの設計
- **要点**:
  - ロジック（Container）と UI（Presentational）の分離
  - PropsWithChildren で children を受け取る
  - Server Component と組み合わせる時の注意点
- **刺さり度**: ⭐⭐

---

## 📚 Zod / TypeScript

### 「Zod + React Hook Form で型もバリデーションも一元管理する」
- **ステータス**: 🆕 idea
- **元ネタ**: Step 1-2 の SSOT 化
- **想定読者**: フォーム実装で型とバリデーションが二重管理になってる人
- **要点**:
  - SSOT の考え方
  - `z.infer<typeof schema>` で型導出
  - `.extend()` でスキーマ継承
  - フォーム用 / 保存済み用のスキーマ分離
- **刺さり度**: ⭐⭐⭐（実用的、長く読まれる）

### 「TypeScript の `: Space[]` と `satisfies Space[]` の使い分け」
- **ステータス**: 🆕 idea
- **元ネタ**: dummy-spaces.ts の型注釈
- **要点**:
  - 型アノテーション vs satisfies 演算子
  - リテラル型を保持したい場合は satisfies
  - 使い分け基準
- **刺さり度**: ⭐⭐

---

## 📚 React Hook Form

### 「React Hook Form の `register` `handleSubmit` `formState.errors` を完全理解する」
- **ステータス**: 🆕 idea
- **元ネタ**: Step 1-4 で深掘り解説
- **想定読者**: RHF を使い始めた人
- **要点**:
  - register の内部動作（ref で uncontrolled）
  - handleSubmit のバリデーション → onSubmit フロー
  - errors の構造と表示パターン
- **刺さり度**: ⭐⭐⭐

### 「React Hook Form で `type='number'` の値が文字列になる罠」
- **ステータス**: 🆕 idea
- **元ネタ**: Step 1-4 で遭遇予定の罠
- **要点**:
  - `<input type="number">` の値は string
  - `valueAsNumber: true` で number に変換
  - `setValueAs` でカスタム変換
- **刺さり度**: ⭐⭐⭐（短くて刺さる）

---

## 📚 CSS 設計

### 「Tailwind の `space-y-*` で考える CSS マージン設計」
- **ステータス**: 🆕 idea
- **元ネタ**: マージン方針の議論
- **想定読者**: CSS 設計に興味がある人
- **要点**:
  - mb 派 vs mt 派
  - `space-y-*` は mt 派思想の自動化
  - Owl Selector (`> * + *`) の話
- **刺さり度**: ⭐⭐

### 「アクセシビリティを意識したフォーム実装 - WCAG 観点でのチェック項目」
- **ステータス**: 🆕 idea
- **元ネタ**: a11y チェックポイント
- **要点**:
  - aria-required / aria-invalid / aria-describedby
  - role="alert" の使い所
  - inputMode でモバイル最適化
- **刺さり度**: ⭐⭐⭐（意外と書かれてない）

---

## 📊 ステータス集計

| ステータス | 数 |
|---|---|
| 🆕 idea | 9 |
| ✏️ in-progress | 1 |
| ✅ published | 0 |

---

## 💡 ネタ収集メモ

学習中に「これ詰まったな」「これ気づき！」と思ったら、まずここに**1行メモ**から追加してOK。後で書ける形に整える。

### 一時メモ置き場
- （ここに気軽に追加）
