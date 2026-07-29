import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/data/site";

const title = "Gizlilik Politikası | Akdağ Hukuk ve Danışmanlık";
const description =
  "Akdağ Hukuk ve Danışmanlık internet sitesinde toplanan bilgiler, kullanım amaçları ve gizliliğe ilişkin esaslar.";

export const Route = createFileRoute("/gizlilik")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gizlilik" },
    ],
    links: [{ rel: "canonical", href: "/gizlilik" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Hukuki Metinler"
      title="Gizlilik Politikası"
      intro="Bu politika, internet sitesi ziyaretçilerine ait bilgilerin nasıl toplandığını, hangi amaçlarla kullanıldığını ve nasıl korunduğunu açıklar."
      sections={[
        {
          heading: "Kapsam",
          paragraphs: [
            `Bu politika, ${site.name} tarafından işletilen internet sitesi için geçerlidir. Site üzerinden erişilen üçüncü taraf bağlantıların gizlilik uygulamalarından büro sorumlu değildir.`,
          ],
        },
        {
          heading: "Toplanan bilgiler",
          list: [
            "İletişim formu aracılığıyla tarafınızca iletilen ad, e-posta, telefon ve mesaj içeriği",
            "Sitenin çalışması için gerekli teknik kayıtlar",
          ],
        },
        {
          heading: "Kullanım amacı",
          paragraphs: [
            "Toplanan bilgiler yalnızca talebinizin değerlendirilmesi ve tarafınıza dönüş yapılması amacıyla kullanılır. Pazarlama amacıyla kullanılmaz, satılmaz veya kiralanmaz.",
          ],
        },
        {
          heading: "Meslek sırrı",
          paragraphs: [
            "Avukatlık Kanunu uyarınca müvekkile ilişkin bilgiler meslek sırrı kapsamındadır ve mevzuatın zorunlu kıldığı hâller dışında hiçbir şekilde paylaşılmaz.",
          ],
        },
        {
          heading: "Güvenlik",
          paragraphs: [
            "Bilgilerin yetkisiz erişime karşı korunması için makul teknik ve idari tedbirler uygulanır. İnternet üzerinden yapılan iletimlerde mutlak güvenlik taahhüt edilemeyeceğinden, hassas bilgilerin form yerine yüz yüze görüşmede paylaşılması önerilir.",
          ],
        },
        {
          heading: "İletişim",
          paragraphs: [
            `Bu politikaya ilişkin sorularınızı ${site.contact.email} adresine iletebilirsiniz. Politika, gerekli görüldüğünde güncellenir ve güncel hâli bu sayfada yayımlanır.`,
          ],
        },
      ]}
    />
  ),
});
