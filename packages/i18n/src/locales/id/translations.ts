/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export default {
  sidebar: {
    projects: "Projek",
    pages: "Halaman",
    new_work_item: "Item kerja baru",
    home: "Beranda",
    your_work: "Pekerjaan Anda",
    inbox: "Inbox",
    workspace: "Workspace",
    views: "Views",
    analytics: "Analitik",
    work_items: "Item kerja",
    cycles: "Siklus",
    modules: "Modul",
    intake: "Intake",
    drafts: "Draft",
    favorites: "Favorit",
    pro: "Pro",
    upgrade: "Upgrade",
    stickies: "Catatan tempel",
  },
  auth: {
    common: {
      email: {
        label: "Email",
        placeholder: "nama@perusahaan.com",
        errors: {
          required: "Email wajib diisi",
          invalid: "Email tidak valid",
        },
      },
      password: {
        label: "Password",
        set_password: "Atur password",
        placeholder: "Masukkan password",
        confirm_password: {
          label: "Konfirmasi password",
          placeholder: "Konfirmasi password",
        },
        current_password: {
          label: "Password saat ini",
        },
        new_password: {
          label: "Password baru",
          placeholder: "Masukkan password baru",
        },
        change_password: {
          label: {
            default: "Ubah password",
            submitting: "Mengubah password",
          },
        },
        errors: {
          match: "Password tidak cocok",
          empty: "Silakan masukkan password Anda",
          length: "Panjang password harus lebih dari 8 karakter",
          strength: {
            weak: "Password lemah",
            strong: "Password kuat",
          },
        },
        submit: "Atur password",
        toast: {
          change_password: {
            success: {
              title: "Berhasil!",
              message: "Password berhasil diubah.",
            },
            error: {
              title: "Kesalahan!",
              message: "Terjadi kesalahan. Silakan coba lagi.",
            },
          },
        },
      },
      unique_code: {
        label: "Kode unik",
        placeholder: "123456",
        paste_code: "Tempelkan kode yang dikirim ke email Anda",
        requesting_new_code: "Meminta kode baru",
        sending_code: "Mengirim kode",
      },
      already_have_an_account: "Sudah punya akun?",
      login: "Masuk",
      create_account: "Buat akun",
      new_to_plane: "Baru di Pranala?",
      back_to_sign_in: "Kembali ke halaman masuk",
      resend_in: "Kirim ulang dalam {seconds} detik",
      sign_in_with_unique_code: "Masuk dengan kode unik",
      forgot_password: "Lupa password?",
    },
    sign_up: {
      header: {
        label: "Buat akun untuk mulai mengelola pekerjaan bersama tim Anda.",
        step: {
          email: {
            header: "Daftar",
            sub_header: "",
          },
          password: {
            header: "Daftar",
            sub_header: "Daftar menggunakan kombinasi email-password.",
          },
          unique_code: {
            header: "Daftar",
            sub_header: "Daftar menggunakan kode unik yang dikirim ke alamat email di atas.",
          },
        },
      },
      errors: {
        password: {
          strength: "Coba atur password yang lebih kuat untuk melanjutkan",
        },
      },
    },
    sign_in: {
      header: {
        label: "Masuk untuk mulai mengelola pekerjaan bersama tim Anda.",
        step: {
          email: {
            header: "Masuk atau daftar",
            sub_header: "",
          },
          password: {
            header: "Masuk atau daftar",
            sub_header: "Gunakan kombinasi email dan password Anda untuk masuk.",
          },
          unique_code: {
            header: "Masuk atau daftar",
            sub_header: "Masuk menggunakan kode unik yang dikirim ke alamat email di atas.",
          },
        },
      },
    },
    forgot_password: {
      title: "Atur ulang password Anda",
      description:
        "Masukkan alamat email akun Anda yang sudah terverifikasi. Kami akan mengirimkan tautan untuk mengatur ulang password.",
      email_sent: "Tautan untuk mengatur ulang password sudah dikirim ke alamat email Anda.",
      send_reset_link: "Kirim tautan reset",
      errors: {
        smtp_not_enabled:
          "Admin Anda belum mengaktifkan SMTP, jadi kami tidak dapat mengirimkan tautan untuk mengatur ulang password.",
      },
      toast: {
        success: {
          title: "Email terkirim",
          message:
            "Periksa inbox Anda untuk tautan reset password. Jika belum muncul dalam beberapa menit, periksa folder spam.",
        },
        error: {
          title: "Kesalahan!",
          message: "Terjadi kesalahan. Silakan coba lagi.",
        },
      },
    },
    reset_password: {
      title: "Atur password baru",
      description: "Amankan akun Anda dengan password yang kuat.",
    },
    set_password: {
      title: "Amankan akun Anda",
      description: "Mengatur password membantu Anda masuk dengan aman.",
    },
    sign_out: {
      toast: {
        error: {
          title: "Kesalahan!",
          message: "Gagal keluar. Silakan coba lagi.",
        },
      },
    },
  },
  submit: "Kirim",
  cancel: "Batal",
  loading: "Memuat",
  error: "Kesalahan",
  success: "Berhasil",
  warning: "Peringatan",
  info: "Info",
  close: "Tutup",
  yes: "Ya",
  no: "Tidak",
  ok: "OK",
  name: "Nama",
  description: "Deskripsi",
  search: "Cari",
  add_member: "Tambah anggota",
  adding_members: "Menambah anggota",
  remove_member: "Hapus anggota",
  add_members: "Tambah anggota",
  adding_member: "Menambah anggota",
  remove_members: "Hapus anggota",
  add: "Tambah",
  adding: "Menambah",
  remove: "Hapus",
  add_new: "Tambah baru",
  remove_selected: "Hapus yang dipilih",
  first_name: "Nama depan",
  last_name: "Nama belakang",
  email: "Email",
  display_name: "Nama tampilan",
  role: "Peran",
  timezone: "Zona waktu",
  avatar: "Avatar",
  cover_image: "Gambar sampul",
  password: "Kata sandi",
  change_cover: "Ganti sampul",
  language: "Bahasa",
  saving: "Menyimpan",
  save_changes: "Simpan perubahan",
  deactivate_account: "Nonaktifkan akun",
  deactivate_account_description:
    "Saat menonaktifkan akun, semua data dan sumber daya dalam akun tersebut akan dihapus secara permanen dan tidak dapat dipulihkan.",
  profile_settings: "Pengaturan profil",
  your_account: "Akun Anda",
  security: "Keamanan",
  activity: "Aktivitas",
  preferences: "Preferensi",
  language_and_time: "Bahasa & waktu",
  appearance: "Tampilan",
  notifications: "Notifikasi",
  workspaces: "Ruang kerja",
  create_workspace: "Buat ruang kerja",
  invitations: "Undangan",
  summary: "Ringkasan",
  assigned: "Ditugaskan",
  created: "Dibuat",
  subscribed: "Diikuti",
  you_do_not_have_the_permission_to_access_this_page: "Anda tidak memiliki izin untuk mengakses halaman ini.",
  something_went_wrong_please_try_again: "Terjadi kesalahan. Silakan coba lagi.",
  load_more: "Muat lebih banyak",
  select_or_customize_your_interface_color_scheme: "Pilih atau sesuaikan skema warna antarmuka Anda.",
  timezone_setting: "Pengaturan zona waktu saat ini.",
  language_setting: "Pilih bahasa yang digunakan di antarmuka pengguna.",
  settings_moved_to_preferences: "Pengaturan zona waktu dan bahasa telah dipindahkan ke preferensi.",
  go_to_preferences: "Buka preferensi",
  theme: "Tema",
  system_preference: "Preferensi sistem",
  light: "Terang",
  dark: "Gelap",
  light_contrast: "Kontras tinggi terang",
  dark_contrast: "Kontras tinggi gelap",
  custom: "Tema kustom",
  select_your_theme: "Pilih tema Anda",
  customize_your_theme: "Sesuaikan tema Anda",
  background_color: "Warna latar belakang",
  text_color: "Warna teks",
  primary_color: "Warna utama (Tema)",
  sidebar_background_color: "Warna latar belakang sidebar",
  sidebar_text_color: "Warna teks sidebar",
  set_theme: "Atur tema",
  enter_a_valid_hex_code_of_6_characters: "Masukkan kode hex yang valid dari 6 karakter",
  background_color_is_required: "Warna latar belakang diperlukan",
  text_color_is_required: "Warna teks diperlukan",
  primary_color_is_required: "Warna utama diperlukan",
  sidebar_background_color_is_required: "Warna latar belakang sidebar diperlukan",
  sidebar_text_color_is_required: "Warna teks sidebar diperlukan",
  updating_theme: "Memperbarui tema",
  theme_updated_successfully: "Tema berhasil diperbarui",
  failed_to_update_the_theme: "Gagal memperbarui tema",
  email_notifications: "Notifikasi email",
  stay_in_the_loop_on_issues_you_are_subscribed_to_enable_this_to_get_notified:
    "Dapatkan pembaruan tentang item kerja yang Anda ikuti. Aktifkan untuk menerima notifikasi.",
  email_notification_setting_updated_successfully: "Pengaturan notifikasi email berhasil diperbarui",
  failed_to_update_email_notification_setting: "Gagal memperbarui pengaturan notifikasi email",
  notify_me_when: "Beri tahu saya ketika",
  property_changes: "Perubahan properti",
  property_changes_description:
    "Beri tahu saya ketika properti item kerja seperti penanggung jawabnya, prioritas, estimasi, atau hal lainnya berubah.",
  state_change: "Perubahan status",
  state_change_description: "Beri tahu saya ketika item kerja berpindah ke status yang berbeda",
  issue_completed: "Item kerja selesai",
  issue_completed_description: "Beri tahu saya hanya ketika item kerja selesai",
  comments: "Komentar",
  comments_description: "Beri tahu saya ketika seseorang meninggalkan komentar pada item kerja",
  mentions: "Mention",
  mentions_description: "Beri tahu saya hanya ketika seseorang menyebut saya dalam komentar atau deskripsi",
  old_password: "Kata sandi lama",
  general_settings: "Pengaturan umum",
  sign_out: "Keluar",
  signing_out: "Keluar",
  active_cycles: "Siklus aktif",
  active_cycles_description:
    "Pantau siklus di seluruh proyek, lacak item kerja prioritas tinggi, dan fokus pada siklus yang membutuhkan perhatian.",
  on_demand_snapshots_of_all_your_cycles: "Snapshot sesuai permintaan dari semua siklus Anda",
  upgrade: "Tingkatkan",
  "10000_feet_view": "Tampilan 10.000 kaki dari semua siklus aktif.",
  "10000_feet_view_description":
    "Perbesar untuk melihat siklus yang berjalan di seluruh proyek Anda sekaligus, bukan berpindah dari Siklus ke Siklus di setiap proyek.",
  get_snapshot_of_each_active_cycle: "Dapatkan snapshot dari setiap siklus aktif.",
  get_snapshot_of_each_active_cycle_description:
    "Lacak metrik tingkat tinggi untuk semua siklus aktif, lihat kemajuan mereka, dan dapatkan gambaran tentang ruang lingkup terhadap tenggat waktu.",
  compare_burndowns: "Bandingkan burndown.",
  compare_burndowns_description:
    "Pantau bagaimana kinerja setiap tim Anda dengan melihat laporan burndown masing-masing siklus.",
  quickly_see_make_or_break_issues: "Lihat dengan cepat item kerja yang krusial.",
  quickly_see_make_or_break_issues_description:
    "Prabaca item kerja prioritas tinggi untuk setiap siklus terhadap tanggal jatuh tempo. Lihat semuanya per siklus hanya dengan satu klik.",
  zoom_into_cycles_that_need_attention: "Perbesar siklus yang membutuhkan perhatian.",
  zoom_into_cycles_that_need_attention_description:
    "Selidiki status siklus mana pun yang tidak sesuai dengan harapan dengan satu klik.",
  stay_ahead_of_blockers: "Tetap di depan penghambat.",
  stay_ahead_of_blockers_description:
    "Identifikasi tantangan dari satu proyek ke proyek lainnya dan lihat ketergantungan antar siklus yang tidak terlihat dari tampilan lain mana pun.",
  analytics: "Analitik",
  workspace_invites: "Undangan ruang kerja",
  enter_god_mode: "Masuk ke mode dewa",
  workspace_logo: "Logo ruang kerja",
  new_issue: "Item kerja baru",
  your_work: "Pekerjaan Anda",
  drafts: "Draf",
  projects: "Proyek",
  views: "Tampilan",
  workspace: "Ruang kerja",
  archives: "Arsip",
  settings: "Pengaturan",
  failed_to_move_favorite: "Gagal memindahkan favorit",
  favorites: "Favorit",
  no_favorites_yet: "Belum ada favorit",
  create_folder: "Buat folder",
  new_folder: "Folder baru",
  favorite_updated_successfully: "Favorit berhasil diperbarui",
  favorite_created_successfully: "Favorit berhasil dibuat",
  folder_already_exists: "Folder sudah ada",
  folder_name_cannot_be_empty: "Nama folder tidak boleh kosong",
  something_went_wrong: "Terjadi kesalahan",
  failed_to_reorder_favorite: "Gagal mengatur ulang favorit",
  favorite_removed_successfully: "Favorit berhasil dihapus",
  failed_to_create_favorite: "Gagal membuat favorit",
  failed_to_rename_favorite: "Gagal mengganti nama favorit",
  project_link_copied_to_clipboard: "Tautan proyek disalin ke clipboard",
  link_copied: "Tautan disalin",
  add_project: "Tambah proyek",
  create_project: "Buat proyek",
  failed_to_remove_project_from_favorites: "Tidak dapat menghapus proyek dari favorit. Silakan coba lagi.",
  project_created_successfully: "Proyek berhasil dibuat",
  project_created_successfully_description:
    "Proyek berhasil dibuat. Anda sekarang dapat mulai menambahkan item kerja ke dalamnya.",
  project_name_already_taken: "Nama proyek sudah digunakan",
  project_identifier_already_taken: "ID proyek sudah digunakan",
  project_cover_image_alt: "Gambar sampul proyek",
  name_is_required: "Nama diperlukan",
  title_should_be_less_than_255_characters: "Judul harus kurang dari 255 karakter",
  project_name: "Nama proyek",
  project_id_must_be_at_least_1_character: "ID proyek harus minimal 1 karakter",
  project_id_must_be_at_most_5_characters: "ID proyek maksimal 5 karakter",
  project_id: "ID proyek",
  project_id_tooltip_content:
    "Membantu Anda mengidentifikasi item kerja dalam proyek secara unik. Maksimal 10 karakter.",
  description_placeholder: "Deskripsi",
  only_alphanumeric_non_latin_characters_allowed: "Hanya karakter alfanumerik & Non-latin yang diizinkan.",
  project_id_is_required: "ID proyek diperlukan",
  project_id_allowed_char: "Hanya karakter alfanumerik & Non-latin yang diizinkan.",
  project_id_min_char: "ID proyek harus minimal 1 karakter",
  project_id_max_char: "ID proyek maksimal 10 karakter",
  project_description_placeholder: "Masukkan deskripsi proyek",
  select_network: "Pilih jaringan",
  lead: "Pemimpin",
  date_range: "Rentang tanggal",
  private: "Pribadi",
  public: "Umum",
  accessible_only_by_invite: "Diakses hanya dengan undangan",
  anyone_in_the_workspace_except_guests_can_join: "Siapa saja di ruang kerja kecuali Tamu dapat bergabung",
  creating: "Membuat",
  creating_project: "Membuat proyek",
  adding_project_to_favorites: "Menambahkan proyek ke favorit",
  project_added_to_favorites: "Proyek ditambahkan ke favorit",
  couldnt_add_the_project_to_favorites: "Tidak dapat menambahkan proyek ke favorit. Silakan coba lagi.",
  removing_project_from_favorites: "Menghapus proyek dari favorit",
  project_removed_from_favorites: "Proyek dihapus dari favorit",
  couldnt_remove_the_project_from_favorites: "Tidak dapat menghapus proyek dari favorit. Silakan coba lagi.",
  add_to_favorites: "Tambah ke favorit",
  remove_from_favorites: "Hapus dari favorit",
  publish_project: "Publikasikan proyek",
  publish: "Publikasikan",
  copy_link: "Salin tautan",
  leave_project: "Tinggalkan proyek",
  join_the_project_to_rearrange: "Bergabunglah dengan proyek untuk menyusun ulang",
  drag_to_rearrange: "Seret untuk menyusun ulang",
  congrats: "Selamat!",
  open_project: "Buka proyek",
  issues: "Item kerja",
  cycles: "Siklus",
  modules: "Modul",
  pages: "Halaman",
  intake: "Intake",
  time_tracking: "Pelacakan waktu",
  work_management: "Manajemen kerja",
  projects_and_issues: "Proyek dan item kerja",
  projects_and_issues_description: "Aktifkan atau nonaktifkan ini untuk proyek ini.",
  cycles_description:
    "Tetapkan batas waktu kerja per proyek dan sesuaikan periode waktunya sesuai kebutuhan. Satu siklus bisa 2 minggu, berikutnya 1 minggu.",
  modules_description: "Atur pekerjaan ke dalam sub-proyek dengan pemimpin dan penanggung jawab khusus.",
  views_description: "Simpan pengurutan, filter, dan opsi tampilan khusus atau bagikan dengan tim Anda.",
  pages_description: "Buat dan edit konten bebas bentuk: catatan, dokumen, apa saja.",
  intake_description: "Izinkan non-anggota membagikan bug, masukan, dan saran tanpa mengganggu alur kerja Anda.",
  time_tracking_description: "Catat waktu yang dihabiskan untuk item kerja dan proyek.",
  work_management_description: "Kelola pekerjaan dan proyek Anda dengan mudah.",
  documentation: "Dokumentasi",
  message_support: "Pesan dukungan",
  contact_sales: "Hubungi penjualan",
  hyper_mode: "Mode Hyper",
  keyboard_shortcuts: "Pintasan keyboard",
  whats_new: "Apa yang baru?",
  version: "Versi",
  we_are_having_trouble_fetching_the_updates: "Kami mengalami kesulitan mengambil pembaruan.",
  our_changelogs: "changelog kami",
  for_the_latest_updates: "untuk pembaruan terbaru.",
  please_visit: "Silakan kunjungi",
  docs: "Dokumen",
  full_changelog: "Changelog lengkap",
  support: "Dukungan",
  forum: "Forum",
  powered_by_plane_pages: "Ditenagai oleh Pranala Pages",
  please_select_at_least_one_invitation: "Silakan pilih setidaknya satu undangan.",
  please_select_at_least_one_invitation_description:
    "Silakan pilih setidaknya satu undangan untuk bergabung dengan ruang kerja.",
  we_see_that_someone_has_invited_you_to_join_a_workspace:
    "Kami melihat bahwa seseorang telah mengundang Anda untuk bergabung dengan ruang kerja",
  join_a_workspace: "Bergabunglah dengan ruang kerja",
  we_see_that_someone_has_invited_you_to_join_a_workspace_description:
    "Kami melihat bahwa seseorang telah mengundang Anda untuk bergabung dengan ruang kerja",
  join_a_workspace_description: "Bergabunglah dengan ruang kerja",
  accept_and_join: "Terima & Bergabung",
  go_home: "Kembali ke Beranda",
  no_pending_invites: "Tidak ada undangan yang tertunda",
  you_can_see_here_if_someone_invites_you_to_a_workspace:
    "Anda dapat melihat di sini jika seseorang mengundang Anda untuk bergabung dengan ruang kerja",
  back_to_home: "Kembali ke beranda",
  workspace_name: "nama-ruang-kerja",
  deactivate_your_account: "Nonaktifkan akun Anda",
  deactivate_your_account_description:
    "Setelah dinonaktifkan, Anda tidak akan dapat ditugaskan item kerja dan ditagih untuk ruang kerja Anda. Untuk mengaktifkan kembali akun Anda, Anda akan memerlukan undangan ke ruang kerja di alamat email ini.",
  deactivating: "Menonaktifkan",
  confirm: "Konfirmasi",
  confirming: "Mengonfirmasi",
  draft_created: "Draf dibuat",
  issue_created_successfully: "Item kerja berhasil dibuat",
  draft_creation_failed: "Pembuatan draf gagal",
  issue_creation_failed: "Pembuatan item kerja gagal",
  draft_issue: "Draf item kerja",
  issue_updated_successfully: "Item kerja berhasil diperbarui",
  issue_could_not_be_updated: "Item kerja tidak dapat diperbarui",
  create_a_draft: "Buat draf",
  save_to_drafts: "Simpan ke Draf",
  save: "Simpan",
  update: "Perbarui",
  updating: "Memperbarui",
  create_new_issue: "Buat item kerja baru",
  editor_is_not_ready_to_discard_changes: "Editor belum siap untuk membuang perubahan",
  failed_to_move_issue_to_project: "Gagal memindahkan item kerja ke proyek",
  create_more: "Buat lebih banyak",
  add_to_project: "Tambahkan ke proyek",
  discard: "Buang",
  duplicate_issue_found: "Item kerja duplikat ditemukan",
  duplicate_issues_found: "Item kerja duplikat ditemukan",
  no_matching_results: "Tidak ditemukan hasil yang cocok",
  title_is_required: "Judul diperlukan",
  title: "Judul",
  state: "Status",
  priority: "Prioritas",
  none: "Tidak ada",
  urgent: "Penting",
  high: "Tinggi",
  medium: "Sedang",
  low: "Rendah",
  members: "Anggota",
  assignee: "Penanggung jawab",
  assignees: "Penanggung jawab",
  you: "Anda",
  labels: "Label",
  create_new_label: "Buat label baru",
  start_date: "Tanggal mulai",
  end_date: "Tanggal akhir",
  due_date: "Tanggal jatuh tempo",
  estimate: "Estimasi",
  change_parent_issue: "Ubah item kerja induk",
  remove_parent_issue: "Hapus item kerja induk",
  add_parent: "Tambahkan induk",
  loading_members: "Memuat anggota",
  view_link_copied_to_clipboard: "Tautan tampilan disalin ke clipboard.",
  required: "Diperlukan",
  optional: "Opsional",
  Cancel: "Batal",
  edit: "Edit",
  archive: "Arsip",
  restore: "Pulihkan",
  open_in_new_tab: "Buka di tab baru",
  delete: "Hapus",
  deleting: "Menghapus",
  make_a_copy: "Buat salinan",
  move_to_project: "Pindahkan ke proyek",
  good: "Bagus",
  morning: "pagi",
  afternoon: "siang",
  evening: "malam",
  show_all: "Tampilkan semua",
  show_less: "Tampilkan lebih sedikit",
  no_data_yet: "Belum ada data",
  syncing: "Menyinkronkan",
  add_work_item: "Tambahkan item kerja",
  advanced_description_placeholder: "Tekan '/' untuk perintah",
  create_work_item: "Buat item kerja",
  attachments: "Lampiran",
  declining: "Menolak",
  declined: "Ditolak",
  decline: "Tolak",
  unassigned: "Belum ditugaskan",
  work_items: "Item kerja",
  add_link: "Tambahkan tautan",
  points: "Poin",
  no_assignee: "Belum ada penanggung jawab",
  no_assignees_yet: "Belum ada penanggung jawab",
  no_labels_yet: "Belum ada label",
  ideal: "Ideal",
  current: "Saat ini",
  no_matching_members: "Tidak ada anggota yang cocok",
  leaving: "Meninggalkan",
  removing: "Menghapus",
  leave: "Tinggalkan",
  refresh: "Muat ulang",
  refreshing: "Memuat ulang",
  refresh_status: "Muat ulang status",
  prev: "Sebelumnya",
  next: "Selanjutnya",
  re_generating: "Menghasilkan kembali",
  re_generate: "Hasilkan kembali",
  re_generate_key: "Hasilkan kembali kunci",
  export: "Ekspor",
  member: "{count, plural, one{# anggota} other{# anggota}}",
  new_password_must_be_different_from_old_password: "Kata sandi baru harus berbeda dari kata sandi lama",
  edited: "diedit",
  bot: "Bot",
  settings_description:
    "Kelola preferensi akun, workspace, dan proyek Anda di satu tempat. Beralih antar-tab untuk mengaturnya dengan mudah.",
  back_to_workspace: "Kembali ke workspace",
  project_view: {
    sort_by: {
      created_at: "Dibuat pada",
      updated_at: "Diperbarui pada",
      name: "Nama",
    },
  },
  toast: {
    success: "Berhasil!",
    error: "Kesalahan!",
  },
  links: {
    toasts: {
      created: {
        title: "Tautan dibuat",
        message: "Tautan telah berhasil dibuat",
      },
      not_created: {
        title: "Tautan tidak dibuat",
        message: "Tautan tidak dapat dibuat",
      },
      updated: {
        title: "Tautan diperbarui",
        message: "Tautan telah berhasil diperbarui",
      },
      not_updated: {
        title: "Tautan tidak diperbarui",
        message: "Tautan tidak dapat diperbarui",
      },
      removed: {
        title: "Tautan dihapus",
        message: "Tautan telah berhasil dihapus",
      },
      not_removed: {
        title: "Tautan tidak dihapus",
        message: "Tautan tidak dapat dihapus",
      },
    },
  },
  home: {
    empty: {
      quickstart_guide: "Panduan pemula Anda",
      not_right_now: "Tidak sekarang",
      create_project: {
        title: "Buat proyek",
        description: "Sebagian besar hal dimulai dengan proyek di Pranala.",
        cta: "Mulai sekarang",
      },
      invite_team: {
        title: "Undang tim Anda",
        description: "Bangun, kirim, dan kelola dengan rekan kerja.",
        cta: "Ajak mereka",
      },
      configure_workspace: {
        title: "Atur ruang kerja Anda.",
        description: "Hidupkan atau matikan fitur atau lebih dari itu.",
        cta: "Konfigurasi ruang kerja ini",
      },
      personalize_account: {
        title: "Jadikan Pranala milik Anda.",
        description: "Pilih gambar Anda, warna, dan lainnya.",
        cta: "Personalisasi sekarang",
      },
      widgets: {
        title: "Sepi Tanpa Widget, Nyalakan Mereka",
        description: "Sepertinya semua widget Anda dimatikan. Aktifkan sekarang untuk meningkatkan pengalaman Anda!",
        primary_button: {
          text: "Kelola widget",
        },
      },
    },
    quick_links: {
      empty: "Simpan tautan ke hal-hal kerja yang ingin Anda miliki.",
      add: "Tambahkan Tautan Cepat",
      title: "Tautan Cepat",
      title_plural: "Tautan Cepat",
    },
    recents: {
      title: "Terbaru",
      empty: {
        project: "Proyek terbaru Anda akan muncul di sini setelah Anda mengunjunginya.",
        page: "Halaman terbaru Anda akan muncul di sini setelah Anda mengunjunginya.",
        issue: "Item kerja terbaru Anda akan muncul di sini setelah Anda mengunjunginya.",
        default: "Anda belum memiliki yang terbaru.",
      },
      filters: {
        all: "Semua",
        projects: "Proyek",
        pages: "Halaman",
        issues: "Item kerja",
      },
    },
    new_at_plane: {
      title: "Baru di Pranala",
    },
    quick_tutorial: {
      title: "Tutorial cepat",
    },
    widget: {
      reordered_successfully: "Widget berhasil diurutkan ulang.",
      reordering_failed: "Kesalahan terjadi saat mengurutkan ulang widget.",
    },
    manage_widgets: "Kelola widget",
    title: "Beranda",
    star_us_on_github: "Beri kami bintang di GitHub",
  },
  link: {
    modal: {
      url: {
        text: "URL",
        required: "URL tidak valid",
        placeholder: "Ketik atau tempel URL",
      },
      title: {
        text: "Judul tampilan",
        placeholder: "Apa yang ingin Anda lihat sebagai tautan ini",
      },
    },
  },
  common: {
    all: "Semua",
    no_items_in_this_group: "Tidak ada item dalam grup ini",
    drop_here_to_move: "Letakkan di sini untuk memindahkan",
    states: "Status",
    state: "Status",
    state_groups: "Grup status",
    state_group: "Grup status",
    priorities: "Prioritas",
    priority: "Prioritas",
    team_project: "Proyek tim",
    project: "Proyek",
    cycle: "Siklus",
    cycles: "Siklus",
    module: "Modul",
    modules: "Modul",
    labels: "Label",
    label: "Label",
    assignees: "Penanggung jawab",
    assignee: "Penanggung jawab",
    created_by: "Dibuat oleh",
    none: "Tidak ada",
    link: "Tautan",
    estimates: "Estimasi",
    estimate: "Estimasi",
    created_at: "Dibuat pada",
    completed_at: "Selesai pada",
    layout: "Tata letak",
    filters: "Filter",
    display: "Tampilan",
    load_more: "Muat lebih banyak",
    activity: "Aktivitas",
    analytics: "Analitik",
    dates: "Tanggal",
    success: "Berhasil!",
    something_went_wrong: "Ada yang salah",
    error: {
      label: "Kesalahan!",
      message: "Terjadi kesalahan. Silakan coba lagi.",
    },
    group_by: "Kelompok berdasarkan",
    epic: "Epik",
    epics: "Epik",
    work_item: "Item kerja",
    work_items: "Item kerja",
    sub_work_item: "Sub-item kerja",
    add: "Tambah",
    warning: "Peringatan",
    updating: "Memperbarui",
    adding: "Menambahkan",
    update: "Perbarui",
    creating: "Membuat",
    create: "Buat",
    cancel: "Batalkan",
    description: "Deskripsi",
    title: "Judul",
    attachment: "Lampiran",
    general: "Umum",
    features: "Fitur",
    automation: "Otomatisasi",
    project_name: "Nama proyek",
    project_id: "ID proyek",
    project_timezone: "Zona waktu proyek",
    created_on: "Dibuat pada",
    update_project: "Perbarui proyek",
    identifier_already_exists: "Pengidentifikasi sudah ada",
    add_more: "Tambah lebih banyak",
    defaults: "Default",
    add_label: "Tambah label",
    customize_time_range: "Sesuaikan rentang waktu",
    loading: "Memuat",
    attachments: "Lampiran",
    property: "Properti",
    properties: "Properti",
    parent: "Induk",
    page: "Halaman",
    remove: "Hapus",
    archiving: "Mengarsipkan",
    archive: "Arsip",
    access: {
      public: "Publik",
      private: "Pribadi",
    },
    done: "Selesai",
    sub_work_items: "Sub-item kerja",
    comment: "Komentar",
    workspace_level: "Tingkat ruang kerja",
    order_by: {
      label: "Urutkan berdasarkan",
      manual: "Manual",
      last_created: "Terakhir dibuat",
      last_updated: "Terakhir diperbarui",
      start_date: "Tanggal mulai",
      due_date: "Tanggal jatuh tempo",
      asc: "Menaik",
      desc: "Menurun",
      updated_on: "Diperbarui pada",
    },
    sort: {
      asc: "Menaik",
      desc: "Menurun",
      created_on: "Dibuat pada",
      updated_on: "Diperbarui pada",
    },
    comments: "Komentar",
    updates: "Pembaruan",
    clear_all: "Hapus semua",
    copied: "Disalin!",
    link_copied: "Tautan disalin!",
    link_copied_to_clipboard: "Tautan disalin ke clipboard",
    copied_to_clipboard: "Tautan item kerja disalin ke clipboard",
    is_copied_to_clipboard: "Item kerja disalin ke clipboard",
    no_links_added_yet: "Belum ada tautan yang ditambahkan",
    add_link: "Tambah tautan",
    links: "Tautan",
    go_to_workspace: "Pergi ke ruang kerja",
    progress: "Kemajuan",
    optional: "Opsional",
    join: "Bergabung",
    go_back: "Kembali",
    continue: "Lanjutkan",
    resend: "Kirim ulang",
    relations: "Hubungan",
    errors: {
      default: {
        title: "Kesalahan!",
        message: "Terjadi kesalahan. Silakan coba lagi.",
      },
      required: "Bidang ini diperlukan",
      entity_required: "{entity} diperlukan",
      restricted_entity: "{entity} dibatasi",
    },
    update_link: "Perbarui tautan",
    attach: "Lampirkan",
    create_new: "Buat baru",
    add_existing: "Tambah yang ada",
    type_or_paste_a_url: "Ketik atau tempel URL",
    url_is_invalid: "URL tidak valid",
    display_title: "Judul tampilan",
    link_title_placeholder: "Apa yang ingin Anda lihat pada tautan ini",
    url: "URL",
    side_peek: "Tampilan samping",
    modal: "Dialog",
    full_screen: "Layar penuh",
    close_peek_view: "Tutup tampilan samping",
    toggle_peek_view_layout: "Ubah tata letak tampilan samping",
    options: "Opsi",
    duration: "Durasi",
    today: "Hari ini",
    week: "Minggu",
    month: "Bulan",
    quarter: "Kuartal",
    press_for_commands: "Tekan '/' untuk perintah",
    click_to_add_description: "Klik untuk menambahkan deskripsi",
    search: {
      label: "Pencarian",
      placeholder: "Ketik untuk mencari",
      no_matches_found: "Tidak ditemukan kecocokan",
      no_matching_results: "Tidak ditemukan hasil yang cocok",
    },
    actions: {
      edit: "Edit",
      make_a_copy: "Buat salinan",
      open_in_new_tab: "Buka di tab baru",
      copy_link: "Salin tautan",
      archive: "Arsip",
      restore: "Pulihkan",
      delete: "Hapus",
      remove_relation: "Hapus hubungan",
      subscribe: "Ikuti",
      unsubscribe: "Berhenti mengikuti",
      clear_sorting: "Hapus pengurutan",
      show_weekends: "Tampilkan akhir pekan",
      enable: "Aktifkan",
      disable: "Nonaktifkan",
      copy_markdown: "Salin markdown",
    },
    name: "Nama",
    discard: "Buang",
    confirm: "Konfirmasi",
    confirming: "Mengonfirmasi",
    read_the_docs: "Baca dokumen",
    default: "Bawaan",
    active: "Aktif",
    enabled: "Diaktifkan",
    disabled: "Dinonaktifkan",
    mandate: "Mandat",
    mandatory: "Wajib",
    yes: "Ya",
    no: "Tidak",
    please_wait: "Silakan tunggu",
    enabling: "Mengaktifkan",
    disabling: "Menonaktifkan",
    beta: "Beta",
    or: "atau",
    next: "Selanjutnya",
    back: "Kembali",
    cancelling: "Membatalkan",
    configuring: "Mengonfigurasi",
    clear: "Bersihkan",
    import: "Impor",
    connect: "Sambungkan",
    authorizing: "Mengautentikasi",
    processing: "Memproses",
    no_data_available: "Tidak ada data tersedia",
    from: "dari {name}",
    authenticated: "Terautentikasi",
    select: "Pilih",
    upgrade: "Tingkatkan",
    add_seats: "Tambahkan Kursi",
    projects: "Proyek",
    workspace: "Ruang kerja",
    workspaces: "Ruang kerja",
    team: "Tim",
    teams: "Tim",
    entity: "Entitas",
    entities: "Entitas",
    task: "Tugas",
    tasks: "Tugas",
    section: "Bagian",
    sections: "Bagian",
    edit: "Edit",
    connecting: "Menghubungkan",
    connected: "Terhubung",
    disconnect: "Putuskan",
    disconnecting: "Memutuskan",
    installing: "Menginstal",
    install: "Instal",
    reset: "Atur ulang",
    live: "Langsung",
    change_history: "Riwayat Perubahan",
    coming_soon: "Segera hadir",
    member: "Anggota",
    members: "Anggota",
    you: "Anda",
    upgrade_cta: {
      higher_subscription: "Tingkatkan ke langganan yang lebih tinggi",
      talk_to_sales: "Hubungi tim Sales",
    },
    category: "Kategori",
    categories: "Kategori",
    saving: "Menyimpan",
    save_changes: "Simpan perubahan",
    delete: "Hapus",
    deleting: "Menghapus",
    pending: "Tertunda",
    invite: "Undang",
    view: "Lihat",
    deactivated_user: "Pengguna dinonaktifkan",
    apply: "Terapkan",
    applying: "Menerapkan",
    overview: "Ikhtisar",
    users: "Pengguna",
    admins: "Admin",
    guests: "Tamu",
    on_track: "Sesuai jalur",
    off_track: "Menyimpang",
    at_risk: "Berisiko",
    timeline: "Linimasa",
    completion: "Penyelesaian",
    upcoming: "Mendatang",
    completed: "Selesai",
    in_progress: "Sedang berlangsung",
    planned: "Direncanakan",
    paused: "Dijeda",
    no_of: "Jumlah {entity}",
    resolved: "Terselesaikan",
  },
  chart: {
    x_axis: "Sumbu-X",
    y_axis: "Sumbu-Y",
    metric: "Metrik",
  },
  form: {
    title: {
      required: "Judul wajib diisi",
      max_length: "Judul harus kurang dari {length} karakter",
    },
  },
  entity: {
    grouping_title: "Pengelompokan {entity}",
    priority: "Prioritas {entity}",
    all: "Semua {entity}",
    drop_here_to_move: "Letakkan di sini untuk memindahkan {entity}",
    delete: {
      label: "Hapus {entity}",
      success: "{entity} berhasil dihapus",
      failed: "Gagal menghapus {entity}",
    },
    update: {
      failed: "Gagal memperbarui {entity}",
      success: "{entity} berhasil diperbarui",
    },
    link_copied_to_clipboard: "Tautan {entity} disalin ke papan klip",
    fetch: {
      failed: "Terjadi kesalahan saat mengambil {entity}",
    },
    add: {
      success: "{entity} berhasil ditambahkan",
      failed: "Terjadi kesalahan saat menambahkan {entity}",
    },
    remove: {
      success: "{entity} berhasil dihapus",
      failed: "Terjadi kesalahan saat menghapus {entity}",
    },
  },
  epic: {
    all: "Semua Epik",
    label: "{count, plural, one {Epik} other {Epik}}",
    new: "Epik Baru",
    adding: "Menambahkan epik",
    create: {
      success: "Epik berhasil dibuat",
    },
    add: {
      press_enter: "Tekan 'Enter' untuk menambahkan epik lain",
      label: "Tambahkan Epik",
    },
    title: {
      label: "Judul Epik",
      required: "Judul epik wajib diisi.",
    },
  },
  issue: {
    label: "{count, plural, one {Item Kerja} other {Item Kerja}}",
    all: "Semua Item Kerja",
    edit: "Edit item kerja",
    title: {
      label: "Judul item kerja",
      required: "Judul item kerja diperlukan.",
    },
    add: {
      press_enter: "Tekan 'Enter' untuk menambahkan item kerja lainnya",
      label: "Tambah item kerja",
      cycle: {
        failed: "Item kerja tidak dapat ditambahkan ke siklus. Silakan coba lagi.",
        success: "{count, plural, one {Item Kerja} other {Item Kerja}} berhasil ditambahkan ke siklus.",
        loading: "Menambahkan {count, plural, one {item kerja} other {item kerja}} ke siklus",
      },
      assignee: "Tambahkan penanggung jawab",
      start_date: "Tambah tanggal mulai",
      due_date: "Tambah tanggal jatuh tempo",
      parent: "Tambah item kerja induk",
      sub_issue: "Tambah sub-item kerja",
      relation: "Tambah hubungan",
      link: "Tambah tautan",
      existing: "Tambah item kerja yang ada",
    },
    remove: {
      label: "Hapus item kerja",
      cycle: {
        loading: "Menghapus item kerja dari siklus",
        success: "Item kerja berhasil dihapus dari siklus.",
        failed: "Item kerja tidak dapat dihapus dari siklus. Silakan coba lagi.",
      },
      module: {
        loading: "Menghapus item kerja dari modul",
        success: "Item kerja berhasil dihapus dari modul.",
        failed: "Item kerja tidak dapat dihapus dari modul. Silakan coba lagi.",
      },
      parent: {
        label: "Hapus item kerja induk",
      },
    },
    new: "Item Kerja Baru",
    adding: "Menambahkan item kerja",
    create: {
      success: "Item kerja berhasil dibuat",
    },
    priority: {
      urgent: "Mendesak",
      high: "Tinggi",
      medium: "Sedang",
      low: "Rendah",
    },
    display: {
      properties: {
        label: "Tampilkan Properti",
        id: "ID",
        issue_type: "Tipe item kerja",
        sub_issue_count: "Jumlah sub-item kerja",
        attachment_count: "Jumlah lampiran",
        created_on: "Dibuat pada",
        sub_issue: "Sub-item kerja",
        work_item_count: "Jumlah item kerja",
      },
      extra: {
        show_sub_issues: "Tampilkan sub-item kerja",
        show_empty_groups: "Tampilkan grup kosong",
      },
    },
    layouts: {
      ordered_by_label: "Tata letak ini diurutkan berdasarkan",
      list: "Daftar",
      kanban: "Kanban",
      calendar: "Kalender",
      spreadsheet: "Tabel",
      gantt: "Gantt",
      title: {
        list: "Tata Letak Daftar",
        kanban: "Tata letak Kanban",
        calendar: "Tata Letak Kalender",
        spreadsheet: "Tata Letak Tabel",
        gantt: "Tata letak Gantt",
      },
    },
    states: {
      active: "Aktif",
      backlog: "Backlog",
    },
    comments: {
      placeholder: "Tambah komentar",
      switch: {
        private: "Beralih ke komentar pribadi",
        public: "Beralih ke komentar publik",
      },
      create: {
        success: "Komentar berhasil dibuat",
        error: "Gagal membuat komentar. Silakan coba lagi nanti.",
      },
      update: {
        success: "Komentar berhasil diperbarui",
        error: "Gagal memperbarui komentar. Silakan coba lagi nanti.",
      },
      remove: {
        success: "Komentar berhasil dihapus",
        error: "Gagal menghapus komentar. Silakan coba lagi nanti.",
      },
      upload: {
        error: "Gagal mengunggah aset. Silakan coba lagi nanti.",
      },
      copy_link: {
        success: "Tautan komentar berhasil disalin ke clipboard",
        error: "Gagal menyalin tautan komentar. Silakan coba lagi nanti.",
      },
    },
    empty_state: {
      issue_detail: {
        title: "Item kerja tidak ada",
        description: "Item kerja yang Anda cari tidak ada, telah diarsipkan, atau telah dihapus.",
        primary_button: {
          text: "Lihat item kerja lainnya",
        },
      },
    },
    sibling: {
      label: "Item kerja sejawat",
    },
    archive: {
      description: "Hanya item kerja yang selesai atau dibatalkan\n yang dapat diarsipkan",
      label: "Arsip Item kerja",
      confirm_message:
        "Apakah Anda yakin ingin mengarsipkan item kerja ini? Semua item kerja yang diarsipkan dapat dipulihkan nanti.",
      success: {
        label: "Berhasil mengarsipkan",
        message: "Arsip Anda dapat ditemukan di arsip proyek.",
      },
      failed: {
        message: "Item kerja tidak dapat diarsipkan. Silakan coba lagi.",
      },
    },
    restore: {
      success: {
        title: "Berhasil memulihkan",
        message: "Item kerja Anda dapat ditemukan di item kerja proyek.",
      },
      failed: {
        message: "Item kerja tidak dapat dipulihkan. Silakan coba lagi.",
      },
    },
    relation: {
      relates_to: "Berhubungan dengan",
      duplicate: "Duplikat dari",
      blocked_by: "Diblokir oleh",
      blocking: "Memblokir",
    },
    copy_link: "Salin tautan item kerja",
    delete: {
      label: "Hapus item kerja",
      error: "Kesalahan saat menghapus item kerja",
    },
    subscription: {
      actions: {
        subscribed: "Item kerja berhasil diikuti",
        unsubscribed: "Item kerja tidak lagi diikuti",
      },
    },
    select: {
      error: "Silakan pilih setidaknya satu item kerja",
      empty: "Tidak ada item kerja yang dipilih",
      add_selected: "Tambah item kerja yang dipilih",
      select_all: "Pilih semua item kerja",
      deselect_all: "Batalkan pilihan semua item kerja",
    },
    open_in_full_screen: "Buka item kerja dalam layar penuh",
  },
  attachment: {
    error: "File tidak dapat dilampirkan. Coba unggah lagi.",
    only_one_file_allowed: "Hanya satu file yang dapat diunggah pada satu waktu.",
    file_size_limit: "File harus berukuran {size}MB atau lebih kecil.",
    drag_and_drop: "Seret dan jatuhkan di mana saja untuk mengunggah",
    delete: "Hapus lampiran",
  },
  label: {
    select: "Pilih label",
    create: {
      success: "Label berhasil dibuat",
      failed: "Gagal membuat label",
      already_exists: "Label sudah ada",
      type: "Ketik untuk menambah label baru",
    },
  },
  sub_work_item: {
    update: {
      success: "Sub-item kerja berhasil diperbarui",
      error: "Kesalahan saat memperbarui sub-item kerja",
    },
    remove: {
      success: "Sub-item kerja berhasil dihapus",
      error: "Kesalahan saat menghapus sub-item kerja",
    },
    empty_state: {
      sub_list_filters: {
        title: "Anda tidak memiliki sub-item kerja yang cocok dengan filter yang Anda terapkan.",
        description: "Untuk melihat semua sub-item kerja, hapus semua filter yang diterapkan.",
        action: "Hapus filter",
      },
      list_filters: {
        title: "Anda tidak memiliki item kerja yang cocok dengan filter yang Anda terapkan.",
        description: "Untuk melihat semua item kerja, hapus semua filter yang diterapkan.",
        action: "Hapus filter",
      },
    },
  },
  view: {
    label: "{count, plural, one {Tampilan} other {Tampilan}}",
    create: {
      label: "Buat Tampilan",
    },
    update: {
      label: "Perbarui Tampilan",
    },
  },
  inbox_issue: {
    status: {
      pending: {
        title: "Menunggu",
        description: "Menunggu",
      },
      declined: {
        title: "Ditolak",
        description: "Ditolak",
      },
      snoozed: {
        title: "Ditunda",
        description: "{days, plural, one{# hari} other{# hari}} tersisa",
      },
      accepted: {
        title: "Diterima",
        description: "Diterima",
      },
      duplicate: {
        title: "Duplikat",
        description: "Duplikat",
      },
    },
    modals: {
      decline: {
        title: "Tolak item kerja",
        content: "Apakah Anda yakin ingin menolak item kerja {value}?",
      },
      delete: {
        title: "Hapus item kerja",
        content: "Apakah Anda yakin ingin menghapus item kerja {value}?",
        success: "Item kerja berhasil dihapus",
      },
    },
    errors: {
      snooze_permission: "Hanya admin proyek yang bisa menunda/menghapus penundaan item kerja",
      accept_permission: "Hanya admin proyek yang bisa menerima item kerja",
      decline_permission: "Hanya admin proyek yang bisa menolak item kerja",
    },
    actions: {
      accept: "Terima",
      decline: "Tolak",
      snooze: "Tunda",
      unsnooze: "Hapus penundaan",
      copy: "Salin tautan item kerja",
      delete: "Hapus",
      open: "Buka item kerja",
      mark_as_duplicate: "Tandai sebagai duplikat",
      move: "Pindahkan {value} ke item kerja proyek",
    },
    source: {
      "in-app": "dalam aplikasi",
    },
    order_by: {
      created_at: "Dibuat pada",
      updated_at: "Diperbarui pada",
      id: "ID",
    },
    label: "Intake",
    page_label: "{workspace} - Intake",
    modal: {
      title: "Buat item kerja Intake",
    },
    tabs: {
      open: "Terbuka",
      closed: "Tutup",
    },
    empty_state: {
      sidebar_open_tab: {
        title: "Tidak ada item kerja terbuka",
        description: "Temukan item kerja terbuka di sini. Buat item kerja baru.",
      },
      sidebar_closed_tab: {
        title: "Tidak ada item kerja tertutup",
        description: "Semua item kerja yang diterima atau ditolak dapat ditemukan di sini.",
      },
      sidebar_filter: {
        title: "Tidak ada item kerja yang cocok",
        description:
          "Tidak ada item kerja yang cocok dengan filter yang diterapkan dalam Intake. Buat item kerja baru.",
      },
      detail: {
        title: "Pilih item kerja untuk melihat detailnya.",
      },
    },
  },
  workspace_creation: {
    heading: "Buat ruang kerja Anda",
    subheading: "Untuk mulai menggunakan Pranala, Anda perlu membuat atau bergabung dengan ruang kerja.",
    form: {
      name: {
        label: "Nama ruang kerja Anda",
        placeholder: "Sesuatu yang familiar dan dapat dikenali selalu lebih baik.",
      },
      url: {
        label: "Atur URL ruang kerja Anda",
        placeholder: "Ketik atau tempel URL",
        edit_slug: "Anda hanya dapat mengedit slug URL",
      },
      organization_size: {
        label: "Berapa banyak orang yang akan menggunakan ruang kerja ini?",
        placeholder: "Pilih rentang",
      },
    },
    errors: {
      creation_disabled: {
        title: "Hanya admin instansi Anda yang dapat membuat ruang kerja",
        description:
          "Jika Anda tahu alamat email admin instansi Anda, klik tombol di bawah ini untuk menghubungi mereka.",
        request_button: "Minta admin instansi",
      },
      validation: {
        name_alphanumeric: "Nama ruang kerja hanya boleh berisi (' '), ('-'), ('_') dan karakter alfanumerik.",
        name_length: "Batasi nama Anda hingga 80 karakter.",
        url_alphanumeric: "URL hanya boleh berisi ('-') dan karakter alfanumerik.",
        url_length: "Batasi URL Anda hingga 48 karakter.",
        url_already_taken: "URL ruang kerja sudah diambil!",
      },
    },
    request_email: {
      subject: "Meminta ruang kerja baru",
      body: "Hai admin instansi,\n\nTolong buat ruang kerja baru dengan URL [/workspace-name] untuk [tujuan pembuatan ruang kerja].\n\nTerima kasih,\n{firstName} {lastName}\n{email}",
    },
    button: {
      default: "Buat ruang kerja",
      loading: "Membuat ruang kerja",
    },
    toast: {
      success: {
        title: "Berhasil",
        message: "Ruang kerja berhasil dibuat",
      },
      error: {
        title: "Kesalahan",
        message: "Ruang kerja tidak dapat dibuat. Silakan coba lagi.",
      },
    },
  },
  workspace_dashboard: {
    empty_state: {
      general: {
        title: "Ikhtisar proyek, aktivitas, dan metrik Anda",
        description:
          "Selamat datang di Pranala, kami sangat senang memiliki Anda di sini. Buat proyek pertama Anda dan lacak item kerja Anda, dan halaman ini akan berubah menjadi ruang yang membantu Anda berkembang. Admin juga akan melihat item yang membantu tim mereka berkembang.",
        primary_button: {
          text: "Bangun proyek pertama Anda",
          comic: {
            title: "Segalanya dimulai dengan proyek di Pranala",
            description: "Sebuah proyek bisa menjadi roadmap produk, kampanye pemasaran, atau meluncurkan mobil baru.",
          },
        },
      },
    },
  },
  workspace_analytics: {
    label: "Analitik",
    page_label: "{workspace} - Analitik",
    open_tasks: "Jumlah tugas terbuka",
    error: "Terjadi kesalahan dalam mengambil data.",
    work_items_closed_in: "Item kerja yang ditutup dalam",
    selected_projects: "Proyek yang dipilih",
    total_members: "Jumlah anggota total",
    total_cycles: "Jumlah siklus total",
    total_modules: "Jumlah modul total",
    pending_work_items: {
      title: "Item kerja yang menunggu",
      empty_state: "Analisis item kerja yang menunggu oleh rekan kerja muncul di sini.",
    },
    work_items_closed_in_a_year: {
      title: "Item kerja yang ditutup dalam setahun",
      empty_state: "Tutup item kerja untuk melihat analisisnya dalam bentuk grafik.",
    },
    most_work_items_created: {
      title: "Paling banyak item kerja yang dibuat",
      empty_state: "Rekan kerja dan jumlah item kerja yang mereka buat muncul di sini.",
    },
    most_work_items_closed: {
      title: "Paling banyak item kerja yang ditutup",
      empty_state: "Rekan kerja dan jumlah item kerja yang mereka tutup muncul di sini.",
    },
    tabs: {
      scope_and_demand: "Lingkup dan Permintaan",
      custom: "Analitik Kustom",
    },
    empty_state: {
      customized_insights: {
        description: "Item kerja yang ditugaskan kepada Anda, dikelompokkan berdasarkan status, akan muncul di sini.",
        title: "Belum ada data",
      },
      created_vs_resolved: {
        description: "Item pekerjaan yang dibuat dan diselesaikan dari waktu ke waktu akan muncul di sini.",
        title: "Belum ada data",
      },
      project_insights: {
        title: "Belum ada data",
        description: "Item kerja yang ditugaskan kepada Anda, dikelompokkan berdasarkan status, akan muncul di sini.",
      },
      general: {
        title: "Lacak kemajuan, beban kerja, dan alokasi. Temukan tren, hapus hambatan, dan percepat pekerjaan",
        description:
          "Lihat lingkup versus permintaan, estimasi, dan perluasan lingkup. Dapatkan kinerja berdasarkan anggota tim dan tim, dan pastikan proyek Anda berjalan tepat waktu.",
        primary_button: {
          text: "Mulai proyek pertama Anda",
          comic: {
            title: "Analitik bekerja paling baik dengan Siklus + Modul",
            description:
              "Pertama, batasi waktu masalah Anda ke dalam Siklus dan, jika Anda bisa, kelompokkan masalah yang lebih dari satu siklus ke dalam Modul. Lihat keduanya di navigasi kiri.",
          },
        },
      },
    },
    created_vs_resolved: "Dibuat vs Diselesaikan",
    customized_insights: "Wawasan yang Disesuaikan",
    backlog_work_items: "{entity} backlog",
    active_projects: "Proyek Aktif",
    trend_on_charts: "Tren pada grafik",
    all_projects: "Semua Proyek",
    summary_of_projects: "Ringkasan Proyek",
    project_insights: "Wawasan Proyek",
    started_work_items: "{entity} yang telah dimulai",
    total_work_items: "Total {entity}",
    total_projects: "Total Proyek",
    total_admins: "Total Admin",
    total_users: "Total Pengguna",
    total_intake: "Total Intake",
    un_started_work_items: "{entity} yang belum dimulai",
    total_guests: "Total Tamu",
    completed_work_items: "{entity} yang telah selesai",
    total: "Total {entity}",
  },
  workspace_projects: {
    label: "{count, plural, one {Proyek} other {Proyek}}",
    create: {
      label: "Tambah Proyek",
    },
    network: {
      label: "Jaringan",
      private: {
        title: "Pribadi",
        description: "Dapat diakses hanya dengan undangan",
      },
      public: {
        title: "Umum",
        description: "Siapa pun di ruang kerja kecuali Tamu dapat bergabung",
      },
    },
    error: {
      permission: "Anda tidak memiliki izin untuk melakukan tindakan ini.",
      cycle_delete: "Gagal menghapus siklus",
      module_delete: "Gagal menghapus modul",
      issue_delete: "Gagal menghapus item kerja",
    },
    state: {
      backlog: "Backlog",
      unstarted: "Belum dimulai",
      started: "Dimulai",
      completed: "Selesai",
      cancelled: "Dibatalkan",
    },
    sort: {
      manual: "Manual",
      name: "Nama",
      created_at: "Tanggal dibuat",
      members_length: "Jumlah anggota",
    },
    scope: {
      my_projects: "Proyek saya",
      archived_projects: "Diarsipkan",
    },
    common: {
      months_count: "{months, plural, one{# bulan} other{# bulan}}",
    },
    empty_state: {
      general: {
        title: "Tidak ada proyek aktif",
        description:
          "Anggap setiap proyek sebagai wadah untuk pekerjaan yang berorientasi pada tujuan. Di sinilah item kerja, siklus, dan modul berada untuk membantu Anda mencapai tujuan bersama tim. Buat proyek baru atau tampilkan proyek yang diarsipkan.",
        primary_button: {
          text: "Mulai proyek pertama Anda",
          comic: {
            title: "Segalanya dimulai dengan proyek di Pranala",
            description: "Sebuah proyek bisa menjadi roadmap produk, kampanye pemasaran, atau meluncurkan mobil baru.",
          },
        },
      },
      no_projects: {
        title: "Tidak ada proyek",
        description:
          "Untuk membuat item kerja atau mengelola pekerjaan Anda, Anda perlu membuat proyek atau menjadi bagian dari salah satunya.",
        primary_button: {
          text: "Mulai proyek pertama Anda",
          comic: {
            title: "Segalanya dimulai dengan proyek di Pranala",
            description: "Sebuah proyek bisa menjadi roadmap produk, kampanye pemasaran, atau meluncurkan mobil baru.",
          },
        },
      },
      filter: {
        title: "Tidak ada proyek yang cocok",
        description: "Tidak ada proyek yang sesuai dengan kriteria. \nBuat proyek baru sebagai gantinya.",
      },
      search: {
        description: "Tidak ada proyek yang sesuai dengan kriteria.\nBuat proyek baru sebagai gantinya.",
      },
    },
  },
  workspace_views: {
    add_view: "Tambah tampilan",
    empty_state: {
      "all-issues": {
        title: "Tidak ada item kerja dalam proyek",
        description:
          "Proyek pertama sudah selesai! Sekarang, bagi pekerjaan Anda menjadi bagian yang dapat dilacak dengan item kerja. Mari kita mulai!",
        primary_button: {
          text: "Buat item kerja baru",
        },
      },
      assigned: {
        title: "Belum ada item kerja",
        description: "Item kerja yang ditugaskan kepada Anda dapat dilacak di sini.",
        primary_button: {
          text: "Buat item kerja baru",
        },
      },
      created: {
        title: "Belum ada item kerja",
        description: "Semua item kerja yang dibuat oleh Anda akan muncul di sini, lacak mereka langsung di sini.",
        primary_button: {
          text: "Buat item kerja baru",
        },
      },
      subscribed: {
        title: "Belum ada item kerja",
        description: "Ikuti item kerja yang Anda minati dan lacak semuanya di sini.",
      },
      "custom-view": {
        title: "Belum ada item kerja",
        description: "Item kerja yang sesuai dengan filter ini akan muncul di sini.",
      },
    },
    delete_view: {
      title: "Apakah Anda yakin ingin menghapus tampilan ini?",
      content:
        "Jika Anda mengonfirmasi, semua opsi pengurutan, filter, dan tampilan + tata letak yang telah Anda pilih untuk tampilan ini akan dihapus secara permanen tanpa cara untuk memulihkannya.",
    },
  },
  account_settings: {
    profile: {
      change_email_modal: {
        title: "Ubah email",
        description: "Masukkan alamat email baru untuk menerima tautan verifikasi.",
        toasts: {
          success_title: "Berhasil!",
          success_message: "Email berhasil diperbarui. Silakan masuk kembali.",
        },
        form: {
          email: {
            label: "Email baru",
            placeholder: "Masukkan email Anda",
            errors: {
              required: "Email wajib diisi",
              invalid: "Email tidak valid",
              exists: "Email sudah ada. Gunakan yang lain.",
              validation_failed: "Validasi email gagal. Coba lagi.",
            },
          },
          code: {
            label: "Kode unik",
            placeholder: "123456",
            helper_text: "Kode verifikasi dikirim ke email baru Anda.",
            errors: {
              required: "Kode unik wajib diisi",
              invalid: "Kode verifikasi tidak valid. Coba lagi.",
            },
          },
        },
        actions: {
          continue: "Lanjutkan",
          confirm: "Konfirmasi",
          cancel: "Batal",
        },
        states: {
          sending: "Mengirim…",
        },
      },
    },
    preferences: {
      heading: "Preferensi",
      description: "Sesuaikan pengalaman aplikasi dengan cara kerja Anda.",
    },
    notifications: {
      heading: "Notifikasi email",
      description: "Dapatkan pembaruan tentang item kerja yang Anda ikuti. Aktifkan untuk menerima notifikasi.",
    },
    security: {
      heading: "Keamanan",
    },
    api_tokens: {
      heading: "Token akses pribadi",
      description: "Buat token API yang aman untuk mengintegrasikan data dengan sistem dan aplikasi eksternal.",
    },
    activity: {
      heading: "Aktivitas",
      description: "Lacak tindakan dan perubahan terbaru Anda di semua proyek dan item kerja.",
    },
  },
  workspace_settings: {
    label: "Pengaturan ruang kerja",
    page_label: "{workspace} - Pengaturan Umum",
    key_created: "Kunci dibuat",
    copy_key:
      "Salin dan simpan kunci rahasia ini di Halaman Pranala. Anda tidak dapat melihat kunci ini setelah Anda menekan Tutup. File CSV yang berisi kunci telah diunduh.",
    token_copied: "Token disalin ke clipboard.",
    settings: {
      general: {
        title: "Umum",
        upload_logo: "Unggah logo",
        edit_logo: "Edit logo",
        name: "Nama ruang kerja",
        company_size: "Ukuran perusahaan",
        url: "URL ruang kerja",
        workspace_timezone: "Zona waktu ruang kerja",
        update_workspace: "Perbarui ruang kerja",
        delete_workspace: "Hapus ruang kerja ini",
        delete_workspace_description:
          "Saat ruang kerja dihapus, semua data dan sumber dayanya akan dihapus permanen dan tidak dapat dipulihkan.",
        delete_btn: "Hapus ruang kerja ini",
        delete_modal: {
          title: "Apakah Anda yakin ingin menghapus ruang kerja ini?",
          description:
            "Anda memiliki percobaan aktif untuk salah satu rencana berbayar kami. Silakan batalkan terlebih dahulu untuk melanjutkan.",
          dismiss: "Tutup",
          cancel: "Batalkan percobaan",
          success_title: "Ruang kerja dihapus.",
          success_message: "Anda akan segera diarahkan ke halaman profil Anda.",
          error_title: "Itu tidak berhasil.",
          error_message: "Silakan coba lagi.",
        },
        errors: {
          name: {
            required: "Nama diperlukan",
            max_length: "Nama ruang kerja tidak boleh lebih dari 80 karakter",
          },
          company_size: {
            required: "Ukuran perusahaan diperlukan",
            select_a_range: "Pilih ukuran organisasi",
          },
        },
      },
      members: {
        title: "Anggota",
        add_member: "Tambah anggota",
        pending_invites: "Undangan yang tertunda",
        invitations_sent_successfully: "Undangan berhasil dikirim",
        leave_confirmation:
          "Apakah Anda yakin ingin meninggalkan ruang kerja? Anda tidak akan lagi memiliki akses ke ruang kerja ini. Tindakan ini tidak dapat dibatalkan.",
        details: {
          full_name: "Nama lengkap",
          display_name: "Nama tampilan",
          email_address: "Alamat email",
          account_type: "Tipe akun",
          authentication: "Autentikasi",
          joining_date: "Tanggal bergabung",
        },
        modal: {
          title: "Undang orang untuk berkolaborasi",
          description: "Undang orang untuk berkolaborasi di ruang kerja Anda.",
          button: "Kirim undangan",
          button_loading: "Mengirim undangan",
          placeholder: "name@company.com",
          errors: {
            required: "Kami perlu alamat email untuk mengundang mereka.",
            invalid: "Email tidak valid",
          },
        },
      },
      billing_and_plans: {
        heading: "Penagihan & paket",
        description: "Pilih paket, kelola langganan, dan tingkatkan paket sesuai kebutuhan Anda.",
        title: "Penagihan & Rencana",
        current_plan: "Rencana saat ini",
        free_plan: "Anda saat ini menggunakan rencana gratis",
        view_plans: "Lihat rencana",
      },
      exports: {
        heading: "Ekspor",
        description: "Ekspor data proyek dalam berbagai format dan akses riwayat ekspor melalui tautan unduhan.",
        title: "Ekspor",
        exporting: "Mengekspor",
        previous_exports: "Ekspor sebelumnya",
        export_separate_files: "Ekspor data ke file terpisah",
        exporting_projects: "Mengekspor proyek",
        format: "Format",
        filters_info: "Terapkan filter untuk mengekspor item kerja tertentu berdasarkan kriteria Anda.",
        modal: {
          title: "Ekspor ke",
          toasts: {
            success: {
              title: "Ekspor berhasil",
              message: "Anda akan dapat mengunduh {entity} yang diekspor dari ekspor sebelumnya.",
            },
            error: {
              title: "Ekspor gagal",
              message: "Ekspor tidak berhasil. Silakan coba lagi.",
            },
          },
        },
      },
      webhooks: {
        heading: "Webhook",
        description: "Otomatiskan notifikasi ke layanan eksternal saat terjadi peristiwa dalam proyek.",
        title: "Webhook",
        add_webhook: "Tambah webhook",
        modal: {
          title: "Buat webhook",
          details: "Detail webhook",
          payload: "Payload URL",
          question: "Peristiwa apa yang ingin Anda picu untuk webhook ini?",
          error: "URL diperlukan",
        },
        secret_key: {
          title: "Kunci rahasia",
          message: "Hasilkan token untuk masuk ke payload webhook",
        },
        options: {
          all: "Kirim saya semuanya",
          individual: "Pilih peristiwa individu",
        },
        toasts: {
          created: {
            title: "Webhook dibuat",
            message: "Webhook telah berhasil dibuat",
          },
          not_created: {
            title: "Webhook tidak dibuat",
            message: "Webhook tidak dapat dibuat",
          },
          updated: {
            title: "Webhook diperbarui",
            message: "Webhook telah berhasil diperbarui",
          },
          not_updated: {
            title: "Webhook tidak diperbarui",
            message: "Webhook tidak dapat diperbarui",
          },
          removed: {
            title: "Webhook dihapus",
            message: "Webhook telah berhasil dihapus",
          },
          not_removed: {
            title: "Webhook tidak dihapus",
            message: "Webhook tidak dapat dihapus",
          },
          secret_key_copied: {
            message: "Kunci rahasia disalin ke clipboard.",
          },
          secret_key_not_copied: {
            message: "Terjadi kesalahan saat menyalin kunci rahasia.",
          },
        },
      },
      api_tokens: {
        title: "Token API",
        add_token: "Tambah token API",
        create_token: "Buat token",
        never_expires: "Tidak pernah kedaluwarsa",
        generate_token: "Hasilkan token",
        generating: "Menghasilkan",
        delete: {
          title: "Hapus token API",
          description:
            "Setiap aplikasi yang menggunakan token ini tidak akan memiliki akses ke data Pranala. Tindakan ini tidak dapat dibatalkan.",
          success: {
            title: "Berhasil!",
            message: "Token API telah berhasil dihapus",
          },
          error: {
            title: "Kesalahan!",
            message: "Token API tidak dapat dihapus",
          },
        },
      },
    },
    empty_state: {
      api_tokens: {
        title: "Belum ada token API yang dibuat",
        description:
          "API Pranala dapat digunakan untuk mengintegrasikan data Anda di Pranala dengan sistem eksternal mana pun. Buat token untuk memulai.",
      },
      webhooks: {
        title: "Belum ada webhook yang ditambahkan",
        description: "Buat webhook untuk menerima pembaruan waktu nyata dan mengotomatiskan tindakan.",
      },
      exports: {
        title: "Belum ada ekspor",
        description: "Setiap kali Anda mengekspor, Anda juga akan memiliki salinan di sini untuk referensi.",
      },
      imports: {
        title: "Belum ada impor",
        description: "Temukan semua impor Anda sebelumnya di sini dan unduh.",
      },
    },
  },
  profile: {
    label: "Profil",
    page_label: "Pekerjaan Anda",
    work: "Pekerjaan",
    details: {
      joined_on: "Bergabung pada",
      time_zone: "Zona waktu",
    },
    stats: {
      workload: "Beban kerja",
      overview: "Ikhtisar",
      created: "Item kerja yang dibuat",
      assigned: "Item kerja yang ditugaskan",
      subscribed: "Item kerja yang diikuti",
      state_distribution: {
        title: "Item kerja berdasarkan status",
        empty: "Buat item kerja untuk melihatnya berdasarkan status dalam grafik untuk analisis yang lebih baik.",
      },
      priority_distribution: {
        title: "Item kerja berdasarkan Prioritas",
        empty: "Buat item kerja untuk melihatnya berdasarkan prioritas dalam grafik untuk analisis yang lebih baik.",
      },
      recent_activity: {
        title: "Aktivitas terkini",
        empty: "Kami tidak dapat menemukan data. Silakan lihat input Anda",
        button: "Unduh aktivitas hari ini",
        button_loading: "Mengunduh",
      },
    },
    actions: {
      profile: "Profil",
      security: "Keamanan",
      activity: "Aktivitas",
      preferences: "Preferensi",
      appearance: "Tampilan",
      notifications: "Notifikasi",
      "api-tokens": "Token akses pribadi",
    },
    tabs: {
      summary: "Ringkasan",
      assigned: "Ditugaskan",
      created: "Dibuat",
      subscribed: "Diikuti",
      activity: "Aktivitas",
    },
    empty_state: {
      activity: {
        title: "Belum ada aktivitas",
        description:
          "Mulai dengan membuat item kerja baru! Tambahkan detail dan properti. Jelajahi lebih lanjut di Pranala untuk melihat aktivitas Anda.",
      },
      assigned: {
        title: "Tidak ada item kerja yang ditugaskan kepada Anda",
        description: "Item kerja yang ditugaskan kepada Anda dapat dilacak di sini.",
      },
      created: {
        title: "Belum ada item kerja",
        description: "Semua item kerja yang Anda buat akan muncul di sini. Lacak langsung dari sini.",
      },
      subscribed: {
        title: "Belum ada item kerja",
        description: "Ikuti item kerja yang Anda minati dan lacak semuanya di sini.",
      },
    },
  },
  project_settings: {
    general: {
      enter_project_id: "Masukkan ID proyek",
      please_select_a_timezone: "Silakan pilih zona waktu",
      archive_project: {
        title: "Arsipkan proyek",
        description:
          "Mengarsipkan proyek akan menghapus proyek Anda dari navigasi samping meskipun Anda masih dapat mengaksesnya dari halaman proyek Anda. Anda dapat memulihkan proyek tersebut atau menghapusnya kapan saja.",
        button: "Arsipkan proyek",
      },
      delete_project: {
        title: "Hapus proyek",
        description:
          "Saat proyek dihapus, semua data dan sumber dayanya akan dihapus permanen dan tidak dapat dipulihkan.",
        button: "Hapus proyek saya",
      },
      toast: {
        success: "Proyek berhasil diperbarui",
        error: "Proyek tidak dapat diperbarui. Silakan coba lagi.",
      },
    },
    members: {
      label: "Anggota",
      project_lead: "Pemimpin proyek",
      default_assignee: "Penanggung jawab default",
      guest_super_permissions: {
        title: "Beri akses tampilan untuk semua item kerja untuk pengguna tamu:",
        sub_heading: "Ini akan memungkinkan tamu untuk memiliki akses tampilan ke semua item kerja proyek.",
      },
      invite_members: {
        title: "Undang anggota",
        sub_heading: "Undang anggota untuk bekerja di proyek Anda.",
        select_co_worker: "Pilih rekan kerja",
      },
    },
    states: {
      heading: "Status",
      description: "Tentukan dan sesuaikan status alur kerja untuk melacak kemajuan item kerja.",
      describe_this_state_for_your_members: "Jelaskan status ini untuk anggota Anda.",
      empty_state: {
        title: "Tidak ada status yang tersedia untuk grup {groupKey}",
        description: "Silakan buat status baru",
      },
    },
    labels: {
      heading: "Label",
      description: "Buat label khusus untuk mengategorikan dan mengatur item kerja.",
      label_title: "Judul label",
      label_title_is_required: "Judul label diperlukan",
      label_max_char: "Nama label tidak boleh lebih dari 255 karakter",
      toast: {
        error: "Kesalahan saat memperbarui label",
      },
    },
    estimates: {
      heading: "Estimasi",
      enable_description: "Estimasi membantu Anda mengomunikasikan kompleksitas dan beban kerja tim.",
      label: "Estimasi",
      title: "Aktifkan estimasi untuk proyek saya",
      description: "Ini membantu Anda dalam mengkomunikasikan kompleksitas dan beban kerja tim.",
      no_estimate: "Tidak ada estimasi",
      new: "Sistem estimasi baru",
      create: {
        custom: "Kustom",
        start_from_scratch: "Mulai dari awal",
        choose_template: "Pilih template",
        choose_estimate_system: "Pilih sistem estimasi",
        enter_estimate_point: "Masukkan estimasi",
        step: "Langkah {step} dari {total}",
        label: "Buat estimasi",
      },
      toasts: {
        created: {
          success: {
            title: "Estimasi dibuat",
            message: "Estimasi telah berhasil dibuat",
          },
          error: {
            title: "Pembuatan estimasi gagal",
            message: "Kami tidak dapat membuat estimasi baru, silakan coba lagi.",
          },
        },
        updated: {
          success: {
            title: "Estimasi dimodifikasi",
            message: "Estimasi telah diperbarui dalam proyek Anda.",
          },
          error: {
            title: "Modifikasi estimasi gagal",
            message: "Kami tidak dapat memodifikasi estimasi, silakan coba lagi",
          },
        },
        enabled: {
          success: {
            title: "Berhasil!",
            message: "Estimasi telah diaktifkan.",
          },
        },
        disabled: {
          success: {
            title: "Berhasil!",
            message: "Estimasi telah dinonaktifkan.",
          },
          error: {
            title: "Kesalahan!",
            message: "Estimasi tidak dapat dinonaktifkan. Silakan coba lagi",
          },
        },
      },
      validation: {
        min_length: "Estimasi harus lebih besar dari 0.",
        unable_to_process: "Kami tidak dapat memproses permintaan Anda, silakan coba lagi.",
        numeric: "Estimasi harus berupa nilai numerik.",
        character: "Estimasi harus berupa nilai karakter.",
        empty: "Nilai estimasi tidak boleh kosong.",
        already_exists: "Nilai estimasi sudah ada.",
        unsaved_changes: "Anda memiliki beberapa perubahan yang belum disimpan, Harap simpan sebelum mengklik selesai",
        remove_empty:
          "Estimasi tidak boleh kosong. Masukkan nilai di setiap bidang atau hapus yang tidak memiliki nilai.",
      },
      systems: {
        points: {
          label: "Poin",
          fibonacci: "Fibonacci",
          linear: "Linear",
          squares: "Kuadrat",
          custom: "Kustom",
        },
        categories: {
          label: "Kategori",
          t_shirt_sizes: "Ukuran Baju",
          easy_to_hard: "Mudah ke sulit",
          custom: "Kustom",
        },
        time: {
          label: "Waktu",
          hours: "Jam",
        },
      },
    },
    automations: {
      heading: "Otomatisasi",
      description:
        "Konfigurasikan tindakan otomatis untuk menyederhanakan alur kerja proyek dan mengurangi tugas manual.",
      label: "Otomatisasi",
      "auto-archive": {
        title: "Arsip otomatis item kerja yang ditutup",
        description: "Pranala akan mengarsipkan secara otomatis item kerja yang telah selesai atau dibatalkan.",
        duration: "Arsip otomatis item kerja yang ditutup selama",
      },
      "auto-close": {
        title: "Tutup otomatis item kerja",
        description: "Pranala akan menutup secara otomatis item kerja yang belum selesai atau dibatalkan.",
        duration: "Tutup otomatis item kerja yang tidak aktif selama",
        auto_close_status: "Status penutupan otomatis",
      },
    },
    empty_state: {
      labels: {
        title: "Belum ada label",
        description: "Buat label untuk membantu mengatur dan memfilter item kerja dalam proyek Anda.",
      },
      estimates: {
        title: "Belum ada sistem estimasi",
        description: "Buat serangkaian estimasi untuk mengkomunikasikan jumlah pekerjaan per item kerja.",
        primary_button: "Tambah sistem estimasi",
      },
    },
    features: {
      cycles: {
        title: "Siklus",
        short_title: "Siklus",
        description:
          "Jadwalkan pekerjaan dalam periode fleksibel yang menyesuaikan dengan ritme dan tempo unik proyek ini.",
        toggle_title: "Aktifkan siklus",
        toggle_description: "Rencanakan pekerjaan dalam jangka waktu yang terfokus.",
      },
      modules: {
        title: "Modul",
        short_title: "Modul",
        description: "Atur pekerjaan ke dalam subproyek dengan pemimpin dan penanggung jawab khusus.",
        toggle_title: "Aktifkan modul",
        toggle_description: "Anggota proyek akan dapat membuat dan mengedit modul.",
      },
      views: {
        title: "Tampilan",
        short_title: "Tampilan",
        description: "Simpan pengurutan, filter, dan opsi tampilan kustom atau bagikan dengan tim Anda.",
        toggle_title: "Aktifkan tampilan",
        toggle_description: "Anggota proyek akan dapat membuat dan mengedit tampilan.",
      },
      pages: {
        title: "Halaman",
        short_title: "Halaman",
        description: "Buat dan edit konten bebas: catatan, dokumen, apa saja.",
        toggle_title: "Aktifkan halaman",
        toggle_description: "Anggota proyek akan dapat membuat dan mengedit halaman.",
      },
      intake: {
        title: "Intake",
        short_title: "Intake",
        description: "Biarkan non-anggota berbagi bug, umpan balik, dan saran; tanpa mengganggu alur kerja Anda.",
        toggle_title: "Aktifkan intake",
        toggle_description: "Izinkan anggota proyek membuat permintaan intake dalam aplikasi.",
      },
    },
  },
  project_cycles: {
    add_cycle: "Tambah siklus",
    more_details: "Detail lebih lanjut",
    cycle: "Siklus",
    update_cycle: "Perbarui siklus",
    create_cycle: "Buat siklus",
    no_matching_cycles: "Tidak ada siklus yang cocok",
    remove_filters_to_see_all_cycles: "Hapus filter untuk melihat semua siklus",
    remove_search_criteria_to_see_all_cycles: "Hapus kriteria pencarian untuk melihat semua siklus",
    only_completed_cycles_can_be_archived: "Hanya siklus yang sudah selesai yang dapat diarsipkan",
    start_date: "Tanggal mulai",
    end_date: "Tanggal selesai",
    in_your_timezone: "Dalam zona waktu Anda",
    transfer_work_items: "Pindahkan {count} item kerja",
    date_range: "Rentang tanggal",
    add_date: "Tambah tanggal",
    active_cycle: {
      label: "Siklus aktif",
      progress: "Kemajuan",
      chart: "Grafik burndown",
      priority_issue: "Item kerja prioritas",
      assignees: "Penanggung jawab",
      issue_burndown: "Burndown item kerja",
      ideal: "Ideal",
      current: "Sekarang",
      labels: "Label",
    },
    upcoming_cycle: {
      label: "Siklus mendatang",
    },
    completed_cycle: {
      label: "Siklus selesai",
    },
    status: {
      days_left: "Hari tersisa",
      completed: "Selesai",
      yet_to_start: "Belum dimulai",
      in_progress: "Sedang berlangsung",
      draft: "Draf",
    },
    action: {
      restore: {
        title: "Pulihkan siklus",
        success: {
          title: "Siklus dipulihkan",
          description: "Siklus telah dipulihkan.",
        },
        failed: {
          title: "Pemulihan siklus gagal",
          description: "Siklus tidak dapat dipulihkan. Silakan coba lagi.",
        },
      },
      favorite: {
        loading: "Menambahkan siklus ke favorit",
        success: {
          description: "Siklus ditambahkan ke favorit.",
          title: "Berhasil!",
        },
        failed: {
          description: "Gagal menambahkan siklus ke favorit. Silakan coba lagi.",
          title: "Kesalahan!",
        },
      },
      unfavorite: {
        loading: "Menghapus siklus dari favorit",
        success: {
          description: "Siklus dihapus dari favorit.",
          title: "Berhasil!",
        },
        failed: {
          description: "Gagal menghapus siklus dari favorit. Silakan coba lagi.",
          title: "Kesalahan!",
        },
      },
      update: {
        loading: "Memperbarui siklus",
        success: {
          description: "Siklus berhasil diperbarui.",
          title: "Berhasil!",
        },
        failed: {
          description: "Kesalahan saat memperbarui siklus. Silakan coba lagi.",
          title: "Kesalahan!",
        },
        error: {
          already_exists:
            "Anda sudah memiliki siklus pada tanggal tersebut. Jika ingin membuat siklus draf, hapus kedua tanggalnya.",
        },
      },
    },
    empty_state: {
      general: {
        title: "Kelompokkan pekerjaan dan atur batas waktunya dalam siklus.",
        description:
          "Pecah pekerjaan menjadi bagian-bagian berbatas waktu. Tentukan tanggal dengan menghitung mundur dari tenggat proyek, lalu capai kemajuan nyata bersama tim.",
        primary_button: {
          text: "Tetapkan siklus pertama Anda",
          comic: {
            title: "Siklus adalah batas waktu berulang.",
            description:
              "Sprint, iterasi, dan istilah lain apa pun yang Anda gunakan untuk pelacakan pekerjaan mingguan atau dua mingguan adalah siklus.",
          },
        },
      },
      no_issues: {
        title: "Tidak ada item kerja yang ditambahkan ke siklus",
        description: "Tambahkan atau buat item kerja yang ingin Anda batasi waktu dan kirim dalam siklus ini",
        primary_button: {
          text: "Buat item kerja baru",
        },
        secondary_button: {
          text: "Tambah item kerja yang ada",
        },
      },
      completed_no_issues: {
        title: "Tidak ada item kerja dalam siklus",
        description:
          "Tidak ada item kerja dalam siklus. Item kerja baik ditransfer atau disembunyikan. Untuk melihat item kerja yang disembunyikan jika ada, perbarui properti tampilan Anda sesuai.",
      },
      active: {
        title: "Tidak ada siklus aktif",
        description:
          "Siklus aktif mencakup periode apa pun yang mencakup tanggal hari ini dalam rentangnya. Temukan kemajuan dan detail siklus aktif di sini.",
      },
      archived: {
        title: "Belum ada siklus yang diarsipkan",
        description:
          "Untuk membersihkan proyek Anda, arsipkan siklus yang telah diselesaikan. Temukan di sini setelah diarsipkan.",
      },
    },
  },
  project_issues: {
    empty_state: {
      no_issues: {
        title: "Buat item kerja dan tugaskan kepada seseorang, bahkan kepada diri Anda sendiri",
        description:
          "Anggap item kerja sebagai pekerjaan, tugas, atau JTBD—istilah yang kami sukai. Item kerja dan sub-itemnya biasanya merupakan tindakan berbatas waktu yang ditugaskan kepada anggota tim. Tim Anda membuat, menugaskan, dan menyelesaikan item kerja untuk mencapai tujuan proyek.",
        primary_button: {
          text: "Buat item kerja pertama Anda",
          comic: {
            title: "Item kerja adalah blok bangunan di Pranala.",
            description:
              "Mendesain ulang UI Pranala, Mengganti merek perusahaan, atau Meluncurkan sistem injeksi bahan bakar baru adalah contoh item kerja yang kemungkinan besar memiliki sub-item kerja.",
          },
        },
      },
      no_archived_issues: {
        title: "Belum ada item kerja yang diarsipkan",
        description:
          "Secara manual atau melalui otomatisasi, Anda dapat mengarsipkan item kerja yang telah selesai atau dibatalkan. Temukan di sini setelah diarsipkan.",
        primary_button: {
          text: "Tetapkan otomatisasi",
        },
      },
      issues_empty_filter: {
        title: "Tidak ditemukan item kerja yang cocok dengan filter yang diterapkan",
        secondary_button: {
          text: "Bersihkan semua filter",
        },
      },
    },
  },
  project_module: {
    add_module: "Tambah Modul",
    update_module: "Perbarui Modul",
    create_module: "Buat Modul",
    archive_module: "Arsipkan Modul",
    restore_module: "Pulihkan Modul",
    delete_module: "Hapus modul",
    empty_state: {
      general: {
        title: "Petakan tonggak proyek ke modul dan lacak total pekerjaan dengan lebih mudah.",
        description:
          "Modul adalah sekumpulan item kerja yang berada di bawah satu induk dengan struktur yang jelas. Gunakan modul untuk melacak pekerjaan berdasarkan tonggak proyek, lengkap dengan periode, tenggat waktu, dan analitiknya.",
        primary_button: {
          text: "Buat modul pertama Anda",
          comic: {
            title: "Modul membantu mengelompokkan pekerjaan menurut hierarki.",
            description: "Modul kereta, modul sasis, dan modul gudang adalah contoh bagus dari pengelompokan ini.",
          },
        },
      },
      no_issues: {
        title: "Tidak ada item kerja dalam modul",
        description: "Buat atau tambahkan item kerja yang ingin Anda capai sebagai bagian dari modul ini",
        primary_button: {
          text: "Buat item kerja baru",
        },
        secondary_button: {
          text: "Tambahkan item kerja yang ada",
        },
      },
      archived: {
        title: "Belum ada Modul yang diarsipkan",
        description:
          "Untuk membersihkan proyek Anda, arsipkan modul yang telah selesai atau dibatalkan. Temukan di sini setelah diarsipkan.",
      },
      sidebar: {
        in_active: "Modul ini belum aktif.",
        invalid_date: "Tanggal tidak valid. Silakan masukkan tanggal yang valid.",
      },
    },
    quick_actions: {
      archive_module: "Arsipkan modul",
      archive_module_description: "Hanya modul yang telah diselesaikan atau dibatalkan\n yang dapat diarsipkan.",
      delete_module: "Hapus modul",
    },
    toast: {
      copy: {
        success: "Tautan modul disalin ke clipboard",
      },
      delete: {
        success: "Modul berhasil dihapus",
        error: "Gagal menghapus modul",
      },
    },
  },
  project_views: {
    empty_state: {
      general: {
        title: "Simpan tampilan yang difilter untuk proyek Anda. Buat sebanyak yang Anda perlukan",
        description:
          "Tampilan adalah sekumpulan filter yang disimpan yang Anda gunakan secara sering atau ingin akses mudah. Semua rekan Anda dalam proyek dapat melihat tampilan semua orang dan memilih yang paling sesuai dengan kebutuhan mereka.",
        primary_button: {
          text: "Buat tampilan pertama Anda",
          comic: {
            title: "Tampilan bekerja berdasarkan properti item kerja.",
            description:
              "Anda dapat membuat tampilan dari sini dengan sebanyak mungkin properti sebagai filter yang Anda anggap sesuai.",
          },
        },
      },
      filter: {
        title: "Tidak ada tampilan yang cocok",
        description: "Tidak ada tampilan yang cocok dengan kriteria pencarian. \n Buat tampilan baru sebagai gantinya.",
      },
    },
    delete_view: {
      title: "Apakah Anda yakin ingin menghapus tampilan ini?",
      content:
        "Jika Anda mengonfirmasi, semua opsi pengurutan, filter, dan tampilan + tata letak yang telah Anda pilih untuk tampilan ini akan dihapus secara permanen tanpa cara untuk memulihkannya.",
    },
  },
  project_page: {
    empty_state: {
      general: {
        title:
          "Tulis catatan, dokumen, atau seluruh basis pengetahuan. Dapatkan Galileo, asisten AI Pranala, untuk membantu Anda memulai",
        description:
          "Halaman adalah ruang untuk menuangkan ide di Pranala. Tulis notulen rapat, format dengan mudah, sematkan item kerja, susun dengan komponen siap pakai, dan simpan semuanya dalam konteks proyek Anda. Untuk menyelesaikan dokumen lebih cepat, panggil Galileo, asisten AI Pranala, lewat pintasan atau tombol.",
        primary_button: {
          text: "Buat halaman pertama Anda",
        },
      },
      private: {
        title: "Belum ada halaman pribadi",
        description:
          "Simpan pemikiran pribadi Anda di sini. Saat siap berbagi, tim Anda dapat mengaksesnya dengan satu klik.",
        primary_button: {
          text: "Buat halaman pertama Anda",
        },
      },
      public: {
        title: "Belum ada halaman publik",
        description: "Lihat halaman yang dibagikan dengan semua orang di proyek Anda tepat di sini.",
        primary_button: {
          text: "Buat halaman pertama Anda",
        },
      },
      archived: {
        title: "Belum ada halaman yang diarsipkan",
        description: "Arsipkan halaman yang sedang tidak Anda pantau. Akses kembali di sini saat diperlukan.",
      },
    },
  },
  command_k: {
    empty_state: {
      search: {
        title: "Tidak ditemukan hasil",
      },
    },
  },
  issue_relation: {
    empty_state: {
      search: {
        title: "Tidak ditemukan item kerja yang cocok",
      },
      no_issues: {
        title: "Tidak ditemukan item kerja",
      },
    },
  },
  issue_comment: {
    empty_state: {
      general: {
        title: "Belum ada komentar",
        description: "Komentar dapat digunakan sebagai ruang diskusi dan tindak lanjut untuk item kerja.",
      },
    },
  },
  notification: {
    label: "Inbox",
    page_label: "{workspace} - Inbox",
    options: {
      mark_all_as_read: "Tandai semua sebagai dibaca",
      mark_read: "Tandai sebagai dibaca",
      mark_unread: "Tandai sebagai tidak dibaca",
      refresh: "Muat ulang",
      filters: "Filter Inbox",
      show_unread: "Tampilkan yang belum dibaca",
      show_snoozed: "Tampilkan yang ditunda",
      show_archived: "Tampilkan yang diarsipkan",
      mark_archive: "Arsipkan",
      mark_unarchive: "Hapus arsip",
      mark_snooze: "Tunda",
      mark_unsnooze: "Hapus tunda",
    },
    toasts: {
      read: "Notifikasi ditandai sebagai dibaca",
      unread: "Notifikasi ditandai sebagai tidak dibaca",
      archived: "Notifikasi ditandai sebagai diarsipkan",
      unarchived: "Notifikasi tidak lagi diarsipkan",
      snoozed: "Notifikasi ditunda",
      unsnoozed: "Penundaan notifikasi dibatalkan",
    },
    empty_state: {
      detail: {
        title: "Pilih untuk melihat detail.",
      },
      all: {
        title: "Tidak ada item kerja yang ditugaskan",
        description: "Pembaruan untuk item kerja yang ditugaskan kepada Anda akan muncul di sini.",
      },
      mentions: {
        title: "Tidak ada item kerja yang ditugaskan",
        description: "Pembaruan untuk item kerja yang ditugaskan kepada Anda akan muncul di sini.",
      },
    },
    tabs: {
      all: "Semua",
      mentions: "Mention",
    },
    filter: {
      assigned: "Ditugaskan untuk saya",
      created: "Dibuat oleh saya",
      subscribed: "Yang saya ikuti",
    },
    snooze: {
      "1_day": "1 hari",
      "3_days": "3 hari",
      "5_days": "5 hari",
      "1_week": "1 minggu",
      "2_weeks": "2 minggu",
      custom: "Kustom",
    },
  },
  active_cycle: {
    empty_state: {
      progress: {
        title: "Tambahkan item kerja ke siklus untuk melihat kemajuannya",
      },
      chart: {
        title: "Tambahkan item kerja ke siklus untuk melihat grafik burndown.",
      },
      priority_issue: {
        title: "Lihat item kerja prioritas dalam siklus secara sekilas.",
      },
      assignee: {
        title: "Tambahkan penanggung jawab ke item kerja untuk melihat pembagian kerja berdasarkan penanggung jawab.",
      },
      label: {
        title: "Tambahkan label ke item kerja untuk melihat pembagian kerja berdasarkan label.",
      },
    },
  },
  disabled_project: {
    empty_state: {
      inbox: {
        title: "Intake tidak diaktifkan untuk proyek ini.",
        description:
          "Intake membantu Anda mengelola permintaan yang masuk ke proyek Anda dan menambahkannya sebagai item kerja dalam alur kerja Anda. Aktifkan Intake dari pengaturan proyek untuk mengelola permintaan.",
        primary_button: {
          text: "Kelola fitur",
        },
      },
      cycle: {
        title: "Siklus tidak diaktifkan untuk proyek ini.",
        description:
          "Pecah pekerjaan menjadi bagian-bagian berbatas waktu. Tentukan tanggal dengan menghitung mundur dari tenggat proyek, lalu capai kemajuan nyata bersama tim. Aktifkan fitur siklus untuk proyek Anda agar dapat mulai menggunakannya.",
        primary_button: {
          text: "Kelola fitur",
        },
      },
      module: {
        title: "Modul tidak diaktifkan untuk proyek ini.",
        description:
          "Modul adalah bagian penting dari proyek Anda. Aktifkan modul dari pengaturan proyek untuk mulai menggunakannya.",
        primary_button: {
          text: "Kelola fitur",
        },
      },
      page: {
        title: "Halaman tidak diaktifkan untuk proyek ini.",
        description:
          "Halaman adalah bagian penting dari proyek Anda. Aktifkan halaman dari pengaturan proyek untuk mulai menggunakannya.",
        primary_button: {
          text: "Kelola fitur",
        },
      },
      view: {
        title: "Tampilan tidak diaktifkan untuk proyek ini.",
        description:
          "Tampilan membantu Anda mengatur pekerjaan dalam proyek. Aktifkan tampilan dari pengaturan proyek untuk mulai menggunakannya.",
        primary_button: {
          text: "Kelola fitur",
        },
      },
    },
  },
  workspace_draft_issues: {
    draft_an_issue: "Draf item kerja",
    empty_state: {
      title: "Draf item kerja dan, nantinya, komentar akan muncul di sini.",
      description:
        "Untuk mencobanya, tambahkan item kerja lalu biarkan setengah jadi, atau buat draf pertama Anda di bawah ini. 😉",
      primary_button: {
        text: "Buat draf pertama Anda",
      },
    },
    delete_modal: {
      title: "Hapus draf",
      description: "Apakah Anda yakin ingin menghapus draf ini? Tindakan ini tidak dapat dibatalkan.",
    },
    toasts: {
      created: {
        success: "Draf berhasil dibuat",
        error: "Item kerja tidak dapat dibuat. Silakan coba lagi.",
      },
      deleted: {
        success: "Draf berhasil dihapus",
      },
    },
  },
  stickies: {
    title: "Catatan tempel Anda",
    placeholder: "klik untuk mengetik di sini",
    all: "Semua catatan tempel",
    "no-data": "Catat ide, momen aha, atau pemikiran brilian. Tambahkan catatan tempel untuk memulai.",
    add: "Tambah catatan tempel",
    search_placeholder: "Cari berdasarkan judul",
    delete: "Hapus catatan tempel",
    delete_confirmation: "Apakah Anda yakin ingin menghapus catatan tempel ini?",
    empty_state: {
      simple: "Catat ide, momen aha, atau pemikiran brilian. Tambahkan catatan tempel untuk memulai.",
      general: {
        title: "Catatan tempel adalah catatan singkat dan to-do yang bisa Anda buat kapan saja.",
        description:
          "Catat ide dan pemikiran Anda dalam catatan tempel yang dapat diakses kapan saja dan dari mana saja.",
        primary_button: {
          text: "Tambah catatan tempel",
        },
      },
      search: {
        title: "Tidak ada catatan tempel yang cocok.",
        description: "Coba istilah lain. Jika yakin pencarian Anda benar, beri tahu kami. ",
        primary_button: {
          text: "Tambah catatan tempel",
        },
      },
    },
    toasts: {
      errors: {
        wrong_name: "Nama catatan tempel tidak boleh lebih dari 100 karakter.",
        already_exists: "Sudah ada catatan tempel tanpa deskripsi.",
      },
      created: {
        title: "Catatan tempel berhasil dibuat",
        message: "Catatan tempel telah berhasil dibuat",
      },
      not_created: {
        title: "Catatan tempel tidak dibuat",
        message: "Catatan tempel tidak dapat dibuat",
      },
      updated: {
        title: "Catatan tempel diperbarui",
        message: "Catatan tempel telah berhasil diperbarui",
      },
      not_updated: {
        title: "Catatan tempel tidak diperbarui",
        message: "Catatan tempel tidak dapat diperbarui",
      },
      removed: {
        title: "Catatan tempel dihapus",
        message: "Catatan tempel telah berhasil dihapus",
      },
      not_removed: {
        title: "Catatan tempel tidak dihapus",
        message: "Catatan tempel tidak dapat dihapus",
      },
    },
  },
  role_details: {
    guest: {
      title: "Tamu",
      description: "Anggota eksternal organisasi dapat diundang sebagai tamu.",
    },
    member: {
      title: "Anggota",
      description: "Dapat membaca, menulis, mengedit, dan menghapus data di dalam proyek, siklus, dan modul.",
    },
    admin: {
      title: "Admin",
      description: "Semua izin di workspace ini diaktifkan.",
    },
  },
  user_roles: {
    product_or_project_manager: "Manajer Produk / Proyek",
    development_or_engineering: "Pengembangan / Rekayasa",
    founder_or_executive: "Pendiri / Eksekutif",
    freelancer_or_consultant: "Freelancer / Konsultan",
    marketing_or_growth: "Pemasaran / Pertumbuhan",
    sales_or_business_development: "Penjualan / Pengembangan Bisnis",
    support_or_operations: "Dukungan / Operasi",
    student_or_professor: "Mahasiswa / Profesor",
    human_resources: "Sumber Daya Manusia",
    other: "Lainnya",
  },
  importer: {
    github: {
      title: "GitHub",
      description: "Impor item kerja dari repositori GitHub dan sinkronkan.",
    },
    jira: {
      title: "Jira",
      description: "Impor item kerja dan epik dari proyek dan epik Jira.",
    },
  },
  exporter: {
    csv: {
      title: "CSV",
      description: "Ekspor item kerja ke file CSV.",
      short_description: "Ekspor sebagai CSV",
    },
    excel: {
      title: "Excel",
      description: "Ekspor item kerja ke file Excel.",
      short_description: "Ekspor sebagai Excel",
    },
    xlsx: {
      title: "Excel",
      description: "Ekspor item kerja ke file Excel.",
      short_description: "Ekspor sebagai Excel",
    },
    json: {
      title: "JSON",
      description: "Ekspor item kerja ke file JSON.",
      short_description: "Ekspor sebagai JSON",
    },
  },
  default_global_view: {
    all_issues: "Semua item kerja",
    assigned: "Ditugaskan",
    created: "Dibuat",
    subscribed: "Diikuti",
  },
  themes: {
    theme_options: {
      system_preference: {
        label: "Preferensi sistem",
      },
      light: {
        label: "Terang",
      },
      dark: {
        label: "Gelap",
      },
      light_contrast: {
        label: "Terang dengan kontras tinggi",
      },
      dark_contrast: {
        label: "Gelap kontras tinggi",
      },
      custom: {
        label: "Tema kustom",
      },
    },
  },
  project_members: {
    full_name: "Nama lengkap",
    display_name: "Nama tampilan",
    email: "Email",
    joining_date: "Tanggal bergabung",
    role: "Peran",
  },
  project_modules: {
    status: {
      backlog: "Backlog",
      planned: "Direncanakan",
      in_progress: "Dalam Proses",
      paused: "Dijeda",
      completed: "Selesai",
      cancelled: "Dibatalkan",
    },
    layout: {
      list: "Tata letak daftar",
      board: "Tata letak galeri",
      timeline: "Tata letak garis waktu",
    },
    order_by: {
      name: "Nama",
      progress: "Kemajuan",
      issues: "Jumlah item kerja",
      due_date: "Tanggal jatuh tempo",
      created_at: "Tanggal dibuat",
      manual: "Manual",
    },
  },
  cycle: {
    label: "{count, plural, one {Siklus} other {Siklus}}",
    no_cycle: "Tidak ada siklus",
  },
  module: {
    label: "{count, plural, one {Modul} other {Modul}}",
    no_module: "Tidak ada modul",
  },
  description_versions: {
    last_edited_by: "Terakhir disunting oleh",
    previously_edited_by: "Sebelumnya disunting oleh",
    edited_by: "Diedit oleh",
  },
  self_hosted_maintenance_message: {
    plane_didnt_start_up_this_could_be_because_one_or_more_plane_services_failed_to_start:
      "Pranala tidak berhasil dimulai. Ini bisa karena satu atau lebih layanan Pranala gagal untuk dimulai.",
    choose_view_logs_from_setup_sh_and_docker_logs_to_be_sure:
      "Pilih Lihat log di setup.sh dan periksa log Docker untuk memastikan.",
  },
  no_of: "Jumlah {entity}",
  page_navigation_pane: {
    tabs: {
      outline: {
        label: "Garis Besar",
        empty_state: {
          title: "Judul hilang",
          description: "Mari tambahkan beberapa judul di halaman ini untuk melihatnya di sini.",
        },
      },
      info: {
        label: "Info",
        document_info: {
          words: "Kata",
          characters: "Karakter",
          paragraphs: "Paragraf",
          read_time: "Waktu baca",
        },
        actors_info: {
          edited_by: "Diedit oleh",
          created_by: "Dibuat oleh",
        },
        version_history: {
          label: "Riwayat versi",
          current_version: "Versi saat ini",
        },
      },
      assets: {
        label: "Aset",
        download_button: "Unduh",
        empty_state: {
          title: "Gambar hilang",
          description: "Tambahkan gambar untuk melihatnya di sini.",
        },
      },
    },
    open_button: "Buka panel navigasi",
    close_button: "Tutup panel navigasi",
    outline_floating_button: "Buka garis besar",
  },
  power_k: {
    contextual_actions: {
      work_item: {
        title: "Tindakan item kerja",
        indicator: "Item kerja",
        change_state: "Ubah status",
        change_priority: "Ubah prioritas",
        change_assignees: "Tetapkan penanggung jawab",
        assign_to_me: "Tetapkan ke saya",
        unassign_from_me: "Hapus penugasan saya",
        change_estimate: "Ubah estimasi",
        add_to_cycle: "Tambahkan ke siklus",
        add_to_modules: "Tambahkan ke modul",
        add_labels: "Tambahkan label",
        subscribe: "Ikuti notifikasi",
        unsubscribe: "Berhenti mengikuti notifikasi",
        delete: "Hapus",
        copy_id: "Salin ID",
        copy_id_toast_success: "ID item kerja disalin ke clipboard.",
        copy_id_toast_error: "Terjadi kesalahan saat menyalin ID item kerja ke clipboard.",
        copy_title: "Salin judul",
        copy_title_toast_success: "Judul item kerja disalin ke clipboard.",
        copy_title_toast_error: "Terjadi kesalahan saat menyalin judul item kerja ke clipboard.",
        copy_url: "Salin URL",
        copy_url_toast_success: "URL item kerja disalin ke clipboard.",
        copy_url_toast_error: "Terjadi kesalahan saat menyalin URL item kerja ke clipboard.",
      },
      cycle: {
        title: "Tindakan siklus",
        indicator: "Siklus",
        add_to_favorites: "Tambahkan ke favorit",
        remove_from_favorites: "Hapus dari favorit",
        copy_url: "Salin URL",
        copy_url_toast_success: "URL siklus disalin ke clipboard.",
        copy_url_toast_error: "Terjadi kesalahan saat menyalin URL siklus ke clipboard.",
      },
      module: {
        title: "Tindakan modul",
        indicator: "Modul",
        add_remove_members: "Tambah/hapus anggota",
        change_status: "Ubah status",
        add_to_favorites: "Tambahkan ke favorit",
        remove_from_favorites: "Hapus dari favorit",
        copy_url: "Salin URL",
        copy_url_toast_success: "URL modul disalin ke clipboard.",
        copy_url_toast_error: "Terjadi kesalahan saat menyalin URL modul ke clipboard.",
      },
      page: {
        title: "Tindakan halaman",
        indicator: "Halaman",
        lock: "Kunci",
        unlock: "Buka kunci",
        make_private: "Jadikan pribadi",
        make_public: "Jadikan publik",
        archive: "Arsipkan",
        restore: "Pulihkan",
        add_to_favorites: "Tambahkan ke favorit",
        remove_from_favorites: "Hapus dari favorit",
        copy_url: "Salin URL",
        copy_url_toast_success: "URL halaman disalin ke clipboard.",
        copy_url_toast_error: "Terjadi kesalahan saat menyalin URL halaman ke clipboard.",
      },
    },
    creation_actions: {
      create_work_item: "Item kerja baru",
      create_page: "Halaman baru",
      create_view: "Tampilan baru",
      create_cycle: "Siklus baru",
      create_module: "Modul baru",
      create_project: "Proyek baru",
      create_workspace: "Workspace baru",
    },
    navigation_actions: {
      open_workspace: "Buka workspace",
      nav_home: "Buka beranda",
      nav_inbox: "Buka Inbox",
      nav_your_work: "Buka pekerjaan Anda",
      nav_account_settings: "Buka pengaturan akun",
      open_project: "Buka proyek",
      nav_projects_list: "Buka daftar proyek",
      nav_all_workspace_work_items: "Buka semua item kerja",
      nav_assigned_workspace_work_items: "Buka item kerja yang ditugaskan",
      nav_created_workspace_work_items: "Buka item kerja yang dibuat",
      nav_subscribed_workspace_work_items: "Buka item kerja yang diikuti",
      nav_workspace_analytics: "Buka analitik workspace",
      nav_workspace_drafts: "Buka draf workspace",
      nav_workspace_archives: "Buka arsip workspace",
      open_workspace_setting: "Buka pengaturan workspace",
      nav_workspace_settings: "Buka pengaturan workspace",
      nav_project_work_items: "Buka item kerja",
      open_project_cycle: "Buka siklus",
      nav_project_cycles: "Buka siklus",
      open_project_module: "Buka modul",
      nav_project_modules: "Buka modul",
      open_project_view: "Buka tampilan proyek",
      nav_project_views: "Buka tampilan proyek",
      nav_project_pages: "Buka halaman",
      nav_project_intake: "Buka Intake",
      nav_project_archives: "Buka arsip proyek",
      open_project_setting: "Buka pengaturan proyek",
      nav_project_settings: "Buka pengaturan proyek",
    },
    account_actions: {
      sign_out: "Keluar",
      workspace_invites: "Undangan workspace",
    },
    miscellaneous_actions: {
      toggle_app_sidebar: "Tampilkan/sembunyikan sidebar aplikasi",
      copy_current_page_url: "Salin URL halaman saat ini",
      copy_current_page_url_toast_success: "URL halaman saat ini disalin ke clipboard.",
      copy_current_page_url_toast_error: "Terjadi kesalahan saat menyalin URL halaman saat ini ke clipboard.",
      focus_top_nav_search: "Fokuskan kolom pencarian",
    },
    preferences_actions: {
      update_theme: "Ubah tema antarmuka",
      update_timezone: "Ubah zona waktu",
      update_start_of_week: "Ubah hari pertama dalam minggu",
      update_language: "Ubah bahasa antarmuka",
      toast: {
        theme: {
          success: "Tema berhasil diperbarui.",
          error: "Gagal memperbarui tema. Silakan coba lagi.",
        },
        timezone: {
          success: "Zona waktu berhasil diperbarui.",
          error: "Gagal memperbarui zona waktu. Silakan coba lagi.",
        },
        generic: {
          success: "Preferensi berhasil diperbarui.",
          error: "Gagal memperbarui preferensi. Silakan coba lagi.",
        },
      },
    },
    help_actions: {
      open_keyboard_shortcuts: "Buka pintasan keyboard",
      open_plane_documentation: "Buka dokumentasi Pranala",
      join_forum: "Bergabung dengan forum kami",
      report_bug: "Laporkan bug",
      chat_with_us: "Chat dengan kami",
    },
    page_placeholders: {
      default: "Ketik perintah atau cari",
      open_workspace: "Buka workspace",
      open_project: "Buka proyek",
      open_workspace_setting: "Buka pengaturan workspace",
      open_project_cycle: "Buka siklus",
      open_project_module: "Buka modul",
      open_project_view: "Buka tampilan proyek",
      open_project_setting: "Buka pengaturan proyek",
      update_work_item_state: "Ubah status",
      update_work_item_priority: "Ubah prioritas",
      update_work_item_assignee: "Tetapkan penanggung jawab",
      update_work_item_estimate: "Ubah estimasi",
      update_work_item_cycle: "Tambahkan ke siklus",
      update_work_item_module: "Tambahkan ke modul",
      update_work_item_labels: "Tambahkan label",
      update_module_member: "Ubah anggota",
      update_module_status: "Ubah status",
      update_theme: "Ubah tema",
      update_timezone: "Ubah zona waktu",
      update_start_of_week: "Ubah hari pertama dalam minggu",
      update_language: "Ubah bahasa",
    },
    search_menu: {
      no_results: "Tidak ditemukan hasil",
      clear_search: "Hapus pencarian",
    },
    footer: {
      workspace_level: "Tingkat workspace",
    },
    group_titles: {
      contextual: "Konteks",
      navigation: "Navigasi",
      create: "Buat",
      general: "Umum",
      settings: "Pengaturan",
      account: "Akun",
      miscellaneous: "Lainnya",
      preferences: "Preferensi",
      help: "Bantuan",
    },
  },
  // Kustomisasi navigasi
  customize_navigation: "Kustomisasi navigasi",
  personal: "Pribadi",
  accordion_navigation_control: "Navigasi sidebar akordeon",
  horizontal_navigation_bar: "Navigasi bertab",
  show_limited_projects_on_sidebar: "Tampilkan jumlah proyek terbatas di sidebar",
  enter_number_of_projects: "Masukkan jumlah proyek",
  pin: "Sematkan",
  unpin: "Lepas sematan",
} as const;
