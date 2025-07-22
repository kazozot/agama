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
                    { "nomor_ayat": "6", "teks": "إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ" },
                    { "nomor_ayat": "7", "teks": "خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ ۖ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ ۖ وَلَهُمْ عَذَابٌ عَظِيمٌ" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "6", "arti": "Sesungguhnya orang-orang kafir, sama saja bagi mereka, engkau (Muhammad) beri peringatan atau tidak engkau beri peringatan, mereka tidak akan beriman." },
                    { "nomor_ayat": "7", "arti": "Allah telah mengunci hati dan pendengaran mereka, penglihatan mereka telah tertutup, dan bagi mereka azab yang berat." }
                ],
                "sebab_nuzul": {
                    "Imam Jalaluddin As-Suyuthi": [
                        "Diriwayatkan oleh Ibnu Abbas, ia berkata: 'Dua ayat ini turun berkenaan dengan para pemuka Yahudi, seperti Huyay bin Akhtab dan Ka'ab bin al-Asyraf, serta tokoh-tokoh lainnya. Ketika mereka ditanya tentang ciri-ciri Nabi Muhammad yang ada dalam kitab mereka, mereka mengingkarinya karena dengki dan hasad.'"
                    ],
                    "Ibnu Katsir": [
                        "Ibnu Katsir menyebutkan bahwa ayat ini turun untuk menjelaskan tentang orang-orang yang telah ditetapkan kesesatannya, di mana peringatan tidak akan bermanfaat bagi mereka. Ini mencakup para pemimpin Quraisy seperti Abu Jahal dan lainnya yang mati dalam kekafiran pada Perang Badar."
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