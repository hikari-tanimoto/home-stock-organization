import { auth } from "@/auth";
import Link from "next/link";
import { signInAction } from "./auth-action";

function SignInButton({ label }: { label: string }) {
  return (
    <form action={signInAction} className="flex justify-center">
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-medium text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
      >
        ✨ {label} →
      </button>
    </form>
  );
}

function HeroSection() {
  return (
    <section className="py-16 text-center sm:py-24">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
        もう、サイズを<span className="text-blue-600">忘れない</span>
      </h1>
      <p className="mt-4 text-gray-600">
        自宅の収納スペースを記録して、
        <br className="sm:hidden" />
        理想の家具に出会った時も安心
      </p>
      <div className="mt-8">
        <SignInButton label="無料で始める" />
      </div>
    </section>
  );
}

const EMPATHY_ITEMS = [
  {
    emoji: "😖",
    lead: "お店で良い家具を見つけたのに、",
    strong: "「あれ、うちのスペースに入るかな…？」",
  },
  {
    emoji: "📏",
    lead: "前に測ったはずなのに、",
    strong: "メモがどこかに行ってしまった",
  },
  {
    emoji: "🏃",
    lead: "結局家に戻って測り直し…",
    strong: "買い逃してしまった",
  },
];

function EmpathySection() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
      <h2 className="text-center text-2xl font-bold text-gray-900">
        こんな経験、ありませんか？
      </h2>
      <ul className="mx-auto mt-8 max-w-md space-y-6">
        {EMPATHY_ITEMS.map((item) => (
          <li key={item.strong} className="flex items-start gap-4">
            <span className="text-2xl" aria-hidden="true">
              {item.emoji}
            </span>
            <p className="text-sm text-gray-700">
              {item.lead}
              <br />
              <strong className="font-bold text-gray-900">
                {item.strong}
              </strong>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const STEPS = [
  {
    emoji: "📏",
    iconClass: "bg-blue-100 text-blue-600",
    title: "1. 測って記録",
    description:
      "自宅の収納スペースを測って、幅・奥行き・高さを入力するだけ。場所の名前も一緒に保存できます。",
  },
  {
    emoji: "🔍",
    iconClass: "bg-emerald-100 text-emerald-600",
    title: "2. 買い物中にチェック",
    description:
      "気になる家具を見つけたら、そのサイズを入力。どの収納スペースに入るか一瞬で分かります。",
  },
  {
    emoji: "✅",
    iconClass: "bg-purple-100 text-purple-600",
    title: "3. 安心して購入",
    description:
      "サイズの不安がなくなるから、理想の家具を自信を持って購入できます。",
  },
];

function StepsSection() {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-center text-2xl font-bold text-gray-900">
        シンプルな3ステップ
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div
            key={step.title}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <span
              className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${step.iconClass}`}
              aria-hidden="true"
            >
              {step.emoji}
            </span>
            <h3 className="mt-5 font-bold text-gray-900">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const RECOMMEND_ITEMS = [
  "家具を買う時にいつもサイズで悩む",
  "引っ越しや模様替えを予定している",
  "収納スペースを最大限活用したい",
  "オンラインで家具を買うことが多い",
];

function RecommendSection() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white sm:p-12">
      <h2 className="text-center text-2xl font-bold">こんな方におすすめ</h2>
      <ul className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
        {RECOMMEND_ITEMS.map((item) => (
          <li key={item} className="flex items-center gap-2 text-lg">
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="py-16 text-center sm:py-24">
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        今すぐ始めよう
      </h2>
      <p className="mt-3 text-sm text-gray-600">
        無料、Googleアカウントですぐに使えます
      </p>
      <div className="mt-8">
        <SignInButton label="無料で始める" />
      </div>
    </section>
  );
}

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main className="bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
        <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
          <HeroSection />
          <EmpathySection />
          <StepsSection />
          <RecommendSection />
          <FinalCtaSection />
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          📐 収納サイズ管理
        </h1>
        <p className="mt-3 text-gray-600">
          家の収納スペースの寸法を記録して、買い物中に「これ入る？」をサクッと確認。
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/spaces"
            className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600"
          >
            場所一覧を見る
          </Link>
          <Link
            href="/spaces/new"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            場所を追加する
          </Link>
        </div>
      </section>
    </main>
  );
}
