import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Building2, Coins, FileCheck } from 'lucide-react';

const ReskillSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            リスキリング助成金対応講座
            <span className="block text-blue-600 mt-2">「スキルプラスforBiz」</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            企業の人材育成を支援する助成金制度に対応した、高品質な研修プログラムを提供します。
            従業員のスキルアップと企業の競争力向上を、効率的かつ経済的にサポートします。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* 特徴1: 助成金対応 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/70">
              <div className="flex items-center">
                <Coins className="h-8 w-8 text-blue-600" />
                <h3 className="ml-4 text-xl font-semibold text-gray-900">助成金対応プログラム</h3>
              </div>
              <p className="mt-4 text-gray-600">
                リスキリング助成金制度に完全対応した研修プログラムを提供。
                最大70%の助成金を活用し、効率的な人材育成を実現します。
              </p>
            </div>

            {/* 特徴2: 専門的なカリキュラム */}
            <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/70">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <h3 className="ml-4 text-xl font-semibold text-gray-900">専門的なカリキュラム</h3>
              </div>
              <p className="mt-4 text-gray-600">
                DX人材育成、マネジメントスキル、専門職種別研修など、
                現代のビジネスニーズに応じた幅広いプログラムをご用意。
              </p>
            </div>

            {/* 特徴3: 企業規模対応 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/70">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-blue-600" />
                <h3 className="ml-4 text-xl font-semibold text-gray-900">企業規模別対応</h3>
              </div>
              <p className="mt-4 text-gray-600">
                中小企業から大企業まで、企業規模に応じた
                カスタマイズ可能なプログラムと料金体系を提供します。
              </p>
            </div>

            {/* 特徴4: 申請サポート */}
            <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/70">
              <div className="flex items-center">
                <FileCheck className="h-8 w-8 text-blue-600" />
                <h3 className="ml-4 text-xl font-semibold text-gray-900">申請サポート完備</h3>
              </div>
              <p className="mt-4 text-gray-600">
                助成金申請に必要な書類作成から申請手続きまで、
                経験豊富なスタッフが丁寧にサポートします。
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/reskill"
              className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              リスキリング助成金講座の詳細を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReskillSection; 