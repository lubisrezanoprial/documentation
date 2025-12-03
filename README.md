# My Documentation Site

Website dokumentasi dengan gaya modern seperti Tailwind CSS documentation.

## Fitur

- ✅ Layout berbeda untuk homepage dan halaman dokumentasi
- ✅ Sidebar navigasi dengan 2 level (parent & children)
- ✅ Responsive design (mobile & desktop)
- ✅ Sidebar dapat ditutup/dibuka di mobile
- ✅ Sticky header dan sidebar
- ✅ Smooth scrolling
- ✅ Copy button untuk code blocks
- ✅ GitHub Pages ready

## Struktur Folder

```
my-docs-site/
├── _config.yml              # Konfigurasi Jekyll
├── _data/
│   └── navigation.yml       # Menu sidebar
├── _layouts/
│   ├── default.html         # Layout dasar
│   ├── landing.html         # Layout landing page
│   └── docs.html            # Layout dokumentasi
├── _includes/
│   ├── header.html
│   ├── header-docs.html
│   ├── sidebar.html
│   └── footer.html
├── docs/                    # Halaman dokumentasi
│   ├── index.md
│   ├── getting-started.md
│   └── ...
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── landing.css
│   │   └── docs.css
│   └── js/
│       └── docs.js
├── index.html               # Homepage
├── about.html
└── contact.html
```

## Setup Development Lokal

### Prerequisites

- Ruby 2.7+
- Bundler

### Instalasi

1. Clone repository:
```bash
git clone https://github.com/username/repo.git
cd repo
```

2. Install dependencies:
```bash
bundle install
```

3. Jalankan development server:
```bash
bundle exec jekyll serve
```

4. Buka browser: `http://localhost:4000`

## Deploy ke GitHub Pages

### Metode 1: GitHub Actions (Otomatis)

1. Push ke GitHub
2. Pergi ke Settings → Pages
3. Source: pilih "GitHub Actions"
4. GitHub akan otomatis build dan deploy

### Metode 2: Manual

1. Update `_config.yml`:
```yaml
baseurl: "/nama-repo"  # Jika bukan di root
url: "https://username.github.io"
```

2. Push ke branch `main` atau `gh-pages`

3. Enable GitHub Pages di Settings → Pages

## Kustomisasi

### Menambah Halaman Dokumentasi

1. Buat file `.md` di folder `docs/`:
```markdown
---
layout: docs
title: Judul Halaman
description: Deskripsi halaman
---

## Konten Anda

Tulis konten di sini...
```

2. Tambahkan ke `_data/navigation.yml`:
```yaml
docs:
  - title: Judul Menu
    url: /docs/nama-file/
```

### Menambah Sub-menu (Children)

Di `_data/navigation.yml`:
```yaml
docs:
  - title: Parent Menu
    url: /docs/parent/
    children:
      - title: Child 1
        url: /docs/parent/child1/
      - title: Child 2
        url: /docs/parent/child2/
```

### Mengubah Warna

Edit variabel CSS di `assets/css/main.css`:
```css
:root {
  --color-primary: #3b82f6;     /* Warna utama */
  --color-primary-dark: #2563eb; /* Warna hover */
  /* ... */
}
```

## Tips

- Gunakan Markdown untuk menulis dokumentasi
- Code blocks otomatis mendapat syntax highlighting
- Semua halaman dokumentasi harus ada di folder `docs/`
- Halaman static (about, contact) bisa di root

## Troubleshooting

**Jekyll serve error?**
```bash
bundle update
bundle exec jekyll serve
```

**GitHub Pages tidak update?**
- Cek Actions tab untuk error
- Pastikan `_config.yml` sudah benar
- Tunggu 1-2 menit setelah push

## License

MIT License - Silakan digunakan untuk project Anda!

## Support

Jika ada pertanyaan, silakan buat issue di GitHub repository.
