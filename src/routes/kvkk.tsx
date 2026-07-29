import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/data/site";

const title = "KVKK Aydınlatma Metni | Akdağ Hukuk ve Danışmanlık";
const description =
  "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Akdağ Hukuk ve Danışmanlık tarafından hazırlanan aydınlatma metni.";

export const Route = createFileRoute("/kvkk")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/kvkk" },
    ],
    links: [{ rel: "canonical", href: "/kvkk" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Hukuki Metinler"
      title="KVKK Aydınlatma Metni"
      intro="6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, veri sorumlusu sıfatıyla kişisel verilerinizin işlenmesine ilişkin bilgilendirme aşağıda yer almaktadır."
      sections={[
        {
          heading: "Veri sorumlusu",
          paragraphs: [
            `${site.name} (${site.lawyer}), bu internet sitesi üzerinden elde edilen kişisel veriler bakımından veri sorumlusudur. İletişim: ${site.contact.email}`,
          ],
        },
        {
          heading: "İşlenen kişisel veriler",
          list: [
            "Kimlik verisi: ad ve soyad",
            "İletişim verisi: e-posta adresi, telefon numarası",
            "İşlem güvenliği verisi: form gönderim zamanı ve teknik kayıtlar",
            "Talebinizin içeriğinde tarafınızca paylaşılan diğer bilgiler",
          ],
        },
        {
          heading: "İşleme amaçları",
          list: [
            "İletişim taleplerinin karşılanması ve tarafınıza dönüş yapılması",
            "Hukuki danışmanlık ve avukatlık hizmetlerinin yürütülmesi",
            "Mevzuattan doğan yükümlülüklerin yerine getirilmesi",
            "Site güvenliğinin sağlanması",
          ],
        },
        {
          heading: "Hukuki sebepler",
          paragraphs: [
            "Kişisel verileriniz; sözleşmenin kurulması veya ifası, hukuki yükümlülüğün yerine getirilmesi, bir hakkın tesisi ile kullanılması ve veri sorumlusunun meşru menfaati hukuki sebeplerine dayanılarak işlenir. Bu sebeplerin bulunmadığı hâllerde işleme açık rızanıza dayanır.",
          ],
        },
        {
          heading: "Aktarım",
          paragraphs: [
            "Kişisel verileriniz, yalnızca mevzuatın zorunlu kıldığı hâllerde yetkili kamu kurum ve kuruluşlarına; hizmetin yürütülmesi için gerekli olduğu ölçüde barındırma ve e-posta hizmeti sağlayıcılarına aktarılabilir. Ticari amaçla üçüncü kişilerle paylaşılmaz.",
          ],
        },
        {
          heading: "Saklama süresi",
          paragraphs: [
            "Veriler, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı süreleri dikkate alınarak saklanır. Sürenin sonunda silinir, yok edilir veya anonim hâle getirilir.",
          ],
        },
        {
          heading: "İlgili kişinin hakları",
          paragraphs: [
            "Kanun'un 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, aktarıldığı üçüncü kişileri öğrenme ve zararın giderilmesini talep etme haklarına sahipsiniz.",
            `Taleplerinizi ${site.contact.email} adresine iletebilirsiniz. Başvurular en geç otuz gün içinde sonuçlandırılır.`,
          ],
        },
      ]}
    />
  ),
});
