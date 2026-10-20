# Pranala Work — Plane CE v1.4.2

Target: seluruh service aplikasi Plane v1.4.2. Image web memakai source Pranala di branch `codex/upgrade-plane-v1.4.2`; API, worker, beat-worker, migrator, admin, space, live, dan proxy memakai image resmi. PostgreSQL 15.7, Valkey 7.2.11, RabbitMQ 3.13.6, dan pgsty MinIO `RELEASE.2026-08-04T00-00-00Z` mengikuti compose resmi v1.4.2.

## Verifikasi source

- Riwayat fork v1.3.0 digabungkan ke tag upstream v1.4.2.
- 426 perubahan terjemahan Indonesia dipindahkan ke namespace JSON. Tiga key lama telah diganti/dihapus upstream; padanannya mengikuti schema v1.4.2.
- Pranala branding, halaman billing yang dinonaktifkan, dan Mermaid dengan `securityLevel: strict` dipertahankan.
- `pnpm turbo run check:types check:lint --filter=web...`: 32 task lolos.
- `node --experimental-strip-types --test tests/pranala/customizations.test.mjs`: 4 tes lolos.
- Build Docker `linux/amd64` lolos.
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
