import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="bg-blue-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            研修の効率化をはじめましょう
            <br />
            今すぐ無料でお試しいただけます
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            研修テンプレートを活用して、効率的な人材育成を実現。
            14日間の無料トライアルで、サービスの効果を実感してください。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/signup"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              無料で始める
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold leading-6 text-white"
            >
              お問い合わせ <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection; 