---
status: in-progress
target: React/Next.js 学習者、Server Component と Client Component の違いがピンとこない人
tags: React, Next.js, ServerComponent, Hydration, 初心者向け
published_url:
---

# Hydration って結局なに？味噌汁の比喩で理解する Server/Client Component

## TL;DR（先に結論）

- **Hydration** = サーバーで作った HTML に、ブラウザで JS を後付けして「操作できる状態」にする工程
- イメージは **インスタント味噌汁にお湯を注ぐ作業**
- **Server Component** は最初から「お湯不要」なので、Hydration のコストが発生しない＝速い

---

## 🤔 きっかけ：説明できない自分に気づいた

Next.js の Server Component を学んでて、「Hydration が不要だから速い」みたいな説明をよく見る。
でも、「**Hydration ってそもそも何やっけ？**」と聞かれた瞬間、フワッとしてた。

調べ直して、自分の中で腑に落ちた比喩を共有します。

---

## 💧 Hydration の語源

英語の `hydrate` = 「水を与える」。

つまり、**乾いた HTML に JS という水を注いで動かす**、というイメージ。

---

## 🍜 インスタント味噌汁で例えると

インスタント味噌汁を思い浮かべてみてください。

```
[乾燥状態]            [水を注ぐ]           [完成]
中身は揃ってる    →   お湯をかける    →    飲める味噌汁
（HTML だけ）         （JS 実行）           （操作可能）
```

| 段階 | 味噌汁 | Web ページ |
|---|---|---|
| ① 中身 | 乾燥した具材 | サーバーで作った HTML |
| ② お湯 | お湯を注ぐ | JS バンドルが届く |
| ③ 反応 | 具材がほぐれる | イベントハンドラが要素に紐づく |
| ④ 完成 | 飲める | 操作できる |

具材だけ見せられても食えへんし、HTML だけあってもボタンは押せへん。
**お湯（= JS）が要る**わけです。

---

## 📊 ブラウザでの実際の流れ

```
① サーバーで HTML 生成
   <button>クリック</button>     ← 見た目はある
                  ↓
② ブラウザに HTML 届く
   表示される（速い！）
   でも... ボタン押しても何も起きない 😢
                  ↓
③ JS バンドルがダウンロード
                  ↓
④ Hydration 開始
   - React が HTML を「自分のもの」として認識
   - イベントハンドラ（onClick）を要素に紐付け
                  ↓
⑤ 完成
   ボタン押すと反応する 🎉
```

ここで重要なのは、**②と④の間に「見えてるけど操作できない時間」がある**こと。
これが Web Vitals でいう **TTI（Time To Interactive）** の遅れにつながります。

---

## 🎯 Server Component が「速い」理由

ここまで理解すると、Server Component の利点が見えてきます。

### Client Component の場合
```
HTML 表示 → JS ダウンロード → Hydration → 操作可能
（Hydration のコストが乗る）
```

### Server Component の場合
```
HTML 表示 → そのまま完成！
（Hydration 不要、JS そのものがブラウザに来ない）
```

ポイントは：

- Server Component は **JS バンドルに含まれない**
- つまり **ブラウザは JS を実行しない**
- だから **Hydration も発生しない**

これが「Server Component は速い」と言われる構造です。

---

## ⚠️ Hydration Mismatch エラー

開発中に見るかもしれないエラー：

```
Error: Hydration failed because the initial UI does not match
what was rendered on the server.
```

これは：

- **サーバーで生成した HTML**
- **ブラウザで JS が組み立てた結果**

が**一致しないと出る**エラー。

### よくある原因

| 原因 | 例 |
|---|---|
| サーバーとブラウザで値が変わる関数 | `Date.now()`, `Math.random()` |
| ブラウザ専用 API の分岐 | `typeof window !== "undefined"` |
| ユーザーロケールに依存する処理 | 日付フォーマット、通貨表示 |

### 対処の基本

- **固定値を使う**（ダミーデータでは `new Date("2026-04-01")` のような固定値）
- **クライアント側の処理は `useEffect` 内で**
- **どうしても必要なら `suppressHydrationWarning`**（最終手段）

---

## 🧠 一言で覚える

> **「サーバーで作った HTML を、ブラウザで React が引き取る儀式」** = Hydration

味噌汁の比喩でいうと：

> **「具材を作る人（サーバー）と、お湯を注ぐ人（ブラウザ）が違う」**

---

## 📚 用語整理

| 用語 | 意味 |
|---|---|
| **SSR (Server-Side Rendering)** | サーバーで HTML を生成すること |
| **CSR (Client-Side Rendering)** | ブラウザで HTML を組み立てること |
| **Hydration** | SSR で作った HTML に JS を後付けする工程 |
| **TTI (Time To Interactive)** | 操作可能になるまでの時間 |
| **Server Component** | サーバーでのみ実行され、JS バンドルに含まれない（Hydration 不要） |
| **Client Component** | ブラウザでも実行され、Hydration が必要 |

---

## まとめ

- Hydration は **HTML に JS を後付けする工程**
- 味噌汁にお湯を注ぐイメージで理解しやすい
- Server Component は最初から「動かす必要のない静的なもの」として届くので Hydration 不要
- Hydration Mismatch エラーは「サーバーとブラウザで結果が変わる処理」が原因

これで Server/Client Component の使い分けの基準がちょっと明確になったかも？

「**動かす必要があるか？**」が判断基準。
動かさんでええなら Server Component、動かすなら Client Component で `"use client"` を付ける。

---

## 参考

- [React Docs - Hydration](https://react.dev/reference/react-dom/client/hydrateRoot)
- [Next.js Docs - Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
