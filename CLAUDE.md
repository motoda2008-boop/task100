# task-board

タスク管理ボードアプリケーション（React / Next.js）

## 技術スタック

- **フレームワーク**: Next.js (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **パッケージマネージャ**: npm

## 開発コマンド

```bash
npm install        # 依存関係インストール
npm run dev        # 開発サーバー起動 (http://localhost:3000)
npm run build      # プロダクションビルド
npm run lint       # ESLint 実行
npm run typecheck  # TypeScript 型チェック
```

## Git 運用ルール

### 基本方針

**コードを変更するたびに必ず GitHub にプッシュする。**

### コミット & プッシュの手順

1. 変更が完了したら即座にステージング・コミット・プッシュを行う
2. 作業の途中であっても、意味のある単位でこまめにコミットする
3. コミット後は必ず `git push` まで実行する（ローカルのみに留めない）

```bash
git add <変更ファイル>
git commit -m "コミットメッセージ"
git push origin <ブランチ名>
```

### コミットメッセージ規約

```
<type>: <概要（日本語可）>
```

| type | 用途 |
|------|------|
| feat | 新機能追加 |
| fix | バグ修正 |
| refactor | リファクタリング |
| style | スタイル・フォーマット変更 |
| docs | ドキュメント変更 |
| chore | ビルド・設定変更 |

例: `feat: タスクの完了状態をトグルできるようにする`

### ブランチ戦略

- `main`: プロダクション相当。直接プッシュ禁止
- `develop`: 開発のベースブランチ
- `feature/<name>`: 機能開発用（develop からブランチを切る）

## コーディング規約

- コンポーネントは `src/components/` に配置
- ページは `src/app/` (App Router) に配置
- 型定義は `src/types/` にまとめる
- コメントは原則書かない。書く場合は「なぜ」に限定する
- `any` 型の使用禁止
