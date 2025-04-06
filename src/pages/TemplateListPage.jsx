import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Search, ArrowLeft } from 'lucide-react';

const categories = ['すべて', 'リーダーシップ', '営業スキル', 'マーケティング', 'デジタルスキル'];

const templates = [
  {
    id: 1,
    title: "新任管理者トレーニング",
    description: "新しく管理職に就いた社員のための基本的なマネジメントスキルを習得するコース",
    category: "リーダーシップ",
    views: 1250,
    rating: 4.8,
    recommended: true
  },
  {
    id: 2,
    title: "デジタルマーケティング入門",
    description: "デジタルマーケティングの基礎から実践までを学ぶ包括的なプログラム",
    category: "マーケティング",
    views: 1560,
    rating: 4.9,
    recommended: true
  },
  {
    id: 3,
    title: "顧客折衝力向上プログラム",
    description: "顧客との効果的なコミュニケーションと交渉スキルを磨くための実践的なカリキュラム",
    category: "営業スキル",
    views: 980,
    rating: 4.7,
    recommended: false
  }
];

const TemplateListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'すべて' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link 
              to="/"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              <span>トップページに戻る</span>
            </Link>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-900">テンプレート一覧</h1>
            <p className="text-sm text-gray-600">豊富なテンプレートから、最適な研修プログラムを見つけましょう。</p>
          </div>
        </div>
      </div>

      {/* 検索バー */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="テンプレートを検索..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* カテゴリーフィルター */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-2 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* テンプレート一覧 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                {template.recommended && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                    おすすめ
                  </span>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {template.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    {template.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    {template.views}閲覧
                  </span>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <Link
                    to={`/template/${template.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateListPage; 