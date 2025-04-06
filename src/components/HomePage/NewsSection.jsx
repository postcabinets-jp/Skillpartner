import React from 'react';
import { Link } from 'react-router-dom';

const news = [
  {
    id: 1,
    title: '新機能リリース：AIを活用した研修コンテンツ生成機能の追加',
    description: '研修資料の作成をさらに効率化する新機能をリリースしました。AIが研修目的に合わせて最適なコンテンツを提案します。',
    date: '2024年3月15日',
    category: { name: '新機能', color: 'bg-green-100 text-green-800' },
  },
  {
    id: 2,
    title: '導入事例：大手製造業A社様の研修効率化に成功',
    description: '年間200回以上の研修実施における準備時間を70%削減。社員の満足度も大幅に向上しました。',
    date: '2024年3月1日',
    category: { name: '事例', color: 'bg-blue-100 text-blue-800' },
  },
  {
    id: 3,
    title: '研修テンプレートライブラリの大幅拡充',
    description: '新入社員向けからマネジメント研修まで、100以上の新しいテンプレートを追加しました。',
    date: '2024年2月15日',
    category: { name: 'アップデート', color: 'bg-purple-100 text-purple-800' },
  },
];

const NewsSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            最新ニュース
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            研修一括つくるくんの最新情報をお届けします
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((article) => (
            <article key={article.id} className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={article.date} className="text-gray-500">
                  {article.date}
                </time>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${article.category.color}`}
                >
                  {article.category.name}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link to="/news">
                    <span className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/news"
            className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            すべてのニュースを見る <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsSection; 