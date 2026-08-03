import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { absoluteUrl, site } from "@/data/site";

const title = "Çerez Politikası | Akdağ Hukuk ve Danışmanlık";
const description =
  "Akdağ Hukuk ve Danışmanlık internet sitesinde kullanılan çerezler, türleri ve tarayıcı üzerinden yönetilmesi.";

export const Route = createFileRoute("/cerez-politikasi")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/cerez-politikasi") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/cerez-politikasi") }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Hukuki Metinler"
      title="Çerez Politikası"
      intro="Çerezler, ziyaret ettiğiniz internet siteleri tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Bu politika, sitede kullanılan çerezleri açıklar."
      sections={[
        {
          heading: "Kullanılan çerezler",
          paragraphs: [
            "Bu sitede yalnızca sitenin çalışması için gerekli olan zorunlu çerezler kullanılır. Reklam veya profilleme amaçlı çerez kullanılmaz.",
          ],
          list: [
            "Zorunlu çerezler: oturum bütünlüğü ve güvenlik için gereklidir; devre dışı bırakılamaz.",
            "Analitik çerezler: şu anda kullanılmamaktadır. İleride eklenmesi hâlinde bu sayfa güncellenir ve rızanız alınır.",
          ],
        },
        {
          heading: "Çerezlerin yönetimi",
          paragraphs: [
            "Tarayıcınızın ayarlar bölümünden çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi hâlinde sitenin bazı bölümleri beklendiği gibi çalışmayabilir.",
          ],
        },
        {
          heading: "Üçüncü taraf içerikler",
          paragraphs: [
            "Harita bağlantısı gibi harici hizmetlere yönlendirildiğinizde, ilgili sağlayıcının kendi çerez ve gizlilik uygulamaları geçerli olur.",
          ],
        },
        {
          heading: "İletişim",
          paragraphs: [
            `Çerez uygulamalarına ilişkin sorularınız için ${site.contact.email} adresine yazabilirsiniz.`,
          ],
        },
      ]}
    />
  ),
});
