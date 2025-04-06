import React from 'react';
import { BookOpen, FileSpreadsheet, Settings } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: '研修コース数',
    value: '30+',
    description: '基本的なビジネススキルから専門職向けまで',
    icon: BookOpen,
  },
  {
    id: 2,
    name: 'テンプレート数',
    value: '100+',
    description: '様々なシーンに対応した豊富なバリエーション',
    icon: FileSpreadsheet,
  },
  {
    id: 3,
    name: 'カスタマイズ可能',
    value: '100%',
    description: '企業独自のニーズに合わせた調整が可能',
    icon: Settings,
  },
];

const StatsSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* 背景のグラデーション */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900"></div>
      
      {/* ヒーローコピー */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-12">
        <p className="text-white text-opacity-[0.07] text-7xl font-bold tracking-wider">
          SMART TRAINING
        </p>
        <p className="text-white text-opacity-[0.07] text-5xl font-bold mt-2 tracking-wider">
          次世代の研修作成を実現
        </p>
      </div>
      
      {/* デコレーション要素 */}
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/10 shadow-xl shadow-blue-600/10 ring-1 ring-white/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              充実のテンプレートで、すぐに始められる
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              研修に必要なすべてのコンテンツを用意。カスタマイズ可能なテンプレートで、あなたの企業に最適な研修プログラムを構築できます。
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="relative overflow-hidden rounded-lg bg-white/5 px-6 py-8 text-center shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-y-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-t before:from-transparent before:via-white/10 before:to-transparent hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="mt-2">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {stat.value}
                  </span>
                </dd>
                <p className="mt-3 text-sm text-gray-300">{stat.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default StatsSection; 