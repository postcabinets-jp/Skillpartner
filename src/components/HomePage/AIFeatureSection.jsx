import React from 'react';
import { 
  Target,
  Sparkles,
  Brain,
  ListChecks,
  Lightbulb,
  BarChart3,
  Workflow
} from 'lucide-react';

const AIFeatureSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* 背景のグラデーション */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-900 to-gray-900"></div>
      
      {/* デコレーション要素 */}
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/10 shadow-xl shadow-blue-600/10 ring-1 ring-white/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-10 w-10 text-blue-400 mr-3" />
              <Brain className="h-10 w-10 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI一括講座作成機能
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              目標を入力するだけで、最適な研修カリキュラムを自動生成。<br />
              ゴールから逆算して必要なプロセスとカリキュラムを設計します。
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 p-8 text-center ring-1 ring-white/10 hover:bg-white/10 transition-colors duration-300">
              <Target className="h-10 w-10 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">ゴール設定</h3>
              <p className="text-gray-300">達成したい目標を入力するだけで、AIが最適な学習パスを設計。目標達成に必要なスキルと知識を自動で特定します。</p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-white/5 p-8 text-center ring-1 ring-white/10 hover:bg-white/10 transition-colors duration-300">
              <Workflow className="h-10 w-10 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">プロセス最適化</h3>
              <p className="text-gray-300">目標達成に必要なプロセスを自動で分析。段階的な学習ステップと最適なカリキュラムを生成します。</p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-white/5 p-8 text-center ring-1 ring-white/10 hover:bg-white/10 transition-colors duration-300">
              <Brain className="h-10 w-10 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">AI自動生成</h3>
              <p className="text-gray-300">各プロセスに最適な教材とコンテンツを自動で選定。企業の特性に合わせてカスタマイズします。</p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <Lightbulb className="h-8 w-8 text-blue-400" />
              <div>
                <h4 className="text-sm font-semibold text-white">スマート目標設定</h4>
                <p className="mt-1 text-sm text-gray-300">具体的で測定可能な目標に自動変換</p>
              </div>
            </div>
            <div className="flex items-center gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <ListChecks className="h-8 w-8 text-blue-400" />
              <div>
                <h4 className="text-sm font-semibold text-white">カリキュラム自動構築</h4>
                <p className="mt-1 text-sm text-gray-300">必要なスキルを段階的に習得</p>
              </div>
            </div>
            <div className="flex items-center gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <BarChart3 className="h-8 w-8 text-blue-400" />
              <div>
                <h4 className="text-sm font-semibold text-white">進捗管理機能</h4>
                <p className="mt-1 text-sm text-gray-300">目標達成までの進捗を可視化</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeatureSection; 