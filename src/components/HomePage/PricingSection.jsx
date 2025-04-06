import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'スタンダード',
    description: '小規模チーム向けの基本プラン',
    price: '¥3,000',
    period: '/月',
    features: [
      'テンプレートの閲覧とダウンロード',
      '基本的なカスタマイズ機能',
      '最大5名までのユーザー',
      'メールサポート',
      '月間10テンプレートまで利用可能'
    ],
    popular: false
  },
  {
    name: 'プロフェッショナル',
    description: '中規模チーム向けの推奨プラン',
    price: '¥8,000',
    period: '/月',
    features: [
      'スタンダードプランの全機能',
      '高度なカスタマイズ機能',
      '最大20名までのユーザー',
      '優先メールサポート',
      '無制限のテンプレート利用',
      '進捗管理機能',
      'チーム共有機能'
    ],
    popular: true
  },
  {
    name: 'エンタープライズ',
    description: '大規模組織向けのカスタムプラン',
    price: 'カスタム',
    period: '',
    features: [
      'プロフェッショナルプランの全機能',
      '無制限のユーザー数',
      '専任サポート',
      'カスタムテンプレート作成',
      'APIアクセス',
      'SSO対応',
      'オンプレミス対応'
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">料金プラン</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            最適なプランをお選びください
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            チームの規模やニーズに合わせて、最適なプランをお選びいただけます。
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                  {plan.popular && (
                    <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                      おすすめ
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">{plan.period}</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.popular
                    ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600'
                    : 'bg-white text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300'
                }`}
              >
                {plan.name === 'エンタープライズ' ? 'お問い合わせ' : '無料で始める'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection; 