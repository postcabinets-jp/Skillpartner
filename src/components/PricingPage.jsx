import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'スタンダードプラン',
      price: '50,000',
      description: '中小企業向けの標準的なプラン',
      features: [
        'テンプレートライブラリーの利用',
        '基本的な研修コース（30種類）',
        'オンラインサポート',
        'チーム共有（5名まで）',
        '基本的なカスタマイズ機能'
      ]
    },
    {
      name: 'プロフェッショナルプラン',
      price: '100,000',
      description: '大規模な研修展開を行う企業向け',
      features: [
        'すべてのテンプレート利用可能',
        '全研修コース（50種類以上）',
        '24時間サポート',
        'チーム共有（無制限）',
        '高度なカスタマイズ機能',
        'API連携',
        '専任のサクセスマネージャー'
      ],
      featured: true
    },
    {
      name: 'エンタープライズプラン',
      price: 'お問い合わせ',
      description: '大企業・特殊要件向けカスタムプラン',
      features: [
        'カスタムテンプレート開発',
        'オリジナル研修コース作成',
        '専用サポートチーム',
        'システム統合サポート',
        'オンプレミス対応可',
        'SLA保証',
        'カスタムレポーティング'
      ]
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">料金プラン</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ビジネスの規模に合わせて選べる<br />柔軟な料金プラン
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          すべてのプランにリスキリング助成金が適用可能です。<br />
          導入時の費用負担を最大70%軽減できます。
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`ring-1 ${
                plan.featured
                  ? 'bg-gray-900 ring-gray-900'
                  : 'ring-gray-200'
              } rounded-3xl p-8 xl:p-10`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  className={`text-lg font-semibold leading-8 ${
                    plan.featured ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
              </div>
              <p className={`mt-4 text-sm leading-6 ${
                plan.featured ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {plan.description}
              </p>
              <p className={`mt-6 flex items-baseline gap-x-1 ${
                plan.featured ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="text-4xl font-bold tracking-tight">¥{plan.price}</span>
                <span className="text-sm font-semibold leading-6">/月</span>
              </p>
              <Link
                to="/contact"
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.featured
                    ? 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-white'
                    : 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
                }`}
              >
                お問い合わせ
              </Link>
              <ul
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  plan.featured ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckCircle2
                      className={`h-6 w-5 flex-none ${
                        plan.featured ? 'text-white' : 'text-blue-600'
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            カスタマイズについて
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            各プランは企業様のニーズに応じてカスタマイズ可能です。<br />
            特別な要件やご要望がございましたら、お気軽にご相談ください。
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              詳細を相談する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage; 