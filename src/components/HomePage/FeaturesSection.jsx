import React from 'react';
import { Library, Clock, Users, Share2, Palette, BarChart } from 'lucide-react';

const features = [
  {
    name: '豊富なテンプレート',
    description: '様々な業界・職種に対応した研修テンプレートを提供。新入社員研修から専門スキル研修まで幅広くカバー。',
    icon: Library,
  },
  {
    name: '時間の効率化',
    description: '研修プログラムの準備時間を大幅に削減。テンプレートをカスタマイズするだけで、すぐに研修を開始できます。',
    icon: Clock,
  },
  {
    name: 'チーム共有',
    description: '作成した研修プログラムをチーム全体で共有。教育の質を統一し、効率的な人材育成を実現。',
    icon: Share2,
  },
  {
    name: 'カスタマイズ機能',
    description: 'テンプレートを自由に編集・カスタマイズ。自社の文化やニーズに合わせた研修プログラムを作成。',
    icon: Palette,
  },
  {
    name: '進捗管理',
    description: '研修の進捗状況をリアルタイムで確認。受講者の理解度や達成度を把握し、効果的なフォローアップが可能。',
    icon: BarChart,
  },
  {
    name: 'チーム全体での活用',
    description: 'チームメンバー全員がテンプレートを共有・活用することで、組織全体の研修品質を向上。',
    icon: Users,
  },
];

const FeaturesSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      {/* デコレーション要素 */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 top-0 -z-10 h-24 w-full bg-gradient-to-b from-white"></div>
      <div className="absolute left-0 bottom-0 -z-10 h-24 w-full bg-gradient-to-t from-white"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">効率的な研修管理</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            研修管理を簡単に、効果的に
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            豊富なテンプレートと使いやすい機能で、研修の準備から実施、管理までを効率化します。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative backdrop-blur-sm bg-white/30 rounded-2xl p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.05)] transform transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-50 to-blue-50/50 opacity-0 transition group-hover:opacity-100 rounded-2xl"></div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <dt className="mt-4 font-semibold leading-7 text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 leading-7 text-gray-600">{feature.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 