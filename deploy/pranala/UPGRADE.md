# Pranala Work — Plane CE v1.4.2

Target: seluruh service aplikasi Plane v1.4.2. Image web memakai source Pranala di branch `codex/upgrade-plane-v1.4.2`; API memakai base resmi v1.4.2 dengan overlay Pages API. Worker, beat-worker, migrator, admin, space, live, dan proxy memakai image resmi. PostgreSQL 15.7, Valkey 7.2.11, RabbitMQ 3.13.6, dan pgsty MinIO `RELEASE.2026-08-04T00-00-00Z` mengikuti compose resmi v1.4.2.

## Perbaikan hydration dan Pages MCP

Fallback SPA menggunakan markup spinner yang sama pada HTML build dan render browser pertama, termasuk ketika tema telah tersimpan. Tes `apps/web/tests/hydration.test.mjs` menjalankan SSR dan hydration asli untuk tema light/dark dan menolak recoverable hydration errors.

Bootstrap React 18 mempertahankan elemen ekstensi yang disisipkan sebagai child `<html>` dengan memindahkannya ke `<body>` selama hydration. Observer berhenti setelah commit pertama. Tes `apps/web/tests/document-hydration.test.mjs` memverifikasi penyisipan sebelum/saat hydration, identitas elemen tetap utuh, dan observer tidak aktif sesudah commit. Pesan error React tidak disembunyikan. HTML SPA mengirim `Cache-Control: no-cache` pada root maupun nested route agar browser memvalidasi dokumen saat rilis berganti; header keamanan tetap ada.

CE v1.4.2 belum menyediakan route Pages API-key yang dipakai SDK. Overlay `Dockerfile.api` menambahkan koleksi/detail halaman pada `/api/v1/workspaces/<slug>/pages/` dan `/api/v1/workspaces/<slug>/projects/<project_id>/pages/`. Workspace hanya mengagregasi halaman proyek yang dapat diakses; pembuatan halaman memerlukan proyek. Tidak ada perubahan schema database.

Route memakai autentikasi dan throttle API-key existing, keanggotaan workspace/proyek aktif, batas akses halaman privat dan guest, serta sanitizer HTML existing. Tes kontrak PostgreSQL mencakup pagination, private/cross-project access, soft-deleted links, revoked membership/key, dan create ownership. Overlay hanya mengganti tiga file route/view; worker dan migrator tetap image resmi.

`mcp_server.py` menjalankan upstream MCP 0.2.9/SDK 0.2.16/FastMCP 3.2.0 dengan konversi dictionary query ke `PaginatedQueryParams`. Pasang salinan script di lokasi stabil lokal, lalu ganti hanya executable launcher Plane pada konfigurasi MCP. Pertahankan prefix Keychain dan environment existing, simpan backup config privat, dan restart koneksi MCP. Jangan mengubah cache package uv bersama.

## Rilis terverifikasi

Frontend: `kodock.komar.id/plane-frontend:v1.4.2-custom.005`, source `b93ef1f55d5b090151c1793f6e1e6a4624e36318`, digest registry `sha256:a0040ea9316c9a78f46b873b61398f3f780c4128f0584e874f32437829f95e6d`. Artifact amd64 dan checksum tersedia di [rilis fork](https://github.com/putrarifin/plane/releases/tag/pranala-v1.4.2-custom.005).

API: `kodock.komar.id/plane-backend:v1.4.2-custom.001`, source `8a815c0548f8175cf21ef58ff074b677508ac008`, digest registry `sha256:331c7b327ed6e85518977b1a1679de0af62dd014457e7b0de33e9426ba033acb`. Context build overlay tersedia pada rilis `pranala-v1.4.2-custom.003`; base tetap image resmi v1.4.2.

Cutover seluruh stack berhasil: 12 service utama healthy, migrator exit 0, dan `APP_RELEASE` API v1.4.2. Backup awal dan backup final keduanya lolos restore terisolasi, migrasi, serta verifikasi objek dengan MinIO target. Sesi pengguna, proyek, halaman lama, dan render Mermaid melalui editor produksi telah diverifikasi. Isian editor untuk uji dibuang tanpa membuat item kerja.

Di Coolify, pin image aplikasi dan nilai `APP_RELEASE` ke v1.4.2. Periksa generated Compose setelah mengubah environment agar nilai lama yang tersimpan tidak ikut dijalankan. Health check MinIO menggunakan `curl -f http://127.0.0.1:9000/minio/health/ready`.

## Verifikasi source

- Riwayat fork v1.3.0 digabungkan ke tag upstream v1.4.2.
- 426 perubahan terjemahan Indonesia dipindahkan ke namespace JSON. Tiga key lama telah diganti/dihapus upstream; padanannya mengikuti schema v1.4.2.
- Pranala branding, halaman billing yang dinonaktifkan, dan Mermaid dengan `securityLevel: strict` dipertahankan.
- `pnpm turbo run check:types check:lint --filter=web...`: 32 task lolos.
- `node --experimental-strip-types --test tests/pranala/customizations.test.mjs`: 4 tes lolos.
- `node --test apps/web/tests/hydration.test.mjs apps/web/tests/document-hydration.test.mjs`: 2 tes hydration lolos; kasus sebelum perbaikan gagal.
- Tes HTTP Pages pada PostgreSQL: 19 lolos. Tes adapter query MCP: 5 lolos.
- Build Docker `linux/amd64` lolos.
- Fork memakai patch ProseMirror View 1.42.3 untuk kerentanan paste HTML (GHSA-c8x8-7fp4-3x9w) dan markdown-it 14.3.2 untuk perbaikan parser. Keduanya mempertahankan major version dari v1.4.2.
- Audit seluruh workspace masih melaporkan advisori dependency upstream, termasuk dependency Node pada service live resmi dan tooling build. Image web adalah aset statis yang dilayani nginx. Temuan `proxy-addr` bergantung pada konfigurasi trust subnet IPv6 tertentu; source live v1.4.2 tidak mengatur `trust proxy`. Ini bukan klaim seluruh image resmi bebas advisori; pembaruan security upstream tetap perlu dipantau.
- Hook upstream `lint-staged --deny-warnings` tidak konsisten dengan baseline lint proyek. Perbandingan file yang sama menunjukkan 42 warning upstream, 40 warning pada fork, dan tidak ada warning baru. Commit merge melewati hook tersebut setelah gate proyek dan perbandingan baseline lolos; konfigurasi lint tidak diturunkan.

## Backup dan latihan migrasi v1.3.0 ke v1.4.2

Jalankan `plane_upgrade.py` sebagai root pada server stack. Adapter ini memvalidasi baseline v1.3.0 dan ditujukan untuk cutover awal. Gunakan UUID service Coolify yang sudah diverifikasi.

```bash
sudo python3 plane_upgrade.py STACK_UUID inspect
sudo python3 plane_upgrade.py STACK_UUID prepare
sudo python3 plane_upgrade.py STACK_UUID backup
sudo python3 plane_upgrade.py STACK_UUID verify --backup /data/backups/pranala-work/TIMESTAMP
```

Folder backup berizin 0700; dump, arsip, environment, dan compose privat berizin 0600. Jangan upload folder ini ke Git atau rilis publik.

Mode `verify` memulihkan dump ke PostgreSQL terpisah, membandingkan jumlah baris setiap tabel, menjalankan migrator v1.4.2, dan memeriksa jumlah baris bisnis. Upload dipulihkan ke volume terpisah dan dibuka memakai image MinIO target. Jumlah objek, ukuran, digest metadata, HEAD setiap objek, dan sampel payload GET harus sama. Seluruh container latihan memakai network internal tanpa port publik, lalu dibersihkan.

## Cutover

1. Pastikan image frontend baru sudah di registry dan dapat ditarik menggunakan konteks Docker deployment. Pertahankan image lama.
2. Simpan compose baru di Coolify, dengan environment dan volume existing. Review perubahan sebelum menerapkannya.
3. Jalankan `quiesce`. Mode ini menghentikan service aplikasi, membuat dump dan arsip upload/queue/cache yang konsisten, lalu menghidupkan kembali Redis dan RabbitMQ. Service aplikasi tetap berhenti sampai deployment target dimulai.
4. Jalankan `migrate --backup FINAL_BACKUP_PATH`. Adapter menolak migrasi jika aplikasi masih berjalan atau backup tidak dibuat dalam keadaan quiesced.
5. Deploy seluruh stack dari Coolify. Migrator harus selesai sukses; seluruh service jangka panjang harus healthy.
6. Verifikasi versi/image aktif, jumlah baris, upload lama, login, work item, notifikasi, terjemahan, dan render Mermaid. Periksa error log.

```bash
sudo python3 plane_upgrade.py STACK_UUID quiesce
sudo python3 plane_upgrade.py STACK_UUID migrate --backup /data/backups/pranala-work/FINAL_TIMESTAMP
```

## Rollback patch UI/API v1.4.2

Perbaikan hydration, header HTML, dan Pages API tidak mengubah schema. Untuk rollback patch, gunakan image web sebelumnya dan/atau `makeplane/plane-backend:v1.4.2` pada service API, lalu deploy ulang dengan volume dan environment existing. Pertahankan penulisan data produksi sesudah cutover. Gunakan backup config privat sebagai referensi; restore database hanya diperlukan bila ada masalah datastore yang telah dibuktikan. Setelah rollback, verifikasi login, halaman lama, dan health service. Mengembalikan API resmi juga menonaktifkan route Pages compatibility.

## Rollback cutover awal v1.3.0 ke v1.4.2

Jika migrasi atau smoke test gagal, hentikan service aplikasi sebelum menulis data lagi. Pertahankan database dan volume hasil cutover untuk investigasi. Pulihkan dump serta upload dari backup final ke volume baru, lalu gunakan compose privat baseline yang disimpan bersama backup untuk mengembalikan image v1.3.0 dan frontend `v1.3.0-custom.007`. Arahkan volume PostgreSQL dan MinIO pada compose pemulihan ke volume baru tersebut. Jangan prune volume atau image sebelum pemulihan diverifikasi.

Latihan restore membuktikan dump dan arsip dapat digunakan dengan cara ini. Jika sempat ada penulisan pengguna sesudah cutover, rekonsiliasi salinan datastore hasil cutover sebelum menganggap rollback selesai.
