import type { Faq } from "@/data/faqs";

export interface HubStep {
  title: string;
  text: string;
}

export interface HubSection {
  /** Sayfa içi bağlantı kimliği (#id). */
  id: "vekaletname" | "miras" | "bosanma" | "askerlik";
  navLabel: string;
  icon: "file-signature" | "scroll-text" | "heart-crack" | "shield-check";
  title: string;
  subtitle: string;
  description: string;
  stepsTitle: string;
  steps: HubStep[];
  /** Yalnızca vekâletname bölümünde kullanılan hizmet listesi. */
  serviceListTitle?: string;
  serviceList?: string[];
  faqs: Faq[];
}

export const hubTrustPoints = [
  "Randevu ile ön görüşme imkânı",
  "WhatsApp veya Zoom üzerinden iletişim",
  "Zaman farkına uygun görüşme planlaması",
  "Meslek sırrı ve gizlilik esası",
] as const;

export const hubWhatsappMessage =
  "Merhaba, yurt dışında yaşıyorum. Türkiye'deki hukuki işlemim hakkında ön görüşme talep ediyorum.";

export const hubSections: HubSection[] = [
  {
    id: "vekaletname",
    navLabel: "Konsolosluk Vekâletnamesi",
    icon: "file-signature",
    title: "Konsolosluk Vekâletnamesi Nasıl Çıkarılır?",
    subtitle: "Türkiye'ye gelmeden işlemlerinizi başlatın",
    description:
      "Yurt dışında yaşayan birçok vatandaşımız; miras, tapu, boşanma veya dava takibi gibi işlemleri Türkiye'ye gelemediği için erteliyor. Oysa konsolosluk vekâletnamesi ile bu işlemler Türkiye'de tarafımızca takip edilebilir. Yurt dışında yaşayan Türkler için avukat desteğinin ilk adımı, yapılacak işleme uygun kapsamda düzenlenmiş bir vekâletnamedir.",
    stepsTitle: "Adım adım süreç",
    steps: [
      {
        title: "Konsolosluk randevusu alın",
        text: "Bulunduğunuz ülkedeki Türk konsolosluğunun çevrim içi randevu sistemi üzerinden vekâletname işlemi için randevu alınır. Randevu süresi ülkeye ve konsolosluğun yoğunluğuna göre değişebilir.",
      },
      {
        title: "Vekâletnamenin kapsamını belirleyin",
        text: "Vekâletnamenin hangi işlem için düzenleneceği önceden netleştirilmelidir. Gerekli kapsam tarafımızca değerlendirilir ve konsolosluğa götürülecek metin hazırlanır.",
      },
      {
        title: "Gerekli belgelerle konsolosluğa gidin",
        text: "Kimlik veya pasaportla konsolosluğa başvurulur. İşlemin niteliğine göre vekâlet verilecek avukatın kimlik ve büro bilgileri de gerekli olabilir.",
      },
      {
        title: "Vekâletnameyi tarafımıza ulaştırın",
        text: "Konsolosluk tarafından düzenlenen vekâletnamenin okunabilir bir kopyası ön inceleme için e-posta veya WhatsApp üzerinden iletilebilir. Resmî işlem için belgenin aslının gerekip gerekmediği ayrıca bildirilir.",
      },
    ],
    serviceListTitle: "Bu süreçte neler yapıyoruz?",
    serviceList: [
      "Yapılacak işleme uygun vekâletname metnini hazırlarız.",
      "Konsolosluk sürecindeki sorularınızı WhatsApp üzerinden yanıtlarız.",
      "Gerekli vekâletname ulaştığında Türkiye'deki işlemleri başlatırız.",
      "Süreçteki gelişmeleri düzenli olarak yazılı şekilde paylaşırız.",
    ],
    faqs: [
      {
        question: "Vekâletname olmadan süreç başlatılabilir mi?",
        answer:
          "Dosya araştırması, belge incelemesi ve danışmanlık gibi bazı ön çalışmalar vekâletname olmadan yapılabilir. Dava açılması, tapu işlemi veya kurumlar nezdinde temsil gibi resmî işlemler için ise uygun vekâletname gerekir.",
      },
      {
        question: "Vekâletname masrafı ne kadardır?",
        answer:
          "Konsolosluk harç ve işlem ücretleri ülkeye ve işlemin kapsamına göre değişebilir. Güncel tutar doğrudan ilgili konsolosluktan öğrenilmelidir. Avukatlık ücreti ise işin kapsamı değerlendirildikten sonra ayrıca belirlenir.",
      },
      {
        question: "Türkiye'deki işlem ne zaman başlar?",
        answer:
          "Gerekli belgelerin ve usulüne uygun vekâletnamenin tarafımıza ulaşmasının ardından dosya incelenir ve mümkün olan en kısa sürede işleme başlanır.",
      },
    ],
  },
  {
    id: "miras",
    navLabel: "Yurt Dışından Miras İşlemleri",
    icon: "scroll-text",
    title: "Yurt Dışından Miras İşlemleri",
    subtitle: "Türkiye'deki mirasınızı uzaktan takip edin",
    description:
      "Türkiye'de vefat eden bir yakınınızdan miras kaldıysa, mirasçı olarak işlemleri takip edebilmek için her durumda Türkiye'ye gelmeniz gerekmez. Uygun vekâletnameyle tapu kayıtları, banka hesapları ve mirasa konu diğer mal varlığına ilişkin işlemler tarafımızca takip edilebilir.",
    stepsTitle: "Süreç nasıl işler?",
    steps: [
      {
        title: "Miras durumunun tespiti",
        text: "Mirasçılık belgesi, diğer adıyla veraset ilamı, temin edilir ve mirasa konu olabilecek mal varlığı araştırılır.",
      },
      {
        title: "Mirasçılar arasındaki durumun değerlendirilmesi",
        text: "Mirasçılar arasında anlaşma bulunuyorsa paylaşım seçenekleri değerlendirilir. Anlaşma bulunmuyorsa izlenebilecek dava yolları belirlenir.",
      },
      {
        title: "Tapu ve banka işlemleri",
        text: "Gerekli şartların sağlanması hâlinde taşınmazların mirasçılar adına tescili ve banka hesaplarına ilişkin işlemler vekâletnameyle takip edilir.",
      },
      {
        title: "Anlaşmazlık hâlinde dava süreci",
        text: "Mirasçılar arasında uyuşmazlık bulunması hâlinde gerekli dava süreci başlatılabilir ve vekâletname kapsamında takip edilebilir.",
      },
    ],
    serviceListTitle: "Bu süreçte neler yapıyoruz?",
    serviceList: [
      "Mirasçılık belgesi ve tapu kayıtlarına ilişkin araştırmaları yürütürüz.",
      "Mirasa konu taşınmaz ve banka işlemlerini vekâletname kapsamında takip ederiz.",
      "Mirasçılar arasındaki görüşmelerde yazışmaları düzenli biçimde yönetiriz.",
      "Dava gerekmesi hâlinde yurt dışından Türkiye'de dava takibini üstleniriz.",
    ],
    faqs: [
      {
        question: "Mirası reddetmek istersem ne yapmam gerekir?",
        answer:
          "Mirasın reddi süreye bağlı bir işlemdir. Genel olarak yasal süre, mirasçının ölümü veya mirasçılık durumunu öğrendiği tarihe göre değerlendirilir. Somut olayın tarihleri vakit kaybetmeden incelenmelidir. İşlemin vekâletnameyle veya konsolosluk üzerinden yürütülüp yürütülemeyeceği kişisel duruma göre belirlenir.",
      },
      {
        question: "Diğer mirasçılarla anlaşamazsak ne olur?",
        answer:
          "Mirasın paylaşılması konusunda anlaşma sağlanamıyorsa ortaklığın giderilmesi davası veya somut olaya uygun diğer hukuki yollar değerlendirilebilir. Çoğu işlem avukat aracılığıyla takip edilebilir.",
      },
      {
        question: "Süreç ne kadar sürer?",
        answer:
          "Anlaşmalı işlemler daha kısa sürede tamamlanabilir. Dava gereken durumlarda süre; mahkemenin iş yoğunluğuna, taraf sayısına, mal varlığının kapsamına ve dosyanın niteliğine göre değişir.",
      },
    ],
  },
  {
    id: "bosanma",
    navLabel: "Yurt Dışından Boşanma Davası",
    icon: "heart-crack",
    title: "Yurt Dışından Boşanma Davası",
    subtitle: "Eşlerden biri Türkiye'de, diğeri Avrupa'da olsa bile",
    description:
      "Türkiye'de boşanma davası açmak veya devam eden bir davayı takip etmek için her aşamada Türkiye'de bulunmanız gerekmeyebilir. Uygun vekâletnameyle dava ve sonrasındaki işlemler avukat aracılığıyla takip edilebilir.",
    stepsTitle: "Süreç nasıl işler?",
    steps: [
      {
        title: "Anlaşmalı veya çekişmeli dava değerlendirmesi",
        text: "Eşlerin boşanma ile nafaka, velayet, tazminat ve mal paylaşımı gibi sonuçlar üzerinde anlaşmaya varıp varmadığı değerlendirilir.",
      },
      {
        title: "Anlaşmalı boşanma protokolü",
        text: "Tarafların mutabık kaldığı hususları içeren anlaşmalı boşanma protokolü hazırlanır. Duruşmaya kişisel katılım gerekip gerekmediği mahkeme uygulaması ve dosyanın şartlarına göre ayrıca değerlendirilir.",
      },
      {
        title: "Çekişmeli boşanma süreci",
        text: "Anlaşma bulunmaması hâlinde iddialar, deliller, tanıklar ve talepler değerlendirilerek dava süreci takip edilir.",
      },
      {
        title: "Karar ve kesinleşme işlemleri",
        text: "Mahkeme kararının kesinleşme süreci ve gerekli nüfus kayıt işlemleri takip edilir.",
      },
    ],
    serviceListTitle: "Bu süreçte neler yapıyoruz?",
    serviceList: [
      "Anlaşmalı boşanma protokolünü ve dava dilekçelerini hazırlarız.",
      "Duruşmaları ve ara kararları takip ederek gelişmeleri yazılı olarak bildiririz.",
      "Nafaka, velayet ve mal paylaşımı taleplerini dosya kapsamında değerlendiririz.",
      "Karar sonrası kesinleşme ve nüfus kaydı işlemlerini yürütürüz.",
    ],
    faqs: [
      {
        question: "Duruşmaya mutlaka katılmam gerekir mi?",
        answer:
          "Bu durum davanın türüne, mahkemenin değerlendirmesine ve yapılacak işleme göre değişebilir. Avukatınız birçok işlemi vekâletnameyle takip edebilir; ancak özellikle anlaşmalı boşanma gibi bazı durumlarda tarafların dinlenmesi gerekebilir. Dosyanıza ilişkin gereklilik ön görüşmede açıklanır.",
      },
      {
        question: "Eşim Türkiye'de, ben Avrupa'dayım. Dava nerede açılır?",
        answer:
          "Yetkili mahkeme; tarafların yerleşim yeri, son ortak yerleşim yeri ve somut olayın diğer özelliklerine göre belirlenir. İlk görüşmede kişisel durumunuza göre değerlendirme yapılır.",
      },
      {
        question: "Nafaka ve velayet de bu süreçte belirlenir mi?",
        answer:
          "Anlaşmalı boşanmada tarafların uzlaştığı hususlar protokolde düzenlenir. Çekişmeli boşanmada ise nafaka, velayet ve diğer talepler mahkeme tarafından dosya kapsamında değerlendirilir.",
      },
    ],
  },
  {
    id: "askerlik",
    navLabel: "Askerlik ve Diğer İşlemler",
    icon: "shield-check",
    title: "Askerlik Erteleme ve Diğer İşlemler",
    subtitle: "Yurt dışında ikamet eden vatandaşlarımız için",
    description:
      "Yurt dışında yaşayan vatandaşlarımızın askerlik erteleme, dövizle askerlik, bedelli askerlik ve kişisel durumlarına göre gündeme gelebilecek diğer askerlik işlemlerine ilişkin başvuru şartları değerlendirilir. Şartlar güncel mevzuata ve kişisel duruma göre değişebildiği için bilgiler görüşmede dosyanıza özgü olarak ele alınır.",
    stepsTitle: "Süreç nasıl işler?",
    steps: [
      {
        title: "İkamet ve çalışma durumunun kontrolü",
        text: "Başvurucunun ikamet ettiği ülke, yurt dışında bulunduğu süre, çalışma durumu ve mevcut askerlik statüsü incelenir.",
      },
      {
        title: "Başvuru yönteminin belirlenmesi",
        text: "İşlemin konsolosluk, e-Devlet veya ilgili askerlik birimi üzerinden yürütülüp yürütülemeyeceği belirlenir ve gerekli belgeler kontrol edilir.",
      },
      {
        title: "Askerlik seçeneklerinin değerlendirilmesi",
        text: "Erteleme, dövizle askerlik, bedelli askerlik veya somut duruma uygun diğer seçenekler güncel mevzuat ve kişinin şartları çerçevesinde değerlendirilir.",
      },
      {
        title: "Takip ve bilgilendirme",
        text: "Başvurunun sonucu, eksik belgeler ve gerçekleştirilmesi gereken sonraki adımlar düzenli olarak başvurucuya bildirilir.",
      },
    ],
    serviceListTitle: "Bu süreçte neler yapıyoruz?",
    serviceList: [
      "Mevcut askerlik statünüzü ve belgelerinizi birlikte gözden geçiririz.",
      "Başvurunun hangi kurum veya konsolosluk üzerinden yapılabileceğini araştırırız.",
      "Güncel mevzuata göre seçenekleri ve olası riskleri açık biçimde anlatırız.",
      "Süre ve belge takibini yaparak eksikleri zamanında bildiririz.",
    ],
    faqs: [
      {
        question: "Kaç yıl yurt dışında kalmam erteleme için yeterlidir?",
        answer:
          "Gerekli süre ve şartlar başvuru türüne, ikamet veya çalışma durumuna ve güncel mevzuata göre değişebilir. Kişisel durumunuz ve belgeleriniz incelenmeden kesin süre belirtilmez.",
      },
      {
        question: "Erteleme süresi dolarsa ne yapmalıyım?",
        answer:
          "Mevcut askerlik durumunun ve sürelerin, erteleme sona ermeden önce kontrol edilmesi önemlidir. Yenileme veya farklı bir başvuru gerekip gerekmediği kişisel duruma göre değerlendirilir.",
      },
      {
        question: "İşlemleri Türkiye'ye gelmeden takip edebilir miyim?",
        answer:
          "Başvuruların bir kısmı konsolosluk veya e-Devlet üzerinden yapılabilir; Türkiye'de yürütülmesi gereken işlemler ise kapsamı uygun bir vekâletnameyle avukat aracılığıyla takip edilebilir. Hangi yolun mümkün olduğu, başvuru türüne ve o dönemde geçerli konsolosluk uygulamasına göre değişebilir.",
      },
    ],
  },
];

export const hubStartSteps: HubStep[] = [
  {
    title: "Durumunuzu paylaşın",
    text: "WhatsApp üzerinden hangi ülkede yaşadığınızı ve Türkiye'de takip edilmesini istediğiniz işlemi kısaca anlatın.",
  },
  {
    title: "Ön görüşme planlayın",
    text: "Uygunluk durumuna göre WhatsApp veya Zoom üzerinden bir ön görüşme planlanır.",
  },
  {
    title: "Belgeleri ve vekâletnameyi netleştirin",
    text: "Gerekli belgeler, vekâletnamenin kapsamı ve konsoloslukta yapılacak işlemler belirlenir.",
  },
  {
    title: "Türkiye'deki işlemleri başlatın",
    text: "Gerekli belgeler ve uygun vekâletname ulaştığında Türkiye'deki hukuki süreç başlatılır.",
  },
];

export const hubSubjects = [
  "Vekâletname",
  "Miras",
  "Boşanma",
  "Tapu veya taşınmaz",
  "Dava takibi",
  "Askerlik",
  "Diğer",
] as const;

export const hubNotice =
  "Bu sayfadaki açıklamalar genel bilgilendirme amaçlıdır. Her hukuki süreç kendi koşulları içerisinde değerlendirilmelidir. Somut durumunuza ilişkin bilgi almak için doğrudan hukuki görüşme talep edebilirsiniz.";

export const hubFaqs: Faq[] = hubSections.flatMap((s) => s.faqs);
