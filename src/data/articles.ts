export interface ArticleCategory {
  slug: string;
  title: string;
  description: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  list?: string[];
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  categorySlug: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  relatedAreaSlug: string;
  sections: ArticleSection[];
  sources: string[];
  metaTitle: string;
  metaDescription: string;
  noindex?: boolean;
  status: "published" | "draft";
  /** Makale sonunda gösterilen SSS (FAQPage şeması da bu listeden üretilir). */
  faqs?: ArticleFaq[];
  /** Makale sonundaki genel bilgilendirme notu. */
  closingNote?: string;
}

export const articleCategories: ArticleCategory[] = [
  {
    slug: "gurbetci-hukuk",
    title: "Gurbetçi Hukuku",
    description:
      "Yurt dışında yaşayan Türk vatandaşlarının vekâletname, miras, boşanma, tapu ve dava takibi süreçlerine ilişkin bilgilendirme yazıları.",
  },
  {
    slug: "aile-hukuku",
    title: "Aile Hukuku",
    description:
      "Boşanma, velayet, nafaka ve mal rejimi süreçlerine ilişkin genel bilgilendirme yazıları.",
  },
  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    description:
      "Fesih, işçilik alacakları, arabuluculuk ve iş kazası süreçlerine ilişkin yazılar.",
  },
  {
    slug: "kira-hukuku",
    title: "Kira Hukuku",
    description:
      "Kira bedelinin tespiti, tahliye ve kiracı-kiraya veren ilişkisine dair yazılar.",
  },
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    description:
      "Soruşturma, kovuşturma ve kanun yollarına ilişkin genel bilgilendirme yazıları.",
  },
];

export const articles: Article[] = [
  {
    slug: "bursa-gurbetci-hukuk",
    title: "Bursa Gurbetçi Hukuk: Yurt Dışında Yaşayanlar İçin Hukuki Rehber",
    excerpt:
      "Bursa gurbetçi hukuk hizmetleri; yurt dışında yaşayan vatandaşların vekâletname, miras, boşanma, tapu ve dava takibi süreçlerini Türkiye'ye gelmeden yürütebilmesini konu alır. Bu rehber, süreçlerin genel işleyişini açıklar.",
    categorySlug: "gurbetci-hukuk",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-03",
    readingMinutes: 9,
    relatedAreaSlug: "aile-hukuku",
    metaTitle: "Bursa Gurbetçi Hukuk Rehberi | Akdağ Hukuk",
    metaDescription:
      "Bursa gurbetçi hukuk hizmetleri hakkında rehber. Yurt dışından vekâletname, miras, boşanma, tapu ve dava takibi süreçlerini inceleyin.",
    status: "published",
    sections: [
      {
        id: "bursa-gurbetci-hukuk-nedir",
        heading: "Bursa Gurbetçi Hukuk Hizmeti Nedir?",
        level: 2,
        paragraphs: [
          "Bursa gurbetçi hukuk, Almanya, Hollanda, Avusturya, Fransa, Belçika, İsviçre veya bir başka ülkede yaşayan Türk vatandaşlarının Türkiye'deki hukuki işlerinin, bulundukları ülkeden takip edilebilmesi için yürütülen çalışmaların bütününü anlatan pratik bir tanımdır. Kavram kanunda ayrı bir dava türü olarak düzenlenmez; yurt dışında yaşamanın getirdiği mesafe, tebligat, süre ve belge sorunlarının hukuk usulü içinde nasıl yönetildiğini ifade eder.",
          "Yurt dışında yaşayan Türklerin en sık ihtiyaç duyduğu başlıklar; miras ve veraset işlemleri, tapu ve gayrimenkul devirleri, boşanma ve velayet dosyaları, yabancı mahkeme kararlarının Türkiye'de tanınması ve tenfizi, icra takipleri, askerlik ve nüfus işlemleri ile kira uyuşmazlıklarıdır. Bu dosyalar Bursa adliyelerinde, Bursa tapu müdürlüklerinde veya Bursa icra dairelerinde görüldüğünde, dosyanın bulunduğu yerde bir vekilin bulunması süreci belirgin biçimde kolaylaştırır.",
          "Gurbetçi hukuk Bursa özelinde önemli bir başlıktır; çünkü Bursa, yurt dışına işçi göçü veren illerin başında gelir ve pek çok ailenin taşınmazı, mirası ve nüfus kaydı hâlâ Bursa'dadır. Süreçlerin tamamına dair ayrıntılı hizmet başlıklarını [Bursa Gurbetçi Hukuk sayfamızda](/bursa-gurbetci-hukuk) inceleyebilirsiniz.",
        ],
      },
      {
        id: "turkiyeye-gelmeden-islemler",
        heading: "Türkiye'ye Gelmeden Hangi İşlemler Yapılabilir?",
        level: 2,
        paragraphs: [
          "Türkiye'ye gelmeden hukuki işlem yapılabilmesinin temel aracı vekâletnamedir. Usulüne uygun düzenlenmiş bir vekâletname bulunduğunda, dosyanın açılması, dilekçelerin sunulması, duruşmaların takibi ve tebligatların karşılanması gibi işlemler vekil aracılığıyla yürütülebilir. Böylece izin dönemini beklemek veya her aşama için uçak bileti almak zorunda kalmadan sürecin ilerlemesi mümkün olur.",
          "Bununla birlikte her işlem vekil aracılığıyla tamamlanamaz. Bazı hâllerde ilgilinin bizzat dinlenmesi, imza atması veya beyanda bulunması gerekir; örneğin anlaşmalı boşanmada tarafların hâkim huzurunda dinlenmesi kural olarak aranır. Hangi işlemin bizzat huzur gerektirdiği, dosyanın türüne ve mahkemenin takdirine göre değişebileceğinden, başlangıçta bu ayrımın netleştirilmesi zaman ve masraf kaybını önler.",
        ],
        list: [
          "Miras, veraset ve intikal işlemlerinin başlatılması ve takibi",
          "Tapu devri, ipotek terkini ve kat irtifakı gibi taşınmaz işlemlerinin vekil aracılığıyla yürütülmesi",
          "Alacak, kira, tazminat ve işçilik alacağı dosyalarında dava ve icra takibi",
          "Yabancı mahkeme kararlarının Türkiye'de tanınması ve tenfizi başvuruları",
          "Nüfus, askerlik ve idari başvuruların yurt dışından yürütülmesi",
        ],
      },
      {
        id: "konsolosluk-vekaletnamesi",
        heading: "Konsolosluk Vekâletnamesi Nasıl Kullanılır?",
        level: 2,
        paragraphs: [
          "Yurt dışında yaşayan vatandaşlar vekâletnameyi genellikle bulundukları ülkedeki Türk konsolosluğunda düzenletir. Konsolosluk vekâletnamesi, Türkiye'deki noter vekâletnamesiyle aynı işlevi görür ve randevu ile başvuru üzerine hazırlanır. Bazı hâllerde yerel noterde düzenlenen ve apostil şerhi ile Türkçe tercümesi eklenen belgeler de kullanılabilir; ancak uygulamadaki kabul koşulları ülkeye ve işleme göre farklılaşabildiğinden, belge alınmadan önce hangi biçimin istendiğinin teyit edilmesi gerekir.",
          "Vekâletnamenin kapsamı, yapılacak işe göre özel olarak hazırlanmalıdır. Boşanma davası, tapu satışı, mirasın reddi veya vergi işlemleri gibi işler için genellikle özel yetkilerin açıkça yazılması beklenir. Kapsamı eksik bir vekâletname, sürecin ortasında yeni bir konsolosluk randevusu alınması sonucunu doğurabilir. Bu nedenle vekâletname metni, hangi işlemler için kullanılacağı belirlendikten sonra düzenlenmelidir.",
          "Vekâletname alınırken kimlik bilgilerinin nüfus kayıtlarıyla uyumu, T.C. kimlik numarası, fotoğraf gerekliliği ve varsa eşin veya diğer mirasçıların bilgilerinin doğruluğu kontrol edilmelidir. Vekâletname sürecinin ayrıntılarını konu alan makalemizde bu başlığı adım adım ele alıyoruz.",
        ],
      },
      {
        id: "miras-ve-tapu-islemleri",
        heading: "Yurt Dışından Miras ve Tapu İşlemleri",
        level: 2,
        paragraphs: [
          "Miras süreçleri gurbetçi dosyalarının en yoğun başlığıdır. Bursa'da bulunan bir taşınmazın mirasçılara geçişi için genellikle mirasçılık belgesinin (veraset ilamının) temini, veraset ve intikal beyanının verilmesi, tapu kayıtlarının incelenmesi ve intikal işleminin tamamlanması gerekir. Mirasçılar arasında anlaşma sağlanamadığında ortaklığın giderilmesi (izale-i şüyu) davası gündeme gelebilir; taşınmazın paylaşımı bu davada satış veya aynen taksim yoluyla çözülür.",
          "Mirasın reddi, tenkis, muris muvazaası ve tapu iptali gibi talepler süreye bağlıdır ve bu süreler yurt dışında yaşamak nedeniyle uzamaz. Yurt dışındaki mirasçıların ölümü öğrenme tarihi, tebligat adresi ve yabancı ülke kayıtları dosyanın seyrini etkiler. Bu nedenle mirasa ilişkin bir gelişme öğrenildiğinde, hak kaybı riskini değerlendirmek için sürecin erken aşamada incelenmesi yerinde olur.",
          "Tapu işlemlerinde ise satış, bağış, ipotek tesisi ve terkin gibi işlemler özel yetkili vekâletname ile yürütülebilir. Taşınmaz üzerindeki hacizler, şerhler, imar durumu ve kat irtifakı kayıtları işlem öncesinde incelenmelidir. Miras ve tapu başlıklarına ilişkin ayrı makalelerimizde bu süreçleri daha ayrıntılı ele alıyoruz.",
        ],
      },
      {
        id: "yurt-disindan-bosanma",
        heading: "Yurt Dışından Boşanma Davası",
        level: 2,
        paragraphs: [
          "Yurt dışında yaşayan çiftlerin boşanma dosyalarında iki ana senaryo görülür. Birinci senaryoda taraflar Türkiye'de boşanma davası açar; bu durumda dava, yetkili aile mahkemesinde görülür ve vekil aracılığıyla takip edilir. Çekişmeli boşanmada tanık, delil ve bilirkişi süreçleri yürütülürken, anlaşmalı boşanmada protokolün kapsamı ile tarafların hâkim huzurunda dinlenmesi ön plana çıkar.",
          "İkinci senaryoda taraflar bulundukları ülkede boşanmıştır ve bu kararın Türkiye'de geçerli hâle gelmesi gerekir. Yabancı mahkeme kararının Türkiye'de sonuç doğurması için tanıma veya tenfiz yoluna başvurulur; belirli koşullar sağlandığında nüfus kayıtlarında güncelleme yapılabilecek idari yol da gündeme gelebilir. Hangi yolun uygun olduğu kararın içeriğine, kesinleşme durumuna ve talep edilen sonuçlara göre değişir.",
          "Boşanmanın yanında velayet, kişisel ilişki, nafaka ve mal rejiminin tasfiyesi başlıkları da ayrıca değerlendirilmelidir. Çocukların yurt dışında yaşaması hâlinde kişisel ilişkinin tatil dönemleri ve seyahat masrafları dikkate alınarak düzenlenmesi, sonradan doğacak uyuşmazlıkları azaltır. Boşanma sürecine dair makalelerimiz bu başlıklarda genel çerçeveyi anlatır.",
        ],
      },
      {
        id: "gurbetci-avukat-destegi",
        heading: "Bursa Gurbetçi Avukat Desteği Nasıl Alınır?",
        level: 2,
        paragraphs: [
          "Yurt dışında yaşayan Türkler için avukat desteği genellikle üç aşamada kurulur. İlk aşamada mevcut durum, belgeler üzerinden değerlendirilir; hangi dosyanın açılacağı, hangi sürelerin işlediği ve hangi işlemlerin bizzat huzur gerektirdiği belirlenir. İkinci aşamada işin kapsamına uygun vekâletname metni hazırlanır ve konsolosluk randevusu için yönlendirme yapılır. Üçüncü aşamada dosya açılır, tebligatlar ve duruşmalar takip edilir, gelişmeler düzenli olarak paylaşılır.",
          "Yurt dışından dava takibi sırasında iletişimin öngörülebilir olması önemlidir. Belgelerin dijital ortamda iletilmesi, görüşmelerin çevrim içi yapılması ve duruşma sonuçlarının aynı gün bildirilmesi, mesafenin doğurduğu belirsizliği azaltır. Avukatlık ücreti ve kapsam ise iş kabulünden önce yazılı avukatlık sözleşmesinde düzenlenir.",
          "Sürecin sonucunu etkileyen unsurlar dosyanın delil durumu, karşı tarafın tutumu ve mahkemenin iş yüküdür. Bu nedenle hiçbir dosyada belirli bir sonuç taahhüt edilmez; yapılabilecek olan, usule uygun ve zamanında adım atarak hak kaybını önlemektir. Bursa'daki büromuza ulaşmak için [iletişim sayfasını](/iletisim) kullanabilirsiniz.",
        ],
        list: [
          "Belgelerin incelenmesi ve süre analizi",
          "İşin kapsamına uygun özel yetkili vekâletname metninin hazırlanması",
          "Dosyanın açılması, tebligat ve duruşma takibi",
          "Karar sonrası icra, tapu veya nüfus işlemlerinin tamamlanması",
        ],
      },
    ],
    faqs: [
      {
        question: "Bursa'daki davamı yurt dışından takip ettirebilir miyim?",
        answer:
          "Usulüne uygun bir vekâletname düzenlendiğinde dosyanın açılması, dilekçelerin sunulması, duruşmaların takibi ve tebligatların karşılanması vekil aracılığıyla yürütülebilir. Bazı işlemler ilgilinin bizzat dinlenmesini gerektirebileceğinden, bu ayrım dosyanın başında değerlendirilir.",
      },
      {
        question: "Vekâletnameyi konsoloslukta mı düzenletmem gerekir?",
        answer:
          "Yurt dışında yaşayanlar vekâletnameyi genellikle Türk konsolosluğunda düzenletir. Bazı hâllerde yerel noterde düzenlenip apostil şerhi ve Türkçe tercüme eklenen belgeler de kullanılabilir; kabul koşulları ülkeye ve işleme göre değişebildiğinden, belge alınmadan önce hangi biçimin istendiği teyit edilmelidir.",
      },
      {
        question: "Yurt dışında verilen boşanma kararı Türkiye'de geçerli olur mu?",
        answer:
          "Yabancı mahkeme kararının Türkiye'de sonuç doğurması için kural olarak tanıma veya tenfiz yoluna başvurulması gerekir. Belirli koşullar sağlandığında nüfus kayıtlarında güncelleme sağlayan idari yol da gündeme gelebilir; uygun yol kararın içeriğine ve kesinleşme durumuna göre belirlenir.",
      },
      {
        question: "Miras işlemlerinde süre kaçırma riski var mı?",
        answer:
          "Mirasın reddi, tenkis ve tapu iptali gibi taleplerin süreye bağlı olduğu hâller vardır ve bu süreler yurt dışında yaşamak nedeniyle kendiliğinden uzamaz. Bu nedenle mirasa ilişkin bir gelişme öğrenildiğinde dosyanın erken aşamada incelenmesi önerilir.",
      },
      {
        question: "Bursa gurbetçi avukat hizmetinde iletişim nasıl yürür?",
        answer:
          "Belgeler dijital ortamda iletilebilir, görüşmeler çevrim içi yapılabilir ve duruşma sonuçları yazılı olarak paylaşılır. Ücret ve kapsam, iş kabulünden önce avukatlık sözleşmesinde düzenlenir.",
      },
    ],
    sources: [
      "4721 sayılı Türk Medeni Kanunu",
      "6100 sayılı Hukuk Muhakemeleri Kanunu",
      "5718 sayılı Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun",
      "1512 sayılı Noterlik Kanunu ve konsolosluk işlemlerine ilişkin mevzuat",
    ],
    closingNote:
      "Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; hukuki tavsiye niteliği taşımaz ve belirli bir sonuç taahhüdü içermez. Mevzuat ve uygulama değişebileceğinden, kendi dosyanız için güncel durumun bir avukatla değerlendirilmesi gerekir.",
  },
  {
    slug: "anlasmali-bosanmada-protokolun-onemi",
    title: "Anlaşmalı Boşanmada Protokolün Kapsamı Neden Önemlidir?",
    excerpt:
      "Anlaşmalı boşanmada protokol, tarafların tüm sonuçlar üzerinde uzlaştığını gösteren temel belgedir. Eksik düzenlenen protokoller sonradan yeni uyuşmazlıklara yol açabilir.",
    categorySlug: "aile-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-05-12",
    updatedAt: "2026-07-02",
    readingMinutes: 6,
    relatedAreaSlug: "aile-hukuku",
    sections: [
      {
        id: "protokol-nedir",
        heading: "Anlaşmalı boşanma protokolü nedir?",
        level: 2,
        paragraphs: [
          "Anlaşmalı boşanma, evlilik birliğinin taraflarca birlikte sonlandırılmak istendiği ve boşanmanın mali ile kişisel sonuçları üzerinde uzlaşıldığı hâllerde başvurulan yoldur. Protokol, bu uzlaşmanın yazılı hâlidir ve mahkemenin denetimine sunulur.",
          "Mahkeme protokolü olduğu gibi kabul etmek zorunda değildir. Özellikle çocukların menfaatine ilişkin düzenlemelerde re'sen inceleme yapar ve gerekli gördüğü değişikliği taraflara önerebilir.",
        ],
      },
      {
        id: "protokolde-yer-almasi-gerekenler",
        heading: "Protokolde hangi başlıklar yer almalıdır?",
        level: 2,
        paragraphs: [
          "Protokolün, boşanmanın tüm sonuçlarını kapsaması beklenir. Açıkta bırakılan her başlık, ileride ayrı bir dava konusu hâline gelebilir.",
        ],
        list: [
          "Velayet ve kişisel ilişkinin gün, saat ve tatil dönemleri belirtilerek düzenlenmesi",
          "İştirak ve yoksulluk nafakasının miktarı ile artış ölçütü",
          "Maddi ve manevi tazminat taleplerinden feragat edilip edilmediği",
          "Mal rejiminin tasfiyesine ilişkin karşılıklı beyanlar",
          "Ev eşyası ve kişisel eşyaların paylaşımı",
        ],
      },
      {
        id: "sik-yapilan-eksiklikler",
        heading: "Sık karşılaşılan eksiklikler",
        level: 3,
        paragraphs: [
          "Uygulamada en sık görülen eksiklik, kişisel ilişkinin \"uygun zamanlarda\" gibi belirsiz ifadelerle düzenlenmesidir. Bu tür ifadeler, kararın icra edilebilirliğini zayıflatır.",
          "Bir diğer eksiklik, mal rejimi tasfiyesine ilişkin ifadenin protokolde yer almamasıdır. Bu durumda taraflar boşanma kesinleştikten sonra ayrı bir alacak davası açmak durumunda kalabilir.",
        ],
      },
      {
        id: "sonrasinda-degisiklik",
        heading: "Protokol sonradan değiştirilebilir mi?",
        level: 2,
        paragraphs: [
          "Karar kesinleştikten sonra protokolün kendisi değiştirilemez. Ancak nafaka gibi sürekli edim doğuran düzenlemeler, koşulların önemli ölçüde değişmesi hâlinde uyarlama davasına konu edilebilir.",
          "Velayet ve kişisel ilişki düzeni de çocuğun üstün yararı gerektirdiğinde yeniden düzenlenebilir. Bu, protokolün geçersizliği anlamına gelmez; değişen koşullara uyarlanmasıdır.",
        ],
      },
    ],
    sources: [
      "4721 sayılı Türk Medeni Kanunu m. 166/3",
      "4721 sayılı Türk Medeni Kanunu m. 176 ve devamı",
    ],
    metaTitle: "Anlaşmalı Boşanma Protokolü Nasıl Hazırlanır? | Akdağ Hukuk",
    metaDescription:
      "Anlaşmalı boşanma protokolünde yer alması gereken başlıklar, sık yapılan eksiklikler ve protokolün sonradan uyarlanması hakkında genel bilgilendirme.",
    status: "published",
  },
  {
    slug: "is-davalarinda-zorunlu-arabuluculuk",
    title: "İş Davalarında Zorunlu Arabuluculuk: Süreç Nasıl İşler?",
    excerpt:
      "İşçilik alacakları ve işe iade taleplerinde dava açmadan önce arabulucuya başvurmak zorunludur. Bu aşamanın usulüne uygun tamamlanmaması davanın reddine yol açabilir.",
    categorySlug: "is-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-06-03",
    readingMinutes: 5,
    relatedAreaSlug: "is-hukuku",
    sections: [
      {
        id: "kapsam",
        heading: "Hangi taleplerde arabuluculuk zorunludur?",
        level: 2,
        paragraphs: [
          "Bireysel veya toplu iş sözleşmesine dayanan işçi ve işveren alacağı ile tazminatı ve işe iade talepleri bakımından arabulucuya başvuru dava şartıdır. İş kazası veya meslek hastalığından kaynaklanan maddi ve manevi tazminat talepleri ise bu kapsamın dışındadır.",
        ],
      },
      {
        id: "surec",
        heading: "Başvurudan görüşmeye süreç",
        level: 2,
        paragraphs: [
          "Başvuru, karşı tarafın yerleşim yeri veya işin yapıldığı yerdeki arabuluculuk bürosuna yapılır. Büro, listeden bir arabulucu görevlendirir.",
        ],
        list: [
          "Başvurunun yapılması ve arabulucunun görevlendirilmesi",
          "Tarafların davet edilmesi ve ilk görüşmenin planlanması",
          "Görüşmelerde talep kalemlerinin ve hesaplamanın tartışılması",
          "Anlaşma veya anlaşmama tutanağının düzenlenmesi",
        ],
      },
      {
        id: "anlasma-sonucu",
        heading: "Anlaşma tutanağının sonucu",
        level: 3,
        paragraphs: [
          "Taraflar anlaşırsa, üzerinde anlaşılan konularda dava açılamaz. Bu nedenle tutanakta hangi alacak kalemlerinin kapsandığının açıkça yazılması önem taşır.",
          "Anlaşmama hâlinde son tutanağın aslı veya onaylı örneği dava dilekçesine eklenmelidir. Eklenmemesi hâlinde mahkeme bir haftalık kesin süre verir.",
        ],
      },
      {
        id: "sureler",
        heading: "Dikkat edilmesi gereken süreler",
        level: 2,
        paragraphs: [
          "İşe iade talebinde, fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulması gerekir. Anlaşmama tutanağının düzenlendiği tarihten itibaren ise iki hafta içinde dava açılmalıdır.",
          "Bu süreler hak düşürücü niteliktedir ve kaçırılması hâlinde talep esasa girilmeden reddedilebilir.",
        ],
      },
    ],
    sources: [
      "7036 sayılı İş Mahkemeleri Kanunu m. 3",
      "4857 sayılı İş Kanunu m. 20",
    ],
    metaTitle: "İş Davalarında Zorunlu Arabuluculuk Süreci | Akdağ Hukuk",
    metaDescription:
      "İşçilik alacakları ve işe iade taleplerinde zorunlu arabuluculuğun kapsamı, başvuru süreci, tutanağın sonuçları ve dikkat edilmesi gereken süreler.",
    status: "published",
  },
  {
    slug: "kira-bedelinin-tespiti-davasi",
    title: "Kira Bedelinin Tespiti Davası Hangi Durumlarda Açılır?",
    excerpt:
      "Kira bedelinin güncel koşullara uymadığı hâllerde tespit davası gündeme gelir. Davanın zamanı ve hangi dönem için sonuç doğuracağı belirleyicidir.",
    categorySlug: "kira-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-06-24",
    readingMinutes: 5,
    relatedAreaSlug: "gayrimenkul-ve-kira-hukuku",
    sections: [
      {
        id: "dava-nedir",
        heading: "Tespit davasının amacı",
        level: 2,
        paragraphs: [
          "Kira bedelinin tespiti davası, yenilenen kira dönemlerinde uygulanacak bedelin mahkemece belirlenmesini amaçlar. Taraflar arasında bedel konusunda anlaşma sağlanamadığında başvurulur.",
        ],
      },
      {
        id: "bes-yil-kurali",
        heading: "Beş yıllık dönemin etkisi",
        level: 2,
        paragraphs: [
          "Kira ilişkisinin beş yıldan uzun sürmesi hâlinde, bedel; tüketici fiyat endeksindeki değişim, kiralananın durumu ve emsal kira bedelleri gözetilerek hakkaniyete uygun biçimde belirlenir.",
          "Beş yıldan kısa süreli ilişkilerde ise artış oranı sözleşmedeki düzenleme ve kanuni üst sınır çerçevesinde değerlendirilir.",
        ],
      },
      {
        id: "davanin-zamani",
        heading: "Davanın hangi tarihte açılması gerekir?",
        level: 3,
        paragraphs: [
          "Yeni kira döneminin başlangıcından en az otuz gün önce dava açılması veya kiraya verenin bu süre içinde artış iradesini yazılı olarak bildirmesi hâlinde, tespit edilecek bedel yeni dönemin başından itibaren geçerli olur.",
          "Bu koşul sağlanmazsa karar, izleyen kira döneminden itibaren sonuç doğurur.",
        ],
      },
      {
        id: "arabuluculuk",
        heading: "Dava öncesi arabuluculuk",
        level: 2,
        paragraphs: [
          "Kira ilişkisinden kaynaklanan uyuşmazlıklarda, tahliye taleplerinin bir kısmı hariç olmak üzere, dava açılmadan önce arabulucuya başvurulması dava şartıdır.",
        ],
      },
    ],
    sources: [
      "6098 sayılı Türk Borçlar Kanunu m. 344",
      "6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu m. 18/B",
    ],
    metaTitle: "Kira Bedelinin Tespiti Davası Nasıl Açılır? | Akdağ Hukuk",
    metaDescription:
      "Kira bedelinin tespiti davasının amacı, beş yıllık dönemin etkisi, davanın açılma zamanı ve zorunlu arabuluculuk hakkında genel bilgilendirme.",
    status: "published",
  },
  {
    slug: "sorusturma-asamasinda-ifade",
    title: "Soruşturma Aşamasında İfade: Bilinmesi Gereken Temel Haklar",
    excerpt:
      "İfade ve sorgu, ceza soruşturmasının yönünü belirleyen aşamalardır. Susma hakkı, müdafi yardımı ve tutanağın okunması bu aşamanın temel güvenceleridir.",
    categorySlug: "ceza-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-07-08",
    readingMinutes: 4,
    relatedAreaSlug: "ceza-hukuku",
    sections: [
      {
        id: "ifade-oncesi",
        heading: "İfade öncesinde bildirilmesi gerekenler",
        level: 2,
        paragraphs: [
          "Şüpheliye, isnat edilen suç anlatılır; müdafi seçme hakkı, susma hakkı ve delil toplanmasını isteme hakkı hatırlatılır. Bu hatırlatmanın yapılmaması usule aykırılık oluşturur.",
        ],
        list: [
          "İsnadın açık biçimde bildirilmesi",
          "Müdafi yardımından yararlanma hakkı",
          "Susma hakkı ve bunun aleyhe yorumlanamayacağı",
          "Yakınlarına haber verilmesini isteme hakkı",
        ],
      },
      {
        id: "musteki",
        heading: "Müşteki ve mağdur bakımından",
        level: 3,
        paragraphs: [
          "Mağdur ve şikâyetçinin de vekil yardımından yararlanma, delil sunma ve dosya hakkında bilgi alma hakkı bulunur. Beyanın somut olgulara dayanması ve belgelerle desteklenmesi önem taşır.",
        ],
      },
      {
        id: "tutanak",
        heading: "Tutanağın imzalanması",
        level: 2,
        paragraphs: [
          "İfade tutanağı imzalanmadan önce okunmalı, beyanla uyumlu olmayan kısımlar düzeltilmelidir. Tutanağa geçirilmeyen bir açıklamanın sonradan ileri sürülmesi güçleşir.",
        ],
      },
    ],
    sources: ["5271 sayılı Ceza Muhakemesi Kanunu m. 147", "5271 sayılı Ceza Muhakemesi Kanunu m. 234"],
    metaTitle: "Soruşturmada İfade ve Temel Haklar | Akdağ Hukuk",
    metaDescription:
      "Ceza soruşturmasında ifade alınmadan önce bildirilmesi gereken haklar, müşteki bakımından haklar ve ifade tutanağı hakkında genel bilgilendirme.",
    status: "published",
  },
];

export const publishedArticles = articles
  .filter((a) => a.status === "published")
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export function getArticle(slug: string) {
  return publishedArticles.find((a) => a.slug === slug);
}

export function getCategory(slug: string) {
  return articleCategories.find((c) => c.slug === slug);
}

export function articlesByCategory(slug: string) {
  return publishedArticles.filter((a) => a.categorySlug === slug);
}

export function articlesForArea(areaSlug: string) {
  return publishedArticles.filter((a) => a.relatedAreaSlug === areaSlug);
}

export function formatDate(value: string) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
