import React, { useState } from 'react';
import { Calendar, Users, Clock, Send, CheckCircle2 } from 'lucide-react';

const DemoPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    department: '',
    name: '',
    email: '',
    phone: '',
    participants: '1-10',
    preferred_date: '',
    preferred_time: '',
    interests: [],
    specific_requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここにフォーム送信のロジックを実装
    console.log('Demo request submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const newInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter(interest => interest !== value);
      setFormData(prev => ({
        ...prev,
        interests: newInterests
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "柔軟なスケジュール",
      description: "ご都合の良い日時でデモを実施。オンラインまたは対面での実施が可能です。"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "複数名での参加OK",
      description: "チームメンバーと一緒にデモをご覧いただけます。質問もお気軽にどうぞ。"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "30分程度で完結",
      description: "短時間で効率的に機能をご紹介。その場でカスタマイズの相談も可能です。"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダーセクション */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            無料デモのお申し込み
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            研修一括つくるくんの機能を実際にご体験ください。
            専任のスタッフが丁寧にご説明いたします。
          </p>
        </div>

        {/* 特徴セクション */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* デモ申し込みフォーム */}
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                  部署名
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="participants" className="block text-sm font-medium text-gray-700">
                  デモ参加予定人数
                </label>
                <select
                  name="participants"
                  id="participants"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.participants}
                  onChange={handleChange}
                >
                  <option value="1-10">1-10名</option>
                  <option value="11-30">11-30名</option>
                  <option value="31-50">31-50名</option>
                  <option value="51+">51名以上</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700">
                  ご希望日 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="preferred_date"
                  id="preferred_date"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.preferred_date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700">
                  ご希望時間帯 <span className="text-red-500">*</span>
                </label>
                <select
                  name="preferred_time"
                  id="preferred_time"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.preferred_time}
                  onChange={handleChange}
                >
                  <option value="">選択してください</option>
                  <option value="10:00">10:00-10:30</option>
                  <option value="11:00">11:00-11:30</option>
                  <option value="14:00">14:00-14:30</option>
                  <option value="15:00">15:00-15:30</option>
                  <option value="16:00">16:00-16:30</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ご興味のある機能（複数選択可）
                </label>
                <div className="space-y-2">
                  {[
                    'テンプレートライブラリ',
                    'カスタマイズ機能',
                    'チーム共有機能',
                    'リスキリング助成金対応',
                    '進捗管理機能'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        id={feature}
                        name="interests"
                        value={feature}
                        checked={formData.interests.includes(feature)}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={feature} className="ml-2 text-sm text-gray-700">
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="specific_requirements" className="block text-sm font-medium text-gray-700">
                  その他ご要望
                </label>
                <textarea
                  name="specific_requirements"
                  id="specific_requirements"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.specific_requirements}
                  onChange={handleChange}
                  placeholder="デモでご確認されたい点や、ご質問などございましたらご記入ください。"
                />
              </div>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Send className="w-5 h-5 mr-2" />
                デモを申し込む
              </button>
            </div>
          </form>
        </div>

        {/* 補足情報 */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="flex items-center text-lg font-semibold text-blue-900 mb-3">
              <CheckCircle2 className="w-6 h-6 mr-2" />
              デモお申し込み後の流れ
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-900">
              <li>お申し込み後、1営業日以内に担当者よりメールにてご連絡いたします。</li>
              <li>ご希望の日時で調整させていただきます。</li>
              <li>オンラインミーティングツールのURLをお送りいたします。</li>
              <li>デモ実施（30分程度）</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage; 