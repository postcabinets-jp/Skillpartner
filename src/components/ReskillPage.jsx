import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Building2, 
  Coins, 
  FileCheck, 
  Users, 
  Target, 
  BarChart,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const ReskillPage = () => {
  const benefits = [
    {
      icon: <Coins className="w-12 h-12 text-blue-600" />,
      title: "助成金で最大70%支援",
      description: "リスキリング助成金制度を活用することで、研修費用の最大70%が助成されます。企業の人材育成への投資を強力にサポートします。"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "充実の研修プログラム",
      description: "DX人材育成、マネジメントスキル、専門職種別研修など、現代のビジネスニーズに応じた幅広いプログラムをご用意しています。"
    },
    {
      icon: <FileCheck className="w-12 h-12 text-blue-600" />,
      title: "申請手続きをサポート",
      description: "助成金申請に必要な書類作成から申請手続きまで、経験豊富なスタッフが丁寧にサポートします。"
    }
  ];

  const features = [
    {
      title: "DX人材育成コース",
      description: "デジタルトランスフォーメーションを推進できる人材の育成",
      points: [
        "データ分析基礎",
        "デジタルマーケティング",
        "プロジェクトマネジメント",
        "アジャイル開発手法"
      ]
    },
    {
      title: "マネジメントスキル強化コース",
      description: "次世代リーダーの育成と組織マネジメント能力の向上",
      points: [
        "リーダーシップ開発",
        "チームビルディング",
        "戦略的思考法",
        "組織変革マネジメント"
      ]
    },
    {
      title: "専門スキル習得コース",
      description: "職種別の専門知識とスキルの習得",
      points: [
        "財務・会計スキル",
        "営業力強化",
        "HR管理・育成",
        "ビジネス英語"
      ]
    }
  ];

  const steps = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "目的の明確化",
      description: "企業様の課題やニーズをヒアリングし、最適な研修プランを設計します。"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-blue-600" />,
      title: "助成金申請",
      description: "リスキリング助成金の申請手続きをサポートします。"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "研修実施",
      description: "オンラインまたは対面で、効果的な研修を実施します。"
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: "効果測定・改善",
      description: "研修の効果を測定し、継続的な改善を図ります。"
    }
  ];

  return (
    <div className="bg-white">
      {/* ヒーローセクション */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-950 to-blue-800">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white text-opacity-20 text-8xl font-bold tracking-wider">
            TRANSFORM YOUR TEAM
          </p>
          <p className="text-white text-opacity-20 text-6xl font-bold mt-4 tracking-wider">
            リスキリングで、未来を創る
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              スキルプラス for Biz
              <span className="block text-blue-200 mt-2">リスキリング助成金対応講座</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              企業の人材育成を支援する助成金制度に対応した、高品質な研修プログラムを提供します。
              従業員のスキルアップと企業の競争力向上を、効率的かつ経済的にサポートします。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/pricing"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                料金プランを見る
              </Link>
              <Link
                to="/template-list"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                テンプレートを見る <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 主な特徴 */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              選ばれる3つの理由
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/70">
                  <div className="flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 研修コース */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              充実の研修プログラム
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              企業のニーズに合わせた多彩な研修コースをご用意しています
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/70">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-2" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 導入ステップ */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              導入の流れ
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              スムーズな導入をサポートいたします
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      {step.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-center text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-1/2 hidden w-full transform md:block">
                      <ArrowRight className="h-6 w-6 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA セクション */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              まずはお気軽にご相談ください
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              企業様の課題やニーズをヒアリングし、最適な研修プランをご提案いたします。
              助成金申請のサポートも含めて、トータルでサポートいたします。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                お問い合わせ
              </Link>
              <Link
                to="/demo"
                className="text-sm font-semibold leading-6 text-white"
              >
                デモを見る <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReskillPage; 