# Pranala Work

Pranala Work adalah distribusi bermerek untuk project and work management: menghubungkan rencana, pekerjaan, dan tim dalam satu ruang kerja.

> Pranala Work adalah modifikasi dari [Plane](https://github.com/makeplane/plane). Modifikasi ini tetap dilisensikan di bawah [GNU Affero General Public License v3.0](./LICENSE.txt). Source code modifikasi tersedia di branch [`codex/upgrade-plane-v1.4.2`](https://github.com/putrarifin/plane/tree/codex/upgrade-plane-v1.4.2).

## Product surfaces

- `web` — workspace dan project management utama
- `admin` — administrasi instance
- `space` — published workspace

Identitas user-facing menggunakan:

```text
Pranala
Pranala Work
Semua pekerjaan terhubung.
```

## Development

Baseline branding ini mengikuti release `v1.4.2` agar kompatibel dengan backend/API yang juga berjalan pada release tersebut.

```bash
pnpm install --frozen-lockfile
pnpm turbo run check:types --filter=web...
pnpm --filter web check:format
pnpm --filter web check:lint
pnpm --filter web build
```

## Frontend image

Frontend `web` dibangun dari source Pranala Work berbasis v1.4.2. API, worker, beat-worker, migrator, admin, space, live, dan proxy mengikuti rilis resmi Plane v1.4.2. Dependensi database, cache, queue, dan object storage mengikuti compose resmi rilis tersebut.

```bash
# Build from the pinned frontend source
pnpm --filter web build

# Use an immutable image tag for deployment, for example:
# ghcr.io/<owner>/pranala-work-web:v1.4.2-custom.001
```

Production secrets, connection strings, and deployment credentials harus dikelola oleh deployment platform. Jangan memasukkannya ke repository atau frontend bundle.

## Legal and attribution

- Jangan menghapus `LICENSE.txt` atau `COPYRIGHT.txt`.
- Distribusi perubahan harus tetap memenuhi kewajiban AGPL-3.0.
- Untuk laporan bug dan source review, gunakan [issue tracker](https://github.com/putrarifin/plane/issues) dan [source repository](https://github.com/putrarifin/plane).
- Logo, copy, metadata, dan surface user-facing boleh menggunakan identitas Pranala Work; internal package namespaces tetap dipertahankan untuk menjaga kompatibilitas build.

## Status

Rebrand ini menargetkan frontend. Perubahan backend, database, API contract, dan deployment production berada di luar scope tahap ini.
