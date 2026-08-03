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
  {
    slug: "gayrimenkul-hukuku",
    title: "Gayrimenkul Hukuku",
    description:
      "Tapu iptali ve tescil, ortaklığın giderilmesi ve taşınmaz devirlerine ilişkin genel bilgilendirme yazıları.",
  },
  {
    slug: "icra-hukuku",
    title: "İcra Hukuku",
    description:
      "İcra takibi türleri, ödeme emrine itiraz, haciz ve tahsil aşamalarına ilişkin yazılar.",
  },
];

const coreArticles: Article[] = [

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
  {
    slug: "bursa-aile-hukuku-avukati",
    title: "Bursa Aile Hukuku Avukatı: Boşanma, Velayet ve Nafaka Süreçleri",
    excerpt:
      "Bursa aile hukuku avukatı desteğiyle yürütülen boşanma, velayet, nafaka ve mal paylaşımı süreçlerinin nasıl işlediğini; Osmangazi ve Yıldırım başta olmak üzere Bursa adliyelerindeki pratik işleyişi anlatan kapsamlı bir rehber.",
    categorySlug: "aile-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-03",
    readingMinutes: 10,
    relatedAreaSlug: "aile-hukuku",
    metaTitle: "Bursa Aile Hukuku Avukatı | Boşanma ve Velayet",
    metaDescription:
      "Bursa aile hukuku avukatı desteği, boşanma, velayet, nafaka ve mal paylaşımı süreçleri hakkında bilgi alın. Osmangazi ve Yıldırım hukuki danışmanlık.",
    status: "published",
    sections: [
      {
        id: "giris",
        heading: "Bursa Aile Hukuku Hangi Uyuşmazlıkları Kapsar?",
        level: 2,
        paragraphs: [
          "Bursa aile hukuku avukatı desteği aranan dosyaların büyük bölümü, evliliğin devamı ya da sona ermesiyle ilgili uyuşmazlıklardan doğar. Aile hukuku; nişanlanmadan evlenmeye, boşanmadan velayete, nafakadan mal rejimine kadar geniş bir alanı kapsar. Bu başlıkların ortak özelliği, hem hukuki hem de kişisel sonuçları aynı anda doğurmasıdır. Bu nedenle dosyanın en başında hangi taleplerin ileri sürüleceğinin, hangi belgelerin toplanacağının ve tarafların hangi noktada uzlaşabileceğinin belirlenmesi, sürecin bütününü etkiler.",
          "Bursa aile hukuku uygulamasında en sık görülen dosya türleri arasında anlaşmalı ve çekişmeli boşanma davaları, velayetin değiştirilmesi, kişisel ilişki (çocukla görüşme) düzenlemesi, tedbir–yoksulluk–iştirak nafakası talepleri, maddi ve manevi tazminat istemleri, mal rejiminin tasfiyesi ve aile konutu şerhi başvuruları yer alır. Buna ek olarak, koruma tedbiri talepleri ve soybağına ilişkin davalar da aynı alanın parçasıdır.",
          "Her uyuşmazlığın kendi delilleri, kendi tarafları ve kendi geçmişi vardır. Bir dosyada sonuç veren yaklaşım, benzer görünen bir başka dosyada beklenen etkiyi doğurmayabilir. Bu yazıdaki açıklamalar genel çerçeveyi anlatır; kendi durumunuz için değerlendirme yapılırken evlilik tarihi, çocukların yaşı, gelir durumu, taşınmazların edinme zamanı ve elinizdeki belgeler birlikte incelenmelidir. Ayrıntılı hizmet kapsamı için [Bursa aile hukuku çalışma alanımıza](/calisma-alanlari/aile-hukuku) göz atabilirsiniz.",
        ],
      },
      {
        id: "bosanma-davasi-turleri",
        heading: "Boşanma Davası Türleri Nelerdir?",
        level: 2,
        paragraphs: [
          "Türk hukukunda boşanma davaları uygulamada iki ana başlık altında toplanır: anlaşmalı boşanma ve çekişmeli boşanma. Anlaşmalı boşanmada eşler, evliliğin sona ermesi ve bunun sonuçları üzerinde anlaşmıştır; çekişmeli boşanmada ise boşanmanın kendisi ya da sonuçlarından en az biri tartışmalıdır. Bu ayrım yalnızca usule ilişkin değildir; sürecin uzunluğunu, dinlenecek delilleri ve tarafların yükünü doğrudan belirler.",
          "Çekişmeli boşanma, kanunda düzenlenen özel sebeplere (zina, hayata kast, pek kötü davranış, suç işleme ve haysiyetsiz hayat sürme, terk, akıl hastalığı) veya genel sebep olan evlilik birliğinin temelinden sarsılmasına dayanabilir. Uygulamada dosyaların çoğunluğu genel sebebe dayanır. Hangi sebebe dayanıldığı, ispat yükünü ve toplanacak delilleri değiştirdiğinden dava dilekçesinin hazırlanması teknik bir çalışmadır.",
          "Anlaşmalı boşanma için kanun, evliliğin en az bir yıl sürmüş olmasını, eşlerin birlikte başvurmasını veya bir eşin diğerinin davasını kabul etmesini ve hâkimin tarafları bizzat dinleyerek iradelerinin serbestçe açıklandığına kanaat getirmesini arar. Bu koşullar sağlanmadığında dosya kendiliğinden çekişmeli şekilde yürür.",
        ],
        list: [
          "Anlaşmalı boşanma: taraflar boşanma ve tüm sonuçlarında uzlaşmıştır",
          "Çekişmeli boşanma (genel sebep): evlilik birliğinin temelinden sarsılması",
          "Çekişmeli boşanma (özel sebepler): kanunda sayılan belirli hâller",
          "Ayrılık davası: boşanma yerine belirli süreli ayrılığa karar verilmesi",
        ],
      },
      {
        id: "anlasmali-bosanma-sureci",
        heading: "Anlaşmalı Boşanma Süreci Nasıl İlerler?",
        level: 2,
        paragraphs: [
          "Anlaşmalı boşanmanın omurgası protokoldür. Protokol; boşanma iradesini, varsa nafaka ve tazminat düzenlemesini, çocuklar bakımından velayet ve kişisel ilişki takvimini, mal paylaşımına ilişkin beyanları ve yargılama giderlerinin paylaşımını içerir. Protokolde eksik ya da çelişkili bırakılan her başlık, ileride yeni bir dava sebebi hâline gelebilir.",
          "Dosya açıldıktan sonra mahkeme duruşma günü verir. Hâkim, eşleri bizzat dinler ve protokolü inceler. Protokolde çocuğun üstün yararına aykırı gördüğü noktalar bulunursa değişiklik önerebilir; taraflar bu değişikliği kabul etmezse dosya anlaşmalı olarak sonuçlanmaz. Bu nedenle anlaşmalı boşanmanın her koşulda tek duruşmada biteceği söylenemez; duruşma sayısı ve süre, mahkemenin iş yoğunluğuna ve dosyanın içeriğine göre değişir.",
          "Kararın kesinleşmesi ayrı bir aşamadır. Gerekçeli kararın yazılması, taraflara tebliği ve kanun yolundan feragat ya da sürelerin geçmesiyle karar kesinleşir; nüfusa tescil bu aşamadan sonra yapılır. Yurt dışında yaşayan eşler bakımından tebligat süreleri farklı işleyebilir; bu konudaki ayrıntılar için [Bursa Gurbetçi Hukuk sayfamızı](/bursa-gurbetci-hukuk) inceleyebilirsiniz.",
        ],
      },
      {
        id: "cekismeli-bosanma-dikkat",
        heading: "Çekişmeli Boşanma Davasında Nelere Dikkat Edilir?",
        level: 2,
        paragraphs: [
          "Çekişmeli dosyada belirleyici olan, iddiaların somut olaylara bağlanması ve bu olayların hukuken kabul edilebilir delillerle desteklenmesidir. Genel nitelemeler yerine tarih, yer ve olay içeren anlatım tercih edilir. Tanık beyanları, mesaj ve yazışma kayıtları, banka hareketleri, hastane kayıtları ve resmî belgeler sık başvurulan delil türleridir.",
          "Delil elde etme yönteminin hukuka uygun olması gerekir. Hukuka aykırı yolla elde edilen kayıtlar dosyaya sunulduğunda değerlendirme dışı bırakılabileceği gibi ayrı bir sorumluluk da doğurabilir. Bu nedenle delil toplanmasına başlanmadan önce hukuki değerlendirme yapılması yerinde olur.",
          "Usul süreleri de en az deliller kadar önemlidir. Cevap dilekçesi süresi, delil listesi sunma süresi ve ön inceleme aşamasındaki beyanlar kaçırıldığında telafisi güç sonuçlar doğabilir. Dava boyunca tedbir nafakası, çocukla kişisel ilişki ve aile konutu gibi geçici düzenlemeler de talep edilebilir.",
        ],
        list: [
          "İddiaların tarih ve olay bazında somutlaştırılması",
          "Delillerin hukuka uygun yolla toplanması",
          "Cevap ve delil sunma sürelerinin takibi",
          "Yargılama sırasında geçici (tedbir) taleplerin değerlendirilmesi",
        ],
      },
      {
        id: "velayet",
        heading: "Çocuğun Velayeti Nasıl Belirlenir?",
        level: 2,
        paragraphs: [
          "Velayette tek ölçüt çocuğun üstün yararıdır. Mahkeme; çocuğun yaşı, alıştığı çevre, okul düzeni, kardeşlerinden ayrılıp ayrılmayacağı, ebeveynlerin çocukla kurduğu ilişki ve bakım için ayırabildikleri zaman gibi unsurları birlikte değerlendirir. Ekonomik güç tek başına belirleyici değildir; maddi eksiklik nafaka ile giderilebilecek bir konu olarak görülür.",
          "Uygulamada sosyal inceleme raporu, pedagog görüşü ve idrak çağındaki çocuğun dinlenmesi sıkça başvurulan yöntemlerdir. Bursa velayet avukatı desteği alan taraflar bakımından hazırlık, çoğu zaman çocuğun günlük düzenine ilişkin somut bilgilerin (okul, sağlık, bakım paylaşımı) derlenmesiyle başlar.",
          "Velayet kararı değişmez bir karar değildir. Koşullar esaslı biçimde değiştiğinde velayetin değiştirilmesi veya kişisel ilişkinin yeniden düzenlenmesi talep edilebilir. Kişisel ilişki takviminin gerçekçi kurulması, sonraki uyuşmazlıkları azaltan en pratik önlemlerden biridir.",
        ],
      },
      {
        id: "nafaka-turleri",
        heading: "Nafaka Türleri Nelerdir?",
        level: 2,
        paragraphs: [
          "Nafaka, uygulamada birden çok türü olan ve çoğu zaman birbiriyle karıştırılan bir kavramdır. Tedbir nafakası, dava sürerken ihtiyaç içindeki eş veya çocuk için hükmedilir. İştirak nafakası, velayeti kendisinde olmayan ebeveynin çocuğun bakım ve eğitim giderlerine katılmasıdır. Yoksulluk nafakası ise boşanma yüzünden yoksulluğa düşecek eş lehine, kusur durumu da gözetilerek talep edilebilir. Yardım nafakası ise eşler dışındaki altsoy, üstsoy ve kardeşler arasında gündeme gelir.",
          "Nafaka miktarı belirlenirken tarafların geliri, çocuğun yaşı ve ihtiyaçları, tarafların yaşam standardı ve hakkaniyet gözetilir. Sabit bir tarife bulunmaz. Koşullar değiştiğinde nafakanın artırılması, azaltılması veya kaldırılması ayrı bir dava ile istenebilir. Bursa nafaka avukatı desteğiyle yürütülen dosyalarda hazırlık, gelir ve gider kalemlerinin belgelenmesi üzerine kurulur.",
        ],
        list: [
          "Tedbir nafakası: yargılama sürerken geçici olarak hükmedilir",
          "İştirak nafakası: çocuğun giderlerine katılım",
          "Yoksulluk nafakası: boşanma nedeniyle yoksulluğa düşecek eş için",
          "Yardım nafakası: yakın hısımlar arasında",
        ],
      },
      {
        id: "mal-paylasimi",
        heading: "Boşanmada Mal Paylaşımı Nasıl Yapılır?",
        level: 2,
        paragraphs: [
          "1 Ocak 2002'den sonra kurulan evliliklerde, aksi kararlaştırılmadıkça edinilmiş mallara katılma rejimi uygulanır. Bu rejimde kural olarak evlilik içinde emekle edinilen değerler paylaşıma konu olur; miras veya bağış yoluyla gelen mallar ile kişisel kullanım eşyaları kişisel mal sayılır. Bu ayrım, hangi malın hangi tarihte ve hangi kaynakla edinildiğinin belgelenmesini önemli kılar.",
          "Mal rejiminin tasfiyesi, boşanma davasından ayrı bir dava olarak görülür ve kural olarak boşanma kararının kesinleşmesiyle istenebilir hâle gelir. Tapu kayıtları, kredi ödemeleri, banka dekontları ve satış sözleşmeleri bu dosyalarda en çok başvurulan belgelerdir. Bursa mal paylaşımı avukatı desteği alan taraflar için ilk adım genellikle taşınmaz ve hesap araştırmasıdır.",
          "Değer artış payı, katılma alacağı ve katkı payı gibi kavramlar farklı hukuki temellere dayanır. Hangi talebin ileri sürüleceği, malın edinme biçimine ve ödemelerin kaynağına göre belirlenir.",
        ],
      },
      {
        id: "avukat-destegi",
        heading: "Bursa Aile Hukuku Avukatı Desteği Neden Önemlidir?",
        level: 2,
        paragraphs: [
          "Aile hukuku dosyalarında hata, çoğu zaman hukuki bilgi eksikliğinden değil, sürelerin kaçırılmasından ve taleplerin eksik ileri sürülmesinden doğar. Dava dilekçesinde istenmeyen bir talebin sonradan eklenmesi her zaman mümkün olmaz; delil listesinin zamanında sunulmaması ise ispatı güçleştirir. Bir Bursa hukuk bürosu ile çalışmanın pratik faydası, sürecin bu teknik iskeletinin baştan kurulmasıdır.",
          "Bunun yanında aile dosyaları yüksek duygusal yük taşır. Tarafın kendi anlatımını hukuki çerçeveye oturtmak, hangi bilginin dosyaya girmesinin yararlı olduğunu ayırt etmek ve uzlaşma imkânını değerlendirmek profesyonel bir bakış gerektirir. Hiçbir avukat sonuç ya da süre garantisi veremez; verilebilecek olan, dosyanın usulüne uygun ve eksiksiz yürütülmesidir.",
          "Süreç hakkında görüşmek isterseniz [iletişim sayfamızdan](/iletisim) randevu talebi oluşturabilirsiniz.",
        ],
      },
      {
        id: "osmangazi-yildirim",
        heading: "Osmangazi ve Yıldırım İlçelerinde Aile Hukuku Süreçleri",
        level: 2,
        paragraphs: [
          "Boşanma davalarında yetkili mahkeme, kural olarak eşlerden birinin yerleşim yeri ya da davadan önce son defa altı aydan beri birlikte oturdukları yer aile mahkemesidir. Bursa'da aile mahkemeleri merkez adliyede toplandığından, Osmangazi'de veya Yıldırım'da ikamet eden taraflar için dosya çoğunlukla aynı adliyede görülür. Bu nedenle Osmangazi avukat ya da Yıldırım avukat arayışında olan kişilerin pratikte dikkate alması gereken ölçüt, büronun bulunduğu mahalle değil, dosyayı hangi kapsamda takip edebildiğidir.",
          "İlçe farkının hissedildiği başlıklar daha çok idari işlemlerdir: nüfus müdürlüğü işlemleri, tapu müdürlüğü başvuruları ve tebligat adresleri ilçeye göre değişir. Yerleşim yeri değişikliği, davanın yetkisini de etkileyebileceğinden taşınma durumunda kaydın güncel tutulması yerinde olur.",
          "Büromuz Osmangazi'de, Kıbrıs Şehitleri Caddesi üzerindeki Avukatlar İşhanı'nda bulunmaktadır; bu konum hem adliyeye hem de tapu ve nüfus işlemlerinin yürütüldüğü kurumlara yakınlık bakımından dosya takibini kolaylaştırır.",
        ],
      },
    ],
    faqs: [
      {
        question: "Bursa'da boşanma davası ne kadar sürer?",
        answer:
          "Kesin bir süre söylemek mümkün değildir. Anlaşmalı dosyalarda süreç genellikle daha kısadır; ancak duruşma günü, mahkemenin iş yoğunluğu, tebligatın tamamlanması ve gerekçeli kararın yazılması gibi aşamalar süreyi etkiler. Çekişmeli dosyalarda tanık sayısı, bilirkişi incelemesi ve kanun yolu aşaması süreyi uzatabilir. Her dosya kendi koşulları içinde değerlendirilmelidir.",
      },
      {
        question: "Anlaşmalı boşanmada mutlaka duruşmaya katılmam gerekir mi?",
        answer:
          "Anlaşmalı boşanmada hâkimin tarafları bizzat dinlemesi kural olarak aranır; bu nedenle eşlerin duruşmada hazır bulunması beklenir. Yurt dışında yaşıyorsanız duruşma gününün planlanması ve gerekli belgelerin önceden hazırlanması önem taşır. Katılım zorunluluğunun kapsamı dosyanın türüne ve mahkemenin değerlendirmesine göre farklılık gösterebilir.",
      },
      {
        question: "Velayet her zaman anneye mi verilir?",
        answer:
          "Hayır. Kanunda anneye ya da babaya öncelik tanıyan bir kural yoktur; ölçüt çocuğun üstün yararıdır. Küçük yaştaki çocuklar bakımından uygulamada anne bakımına ağırlık verildiği görülse de bu bir kesinlik değildir. Mahkeme, çocuğun düzeni, ebeveynlerin bakım imkânı ve sosyal inceleme raporu gibi unsurları birlikte değerlendirir.",
      },
      {
        question: "Nafaka miktarı neye göre belirlenir?",
        answer:
          "Nafakada sabit bir tarife yoktur. Tarafların geliri ve mal varlığı, çocuğun yaşı ve ihtiyaçları, tarafların evlilik sırasındaki yaşam standardı ile hakkaniyet birlikte gözetilir. Koşullar sonradan esaslı şekilde değişirse nafakanın artırılması, azaltılması veya kaldırılması ayrıca talep edilebilir.",
      },
      {
        question: "Mal paylaşımı davası boşanma davasıyla birlikte açılabilir mi?",
        answer:
          "Mal rejiminin tasfiyesi ayrı bir davadır ve kural olarak boşanma kararı kesinleştikten sonra karara bağlanır. Dava boşanma sürerken açılsa bile mahkeme çoğunlukla boşanmanın kesinleşmesini bekletici mesele yapar. Bu nedenle taşınmaz ve hesap araştırmasının erken başlatılması pratik bir avantaj sağlar.",
      },
      {
        question: "Yurt dışında yaşıyorum, Bursa'daki aile hukuku dosyamı takip ettirebilir miyim?",
        answer:
          "Usulüne uygun düzenlenmiş bir vekâletname ile dosyanın açılması, dilekçelerin sunulması ve duruşmaların takibi vekil aracılığıyla yürütülebilir. Ancak bazı işlemlerde ilgilinin bizzat dinlenmesi gerekebilir. Ayrıntılar için Bursa Gurbetçi Hukuk sayfamızdaki açıklamaları inceleyebilirsiniz.",
      },
    ],
    sources: [
      "4721 sayılı Türk Medeni Kanunu",
      "6100 sayılı Hukuk Muhakemeleri Kanunu",
      "4787 sayılı Aile Mahkemelerinin Kuruluş, Görev ve Yargılama Usullerine Dair Kanun",
    ],
    closingNote:
      "Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; hukuki tavsiye niteliği taşımaz, sonuç veya süre garantisi içermez. Her dosya kendi koşulları içinde değerlendirilmelidir. Boşanma, velayet, nafaka veya mal paylaşımı sürecinizle ilgili görüşmek için iletişim sayfamızdan randevu talebi oluşturabilirsiniz.",
  },
  {
    slug: "bursa-anlasmali-cekismeli-bosanma-davasi",
    title: "Bursa'da Anlaşmalı ve Çekişmeli Boşanma Davası Arasındaki Farklar",
    excerpt:
      "Anlaşmalı ve çekişmeli boşanma davaları arasındaki usul, süre, delil ve masraf farkları; boşanma protokolünün içeriği ve Bursa'da Osmangazi ile Yıldırım'da dosyaların pratik işleyişi.",
    categorySlug: "aile-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-03",
    readingMinutes: 9,
    relatedAreaSlug: "aile-hukuku",
    metaTitle: "Bursa Boşanma Avukatı | Anlaşmalı ve Çekişmeli Boşanma",
    metaDescription:
      "Bursa anlaşmalı ve çekişmeli boşanma davalarının farklarını öğrenin. Osmangazi ve Yıldırım boşanma avukatı desteği hakkında bilgi alın.",
    status: "published",
    sections: [
      {
        id: "anlasmali-bosanma-nedir",
        heading: "Anlaşmalı Boşanma Davası Nedir?",
        level: 2,
        paragraphs: [
          "Bursa boşanma avukatı desteği arayan kişilerin ilk sorduğu şey genellikle şudur: dosya anlaşmalı mı yürüsün, çekişmeli mi? Bu tercih sürecin uzunluğunu, tarafların yükünü ve sonuçların ne kadar kendi kontrollerinde kalacağını belirlediği için yalnızca bir usul seçimi değildir. Anlaşmalı boşanma, eşlerin hem evliliğin sona ermesi hem de bunun sonuçları üzerinde uzlaşarak mahkemeye başvurmasıdır.",
          "Kanun bu yol için üç koşul arar: evliliğin en az bir yıl sürmüş olması, eşlerin birlikte başvurması veya bir eşin diğerinin davasını kabul etmesi ve hâkimin tarafları bizzat dinleyerek iradelerinin serbestçe açıklandığına kanaat getirmesi. Hâkim ayrıca tarafların çocuklar ve mali sonuçlar bakımından yaptığı düzenlemeyi uygun bulmalıdır; gerekli görürse değişiklik önerebilir.",
          "Anlaşmalı yolun avantajı, tarafların sonuçları kendi aralarında belirlemesidir. Nafaka, tazminat, velayet ve kişisel ilişki takvimi mahkemenin takdirine bırakılmak yerine protokolle düzenlenir. Bunun karşılığında her başlıkta gerçek bir uzlaşma bulunması gerekir; tek bir konuda dahi anlaşma sağlanmazsa dosya çekişmeli olarak devam eder.",
        ],
      },
      {
        id: "cekismeli-bosanma-nedir",
        heading: "Çekişmeli Boşanma Davası Nedir?",
        level: 2,
        paragraphs: [
          "Çekişmeli boşanma, tarafların boşanma iradesinde ya da boşanmanın sonuçlarından en az birinde anlaşamadığı dosyalardır. Uyuşmazlık kimi zaman boşanmanın kendisine, kimi zaman yalnızca nafaka miktarına, velayete veya tazminata ilişkindir. Her iki hâlde de mahkeme, iddiaları delillerle inceleyerek karar verir.",
          "Dava genel sebep olan evlilik birliğinin temelinden sarsılmasına ya da kanunda sayılan özel sebeplere dayanabilir. Genel sebebe dayanan dosyalarda ortak yaşamın çekilmez hâle geldiğinin ve bunda karşı tarafın kusurunun bulunduğunun ortaya konulması beklenir. Kusur değerlendirmesi, tazminat ve yoksulluk nafakası taleplerini de etkiler.",
          "Çekişmeli süreç, dilekçeler aşaması, ön inceleme, tahkikat ve hüküm aşamalarından geçer. Tanık dinlenmesi, banka ve tapu araştırması, sosyal inceleme raporu ya da bilirkişi incelemesi gerektiğinde aşama sayısı artar. Bu nedenle çekişmeli boşanma için kesin bir bitiş tarihi vermek mümkün değildir.",
        ],
      },
      {
        id: "temel-farklar",
        heading: "İki Dava Türü Arasındaki Temel Farklar",
        level: 2,
        paragraphs: [
          "İki yol arasındaki farkı en iyi anlatan ölçüt, sonuçların kim tarafından belirlendiğidir. Anlaşmalı boşanmada sonuçları taraflar yazar, hâkim denetler; çekişmeli boşanmada sonuçları hâkim, sunulan deliller çerçevesinde belirler. Bu temel farktan usul, süre, masraf ve ispat yükü bakımından başka farklar doğar.",
        ],
        list: [
          "İrade: anlaşmalıda ortak başvuru veya kabul, çekişmelide karşıt talepler",
          "Delil: anlaşmalıda protokol esastır, çekişmelide tanık ve belge incelemesi yapılır",
          "Süre: anlaşmalı dosyalar genellikle daha kısadır; ancak tek duruşmada biteceği garanti edilemez",
          "Masraf: çekişmeli dosyalarda bilirkişi ve tanık giderleriyle birlikte masraf artabilir",
          "Kesinleşme: her iki hâlde de karar kesinleşmeden nüfusa tescil yapılmaz",
        ],
      },
      {
        id: "bursa-aile-hukuku",
        heading: "Bursa Aile Hukuku Çerçevesinde Boşanma",
        level: 2,
        paragraphs: [
          "Bursa aile hukuku uygulamasında boşanma dosyaları tek başına ilerlemez; çoğu zaman nafaka, velayet, tazminat ve mal rejimi başlıklarıyla birlikte ele alınır. Bir Bursa aile hukuku avukatı ile yapılan ilk görüşmede genellikle bu başlıkların hangisinin dosyaya girip hangisinin ayrı bir davaya bırakılacağı belirlenir. Aile mahkemeleri özel görevli mahkemeler olduğundan, dosyanın doğru mahkemede açılması usul yönünden ilk şarttır.",
          "Yetki bakımından kural, eşlerden birinin yerleşim yeri veya davadan önce son defa altı aydan beri birlikte oturdukları yer mahkemesidir. Bursa'da bu dosyalar merkez adliyedeki aile mahkemelerinde görülür.",
          "Boşanmanın ötesindeki başlıkların kapsamını [Bursa aile hukuku hizmet sayfamızda](/calisma-alanlari/aile-hukuku) inceleyebilir; süreçlerin ayrıntısı için [Bursa aile hukuku avukatı rehberimize](/makaleler/bursa-aile-hukuku-avukati) bakabilirsiniz.",
        ],
      },
      {
        id: "bosanma-protokolu",
        heading: "Anlaşmalı Boşanma Protokolünde Neler Bulunur?",
        level: 2,
        paragraphs: [
          "Boşanma protokolü, anlaşmalı dosyanın belkemiğidir. Protokolde açık bırakılan her konu, ileride yeni bir davanın konusu olabilir. Bu nedenle metnin yalnızca 'anlaştık' beyanından değil, uygulanabilir ve ölçülebilir düzenlemelerden oluşması gerekir. Örneğin kişisel ilişki takviminin gün, saat ve teslim yeri belirtilerek yazılması, sonraki tartışmaları belirgin biçimde azaltır.",
        ],
        list: [
          "Boşanma iradesinin açık beyanı",
          "Velayet, kişisel ilişki takvimi ve tatil dönemlerine ilişkin düzenleme",
          "İştirak ve varsa yoksulluk nafakası; miktar ve ödeme biçimi",
          "Maddi ve manevi tazminat talepleri ya da bunlardan feragat",
          "Mal rejimi ve taşınmazlara ilişkin beyanlar",
          "Yargılama giderleri ve vekâlet ücretinin paylaşımı",
        ],
      },
      {
        id: "cekismeli-deliller",
        heading: "Çekişmeli Boşanmada Delillerin Önemi",
        level: 2,
        paragraphs: [
          "Çekişmeli dosyada iddia, ancak delille değer kazanır. Tanık beyanları, yazışma kayıtları, kamera görüntüleri, banka hareketleri, hastane ve kolluk kayıtları ile resmî yazışmalar sık kullanılan delillerdir. Delillerin dosyaya usulünce ve süresi içinde sunulması, içerikleri kadar önemlidir.",
          "Delilin hukuka uygun yolla elde edilmiş olması gerekir. Karşı tarafın rızası olmadan yapılan bazı kayıtlar hem değerlendirme dışı bırakılabilir hem de ayrı bir sorumluluk doğurabilir. Bu nedenle delil toplama aşamasında önceden hukuki değerlendirme yapılması yerinde olur.",
          "Ayrıca affedilen ya da hoşgörüyle karşılanan olaylara sonradan dayanılması güçleşir. Bu, dosyada hangi olayların ileri sürüleceğinin seçilmesini gerektiren teknik bir konudur.",
        ],
      },
      {
        id: "nafaka-velayet-tazminat",
        heading: "Nafaka, Velayet ve Tazminat Talepleri",
        level: 2,
        paragraphs: [
          "Nafakada tek bir tür yoktur: yargılama sürerken tedbir nafakası, çocuk için iştirak nafakası, boşanma nedeniyle yoksulluğa düşecek eş için yoksulluk nafakası gündeme gelebilir. Miktar belirlenirken tarafların geliri, çocuğun ihtiyaçları ve hakkaniyet gözetilir; sabit bir tarife bulunmaz. Bursa nafaka avukatı desteğiyle yürütülen dosyalarda hazırlık, gelir ve gider kalemlerinin belgelenmesiyle başlar.",
          "Velayette ölçüt çocuğun üstün yararıdır. Çocuğun yaşı, alışkın olduğu çevre, okul düzeni ve ebeveynlerin bakım imkânı birlikte değerlendirilir; sosyal inceleme raporu ve idrak çağındaki çocuğun dinlenmesi sık başvurulan yöntemlerdir. Bursa velayet avukatı ile çalışan tarafların çoğu, çocuğun günlük düzenine ilişkin somut bilgileri derleyerek başlar.",
          "Maddi ve manevi tazminat talepleri kusur değerlendirmesine bağlıdır. Kusuru daha ağır olan eşten, mevcut veya beklenen menfaatleri zedelenen eş lehine tazminat istenebilir; manevi tazminat ise kişilik haklarına saldırı bulunması hâlinde gündeme gelir.",
        ],
      },
      {
        id: "durusmaya-katilim",
        heading: "Duruşmaya Katılmak Gerekir mi?",
        level: 2,
        paragraphs: [
          "Anlaşmalı boşanmada hâkimin tarafları bizzat dinlemesi kural olarak arandığından eşlerin duruşmada hazır bulunması beklenir. Çekişmeli dosyalarda ise taraflar kural olarak vekilleri aracılığıyla temsil edilebilir; ancak mahkeme, tarafın beyanının alınmasını gerekli görürse bizzat katılım isteyebilir. Bu nedenle 'katılmak gerekmez' şeklinde kesin bir ifade kullanılamaz.",
          "Yurt dışında yaşayan eşler bakımından duruşma planlaması, vekâletnamenin içeriği ve tebligat süreleri ayrı bir hazırlık gerektirir. Bu başlığın ayrıntıları için [Bursa Gurbetçi Hukuk sayfamıza](/bursa-gurbetci-hukuk) ve [yurt dışından boşanma davası yazımıza](/makaleler/yurt-disindan-bosanma-davasi) bakabilirsiniz.",
        ],
      },
      {
        id: "surec-takibi",
        heading: "Bursa Boşanma Avukatı ile Süreç Takibi",
        level: 2,
        paragraphs: [
          "Boşanma dosyalarında en sık rastlanan sorun, hukuki bilgi eksikliği değil, sürelerin ve taleplerin yönetilememesidir. Cevap dilekçesi süresi, delil listesi süresi, tedbir taleplerinin zamanlaması ve kanun yolu süreleri birbirini etkiler. Bir Bursa avukat ile çalışmanın pratik faydası, bu takvimin dosyanın başında kurulmasıdır.",
          "Hiçbir avukat dava sonucunu ya da süresini taahhüt edemez; verilebilecek olan, dosyanın usulüne uygun, eksiksiz ve zamanında yürütülmesidir. Her dosya kendi delilleri ve koşulları içinde değerlendirilir. Görüşme için [iletişim sayfamızı](/iletisim) kullanabilirsiniz.",
        ],
      },
      {
        id: "osmangazi-yildirim-bosanma",
        heading: "Osmangazi ve Yıldırım'da Boşanma Davaları",
        level: 2,
        paragraphs: [
          "Bursa'da aile mahkemeleri merkez adliyede toplandığı için Osmangazi'de ya da Yıldırım'da ikamet eden tarafların dosyası çoğunlukla aynı adliyede görülür. Bu nedenle Osmangazi boşanma avukatı veya Yıldırım boşanma avukatı arayışındaki kişiler için belirleyici olan büronun semti değil, dosyanın hangi kapsamda takip edildiğidir.",
          "İlçe farkı daha çok idari işlemlerde kendini gösterir: nüfus müdürlüğü işlemleri, tebligat adresleri ve tapu başvuruları ilçeye bağlıdır. Taşınma hâlinde adres kaydının güncellenmesi, tebligatın gecikmemesi bakımından önemlidir.",
          "Büromuz Osmangazi'deki Avukatlar İşhanı'nda bulunmakta olup dosya takibi hem merkez adliye hem de ilgili kurumlar bakımından aynı çerçevede yürütülür.",
        ],
      },
    ],
    faqs: [
      {
        question: "Anlaşmalı boşanma tek duruşmada biter mi?",
        answer:
          "Çoğu dosyada süreç kısa sürer; ancak her koşulda tek duruşmada biteceği söylenemez. Hâkim protokolü çocuğun üstün yararı ve mali sonuçlar bakımından inceler, gerekirse değişiklik önerir. Tebligat, duruşma günü ve gerekçeli kararın yazılması gibi aşamalar da süreci etkiler.",
      },
      {
        question: "Çekişmeli boşanma davası ne kadar sürer?",
        answer:
          "Kesin bir tarih verilemez. Tanık sayısı, bilirkişi veya sosyal inceleme gereksinimi, tebligatların tamamlanması ve mahkemenin iş yoğunluğu süreyi doğrudan etkiler. Karara karşı kanun yoluna başvurulması hâlinde süreç uzayabilir.",
      },
      {
        question: "Anlaşmalı boşanma davası çekişmeliye dönebilir mi?",
        answer:
          "Evet. Eşlerden biri duruşmada iradesini geri alırsa ya da protokoldeki bir başlıkta anlaşma bozulursa dosya çekişmeli olarak yürür. Bu durumda dilekçeler, deliller ve talepler yeniden yapılandırılır.",
      },
      {
        question: "Boşanma protokolünde belirlenen nafaka sonradan değişir mi?",
        answer:
          "Koşullar esaslı biçimde değişirse nafakanın artırılması, azaltılması veya kaldırılması ayrı bir dava ile istenebilir. Protokolde yazılı olması, miktarın sonsuza kadar sabit kalacağı anlamına gelmez.",
      },
      {
        question: "Boşanma davasında hangi mahkeme yetkilidir?",
        answer:
          "Kural olarak eşlerden birinin yerleşim yeri ya da davadan önce son defa altı aydan beri birlikte oturdukları yer aile mahkemesi yetkilidir. Bursa'da bu dosyalar merkez adliyedeki aile mahkemelerinde görülür.",
      },
      {
        question: "Vekâletname ile boşanma davası açılabilir mi?",
        answer:
          "Usulüne uygun düzenlenmiş bir vekâletname ile dava açılabilir ve takip edilebilir. Anlaşmalı boşanmada ise hâkimin tarafları bizzat dinlemesi kural olarak arandığından yalnızca vekâletname yeterli olmaz.",
      },
    ],
    sources: [
      "4721 sayılı Türk Medeni Kanunu m. 166",
      "6100 sayılı Hukuk Muhakemeleri Kanunu",
      "4787 sayılı Aile Mahkemelerinin Kuruluş, Görev ve Yargılama Usullerine Dair Kanun",
    ],
    closingNote:
      "Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; hukuki tavsiye niteliği taşımaz, dava sonucu veya süresi konusunda taahhüt içermez. Her dosya kendi koşulları içinde değerlendirilir. Dosyanızı görüşmek için WhatsApp üzerinden yazabilir ya da iletişim sayfamızdan randevu talebi oluşturabilirsiniz.",
  },
  {
    slug: "bursa-ceza-avukati-sorusturma-kovusturma",
    title: "Bursa Ceza Avukatı: Soruşturma ve Kovuşturma Süreci Nasıl İlerler?",
    excerpt:
      "Ceza soruşturmasının başlamasından kovuşturmanın sonuçlanmasına kadar sürecin aşamaları; ifade, gözaltı, tutuklama ve delil değerlendirmesi ile Bursa'da ceza dosyalarının pratik işleyişi.",
    categorySlug: "ceza-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-03",
    readingMinutes: 11,
    relatedAreaSlug: "ceza-hukuku",
    metaTitle: "Bursa Ceza Avukatı | Soruşturma ve Ceza Davası",
    metaDescription:
      "Bursa ceza avukatı desteği, soruşturma, ifade, gözaltı ve ceza davası süreçleri hakkında bilgi alın. Osmangazi ve Yıldırım ceza hukuku.",
    status: "published",
    sections: [
      {
        id: "sorusturma-nedir",
        heading: "Ceza Soruşturması Nedir?",
        level: 2,
        paragraphs: [
          "Bursa ceza avukatı desteği çoğunlukla, kişinin bir suç şüphesiyle karşılaştığı ilk anda gündeme gelir. Bursa ceza hukuku uygulamasında sürecin iki büyük aşaması vardır: soruşturma ve kovuşturma. Soruşturma, bir suç şüphesinin öğrenilmesiyle başlayan ve iddianamenin kabulüne kadar süren aşamadır. Bu aşamayı Cumhuriyet savcısı yürütür; kolluk birimleri savcının talimatıyla hareket eder.",
          "Soruşturma bir şikâyet, ihbar, tutanak ya da savcılığın kendiliğinden öğrenmesiyle başlar. Amaç, maddi gerçeğin ortaya çıkarılmasıdır; yani şüphelinin lehine olan deliller de araştırılmak zorundadır. Soruşturma kural olarak gizlidir ve bu gizlilik dosyaya erişim bakımından belirli sınırlar getirir.",
          "Soruşturmanın sonunda savcı iki yoldan birini seçer: yeterli şüphe bulunmadığı kanaatine varırsa kovuşturmaya yer olmadığına dair karar verir; yeterli şüphe bulunduğunu değerlendirirse iddianame düzenler. Bu ayrım nedeniyle soruşturma aşaması, dosyanın seyri bakımından belirleyici olabilir; bu aşamada yapılan eksik veya yanlış beyanların sonradan düzeltilmesi güçleşir. Bu yazı belirli bir kişinin suçlu ya da suçsuz olduğuna dair bir değerlendirme içermez; suçsuzluk karinesi gereği kesinleşmiş mahkûmiyet olmadıkça kimse suçlu sayılamaz.",
        ],
      },
      {
        id: "kovusturma-nedir",
        heading: "Kovuşturma Aşaması Nedir?",
        level: 2,
        paragraphs: [
          "Kovuşturma, iddianamenin mahkeme tarafından kabul edilmesiyle başlar ve hükmün verilmesine kadar sürer. Bu aşamada dosya artık savcının değil, mahkemenin yönetimindedir. Duruşmalar yapılır, tanıklar dinlenir, belgeler okunur ve taraflar beyanlarını sunar.",
          "Kovuşturma aşamasında sanığın savunma hakkı en geniş biçimde kullanılır: tanık dinletme, bilirkişi incelemesi talep etme, delillerin toplanmasını isteme ve iddiaları çürütmeye yönelik belge sunma imkânı bulunur. Duruşmalar kural olarak açıktır; kanunda öngörülen hâllerde kapalı yapılabilir.",
          "Yargılamanın sonunda mahkûmiyet, beraat, ceza verilmesine yer olmadığı, düşme veya güvenlik tedbirine hükmedilmesi gibi kararlar verilebilir. Hükme karşı istinaf ve koşulları varsa temyiz yolu açıktır. Sürecin sonucu ve süresi her dosyanın kendi delil durumuna, tanık sayısına ve mahkemenin iş yüküne göre değişir; bu nedenle önceden sonuç ya da süre söylenemez.",
        ],
      },
      {
        id: "kavramlar",
        heading: "Şüpheli, Sanık, Müşteki ve Mağdur Kavramları",
        level: 2,
        paragraphs: [
          "Ceza sürecinde kişilerin sıfatı aşamaya göre değişir ve bu sıfat, sahip olunan hakları belirler. Teknik terimlerin sade karşılıkları şu şekildedir:",
        ],
        list: [
          "Şüpheli: soruşturma aşamasında suç işlediği şüphesiyle hakkında araştırma yapılan kişi",
          "Sanık: iddianamenin kabulünden hükmün kesinleşmesine kadar yargılanan kişi",
          "Müşteki (şikâyetçi): suçtan zarar gördüğünü belirterek şikâyette bulunan kişi",
          "Mağdur: suçtan doğrudan zarar gören kişi",
          "Katılan: kovuşturma aşamasında davaya katılma talebi kabul edilen mağdur veya şikâyetçi",
        ],
      },
      {
        id: "ifade-alma",
        heading: "İfade Alma Sürecinde Nelere Dikkat Edilir?",
        level: 2,
        paragraphs: [
          "İfade, dosyanın en kritik belgelerinden biridir; çünkü sonraki tüm aşamalarda dayanak olarak kullanılır. İfade alınmadan önce kişiye hangi suçtan dolayı işlem yapıldığı bildirilmeli, müdafi yardımından yararlanma hakkı hatırlatılmalı, susma hakkı ve şüpheden kurtulmak için somut delillerin toplanmasını isteme hakkı açıklanmalıdır.",
          "Uygulamada en sık yapılan hata, hazırlıksız ve baskı hissiyle verilen beyanların sonradan düzeltilmeye çalışılmasıdır. İfade tutanağı imzalanmadan önce dikkatle okunmalı; beyanla uyuşmayan ifadeler düzeltilmeli, tutanağa geçmeyen açıklamaların eklenmesi istenmelidir. Bursa ifade avukatı desteği arayan kişiler bakımından en somut fayda, ifade öncesinde hukuki çerçevenin netleştirilmesidir.",
          "Susma hakkının kullanılması bir suç ikrarı değildir ve aleyhe delil olarak değerlendirilemez. Aynı şekilde müdafi talebinin karşılanmasını beklemek de kişinin hakkıdır.",
        ],
        list: [
          "Hangi suç şüphesiyle işlem yapıldığının öğrenilmesi",
          "Müdafi yardımından yararlanma hakkının kullanılması",
          "Susma hakkının bilinmesi ve baskı altında beyan verilmemesi",
          "Tutanağın imza öncesinde okunması ve düzeltmelerin istenmesi",
          "Lehe delillerin toplanmasının talep edilmesi",
        ],
      },
      {
        id: "gozalti-tutuklama",
        heading: "Gözaltı ve Tutuklama Tedbirleri",
        level: 2,
        paragraphs: [
          "Gözaltı, soruşturmanın gerektirdiği hâllerde kişinin özgürlüğünün geçici olarak kısıtlanmasıdır. Yakalanan kişinin yakınlarına bilgi verilmesi, sağlık kontrolünün yapılması ve müdafi ile görüşme imkânının sağlanması usulün parçasıdır. Gözaltı süresine ilişkin sınırlar kanunda düzenlenmiştir ve suç ile yakalama biçimine göre farklılaşabilir.",
          "Tutuklama ise bir ceza değil, koruma tedbiridir. Hâkim; kuvvetli suç şüphesinin varlığını gösteren somut delillerin bulunmasını, kaçma ya da delilleri karartma şüphesi gibi bir tutuklama nedeninin olmasını ve tedbirin ölçülü olmasını değerlendirir. Adlî kontrol, tutuklamaya alternatif olarak uygulanabilir.",
          "Tutuklama kararına itiraz edilebilir, tahliye talebinde bulunulabilir ve tutukluluk durumu belirli aralıklarla yeniden incelenir. Bu yazıda hiçbir dosya için tutuklama, tahliye ya da beraat sonucuna ilişkin bir öngörüde bulunulamaz; kararı yalnızca dosyayı inceleyen yargı mercii verir. Bursa gözaltı avukatı desteğinin işlevi, tedbirlere karşı kanun yollarının süresi içinde ve gerekçeli biçimde kullanılmasıdır.",
        ],
      },
      {
        id: "deliller",
        heading: "Deliller Ceza Davasını Nasıl Etkiler?",
        level: 2,
        paragraphs: [
          "Ceza yargılamasında hâkim, delilleri serbestçe değerlendirir; ancak bu serbestlik sınırsız değildir. Hukuka aykırı yolla elde edilen deliller hükme esas alınamaz. Bu ilke, arama, el koyma ve teknik takip gibi işlemlerin usulüne uygun yapılıp yapılmadığının incelenmesini gerektirir.",
          "Uygulamada tanık beyanları, kamera görüntüleri, iletişim ve dijital kayıtlar, bilirkişi raporları, olay yeri inceleme tutanakları ve adli tıp raporları sık kullanılan delil türleridir. Dijital delillerde imaj alma ve inceleme usulünün doğruluğu ayrıca tartışma konusu olabilir.",
          "Delil değerlendirmesi tümüyle dosyaya özgüdür. Benzer görünen iki dosyada, delillerin niteliği ve elde edilme biçimi farklı olduğu için sonuç da farklılaşabilir. Bu nedenle ceza yargılamasında genel tahminler yerine dosya bazlı inceleme esastır.",
        ],
      },
      {
        id: "agir-ceza",
        heading: "Ağır Ceza Mahkemelerinde Görülen Davalar",
        level: 2,
        paragraphs: [
          "Ağır ceza mahkemeleri, kanunda belirtilen ağırlıktaki suçlara ilişkin yargılamayı yapar. Kasten öldürme, nitelikli yağma, uyuşturucu madde imal ve ticareti, nitelikli dolandırıcılık ile örgütlü suçlar bu kapsamda değerlendirilebilir. Diğer dosyalar kural olarak asliye ceza mahkemesinde görülür.",
          "Ağır ceza dosyalarının farkı yalnızca öngörülen ceza miktarında değildir; delil hacmi genellikle daha büyük, tanık sayısı daha fazla ve teknik rapor ihtiyacı daha yüksektir. Bu dosyalarda zorunlu müdafilik uygulaması da gündeme gelir. Bursa ağır ceza hukuku dosyalarında hazırlığın erken başlatılması, savunmanın delil düzeninde kurulmasını kolaylaştırır.",
        ],
      },
      {
        id: "avukat-destegi-kapsami",
        heading: "Bursa Ceza Avukatı Desteğinin Kapsamı",
        level: 2,
        paragraphs: [
          "Ceza dosyalarında avukatın işlevi, sürecin her aşamasında usulün ve savunma haklarının işletilmesidir. Bu; ifade öncesinde bilgilendirme, dosya inceleme, lehe delillerin toplanmasını talep etme, tedbirlere itiraz, iddianameye karşı savunma hazırlığı ve kanun yolu başvurularını kapsar. Müşteki ve mağdur bakımından da vekil desteği mümkündür; delil sunma ve davaya katılma talepleri bu kapsamda yürütülür.",
          "Bir Bursa hukuk bürosu ile çalışmanın somut faydası süre yönetimidir. Şikâyet süresi, itiraz süresi ve kanun yolu süreleri kaçırıldığında hak kaybı doğar. Buna karşılık hiçbir avukat tutuklama, tahliye, beraat ya da ceza miktarı konusunda taahhüt veremez; verilebilecek olan dosyanın hukuka uygun ve eksiksiz takibidir.",
          "Çalışma alanının kapsamını [Bursa ceza hukuku sayfamızda](/calisma-alanlari/ceza-hukuku) inceleyebilir, soruşturmada ifade ve haklar konusundaki ayrıntılar için [ilgili makalemize](/makaleler/sorusturma-asamasinda-ifade) bakabilirsiniz. Görüşme için [iletişim sayfamızı](/iletisim) kullanabilirsiniz.",
        ],
      },
      {
        id: "osmangazi-yildirim-ceza",
        heading: "Osmangazi ve Yıldırım'da Ceza Hukuku Süreçleri",
        level: 2,
        paragraphs: [
          "Ceza yargılamasında yetkili mahkeme kural olarak suçun işlendiği yer mahkemesidir. Bursa'da asliye ve ağır ceza mahkemeleri merkez adliyede bulunduğundan, olay Osmangazi'de ya da Yıldırım'da gerçekleşse de dosya aynı adliyede görülür. Bu nedenle Osmangazi ceza avukatı veya Yıldırım ceza avukatı arayışındaki kişiler için belirleyici ölçüt, büronun semti değil dosyanın hangi aşamada ve hangi kapsamda takip edildiğidir.",
          "İlçe farkının hissedildiği nokta soruşturmanın ilk aşamasıdır: ifade işlemleri çoğunlukla olayın gerçekleştiği yerdeki kolluk biriminde yapılır. İşlem yerinin bilinmesi, müdafi ile hızlı iletişim kurulması bakımından önemlidir.",
          "Büromuz Osmangazi'deki Avukatlar İşhanı'nda bulunmakta; soruşturma ve kovuşturma aşamalarının takibi merkez adliye ve ilgili kolluk birimleri bakımından aynı çerçevede yürütülmektedir.",
        ],
      },
    ],
    faqs: [
      {
        question: "İfadeye çağrıldım, avukat olmadan gitmem sorun olur mu?",
        answer:
          "İfade sırasında müdafi yardımından yararlanmak bir haktır ve kullanılması tavsiye edilir. Zorunlu müdafilik hâlleri dışında avukat olmadan ifade vermek mümkündür; ancak ifadenin sonraki aşamalarda dayanak olarak kullanılacağı düşünüldüğünde, hukuki çerçevenin önceden netleştirilmesi yararlıdır. Susma hakkınızı kullanmanız aleyhinize delil sayılmaz.",
      },
      {
        question: "Soruşturma dosyasını inceleyebilir miyim?",
        answer:
          "Soruşturma kural olarak gizlidir; ancak müdafi, kanunda öngörülen sınırlar çerçevesinde dosya içeriğini inceleyebilir ve belgelerden örnek alabilir. Savcılığın talebi ve hâkim kararıyla bu yetki bazı hâllerde geçici olarak kısıtlanabilir.",
      },
      {
        question: "Tutuklama kararına karşı ne yapılabilir?",
        answer:
          "Tutuklama kararına süresi içinde itiraz edilebilir, ayrıca tahliye talebinde bulunulabilir ve tutukluluk durumu belirli aralıklarla yeniden değerlendirilir. Sonuç, dosyadaki delil durumuna ve tutuklama nedenlerinin devam edip etmediğine göre yargı mercii tarafından belirlenir; önceden bir garanti verilemez.",
      },
      {
        question: "Kovuşturmaya yer olmadığına dair karar kesin midir?",
        answer:
          "Bu karara karşı süresi içinde itiraz yolu bulunur. İtirazın kabulü hâlinde soruşturma genişletilebilir veya iddianame düzenlenmesi gündeme gelebilir. Ayrıca yeni delil ortaya çıkarsa soruşturmanın yeniden açılması mümkündür.",
      },
      {
        question: "Ceza davası ne kadar sürer?",
        answer:
          "Kesin bir süre söylenemez. Tanık sayısı, bilirkişi raporu ihtiyacı, dosyanın hacmi, mahkemenin iş yoğunluğu ve kanun yoluna başvurulup başvurulmaması süreyi doğrudan etkiler. Her dosya kendi koşulları içinde değerlendirilir.",
      },
      {
        question: "Şikâyetçi olarak da avukatla temsil edilebilir miyim?",
        answer:
          "Evet. Müşteki ve mağdur bakımından da vekil desteği mümkündür. Delil sunma, dosyayı takip etme, davaya katılma talebinde bulunma ve kanun yollarına başvurma bu kapsamda yürütülür.",
      },
    ],
    sources: [
      "5271 sayılı Ceza Muhakemesi Kanunu",
      "5237 sayılı Türk Ceza Kanunu",
      "Türkiye Cumhuriyeti Anayasası m. 38",
    ],
    closingNote:
      "Bu yazı genel bilgilendirme amacıyla hazırlanmıştır; hukuki tavsiye niteliği taşımaz, herhangi bir kişinin suçlu veya suçsuz olduğuna dair değerlendirme içermez ve tutuklama, tahliye, beraat ya da ceza miktarı konusunda taahhüt sunmaz. Ceza yargılaması her dosyanın kendi delil durumuna göre değişir; kendi durumunuz için bir avukatla görüşmeniz gerekir.",
  },
];

export const articles: Article[] = [...coreArticles, ...seoPackArticles];



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
