# スキルパートナー 研修テンプレートライブラリ

研修コンテンツの作成・管理を効率化するためのテンプレートライブラリサイトです。

## デモ

[スキルパートナー 研修テンプレートライブラリ](https://postcabinets-jp.github.io/Skillpartner/)

## 機能

- 研修テンプレートの一覧表示と検索
- カテゴリー別フィルタリング
- おすすめテンプレートの表示
- デモリクエストフォーム
- お問い合わせフォーム

## 技術スタック

- React
- React Router (Hash Router)
- Tailwind CSS
- Lucide React（アイコン）

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/postcabinets-jp/Skillpartner.git

# プロジェクトディレクトリに移動
cd Skillpartner

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start
```

開発サーバーは http://localhost:3002 で起動します。

## デプロイ手順

1. mainブランチで最新のコードを取得
```bash
git checkout main
git pull origin main
```

2. 依存関係の更新とビルド
```bash
npm install
npm run build
```

3. ビルドファイルをコミットしてプッシュ
```bash
git add .
git commit -m "Update build files"
git push origin main
```

4. GitHub Pagesの設定
- リポジトリの「Settings」→「Pages」に移動
- Source: 「Deploy from a branch」を選択
- Branch: 「main」を選択
- Folder: 「/(root)」を選択
- 「Save」をクリック

デプロイ後は以下のURLでアクセス可能です：
https://postcabinets-jp.github.io/Skillpartner/

## ライセンス

このプロジェクトは非公開です。すべての権利は株式会社ポストキャビネットが保有しています。 