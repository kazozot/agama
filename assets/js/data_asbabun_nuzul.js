/*
=========================================================================================
 PENTING: EDIT DATA ASBABUN NUZUL DI FILE INI (VERSI BARU)
=========================================================================================
 
 Cara Mengisi Data (Struktur Baru):
 1. 'dataAsbabunNuzul' adalah objek utama.
 2. KEY di dalam objek ini adalah NOMOR SURAT (string, misal "2").
 3. Di dalam setiap nomor surat, KEY 'ayat' berisi objek dari setiap riwayat.
 4. KEY di dalam 'ayat' bisa berupa NOMOR AYAT TUNGGAL ("106") atau RENTANG AYAT ("6-7").
 5. Di dalam setiap entri ayat/rentang, ada 3 KEY:
    - 'teks_ayat': Berisi ARRAY dari objek. Setiap objek punya {nomor_ayat, teks}.
    - 'arti_ayat': Berisi ARRAY dari objek. Setiap objek punya {nomor_ayat, arti}.
    - 'sebab_nuzul': Berisi OBJEK. Key-nya adalah nama perawi (misal, "Imam Jalaluddin As-Suyuthi"), 
                     dan value-nya adalah ARRAY dari string riwayat.

*/

const dataAsbabunNuzul = {
    "2": { // Ini adalah nomor surat: 2 (Al-Baqarah)
        "ayat": {
            "6-7": { 
                "teks_ayat": [
                    { "nomor_ayat": "6", "teks": "اِنَّ الَّذِيْنَ كَفَرُوْا سَوَاۤءٌ عَلَيْهِمْ ءَاَنْذَرْتَهُمْ اَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُوْنَ" },
                    { "nomor_ayat": "7", "teks": "خَتَمَ اللّٰهُ عَلٰى قُلُوْبِهِمْ وَعَلٰى سَمْعِهِمْ ۗ وَعَلٰٓى اَبْصَارِهِمْ غِشَاوَةٌ وَّلَهُمْ عَذَابٌ عَظِيْمٌ" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "6", "arti": "Sesungguhnya orang-orang kafir, sama saja bagi mereka, engkau (Muhammad) beri peringatan atau tidak engkau beri peringatan, mereka tidak akan beriman." },
                    { "nomor_ayat": "7", "arti": "Allah telah mengunci hati dan pendengaran mereka, penglihatan mereka telah tertutup, dan bagi mereka azab yang berat." }
                ],
                "sebab_nuzul": {
                    "Imam Jalaluddin As-Suyuthi": [
                        "Ibnu Jarir meriwayatkan dari Ibnu Ishaq, dari Muhammad bin Abi Muhammad, dari Ikrimah atau dari Sa’id bin Jubair, dari Ibnu Abbas bahwa kedua ayat tersebut turun berkenaan dengan orang-orang Yahudi di Madinah.",
                        "Ibnu Jarir juga meriwayatkan dari ar-Rabi’ bin Anas, dia berkata, “Dua ayat turun berkenaan dengan perang Ahzab yaitu, ‘Sesungguhnya orang-orang kafir, sama saja bagi mereka,...’ sampai, ‘..., dan mereka akan mendapat siksaan yang berat.’ ” (Al-Baqarah: 6-7)"
                    ],
                    "Ibnu Katsir": [
                        "Ibnu Katsir menyebutkan bahwa ayat ini turun untuk menjelaskan tentang orang-orang yang telah ditetapkan kesesatannya, di mana peringatan tidak akan bermanfaat bagi mereka. Ini mencakup para pemimpin Quraisy seperti Abu Jahal dan lainnya yang mati dalam kekafiran pada Perang Badar."
                    ]
                }
            },
            "14": { 
                "teks_ayat": [
                    { "nomor_ayat": "14", "teks": "اِنَّ الَّذِيْنَ كَفَرُوْا سَوَاۤءٌ عَلَيْهِمْ ءَاَنْذَرْتَهُمْ اَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُوْنَ" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "14", "arti": "Dan apabila mereka berjumpa dengan orang yang beriman, mereka berkata, “Kami telah beriman.” Tetapi apabila mereka kembali kepada setan-setan (para pemimpin) mereka, mereka berkata, “Sesungguhnya kami bersama kamu, kami hanya berolok-olok.”" }
                ],
                "sebab_nuzul": {
                    "Imam Jalaluddin As-Suyuthi": [
                        "Al-Wahidi dan ats-Tsa’labi meriwayatkan dari Muhammad bin Marwan as-Suddi as-Shagir, dari al-Kalabi, dari Abu Shalih, dari Ibnu Abbas, dia berkata, “Ayat tersebut turun berkenaan dengan Abdullah bin Ubay dan kawan-kawannya. Pada suatu hari mereka bertemu dengan sekelompok sahabat Rasulullah Saw. Maka Abdullah bin Ubay berkata, ‘Lihatlah bagaimana aku menjauhkan orang-orang bodoh ini dari kalian.’ Kemudian dia pergi menghampiri Abu Bakar dan memegang tangannya, lalu berkata, ‘Selamat datang ash-Shiddiiq, tuan Bani Tamim, syaikhul Islam, orang kedua setelah Rasulullah saat berada dalam gua, juga orang yang mencurahkan diri dan hartanya demi Rasulullah.’ Kemudian dia memegang tangan Umar dan berkata, ‘Selamat datang tuan Bani ‘Addi bin Ka’ab, al-Faruuq yang kokoh di dalam agama Allah, juga orang yang mencurahkan diri dan hartanya demi Rasulullah.’ Kemudian dia memegang tangan Ali dan berkata, ‘Selamat datang sepupu Rasulullah dan menantu beliau, tuan Bani Hasyim setelah Rasulullah.’ Kemudian mereka pergi secara terpisah. Lalu Abdullah bin Ubay berkata kepada kawan-kawannya, ‘Bagaimana pendapat kalian tentang yang telah aku lakukan tadi? Jika kalian melihat mereka, maka lakukanlah seperti apa yang aku lakukan.’ Maka mereka memujinya. Kemudian orang-orang muslim menemui Nabi dan menceritakan hal tersebut, maka turunlah ayat ini.”",
                        "Isnad riwayat ini sangat lemah. Karena as-Suddi ash-Shaghir dan al-Kalabi adalah pendusta. Dan Abu Shalih sendiri adalah orang yang lemah."
                    ]
                }
            },
            "106": { 
                "teks_ayat": [
                    { "nomor_ayat": "106", "teks": "مَا نَنسَخْ مِنْ آيَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍ مِّنْهَا أَوْ مِثْلِهَا ۗ أَلَمْ تَعْلَمْ أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "106", "arti": "Ayat yang Kami batalkan atau Kami hilangkan dari ingatan, pasti Kami ganti dengan yang lebih baik atau yang sebanding dengannya. Tidakkah kamu tahu bahwa sesungguhnya Allah Mahakuasa atas segala sesuatu?" }
                ],
                "sebab_nuzul": {
                    "Imam Jalaluddin As-Suyuthi": [
                        "Riwayat 1: Diriwayatkan oleh Ibnu Abi Hatim dari jalur Sa'id atau Ikrimah dari Ibnu Abbas, ia berkata: 'Terkadang wahyu turun kepada Nabi di malam hari, lalu beliau melupakannya di siang hari.' Maka Allah menurunkan ayat ini. Hadis ini juga diriwayatkan oleh Ibnu Jarir.",
                        "Riwayat 2: Dalam riwayat lain dari Abu al-Aliyah, disebutkan bahwa kaum musyrikin berkata: 'Tidakkah kalian melihat Muhammad? Ia memerintahkan sahabatnya dengan suatu perintah, lalu melarangnya dan memerintahkan yang sebaliknya. Hari ini ia mengatakan sesuatu, besok ia mencabutnya kembali. Al-Qur'an ini hanyalah perkataan Muhammad yang ia buat-buat sendiri.' Maka Allah menurunkan ayat ini sebagai bantahan."
                    ],
                     "Ibnu Katsir": [
                        "Menurut Ibnu Katsir, ayat ini turun untuk menanggapi celaan kaum Yahudi dan musyrikin terhadap konsep 'naskh' (penghapusan atau penggantian ayat) dalam Al-Qur'an. Mereka menganggapnya sebagai bukti bahwa Al-Qur'an tidak konsisten. Allah menegaskan bahwa Dia berhak mengganti hukum sesuai dengan kemaslahatan hamba-Nya."
                    ]
                }
            },
            "109": { 
                "teks_ayat": [
                    { "nomor_ayat": "109", "teks": "وَدَّ كَثِيرٌ مِّنْ أَهْلِ الْكِتَابِ لَوْ يَرُدُّونَكُم مِّن بَعْدِ إِيمَانِكُمْ كُفَّارًا حَسَدًا مِّنْ عِندِ أَنفُسِهِم مِّن بَعْدِ مَا تَبَيَّنَ لَهُمُ الْحَقُّ" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "109", "arti": "Banyak di antara Ahli Kitab menginginkan sekiranya mereka dapat mengembalikan kamu setelah kamu beriman, menjadi kafir kembali, karena rasa dengki yang timbul dari diri mereka sendiri, setelah nyata bagi mereka kebenaran." }
                ],
                "sebab_nuzul": {
                     "Imam Jalaluddin As-Suyuthi": [
                        "Diriwayatkan oleh Ibnu Mundzir dan lainnya dari Ibnu Abbas, ia berkata: 'Huyay bin Akhtab dan Abu Yasir bin Akhtab adalah dua orang Yahudi yang paling dengki terhadap orang Arab karena Allah mengkhususkan kerasulan kepada mereka. Keduanya berusaha memalingkan manusia dari Islam semampu mereka.' Maka Allah menurunkan ayat ini berkenaan dengan mereka berdua."
                    ],
                    "Ibnu Katsir": [
                        "(Data riwayat dari Ibnu Katsir belum tersedia untuk ayat ini.)"
                    ]
                }
            }
        }
    },
    "3": { // Ini adalah nomor surat: 3 (Ali 'Imran)
        "ayat": {
            "61": {
                "teks_ayat": [
                    { "nomor_ayat": "61", "teks": "فَمَنْ حَاجَّكَ فِيهِ مِن بَعْدِ مَا جَاءَكَ مِنَ الْعِلْمِ فَقُلْ تَعَالَوْا نَدْعُ أَبْنَاءَنَا وَأَبْنَاءَكُمْ وَنِسَاءَنَا وَنِسَاءَكُمْ وَأَنفُسَنَا وَأَنفُسَكُمْ ثُمَّ نَبْتَهِلْ فَنَجْعَل لَّعْنَتَ اللَّهِ عَلَى الْكَاذِبِينَ" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "61", "arti": "Siapa yang membantahmu tentang kisah Isa sesudah datang ilmu (yang meyakinkan kamu), maka katakanlah (kepadanya): 'Marilah kita memanggil anak-anak kami dan anak-anak kamu, isteri-isteri kami dan isteri-isteri kamu, diri kami dan diri kamu; kemudian marilah kita bermubahalah kepada Allah dan kita minta supaya laknat Allah ditimpakan kepada orang-orang yang dusta.'" }
                ],
                "sebab_nuzul": {
                    "Imam Jalaluddin As-Suyuthi": [
                        "Diriwayatkan oleh Ibnu Abi Hatim dari As-Suddi, ayat ini turun ketika utusan Nasrani dari Najran datang dan berdebat dengan Nabi Muhammad SAW tentang hakikat Isa Al-Masih. Ketika mereka menolak argumen Nabi, Allah memerintahkan untuk melakukan mubahalah (sumpah saling melaknat)."
                    ],
                    "Ibnu Katsir": [
                        "Ibnu Katsir juga menegaskan bahwa ayat Mubahalah ini turun berkaitan dengan delegasi dari Najran. Beliau menambahkan riwayat bahwa Nabi Muhammad SAW kemudian keluar bersama Hasan, Husain, Ali, dan Fatimah, siap untuk melakukan mubahalah, namun para utusan Najran tersebut akhirnya menolak dan memilih untuk membayar jizyah."
                    ]
                }
            }
        }
    },
    "113": { // Ini adalah nomor surat: 113 (Al-Falaq)
        "ayat": {
            "1-5": {
                "teks_ayat": [
                    { "nomor_ayat": "1-5", "teks": "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (1) مِن شَرِّ مَا خَلَقَ (2) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ (4) وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "1-5", "arti": "Katakanlah: 'Aku berlindung kepada Tuhan Yang Menguasai subuh, dari kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul, dan dari kejahatan pendengki bila ia dengki.'" }
                ],
                "sebab_nuzul": {
                    "Imam Jalaluddin As-Suyuthi": [
                        "Diriwayatkan oleh Al-Baihaqi, surat ini (bersama Surat An-Nas) turun setelah Nabi Muhammad SAW disihir oleh seorang Yahudi bernama Labid bin al-A'sham. Sihir tersebut berupa ikatan-ikatan yang disembunyikan di dalam sumur. Malaikat memberitahu Nabi tentang lokasi sihir tersebut, dan setelah diangkat, setiap kali satu ayat dari surat ini dibacakan, satu ikatan terlepas hingga Nabi pulih sepenuhnya."
                    ],
                    "Ibnu Katsir": [
                        "Riwayat serupa juga dikonfirmasi oleh Ibnu Katsir. Beliau mengutip hadis dari Shahih Bukhari melalui Aisyah RA yang menceritakan secara rinci tentang bagaimana Nabi disihir, bagaimana beliau berdoa kepada Allah hingga dua malaikat datang dalam mimpi dan memberitahukan detail sihir tersebut, dan bagaimana surat Al-Mu'awwidzatain (Al-Falaq dan An-Nas) menjadi penyembuh atas izin Allah."
                    ]
                }
            }
        }
    }
};
