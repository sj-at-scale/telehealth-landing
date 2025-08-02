# Telehealth Mental Health Landing Pages

A multilingual landing page for telehealth mental health services, specifically designed to help users find therapists and counselors who speak their language and understand their culture.

## Features

- **Multi-language Support**: Korean and Chinese versions
- **Cultural Relevance**: Simple, authentic messaging about finding therapists who understand your background
- **Responsive Design**: Clean, professional layout optimized for all devices
- **Internationalization**: Built with next-intl for seamless language switching

## Languages Supported

- **Korean (한국어)**: `/ko` - "한국어로 상담받으세요"
- **Chinese (中文)**: `/zh` - "用中文咨询心理健康"

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Deployment**: Railway (separate deployments per language)
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd telehealth-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Routes

- `/` - Redirects to Korean version
- `/ko` - Korean landing page
- `/zh` - Chinese landing page

## Deployment

This project is configured for dual deployment on Railway:

### Korean Version
- Service: `telehealth-korean`
- Default locale: `ko`
- Configuration: `railway-korean.toml`

### Chinese Version  
- Service: `telehealth-chinese`
- Default locale: `zh`
- Configuration: `railway-chinese.toml`

### Setting up Railway Deployment

1. Create two Railway projects:
   - One for Korean version
   - One for Chinese version

2. Set up GitHub integration for both projects

3. Add your Railway token to GitHub Secrets:
   - Go to your GitHub repository settings
   - Add `RAILWAY_TOKEN` to repository secrets

4. Deploy via GitHub Actions on push to main branch

## Project Structure

```
telehealth-landing/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Locale-specific pages
│   │   │   ├── layout.tsx     # Locale layout
│   │   │   └── page.tsx       # Main landing page
│   │   └── page.tsx           # Root redirect
│   └── i18n.ts               # Internationalization config
├── messages/
│   ├── ko.json               # Korean translations
│   └── zh.json               # Chinese translations
├── .github/workflows/        # GitHub Actions
├── railway-korean.toml       # Korean deployment config
└── railway-chinese.toml      # Chinese deployment config
```

## Customization

### Adding Content
Edit the translation files in `/messages/`:
- `ko.json` for Korean content
- `zh.json` for Chinese content

### Styling
Modify Tailwind CSS classes in the page components or update `globals.css`.

### Adding Languages
1. Create new message file (e.g., `ja.json`)
2. Update `middleware.ts` to include new locale
3. Update `i18n.ts` configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both language versions
5. Submit a pull request

## License

MIT License