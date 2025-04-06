import React from 'react';
import { ArrowRight, CheckCircle, Book, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* 背景デザイン */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-blue-100 to-transparent opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* メインコンテンツ */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                プロフェッショナルな研修コンテンツを、
              </span>
              <span className="block text-4xl tracking-tight font-extrabold text-blue-600 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mt-2">
                すぐに活用
              </span>
            </h1>
            <p className="mt-6 text-base text-gray-500 sm:mt-8 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0">
              豊富なテンプレートから選んで、すぐに使える研修プログラムを作成。
              教育の質を保ちながら、準備時間を大幅に削減できます。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                無料で始める
              </Link>
              <Link
                to="/template-list"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                すべてのテンプレートを見る <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* 特徴リスト */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">主な特徴</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-base text-gray-700">
                    豊富なテンプレートから選べる
                  </span>
                </li>
                <li className="flex items-start">
                  <Book className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-3 text-base text-gray-700">
                    すぐに使える研修プログラム
                  </span>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-indigo-500 flex-shrink-0" />
                  <span className="ml-3 text-base text-gray-700">
                    チーム全体で共有可能
                  </span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-purple-500 flex-shrink-0" />
                  <span className="ml-3 text-base text-gray-700">
                    準備時間を大幅削減
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 