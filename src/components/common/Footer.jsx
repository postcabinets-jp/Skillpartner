import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigation = {
    サービス: [
      { name: 'テンプレート一覧', href: '/templates' },
      { name: '料金プラン', href: '/#pricing' },
      { name: '導入事例', href: '/#case-studies' },
      { name: 'よくある質問', href: '/#faq' },
    ],
    サポート: [
      { name: 'ヘルプセンター', href: '/help' },
      { name: 'お問い合わせ', href: '/contact' },
      { name: '利用ガイド', href: '/guide' },
    ],
    会社情報: [
      { name: '会社概要', href: '/about' },
      { name: 'プライバシーポリシー', href: '/privacy' },
      { name: '利用規約', href: '/terms' },
      { name: '特定商取引法に基づく表記', href: '/legal' },
    ],
  };

  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        フッター
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">研修一括つくるくん</span>
            </Link>
            <p className="text-base text-gray-500">
              研修テンプレートを活用して、効率的な人材育成を実現します。
            </p>
            <div className="flex space-x-6">
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">サービス</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.サービス.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">サポート</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.サポート.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-900">会社情報</h3>
              <ul className="mt-4 space-y-4">
                {navigation.会社情報.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} 研修一括つくるくん. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 