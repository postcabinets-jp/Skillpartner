import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'all', name: 'すべて' },
  { id: 'new-employee', name: '新入社員研修' },
  { id: 'leadership', name: 'リーダーシップ' },
  { id: 'sales', name: '営業スキル' },
  { id: 'marketing', name: 'マーケティング' },
];

const templates = [
  {
    id: 1,
    title: '新入社員基礎研修パック',
    category: 'new-employee',
    description: 'ビジネスマナーから業務の基本まで、新入社員に必要な研修をカバー',
    rating: 4.8,
    reviews: 128,
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    id: 2,
    title: 'リーダーシップ基礎講座',
    category: 'leadership',
    description: 'チームマネジメントの基本とリーダーシップスキルの向上を目指す',
    rating: 4.7,
    reviews: 95,
    imageUrl: 'https://placehold.co/600x400',
  },
  {
    id: 3,
    title: '営業力強化トレーニング',
    category: 'sales',
    description: '商談スキルからクロージングまで、実践的な営業スキルを習得',
    rating: 4.9,
    reviews: 156,
    imageUrl: 'https://placehold.co/600x400',
  },
  // 他のテンプレートをここに追加
];

const TemplateListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">研修テンプレート一覧</h1>
            <p className="mt-2 text-lg text-gray-700">
              目的に合わせて最適な研修テンプレートをお選びください
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          {/* 検索バー */}
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              placeholder="テンプレートを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* フィルター */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-md border-0 py-3 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* テンプレート一覧 */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={template.imageUrl}
                  alt={template.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    {categories.find(c => c.id === template.category)?.name}
                  </p>
                  <div className="mt-2">
                    <Link
                      to={`/template/${template.id}`}
                      className="group"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{template.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{template.description}</p>
                    </Link>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(template.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-200'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 15.585l-6.327 3.323 1.209-7.037L.172 7.207l7.046-1.024L10 0l2.782 6.183 7.046 1.024-4.71 4.664 1.209 7.037L10 15.585z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-500">
                      {template.rating} ({template.reviews}件のレビュー)
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      to={`/template/${template.id}`}
                      className="inline-flex items-center gap-x-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      詳細を見る
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
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