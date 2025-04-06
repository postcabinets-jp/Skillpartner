import React from 'react';
import { Clock, Target, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    name: '時間の大幅削減',
    description: '研修資料の作成時間を最大80%削減。テンプレートを活用することで、効率的な研修準備が可能です。',
    icon: Clock,
    stats: '80%削減',
  },
  {
    name: '品質の標準化',
    description: '専門家が監修したテンプレートを使用することで、高品質な研修コンテンツを簡単に作成できます。',
    icon: Target,
    stats: '100%監修済',
  },
  {
    name: 'チーム全体での活用',
    description: 'チームメンバー全員がテンプレートを共有・活用することで、組織全体の研修品質を向上できます。',
    icon: Users,
    stats: '無制限共有',
  },
  {
    name: '継続的な改善',
    description: '研修効果の測定と分析機能により、継続的な改善が可能。より効果的な人材育成を実現します。',
    icon: TrendingUp,
    stats: 'データ分析',
  },
];

const BenefitsSection = () => {
  return (
    <div className="relative isolate bg-gradient-to-b from-blue-50/60 to-white py-24 sm:py-32">
      {/* デコレーション要素 */}
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">導入メリット</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            研修一括つくるくんで実現できること
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            研修テンプレートを活用することで、効率的かつ効果的な人材育成を実現します。
            導入企業様からは、以下のような効果が報告されています。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <benefit.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col">
                  <p className="text-lg font-semibold leading-7 text-gray-900">{benefit.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{benefit.description}</p>
                  <p className="mt-4 text-2xl font-bold text-blue-600">{benefit.stats}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 