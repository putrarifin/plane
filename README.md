# Pranala Work

Pranala Work adalah distribusi bermerek untuk project and work management: menghubungkan rencana, pekerjaan, dan tim dalam satu ruang kerja.

> Pranala Work adalah modifikasi dari [Plane](https://github.com/makeplane/plane). Modifikasi ini tetap dilisensikan di bawah [GNU Affero General Public License v3.0](./LICENSE.txt). Source code modifikasi tersedia di branch [`custom-ui-v1.3.0`](https://github.com/putrarifin/plane/tree/custom-ui-v1.3.0).

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

Baseline branding ini mengikuti release `v1.3.0` agar kompatibel dengan backend/API yang juga berjalan pada release tersebut.

```bash
pnpm install --frozen-lockfile
pnpm turbo run check:types --filter=web...
pnpm --filter web check:format
pnpm --filter web check:lint
pnpm --filter web build
```

## Frontend image

Rebrand tahap awal hanya membangun service `web`. Service backend, database, queue, storage, proxy, dan live server tetap mengikuti deployment existing.

```bash
# Build from the pinned frontend source
pnpm --filter web build

# Use an immutable image tag for deployment, for example:
# ghcr.io/<owner>/pranala-work-web:v1.3.0-custom.001
```

Production secrets, connection strings, and deployment credentials harus dikelola oleh deployment platform. Jangan memasukkannya ke repository atau frontend bundle.

## Legal and attribution

- Jangan menghapus `LICENSE.txt` atau `COPYRIGHT.txt`.
- Distribusi perubahan harus tetap memenuhi kewajiban AGPL-3.0.
- Untuk laporan bug dan source review, gunakan [issue tracker](https://github.com/putrarifin/plane/issues) dan [source repository](https://github.com/putrarifin/plane).
- Logo, copy, metadata, dan surface user-facing boleh menggunakan identitas Pranala Work; internal package namespaces tetap dipertahankan untuk menjaga kompatibilitas build.

## Status

Rebrand ini menargetkan frontend. Perubahan backend, database, API contract, dan deployment production berada di luar scope tahap ini.
