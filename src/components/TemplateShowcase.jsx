import React, { useState } from 'react';
import { Search, Briefcase, Users, BookOpen, ChevronRight, Filter, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const TemplateCard = ({ template }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <div className={`h-40 w-full ${template.color} flex items-center justify-center`}>
          {template.icon}
        </div>
        {template.featured && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded text-gray-800">
            おすすめ
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-gray-800">{template.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{template.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Eye size={14} />
            {template.views}閲覧
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
            {template.category}
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400" fill="#FACC15" />
            <span className="text-sm ml-1">{template.rating}</span>
          </div>
          <Link 
            to={`/template/${template.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded-full flex items-center"
          >
            詳細を見る
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const TemplateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'leadership', name: 'リーダーシップ' },
    { id: 'sales', name: '営業スキル' },
    { id: 'marketing', name: 'マーケティング' },
    { id: 'digital', name: 'デジタルスキル' },
    { id: 'communication', name: 'コミュニケーション' }
  ];

  const templates = [
    {
      id: 1,
      title: "新任管理者トレーニング",
      description: "新しく管理職に就いた社員のための基本的なマネジメントスキルを習得するコース",
      category: "リーダーシップ",
      color: "bg-indigo-100",
      icon: <Briefcase className="w-16 h-16 text-indigo-600" />,
      rating: 4.8,
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: "顧客折衝力向上プログラム",
      description: "顧客との効果的なコミュニケーションと交渉スキルを磨くための実践的なカリキュラム",
      category: "営業スキル",
      color: "bg-blue-100",
      icon: <Users className="w-16 h-16 text-blue-600" />,
      rating: 4.7,
      views: 980,
      featured: false
    },
    {
      id: 3,
      title: "デジタルマーケティング入門",
      description: "デジタルマーケティングの基礎から実践までを学ぶ包括的なプログラム",
      category: "マーケティング",
      color: "bg-green-100",
      icon: <BookOpen className="w-16 h-16 text-green-600" />,
      rating: 4.9,
      views: 1560,
      featured: true
    },
    {
      id: 4,
      title: "ビジネスコミュニケーション基礎",
      description: "職場での効果的なコミュニケーション方法を習得するためのカリキュラム",
      category: "コミュニケーション",
      color: "bg-yellow-100",
      icon: <Users className="w-16 h-16 text-yellow-600" />,
      rating: 4.6,
      views: 870,
      featured: false
    },
    {
      id: 5,
      title: "データ分析スキル入門",
      description: "ビジネスデータを効果的に分析・活用するための基礎スキルを習得",
      category: "デジタルスキル",
      color: "bg-purple-100",
      icon: <BookOpen className="w-16 h-16 text-purple-600" />,
      rating: 4.5,
      views: 750,
      featured: false
    },
    {
      id: 6,
      title: "プロジェクトマネジメント実践",
      description: "プロジェクトの立案から完了までを効果的に管理するスキルを学ぶ",
      category: "リーダーシップ",
      color: "bg-red-100",
      icon: <Briefcase className="w-16 h-16 text-red-600" />,
      rating: 4.7,
      views: 890,
      featured: false
    }
  ];

  // フィルタリング
  const filteredTemplates = templates.filter(template => {
    const matchesCategory = activeCategory === 'all' || template.category === categories.find(c => c.id === activeCategory)?.name;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">研修一括つくるくん</h1>
          <p className="mt-1 text-sm text-gray-600">すぐに使える研修テンプレートライブラリ</p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 検索バーとフィルター */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full sm:w-2/3">
            <input
              type="text"
              placeholder="テンプレートを検索..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          <div className="flex items-center w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            <Filter className="w-5 h-5 text-gray-500 mr-2 hidden sm:block" />
            <span className="text-sm text-gray-500 mr-2 whitespace-nowrap hidden sm:block">カテゴリ:</span>
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 特集テンプレート */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">おすすめテンプレート</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.filter(t => t.featured).map(template => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>

        {/* すべてのテンプレート */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">すべてのテンプレート</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map(template => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>

        {/* テンプレートが見つからない場合 */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">該当するテンプレートが見つかりません</p>
            <button 
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
            >
              すべてのテンプレートを表示
            </button>
          </div>
        )}
      </div>

      {/* CTA セクション */}
      <div className="bg-blue-600 py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">オリジナルの研修カリキュラムが必要ですか？</h2>
          <p className="text-blue-100 mb-6">研修一括つくるくんなら、あなたのニーズに合わせたカスタム研修を簡単に作成できます</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/demo"
              className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg hover:bg-blue-50"
            >
              デモを見る
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg border border-blue-400 hover:bg-blue-700"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* フッター */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">アドネス株式会社</h3>
            <p className="text-sm">人材育成のプロフェッショナルとして、最高の教育DXサービスを提供します。</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">関連リンク</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="/about" className="hover:text-white">会社概要</Link></li>
              <li><Link to="/services" className="hover:text-white">サービス一覧</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">お客様の声</Link></li>
              <li><Link to="/blog" className="hover:text-white">ブログ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <p className="text-sm mb-2">〒540-0021 大阪府大阪市中央区大手通２丁目４−８ assess大手通ビル４F</p>
            <p className="text-sm mb-2">TEL: 06-4400-0754</p>
            <p className="text-sm">Email: info.osaka@addness.co.jp</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          <p>© 2025 アドネス株式会社 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TemplateShowcase; 