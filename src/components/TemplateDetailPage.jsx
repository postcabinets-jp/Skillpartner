import React, { useState } from 'react';
import { ArrowLeft, Download, Star, Clock, Users, CheckCircle, Eye, ChevronDown, Book } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const TemplateDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (id) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // サンプルデータ
  const template = {
    id: parseInt(id),
    title: "デジタルマーケティング入門",
    description: "デジタルマーケティングの基礎から実践までを学ぶ包括的なプログラム",
    longDescription: "変化の激しいデジタルマーケティング領域において、最新のトレンドと実践的なスキルを習得するための体系的なプログラムです。SNSマーケティング、コンテンツマーケティング、SEO、広告運用など、幅広いデジタルマーケティングの手法を網羅しています。",
    category: "マーケティング",
    rating: 4.9,
    views: 1560,
    downloads: 780,
    duration: "10時間（5週間推奨）",
    level: "初級〜中級",
    targetAudience: "マーケティング担当者、営業担当者、経営層",
    lastUpdated: "2025年2月15日",
    author: "アドネス株式会社 マーケティング教育チーム",
    tags: ["デジタルマーケティング", "SNS運用", "コンテンツ作成", "広告運用", "データ分析"],
    benefits: [
      "最新のデジタルマーケティングトレンドを理解できる",
      "実践的なマーケティングスキルを体系的に習得できる",
      "すぐに業務に活用できる具体的なノウハウを学べる" 
    ],
    modules: [
      {
        id: 1,
        title: "デジタルマーケティング概論",
        description: "デジタルマーケティングの基礎と全体像を理解する",
        duration: "90分",
        units: [
          { title: "デジタルマーケティングの定義と重要性", duration: "20分" },
          { title: "主要なデジタルマーケティングチャネル", duration: "25分" },
          { title: "マーケティングファネルとカスタマージャーニー", duration: "25分" },
          { title: "デジタルマーケティング戦略の立て方", duration: "20分" }
        ]
      },
      {
        id: 2,
        title: "ウェブサイト最適化とSEO",
        description: "ウェブサイトの最適化とSEO対策の基本を学ぶ",
        duration: "120分",
        units: [
          { title: "効果的なウェブサイト設計の原則", duration: "25分" },
          { title: "SEOの基礎とキーワード戦略", duration: "30分" },
          { title: "コンテンツSEOの実践方法", duration: "35分" },
          { title: "技術的SEOの基本要素", duration: "30分" }
        ]
      },
      {
        id: 3,
        title: "SNSマーケティング実践",
        description: "主要SNSプラットフォームでの効果的なマーケティング手法",
        duration: "150分",
        units: [
          { title: "各SNSプラットフォームの特性と活用法", duration: "35分" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <button 
              className="flex items-center text-gray-600 hover:text-gray-900"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              <span>戻る</span>
            </button>
            <div className="ml-4">
              <h1 className="text-xl font-bold text-gray-900">研修一括つくるくん</h1>
              <p className="text-sm text-gray-600">テンプレートライブラリ</p>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* テンプレートヘッダー */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-green-100 py-8 px-8">
            <span className="inline-block bg-white text-green-600 text-xs font-bold px-2 py-1 rounded">
              {template.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-3">{template.title}</h1>
            <p className="text-gray-700 text-lg mb-4">{template.description}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="ml-1 font-medium">{template.rating}/5.0</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-5 h-5 text-gray-500" />
                <span className="ml-1">{template.views.toLocaleString()}閲覧</span>
              </div>
              <div className="flex items-center">
                <Download className="w-5 h-5 text-gray-500" />
                <span className="ml-1">{template.downloads.toLocaleString()}ダウンロード</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="ml-1">{template.duration}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {template.tags.map((tag, index) => (
                <span key={index} className="border border-green-200 px-3 py-1 rounded-full text-sm text-green-600">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-6">{template.longDescription}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex-1 flex justify-center items-center">
                <Download className="w-5 h-5 mr-2" />
                テンプレートをダウンロード
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium flex-1 flex justify-center items-center">
                カスタマイズして利用する
              </button>
            </div>
          </div>
        </div>

        {/* タブナビゲーション */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex overflow-x-auto">
            <button 
              className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === 'overview' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              概要
            </button>
            <button 
              className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === 'curriculum' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('curriculum')}
            >
              カリキュラム内容
            </button>
            <button 
              className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === 'materials' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('materials')}
            >
              教材と資料
            </button>
          </nav>
        </div>

        {/* タブコンテンツ */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">テンプレート概要</h2>
            <p className="text-gray-700 mb-6">{template.longDescription}</p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">対象者</h3>
            <div className="flex items-center text-gray-700 mb-6">
              <Users className="w-5 h-5 mr-2 text-blue-500" />
              <span>{template.targetAudience}</span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">期待される効果</h3>
            <ul className="space-y-2 mb-6">
              {template.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-gray-200 pt-4 mt-6">
              <div className="flex justify-between text-sm text-gray-500">
                <span>最終更新日: {template.lastUpdated}</span>
                <span>作成: {template.author}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'curriculum' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">カリキュラム内容</h2>
            
            <div className="space-y-4">
              {template.modules.map((module, index) => (
                <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className={`p-4 cursor-pointer ${expandedModules[module.id] ? 'bg-green-100' : 'bg-gray-50'}`}
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">
                        {index + 1}. {module.title}
                      </h3>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-3">{module.duration}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            expandedModules[module.id] ? 'transform rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                  </div>
                  
                  {expandedModules[module.id] && (
                    <div className="bg-white p-4 border-t border-gray-200">
                      <ul className="space-y-3">
                        {module.units.map((unit, idx) => (
                          <li key={idx} className="flex justify-between">
                            <div className="flex items-start">
                              <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-700 mr-2 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="text-gray-700">{unit.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">{unit.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <h3 className="font-semibold text-gray-800 flex items-center mb-2">
                <Book className="w-5 h-5 mr-2 text-blue-600" />
                学習方法
              </h3>
              <p className="text-gray-700">
                この研修は、動画講義、実践的なワークショップ、ケーススタディ、自己評価テストを組み合わせた統合的な学習体験を提供します。
              </p>
            </div>
          </div>
        )}

        {activeTab === 'materials' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">教材と学習資料</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">含まれる教材</h3>
              <ul className="space-y-3">
                <li className="flex items-start p-3 border border-gray-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">講義スライド資料（PDF）</span>
                </li>
                <li className="flex items-start p-3 border border-gray-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">実践ワークシート</span>
                </li>
                <li className="flex items-start p-3 border border-gray-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">チェックリストとテンプレート集</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">教材サンプル</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">講義スライドサンプル</h4>
                  <div className="bg-gray-100 h-40 rounded flex items-center justify-center">
                    <span className="text-gray-500">プレビュー画像</span>
                  </div>
                  <button className="mt-3 text-blue-600 flex items-center text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    プレビューを見る
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">ワークシートサンプル</h4>
                  <div className="bg-gray-100 h-40 rounded flex items-center justify-center">
                    <span className="text-gray-500">プレビュー画像</span>
                  </div>
                  <button className="mt-3 text-blue-600 flex items-center text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    プレビューを見る
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* フッターCTA */}
      <div className="bg-blue-600 py-12 px-4 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">ビジネスニーズに合わせた研修を作成しませんか？</h2>
          <p className="text-blue-100 mb-6">アドネス株式会社の「研修一括つくるくん」で、簡単にカスタム研修が作成できます</p>
          <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-blue-50">
            お問い合わせ
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetailPage; 