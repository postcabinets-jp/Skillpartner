import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "テンプレートはどのようにカスタマイズできますか？",
    answer: "テンプレートは自由に編集・カスタマイズが可能です。テキストの編集、画像の追加、スライドの追加・削除など、研修の目的に合わせて柔軟に変更できます。また、自社のロゴやカラースキームを適用することも可能です。"
  },
  {
    question: "無料トライアル期間はありますか？",
    answer: "はい、すべてのプランで14日間の無料トライアルをご利用いただけます。クレジットカードの登録は不要で、トライアル期間中はすべての機能をお試しいただけます。"
  },
  {
    question: "複数のユーザーで同時に利用できますか？",
    answer: "はい、プランに応じて複数のユーザーで同時に利用できます。スタンダードプランでは最大5名、プロフェッショナルプランでは最大20名まで、エンタープライズプランでは無制限のユーザー数で利用可能です。"
  },
  {
    question: "オフラインでも利用できますか？",
    answer: "基本的にはオンラインでの利用となりますが、エンタープライズプランではオンプレミス対応も可能です。また、テンプレートをダウンロードしてオフラインで編集することもできます。"
  },
  {
    question: "サポートはどのように受けられますか？",
    answer: "スタンダードプランではメールサポート、プロフェッショナルプランでは優先メールサポート、エンタープライズプランでは専任サポートをご利用いただけます。また、ヘルプセンターやFAQ、チュートリアル動画もご用意しています。"
  },
  {
    question: "他のツールとの連携は可能ですか？",
    answer: "はい、エンタープライズプランではAPIアクセスが可能で、自社のシステムとの連携が可能です。また、SSO（シングルサインオン）にも対応しており、既存の認証システムと統合できます。"
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">よくある質問</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDown
                        className={`h-6 w-6 transform transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                <dd className={`mt-2 pr-12 ${openIndex === index ? 'block' : 'hidden'}`}>
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQSection; 