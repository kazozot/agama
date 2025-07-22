document.addEventListener('DOMContentLoaded', () => {

    // --- PENGATURAN IKLAN ---
    // Ubah nilai di bawah ini ke `false` untuk mematikan SEMUA iklan di situs.
    // Ubah ke `true` untuk menyalakan kembali.
    const ENABLE_ADS = false;

    // Fungsi untuk mengelola visibilitas slot iklan
    const manageAdVisibility = () => {
        if (!ENABLE_ADS) {
            const adSlots = ['ads-header-top', 'ads-footer-top', 'ads-post-start', 'ads-post-middle', 'ads-post-end'];
            adSlots.forEach(slotId => {
                const adContainer = document.getElementById(slotId);
                if (adContainer) {
                    adContainer.style.display = 'none';
                }
            });
        }
    };
    
    // Panggil fungsi untuk mengatur iklan saat halaman dimuat
    manageAdVisibility();

    // --- Definisi Ikon SVG untuk Tema ---
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.64 5.64c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.64 5.64zm12.73 12.73c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.41-1.41zM18.36 5.64l-1.41 1.41c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0zM7.05 18.36l-1.41-1.41c-.39-.39-.39 1.02 0-1.41s1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41s-1.03.39-1.41 0z"/></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.37 5.51c.46-1.12 1.48-2 2.63-2.02.53-.01 1.08.16 1.54.49l.07.05c.67.53 1.03 1.34 1.03 2.18 0 .42-.11.83-.32 1.2l-.05.08c-.73 1.39-2.34 2.19-3.93 1.95C9.22 9.94 8.5 8.84 8.5 7.5c0-.49.15-1 .46-1.45l.01-.04zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>`;

    // --- Fungsi untuk mode terang/gelap ---
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const applyTheme = (theme) => {
            document.body.classList.toggle('dark-mode', theme === 'dark');
            themeToggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
            localStorage.setItem('theme', theme);

            // Muat ulang Giscus dengan tema baru jika ada
            const giscusFrame = document.querySelector('iframe.giscus-frame');
            if (giscusFrame) {
                giscusFrame.contentWindow.postMessage({ giscus: { setConfig: { theme: theme } } }, 'https://giscus.app');
            }
        };

        themeToggle.addEventListener('click', () => {
            const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(newTheme);
        });

        // Terapkan tema dari localStorage saat memuat
        const currentTheme = localStorage.getItem('theme') || 'light';
        applyTheme(currentTheme);
    }

    // --- LOGIKA TOMBOL DOWNLOAD GANDA ---
    const setupDownloadButton = (buttonId, realLink, downloadName) => {
        const downloadBtn = document.getElementById(buttonId);
        if (downloadBtn) {
            let hasClickedOnce = false;
            downloadBtn.addEventListener('click', () => {
                if (!hasClickedOnce) {
                    window.open('tos.html', '_blank');
                    downloadBtn.textContent = 'Klik Lagi untuk Konfirmasi & Download';
                    hasClickedOnce = true;
                } else {
                    const link = document.createElement('a');
                    link.href = realLink;
                    link.download = downloadName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    setTimeout(() => {
                        downloadBtn.textContent = `Download ${downloadName.split('_').slice(0, -1).join(' ')}`;
                        hasClickedOnce = false;
                    }, 2000);
                }
            });
        }
    };

    setupDownloadButton('download-book-btn-suyuthi', 'assets/books/lubabun_nuqul_fi_asbabin_nuzul.pdf', 'Kitab_Asbabun_Nuzul_Imam_As-Suyuthi.pdf');
    // Placeholder untuk link download Ibnu Katsir
    setupDownloadButton('download-book-btn-katsir', 'assets/books/placeholder_tafsir_ibnu_katsir.pdf', 'Kitab_Tafsir_Ibnu_Katsir.pdf');

    const daftarNamaSurat = [ "Al-Fatihah", "Al-Baqarah", "Ali 'Imran", "An-Nisa'", "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Taubah", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra'", "Al-Kahf", "Maryam", "Taha", "Al-Anbiya'", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan", "Asy-Syu'ara'", "An-Naml", "Al-Qasas", "Al-'Ankabut", "Ar-Rum", "Luqman", "As-Sajdah", "Al-Ahzab", "Saba'", "Fatir", "Yasin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat", "Asy-Syura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jasiyah", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf", "Az-Zariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqi'ah", "Al-Hadid", "Al-Mujadilah", "Al-Hasyr", "Al-Mumtahanah", "As-Saff", "Al-Jumu'ah", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij", "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddassir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba'", "An-Nazi'at", "'Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Insyiqaq", "Al-Buruj", "At-Tariq", "Al-A'la", "Al-Ghasyiyah", "Al-Fajr", "Al-Balad", "Asy-Syams", "Al-Lail", "Ad-Duha", "Asy-Syarh", "At-Tin", "Al-'Alaq", "Al-Qadr", "Al-Bayyinah", "Az-Zalzalah", "Al-'Adiyat", "Al-Qari'ah", "At-Takasur", "Al-'Asr", "Al-Humazah", "Al-Fil", "Quraisy", "Al-Ma'un", "Al-Kausar", "Al-Kafirun", "An-Nasr", "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"];

    // --- Fungsi untuk halaman utama (index.html) ---
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

    // --- Fungsi untuk memuat komentar Giscus ---
    function loadGiscus(term) {
        const container = document.getElementById('giscus-container');
        if (!container) return;
        while (container.firstChild) { container.removeChild(container.firstChild); }
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', 'kazozot/agama');
        script.setAttribute('data-repo-id', 'R_kgDOPQOEKA');
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'DIC_kwDOPQOEKM4CtPgm');
        script.setAttribute('data-mapping', 'specific');
        script.setAttribute('data-term', term);
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom');
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        script.setAttribute('data-theme', currentTheme);
        script.setAttribute('data-lang', 'id');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;
        container.appendChild(script);
    }
    
    // --- Fungsi untuk halaman detail surat (surat_detail.html) ---
    const postContentContainer = document.getElementById('post-content');
    if (postContentContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const nomorSurat = urlParams.get('surat');
        const dataSurat = dataAsbabunNuzul[nomorSurat];

        if (dataSurat) {
            const namaSurat = daftarNamaSurat[nomorSurat - 1];
            const daftarAyat = Object.keys(dataSurat.ayat).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
            const ayatListNav = document.getElementById('ayat-list');
            const riwayatTabsContainer = document.querySelector('.riwayat-tabs');
            
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

                document.getElementById('judul-surat-ayat').textContent = `Surat ${namaSurat} : Ayat ${nomorAyatKey}`;
                document.title = `Asbabun Nuzul ${namaSurat} : Ayat ${nomorAyatKey}`;
                document.querySelector('meta[name="description"]').setAttribute('content', `Sebab turunnya Surat ${namaSurat} ayat ${nomorAyatKey}.`);
                document.getElementById('teks-ayat').innerHTML = detailAyat.teks_ayat.map(item => `<p class="ayat-arabic-item">${item.teks} (${item.nomor_ayat})</p>`).join('');
                document.getElementById('arti-ayat').innerHTML = detailAyat.arti_ayat.map(item => `<p class="ayat-translation-item">(${item.nomor_ayat}) ${item.arti}</p>`).join('');
                
                const tampilkanRiwayat = (namaPerawi) => {
                    const sebabNuzulContainer = document.getElementById('sebab-nuzul');
                    const riwayatData = detailAyat.sebab_nuzul[namaPerawi];
                    
                    if (riwayatData && riwayatData.length > 0) {
                        sebabNuzulContainer.innerHTML = riwayatData.map((riwayat, index) => {
                            const header = riwayatData.length > 1 ? `<h4>Riwayat ${index + 1}</h4>` : '';
                            return `${header}<p>${riwayat.replace(/\n/g, '<br>')}</p>`;
                        }).join('');
                    } else {
                        sebabNuzulContainer.innerHTML = '<p>Riwayat tidak tersedia untuk perawi ini.</p>';
                    }
                    
                    document.querySelectorAll('.tab-link').forEach(tab => {
                        tab.classList.toggle('active', tab.dataset.riwayat === namaPerawi);
                    });
                };
                
                document.querySelectorAll('.tab-link').forEach(tab => {
                    const perawi = tab.dataset.riwayat;
                    const riwayatAda = detailAyat.sebab_nuzul && detailAyat.sebab_nuzul[perawi];
                    tab.style.display = riwayatAda ? '' : 'none';
                });

                tampilkanRiwayat('Imam Jalaluddin As-Suyuthi'); 

                document.querySelectorAll('#ayat-list a').forEach(link => {
                    link.classList.toggle('active', link.dataset.nomorAyatKey === nomorAyatKey);
                });
                
                loadGiscus(`Komentar: Surat ${namaSurat} Ayat ${nomorAyatKey}`);
            };

            riwayatTabsContainer.addEventListener('click', e => {
                if (e.target.classList.contains('tab-link')) {
                    const nomorAyatKey = window.location.hash.substring(1) || daftarAyat[0];
                    const perawi = e.target.dataset.riwayat;
                    
                    const detailAyat = dataSurat.ayat[nomorAyatKey];
                    const sebabNuzulContainer = document.getElementById('sebab-nuzul');
                    const riwayatData = detailAyat.sebab_nuzul[perawi];
                    
                    if (riwayatData && riwayatData.length > 0) {
                        sebabNuzulContainer.innerHTML = riwayatData.map((riwayat, index) => {
                            const header = riwayatData.length > 1 ? `<h4>Riwayat ${index + 1}</h4>` : '';
                            return `${header}<p>${riwayat.replace(/\n/g, '<br>')}</p>`;
                        }).join('');
                    } else {
                        sebabNuzulContainer.innerHTML = '<p>Riwayat tidak tersedia untuk perawi ini.</p>';
                    }

                    document.querySelectorAll('.tab-link').forEach(tab => tab.classList.remove('active'));
                    e.target.classList.add('active');
                }
            });

            const handleStateChange = () => {
                let ayatKeyFromHash = window.location.hash.substring(1);
                if (!daftarAyat.includes(ayatKeyFromHash)) {
                    ayatKeyFromHash = daftarAyat[0];
                    history.replaceState(null, '', `#${ayatKeyFromHash}`);
                }
                tampilkanKontenAyat(ayatKeyFromHash);
            };

            ayatListNav.addEventListener('click', e => {
                if (e.target.tagName === 'A') {
                    e.preventDefault();
                    const nomorAyatDipilih = e.target.dataset.nomorAyatKey;
                    if (window.location.hash !== `#${nomorAyatDipilih}`) {
                        history.pushState({ ayat: nomorAyatDipilih }, '', `#${nomorAyatDipilih}`);
                        tampilkanKontenAyat(nomorAyatDipilih);
                    }
                }
            });

            window.addEventListener('popstate', handleStateChange);
            handleStateChange();

        } else {
            document.getElementById('post-content').innerHTML = '<h2>Data Tidak Ditemukan</h2><p>Maaf, tidak ada riwayat Asbabun Nuzul untuk surat ini atau URL tidak valid.</p>';
            document.getElementById('sidebar').style.display = 'none';
        }
    }
});
