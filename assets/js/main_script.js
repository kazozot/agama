// Jalankan skrip ketika seluruh konten halaman telah dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Daftar Lengkap Nama Surat (untuk referensi)
    const daftarNamaSurat = [
        "Al-Fatihah", "Al-Baqarah", "Ali 'Imran", "An-Nisa'", "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Taubah", "Yunus",
        "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra'", "Al-Kahf", "Maryam", "Taha",
        "Al-Anbiya'", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan", "Asy-Syu'ara'", "An-Naml", "Al-Qasas", "Al-'Ankabut", "Ar-Rum",
        "Luqman", "As-Sajdah", "Al-Ahzab", "Saba'", "Fatir", "Yasin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir",
        "Fussilat", "Asy-Syura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jasiyah", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf",
        "Az-Zariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqi'ah", "Al-Hadid", "Al-Mujadilah", "Al-Hasyr", "Al-Mumtahanah",
        "As-Saff", "Al-Jumu'ah", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij",
        "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddassir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba'", "An-Nazi'at", "'Abasa",
        "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Insyiqaq", "Al-Buruj", "At-Tariq", "Al-A'la", "Al-Ghasyiyah", "Al-Fajr", "Al-Balad",
        "Asy-Syams", "Al-Lail", "Ad-Duha", "Asy-Syarh", "At-Tin", "Al-'Alaq", "Al-Qadr", "Al-Bayyinah", "Az-Zalzalah", "Al-'Adiyat",
        "Al-Qari'ah", "At-Takasur", "Al-'Asr", "Al-Humazah", "Al-Fil", "Quraisy", "Al-Ma'un", "Al-Kausar", "Al-Kafirun", "An-Nasr",
        "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"
    ];

    // Fungsi untuk mode terang/gelap
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Terapkan tema dari localStorage saat memuat
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            let theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            // Muat ulang Giscus dengan tema baru
            const giscusContainer = document.getElementById('giscus-container');
            if(giscusContainer && giscusContainer.querySelector('iframe.giscus-frame')) {
                const giscusFrame = giscusContainer.querySelector('iframe.giscus-frame');
                giscusFrame.contentWindow.postMessage({ giscus: { setConfig: { theme: theme } } }, 'https://giscus.app');
            }
        });
    }

    // LOGIKA TOMBOL DOWNLOAD
    const downloadBtn = document.getElementById('download-book-btn');
    if (downloadBtn) {
        let hasClickedOnce = false;
        const realDownloadLink = 'assets/books/lubabun_nuqul_fi_asbabin_nuzul.pdf';
        downloadBtn.addEventListener('click', () => {
            if (!hasClickedOnce) {
                window.open('tos.html', '_blank');
                downloadBtn.textContent = 'Klik Lagi untuk Konfirmasi & Download';
                hasClickedOnce = true;
            } else {
                const link = document.createElement('a');
                link.href = realDownloadLink;
                link.download = 'Kitab_Asbabun_Nuzul_Imam_As-Suyuthi.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setTimeout(() => {
                    downloadBtn.textContent = 'Download Kitab Asbabun Nuzul';
                    hasClickedOnce = false;
                }, 2000);
            }
        });
    }

    // Fungsi untuk halaman utama (index.html)
    const suratListContainer = document.getElementById('surat-list');
    if (suratListContainer) {
        daftarNamaSurat.forEach((nama, index) => {
            const nomorSurat = index + 1;
            const card = document.createElement('div');
            card.classList.add('surat-card');
            if (dataAsbabunNuzul[nomorSurat]) {
                card.innerHTML = `<a href="surat_detail.html?surat=${nomorSurat}"><h3>${nomorSurat}. ${nama}</h3><p>Terdapat riwayat Asbabun Nuzul</p></a>`;
            } else {
                card.classList.add('no-riwayat');
                card.innerHTML = `<h3>${nomorSurat}. ${nama}</h3><p>Tidak ada riwayat</p>`;
            }
            suratListContainer.appendChild(card);
        });
    }

    // === FUNGSI BARU UNTUK MEMUAT KOMENTAR GISCUS ===
    function loadGiscus(term) {
        const container = document.getElementById('giscus-container');
        if (!container) return;
        
        // Hapus Giscus instance lama jika ada
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        // --- GANTI DATA DI BAWAH INI DENGAN DATA REPO ANDA ---
        script.setAttribute('data-repo', 'kazozot/agama'); 
        script.setAttribute('data-repo-id', 'R_kgDOPQOEKA');
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'DIC_kwDOPQOEKM4CtPgm');
        // ----------------------------------------------------
        script.setAttribute('data-mapping', 'specific');
        script.setAttribute('data-term', term); // Judul unik untuk setiap utas diskusi
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1'); // Mengaktifkan reaksi/like
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom'); // Form komentar di bawah
        
        // Mengatur tema Giscus sesuai tema website
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        script.setAttribute('data-theme', currentTheme);

        script.setAttribute('data-lang', 'id'); // Bahasa Giscus
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        container.appendChild(script);
    }

    // Fungsi untuk halaman detail surat (surat_detail.html)
    const postContentContainer = document.getElementById('post-content');
    if (postContentContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const nomorSurat = urlParams.get('surat');
        const dataSurat = dataAsbabunNuzul[nomorSurat];

        if (dataSurat) {
            const namaSurat = daftarNamaSurat[nomorSurat - 1];
            const daftarAyat = Object.keys(dataSurat.ayat).sort((a, b) => {
                const firstNumA = parseInt(a, 10);
                const firstNumB = parseInt(b, 10);
                return firstNumA - firstNumB;
            });

            const ayatListNav = document.getElementById('ayat-list');
            document.getElementById('sidebar-surat-title').textContent = `Ayat di Surat ${namaSurat}`;
            
            daftarAyat.forEach(nomorAyatKey => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `#${nomorAyatKey}`;
                a.textContent = `Ayat ${nomorAyatKey}`;
                a.dataset.nomorAyatKey = nomorAyatKey;
                li.appendChild(a);
                ayatListNav.appendChild(li);
            });

            const tampilkanKontenAyat = (nomorAyatKey) => {
                const detailAyat = dataSurat.ayat[nomorAyatKey];
                if (!detailAyat) return;

                const judulHalaman = `Surat ${namaSurat} : Ayat ${nomorAyatKey}`;
                document.getElementById('judul-surat-ayat').textContent = judulHalaman;
                document.title = `Asbabun Nuzul ${judulHalaman}`;
                
                const teksAyatHtml = detailAyat.teks_ayat.map(item => `<p class="ayat-arabic-item">${item.teks} (${item.nomor_ayat})</p>`).join('');
                document.getElementById('teks-ayat').innerHTML = teksAyatHtml;

                const artiAyatHtml = detailAyat.arti_ayat.map(item => `<p class="ayat-translation-item">(${item.nomor_ayat}) ${item.arti}</p>`).join('');
                document.getElementById('arti-ayat').innerHTML = artiAyatHtml;

                const sebabNuzulHtml = detailAyat.sebab_nuzul.map((riwayat, index) => {
                    const header = detailAyat.sebab_nuzul.length > 1 ? `<h4>Riwayat ${index + 1}</h4>` : '';
                    return `${header}<p>${riwayat.replace(/\n/g, '<br>')}</p>`;
                }).join('');
                document.getElementById('sebab-nuzul').innerHTML = sebabNuzulHtml;
                
                document.querySelector('meta[name="description"]').setAttribute('content', `Sebab turunnya Surat ${namaSurat} ayat ${nomorAyatKey}: ${detailAyat.sebab_nuzul[0].substring(0, 150)}...`);

                document.querySelectorAll('#ayat-list a').forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.nomorAyatKey === nomorAyatKey) {
                        link.classList.add('active');
                    }
                });
                
                // === PANGGIL FUNGSI GISCUS SETIAP KALI AYAT BERGANTI ===
                const discussionTerm = `Komentar: ${judulHalaman}`; // Ini akan menjadi judul unik untuk setiap diskusi
                loadGiscus(discussionTerm);
            };
            
            const handleStateChange = () => {
                let ayatKeyFromHash = window.location.hash.substring(1);

                if (!daftarAyat.includes(ayatKeyFromHash)) {
                    ayatKeyFromHash = daftarAyat[0];
                    history.replaceState(null, '', `#${ayatKeyFromHash}`);
                }
                
                tampilkanKontenAyat(ayatKeyFromHash);
            };

            ayatListNav.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') {
                    e.preventDefault();
                    const nomorAyatDipilih = e.target.dataset.nomorAyatKey;
                    
                    if (window.location.hash !== `#${nomorAyatDipilih}`) {
                        history.pushState({ ayat: nomorAyatDipilih }, '', `#${nomorAyatDipilih}`);
                        tampilkanKontenAyat(nomorAyatDipilih);
                    }
                }
            });

            window.addEventListener('popstate', () => {
                handleStateChange();
            });

            handleStateChange();

        } else {
            document.getElementById('post-content').innerHTML = '<h2>Data Tidak Ditemukan</h2><p>Maaf, tidak ada riwayat Asbabun Nuzul untuk surat ini atau URL tidak valid.</p>';
            document.getElementById('sidebar').style.display = 'none';
        }
    }
});
