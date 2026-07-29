export interface PracticeArea {
  slug: string;
  title: string;
  /** Kart ve listelerde kullanılan en fazla iki satırlık açıklama */
  summary: string;
  featured: boolean;
  order: number;
  /** Detay sayfası H1 */
  heading: string;
  intro: string;
  scope: string[];
  processes: string[];
  situations: string[];
  processNote: string;
  metaTitle: string;
  metaDescription: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "aile-hukuku",
    title: "Aile Hukuku",
    summary:
      "Boşanma, velayet, nafaka ve mal rejimi süreçlerinde düzenli hazırlık ve ölçülü temsil.",
    featured: true,
    order: 1,
    heading: "Aile Hukuku: Boşanma, Velayet ve Mal Rejimi Süreçleri",
    intro:
      "Aile hukuku uyuşmazlıkları, hukuki olduğu kadar kişisel sonuçları da olan süreçlerdir. Bu nedenle dosyanın baştan doğru kurgulanması, belgelerin eksiksiz hazırlanması ve süreç boyunca açık iletişim kurulması önem taşır.",
    scope: [
      "Anlaşmalı ve çekişmeli boşanma davaları",
      "Velayet, kişisel ilişki kurulması ve nafaka talepleri",
      "Edinilmiş mallara katılma rejiminden kaynaklanan alacak davaları",
      "Aile konutu şerhi ve koruma tedbiri talepleri",
      "Soybağı ve tanıma-tenfiz işlemleri",
    ],
    processes: [
      "Dava öncesi hukuki durum değerlendirmesi ve belge derlemesi",
      "Anlaşmalı boşanma protokolünün hazırlanması",
      "Dava dilekçesi, cevap dilekçesi ve delil listesinin sunulması",
      "Tedbir nafakası ve geçici velayet taleplerinin takibi",
      "Karar sonrası tescil ve icra aşaması",
    ],
    situations: [
      "Tarafların bazı konularda anlaşıp bazı konularda anlaşamaması",
      "Velayet ve kişisel ilişki düzeninin uygulanmasında yaşanan sorunlar",
      "Nafaka miktarının değişen koşullara göre uyarlanması ihtiyacı",
      "Evlilik birliği içinde edinilen malvarlığının paylaşımı",
    ],
    processNote:
      "Süreç, uyuşmazlığın kapsamına ve mahkemenin iş yoğunluğuna göre değişir. Anlaşmalı süreçler genellikle daha kısa sürerken, çekişmeli dosyalarda delil ve bilirkişi aşamaları süreyi etkiler.",
    metaTitle: "Aile Hukuku | Boşanma, Velayet ve Nafaka | Akdağ Hukuk",
    metaDescription:
      "Boşanma, velayet, nafaka ve mal rejimi süreçlerine ilişkin genel bilgilendirme. Bursa'da aile hukuku alanında avukatlık ve danışmanlık hizmeti.",
  },
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    summary:
      "Soruşturma ve kovuşturma aşamalarında savunma hazırlığı, müşteki ve şüpheli vekilliği.",
    featured: true,
    order: 2,
    heading: "Ceza Hukuku: Soruşturma ve Kovuşturma Aşamalarında Temsil",
    intro:
      "Ceza yargılamasında ilk saatlerde alınan ifade ve toplanan deliller, sürecin tamamını etkileyebilir. Dosyanın erken aşamada incelenmesi ve savunmanın usulüne uygun biçimde kurulması bu nedenle önemlidir.",
    scope: [
      "Soruşturma aşamasında şüpheli ve müşteki vekilliği",
      "Kovuşturma aşamasında sanık müdafiliği ve katılan vekilliği",
      "İtiraz, istinaf ve temyiz başvuruları",
      "Tutuklama ve adli kontrol kararlarına itiraz",
      "Uzlaştırma ve ön ödeme süreçleri",
    ],
    processes: [
      "Soruşturma dosyasının incelenmesi ve kısıtlama kararlarının değerlendirilmesi",
      "İfade ve sorgu aşamasında hazır bulunma",
      "Savunma dilekçesi ve delil taleplerinin hazırlanması",
      "Duruşmaların takibi ve beyanların dosyaya geçirilmesi",
      "Kanun yollarına başvuru",
    ],
    situations: [
      "Şikâyet üzerine başlatılan soruşturmalarda beyan hazırlığı",
      "Adli kontrol veya tutukluluk durumunun gözden geçirilmesi",
      "Mağdur veya müşteki olarak dosyaya katılma",
      "Hükmün açıklanmasının geri bırakılması ve infaz sorunları",
    ],
    processNote:
      "Ceza yargılamasında süreler kesindir ve kaçırılması hak kaybına yol açabilir. Tebligat tarihleri ve itiraz süreleri dosya boyunca takip edilir.",
    metaTitle: "Ceza Hukuku | Soruşturma ve Kovuşturma | Akdağ Hukuk",
    metaDescription:
      "Soruşturma ve kovuşturma aşamalarında savunma, müşteki vekilliği ve kanun yolları hakkında genel bilgilendirme. Bursa'da ceza hukuku alanında hizmet.",
  },
  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    summary:
      "İşçi ve işveren tarafında fesih, alacak ve kurum uyuşmazlıklarının yürütülmesi.",
    featured: true,
    order: 3,
    heading: "İş Hukuku: Fesih, İşçilik Alacakları ve İş Kazası Süreçleri",
    intro:
      "İş ilişkisinden doğan uyuşmazlıklarda kayıtlar belirleyicidir. Bordro, puantaj, özlük dosyası ve yazışmaların baştan incelenmesi, talebin doğru kurulmasını sağlar.",
    scope: [
      "İş sözleşmesinin feshi ve işe iade süreçleri",
      "Kıdem, ihbar, fazla mesai ve yıllık izin alacakları",
      "İş kazası ve meslek hastalığından doğan talepler",
      "Mobbing ve eşit davranma yükümlülüğüne ilişkin uyuşmazlıklar",
      "İşveren tarafında sözleşme ve insan kaynakları süreçlerinin gözden geçirilmesi",
    ],
    processes: [
      "Zorunlu arabuluculuk başvurusu ve görüşmelerin yürütülmesi",
      "Alacak hesaplamasının belgelerle birlikte hazırlanması",
      "Dava açılması ve bilirkişi raporlarına itiraz",
      "İşe iade davasında süre ve başvuru koşullarının takibi",
      "Karar sonrası icra takibi",
    ],
    situations: [
      "Feshin geçerli veya haklı sayılıp sayılmayacağının değerlendirilmesi",
      "Fazla çalışmanın ispatı ve tanık beyanları",
      "Ücretin bir kısmının kayıt dışı ödendiği iddiaları",
      "İhbar ve kıdem tazminatının hesaplanmasında dönem farkları",
    ],
    processNote:
      "İş davalarının büyük bölümünde dava açılmadan önce arabulucuya başvurmak zorunludur. Bu aşamanın usulüne uygun tamamlanması gerekir.",
    metaTitle: "İş Hukuku | Fesih ve İşçilik Alacakları | Akdağ Hukuk",
    metaDescription:
      "İşe iade, kıdem ve ihbar tazminatı, fazla mesai ve iş kazası süreçlerine ilişkin genel bilgilendirme. Bursa'da iş hukuku alanında avukatlık hizmeti.",
  },
  {
    slug: "gayrimenkul-ve-kira-hukuku",
    title: "Gayrimenkul ve Kira Hukuku",
    summary:
      "Tapu, ortaklığın giderilmesi, kira tespiti ve tahliye süreçlerinin yürütülmesi.",
    featured: true,
    order: 4,
    heading: "Gayrimenkul ve Kira Hukuku: Tapu, Kira ve Tahliye Süreçleri",
    intro:
      "Taşınmaza ilişkin uyuşmazlıklarda tapu kaydı, sözleşme metni ve fiili kullanım birlikte değerlendirilir. Sürecin başında yapılan kayıt incelemesi çoğu zaman yönü belirler.",
    scope: [
      "Tapu iptali ve tescil davaları",
      "Ortaklığın giderilmesi (izale-i şuyu) davaları",
      "Kira bedelinin tespiti ve uyarlanması",
      "Tahliye davaları ve ihtarname süreçleri",
      "Kat mülkiyetinden doğan uyuşmazlıklar",
    ],
    processes: [
      "Tapu ve belediye kayıtlarının incelenmesi",
      "İhtarname düzenlenmesi ve tebliği",
      "Tespit ve delil tespiti taleplerinin yapılması",
      "Dava sürecinde keşif ve bilirkişi aşamasının takibi",
      "İcra yoluyla tahliye",
    ],
    situations: [
      "Kira bedelinin güncel koşullara göre uyarlanması talebi",
      "İhtiyaç nedeniyle tahliye taleplerinin koşulları",
      "Hisseli taşınmazlarda kullanım ve satış anlaşmazlıkları",
      "Ödenmeyen kira ve yan giderlerin tahsili",
    ],
    processNote:
      "Kira uyuşmazlıklarının önemli bir bölümünde dava öncesi arabuluculuk zorunludur. Tahliye taleplerinde ise süre ve bildirim koşulları belirleyicidir.",
    metaTitle: "Gayrimenkul ve Kira Hukuku | Tapu ve Tahliye | Akdağ Hukuk",
    metaDescription:
      "Tapu iptali, ortaklığın giderilmesi, kira tespiti ve tahliye süreçlerine ilişkin genel bilgilendirme. Bursa'da gayrimenkul hukuku alanında hizmet.",
  },
  {
    slug: "ticaret-ve-sirketler-hukuku",
    title: "Ticaret ve Şirketler Hukuku",
    summary:
      "Şirket kuruluşu, sözleşme yönetimi ve ticari uyuşmazlıklarda düzenli danışmanlık.",
    featured: true,
    order: 5,
    heading: "Ticaret ve Şirketler Hukuku: Sözleşme ve Uyuşmazlık Yönetimi",
    intro:
      "Ticari ilişkilerde uyuşmazlığın önlenmesi, sonradan çözülmesinden daha az maliyetlidir. Sözleşmelerin ve şirket içi kararların baştan doğru kurgulanması bu nedenle önceliklidir.",
    scope: [
      "Şirket kuruluşu, tür değişikliği ve genel kurul işlemleri",
      "Ortaklar arası uyuşmazlıklar ve pay devri",
      "Ticari sözleşmelerin hazırlanması ve incelenmesi",
      "Cari hesap ve ticari alacak takibi",
      "Haksız rekabet ve ticari unvan uyuşmazlıkları",
    ],
    processes: [
      "Mevcut sözleşme ve ticari kayıtların gözden geçirilmesi",
      "Sözleşme taslağının hazırlanması ve müzakere desteği",
      "İhtarname ve arabuluculuk başvurusu",
      "Ticari dava ve tahkim süreçlerinin yürütülmesi",
      "Karar sonrası tahsil aşaması",
    ],
    situations: [
      "Ortaklar arasında karar alma ve kâr dağıtımı anlaşmazlıkları",
      "Teslim ve ayıp iddialarıyla ödemenin durdurulması",
      "Genel kurul kararlarının iptali talepleri",
      "Uzun süredir tahsil edilemeyen ticari alacaklar",
    ],
    processNote:
      "Ticari davaların büyük bölümünde konusu bir miktar paranın ödenmesi olan taleplerde arabuluculuk dava şartıdır.",
    metaTitle: "Ticaret ve Şirketler Hukuku | Sözleşme ve Dava | Akdağ Hukuk",
    metaDescription:
      "Şirket kuruluşu, pay devri, ticari sözleşmeler ve alacak takibi hakkında genel bilgilendirme. Bursa'da ticaret hukuku alanında avukatlık hizmeti.",
  },
  {
    slug: "miras-hukuku",
    title: "Miras Hukuku",
    summary:
      "Mirasçılık belgesi, tenkis ve miras paylaşımı süreçlerinin yürütülmesi.",
    featured: false,
    order: 6,
    heading: "Miras Hukuku: Paylaşım, Tenkis ve Mirasın Reddi",
    intro:
      "Miras uyuşmazlıklarında terekenin kapsamı ve mirasçıların hukuki durumu birlikte belirlenir. Süreler ve tereke tespiti bu alanda özellikle önemlidir.",
    scope: [
      "Mirasçılık belgesi alınması ve iptali",
      "Mirasın reddi ve tereke tespiti",
      "Tenkis ve muris muvazaası davaları",
      "Miras taksim sözleşmeleri",
      "Vasiyetname ve ölüme bağlı tasarruflar",
    ],
    processes: [
      "Nüfus ve tapu kayıtlarıyla terekenin belirlenmesi",
      "Mirasın reddi süresinin değerlendirilmesi",
      "Dava dilekçesinin hazırlanması ve delillerin sunulması",
      "Keşif ve bilirkişi aşamasının takibi",
      "Paylaşımın tapu nezdinde uygulanması",
    ],
    situations: [
      "Murisin sağlığında yaptığı devirlerin sorgulanması",
      "Saklı payın ihlal edildiği iddiaları",
      "Mirasçılar arasında paylaşımda anlaşmazlık",
      "Borca batık terekede ret süresi",
    ],
    processNote:
      "Mirasın reddi gibi taleplerde kanuni süreler kısadır; bu nedenle sürecin erken değerlendirilmesi gerekir.",
    metaTitle: "Miras Hukuku | Tenkis, Paylaşım ve Mirasın Reddi | Akdağ Hukuk",
    metaDescription:
      "Mirasçılık belgesi, tenkis, muris muvazaası ve mirasın reddi süreçlerine ilişkin genel bilgilendirme. Bursa'da miras hukuku alanında hizmet.",
  },
  {
    slug: "icra-ve-iflas-hukuku",
    title: "İcra ve İflas Hukuku",
    summary:
      "Alacak takibi, itirazın iptali ve haciz süreçlerinin düzenli yürütülmesi.",
    featured: false,
    order: 7,
    heading: "İcra ve İflas Hukuku: Alacak Takibi ve İtiraz Süreçleri",
    intro:
      "İcra takibinde doğru takip türünün seçilmesi ve sürelerin takibi, alacağın tahsil edilebilirliğini doğrudan etkiler.",
    scope: [
      "İlamlı ve ilamsız icra takipleri",
      "İtirazın kaldırılması ve itirazın iptali davaları",
      "Haciz, muhafaza ve satış işlemleri",
      "İstihkak ve şikâyet başvuruları",
      "Konkordato ve iflas süreçleri",
    ],
    processes: [
      "Alacağın belgelerle birlikte değerlendirilmesi",
      "Takip talebinin düzenlenmesi ve ödeme emri tebliği",
      "İtiraz halinde dava yoluna geçilmesi",
      "Mal varlığı araştırması ve haciz",
      "Satış ve paranın paylaştırılması",
    ],
    situations: [
      "Ödeme emrine süresinde itiraz edilmesi",
      "Borçlunun mal kaçırdığı iddiaları",
      "Maaş ve banka hesabı hacizlerinde sınırlar",
      "Üçüncü kişilerin istihkak iddiaları",
    ],
    processNote:
      "İcra hukukunda süreler gün bazında işler; ödeme emri tebliğinden sonraki itiraz süresi özellikle takip edilmelidir.",
    metaTitle: "İcra ve İflas Hukuku | Alacak Takibi ve Haciz | Akdağ Hukuk",
    metaDescription:
      "İcra takibi, itirazın iptali, haciz ve satış süreçlerine ilişkin genel bilgilendirme. Bursa'da icra ve iflas hukuku alanında avukatlık hizmeti.",
  },
  {
    slug: "borclar-hukuku",
    title: "Borçlar Hukuku",
    summary:
      "Sözleşmeden ve haksız fiilden doğan tazminat ve alacak uyuşmazlıkları.",
    featured: false,
    order: 8,
    heading: "Borçlar Hukuku: Sözleşme, Tazminat ve Alacak Uyuşmazlıkları",
    intro:
      "Borç ilişkisinin kaynağı, ispat yükünü ve izlenecek yolu belirler. Sözleşme metni ile fiili uygulama arasındaki farklar çoğu uyuşmazlığın merkezindedir.",
    scope: [
      "Sözleşmelerin kurulması, yorumu ve feshi",
      "Maddi ve manevi tazminat talepleri",
      "Sebepsiz zenginleşme davaları",
      "Alacağın temliki ve borcun üstlenilmesi",
      "Cezai şart ve teminat uyuşmazlıkları",
    ],
    processes: [
      "Sözleşme ve yazışmaların incelenmesi",
      "İhtarname ile temerrüdün oluşturulması",
      "Arabuluculuk başvurusu",
      "Dava açılması ve bilirkişi incelemesi",
      "Karar sonrası tahsil",
    ],
    situations: [
      "Edimin gereği gibi yerine getirilmemesi",
      "Ayıplı ifa ve ayıp bildirim süreleri",
      "Zamanaşımı def'inin ileri sürülmesi",
      "Ön ödemeli satışlarda cayma talepleri",
    ],
    processNote:
      "Talebin türüne göre zamanaşımı süreleri değişir; bu nedenle sürecin başında zamanaşımı değerlendirmesi yapılır.",
    metaTitle: "Borçlar Hukuku | Sözleşme ve Tazminat | Akdağ Hukuk",
    metaDescription:
      "Sözleşmeden ve haksız fiilden doğan tazminat ile alacak uyuşmazlıklarına ilişkin genel bilgilendirme. Bursa'da borçlar hukuku alanında hizmet.",
  },
  {
    slug: "tuketici-hukuku",
    title: "Tüketici Hukuku",
    summary:
      "Ayıplı mal ve hizmet, hakem heyeti ve tüketici mahkemesi başvuruları.",
    featured: false,
    order: 9,
    heading: "Tüketici Hukuku: Ayıplı Mal, Hizmet ve Başvuru Yolları",
    intro:
      "Tüketici uyuşmazlıklarında parasal sınıra göre hakem heyeti veya tüketici mahkemesi yetkilidir. Başvurunun doğru mercie yapılması süreci kısaltır.",
    scope: [
      "Ayıplı mal ve ayıplı hizmet talepleri",
      "Mesafeli satış ve cayma hakkı",
      "Tüketici kredisi ve banka masrafları",
      "Devre tatil ve abonelik sözleşmeleri",
      "Haksız şart iddiaları",
    ],
    processes: [
      "Uyuşmazlığın parasal sınıra göre değerlendirilmesi",
      "Tüketici hakem heyetine başvuru",
      "Tüketici mahkemesinde dava açılması",
      "Bilirkişi raporunun değerlendirilmesi",
      "Kararın icrası",
    ],
    situations: [
      "Onarım, değişim veya bedel iadesi seçimlik hakları",
      "Garanti süresi içinde tekrarlayan arızalar",
      "İnternetten yapılan alışverişlerde teslim sorunları",
      "Sözleşmeden tek taraflı dönme iddiaları",
    ],
    processNote:
      "Parasal sınırlar her yıl güncellenir; başvuru mercii bu güncel değerlere göre belirlenir.",
    metaTitle: "Tüketici Hukuku | Ayıplı Mal ve Hakem Heyeti | Akdağ Hukuk",
    metaDescription:
      "Ayıplı mal ve hizmet, cayma hakkı, hakem heyeti ve tüketici mahkemesi süreçlerine ilişkin genel bilgilendirme. Bursa'da tüketici hukuku hizmeti.",
  },
  {
    slug: "idare-hukuku",
    title: "İdare Hukuku",
    summary:
      "İdari işlemin iptali, tam yargı ve idari başvuru süreçlerinin takibi.",
    featured: false,
    order: 10,
    heading: "İdare Hukuku: İptal Davası ve Tam Yargı Süreçleri",
    intro:
      "İdari yargıda süreler kısa ve kesindir. İşlemin tebliğ tarihinden itibaren yapılacak değerlendirme, hak kaybının önlenmesi bakımından belirleyicidir.",
    scope: [
      "İdari işlemin iptali davaları",
      "Tam yargı (tazminat) davaları",
      "İmar ve ruhsat uyuşmazlıkları",
      "Kamu görevlileri disiplin süreçleri",
      "İdari para cezalarına itiraz",
    ],
    processes: [
      "İşlemin ve dayanağının incelenmesi",
      "İdareye başvuru ve yürütmenin durdurulması talebi",
      "Dava dilekçesinin süresinde sunulması",
      "Ara kararların ve savunmaların takibi",
      "İstinaf ve temyiz başvuruları",
    ],
    situations: [
      "Yürütmenin durdurulması talebinin gerekçelendirilmesi",
      "İmar planı değişikliklerine karşı başvurular",
      "Disiplin cezalarının usul yönünden denetimi",
      "İdari para cezalarında görevli yargı yeri",
    ],
    processNote:
      "İdari yargıda dava açma süresi genellikle tebliğden itibaren işler; sürenin kaçırılması esasa girilmeden ret sonucunu doğurabilir.",
    metaTitle: "İdare Hukuku | İptal ve Tam Yargı Davaları | Akdağ Hukuk",
    metaDescription:
      "İdari işlemin iptali, tam yargı davaları, imar ve disiplin süreçlerine ilişkin genel bilgilendirme. Bursa'da idare hukuku alanında avukatlık hizmeti.",
  },
  {
    slug: "insaat-hukuku",
    title: "İnşaat Hukuku",
    summary:
      "Kat karşılığı inşaat sözleşmeleri, gecikme ve ayıp uyuşmazlıkları.",
    featured: false,
    order: 11,
    heading: "İnşaat Hukuku: Kat Karşılığı Sözleşmeler ve Teslim Uyuşmazlıkları",
    intro:
      "İnşaat uyuşmazlıklarında sözleşme, ruhsat ve teknik raporlar birlikte değerlendirilir. Teslim tarihi ve imalat kalemleri çoğu zaman uyuşmazlığın merkezindedir.",
    scope: [
      "Kat karşılığı inşaat sözleşmeleri",
      "Gecikme tazminatı ve cezai şart talepleri",
      "Ayıplı imalat ve eksik iş bedeli",
      "Yapı ruhsatı ve iskân sorunları",
      "Kentsel dönüşüm süreçleri",
    ],
    processes: [
      "Sözleşme ve teknik şartnamenin incelenmesi",
      "Delil tespiti talebiyle mevcut durumun belirlenmesi",
      "İhtar ve süre verilmesi",
      "Dava sürecinde keşif ve bilirkişi raporları",
      "Tapu ve tescil işlemlerinin tamamlanması",
    ],
    situations: [
      "Teslimin gecikmesi ve kira kaybı talepleri",
      "Projeye aykırı imalat iddiaları",
      "Arsa sahibi ile yüklenici arasındaki pay anlaşmazlıkları",
      "İskân alınamaması nedeniyle kullanım sorunları",
    ],
    processNote:
      "Bu alanda teknik bilirkişi raporları belirleyicidir; rapora karşı süresinde ve teknik gerekçeyle itiraz edilmesi önem taşır.",
    metaTitle: "İnşaat Hukuku | Kat Karşılığı Sözleşme ve Ayıp | Akdağ Hukuk",
    metaDescription:
      "Kat karşılığı inşaat sözleşmeleri, gecikme tazminatı ve ayıplı imalat süreçlerine ilişkin genel bilgilendirme. Bursa'da inşaat hukuku hizmeti.",
  },
  {
    slug: "yabancilar-hukuku",
    title: "Yabancılar Hukuku",
    summary:
      "Oturma izni, vatandaşlık ve yabancıların taşınmaz edinimi süreçleri.",
    featured: false,
    order: 12,
    heading: "Yabancılar Hukuku: İkamet, Vatandaşlık ve Taşınmaz Edinimi",
    intro:
      "Yabancılar hukukunda idari başvurular, belge standartları ve süreler belirleyicidir. Eksik belge çoğu zaman sürecin uzamasına yol açar.",
    scope: [
      "İkamet izni başvuruları ve uzatma işlemleri",
      "Türk vatandaşlığının kazanılması",
      "Çalışma izni süreçleri",
      "Yabancıların taşınmaz edinimi",
      "Sınır dışı ve idari gözetim kararlarına itiraz",
    ],
    processes: [
      "Başvuru koşullarının değerlendirilmesi",
      "Belgelerin tercüme ve apostil işlemleri",
      "İdari başvurunun yapılması ve takibi",
      "Ret kararlarına karşı itiraz ve dava",
      "Tapu ve noter işlemlerinin yürütülmesi",
    ],
    situations: [
      "İkamet izni başvurusunun reddi",
      "Vatandaşlık başvurusunda belge eksiklikleri",
      "Taşınmaz ediniminde askeri yasak bölge incelemesi",
      "Sınır dışı kararına karşı süreli itiraz",
    ],
    processNote:
      "İdari kararlara karşı başvuru süreleri kısadır ve kararın tebliğ biçimine göre değişebilir.",
    metaTitle: "Yabancılar Hukuku | İkamet İzni ve Vatandaşlık | Akdağ Hukuk",
    metaDescription:
      "İkamet izni, çalışma izni, vatandaşlık ve yabancıların taşınmaz edinimi süreçlerine ilişkin genel bilgilendirme. Bursa'da yabancılar hukuku hizmeti.",
  },
];

export const featuredAreas = practiceAreas
  .filter((a) => a.featured)
  .sort((a, b) => a.order - b.order);

export const secondaryAreas = practiceAreas
  .filter((a) => !a.featured)
  .sort((a, b) => a.order - b.order);

export function getArea(slug: string) {
  return practiceAreas.find((a) => a.slug === slug);
}
