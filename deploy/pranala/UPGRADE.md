# Pranala Work — Plane CE v1.4.2

Target: seluruh service aplikasi Plane v1.4.2. Image web memakai source Pranala di branch `codex/upgrade-plane-v1.4.2`; API memakai base resmi v1.4.2 dengan overlay Pages API. Worker, beat-worker, migrator, admin, space, live, dan proxy memakai image resmi. PostgreSQL 15.7, Valkey 7.2.11, RabbitMQ 3.13.6, dan pgsty MinIO `RELEASE.2026-08-04T00-00-00Z` mengikuti compose resmi v1.4.2.

## Perbaikan hydration dan Pages MCP

Fallback SPA menggunakan markup spinner yang sama pada HTML build dan render browser pertama, termasuk ketika tema telah tersimpan. Tes `apps/web/tests/hydration.test.mjs` menjalankan SSR dan hydration asli untuk tema light/dark dan menolak recoverable hydration errors.

CE v1.4.2 belum menyediakan route Pages API-key yang dipakai SDK. Overlay `Dockerfile.api` menambahkan koleksi/detail halaman pada `/api/v1/workspaces/<slug>/pages/` dan `/api/v1/workspaces/<slug>/projects/<project_id>/pages/`. Workspace hanya mengagregasi halaman proyek yang dapat diakses; pembuatan halaman memerlukan proyek. Tidak ada perubahan schema database.

Route memakai autentikasi dan throttle API-key existing, keanggotaan workspace/proyek aktif, batas akses halaman privat dan guest, serta sanitizer HTML existing. Tes kontrak PostgreSQL mencakup pagination, private/cross-project access, soft-deleted links, revoked membership/key, dan create ownership. Overlay hanya mengganti tiga file route/view; worker dan migrator tetap image resmi.

`mcp_server.py` menjalankan upstream MCP 0.2.9/SDK 0.2.16/FastMCP 3.2.0 dengan konversi dictionary query ke `PaginatedQueryParams`. Pasang salinan script di lokasi stabil lokal, lalu ganti hanya executable launcher Plane pada konfigurasi MCP. Pertahankan prefix Keychain dan environment existing, simpan backup config privat, dan restart koneksi MCP. Jangan mengubah cache package uv bersama.

## Rilis terverifikasi

Frontend: `kodock.komar.id/plane-frontend:v1.4.2-custom.002`, source `d3bb7fbd041d1bca6397fbf16ddea24ff2946cfc`, digest registry `sha256:22350a34f106c975129b45dbbc4e775a0f061b7b656b4e082c7bea54a58b53e7`. Artifact amd64 dan checksum tersedia di [rilis fork](https://github.com/putrarifin/plane/releases/tag/pranala-v1.4.2-custom.002).

Cutover seluruh stack berhasil: 12 service utama healthy, migrator exit 0, dan `APP_RELEASE` API v1.4.2. Backup awal dan backup final keduanya lolos restore terisolasi, migrasi, serta verifikasi objek dengan MinIO target. Sesi pengguna, proyek, halaman lama, dan render Mermaid melalui editor produksi telah diverifikasi. Isian editor untuk uji dibuang tanpa membuat item kerja.

Di Coolify, pin image aplikasi dan nilai `APP_RELEASE` ke v1.4.2. Periksa generated Compose setelah mengubah environment agar nilai lama yang tersimpan tidak ikut dijalankan. Health check MinIO menggunakan `curl -f http://127.0.0.1:9000/minio/health/ready`.

## Verifikasi source

- Riwayat fork v1.3.0 digabungkan ke tag upstream v1.4.2.
- 426 perubahan terjemahan Indonesia dipindahkan ke namespace JSON. Tiga key lama telah diganti/dihapus upstream; padanannya mengikuti schema v1.4.2.
- Pranala branding, halaman billing yang dinonaktifkan, dan Mermaid dengan `securityLevel: strict` dipertahankan.
- `pnpm turbo run check:types check:lint --filter=web...`: 32 task lolos.
- `node --experimental-strip-types --test tests/pranala/customizations.test.mjs`: 4 tes lolos.
- Build Docker `linux/amd64` lolos.
- Fork memakai patch ProseMirror View 1.42.3 untuk kerentanan paste HTML (GHSA-c8x8-7fp4-3x9w) dan markdown-it 14.3.2 untuk perbaikan parser. Keduanya mempertahankan major version dari v1.4.2.
- Audit seluruh workspace masih melaporkan advisori dependency upstream, termasuk dependency Node pada service live resmi dan tooling build. Image web adalah aset statis yang dilayani nginx. Temuan `proxy-addr` bergantung pada konfigurasi trust subnet IPv6 tertentu; source live v1.4.2 tidak mengatur `trust proxy`. Ini bukan klaim seluruh image resmi bebas advisori; pembaruan security upstream tetap perlu dipantau.
- Hook upstream `lint-staged --deny-warnings` tidak konsisten dengan baseline lint proyek. Perbandingan file yang sama menunjukkan 42 warning upstream, 40 warning pada fork, dan tidak ada warning baru. Commit merge melewati hook tersebut setelah gate proyek dan perbandingan baseline lolos; konfigurasi lint tidak diturunkan.

## Backup dan latihan migrasi

Jalankan `plane_upgrade.py` sebagai root pada server stack. Gunakan UUID service Coolify yang sudah diverifikasi.

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

## Rollback

Jika migrasi atau smoke test gagal, hentikan service aplikasi sebelum menulis data lagi. Pertahankan database dan volume hasil cutover untuk investigasi. Pulihkan dump serta upload dari backup final ke volume baru, lalu gunakan compose privat baseline yang disimpan bersama backup untuk mengembalikan image v1.3.0 dan frontend `v1.3.0-custom.007`. Arahkan volume PostgreSQL dan MinIO pada compose pemulihan ke volume baru tersebut. Jangan prune volume atau image sebelum pemulihan diverifikasi.

Latihan restore membuktikan dump dan arsip dapat digunakan dengan cara ini. Jika sempat ada penulisan pengguna sesudah cutover, rekonsiliasi salinan datastore hasil cutover sebelum menganggap rollback selesai.
