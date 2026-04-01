import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const faqs = [
  {
    q: "Combien de temps pour installer Patrimoi ?",
    a: "L'installation est rapide : comptez environ 1 heure pour 100 lots. Nous générons vos QR Codes, vous les collez sur les équipements, et c'est opérationnel. Notre équipe vous accompagne à chaque étape.",
  },
  {
    q: "Est-ce compatible avec notre ERP actuel ?",
    a: "Patrimoi fonctionne en complément de vos outils existants : Septeo, Gercop, LOCKimmo, et d'autres. Nous proposons une intégration API pour les plans Business, permettant une synchronisation automatique des tickets.",
  },
  {
    q: "Les QR Codes résistent-ils dans le temps ?",
    a: "Nos QR Codes sont imprimés sur des stickers industriels résistants à l'eau, aux UV et aux températures extrêmes. Ils sont garantis 5 ans minimum en conditions normales d'utilisation intérieure et extérieure.",
  },
  {
    q: "Les locataires doivent-ils créer un compte ?",
    a: "Non, c'est le principe fondamental de Patrimoi : zéro friction. Le locataire scanne le QR Code avec l'appareil photo de son téléphone, remplit un formulaire pré-rempli, et c'est tout. Aucune application à télécharger, aucun compte à créer.",
  },
  {
    q: "Comment sont protégées les données ?",
    a: "Patrimoi est conforme RGPD. Toutes les données sont hébergées en France sur des infrastructures certifiées HDS (Hébergement de Données de Santé). Les accès sont chiffrés de bout en bout.",
  },
  {
    q: "Puis-je essayer gratuitement ?",
    a: "Oui, notre offre Starter est gratuite pendant 30 jours, jusqu'à 10 lots. C'est suffisant pour tester Patrimoi sur un immeuble pilote et constater les bénéfices avant de déployer à plus grande échelle.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-white patrimoi-mesh-bg" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#007AFF] mb-4">
            Questions fréquentes
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="faq-title"
          >
            Vos questions, nos réponses
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="crystal-card-strong rounded-3xl p-6 md:p-8"
          data-testid="faq-accordion"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-slate-100 last:border-0"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="py-5 text-left text-sm md:text-base font-medium text-slate-800 hover:no-underline hover:text-slate-900">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-500 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
