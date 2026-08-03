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
      {
        id: "ilgili-konular",
        heading: "İlgili konular ve iç bağlantılar",
        level: 2,
        paragraphs: [
          "Aşağıdaki başlıklar, bu rehberde özetlenen süreçlerin ayrıntılarını içerir. Dosyanızın konusuna göre ilgili bölümü inceleyebilirsiniz.",
          "Vekâletname: [Konsolosluk vekâletnamesi süreci](/bursa-gurbetci-hukuk#vekaletname) bölümünde hangi yetkilerin gerektiği ve belge hazırlığının nasıl yürütüldüğü anlatılır.",
          "Miras: [Yurt dışından miras ve tapu işlemleri](/bursa-gurbetci-hukuk#miras) bölümü ile [Bursa miras hukuku çalışma alanı](/calisma-alanlari/miras-hukuku) sayfasında veraset, intikal ve ortaklığın giderilmesi başlıkları ele alınır.",
          "Boşanma: [Yurt dışından boşanma ve tanıma-tenfiz](/bursa-gurbetci-hukuk#bosanma) bölümü ile [Bursa aile hukuku çalışma alanı](/calisma-alanlari/aile-hukuku) sayfasında velayet, nafaka ve mal rejimi konuları bulunur.",
          "Diğer makaleler için [makaleler bölümünü](/makaleler) inceleyebilirsiniz.",
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
    slug: "yurt-disindan-konsolosluk-vekaletnamesi",
    title: "Yurt Dışından Konsolosluk Vekâletnamesi Nasıl Çıkarılır?",
    excerpt:
      "Yurt dışından konsolosluk vekâletnamesi çıkarma süreci, randevu öncesi hazırlıklar, vekâletnamenin kapsamı ve belgenin Türkiye'ye ulaştırılması hakkında genel bilgilendirme.",
    categorySlug: "gurbetci-hukuk",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-03",
    readingMinutes: 8,
    relatedAreaSlug: "yabancilar-hukuku",
    metaTitle: "Yurt Dışından Konsolosluk Vekâletnamesi | Bursa Avukat",
    metaDescription:
      "Yurt dışından konsolosluk vekâletnamesi çıkarma süreci, gerekli hazırlıklar ve Türkiye'de avukat aracılığıyla işlem takibi hakkında bilgi alın.",
    status: "published",
    sections: [
      {
        id: "konsolosluk-vekaletnamesi-nedir",
        heading: "Konsolosluk Vekâletnamesi Nedir?",
        level: 2,
        paragraphs: [
          "Konsolosluk vekâletnamesi, yurt dışında yaşayan bir kişinin Türkiye'deki işlerini kendi adına yürütmesi için bir kişiye veya avukata yetki verdiğini gösteren, Türk konsoloslukları tarafından düzenlenen resmî belgedir. Konsolosluk memurları, kanunla kendilerine tanınan noterlik yetkisi çerçevesinde bu işlemi yapar; bu nedenle konsoloslukta düzenlenen vekâletname, Türkiye'de noterde düzenlenmiş bir vekâletname ile aynı işlevi görür.",
          "Yurt dışından vekâletname ihtiyacının temel nedeni mesafedir. Türkiye'deki bir dava dosyası, tapu devri veya miras işlemi çoğu zaman haftalara yayılan bir takip gerektirir. İzin dönemini beklemek, her aşama için seyahat etmek ya da işlemin süresini kaçırmak yerine, usulüne uygun bir vekâletname ile sürecin Türkiye'de yürütülmesi tercih edilir. Bu yöntem, Bursa gurbetçi hukuk uygulamasında en sık başvurulan çözümdür.",
          "Konsolosluk vekâletnamesinin alternatifi, bulunulan ülkenin noterinde düzenlenip apostil şerhi taşıyan ve Türkçeye yeminli tercümesi yapılan vekâletnamedir. Ancak bu belgenin hangi kurumda, hangi işlem için kabul edileceği değişkenlik gösterebilir. Bu nedenle çoğu dosyada Türk konsolosluğunda düzenlenen belge tercih edilir.",
        ],
      },
      {
        id: "hangi-islemler-icin-vekaletname",
        heading: "Hangi İşlemler İçin Vekâletname Gerekebilir?",
        level: 2,
        paragraphs: [
          "Vekâletname ihtiyacı yalnızca dava dosyalarıyla sınırlı değildir. Yurt dışında yaşayan vatandaşların Türkiye'deki günlük hukuki ve idari işlerinin önemli bir bölümü, temsil yetkisi olmadan yürütülemez. Aşağıdaki başlıklar, uygulamada en sık karşılaşılan işlem türlerini gösterir; her dosyada gereken yetkinin kapsamı farklı olabilir.",
        ],
        list: [
          "Dava açma, dava takibi, uzlaşma ve arabuluculuk süreçlerinde temsil",
          "Miras işlemleri: veraset ilamı alınması, intikal ve tapu tescili başvuruları",
          "Tapu devri, satış, bağış, ipotek tesisi ve ipotek terkini işlemleri",
          "İcra takibi başlatılması veya başlatılmış bir takibe itiraz edilmesi",
          "Boşanma, velayet, nafaka dosyalarında temsil ve tanıma-tenfiz başvuruları",
          "Banka, vergi dairesi, nüfus müdürlüğü ve belediye gibi kurumlar önünde işlem yapılması",
          "Şirket kuruluşu, hisse devri ve ticaret sicili işlemleri",
        ],
      },
      {
        id: "vekaletnamenin-kapsami",
        heading: "Vekâletnamenin Kapsamı Neden Önemlidir?",
        level: 2,
        paragraphs: [
          "Vekâletname, içinde yazılı olan yetkiler kadar geçerlidir. Kapsam dar tutulduğunda, işlemin ortasında yeni bir vekâletnameye ihtiyaç doğar; bu da yeniden randevu, yeniden seyahat ve zaman kaybı anlamına gelir. Kapsam gereğinden geniş tutulduğunda ise vekile, dosyanın gerektirmediği yetkiler verilmiş olur. Doğru denge, işin türüne göre kurulur.",
          "Bazı yetkiler kanunen açıkça belirtilmedikçe kullanılamaz. Örneğin davadan feragat, davayı kabul, sulh olma, tahkim, kararı temyiz etmekten vazgeçme, tahsil yetkisi ve taşınmaz devri gibi işlemler için vekâletnamede özel yetkinin yazılı olması aranır. Boşanma dosyalarında vekâletnamenin fotoğraflı düzenlenmesi istenir; taşınmaz işlemlerinde ise taşınmazın ve işlemin belirtilmesi talep edilebilir.",
          "Bu nedenle vekâletname alınmadan önce, Türkiye'de süreci yürütecek avukattan yetki metninin yazılı olarak istenmesi en pratik yoldur. Metin, konsolosluk görevlisine olduğu gibi verildiğinde eksik yetki riski büyük ölçüde ortadan kalkar.",
        ],
      },
      {
        id: "randevudan-once-yapilacaklar",
        heading: "Konsolosluk Randevusundan Önce Yapılacaklar",
        level: 2,
        paragraphs: [
          "Konsolosluk işlemleri kural olarak önceden alınan randevu ile yürütülür. Randevu sistemi, belge listesi, işlem ücreti ve bekleme süresi; bulunulan ülkeye, ilgili başkonsolosluğun yoğunluğuna ve işlem türüne göre değişir. Bu nedenle bu yazıda kesin bir harç tutarı ya da kesin bir randevu süresi verilmez; güncel bilgi, işlem yapılacak temsilciliğin resmî duyurularından teyit edilmelidir.",
          "Genel olarak hazırlanması istenen unsurlar şunlardır; ancak liste, temsilciliğe ve işleme göre farklılaşabilir:",
        ],
        list: [
          "Geçerli kimlik veya pasaport ile T.C. kimlik numarası bilgisi",
          "İşlem türüne göre istenebilen biyometrik fotoğraf (özellikle boşanma vekâletnamelerinde)",
          "Vekil olarak yetkilendirilecek avukatın adı, soyadı, T.C. kimlik numarası ve baro bilgisi",
          "Avukat tarafından hazırlanan ve verilecek yetkileri gösteren vekâletname metni",
          "Taşınmaz işlemlerinde ada, parsel, bağımsız bölüm gibi tanımlayıcı bilgiler",
          "Miras dosyalarında murisin kimlik ve ölüm tarihine ilişkin bilgiler",
        ],
      },
      {
        id: "vekaletnamenin-turkiyeye-ulasmasi",
        heading: "Vekâletname Türkiye'ye Nasıl Ulaştırılır?",
        level: 2,
        paragraphs: [
          "Vekâletname düzenlendikten sonra ıslak imzalı ve mühürlü aslının Türkiye'ye ulaştırılması gerekir. Dava dosyalarında ve tapu işlemlerinde çoğunlukla belgenin aslı ya da onaylı örneği aranır. Bu nedenle belge, kargo veya posta ile Türkiye'deki avukata gönderilir.",
          "Uygulamada, kargo süreci beklenirken zaman kaybetmemek için vekâletnamenin taranmış örneği önce dijital olarak paylaşılır. Avukat bu örnek üzerinden yetkilerin doğruluğunu kontrol eder; eksik bir yetki varsa henüz konsolosluktan uzaklaşılmadan düzeltme imkânı doğar. Dosyanın açılması bakımından belge aslının ne zaman gerekeceği ise işleme göre değişir.",
          "Belgenin kaybolma ihtimaline karşı, konsolosluktan birden fazla nüsha talep edilmesi de yaygın bir tercihtir. Vekâletnamenin geçerliliği kural olarak süreyle sınırlı değildir; ancak azil, istifa veya işin tamamlanması hâlinde ilişki sona erer.",
        ],
      },
      {
        id: "bursa-gurbetci-avukat-destegi",
        heading: "Bursa Gurbetçi Avukat Desteği",
        level: 2,
        paragraphs: [
          "Bursa gurbetçi hukuk uygulamasında sürecin işleyişi genellikle şu sırayı izler: önce dosyanın konusu ve talepler görüşülür, ardından işe uygun vekâletname metni hazırlanıp yurt dışındaki müvekkile iletilir. Belge konsoloslukta düzenlendikten sonra işlem Türkiye'de başlatılır ve gelişmeler yazılı olarak paylaşılır.",
          "Türkiye'de avukata vekâlet verme, işin yalnızca teknik kısmını değil, iletişim yükünü de hafifletir. Tebligatların karşılanması, duruşma günlerinin takibi, kurum yazışmaları ve süreye bağlı işlemlerin zamanında yapılması vekilin sorumluluğundadır. Gurbetçi avukat Bursa aramalarının temelinde de bu ihtiyaç bulunur: dosyanın görüldüğü yerde bir temsilcinin bulunması.",
          "Hangi işlerin yurt dışından yürütülebileceğine ilişkin ayrıntılı başlıkları [Bursa Gurbetçi Hukuk sayfamızda](/bursa-gurbetci-hukuk) bulabilir, genel çerçeve için [Bursa gurbetçi hukuk rehberimizi](/makaleler/bursa-gurbetci-hukuk) inceleyebilirsiniz. Miras ve boşanma gibi özel başlıklarda [çalışma alanlarımız](/calisma-alanlari) sayfasındaki ilgili bölümler yol gösterici olur.",
        ],
      },
    ],
    faqs: [
      {
        question: "Vekâletnameyi bulunduğum ülkenin noterinden alabilir miyim?",
        answer:
          "Yerel noterde düzenlenip apostil şerhi taşıyan ve Türkçeye yeminli tercümesi yapılan vekâletnameler bazı işlemlerde kullanılabilir. Ancak kabul koşulları kuruma, işleme ve ülkeye göre değişebildiğinden, belge düzenletilmeden önce hangi biçimin isteneceğinin teyit edilmesi gerekir.",
      },
      {
        question: "Vekâletname için konsolosluğa gitmem şart mı?",
        answer:
          "Konsoloslukta düzenlenen vekâletnamelerde ilgilinin bizzat başvurması ve kimliğini ibraz etmesi beklenir. Randevu usulü, başvuru kanalları ve istenen belgeler temsilciliğe göre farklılık gösterebileceğinden, ilgili konsolosluğun güncel duyuruları esas alınmalıdır.",
      },
      {
        question: "Vekâletnamede hangi yetkilerin bulunması gerekir?",
        answer:
          "Gerekli yetkiler işin türüne göre belirlenir. Feragat, kabul, sulh, tahsil ve taşınmaz devri gibi işlemler için özel yetki aranır; boşanma dosyalarında fotoğraflı vekâletname istenir. Bu nedenle metnin, işi yürütecek avukat tarafından hazırlanması eksik yetki riskini azaltır.",
      },
      {
        question: "İşlem ne kadar sürer ve ne kadar harç ödenir?",
        answer:
          "Randevu bekleme süresi ve işlem ücreti; ülkeye, temsilciliğin yoğunluğuna ve işlem türüne göre değişir. Bu nedenle sabit bir süre veya tutar belirtmek doğru olmaz; güncel bilgi ilgili konsolosluğun resmî kaynaklarından öğrenilmelidir.",
      },
      {
        question: "Verdiğim vekâleti geri alabilir miyim?",
        answer:
          "Vekâlet ilişkisi kural olarak azil yoluyla sona erdirilebilir. Azil işlemi noter veya konsolosluk aracılığıyla yapılır ve derdest dosyalar varsa mahkemeye ya da ilgili kuruma bildirilmesi gerekir.",
      },
    ],
    sources: [
      "1512 sayılı Noterlik Kanunu",
      "6100 sayılı Hukuk Muhakemeleri Kanunu",
      "6004 sayılı Dışişleri Bakanlığı Personeline İlişkin Kanun ve konsolosluk işlemlerine dair mevzuat",
      "4721 sayılı Türk Medeni Kanunu",
    ],
    closingNote:
      "Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; hukuki tavsiye niteliği taşımaz. Belge listeleri, randevu koşulları ve ücretler ülkeye, konsolosluğa ve işlem türüne göre değişebilir. Kendi dosyanız için güncel durumun bir avukatla ve ilgili konsolosluğun resmî duyurularıyla birlikte değerlendirilmesi gerekir.",
  },
  {
    slug: "yurt-disindan-miras-islemleri",
    title: "Yurt Dışından Türkiye'de Miras İşlemleri Nasıl Takip Edilir?",
    excerpt:
      "Yurt dışından Türkiye'de miras işlemleri; veraset ilamı, tapu ve banka araştırması, mirasın reddi ve ortaklığın giderilmesi başlıklarıyla birlikte genel hatlarıyla açıklanıyor.",
    categorySlug: "gurbetci-hukuk",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-03",
    readingMinutes: 10,
    relatedAreaSlug: "miras-hukuku",
    metaTitle: "Yurt Dışından Miras İşlemleri | Bursa Gurbetçi Hukuk",
    metaDescription:
      "Yurt dışından Türkiye'de miras, veraset ilamı, tapu ve miras paylaşımı işlemlerinin nasıl takip edilebileceğini öğrenin.",
    status: "published",
    sections: [
      {
        id: "turkiyeye-gelmek-zorunda-mi",
        heading: "Yurt Dışındaki Mirasçılar Türkiye'ye Gelmek Zorunda mı?",
        level: 2,
        paragraphs: [
          "Yurt dışından miras işlemleri, uygulamada en çok sorulan başlıkların başında gelir. Bir yakının vefatı sonrasında Türkiye'deki taşınmazların, banka hesaplarının ve diğer hakların akıbeti gündeme gelir; ancak mirasçıların çalışma düzeni, okul takvimi veya ikamet koşulları çoğu zaman uzun süreli bir seyahate elverişli değildir.",
          "Miras işlemlerinin önemli bir bölümü, usulüne uygun düzenlenmiş bir vekâletname bulunduğunda vekil aracılığıyla yürütülebilir. Veraset ilamı başvurusu, tapu kayıtlarının araştırılması, intikal işlemleri, banka yazışmaları ve gerektiğinde dava açılması bu kapsamdadır. Vekâletnamenin nasıl düzenlendiğine ilişkin ayrıntılar için [konsolosluk vekâletnamesi makalemizi](/makaleler/yurt-disindan-konsolosluk-vekaletnamesi) inceleyebilirsiniz.",
          "Bununla birlikte her aşamanın vekil aracılığıyla tamamlanacağı söylenemez. Mahkeme, belirli durumlarda mirasçının bizzat beyanını isteyebilir veya bazı kurumlar ek belge talep edebilir. Bu nedenle sürecin başında hangi işlemin bizzat huzur gerektirdiğinin değerlendirilmesi doğru bir yaklaşımdır.",
        ],
      },
      {
        id: "veraset-ilami",
        heading: "Veraset İlamı Nasıl Alınır?",
        level: 2,
        paragraphs: [
          "Veraset ilamı, kimlerin mirasçı olduğunu ve paylarını gösteren belgedir. Tapu intikali, banka hesaplarına erişim ve pek çok kurum işlemi bu belge olmadan yürümez. Belge, koşulları varsa noterden alınabilir; nüfus kaydının yurt dışı unsuru içermesi, mirasçılar arasında yabancı uyruklu bulunması veya kayıtların çelişkili olması gibi hâllerde sulh hukuk mahkemesine başvurulması gerekebilir.",
          "Yurt dışında yaşayan mirasçılar bakımından en sık karşılaşılan sorun, nüfus kayıtlarının güncel olmamasıdır. Yurt dışında doğan çocukların Türkiye nüfusuna tescil edilmemiş olması, evlilik veya boşanmanın nüfusa işlenmemesi ya da isim yazımındaki farklılıklar, veraset işlemini başlamadan durdurabilir. Bu nedenle ilk adım genellikle nüfus kaydının incelenmesi ve gerekiyorsa düzeltilmesidir.",
          "Veraset ilamı alındıktan sonra veraset ve intikal vergisi beyannamesinin ilgili vergi dairesine verilmesi gündeme gelir. Beyan yükümlülüğünün süresi ve istisna tutarları mevzuatta düzenlenmiş olup değişebileceğinden, bu adımın güncel duruma göre planlanması gerekir.",
        ],
      },
      {
        id: "tasinmaz-arastirmasi",
        heading: "Miras Kalan Taşınmazlar Nasıl Araştırılır?",
        level: 2,
        paragraphs: [
          "Mirasçılar çoğu zaman murise ait taşınmazların tamamını bilmez. Özellikle Bursa gibi göç veren illerde, yıllar önce alınmış arsa, tarla veya daire kayıtları aile içinde unutulmuş olabilir. Vekâletname bulunduğunda tapu müdürlükleri ve TAKBİS kayıtları üzerinden murisin adına kayıtlı taşınmazların araştırılması mümkündür.",
          "Araştırma sonucunda taşınmazın tapu durumu kadar üzerindeki kısıtlamalar da önem taşır. İpotek, haciz, şerh, imar durumu ve kadastro uyuşmazlıkları, paylaşımın nasıl yapılacağını doğrudan etkiler. Bazı dosyalarda taşınmazın mirasçılar adına intikal ettirilmesi yeterli olurken, bazılarında satış veya ortaklığın giderilmesi yoluna gidilmesi gerekir.",
        ],
        list: [
          "Tapu kayıtlarının ve taşınmaz üzerindeki şerhlerin incelenmesi",
          "Mirasçılar adına intikal (tescil) işlemlerinin yapılması",
          "Kira geliri olan taşınmazlarda tahsilat ve sözleşme durumunun değerlendirilmesi",
          "İmar, kamulaştırma veya kentsel dönüşüm gibi süreçlerin kontrolü",
        ],
      },
      {
        id: "banka-ve-diger-mal-varliklari",
        heading: "Banka Hesapları ve Diğer Mal Varlıkları",
        level: 2,
        paragraphs: [
          "Taşınmazların yanında banka hesapları, mevduat, yatırım hesapları, kiralık kasa içerikleri, araç kayıtları, şirket payları ve alacaklar da terekeye dâhildir. Bankalar, veraset ilamı ve gerekli vergi belgeleri sunulmadan hesap bilgisi paylaşmaz veya ödeme yapmaz.",
          "Terekenin borçları da mirasın bir parçasıdır. Murisin kredi borcu, kefaleti, icra dosyası veya vergi borcu bulunabilir. Bu nedenle mal varlığı araştırması yapılırken borç tarafının da incelenmesi gerekir; aksi hâlde mirasçılar beklemedikleri bir yükle karşılaşabilir.",
        ],
      },
      {
        id: "mirascilar-anlasamazsa",
        heading: "Mirasçılar Anlaşamazsa Ne Olur?",
        level: 2,
        paragraphs: [
          "Mirasçılar paylaşımda anlaşırsa, taşınmazlar rızaen devredilebilir veya bir paylaşım sözleşmesi düzenlenebilir. Anlaşma sağlanamadığında ise ortaklığın giderilmesi davası gündeme gelir. Bu davada mahkeme, taşınmazın aynen taksiminin mümkün olup olmadığını değerlendirir; mümkün değilse satış yoluyla paylaştırmaya karar verilebilir.",
          "Uygulamada tenkis, muris muvazaası nedeniyle tapu iptali ve tescil, denkleştirme talepleri de sıkça karşımıza çıkar. Özellikle murisin sağlığında yaptığı devirler, mirasçılar arasında en çok uyuşmazlık doğuran konudur. Bu tür davaların sonucu ve süresi dosyanın kapsamına, delil durumuna ve mahkemenin iş yüküne göre değişir; bu nedenle bir süre veya sonuç taahhüdünde bulunulamaz.",
          "Miras hukukuna ilişkin hizmet başlıklarını [Bursa miras hukuku çalışma alanı](/calisma-alanlari/miras-hukuku) sayfasında inceleyebilirsiniz.",
        ],
      },
      {
        id: "mirasin-reddi",
        heading: "Mirasın Reddi Süresi Neden Önemlidir?",
        level: 2,
        paragraphs: [
          "Mirasın reddi, terekenin borca batık olduğu ya da borçların mal varlığını aştığı hâllerde önem kazanır. Türk Medeni Kanunu, mirasın reddi için süre öngörür; ancak bu süre her olayda aynı şekilde işlemez. Sürenin başlangıcı, mirasçının ölümü ve mirasçı olduğunu öğrendiği tarihe, atanmış mirasçılarda ise bildirimin yapıldığı tarihe göre değerlendirilir.",
          "Yurt dışında yaşayan mirasçılar bakımından öğrenme tarihi çoğu zaman tartışmalıdır; haber ulaşmasında gecikme olabilir. Ayrıca terekenin borca batık olduğunun açıkça anlaşıldığı hâllerde mirasın hükmen reddine ilişkin ayrı bir değerlendirme yapılır. Bu nedenle red süresi, yalnızca takvim üzerinden değil, somut olayın tarihleri ve öğrenme durumu birlikte incelenerek belirlenmelidir.",
          "Önemli olan nokta şudur: yurt dışında yaşamak, süreleri kendiliğinden uzatmaz. Vefat haberi alındığında terekenin borç-alacak dengesinin erken aşamada incelenmesi, sonradan telafisi güç sonuçların önüne geçer.",
        ],
      },
      {
        id: "bursa-gurbetci-avukat-miras",
        heading: "Bursa Gurbetçi Avukat ile Miras Takibi",
        level: 2,
        paragraphs: [
          "Türkiye'de miras takibi, birden çok kurumun aynı anda ilerlemesini gerektirir: nüfus müdürlüğü, mahkeme, vergi dairesi, tapu müdürlüğü ve bankalar. Bursa miras avukatı desteğiyle bu adımların sıralaması planlanır, eksik belge nedeniyle işlemin başa dönmesi önlenir ve süreye bağlı talepler zamanında değerlendirilir.",
          "Bursa gurbetçi hukuk kapsamında sunulan hizmetlerin genel çerçevesini [Bursa Gurbetçi Hukuk sayfamızda](/bursa-gurbetci-hukuk), yurt dışından yürütülebilen işlemlerin tamamına ilişkin özeti ise [gurbetçi hukuk rehberimizde](/makaleler/bursa-gurbetci-hukuk) bulabilirsiniz.",
          "İletişim genellikle çevrim içi yürütülür: belgeler dijital olarak paylaşılır, görüşmeler görüntülü yapılır ve gelişmeler yazılı olarak bildirilir. Böylece gurbetçi hukuk Bursa dosyalarında mirasçıların Türkiye'ye gelmesi gereken hâller en aza indirilmeye çalışılır.",
        ],
      },
    ],
    faqs: [
      {
        question: "Veraset ilamı için Türkiye'ye gelmem gerekir mi?",
        answer:
          "Veraset ilamı başvurusu, usulüne uygun bir vekâletname bulunduğunda vekil aracılığıyla yapılabilir. Yine de mahkeme bazı hâllerde ek beyan veya belge isteyebileceğinden, dosyanın başında bu ihtimalin değerlendirilmesi yerinde olur.",
      },
      {
        question: "Murisin hangi taşınmazları olduğunu bilmiyorum, öğrenilebilir mi?",
        answer:
          "Vekâletname bulunduğunda tapu kayıtları üzerinden murise ait taşınmazların araştırılması mümkündür. Araştırma sonucunda taşınmaz üzerindeki ipotek, haciz ve şerhler de incelenerek paylaşım seçenekleri değerlendirilir.",
      },
      {
        question: "Mirasın reddi için ne kadar sürem var?",
        answer:
          "Kanun bir süre öngörür; ancak bu sürenin ne zaman başladığı her olayda aynı değildir. Ölüm tarihi, mirasçı olunduğunun öğrenildiği tarih ve terekenin borç durumu birlikte değerlendirilir. Bu nedenle süre, somut olayın tarihlerine göre ayrıca incelenmelidir.",
      },
      {
        question: "Mirasçılar anlaşamazsa taşınmaz nasıl paylaşılır?",
        answer:
          "Anlaşma sağlanamazsa ortaklığın giderilmesi davası açılabilir. Mahkeme aynen taksimin mümkün olup olmadığını değerlendirir; mümkün değilse satış yoluyla paylaştırma gündeme gelebilir. Sonuç ve süre dosyanın kapsamına göre değişir.",
      },
      {
        question: "Miras davaları ne kadar sürer?",
        answer:
          "Süre; dosyanın niteliğine, taraf sayısına, delil durumuna, bilirkişi incelemesine ve mahkemenin iş yüküne göre değişir. Bu nedenle bir süre taahhüdü verilemez; dosyaya özgü gerçekçi bir öngörü ancak inceleme sonrasında paylaşılabilir.",
      },
      {
        question: "Yurt dışındaki mirasçının yabancı uyruklu olması sorun yaratır mı?",
        answer:
          "Yabancı uyruklu mirasçıların bulunduğu dosyalarda veraset belgesinin mahkemeden alınması gerekebilir ve taşınmaz edinimi bakımından ek değerlendirmeler yapılır. Bu durum işlemi imkânsız kılmaz, ancak izlenecek yolu değiştirebilir.",
      },
    ],
    sources: [
      "4721 sayılı Türk Medeni Kanunu",
      "6100 sayılı Hukuk Muhakemeleri Kanunu",
      "7338 sayılı Veraset ve İntikal Vergisi Kanunu",
      "5718 sayılı Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun",
    ],
    closingNote:
      "Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; hukuki tavsiye niteliği taşımaz ve belirli bir sonuç ya da süre taahhüdü içermez. Miras işlemlerinde süreler ve izlenecek yol somut olaya göre değiştiğinden, kendi dosyanız için güncel durumun bir avukatla değerlendirilmesi gerekir.",
  },
  {
    slug: "yurt-disindan-bosanma-davasi",
    title: "Yurt Dışından Türkiye'de Boşanma Davası Açılabilir mi?",
    excerpt:
      "Yurt dışında yaşayanların Türkiye'de anlaşmalı veya çekişmeli boşanma davası açması, vekâletname, duruşma katılımı ve yabancı kararların tanınması hakkında genel bilgilendirme.",
    categorySlug: "gurbetci-hukuk",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-03",
    readingMinutes: 10,
    relatedAreaSlug: "aile-hukuku",
    metaTitle: "Yurt Dışından Boşanma Davası | Bursa Gurbetçi Avukat",
    metaDescription:
      "Yurt dışında yaşayanların Türkiye'de anlaşmalı veya çekişmeli boşanma davası açması, vekâletname ve duruşma süreci hakkında bilgi alın.",
    status: "published",
    sections: [
      {
        id: "turkiyede-bosanabilir-mi",
        heading: "Yurt Dışında Yaşayan Kişi Türkiye'de Boşanabilir mi?",
        level: 2,
        paragraphs: [
          "Yurt dışında yaşayan Türk vatandaşları, koşulları varsa Türkiye'de boşanma davası açabilir. Tarafların yurt dışında ikamet ediyor olması, Türk mahkemelerinde dava açılmasına tek başına engel değildir. Uygulamada belirleyici olan; tarafların vatandaşlığı, Türkiye'deki yerleşim yeri kaydı ve dosyanın hangi mahkemede görüleceğine ilişkin yetki kurallarıdır.",
          "Yetki bakımından kural olarak eşlerin son defa altı aydan beri birlikte oturdukları yer ya da davalının yerleşim yeri mahkemesi gündeme gelir. Türkiye'de yerleşim yeri bulunmayan hâllerde ise milletlerarası yetkiye ilişkin özel kurallar uygulanır. Bursa nüfusuna kayıtlı veya Bursa'da yerleşim yeri bulunan pek çok aile için dosya Bursa aile mahkemelerinde görülür.",
          "Bazı kişiler bulundukları ülkede boşanmayı tercih eder. Bu durumda dava yurt dışında görülür, ancak kararın Türkiye'de sonuç doğurması için ayrı bir adım gerekir. Bu konuya aşağıda tanıma ve tenfiz başlığında değinilmiştir.",
        ],
      },
      {
        id: "anlasmali-cekismeli-fark",
        heading: "Anlaşmalı ve Çekişmeli Boşanma Arasındaki Fark",
        level: 2,
        paragraphs: [
          "Anlaşmalı boşanma, evliliğin en az bir yıl sürmüş olması, tarafların birlikte başvurması veya bir tarafın diğerinin davasını kabul etmesi ve boşanmanın malî sonuçları ile çocukların durumu konusunda anlaşmaya varılması hâlinde gündeme gelir. Bu yolda hazırlanan protokolün kapsamı belirleyicidir; nafaka, velayet, kişisel ilişki ve mal paylaşımı açıkça düzenlenmelidir.",
          "Çekişmeli boşanmada ise taraflar boşanma iradesinde ya da sonuçlarında anlaşamaz. Bu dosyalarda tanık dinlenir, deliller toplanır, gerektiğinde uzman incelemesi yapılır. Doğal olarak çekişmeli dosyalar daha uzun sürer ve yurt dışında yaşayan taraf bakımından tebligat ile duruşma planlaması daha fazla önem taşır.",
          "Protokolün nasıl kurgulanması gerektiğine ilişkin ayrıntılar için [anlaşmalı boşanmada protokolün önemi](/makaleler/anlasmali-bosanmada-protokolun-onemi) yazımızı inceleyebilirsiniz.",
        ],
      },
      {
        id: "bosanma-vekaletnamesi",
        heading: "Boşanma Vekâletnamesinde Nelere Dikkat Edilir?",
        level: 2,
        paragraphs: [
          "Boşanma dosyalarında vekâletnamenin fotoğraflı düzenlenmesi aranır. Yurt dışında yaşayanlar bu belgeyi genellikle Türk konsolosluğunda düzenletir. Vekâletname metninde boşanma davası açma ve takip yetkisinin yanı sıra, dosyanın gerektirebileceği özel yetkilerin de bulunması gerekir.",
          "Eksik yetki, dosyanın ortasında yeni bir vekâletname alınmasını gerektirir ve bu da yeni bir konsolosluk randevusu anlamına gelir. Bu nedenle metnin dosyayı yürütecek avukat tarafından hazırlanması pratik bir çözümdür. Vekâletname sürecinin ayrıntıları için [konsolosluk vekâletnamesi makalemize](/makaleler/yurt-disindan-konsolosluk-vekaletnamesi) bakabilirsiniz.",
        ],
        list: [
          "Fotoğraflı düzenlenmiş olması",
          "Boşanma davası açma, takip ve gerekli hâllerde sulh yetkisi",
          "Nafaka, velayet ve tazminat taleplerine ilişkin usul işlemleri",
          "Tebligatların vekile yapılabilmesine imkân veren düzenleme",
          "Tanıma-tenfiz talebi gündeme gelebilecekse buna ilişkin yetki",
        ],
      },
      {
        id: "durusmaya-katilim",
        heading: "Duruşmaya Katılmak Gerekir mi?",
        level: 2,
        paragraphs: [
          "Bu soruya kesin bir 'gerekmez' yanıtı vermek doğru olmaz. Çekişmeli dosyalarda taraf vekil aracılığıyla temsil edilebilir; ancak mahkeme, tarafın bizzat dinlenmesine karar verebilir. Anlaşmalı boşanmada ise kural olarak hâkimin tarafları bizzat dinlemesi ve iradelerini serbestçe açıkladığına kanaat getirmesi aranır.",
          "Uygulamada, yurt dışında yaşayan tarafların duruşma günlerinin izin dönemine denk getirilmesi talep edilebilir; bazı hâllerde ses ve görüntü nakli yoluyla katılım imkânı gündeme gelebilir. Bu imkânların uygulanıp uygulanmayacağı mahkemenin takdirine ve teknik koşullara bağlıdır.",
          "Bu nedenle dosyanın başında şu soru netleştirilir: hangi aşamada bizzat huzur beklenmektedir? Bu planlama yapıldığında, gereksiz seyahatlerin ve ertelenen duruşmaların önüne geçilebilir.",
        ],
      },
      {
        id: "nafaka-velayet-tazminat",
        heading: "Nafaka, Velayet ve Tazminat Talepleri",
        level: 2,
        paragraphs: [
          "Boşanma davası yalnızca evliliğin sona ermesinden ibaret değildir. Velayet, çocukla kişisel ilişki, iştirak nafakası, yoksulluk nafakası, maddi ve manevi tazminat ile mal rejiminin tasfiyesi aynı süreç içinde ya da ayrı dosyalarda görülebilir.",
          "Yurt dışında yaşayan ailelerde velayet ve kişisel ilişki başlığı ayrı bir hassasiyet taşır. Çocuğun yurt dışında yaşaması, okul takvimi, seyahat masrafları ve iki ülke arasındaki uygulama farkları düzenlemenin içeriğini etkiler. Kişisel ilişki takviminin gerçekçi kurgulanması, sonradan doğacak uyuşmazlıkları azaltır.",
          "Aile hukuku dosyalarındaki hizmet başlıklarını [Bursa aile hukuku çalışma alanı](/calisma-alanlari/aile-hukuku) sayfasında inceleyebilirsiniz.",
        ],
      },
      {
        id: "tanima-tenfiz",
        heading: "Yurt Dışında Alınan Boşanma Kararının Türkiye'de Tanınması",
        level: 2,
        paragraphs: [
          "Yabancı bir mahkemede verilen boşanma kararı, Türkiye'de kendiliğinden sonuç doğurmaz. Nüfus kaydının güncellenmesi ve kararın Türkiye'de hüküm ifade etmesi için kural olarak tanıma veya tenfiz yoluna başvurulur. Tanıma, kararın Türkiye'de kesin hüküm ve kesin delil etkisi kazanmasını; tenfiz ise nafaka gibi icra edilebilir sonuçların uygulanmasını sağlar.",
          "Belirli koşulların sağlandığı hâllerde, yabancı boşanma kararlarının nüfus kütüğüne tescili için idari bir başvuru yolu da gündeme gelebilir. Hangi yolun uygun olduğu; kararın içeriğine, kesinleşme durumuna, tarafların birlikte başvurup başvurmadığına ve belgelerin usulüne uygunluğuna göre belirlenir.",
          "Tanıma işlemi yapılmadığında kişi Türkiye kayıtlarında evli görünmeye devam eder. Bu durum yeniden evlenme, miras ve nüfus işlemlerinde sorun doğurabileceğinden, kararın kesinleşmesinin ardından bu adımın ertelenmemesi önerilir.",
        ],
      },
      {
        id: "bursa-gurbetci-avukat-bosanma",
        heading: "Bursa Gurbetçi Avukat ile Süreç Takibi",
        level: 2,
        paragraphs: [
          "Yurt dışında yaşayanlar için boşanma avukatı desteğinin ana işlevi, mesafeden kaynaklanan aksaklıkları yönetmektir. Tebligatların karşılanması, duruşma günlerinin takibi, delillerin zamanında sunulması ve kararın kesinleştirilmesi bu kapsamdadır.",
          "Bursa gurbetçi hukuk kapsamında yürütülen boşanma dosyalarında iletişim çevrim içi sürdürülür; belgeler dijital ortamda paylaşılır, duruşma sonuçları yazılı olarak bildirilir. Hizmet başlıklarının tamamı [Bursa Gurbetçi Hukuk sayfamızda](/bursa-gurbetci-hukuk) yer alır.",
          "Boşanma dosyalarının süresi ve sonucu; tarafların tutumuna, delil durumuna ve mahkemenin iş yüküne göre değişir. Bu nedenle sonuç veya süre garantisi verilmez; dosyaya özgü değerlendirme ilk görüşmede paylaşılır.",
        ],
      },
    ],
    faqs: [
      {
        question: "Eşim yurt dışında, ben Türkiye'deyim. Dava açabilir miyim?",
        answer:
          "Koşulları varsa Türkiye'de dava açılabilir. Bu hâlde yetkili mahkemenin belirlenmesi ve yurt dışındaki eşe tebligatın usulüne uygun yapılması önem taşır; yurt dışı tebligatı süreci uzatabileceğinden baştan planlanması gerekir.",
      },
      {
        question: "Anlaşmalı boşanmada duruşmaya katılmam şart mı?",
        answer:
          "Anlaşmalı boşanmada kural olarak hâkimin tarafları bizzat dinlemesi aranır. Katılımın hangi biçimde sağlanacağı ve teknik imkânların kullanılıp kullanılmayacağı mahkemenin takdirine bağlı olduğundan, kesin bir taahhüt verilemez.",
      },
      {
        question: "Almanya'da boşandım, Türkiye'de de geçerli olur mu?",
        answer:
          "Yabancı mahkeme kararı Türkiye'de kendiliğinden sonuç doğurmaz. Kural olarak tanıma veya tenfiz yoluna başvurulması gerekir; koşulları varsa nüfus kütüğüne tescile ilişkin idari yol da değerlendirilebilir.",
      },
      {
        question: "Boşanma vekâletnamesini nasıl çıkarabilirim?",
        answer:
          "Boşanma dosyaları için fotoğraflı vekâletname aranır ve bu belge genellikle Türk konsolosluğunda düzenlenir. Belge listesi ve randevu koşulları temsilciliğe göre değişebileceğinden, güncel bilgi ilgili konsolosluktan teyit edilmelidir.",
      },
      {
        question: "Dava ne kadar sürer?",
        answer:
          "Süre; dosyanın anlaşmalı ya da çekişmeli olmasına, tebligat sürecine, tanık sayısına ve mahkemenin iş yüküne göre değişir. Bu nedenle bir süre garantisi verilemez.",
      },
      {
        question: "Çocuğum yurt dışında yaşıyor, velayet düzenlemesi nasıl yapılır?",
        answer:
          "Velayet ve kişisel ilişki düzenlemesinde çocuğun üstün yararı esas alınır; yaşadığı yer, okul takvimi ve seyahat koşulları değerlendirilir. Takvimin gerçekçi kurgulanması sonraki uyuşmazlıkları azaltır.",
      },
    ],
    sources: [
      "4721 sayılı Türk Medeni Kanunu",
      "6100 sayılı Hukuk Muhakemeleri Kanunu",
      "5718 sayılı Milletlerarası Özel Hukuk ve Usul Hukuku Hakkında Kanun",
      "7201 sayılı Tebligat Kanunu",
    ],
    closingNote:
      "Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; hukuki tavsiye niteliği taşımaz ve boşanma dosyalarında sonuç ya da süre taahhüdü içermez. Duruşmaya katılım dâhil pek çok konu dava türüne ve mahkemenin değerlendirmesine göre değişebileceğinden, kendi dosyanız için bir avukatla görüşmeniz gerekir.",
  },
  {
    slug: "yurt-disinda-askerlik-erteleme",
    title: "Yurt Dışında Yaşayanların Askerlik Erteleme İşlemleri",
    excerpt:
      "Yurt dışında yaşayan vatandaşların askerlik erteleme başvurusu, ikamet ve çalışma belgeleri, konsolosluk süreci ile bedelli ve dövizle askerlik seçenekleri hakkında genel bilgilendirme.",
    categorySlug: "gurbetci-hukuk",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-03",
    readingMinutes: 8,
    relatedAreaSlug: "idare-hukuku",
    metaTitle: "Yurt Dışında Askerlik Erteleme | Bursa Gurbetçi Hukuk",
    metaDescription:
      "Yurt dışında yaşayan vatandaşların askerlik erteleme, başvuru ve belge süreçleri hakkında genel hukuki bilgilendirme.",
    status: "published",
    sections: [
      {
        id: "yurt-disinda-askerlik-durumu",
        heading: "Yurt Dışında Yaşayanların Askerlik Durumu",
        level: 2,
        paragraphs: [
          "Yurt dışında yaşayan Türk vatandaşları bakımından askerlik yükümlülüğü ortadan kalkmaz; yükümlülüğün ne şekilde yerine getirileceği veya ertelenip ertelenemeyeceği, kişinin yurt dışındaki statüsüne ve güncel mevzuata göre belirlenir. Yurt dışı askerlik işlemleri, çalışma veya öğrenim gibi farklı gerekçelere dayanabildiğinden tek bir standart süreçten söz edilemez.",
          "Erteleme, yükümlülüğün belirli koşullarla ileri bir tarihe bırakılmasını ifade eder; yükümlülüğün sona ermesi anlamına gelmez. Erteleme kararını veren merci resmî kurumlardır. Bir hukuk bürosu bu konuda karar vermez; yalnızca başvurunun hukuki çerçevesi, belgelerin uygunluğu ve olumsuz işlemlere karşı başvuru yolları konusunda danışmanlık verebilir.",
          "Bu yazıda kesin bir yaş sınırı, herkes için geçerli bir ikamet süresi veya sabit bir ücret belirtilmemektedir. Bu unsurlar mevzuat değişikliklerine ve kişisel duruma göre farklılaştığından, güncel bilgi resmî kaynaklardan teyit edilmelidir.",
        ],
      },
      {
        id: "erteleme-basvurusu-degerlendirme",
        heading: "Erteleme Başvurusu Nasıl Değerlendirilir?",
        level: 2,
        paragraphs: [
          "Erteleme başvuruları, yükümlünün yurt dışındaki durumunu belgelemesi esasına dayanır. İdare; kişinin yurt dışında oturma veya çalışma statüsünü, bu statünün sürekliliğini, yurt içinde geçirdiği süreleri ve mevcut askerlik durumunu birlikte değerlendirir.",
          "Değerlendirmede belge içeriğinin resmî ve doğrulanabilir olması belirleyicidir. Eksik, güncelliğini yitirmiş ya da tercümesi usulüne uygun yapılmamış belgeler başvurunun sonuçsuz kalmasına yol açabilir. Başvurunun reddi hâlinde, idari başvuru ve dava yollarının süreleri gündeme gelir; bu süreler kaçırıldığında hak kaybı doğabilir.",
        ],
        list: [
          "Yurt dışındaki oturum veya çalışma statüsünü gösteren resmî belgeler",
          "İşveren yazısı, çalışma kaydı ya da sosyal güvenlik kayıtları",
          "Pasaport ve giriş-çıkış kayıtları",
          "Öğrenim gerekçeli başvurularda öğrenci belgesi ve öğrenim süresine ilişkin bilgiler",
          "Gerekli hâllerde belgelerin usulüne uygun tercümesi ve onayı",
        ],
      },
      {
        id: "ikamet-ve-calisma-belgeleri",
        heading: "İkamet ve Çalışma Belgelerinin Önemi",
        level: 2,
        paragraphs: [
          "Yurt dışında yaşadığını ileri süren bir yükümlünün, bunu belgeyle ortaya koyması beklenir. İkamet kaydı, oturma izni, çalışma izni ve sosyal güvenlik kayıtları bu bakımdan temel dayanaklardır. Belgelerin yalnızca varlığı değil, hangi dönemi kapsadığı da önemlidir; başvuruya konu dönemle örtüşmeyen belgeler yeterli görülmeyebilir.",
          "Türkiye'de geçirilen sürelerin kayıtlarla uyumlu olması da dikkate alınan bir husustur. Uzun süreli Türkiye ziyaretleri, yurt dışındaki statünün sürekliliği yönünden ayrıca değerlendirilebilir. Bu nedenle belge dosyasının başvuru öncesinde bütün olarak gözden geçirilmesi yararlıdır.",
        ],
      },
      {
        id: "konsolosluk-uzerinden-basvuru",
        heading: "Konsolosluk Üzerinden Başvuru",
        level: 2,
        paragraphs: [
          "Konsolosluk askerlik işlemleri, yurt dışında yaşayan vatandaşların başvurularını bulundukları ülkeden yapabilmesini sağlar. Başvuru kanalları, randevu usulü, istenen belgeler ve varsa çevrim içi işlem imkânları temsilciliğe göre değişebilir.",
          "Bu nedenle işlem öncesinde ilgili başkonsolosluğun güncel duyurularının incelenmesi gerekir. Bu yazıda randevu süresi veya işlem ücreti belirtilmemesinin nedeni de budur: koşullar ülkeye, temsilciliğe ve işlem türüne göre farklılık gösterir.",
          "Başvuru sonrasında verilen kararın yükümlüye tebliği ve varsa itiraz süreleri takip edilmelidir. Yurt dışında yaşamak, idari başvuru sürelerini kendiliğinden uzatmaz.",
        ],
      },
      {
        id: "erteleme-suresi-dolmadan",
        heading: "Erteleme Süresi Dolmadan Önce Yapılacaklar",
        level: 2,
        paragraphs: [
          "Erteleme belirli bir dönem için geçerlidir. Süre sona ermeden önce durumun yeniden değerlendirilmesi, yenileme koşullarının kontrol edilmesi ve gerekirse yeni belgelerin hazırlanması gerekir. Sürenin sona erdiğinin fark edilmemesi, yoklama kaçağı gibi istenmeyen sonuçlar doğurabilir.",
          "Pratik bir yöntem, erteleme bitiş tarihinden birkaç ay önce hatırlatma kurmak ve belge geçerliliklerini gözden geçirmektir. Statü değişiklikleri de önem taşır: işten ayrılma, ülke değiştirme, oturum türünün değişmesi ya da Türkiye'ye kesin dönüş, mevcut ertelemenin dayanağını etkileyebilir.",
        ],
        list: [
          "Erteleme bitiş tarihinin ve yenileme koşullarının önceden kontrol edilmesi",
          "Oturum, çalışma veya öğrenim belgelerinin güncelliğinin gözden geçirilmesi",
          "Statü değişikliklerinin başvuruya etkisinin değerlendirilmesi",
          "Olumsuz bir işlem hâlinde başvuru ve dava sürelerinin takip edilmesi",
        ],
      },
      {
        id: "bedelli-ve-dovizle-askerlik",
        heading: "Bedelli ve Dövizle Askerlik Seçenekleri",
        level: 2,
        paragraphs: [
          "Yurt dışında yaşayan vatandaşlar bakımından dövizle askerlik, yükümlülüğün belirli koşullarla ve bir bedel ödenerek yerine getirilmesine imkân tanıyan bir uygulamadır. Bedelli askerlik ise genel düzenleme kapsamında değerlendirilir. Her iki seçeneğin de koşulları, kapsamı ve tutarları mevzuatla belirlenir ve zaman içinde değişebilir.",
          "Bu nedenle burada sabit bir ücret, kesin bir yaş sınırı veya herkes için geçerli bir ikamet süresi yazılmamaktadır. Kişinin hangi seçenekten yararlanabileceği; yurt dışındaki statüsüne, kayıtlı sürelerine ve başvuru tarihinde yürürlükte olan düzenlemeye göre belirlenir.",
          "Seçim yapılmadan önce mevcut askerlik durumunun resmî kayıtlar üzerinden kontrol edilmesi, sonradan doğabilecek uyumsuzlukları önler.",
        ],
      },
      {
        id: "bursa-gurbetci-hukuk-danismanligi",
        heading: "Bursa Gurbetçi Hukuk Danışmanlığı",
        level: 2,
        paragraphs: [
          "Askerlik işlemleri idari bir sürecin parçasıdır; kararı ilgili resmî kurumlar verir. Hukuki danışmanlığın rolü, başvuru öncesinde belgelerin uygunluğunu değerlendirmek, süreleri takip etmek ve olumsuz bir işlem söz konusu olduğunda idari başvuru ile iptal davası yollarını incelemektir.",
          "Bursa gurbetçi hukuk kapsamında bu başlık, nüfus kayıtlarının düzeltilmesi, vekâletname ile yürütülebilecek idari işlemler ve yurt dışından takip gerektiren diğer dosyalarla birlikte ele alınır. Hizmet başlıklarının tamamına [Bursa Gurbetçi Hukuk sayfamızdan](/bursa-gurbetci-hukuk) ulaşabilirsiniz.",
          "Vekâletname ile yürütülebilen işlemlerin çerçevesi için [konsolosluk vekâletnamesi yazımızı](/makaleler/yurt-disindan-konsolosluk-vekaletnamesi) inceleyebilirsiniz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Yurt dışında yaşıyorum, askerliğimi erteletebilir miyim?",
        answer:
          "Erteleme imkânı, yurt dışındaki oturum veya çalışma statüsüne ve başvuru tarihinde yürürlükte olan mevzuata göre değerlendirilir. Kararı ilgili resmî kurum verir; bu nedenle kişisel duruma bakılmadan kesin bir sonuç söylenemez.",
      },
      {
        question: "Erteleme başvurusu için hangi belgeler isteniyor?",
        answer:
          "Genellikle oturum veya çalışma statüsünü gösteren resmî belgeler, pasaport bilgileri ve gerekli hâllerde usulüne uygun tercümeler istenir. Belge listesi temsilciliğe ve başvuru türüne göre değişebileceğinden güncel liste resmî kaynaktan teyit edilmelidir.",
      },
      {
        question: "Erteleme süresi dolarsa ne olur?",
        answer:
          "Süre sona erdiğinde yükümlülük yeniden gündeme gelir ve koşullar sağlanıyorsa yenileme değerlendirilir. Sürenin takip edilmemesi hak kaybına ve istenmeyen idari sonuçlara yol açabileceğinden, bitiş tarihinin önceden izlenmesi önerilir.",
      },
      {
        question: "Başvurum reddedilirse ne yapabilirim?",
        answer:
          "Olumsuz işlemlere karşı idari başvuru ve iptal davası yolları gündeme gelebilir. Bu yollar süreye bağlıdır ve yurt dışında yaşamak süreleri kendiliğinden uzatmaz; bu nedenle tebliğ tarihinden itibaren değerlendirme yapılmalıdır.",
      },
      {
        question: "Dövizle askerlik bedeli ne kadar?",
        answer:
          "Tutar ve koşullar mevzuatla belirlenir ve zaman içinde değişebilir. Bu nedenle sabit bir rakam paylaşmak doğru olmaz; güncel tutar ve şartlar başvuru anında resmî kaynaklardan öğrenilmelidir.",
      },
    ],
    sources: [
      "7179 sayılı Askeralma Kanunu ve ilgili yönetmelik",
      "2577 sayılı İdari Yargılama Usulü Kanunu",
      "5490 sayılı Nüfus Hizmetleri Kanunu",
      "Konsolosluk işlemlerine ilişkin mevzuat",
    ],
    closingNote:
      "Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; hukuki tavsiye niteliği taşımaz. Askerlik işlemlerinde yetkili merci resmî kurumlardır. Başvuru şartları, süreler ve tutarlar güncel mevzuata ve kişisel duruma göre değişebileceğinden, işlem yapmadan önce resmî kaynakların ve bir avukatın görüşünün alınması gerekir.",
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
