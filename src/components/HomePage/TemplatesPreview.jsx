import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users } from 'lucide-react';

const popularTemplates = [
  {
    id: 1,
    title: "新入社員研修プログラム",
    description: "社会人としての基礎からビジネスマナーまで、新入社員に必要な知識を網羅した研修プログラム",
    category: "新人教育",
    rating: 4.8,
    duration: "5日間",
    participants: "10-30名",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 2,
    title: "リーダーシップ開発研修",
    description: "次世代リーダー育成のための実践的なプログラム。チームマネジメントから意思決定までを学ぶ",
    category: "マネジメント",
    rating: 4.9,
    duration: "3日間",
    participants: "5-15名",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "デジタルマーケティング基礎",
    description: "デジタルマーケティングの基礎から実践までを学ぶ包括的なプログラム",
    category: "マーケティング",
    rating: 4.7,
    duration: "2日間",
    participants: "8-20名",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

const TemplatesPreview = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">人気のテンプレート</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            すぐに使える研修プログラム
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            様々な業界・職種に対応した豊富なテンプレートから、最適な研修プログラムを見つけましょう。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {popularTemplates.map((template) => (
            <article key={template.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={template.image}
                  alt={template.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {template.category}
                  </span>
                  <div className="flex items-center gap-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-500">{template.rating}</span>
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={`/template/${template.id}`}>
                      <span className="absolute inset-0" />
                      {template.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {template.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-x-4 text-sm text-gray-500">
                  <div className="flex items-center gap-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{template.duration}</span>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Users className="h-4 w-4" />
                    <span>{template.participants}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/templates"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            すべてのテンプレートを見る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPreview; 