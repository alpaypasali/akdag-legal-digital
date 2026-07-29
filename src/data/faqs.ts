export interface Faq {
  question: string;
  answer: string;
}

/**
 * Genel sıkça sorulan sorular (SSS sayfası ve ana sayfa için).
 * Yanıtlar genel bilgilendirme amaçlıdır; hukuki tavsiye niteliği taşımaz.
 */
export const generalFaqs: Faq[] = [
  {
    question: "Bursa'da avukatlık hizmetinizden hangi ilçelerde yararlanabilirim?",
    answer:
      "Büro Bursa Osmangazi'de bulunmakla birlikte, Nilüfer, Yıldırım, Gemlik, İnegöl ve Mudanya başta olmak üzere Bursa genelindeki adliyelerde dosya takibi yapılmaktadır. Bursa dışındaki dosyalar da talebe göre değerlendirilir.",
  },
  {
    question: "Avukatla görüşme için randevu nasıl alınır?",
    answer:
      "İletişim sayfasındaki form doldurularak veya büroya doğrudan ulaşılarak randevu talebi iletilebilir. Talepler mesai saatleri içinde değerlendirilir ve uygun görüşme zamanı paylaşılır.",
  },
  {
    question: "İlk görüşmeye hangi belgelerle gelmeliyim?",
    answer:
      "Uyuşmazlığa ilişkin sözleşme, tebligat, dava dilekçesi, yazışma, fatura ve varsa mahkeme kararı gibi belgelerin görüşmeye getirilmesi, hukuki durumun daha hızlı ve doğru değerlendirilmesini sağlar.",
  },
  {
    question: "Avukatlık ücreti nasıl belirlenir?",
    answer:
      "Ücret; işin kapsamı, süresi ve niteliği dikkate alınarak Avukatlık Asgari Ücret Tarifesi ve Bursa Barosu tavsiye tarifesi çerçevesinde belirlenir. Ücret ve kapsam, iş kabulünden önce yazılı olarak avukatlık sözleşmesinde açıkça düzenlenir.",
  },
  {
    question: "Paylaştığım bilgiler gizli kalır mı?",
    answer:
      "Evet. Avukatlık Kanunu uyarınca müvekkil ile paylaşılan tüm bilgiler meslek sırrı kapsamındadır. Görüşme sonucunda vekâlet ilişkisi kurulmasa dahi gizlilik yükümlülüğü devam eder.",
  },
  {
    question: "Dava süreci ne kadar sürer?",
    answer:
      "Süre; uyuşmazlığın türüne, delil durumuna, bilirkişi incelemesi ihtiyacına ve mahkemenin iş yoğunluğuna göre değişir. Görüşmede dosyanız için gerçekçi bir zaman aralığı paylaşılır; kesin süre taahhüdü verilmez.",
  },
  {
    question: "Şehir dışından veya yurt dışından vekâlet verebilir miyim?",
    answer:
      "Evet. Bulunduğunuz yerdeki notere veya yurt dışında Türk konsolosluğuna başvurarak vekâletname düzenletebilirsiniz. Süreç, elektronik ortamda ve telefonla düzenli bilgilendirme yapılarak yürütülür.",
  },
];

/** Çalışma alanı bazlı SSS: anahtar = çalışma alanı slug'ı */
export const areaFaqs: Record<string, Faq[]> = {
  "aile-hukuku": [
    {
      question: "Bursa'da anlaşmalı boşanma ne kadar sürer?",
      answer:
        "Tarafların boşanma, velayet, nafaka ve mal paylaşımı konularında hazırladıkları protokolde uzlaşması hâlinde süreç genellikle tek duruşmada tamamlanır. Duruşma günü, ilgili aile mahkemesinin iş yoğunluğuna göre belirlenir.",
    },
    {
      question: "Velayet kararı sonradan değiştirilebilir mi?",
      answer:
        "Evet. Çocuğun üstün yararını etkileyen koşullar değiştiğinde velayetin değiştirilmesi davası açılabilir. Mahkeme, sosyal inceleme raporu ve delilleri birlikte değerlendirir.",
    },
    {
      question: "Nafaka miktarı hangi ölçütlere göre belirlenir?",
      answer:
        "Tarafların gelir durumu, çocuğun yaşı ve ihtiyaçları ile ekonomik koşullar dikkate alınır. Koşulların değişmesi hâlinde nafakanın artırılması veya azaltılması talep edilebilir.",
    },
  ],
  "ceza-hukuku": [
    {
      question: "Kolluk ifadesinde avukat bulundurmak zorunlu mu?",
      answer:
        "Kanunun zorunlu müdafilik öngördüğü hâller dışında zorunlu değildir; ancak ifade, dosyanın seyrini belirleyen ilk aşamadır. Bu nedenle ifade öncesinde hukuki destek alınması önerilir.",
    },
    {
      question: "Şikâyetten vazgeçilirse dosya düşer mi?",
      answer:
        "Yalnızca takibi şikâyete bağlı suçlarda vazgeçme sonuç doğurur. Resen soruşturulan suçlarda soruşturma ve kovuşturma şikâyetten bağımsız olarak devam eder.",
    },
    {
      question: "Müşteki vekilliği ile sanık müdafiliği arasındaki fark nedir?",
      answer:
        "Müşteki vekili suçtan zarar göreni temsil ederek delillerin toplanmasını ve zararın giderilmesini takip eder; müdafi ise şüpheli veya sanığın savunmasını hazırlar ve haklarını korur.",
    },
  ],
  "is-hukuku": [
    {
      question: "İşe iade davası için süre sınırı nedir?",
      answer:
        "Fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulması, anlaşma sağlanamazsa son tutanağın düzenlendiği tarihten itibaren iki hafta içinde dava açılması gerekir.",
    },
    {
      question: "Kıdem tazminatına hangi hâllerde hak kazanılır?",
      answer:
        "En az bir yıllık kıdem şartıyla; işverence haklı neden olmaksızın fesih, işçinin haklı nedenle feshi, askerlik, emeklilik ve kadın işçi bakımından evlilik gibi kanunda sayılan hâllerde hak doğar.",
    },
    {
      question: "Fazla mesai alacağı nasıl ispatlanır?",
      answer:
        "Puantaj kayıtları, giriş-çıkış kayıtları, banka ödemeleri ve tanık beyanları başlıca delillerdir. Yazılı kayıt bulunmadığında tanık anlatımları hakkaniyet indirimiyle birlikte değerlendirilir.",
    },
  ],
  "gayrimenkul-ve-kira-hukuku": [
    {
      question: "Kiracı hangi hâllerde tahliye edilebilir?",
      answer:
        "İhtiyaç nedeniyle tahliye, yeniden inşa, iki haklı ihtar, tahliye taahhüdü ve kira bedelinin ödenmemesi gibi kanunda sayılan sebeplerle tahliye talep edilebilir. Her sebep için farklı süre ve usul kuralları geçerlidir.",
    },
    {
      question: "Kira artış oranı nasıl belirlenir?",
      answer:
        "Sözleşmede kararlaştırılan oran, bir önceki kira yılına ait on iki aylık TÜFE ortalamasını aşamaz. Beş yıldan uzun süren kira ilişkilerinde uyarlama davası gündeme gelebilir.",
    },
    {
      question: "Tapu iptali ve tescil davası nerede açılır?",
      answer:
        "Taşınmazın bulunduğu yer mahkemesi kesin yetkilidir. Bursa'daki taşınmazlar için dava, taşınmazın bağlı olduğu Bursa mahkemelerinde görülür.",
    },
  ],
  "ticaret-ve-sirketler-hukuku": [
    {
      question: "Ticari uyuşmazlıklarda arabuluculuk zorunlu mu?",
      answer:
        "Konusu para alacağı ve tazminat talebi olan ticari davalarda arabuluculuk dava şartıdır. Bu başvuru yapılmadan açılan dava usulden reddedilir.",
    },
    {
      question: "Şirket kuruluşunda hangi belgeler hazırlanır?",
      answer:
        "Esas sözleşme, ortaklar kurulu kararları, imza beyannameleri ve ticaret sicili başvuru evrakı hazırlanır. Faaliyet konusuna göre ek izin ve ruhsatlar gerekebilir.",
    },
    {
      question: "Ortaklar arasındaki uyuşmazlıklar nasıl çözülür?",
      answer:
        "Öncelikle esas sözleşme ve ortaklık sözleşmelerindeki çözüm mekanizmaları uygulanır; sonuç alınamazsa fesih, ortaklıktan çıkma-çıkarılma veya genel kurul kararının iptali davaları gündeme gelir.",
    },
  ],
  "miras-hukuku": [
    {
      question: "Mirasın reddi için süre ne kadardır?",
      answer:
        "Yasal mirasçılar bakımından ölümü öğrenme tarihinden itibaren üç aylık hak düşürücü süre içinde sulh hukuk mahkemesine beyanda bulunulması gerekir.",
    },
    {
      question: "Saklı pay nedir, tenkis davası ne zaman açılır?",
      answer:
        "Saklı pay, mirasçıların kanunen korunan asgari payıdır. Bu payı zedeleyen kazandırmalara karşı, öğrenmeden itibaren bir ve her hâlde on yıllık süreler içinde tenkis davası açılabilir.",
    },
    {
      question: "Miras paylaşımında anlaşma sağlanamazsa ne yapılır?",
      answer:
        "Ortaklığın giderilmesi (izale-i şüyu) davası ile taşınmazın aynen taksimi veya satış yoluyla paylaşımı sağlanır.",
    },
  ],
  "icra-ve-iflas-hukuku": [
    {
      question: "Ödeme emrine itiraz süresi kaç gündür?",
      answer:
        "İlamsız takiplerde ödeme emrinin tebliğinden itibaren yedi gün içinde icra dairesine itiraz edilmesi gerekir; itiraz takibi durdurur.",
    },
    {
      question: "İtirazın kaldırılması ile itirazın iptali arasındaki fark nedir?",
      answer:
        "İtirazın kaldırılması, belgeye dayalı olarak icra mahkemesinde görülen hızlı bir yoldur; itirazın iptali ise genel mahkemede açılan ve tüm delillerin incelendiği bir davadır.",
    },
    {
      question: "Hangi mallar haczedilemez?",
      answer:
        "Kişinin ve ailesinin geçimi için zorunlu eşyalar, mesleki araçların bir kısmı ve maaşın kanunda belirtilen bölümü gibi kalemler haciz dışıdır.",
    },
  ],
  "borclar-hukuku": [
    {
      question: "Sözleşmeden doğan alacaklarda zamanaşımı süresi nedir?",
      answer:
        "Kural olarak on yıldır; kira, ücret ve bazı periyodik edimler gibi kanunda sayılan alacaklarda beş yıllık süre uygulanır.",
    },
    {
      question: "Cezai şart her hâlde talep edilebilir mi?",
      answer:
        "Geçerli bir sözleşme hükmüne dayanması gerekir. Aşırı yüksek cezai şart, hâkim tarafından indirilebilir.",
    },
    {
      question: "Haksız fiil nedeniyle tazminat nasıl hesaplanır?",
      answer:
        "Maddi zarar, kusur oranı ve varsa müterafik kusur dikkate alınarak belirlenir; manevi tazminatta olayın niteliği ve tarafların durumu değerlendirilir.",
    },
  ],
  "tuketici-hukuku": [
    {
      question: "Tüketici hakem heyetine mi, mahkemeye mi başvurmalıyım?",
      answer:
        "Her yıl güncellenen parasal sınırın altındaki uyuşmazlıklarda tüketici hakem heyetine başvuru zorunludur; sınırın üzerindeki talepler tüketici mahkemesinde görülür.",
    },
    {
      question: "Ayıplı üründe hangi haklara sahibim?",
      answer:
        "Bedel iadesi, ayıp oranında indirim, ücretsiz onarım veya ayıpsız misliyle değişim seçeneklerinden birini kullanabilirsiniz.",
    },
    {
      question: "Cayma hakkı süresi ne kadardır?",
      answer:
        "Mesafeli sözleşmelerde kural olarak teslimden itibaren on dört gün içinde gerekçe göstermeksizin cayma hakkı kullanılabilir.",
    },
  ],
  "idare-hukuku": [
    {
      question: "İdari işleme karşı dava açma süresi nedir?",
      answer:
        "Genel kural, işlemin tebliğinden itibaren altmış gündür; vergi uyuşmazlıkları gibi bazı işlemlerde otuz günlük özel süreler uygulanır.",
    },
    {
      question: "Yürütmenin durdurulması nasıl talep edilir?",
      answer:
        "Dava dilekçesinde, işlemin açıkça hukuka aykırı olduğu ve telafisi güç zarar doğuracağı gerekçeleriyle birlikte talep edilir.",
    },
    {
      question: "Dava öncesi idareye başvuru zorunlu mu?",
      answer:
        "Tam yargı davalarında ve kanunda öngörülen hâllerde idareye başvuru zorunludur; başvuru süresi kaçırıldığında dava hakkı kaybedilebilir.",
    },
  ],
  "insaat-hukuku": [
    {
      question: "Kat karşılığı inşaat sözleşmesinde teslim gecikirse ne yapılabilir?",
      answer:
        "Sözleşmedeki gecikme tazminatı hükümleri işletilebilir; gecikmenin sürmesi hâlinde sözleşmenin feshi ve tapu iptali-tescil talepleri gündeme gelir.",
    },
    {
      question: "Ayıplı imalatta sorumluluk süresi ne kadardır?",
      answer:
        "Yapı eserlerinde ayıp ihbar ve dava süreleri, ağır kusur hâlleri dâhil olmak üzere kanunda ayrıca düzenlenmiştir; süreler ayıbın niteliğine göre değişir.",
    },
    {
      question: "Hakediş uyuşmazlıkları nasıl çözülür?",
      answer:
        "Sözleşme, metraj ve yapılan imalat kayıtları üzerinden bilirkişi incelemesiyle değerlendirilir; sözleşmede tahkim şartı varsa uyuşmazlık tahkimde görülür.",
    },
  ],
  "yabancilar-hukuku": [
    {
      question: "Kısa dönem ikamet izni başvurusu nasıl yapılır?",
      answer:
        "Başvuru elektronik sistem üzerinden yapılır; randevu günü pasaport, adres, sağlık sigortası ve geçim güvencesine ilişkin belgeler sunulur.",
    },
    {
      question: "İkamet izni reddedilirse ne yapılabilir?",
      answer:
        "Ret kararının tebliğinden itibaren kanuni süre içinde idare mahkemesinde iptal davası açılabilir; gerekli hâllerde yürütmenin durdurulması talep edilir.",
    },
    {
      question: "Yabancılar Türkiye'de taşınmaz satın alabilir mi?",
      answer:
        "Karşılıklılık ve askeri yasak bölge sınırlamaları saklı kalmak üzere birçok ülke vatandaşı taşınmaz edinebilir; tapu işlemi öncesi taşınmazın hukuki durumu incelenmelidir.",
    },
  ],
};

export function faqJsonLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
