import type { Article } from "./articles";

/**
 * SEO + içerik paketi (Ağustos 2026) kapsamında hazırlanan sekiz makale.
 * Dar arama niyetlerine odaklanır; mevcut geniş rehberleri tekrar etmez.
 * Tüm metinler genel bilgilendirme amaçlıdır; sonuç/süre garantisi içermez.
 */

const genelNot =
  "Bu yazı genel bilgilendirme amacıyla hazırlanmıştır. Somut olayın koşulları, yürürlükteki mevzuat ve güncel içtihat birlikte değerlendirilmeden hukuki görüş olarak kullanılmamalıdır. Yazıda hiçbir sonuç, süre veya başarı taahhüdü verilmemektedir.";

export const seoPackArticles: Article[] = [
  {
    slug: "anlasmali-bosanma-belgeler-durusma-hazirligi",
    title: "Bursa'da Anlaşmalı Boşanma İçin Gerekli Belgeler ve Duruşma Hazırlığı",
    excerpt:
      "Anlaşmalı boşanmada hazırlanacak belgeler, protokolde açık bırakılmaması gereken başlıklar, duruşmanın işleyişi ve karar sonrası takip edilecek işlemler.",
    categorySlug: "aile-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingMinutes: 7,
    relatedAreaSlug: "aile-hukuku",
    sections: [
      {
        id: "giris",
        heading: "Süreç neden belgelerle başlar?",
        level: 2,
        paragraphs: [
          "Anlaşmalı boşanma, eşlerin evliliği sona erdirme iradesiyle birlikte boşanmanın mali sonuçları ve çocuklara ilişkin düzenlemeler üzerinde de uzlaşmasına dayanır. Bursa'da sürece hazırlanan kişiler çoğu zaman hangi belgelerin gerektiğini, protokolde nelerin bulunması gerektiğini ve duruşmada nelerin sorulduğunu merak eder.",
          "Bir Bursa anlaşmalı boşanma avukatı ile görüşmenin amacı yalnızca dilekçe hazırlamak değil, tarafların yaptığı anlaşmanın uygulanabilir ve açık olup olmadığını baştan değerlendirmektir.",
        ],
      },
      {
        id: "temel-kosullar",
        heading: "Anlaşmalı boşanmanın temel koşulları",
        level: 2,
        paragraphs: [
          "4721 sayılı Türk Medeni Kanunu'na göre anlaşmalı boşanma yolunun kullanılabilmesi için evliliğin en az bir yıl sürmüş olması gerekir. Eşler mahkemeye birlikte başvurabilir veya eşlerden biri diğerinin açtığı davayı kabul edebilir. Hâkim tarafları bizzat dinleyerek boşanma iradelerinin serbestçe açıklandığına kanaat getirmeli; mali sonuçlar ile çocukların durumuna ilişkin düzenlemeyi uygun bulmalıdır.",
          "Bu koşullardan biri eksikse dosya anlaşmalı olarak sonuçlanmayabilir. Örneğin taraflar velayet, nafaka, tazminat veya kişisel ilişki takvimi üzerinde gerçekten uzlaşmamışsa, yalnızca \"anlaşmalı boşanma\" başlıklı bir dilekçe sunulması yeterli değildir.",
        ],
      },
      {
        id: "belgeler",
        heading: "Başvuru öncesinde hazırlanabilecek belgeler",
        level: 2,
        paragraphs: [
          "Her dosyanın içeriği farklıdır; yine de ilk değerlendirmede kimlik ve adres bilgileri, evlilik tarihi, çocukların bilgileri, tarafların gelir durumu, ortak taşınmaz veya araçlar ve varsa önceki mahkeme kararları önem taşır. Belgelerin eksiksiz olması, protokoldeki ifadelerin somut duruma uygun kurulmasını kolaylaştırır.",
        ],
        list: [
          "Tarafların kimlik ve güncel adres bilgileri",
          "Evlilik tarihini ve aile bağlarını gösteren nüfus kayıtları",
          "Ortak çocuklara ilişkin okul, sağlık ve bakım düzeni bilgileri",
          "Nafaka veya tazminat kararlaştırılacaksa gelir ve gider verileri",
          "Taşınmaz, araç, banka hesabı veya borçlara ilişkin kayıtlar",
          "Yurt dışında yaşayan taraf varsa vekâletname ve tebligat bilgileri",
        ],
      },
      {
        id: "protokol-basliklari",
        heading: "Protokolde açık bırakılmaması gereken başlıklar",
        level: 2,
        paragraphs: [
          "Anlaşmalı boşanma protokolü yalnızca \"taraflar boşanmayı kabul eder\" cümlesinden ibaret değildir. Velayet, çocukla kişisel ilişki, iştirak veya yoksulluk nafakası, maddi ve manevi tazminat, ziynet eşyası, malvarlığına ilişkin beyanlar, yargılama giderleri ve vekâlet ücreti gibi başlıkların somut biçimde düzenlenmesi gerekir. Ödeme kararlaştırılmışsa tutar, tarih, yöntem ve artış ölçütü anlaşılır olmalıdır.",
          "Mal paylaşımına ilişkin genel feragat ifadeleri ileride beklenmeyen sonuçlar doğurabilir. Bir taşınmazın devri, kredi borcunun üstlenilmesi veya araç devri gibi işlemler protokol dışında ayrı resmî işlemler de gerektirebilir. Bu nedenle protokoldeki her hükmün fiilen uygulanabilir olup olmadığı kontrol edilmelidir.",
        ],
      },
      {
        id: "yetkili-mahkeme",
        heading: "Bursa ve Osmangazi bakımından yetkili mahkeme",
        level: 2,
        paragraphs: [
          "Boşanma davasında yetkili mahkeme kural olarak eşlerden birinin yerleşim yeri veya eşlerin davadan önce son defa altı aydan beri birlikte oturdukları yer aile mahkemesidir. Osmangazi'de ikamet eden kişilerin yalnızca büroya yakınlık üzerinden değil, yetki kuralı ve dosyanın koşulları üzerinden değerlendirme yapması gerekir.",
          "Bir Osmangazi boşanma avukatı ile çalışılırken pratik ölçüt, iletişimin düzenli kurulması, protokolün ayrıntılı incelenmesi ve duruşma öncesi hazırlığın tamamlanmasıdır.",
        ],
      },
      {
        id: "durusma",
        heading: "Duruşmada neler olur?",
        level: 2,
        paragraphs: [
          "Hâkim tarafların boşanma iradesini bizzat açıklamasını ister ve protokolün özgür iradeyle imzalanıp imzalanmadığını değerlendirir. Çocuk varsa velayet ve kişisel ilişki düzeninin çocuğun üstün yararına uygunluğu ayrıca incelenir. Hâkim gerekli gördüğü değişiklikleri taraflara önerebilir; taraflar bu değişiklikte uzlaşamazsa dosya anlaşmalı biçimde sonuçlanmayabilir.",
          "Duruşma öncesinde protokolün son sürümü okunmalı; tarafların ödeme, teslim, velayet ve görüşme günleri konusunda aynı şeyi anladığı doğrulanmalıdır. Adres veya kimlik bilgisindeki hata, çelişkili ödeme tarihi ya da belirsiz kişisel ilişki takvimi kararın uygulanmasını güçleştirebilir.",
        ],
      },
      {
        id: "karar-sonrasi",
        heading: "Karardan sonra hangi işlemler takip edilir?",
        level: 2,
        paragraphs: [
          "Duruşmada boşanmaya karar verilmesi sürecin aynı gün tamamlandığı anlamına gelmez. Gerekçeli kararın yazılması, taraflara tebliği, kanun yolu süreleri veya feragat işlemleri ve kararın kesinleşmesi takip edilir. Nüfus kaydındaki değişiklik kesinleşmeden sonra gerçekleşir.",
          "Protokolde taşınmaz, araç, banka veya ödeme işlemleri düzenlenmişse bunların ayrıca yerine getirilmesi gerekebilir. Bu işlemler için hazırlık, karar beklenirken yapılabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Anlaşmalı boşanma davası avukat olmadan açılabilir mi?",
        answer:
          "Avukatla temsil her anlaşmalı boşanma dosyasında zorunlu değildir. Ancak protokolün sonuçları uzun süre devam edebileceğinden hak kaybı riskinin değerlendirilmesi yararlı olur. Özellikle çocuk, yüksek tutarlı ödeme, taşınmaz veya yurt dışı bağlantısı bulunan dosyalarda metnin hukuki sonuçları ayrıntılı incelenmelidir.",
      },
      {
        question: "Anlaşmalı boşanma mutlaka tek duruşmada biter mi?",
        answer:
          "Tek duruşmada karar verilmesi mümkündür; fakat dosyanın eksiksiz olması, tarafların duruşmaya katılması, protokolün uygun bulunması ve mahkemenin işleyişi süreyi etkiler. Süre veya sonuç garantisi verilemez.",
      },
      {
        question: "Duruşmaya eşlerden biri gelmezse ne olur?",
        answer:
          "Kanun, hâkimin tarafları bizzat dinlemesini aradığından katılım önemlidir. Mazeret, yurt dışı ikamet veya özel koşullar varsa dosyaya özgü usul değerlendirmesi yapılmalıdır.",
      },
    ],
    sources: [
      "4721 sayılı Türk Medeni Kanunu m. 166 ve m. 168",
      "4787 sayılı Aile Mahkemelerinin Kuruluş, Görev ve Yargılama Usullerine Dair Kanun",
      "Güncel mevzuat ve Bursa'daki mahkeme uygulaması yayın öncesinde kontrol edilmelidir.",
    ],
    metaTitle: "Anlaşmalı Boşanmada Belgeler ve Duruşma Hazırlığı | Akdağ Hukuk",
    metaDescription:
      "Bursa'da anlaşmalı boşanma için gereken belgeler, protokol başlıkları, duruşma hazırlığı ve karar sonrası işlemler hakkında genel rehber.",
    status: "published",
    closingNote: genelNot,
  },

  {
    slug: "cekismeli-bosanma-delil-velayet-tedbir",
    title:
      "Bursa'da Çekişmeli Boşanma Davasında Hukuka Uygun Delil, Velayet ve Geçici Tedbirler",
    excerpt:
      "Çekişmeli boşanmada vakıaların somutlaştırılması, hukuka uygun delil, velayet değerlendirmesi, tedbir nafakası ve geçici önlemler hakkında genel bilgilendirme.",
    categorySlug: "aile-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingMinutes: 8,
    relatedAreaSlug: "aile-hukuku",
    sections: [
      {
        id: "giris",
        heading: "Uyuşmazlık nerede başlar?",
        level: 2,
        paragraphs: [
          "Çekişmeli boşanma davasında taraflar boşanmanın kendisi veya boşanmanın sonuçlarından en az biri üzerinde anlaşamaz. Uyuşmazlık kusur iddiaları, velayet, nafaka, tazminat, aile konutu veya malvarlığına ilişkin olabilir.",
          "Bu dosyalarda en önemli hazırlık, olayların kronolojik biçimde anlatılması ve her iddianın hukuka uygun delille ilişkilendirilmesidir.",
        ],
      },
      {
        id: "somutlastirma",
        heading: "Dava dilekçesinde olayların somutlaştırılması",
        level: 2,
        paragraphs: [
          "\"Evlilik kötü gidiyordu\" veya \"eşim ilgisizdi\" gibi genel ifadeler tek başına bir ispat planı oluşturmaz. Tarih, yer, olay, olaya tanık olan kişiler ve mevcut belgeler belirtilmelidir. Dilekçe hazırlanırken boşanma sebebi ile talep edilen nafaka veya tazminat arasında hukuki bağ kurulması gerekir.",
          "İddia ve savunmanın süresinde ileri sürülmesi önemlidir. Dilekçe aşamasında unutulan bir vakıanın veya delilin sonradan dosyaya eklenmesi her zaman mümkün olmayabilir. Bu nedenle ilk görüşmede yalnızca karşı tarafın davranışları değil; tebligat tarihleri, önceki başvurular, koruma kararları ve devam eden başka dosyalar da değerlendirilmelidir.",
        ],
      },
      {
        id: "deliller",
        heading: "Hangi deliller kullanılabilir?",
        level: 2,
        paragraphs: [
          "Tanık anlatımları, mesaj ve e-posta kayıtları, banka hareketleri, sağlık kayıtları, kolluk tutanakları, sosyal medya içerikleri ve resmî kurum belgeleri dosyanın niteliğine göre gündeme gelebilir. Ancak delilin içeriği kadar nasıl elde edildiği de önemlidir. Özel hayatın gizliliğini ihlal eden, hukuka aykırı biçimde kaydedilen veya değiştirilen veriler değerlendirme dışı kalabilir ve ayrı bir hukuki sorumluluk doğurabilir.",
        ],
        list: [
          "Delilin hangi vakıayı ispatlayacağı açıkça belirlenmelidir.",
          "Ekran görüntülerinde tarih, numara ve bütünlük bilgileri korunmalıdır.",
          "Tanıkların bizzat gördüğü ile duyduğu olaylar ayrıştırılmalıdır.",
          "Banka, hastane veya kamu kurumu kayıtları gerektiğinde mahkemeden getirtilmelidir.",
          "Delil elde etme yöntemi kişisel veri ve ceza hukuku bakımından ayrıca değerlendirilmelidir.",
        ],
      },
      {
        id: "velayet",
        heading: "Velayet değerlendirmesinde çocuğun üstün yararı",
        level: 2,
        paragraphs: [
          "Velayet kararı anne veya babaya otomatik öncelik verilerek kurulmaz. Mahkeme çocuğun yaşı, bakım düzeni, eğitim ve sağlık ihtiyaçları, alıştığı çevre, kardeş ilişkileri ve ebeveynlerin çocukla kurduğu ilişki gibi unsurları birlikte değerlendirir. Ekonomik güç tek başına belirleyici değildir.",
          "Dava devam ederken geçici velayet ve çocukla kişisel ilişki düzenlenmesi istenebilir. Talebin çocuğun ihtiyaçlarına göre gerçekçi kurulması gerekir. İş ve okul saatleriyle uyuşmayan, ulaşım imkânını dikkate almayan veya çocuğu ebeveynler arasındaki çatışmanın içine çeken takvimler yeni sorunlara yol açabilir.",
        ],
      },
      {
        id: "tedbir",
        heading: "Tedbir nafakası ve diğer geçici önlemler",
        level: 2,
        paragraphs: [
          "Boşanma davası sürerken eşlerin barınması, geçimi, aile konutu ve çocukların bakımı için geçici önlemler alınabilir. Tedbir nafakası, geçici velayet, kişisel ilişki, aile konutunun kullanımının bir eşe bırakılması veya gerekli koruma önlemleri dosyanın koşullarına göre gündeme gelebilir.",
          "Geçici talep sunulurken gelir ve giderler mümkün olduğunca belgelenmelidir. Kira sözleşmesi, okul gideri, sağlık gideri, banka kayıtları ve düzenli ödemeler mahkemenin somut değerlendirme yapmasına yardımcı olur. Nafaka için sabit bir tarife bulunmadığından her dosyada tarafların ekonomik ve sosyal durumu ayrı değerlendirilir.",
        ],
      },
      {
        id: "osmangazi",
        heading: "Osmangazi'de dosya hazırlığında pratik konular",
        level: 3,
        paragraphs: [
          "Yetkili mahkeme, eşlerden birinin yerleşim yeri veya son altı aylık ortak yerleşim yeri kuralına göre belirlenir. Osmangazi'de yaşayan bir taraf bakımından adres kayıtlarının güncel olması, tebligatların takip edilmesi ve dosya numarasının düzenli kontrolü önem taşır.",
          "Osmangazi boşanma avukatı arayışında yalnızca fiziksel yakınlık değil; dosyanın yazılı bir planla yürütülmesi ve gelişmelerin anlaşılır biçimde aktarılması da dikkate alınmalıdır.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "İnternette \"Bursa çekişmeli boşanma avukatı tavsiye\" ararken nelere dikkat edilmelidir?",
        answer:
          "Avukat seçimi kişisel ve dosyaya özgü bir karardır. Baro kaydı, iletişim yöntemi, ücret ve kapsamın yazılı açıklanması, dosyayı kimin takip edeceği ve sonuç garantisi verilmemesi temel ölçütlerdir. İnternet yorumları tek başına hukuki yeterlilik veya belirli bir sonuç göstergesi sayılmamalıdır.",
      },
      {
        question: "Gizlice alınan ses kaydı boşanma davasında kullanılabilir mi?",
        answer:
          "Ses kaydının hukuka uygunluğu olayın koşullarına göre değişir. Önceden planlanmış veya özel hayatı ihlal eden kayıtlar ciddi risk taşır. Kayıt oluşturulmadan veya dosyaya sunulmadan önce hem aile hukuku hem ceza hukuku bakımından değerlendirme yapılmalıdır.",
      },
      {
        question: "Çocuk dava sırasında kimin yanında kalır?",
        answer:
          "Mahkeme dava süresince geçici velayet ve kişisel ilişki hakkında karar verebilir. Ölçüt çocuğun üstün yararıdır; mevcut bakım düzeni, okul ve sağlık ihtiyaçları birlikte değerlendirilir.",
      },
    ],
    sources: [
      "4721 sayılı Türk Medeni Kanunu m. 166-169 ve velayete ilişkin hükümler",
      "6100 sayılı Hukuk Muhakemeleri Kanunu'nun dilekçe ve delil düzenine ilişkin hükümleri",
      "6284 sayılı Ailenin Korunması ve Kadına Karşı Şiddetin Önlenmesine Dair Kanun",
    ],
    metaTitle: "Çekişmeli Boşanmada Delil, Velayet ve Tedbir | Akdağ Hukuk",
    metaDescription:
      "Bursa'da çekişmeli boşanma davasında hukuka uygun delil, velayet, tedbir nafakası ve geçici önlemler hakkında genel bilgilendirme.",
    status: "published",
    closingNote: genelNot,
  },

  {
    slug: "kidem-tazminati-hak-kazanma-arabuluculuk",
    title: "Bursa'da Kıdem Tazminatı: Hak Kazanma, Hesap Unsurları ve Arabuluculuk",
    excerpt:
      "Kıdem tazminatına hak kazanma koşulları, giydirilmiş ücret unsurları, ispat belgeleri ve dava şartı arabuluculuk süreci hakkında genel bilgilendirme.",
    categorySlug: "is-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingMinutes: 8,
    relatedAreaSlug: "is-hukuku",
    sections: [
      {
        id: "giris",
        heading: "Kıdem tazminatı her fesihte doğar mı?",
        level: 2,
        paragraphs: [
          "Kıdem tazminatı, iş sözleşmesinin sona erdiği her durumda otomatik olarak doğan bir ödeme değildir. İşçinin çalışma süresi, sözleşmenin nasıl sona erdiği, fesih gerekçesi ve işverene bağlı çalışma bütünlüğü birlikte değerlendirilir.",
          "Bursa'da kıdem tazminatı araştıran kişiler için ilk adım, yaklaşık bir hesap yapmak değil, hak kazanma koşulunu ve ispat belgelerini belirlemektir.",
        ],
      },
      {
        id: "kosullar",
        heading: "Kıdem tazminatı için temel koşullar",
        level: 2,
        paragraphs: [
          "Genel kural olarak işçinin aynı işverene bağlı en az bir yıllık kıdeminin bulunması gerekir. İşverenin haklı neden olmaksızın feshi, işçinin kanunda düzenlenen haklı nedenle feshi, askerlik, emeklilik koşullarının sağlanması ve kanunda öngörülen bazı özel sona erme hâlleri kıdem tazminatı doğurabilir. Buna karşılık işçinin geçerli bir neden olmadan kendi isteğiyle ayrılması veya işverenin ahlak ve iyi niyet kurallarına aykırılık nedeniyle haklı feshi durumunda sonuç farklı olabilir.",
          "\"İstifa dilekçesi imzaladım, hiçbir hakkım yok\" şeklindeki genel kabul her zaman doğru değildir. Dilekçenin hangi koşullarda imzalandığı, gerçek ayrılma nedeni, ücretlerin ödenip ödenmediği, baskı iddiası ve işyeri kayıtları birlikte incelenmelidir. Benzer biçimde işverenin bildirdiği çıkış kodu tek başına uyuşmazlığı kesin olarak çözmez.",
        ],
      },
      {
        id: "hesap",
        heading: "Hesaplamada hangi ücretler dikkate alınır?",
        level: 2,
        paragraphs: [
          "Kıdem tazminatı hesabında işçinin son brüt ücreti esas alınır; para veya para ile ölçülebilen, düzenli ve süreklilik gösteren bazı yan menfaatler de giydirilmiş ücrete dâhil edilebilir. Düzenli yemek, yol, prim veya benzeri ödemelerin niteliği ve sürekliliği bordro, banka kaydı ve işyeri uygulaması üzerinden incelenir.",
          "Kıdem tazminatı tavanı dönemsel olarak değiştiğinden metinde sabit rakam kullanılmaz. Hesap yapılırken sözleşmenin sona erdiği tarihteki tavan, çalışma süreleri, ücretsiz izinler veya kesintiye uğrayan dönemler ve daha önce yapılan ödemeler dikkate alınmalı; güncel tutar başvuru tarihinde ayrıca kontrol edilmelidir.",
        ],
      },
      {
        id: "belgeler",
        heading: "İspat için hangi belgeler önemlidir?",
        level: 2,
        paragraphs: [
          "Ücretin bir bölümünün bankadan, kalanının elden ödendiği iddia ediliyorsa bu hususun ispatı ayrı önem taşır. Tanık beyanları, emsal ücret araştırması ve işyeri kayıtları birlikte değerlendirilir.",
        ],
        list: [
          "İş sözleşmesi ve görev tanımı",
          "SGK hizmet dökümü ve işten ayrılış bildirgesi",
          "Ücret bordroları ve banka hesap hareketleri",
          "Fesih bildirimi, ihtarname ve e-posta yazışmaları",
          "Puantaj, vardiya ve izin kayıtları",
          "Düzenli prim, yemek, yol veya yan hakları gösteren belgeler",
          "Arabuluculuk başvuru formu ve son tutanak",
        ],
      },
      {
        id: "arabuluculuk",
        heading: "Zorunlu arabuluculuk süreci",
        level: 2,
        paragraphs: [
          "İşçi veya işveren alacağı ve tazminatına ilişkin birçok uyuşmazlıkta dava açılmadan önce arabulucuya başvurmak dava şartıdır. Başvuruda talep kalemlerinin doğru belirtilmesi önemlidir. Kıdem tazminatı yanında ihbar tazminatı, ücret, fazla çalışma, hafta tatili ve yıllık izin alacağı gibi kalemler varsa bunların ayrı ayrı değerlendirilmesi gerekir.",
          "Arabuluculukta anlaşma sağlanırsa metnin ödeme tarihi, taksit, faiz, ibra kapsamı ve temerrüt sonucunu açıkça göstermesi gerekir. Anlaşma sağlanamazsa son tutanak sonrasında dava yolu gündeme gelir. Zamanaşımı ve hak düşürücü süreler somut olaya göre ayrıca kontrol edilmelidir.",
        ],
      },
      {
        id: "dosya-hazirligi",
        heading: "Bursa'da iş hukuku dosyasının hazırlanması",
        level: 3,
        paragraphs: [
          "Bir Bursa kıdem tazminatı avukatı ile görüşmede işçinin yalnızca son bordrosu değil, tüm çalışma dönemi ve ayrılma süreci incelenir. İşveren tarafında ise özlük dosyasının, fesih yazısının ve ödeme kayıtlarının tutarlılığı önem taşır.",
          "Bir Bursa iş hukuku avukatı tarafından yapılacak ilk değerlendirme, hangi taleplerin hukuken ileri sürülebileceğini ve hangi belgelerin eksik olduğunu belirlemeye yöneliktir; sonuç garantisi verilemez.",
        ],
      },
    ],
    faqs: [
      {
        question: "Bir yıldan az çalışan işçi kıdem tazminatı alabilir mi?",
        answer:
          "Kural olarak kıdem tazminatı için en az bir yıllık çalışma şartı aranır. Ancak aynı işverene bağlı kesintili çalışmalar, işyeri devri veya muvazaalı kayıtlar gibi durumlarda hizmet süresinin nasıl hesaplanacağı ayrıca değerlendirilir.",
      },
      {
        question: "Kıdem tazminatı hesaplamasında primler dâhil edilir mi?",
        answer:
          "Düzenli ve süreklilik gösteren primler giydirilmiş ücret hesabına dâhil edilebilir. Tek seferlik, başarıya bağlı veya değişken ödemelerin niteliği belge ve işyeri uygulamasına göre incelenir.",
      },
      {
        question: "Arabulucuya gitmeden dava açılırsa ne olur?",
        answer:
          "Dava şartı kapsamındaki bir uyuşmazlıkta arabulucuya başvurulmadan dava açılması usulden ret sonucunu doğurabilir. Dosyanın arabuluculuk kapsamında olup olmadığı ve talep kalemleri başvuru öncesinde kontrol edilmelidir.",
      },
    ],
    sources: [
      "1475 sayılı İş Kanunu m. 14 (yürürlükte kalan hüküm)",
      "4857 sayılı İş Kanunu",
      "7036 sayılı İş Mahkemeleri Kanunu m. 3",
      "Güncel kıdem tazminatı tavanı ve zamanaşımı başlangıcı ayrıca kontrol edilmelidir.",
    ],
    metaTitle: "Kıdem Tazminatı: Koşullar, Hesap ve Arabuluculuk | Akdağ Hukuk",
    metaDescription:
      "Bursa'da kıdem tazminatına hak kazanma koşulları, hesaplamada dikkate alınan ücretler, belgeler ve zorunlu arabuluculuk süreci.",
    status: "published",
    closingNote: genelNot,
  },

  {
    slug: "isten-cikarilan-iscinin-haklari-ise-iade",
    title: "İşten Çıkarılan İşçinin Hakları: İşe İade, İhbar, Fazla Mesai ve Deliller",
    excerpt:
      "Fesih bildirimi sonrasında yapılması gerekenler, işe iade koşulları, ihbar ve diğer işçilik alacakları, mobbing iddiaları ve arabuluculuk hazırlığı.",
    categorySlug: "is-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingMinutes: 8,
    relatedAreaSlug: "is-hukuku",
    sections: [
      {
        id: "giris",
        heading: "Fesih tek bir alacak kalemi değildir",
        level: 2,
        paragraphs: [
          "İş sözleşmesinin sona ermesi tek bir alacak kaleminden ibaret değildir. Fesih bildiriminin şekli ve gerekçesi, işçinin kıdemi, işyerindeki çalışan sayısı, sözleşmenin türü ve ödenmeyen ücretler farklı hakları gündeme getirebilir.",
          "İşten çıkarılan kişinin ilk günlerde yaptığı belge ve süre kontrolü, sonradan doğabilecek hak kaybını önlemede önemlidir.",
        ],
      },
      {
        id: "ilk-adimlar",
        heading: "Fesih bildirimi alındığında ilk olarak ne yapılmalı?",
        level: 2,
        paragraphs: [
          "Fesih yazısı, işten ayrılış kodu, son ücret bordrosu, banka hareketleri, iş sözleşmesi ve varsa savunma talebi saklanmalıdır. İşveren sözlü fesih bildirmişse tarih, görüşmeye katılan kişiler ve son çalışma günü not edilmelidir. İşçiye imzalatılan ibraname, istifa dilekçesi veya ödeme belgesi okunmadan ve bir örneği alınmadan imzalanmamalıdır.",
          "İşveren bakımından da fesih nedeninin somut, tutarlı ve belgeli olması gerekir. Performans, devamsızlık, davranış veya işletmesel neden ileri sürülüyorsa bu gerekçeyi destekleyen kayıtların önceden oluşturulmuş olması önem taşır.",
        ],
      },
      {
        id: "ise-iade",
        heading: "İşe iade talebi hangi durumlarda gündeme gelir?",
        level: 2,
        paragraphs: [
          "Belirsiz süreli iş sözleşmesiyle çalışan, kanundaki kıdem ve işyeri büyüklüğü koşullarını sağlayan ve işveren vekili istisnası dışında kalan işçiler feshe karşı işe iade yolunu değerlendirebilir. Fesih bildiriminin geçerli bir nedene dayanıp dayanmadığı, sebebin açıkça bildirilip bildirilmediği ve savunma alınması gereken hâllerde usule uyulup uyulmadığı incelenir.",
          "İşe iade sürecinde fesih bildiriminin tebliğinden sonra arabulucuya başvuru için kısa ve hak düşürücü bir süre bulunur; anlaşma sağlanamazsa dava açma süresi de sınırlıdır. Bu nedenle diğer alacaklar için hesap yapılmasını beklerken işe iade süresinin kaçırılmaması gerekir. Süreler yayın tarihinde güncel mevzuattan teyit edilmelidir.",
        ],
      },
      {
        id: "alacaklar",
        heading: "İhbar tazminatı ve diğer işçilik alacakları",
        level: 2,
        paragraphs: [
          "Bildirimli fesihte kanuni ihbar sürelerine uyulmamışsa ihbar tazminatı gündeme gelebilir. Ancak işverenin haklı nedenle derhâl feshi veya işçinin haklı nedenle feshi gibi durumlarda sonuç değişir. Kıdem tazminatı, ücret, fazla çalışma, hafta tatili, ulusal bayram ve genel tatil, yıllık izin ve prim alacakları ayrı ayrı incelenmelidir.",
          "Fazla çalışma iddiasında puantaj, giriş-çıkış kayıtları, vardiya listeleri, e-postalar, işyeri sistem kayıtları ve tanık anlatımları önemlidir. Yıllık iznin kullandırıldığını ispat yükü kural olarak işverene aittir; imzalı izin kayıtları ve izin defteri bu nedenle belirleyicidir.",
        ],
      },
      {
        id: "mobbing",
        heading: "Mobbing ve ayrımcılık iddiaları",
        level: 3,
        paragraphs: [
          "Her işyeri tartışması veya yönetimsel eleştiri mobbing sayılmaz. Sistematik, süreklilik gösteren ve çalışanı yıldırmaya yönelen davranışların somutlaştırılması gerekir. Ayrımcılık iddiasında ise karşılaştırılabilir çalışanlar, ücret ve görev dağılımı, yazışmalar ve işverenin gerekçeleri birlikte değerlendirilir.",
          "Sağlık raporları, şirket içi başvurular, insan kaynakları yazışmaları ve tanıklar bu iddialarda önem taşıyabilir. Çalışanın delil toplarken kişisel veri ve ticari sır sınırlarına dikkat etmesi gerekir.",
        ],
      },
      {
        id: "arabuluculuk-hazirligi",
        heading: "Osmangazi ve Bursa'da arabuluculuk hazırlığı",
        level: 2,
        paragraphs: [
          "Osmangazi işçi avukatı arayan kişiler için dosyanın yerel oluşu kadar talep listesinin doğru kurulması önemlidir. Arabuluculuk başvurusunda işe iade ve parasal alacaklar farklı sonuçlara bağlanabilir. Bir Bursa iş hukuku avukatı ile görüşmede fesih tarihi, tebliğ şekli, çalışma süresi, ücret yapısı ve işyerindeki çalışan sayısı baştan netleştirilmelidir.",
          "Arabuluculuk anlaşması hazırlanırken işe başlatma, işe başlatmama tazminatı, boşta geçen süre, ödeme tarihi, vergi ve SGK sonuçları ile diğer alacaklardan feragat kapsamı açık yazılmalıdır. Belirsiz veya çok geniş ibra ifadeleri ileride yeni uyuşmazlıklara neden olabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "İşten çıkarıldığım gün tüm belgeleri imzalamam gerekir mi?",
        answer:
          "Belgeyi incelemeden imzalama zorunluluğu yoktur. İmzalanan metnin niteliği ve ödeme koşulları hukuki sonuç doğurabilir. Belgenin bir örneği alınmalı ve gerektiğinde değerlendirme yapılmalıdır.",
      },
      {
        question: "İşe iade ile kıdem tazminatı aynı anda istenebilir mi?",
        answer:
          "İşe iade talebi feshin geçersizliğine dayanır; kıdem ve ihbar alacaklarının durumu işe başlatma sonucuna göre etkilenebilir. Taleplerin birlikte nasıl yürütüleceği dosyanın koşullarına göre planlanmalıdır.",
      },
      {
        question: "Fazla mesaiyi yalnızca tanıkla ispatlayabilir miyim?",
        answer:
          "Yazılı kayıt yoksa tanık delili önem kazanabilir; ancak tanığın aynı dönem ve iş düzeni hakkında doğrudan bilgi sahibi olması gerekir. Bordro ve giriş-çıkış kayıtlarıyla birlikte değerlendirme yapılır.",
      },
    ],
    sources: [
      "4857 sayılı İş Kanunu m. 17-21 ve ilgili alacak hükümleri",
      "7036 sayılı İş Mahkemeleri Kanunu m. 3",
      "İşe iade süreleri ve kapsam koşulları güncel mevzuattan teyit edilmelidir.",
    ],
    metaTitle: "İşten Çıkarılan İşçinin Hakları ve İşe İade | Akdağ Hukuk",
    metaDescription:
      "İşten çıkarılan işçinin işe iade, ihbar, fazla mesai ve izin alacakları; fesih sonrası belgeler ve arabuluculuk süreci hakkında rehber.",
    status: "published",
    closingNote: genelNot,
  },

  {
    slug: "tahliye-davasi-ihtiyac-taahhut-kira-borcu",
    title: "Osmangazi'de Tahliye Davası: İhtiyaç, Tahliye Taahhüdü ve Kira Borcu",
    excerpt:
      "İhtiyaç nedeniyle tahliye, yazılı tahliye taahhüdü, kira borcu ve iki haklı ihtar, dava şartı arabuluculuk ve tahliye dosyasında gereken belgeler.",
    categorySlug: "kira-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingMinutes: 8,
    relatedAreaSlug: "gayrimenkul-ve-kira-hukuku",
    sections: [
      {
        id: "giris",
        heading: "Tahliye neden sebebe bağlıdır?",
        level: 2,
        paragraphs: [
          "Kiracının tahliyesi yalnızca kira ilişkisinin sona erdirilmek istenmesine dayanmaz. Kanunda öngörülen bir tahliye sebebinin bulunması, bu sebebe uygun bildirimlerin yapılması ve sürelerin takip edilmesi gerekir.",
          "Osmangazi'de taşınmazı bulunan kiraya verenler ile kiracılar açısından sözleşme, ödeme kayıtları, ihtarnameler ve taşınmazın kullanım durumu birlikte değerlendirilir. Süreler tahliye sebebine ve sözleşme tarihine göre değiştiğinden dosya görülmeden kesin süre belirtilemez.",
        ],
      },
      {
        id: "ihtiyac",
        heading: "İhtiyaç nedeniyle tahliye",
        level: 2,
        paragraphs: [
          "Kiraya verenin kendisi, eşi, altsoyu, üstsoyu veya kanunda sayılan bakmakla yükümlü olduğu kişiler için konut ya da işyeri ihtiyacı bulunması hâlinde tahliye talebi gündeme gelebilir. İhtiyacın gerçek, samimi ve zorunlu olması aranır. Yalnızca kira bedelini artırma veya kiracıyı değiştirme amacıyla ileri sürülen soyut ihtiyaç iddiası yeterli değildir.",
          "İhtiyacın ispatında mevcut konut durumu, işyeri ve ulaşım koşulları, aile yapısı, sağlık ve yaşam düzeni gibi somut olgular önem taşır. Taşınmazın sonradan edinilmesi veya mevcut sözleşmenin yenilenmesi, dava ve bildirim sürelerinin belirlenmesini etkileyebilir.",
        ],
      },
      {
        id: "taahhut",
        heading: "Tahliye taahhüdü",
        level: 2,
        paragraphs: [
          "Kiracının kiralananı belirli bir tarihte boşaltacağını yazılı olarak üstlendiği tahliye taahhüdü, kanundaki koşullar sağlanırsa dava veya icra yoluyla tahliyeye dayanak olabilir. Taahhüdün kiralananın tesliminden sonra verilmesi, tarihin ve iradenin açık olması önemlidir. Kira sözleşmesiyle aynı anda alınan veya boş olarak imzalatıldığı iddia edilen belgeler uyuşmazlık konusu olabilir.",
          "Taahhütteki imza, tarih veya düzenleme koşulları tartışılıyorsa belge incelemesi ve tarafların anlatımı önem kazanır. Taahhüt tarihinden sonra tarafların yeni bir anlaşma yapıp yapmadığı da değerlendirilmelidir.",
        ],
      },
      {
        id: "kira-borcu",
        heading: "Kira borcu ve iki haklı ihtar",
        level: 2,
        paragraphs: [
          "Kira bedelinin ödenmemesi durumunda kiraya veren yazılı bildirim ve icra takibi yollarını kullanabilir. Konut ve çatılı işyeri kiralarında ödeme için tanınması gereken süre ile bildirimin içeriği önem taşır. Aynı kira yılı içinde kira bedelinin geç ödenmesi nedeniyle iki haklı ihtar oluşması da kanundaki koşullar sağlanırsa tahliye sebebi olabilir.",
          "Banka açıklamaları, ödeme tarihleri, kira artış yazışmaları ve yan giderler ayrıştırılmalıdır. Kiraya verenin talep ettiği tutar sözleşmedeki bedelle uyuşmuyorsa veya kira tespiti ya da uyarlama uyuşmazlığı varsa tahliye dosyasından ayrı meseleler ortaya çıkabilir.",
        ],
      },
      {
        id: "arabuluculuk",
        heading: "Dava öncesi arabuluculuk",
        level: 2,
        paragraphs: [
          "Kira ilişkisinden kaynaklanan birçok uyuşmazlıkta dava açılmadan önce arabulucuya başvuru dava şartıdır. Ancak ilamsız icra yoluyla tahliye gibi kanunda istisna tutulan süreçler bakımından farklılık bulunabilir. Talebin hangi hukuki yola dayandığı başvuru öncesinde belirlenmelidir.",
          "Arabuluculukta yeni tahliye tarihi, kira borcu, ödeme planı, anahtar teslimi, depozito ve taşınmazdaki hasar gibi konular birlikte düzenlenebilir. Anlaşmanın icra edilebilir olması için teslim tarihi, ödeme yöntemi ve gecikme sonucu net yazılmalıdır.",
        ],
      },
      {
        id: "belgeler",
        heading: "Osmangazi'de tahliye dosyasının belgeleri",
        level: 2,
        paragraphs: [
          "Bir Osmangazi tahliye davası avukatı ile görüşmede en kritik bilgi sözleşme başlangıcı, yenileme dönemi, ihtar tarihleri ve tebliğ günleridir. Bir Bursa gayrimenkul avukatı dosyayı incelerken yalnızca tahliye nedenini değil, taşınmazın tapu durumunu ve kiraya veren sıfatını da kontrol eder.",
        ],
        list: [
          "Kira sözleşmesi ve ekleri",
          "Tapu kaydı veya kiraya verme yetkisini gösteren belge",
          "Banka hesap hareketleri ve kira ödeme açıklamaları",
          "Noter ihtarnameleri ve tebliğ belgeleri",
          "Tahliye taahhüdünün aslı",
          "İhtiyaç iddiasını destekleyen ikamet, sağlık, iş veya aile düzeni belgeleri",
          "Arabuluculuk son tutanağı",
          "Varsa icra dosyası ödeme emri ve tebligat evrakı",
        ],
      },
    ],
    faqs: [
      {
        question: "Kiraya veren istediği zaman kiracıyı çıkarabilir mi?",
        answer:
          "Hayır. Konut ve çatılı işyeri kiralarında kanunda düzenlenen fesih veya tahliye sebeplerinden birinin bulunması ve ilgili usule uyulması gerekir.",
      },
      {
        question: "Tahliye taahhüdündeki tarih sonradan doldurulduysa ne olur?",
        answer:
          "Belgenin hangi koşullarda düzenlendiği, teslimden sonra verilip verilmediği ve taraf iradesi delillerle değerlendirilir. İmza veya tarih itirazı varsa dosyaya özgü inceleme gerekir.",
      },
      {
        question: "Tahliye davası ne kadar sürer?",
        answer:
          "Mahkemenin iş yükü, tebligat, bilirkişi veya tanık ihtiyacı ve kanun yolu aşaması süreyi etkiler. Kesin süre taahhüdü verilemez.",
      },
    ],
    sources: [
      "6098 sayılı Türk Borçlar Kanunu m. 315 ve m. 350-352",
      "6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu m. 18/B",
      "2004 sayılı İcra ve İflas Kanunu'nun tahliyeye ilişkin hükümleri",
    ],
    metaTitle: "Tahliye Davası: İhtiyaç, Taahhüt ve Kira Borcu | Akdağ Hukuk",
    metaDescription:
      "Osmangazi ve Bursa'da ihtiyaç nedeniyle tahliye, tahliye taahhüdü, kira borcu, iki haklı ihtar ve arabuluculuk süreci hakkında rehber.",
    status: "published",
    closingNote: genelNot,
  },

  {
    slug: "tapu-uyusmazligi-icra-takibi-belgeler",
    title: "Bursa'da Tapu Uyuşmazlığı ve İcra Takibi: Belge İncelemesinden Tahsilata",
    excerpt:
      "Tapu iptali ve tescil davalarında ilk inceleme, ortaklığın giderilmesi, doğru icra takip yolunun seçimi, ödeme emrine itiraz, haciz ve satış aşaması.",
    categorySlug: "icra-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingMinutes: 9,
    relatedAreaSlug: "icra-ve-iflas-hukuku",
    sections: [
      {
        id: "giris",
        heading: "Aynı zincirin farklı halkaları",
        level: 2,
        paragraphs: [
          "Gayrimenkul uyuşmazlıkları ile icra takipleri çoğu zaman aynı dosya zincirinin farklı aşamalarıdır. Bir taşınmaz satışından doğan alacak, kira borcu, ortaklığın giderilmesi sonrası satış bedeli veya tapu devrine ilişkin uyuşmazlık tahsil ve icra işlemlerini de gündeme getirebilir.",
          "Doğru yolun seçilmesi için önce belgenin niteliği, taraf sıfatları ve talebin konusu belirlenmelidir.",
        ],
      },
      {
        id: "tapu-iptali",
        heading: "Tapu iptali ve tescil davalarında ilk inceleme",
        level: 2,
        paragraphs: [
          "Tapu iptali ve tescil davaları tek bir sebebe dayanmaz. Muvazaa, ehliyetsizlik, irade bozukluğu, vekâlet görevinin kötüye kullanılması, miras bırakanın gerçek iradesi veya geçersiz işlem iddiası farklı hukuki ve ispat kurallarına tabidir. Tapu kaydının güncel ve tedavüllü biçimde incelenmesi, devir tarihleri ile taraf ilişkilerinin belirlenmesi gerekir.",
          "Taşınmazın bulunduğu yer mahkemesi bakımından kesin yetki kuralı gündeme gelebilir. Dava açılmadan önce ihtiyati tedbir gerekip gerekmediği, üçüncü kişiye devir riski ve taşınmaz üzerindeki ipotek veya haciz kayıtları kontrol edilmelidir.",
        ],
      },
      {
        id: "ortaklik",
        heading: "Hisseli taşınmaz ve ortaklığın giderilmesi",
        level: 2,
        paragraphs: [
          "Paydaşlar taşınmazı birlikte kullanamıyor veya paylaşamıyorsa ortaklığın giderilmesi talebi gündeme gelebilir. Aynen bölüşme mümkün değilse satış yoluyla paylaşım yapılabilir. Paydaşların kullanım tazminatı, kira geliri, yapılan zorunlu giderler veya muhdesat iddiaları ayrı uyuşmazlıklara dönüşebilir.",
          "2026 yılında yürürlüğe giren değişiklikler elektronik satış ve bazı mirasçı paydaşlar arasındaki artırma düzenini etkileyebildiğinden, satış aşamasındaki dosyalarda güncel İcra ve İflas Kanunu hükümleri ayrıca kontrol edilmelidir.",
        ],
      },
      {
        id: "takip-yolu",
        heading: "Alacak için hangi icra yolu seçilir?",
        level: 2,
        paragraphs: [
          "Alacağın bir mahkeme kararına, kambiyo senedine, kira sözleşmesine veya yalnızca faturaya dayanması kullanılacak takip yolunu etkiler. İlamsız takip, ilamlı takip, kambiyo senetlerine özgü takip ve kiralananın tahliyesine ilişkin takiplerin süre ve itiraz yolları farklıdır.",
          "Takip talebinde alacaklı ve borçlu bilgilerinin, faiz türü ve başlangıç tarihinin, alacak kalemlerinin ve dayanak belgenin doğru gösterilmesi gerekir. Yanlış takip türü veya belirsiz alacak hesabı itiraz ve şikâyet süreçlerine yol açabilir.",
        ],
      },
      {
        id: "itiraz",
        heading: "Ödeme emrine itiraz ve sonraki adımlar",
        level: 2,
        paragraphs: [
          "İlamsız takipte borçlu, ödeme emrinin tebliğinden sonra kanundaki süre içinde borca, imzaya veya yetkiye itiraz edebilir. İtiraz takibi durdurduğunda alacaklının elindeki belgeye göre itirazın kaldırılması veya itirazın iptali yoluna başvurması gündeme gelir. Tebligatın usulsüzlüğü iddiası veya haczedilmezlik şikâyeti gibi konular icra mahkemesinde ayrıca incelenebilir.",
          "İtiraz edilmemesi alacağın maddi olarak her zaman doğru olduğu anlamına gelmez; fakat takip kesinleştiğinde haciz aşamasına geçilebilir. Borçlu bakımından da tebligatın ciddiyetle ele alınması ve sürenin kaçırılmaması önemlidir.",
        ],
      },
      {
        id: "haciz",
        heading: "Haciz, satış ve tahsilat",
        level: 2,
        paragraphs: [
          "Takibin kesinleşmesinden sonra borçlunun banka hesabı, maaşı, taşınır veya taşınmazları hakkında kanuni sınırlar içinde haciz işlemleri yapılabilir. Haciz her zaman hızlı tahsilat sağlamaz; malın niteliği, öncelikli hacizler, rehinler, satış masrafları ve sıra cetveli sonucu etkiler.",
          "Bir Bursa gayrimenkul avukatı taşınmaz kaydını ve dava ihtiyacını değerlendirirken, icra dosyası bakımından alacağın belgesi ve tahsil kabiliyeti de incelenmelidir. Dava ile icra takibinin birbirine etkisi baştan planlanmazsa aynı konuda gereksiz masraf veya çelişkili işlem ortaya çıkabilir.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Telefonla ulaşılan bir büro üzerinden icra dosyası hakkında değerlendirme yapılabilir mi?",
        answer:
          "Telefon veya mesaj hattı çoğunlukla randevu ve ön bilgi için kullanılır. \"Bursa icra avukatı telefon\" gibi aramalarla bulunan iletişim bilgilerinin baro kaydı ve büronun resmî sitesi üzerinden doğrulanması güvenli olur. Sağlıklı bir değerlendirme için ödeme emri, tebligat, sözleşme ve diğer belgelerin incelenmesi gerekir.",
      },
      {
        question: "Tapu davası açılırken taşınmazın satışı engellenebilir mi?",
        answer:
          "Koşulları varsa ihtiyati tedbir talep edilebilir; ancak tedbir otomatik değildir. Yaklaşık ispat, uyuşmazlık konusu ve ölçülülük mahkeme tarafından değerlendirilir.",
      },
      {
        question: "İcra takibine itiraz edilince alacak sona erer mi?",
        answer:
          "Hayır. İtiraz, takip türüne göre işlemleri durdurabilir. Alacaklı, elindeki belgelere göre itirazın kaldırılması veya iptali gibi yollara başvurabilir.",
      },
    ],
    sources: [
      "4721 sayılı Türk Medeni Kanunu'nun mülkiyet ve paylı mülkiyet hükümleri",
      "6100 sayılı Hukuk Muhakemeleri Kanunu'nun yetki ve ihtiyati tedbir hükümleri",
      "2004 sayılı İcra ve İflas Kanunu",
      "31 Temmuz 2026 tarihli 7589 sayılı Kanunla yapılan değişiklikler satış aşamasında ayrıca kontrol edilmelidir.",
    ],
    metaTitle: "Tapu Uyuşmazlığı ve İcra Takibi Süreci | Akdağ Hukuk",
    metaDescription:
      "Bursa'da tapu iptali, ortaklığın giderilmesi, alacak ve icra takibinde belge incelemesi, itiraz, haciz ve tahsil süreci hakkında rehber.",
    status: "published",
    closingNote: genelNot,
  },

  {
    slug: "tutuklama-adli-kontrol-itiraz-dosya-hazirligi",
    title: "Bursa'da Tutuklama ve Adli Kontrol: Karar, İtiraz ve Dosya Hazırlığı",
    excerpt:
      "Tutuklamanın koşulları, adli kontrol seçenekleri, ölçülülük değerlendirmesi, itiraz dilekçesinin hazırlanması ve dosya kısıtlaması hakkında bilgilendirme.",
    categorySlug: "ceza-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingMinutes: 8,
    relatedAreaSlug: "ceza-hukuku",
    sections: [
      {
        id: "giris",
        heading: "Tutuklama bir ceza değildir",
        level: 2,
        paragraphs: [
          "Tutuklama, ceza yargılamasında bir ceza değil; soruşturma veya kovuşturmanın güvenli biçimde yürütülmesini amaçlayan geçici bir koruma tedbiridir. Kişi hakkında suç şüphesi bulunması tek başına tutuklama için yeterli değildir.",
          "Kuvvetli suç şüphesini gösteren somut deliller, bir tutuklama nedeni ve tedbirin ölçülü olması birlikte değerlendirilir. Suçsuzluk karinesi süreç boyunca geçerliliğini korur.",
        ],
      },
      {
        id: "unsurlar",
        heading: "Tutuklama kararı hangi unsurlara dayanır?",
        level: 2,
        paragraphs: [
          "Kaçma, saklanma, delilleri yok etme veya tanıklar üzerinde baskı kurma ihtimali gibi nedenler dosyanın somut olgularıyla açıklanmalıdır. Yüklenen suçun niteliği ve beklenen cezanın ağırlığı değerlendirmede rol oynayabilse de tek başına yeterli gerekçe değildir. Hâkim, daha hafif bir tedbirle amaca ulaşılabiliyorsa adli kontrolü değerlendirmelidir.",
          "Tutuklama sorgusunda şüpheli veya sanığın kimliği, ikamet düzeni, işi, aile bağları, sağlık durumu ve delillerle ilişkisi önem taşıyabilir. Savunma yalnızca suçlamayı reddetmekten ibaret olmamalı; tutuklama nedenlerinin neden bulunmadığını ve alternatif tedbirlerin neden yeterli olacağını somutlaştırmalıdır.",
        ],
      },
      {
        id: "adli-kontrol",
        heading: "Adli kontrol tedbirleri",
        level: 2,
        paragraphs: [
          "Adli kontrol; imza yükümlülüğü, yurt dışına çıkış yasağı, belirli yerlere gitmeme, güvence yatırma veya kanunda düzenlenen başka yükümlülükler şeklinde uygulanabilir. Tedbirin kişinin işi, eğitimi ve aile düzeni üzerindeki etkisi gözetilerek ölçülü kurulması gerekir.",
          "Koşullar değiştiğinde adli kontrolün kaldırılması veya değiştirilmesi talep edilebilir. Örneğin düzenli imza yükümlülüğünün çalışma saatleriyle çakışması ya da sağlık nedeniyle seyahat gereksinimi belgeyle açıklanabilir. Tedbire aykırılık daha ağır sonuçlar doğurabileceğinden yükümlülükler dikkatle takip edilmelidir.",
        ],
      },
      {
        id: "itiraz",
        heading: "İtiraz ve tahliye talebinin hazırlanması",
        level: 2,
        paragraphs: [
          "Tutuklama veya adli kontrol kararına karşı kanunda öngörülen yola ve süreye göre itiraz edilebilir; süreler yayın tarihinde güncel Ceza Muhakemesi Kanunu metninden teyit edilmelidir. İtiraz dilekçesinde yalnızca kararın haksız olduğu söylenmemeli; mevcut deliller, dosyanın geldiği aşama, delillerin toplanmış olup olmadığı, sabit ikamet ve kaçma şüphesini azaltan olgular açıklanmalıdır.",
          "Yeni bir belge, sağlık raporu, işyeri yazısı, eğitim kaydı veya bakmakla yükümlü olunan kişilere ilişkin bilgi varsa dosyaya sunulabilir. İtirazın önceki savunmanın tekrarı olması yerine karar gerekçesine doğrudan cevap vermesi daha işlevsel olur.",
        ],
      },
      {
        id: "kisitlama",
        heading: "Dosyaya erişim ve kısıtlama kararı",
        level: 3,
        paragraphs: [
          "Soruşturma aşamasında dosya kural olarak gizlidir; ayrıca kanuni koşullarla müdafiin inceleme yetkisini sınırlayan kısıtlama kararı verilebilir. Buna rağmen ifade tutanağı, bilirkişi raporları ve kanunda belirtilen bazı belgelere erişim ayrı kurallara tabidir.",
          "Savunma hazırlanırken hangi delilin görülebildiği ve hangi talebin yapılabileceği dosya özelinde değerlendirilir.",
        ],
      },
      {
        id: "ilk-gorusme",
        heading: "Bursa'da ceza dosyasında ilk görüşme",
        level: 2,
        paragraphs: [
          "Bir Bursa ceza avukatı ile ilk görüşmede olayın kronolojisi, yakalama ve ifade saatleri, tebligatlar, dosya numarası, mevcut karar ve aileye bildirilen bilgiler toplanır. Şüpheli veya sanıkla görüşmenin gizliliği, savunmanın serbestçe hazırlanabilmesi bakımından önemlidir.",
          "Hiçbir değerlendirme tahliye veya beraat garantisi olarak sunulamaz; her dosya kendi delil durumu içinde ele alınır.",
        ],
      },
    ],
    faqs: [
      {
        question: "Tutuklama suçlu olunduğu anlamına gelir mi?",
        answer:
          "Hayır. Tutuklama geçici bir koruma tedbiridir ve suçsuzluk karinesi devam eder. Mahkûmiyet ancak yargılama sonunda kesinleşmiş hükümle ortaya çıkar.",
      },
      {
        question: "Adli kontrol sonradan kaldırılabilir mi?",
        answer:
          "Koşullar değiştiğinde veya tedbirin gereksiz hâle geldiği ileri sürüldüğünde kaldırma ya da değiştirme talep edilebilir. Değerlendirme dosyanın aşaması ve riskler üzerinden yapılır.",
      },
      {
        question: "Aile bireyleri dosyayı görebilir mi?",
        answer:
          "Dosyaya erişim taraf sıfatı ve soruşturmanın gizliliği kurallarına bağlıdır. Müdafi aracılığıyla bilgi alınması ve hangi belgelere erişilebildiğinin belirlenmesi gerekir.",
      },
    ],
    sources: [
      "5271 sayılı Ceza Muhakemesi Kanunu m. 100 ve devamı ile itiraz hükümleri",
      "Türkiye Cumhuriyeti Anayasası m. 19 ve suçsuzluk karinesi",
      "Güncel itiraz süreleri ve 2026 değişiklikleri yayın öncesinde kontrol edilmelidir.",
    ],
    metaTitle: "Tutuklama ve Adli Kontrol: İtiraz ve Hazırlık | Akdağ Hukuk",
    metaDescription:
      "Bursa'da tutuklama ve adli kontrol kararlarının koşulları, ölçülülük, itiraz ve dosya hazırlığı hakkında genel bilgilendirme.",
    status: "published",
    closingNote: genelNot,
  },

  {
    slug: "agir-ceza-durusma-hazirligi-iddianame-delil",
    title: "Ağır Ceza Mahkemesinde Duruşma Hazırlığı: İddianame, Delil ve Savunma Planı",
    excerpt:
      "Ağır ceza mahkemesinin görevi, iddianamenin okunması, delil planı, tanık ve bilirkişi, dijital deliller, hüküm ve kanun yolları hakkında genel rehber.",
    categorySlug: "ceza-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-04",
    readingMinutes: 9,
    relatedAreaSlug: "ceza-hukuku",
    sections: [
      {
        id: "giris",
        heading: "Hazırlık duruşma gününden önce başlar",
        level: 2,
        paragraphs: [
          "Ağır ceza mahkemesinde görülen dosyalarda iddianame, olayın hukuki niteliği, deliller ve sanık veya katılanın talepleri ayrıntılı biçimde incelenir. Duruşma hazırlığı yalnızca mahkeme gününde yapılacak sözlü savunmadan ibaret değildir.",
          "Soruşturma aşamasında toplanan delillerin bütünlüğü, eksik araştırma talepleri ve kanuna uygunluk itirazları önceden planlanmalıdır.",
        ],
      },
      {
        id: "gorev",
        heading: "Ağır ceza mahkemesinin görevi nasıl belirlenir?",
        level: 2,
        paragraphs: [
          "Bir dosyanın ağır ceza mahkemesinde görülmesi, kanunda o suç veya ceza aralığı bakımından bu mahkemenin görevli kılınmasına bağlıdır. Suçun adı kadar iddianamedeki hukuki nitelendirme ve sevk maddeleri de önemlidir. Mahkeme, yargılama sırasında hukuki nitelendirmeyi değiştirebilir; bu durumda sanığa ek savunma imkânı tanınması gerekir.",
          "Görev konusu kamu düzenindendir. Dosyanın asliye ceza veya ağır ceza mahkemesinde görülmesi gerektiğine ilişkin itirazlar, olay ve sevk maddeleri üzerinden değerlendirilir.",
        ],
      },
      {
        id: "iddianame",
        heading: "İddianame nasıl okunmalı?",
        level: 2,
        paragraphs: [
          "İddianamede isnat edilen fiil, olay tarihi ve yeri, sanıkların rolü, deliller ve sevk maddeleri ayrı ayrı çıkarılmalıdır. \"Hangi delil hangi iddiayı destekliyor?\" sorusu her dosyada temel kontrol noktasıdır. Tanık beyanları arasındaki çelişki, dijital veride zaman veya kullanıcı sorunu, bilirkişi raporunda yöntem eksikliği ya da zincirleme suç veya iştirak değerlendirmesi savunma planını etkileyebilir.",
          "Sanığın lehine olan delillerin de araştırılması gerekir. Kamera görüntüsü, baz kaydı, banka hareketi, iletişim kayıtları, cihaz incelemesi, sağlık raporu veya başka dosya kayıtları gerekli görülüyorsa mahkemeden toplanması talep edilebilir. Delil talebinin olayla bağlantısı açıkça kurulmalıdır.",
        ],
      },
      {
        id: "savunma-plani",
        heading: "Duruşma öncesi savunma planı",
        level: 2,
        paragraphs: [
          "Savunmanın amacı dosyadaki her belgeyi reddetmek değil; delilin güvenilirliğini, elde ediliş biçimini ve isnatla bağlantısını test etmektir. Bir beyanın hangi koşullarda alındığı, tercüman veya müdafi bulunup bulunmadığı ve tutanağın içeriği önem taşıyabilir.",
        ],
        list: [
          "İsnat edilen her fiil ve hukuki madde için ayrı değerlendirme yapılması",
          "Soruşturma ifadesi ile sonraki beyanlar arasındaki farkların açıklanması",
          "Hukuka aykırı delil iddialarının somutlaştırılması",
          "Tanıklara yöneltilecek soruların olay bazında hazırlanması",
          "Bilirkişi raporuna teknik ve hukuki itirazların ayrıştırılması",
          "Tutukluluk veya adli kontrol bakımından güncel koşulların belgelenmesi",
          "Mağdur veya katılan taraf için zarar, delil ve katılma taleplerinin hazırlanması",
        ],
      },
      {
        id: "deliller",
        heading: "Tanık, bilirkişi ve dijital deliller",
        level: 2,
        paragraphs: [
          "Tanığın olayı bizzat görüp görmediği, bilgiyi kimden aldığı ve beyanının diğer delillerle uyumu değerlendirilir. Bilirkişi, hukuki değerlendirme yapmak yerine uzmanlık gerektiren teknik konuda görüş bildirmelidir. Raporun veri kaynağı, yöntemi ve gerekçesi denetlenebilir olmalıdır.",
          "Dijital delillerde cihazın kimden ve nasıl alındığı, kopyalama yöntemi, bütünlük değerleri, kullanıcı hesabı ve zaman bilgileri önemlidir. Ekran görüntüsü tek başına her zaman bütünlüğü göstermeyebilir; gerektiğinde ham veri ve inceleme tutanakları talep edilmelidir.",
        ],
      },
      {
        id: "hukum",
        heading: "Hüküm ve kanun yolları",
        level: 2,
        paragraphs: [
          "Mahkeme delilleri tartıştıktan sonra beraat, mahkûmiyet, ceza verilmesine yer olmadığı, düşme veya güvenlik tedbiri gibi kararlar verebilir. Hükmün gerekçesi; delillerin nasıl değerlendirildiği ve hangi itirazların karşılandığı bakımından incelenir. İstinaf ve temyiz yollarının kapsamı kararın türü, ceza miktarı ve güncel kanun hükümlerine göre değişebilir.",
          "31 Temmuz 2026 tarihinde yayımlanan 7589 sayılı Kanun ceza muhakemesinde bazı değişiklikler yapmıştır. Bu nedenle hükmün açıklanmasının geri bırakılması ve bazı kanun yolu konularında eski açıklamalarla yetinilmemeli; dosya tarihi itibarıyla yürürlükteki metin kontrol edilmelidir.",
        ],
      },
      {
        id: "temsil",
        heading: "Osmangazi ve Bursa'da hukuki temsil ararken",
        level: 3,
        paragraphs: [
          "\"Osmangazi ağır ceza avukatı\" araması yapan bir kişi bu ifadeyi resmî bir uzmanlık unvanı olarak değil, ağır ceza mahkemesinde görülen dosyada hukuki temsil ihtiyacını anlatan bir sorgu olarak görmelidir. Baro kaydı, dosyayı kimin takip edeceği, görüşme ve bilgilendirme yöntemi ile ücret kapsamı açıkça konuşulmalıdır.",
          "Bir Bursa ceza avukatı hiçbir dosyada beraat, tahliye veya belirli bir ceza sonucu garantisi veremez.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ağır ceza mahkemesinde avukat zorunlu mudur?",
        answer:
          "Kanunun zorunlu müdafilik öngördüğü durumlar vardır. Bunun dışında da sanık müdafi yardımından yararlanabilir. Zorunlu müdafilik koşulları isnat ve kişisel durum üzerinden güncel mevzuata göre değerlendirilir.",
      },
      {
        question: "Mahkeme iddianamedeki suç vasfını değiştirebilir mi?",
        answer:
          "Evet, mahkeme hukuki nitelendirmeyle bağlı değildir; ancak değişiklik sanığın savunmasını etkiliyorsa ek savunma hakkı tanınmalıdır.",
      },
      {
        question: "Duruşmada söylenmeyen bir husus istinafta ileri sürülebilir mi?",
        answer:
          "Kanun yolu incelemesinin kapsamı ve yeni delil sunma imkânı dosyaya göre değişir. Bu nedenle itirazların ve delil taleplerinin ilk derece aşamasında süresinde ileri sürülmesi önemlidir.",
      },
    ],
    sources: [
      "5235 sayılı Kanun'un ceza mahkemelerinin görevine ilişkin hükümleri",
      "5271 sayılı Ceza Muhakemesi Kanunu",
      "5237 sayılı Türk Ceza Kanunu",
      "31 Temmuz 2026 tarihli 7589 sayılı Kanunla değişen hükümler güncel metinden kontrol edilmelidir.",
    ],
    metaTitle: "Ağır Ceza Duruşma Hazırlığı: İddianame ve Delil | Akdağ Hukuk",
    metaDescription:
      "Ağır ceza mahkemesinde iddianamenin incelenmesi, delil planı, duruşma, tanık, bilirkişi ve kanun yolları hakkında genel rehber.",
    status: "published",
    closingNote: genelNot,
  },
];
