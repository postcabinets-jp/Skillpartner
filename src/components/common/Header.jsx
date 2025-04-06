import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const navigation = [
    {
      name: 'テンプレート',
      href: '/templates',
      submenu: [
        { name: '新入社員研修', href: '/templates?category=新人教育' },
        { name: 'リーダーシップ', href: '/templates?category=リーダーシップ' },
        { name: '営業スキル', href: '/templates?category=営業スキル' },
        { name: 'マーケティング', href: '/templates?category=マーケティング' },
      ]
    },
    { name: '料金プラン', href: '/#pricing' },
    { name: '導入事例', href: '/#case-studies' },
    { name: 'よくある質問', href: '/#faq' },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-gray-900">研修一括つくるくん</span>
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Link to="/template-list" className="text-sm font-semibold leading-6 text-gray-900">
            テンプレート
          </Link>
          <Link to="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
            料金プラン
          </Link>
          <Link to="/reskill" className="text-sm font-semibold leading-6 text-gray-900">
            助成金対応
          </Link>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            無料で始める
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 