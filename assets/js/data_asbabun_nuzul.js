/*
=========================================================================================
 PENTING: EDIT DATA ASBABUN NUZUL DI FILE INI (VERSI BARU)
=========================================================================================
 
 Cara Mengisi Data (Struktur Baru):
 1. 'dataAsbabunNuzul' adalah objek utama.
 2. KEY di dalam objek ini adalah NOMOR SURAT (string, misal "2").
 3. Di dalam setiap nomor surat, KEY 'ayat' berisi objek dari setiap riwayat.
 4. KEY di dalam 'ayat' sekarang bisa berupa NOMOR AYAT TUNGGAL ("106") atau RENTANG AYAT ("6-7").
 5. Di dalam setiap entri ayat/rentang, ada 3 KEY:
    - 'teks_ayat': Berisi ARRAY dari objek. Setiap objek punya {nomor_ayat, teks}.
    - 'arti_ayat': Berisi ARRAY dari objek. Setiap objek punya {nomor_ayat, arti}.
    - 'sebab_nuzul': Berisi ARRAY dari string. Setiap string adalah satu riwayat sebab nuzul.

*/

const dataAsbabunNuzul = {
    "2": { // Ini adalah nomor surat: 2 (Al-Baqarah)
        "ayat": {
            "6-7": { // CONTOH BARU: Riwayat untuk rentang ayat 6 sampai 7
                "teks_ayat": [
                    { "nomor_ayat": "6", "teks": "إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ" },
                    { "nomor_ayat": "7", "teks": "خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ ۖ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ ۖ وَلَهُمْ عَذَابٌ عَظِيمٌ" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "6", "arti": "Sesungguhnya orang-orang kafir, sama saja bagi mereka, engkau (Muhammad) beri peringatan atau tidak engkau beri peringatan, mereka tidak akan beriman." },
                    { "nomor_ayat": "7", "arti": "Allah telah mengunci hati dan pendengaran mereka, penglihatan mereka telah tertutup, dan bagi mereka azab yang berat." }
                ],
                "sebab_nuzul": [
                    "Diriwayatkan oleh Ibnu Abbas, ia berkata: 'Dua ayat ini turun berkenaan dengan para pemuka Yahudi, seperti Huyay bin Akhtab dan Ka'ab bin al-Asyraf, serta tokoh-tokoh lainnya. Ketika mereka ditanya tentang ciri-ciri Nabi Muhammad yang ada dalam kitab mereka, mereka mengingkarinya karena dengki dan hasad.' Ini adalah contoh riwayat pertama untuk ayat 6-7."
                ]
            },
            "106": { // CONTOH MODIFIKASI: Ayat ini sekarang punya DUA riwayat
                "teks_ayat": [
                    { "nomor_ayat": "106", "teks": "مَا نَنسَخْ مِنْ آيَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍ مِّنْهَا أَوْ مِثْلِهَا ۗ أَلَمْ تَعْلَمْ أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "106", "arti": "Ayat yang Kami batalkan atau Kami hilangkan dari ingatan, pasti Kami ganti dengan yang lebih baik atau yang sebanding dengannya. Tidakkah kamu tahu bahwa sesungguhnya Allah Mahakuasa atas segala sesuatu?" }
                ],
                "sebab_nuzul": [
                    "Riwayat 1: Diriwayatkan oleh Ibnu Abi Hatim dari jalur Sa'id atau Ikrimah dari Ibnu Abbas, ia berkata: 'Terkadang wahyu turun kepada Nabi di malam hari, lalu beliau melupakannya di siang hari.' Maka Allah menurunkan ayat ini. Hadis ini juga diriwayatkan oleh Ibnu Jarir.",
                    "Riwayat 2: Dalam riwayat lain dari Abu al-Aliyah, disebutkan bahwa kaum musyrikin berkata: 'Tidakkah kalian melihat Muhammad? Ia memerintahkan sahabatnya dengan suatu perintah, lalu melarangnya dan memerintahkan yang sebaliknya. Hari ini ia mengatakan sesuatu, besok ia mencabutnya kembali. Al-Qur'an ini hanyalah perkataan Muhammad yang ia buat-buat sendiri.' Maka Allah menurunkan ayat ini sebagai bantahan."
                ]
            },
            "109": { // Ayat dengan satu riwayat tetap valid
                "teks_ayat": [
                    { "nomor_ayat": "109", "teks": "وَدَّ كَثِيرٌ مِّنْ أَهْلِ الْكِتَابِ لَوْ يَرُدُّونَكُم مِّن بَعْدِ إِيمَانِكُمْ كُفَّارًا حَسَدًا مِّنْ عِندِ أَنفُسِهِم مِّن بَعْدِ مَا تَبَيَّنَ لَهُمُ الْحَقُّ" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "109", "arti": "Banyak di antara Ahli Kitab menginginkan sekiranya mereka dapat mengembalikan kamu setelah kamu beriman, menjadi kafir kembali, karena rasa dengki yang timbul dari diri mereka sendiri, setelah nyata bagi mereka kebenaran." }
                ],
                "sebab_nuzul": [
                    "Diriwayatkan oleh Ibnu Mundzir dan lainnya dari Ibnu Abbas, ia berkata: 'Huyay bin Akhtab dan Abu Yasir bin Akhtab adalah dua orang Yahudi yang paling dengki terhadap orang Arab karena Allah mengkhususkan kerasulan kepada mereka. Keduanya berusaha memalingkan manusia dari Islam semampu mereka.' Maka Allah menurunkan ayat ini berkenaan dengan mereka berdua."
                ]
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
                "sebab_nuzul": [
                    "Diriwayatkan oleh Ibnu Abi Hatim dari As-Suddi, ia berkata: 'Utusan dari Najran (sekelompok Nasrani) datang kepada Nabi Muhammad SAW. Mereka mendebat beliau tentang Isa bin Maryam. Nabi bersabda: 'Bukankah kalian tahu bahwa seorang anak pasti mirip dengan ayahnya?' Mereka menjawab: 'Ya.' Nabi melanjutkan: 'Bukankah kalian tahu bahwa Tuhan kita hidup dan tidak akan mati, sedangkan Isa akan mengalami kematian?' Mereka menjawab: 'Ya.' Nabi melanjutkan lagi: 'Bukankah kalian tahu bahwa Tuhan kita mengatur segala sesuatu, memelihara, dan memberi rezeki?' Mereka menjawab: 'Ya.' Nabi bertanya: 'Apakah Isa memiliki kemampuan itu?' Mereka menjawab: 'Tidak.' Ketika mereka tetap membantah, turunlah ayat ini yang mengajak mereka untuk melakukan mubahalah (sumpah saling melaknat).'"
                ]
            }
        }
    },
    "113": { // Ini adalah nomor surat: 113 (Al-Falaq)
        "ayat": {
            "1-5": { // Nomor ayat ini mewakili keseluruhan surat
                "teks_ayat": [
                    { "nomor_ayat": "1-5", "teks": "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (1) مِن شَرِّ مَا خَلَقَ (2) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ (4) وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)" }
                ],
                "arti_ayat": [
                    { "nomor_ayat": "1-5", "arti": "Katakanlah: 'Aku berlindung kepada Tuhan Yang Menguasai subuh, dari kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul, dan dari kejahatan pendengki bila ia dengki.'" }
                ],
                "sebab_nuzul": [
                    "Diriwayatkan oleh Al-Baihaqi dalam 'Dala'il an-Nubuwah' dari Al-Kalbi dari Abu Shalih dari Ibnu Abbas, serta diriwayatkan pula dari Aisyah RA. Mereka berkata: 'Ada seorang Yahudi bernama Labid bin al-A'sham yang menyihir Rasulullah SAW. Kemudian, ia menyembunyikan sihirnya di sebuah sumur milik Bani Zuraiq. Rasulullah SAW jatuh sakit, dan rambut beliau mulai rontok. Beliau merasa telah mendatangi istri-istrinya padahal beliau tidak melakukannya. Suatu hari, saat beliau sedang tidur, dua malaikat datang. Satu duduk di dekat kepala beliau, dan yang lain di dekat kaki beliau. Malaikat yang berada di dekat kaki bertanya kepada yang di dekat kepala: 'Apa yang terjadi pada orang ini?' Ia menjawab: 'Dia terkena sihir (Thabb).' Ditanya lagi: 'Siapa yang menyihirnya?' Dijawab: 'Labid bin al-A'sham, seorang Yahudi.' Ditanya: 'Dengan apa ia menyihirnya?' Dijawab: 'Dengan sebuah sisir dan beberapa helai rambut.' Ditanya: 'Di mana sihir itu diletakkan?' Dijawab: 'Di dalam mayang kurma jantan, di bawah sebuah batu di dasar sumur Dzarwan.' Rasulullah SAW terbangun dan segera mengutus Ali bin Abi Thalib, Zubair, dan Ammar bin Yasir untuk mengeringkan air sumur tersebut. Setelah itu, mereka mengangkat batu dan menemukan mayang kurma yang di dalamnya terdapat beberapa helai rambut dan sebelas buhul yang ditusuk dengan jarum. Maka Allah SWT menurunkan surat Al-Falaq dan An-Nas. Setiap kali Rasulullah SAW membaca satu ayat, satu buhul terlepas, hingga beliau merasa lebih ringan dan sehat kembali.'"
                ]
            }
        }
    }
};