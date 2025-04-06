import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import StatsSection from './HomePage/StatsSection';
import FeaturesSection from './HomePage/FeaturesSection';
import BenefitsSection from './HomePage/BenefitsSection';
import TemplatesPreview from './HomePage/TemplatesPreview';
import Testimonials from './HomePage/Testimonials';
import PricingSection from './HomePage/PricingSection';
import FAQSection from './HomePage/FAQSection';
import CTASection from './HomePage/CTASection';
import NewsSection from './HomePage/NewsSection';
import ReskillSection from './HomePage/ReskillSection';
import AIFeatureSection from './HomePage/AIFeatureSection';

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* ヒーローセクション */}
      <div className="relative isolate">
        {/* 背景のグラデーション効果 */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        {/* メインコンテンツ */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center">
            {/* 左側：テキストコンテンツ */}
            <div className="max-w-xl lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                プロフェッショナルな
                <span className="text-blue-600">研修コンテンツ</span>
                を、すぐに活用
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                研修一括つくるくんは、企業の人材育成に特化した高品質な研修テンプレートを提供。
                専門家が監修した教材で、効率的かつ効果的な人材育成を実現します。
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-none text-blue-600" />
                  <span className="text-gray-600">専門家監修の高品質コンテンツ</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-none text-blue-600" />
                  <span className="text-gray-600">カスタマイズ可能なテンプレート</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-none text-blue-600" />
                  <span className="text-gray-600">充実したサポート体制</span>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/template-list"
                  className="group relative rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  無料でテンプレートを見る
                  <ArrowRight className="ml-2 -mr-1 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
                >
                  サービスについて <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* 右側：イメージ */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
                  <div className="absolute inset-x-0 top-8 flex justify-center">
                    <div className="w-full max-w-md rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200/50">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">新入社員研修テンプレート</p>
                          <p className="text-sm text-gray-500">ビジネスマナーから業務の基本まで</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 top-32 flex justify-end pr-8">
                    <div className="w-64 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200/50">
                      <div className="space-y-2">
                        <div className="h-2 w-3/4 rounded bg-gray-200"></div>
                        <div className="h-2 w-1/2 rounded bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-8 flex justify-start pl-8">
                    <div className="w-56 rounded-xl bg-blue-600 p-4 shadow-xl">
                      <div className="space-y-2">
                        <div className="h-2 w-3/4 rounded bg-blue-400"></div>
                        <div className="h-2 w-1/2 rounded bg-blue-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* デコレーション要素 */}
              <div className="absolute -bottom-6 -right-6 aspect-square w-24 rounded-2xl bg-blue-600/10 backdrop-blur-xl"></div>
              <div className="absolute -top-6 -left-6 aspect-square w-24 rounded-2xl bg-blue-600/10 backdrop-blur-xl"></div>
            </div>
          </div>
        </div>

        {/* 背景のグラデーション効果（下部） */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <StatsSection />
      <FeaturesSection />
      <AIFeatureSection />
      <BenefitsSection />
      <ReskillSection />
      <TemplatesPreview />
      <Testimonials />
      <PricingSection />
      <NewsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default HomePage; 