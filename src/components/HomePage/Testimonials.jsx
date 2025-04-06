import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "研修の準備時間が大幅に削減され、より効果的な教育プログラムを提供できるようになりました。テンプレートの質が高く、カスタマイズも簡単です。",
    author: {
      name: "山田 太郎",
      role: "人事部長",
      company: "株式会社テクノロジー",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    rating: 5
  },
  {
    content: "新入社員研修のプログラム作成が格段に楽になりました。テンプレートを基に自社の文化に合わせてカスタマイズできるので、効率的に研修を実施できます。",
    author: {
      name: "佐藤 花子",
      role: "教育担当",
      company: "ABC株式会社",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    rating: 5
  },
  {
    content: "リモートワークが増える中、オンライン研修の実施が容易になりました。テンプレートの共有機能が特に便利で、チーム全体で研修の質を統一できます。",
    author: {
      name: "鈴木 一郎",
      role: "マネージャー",
      company: "XYZ株式会社",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">導入事例</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            お客様の声
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            実際にご利用いただいているお客様からの声をご紹介します。
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.content}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`${testimonial.author.role}, ${testimonial.author.company}`}</div>
                      <div className="mt-1 flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 