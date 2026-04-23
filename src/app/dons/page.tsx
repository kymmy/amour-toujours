"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Building2, Mail, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

const items = [
  {
    nameFr: "Parcours moteurs intérieur/extérieur (x2)",
    nameEn: "Indoor/outdoor motor skills course (x2)",
    links: [
      { label: "Wesco", href: "https://www.wesco.fr/of71334-kit-babixplore-le-viaduc-wesco.html" },
    ],
  },
  {
    nameFr: "Table extérieur Little Tikes (x3)",
    nameEn: "Little Tikes outdoor table (x3)",
    links: [
      { label: "Kaufland", href: "https://www.kaufland.fr/product/400400805/" },
      { label: "Amazon", href: "https://amzn.eu/d/0icHT3l8" },
    ],
  },
  {
    nameFr: "Tabouret 5 roulettes (x5)",
    nameEn: "5-wheel stool (x5)",
    links: [
      { label: "Wesco", href: "https://www.wesco.fr/of36758-tabouret-reglable-basic-global.html" },
    ],
  },
  {
    nameFr: "Bac sable/eau avec couvercle",
    nameEn: "Sand/water tray with lid",
    links: [
      { label: "Bac Wesco", href: "https://www.wesco.fr/61707008-kit-2-petites-tables-eco-responsables-wesco.html" },
      { label: "Couvercle Wesco", href: "https://www.wesco.fr/of29692-couvercle-pour-petite-table-d-activites-wesco.html" },
    ],
  },
];

export default function DonsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Nav ─────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Amour Toujours
          </Link>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <span
              className="hidden sm:inline-block text-xs font-semibold bg-amour-red text-white px-3 py-1 rounded-full"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("Collecte", "Collection")}
            </span>
          </div>
        </div>
      </nav>

      {/* ── Header ──────────────────────────────────────────────── */}
      <header className="bg-amour-cream py-16 md:py-24">
        <div className="flex flex-col items-center text-center px-4">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Heart className="w-16 h-16 text-amour-red mx-auto mb-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("Soutenir la Crèche du Château", "Support La Crèche du Château")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-amour-red italic text-lg md:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("Initiative Solidaire Locale", "Local Solidarity Initiative")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 max-w-xl text-muted-foreground text-sm md:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "La Crèche du Château accueille 85 enfants dans un bâtiment provençal rénové de 863 m² avec 277 m² d'espace extérieur, situé au cœur de Saint-Barnabé à Marseille.",
              "La Crèche du Château welcomes 85 children in a renovated 863 m² Provençal building with 277 m² of outdoor space, located in the heart of Saint-Barnabé, Marseille."
            )}
          </motion.p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-12 md:space-y-16">
        {/* ── Contact ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("Contact", "Contact")}
          </h2>

          <div className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-sm">
            <div className="space-y-4" style={{ fontFamily: "var(--font-body)" }}>
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-amour-red flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Natty HAULET</p>
                  <p className="text-sm text-muted-foreground">
                    {t("Directrice de la crèche", "Nursery Director")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amour-red flex-shrink-0" />
                <p className="text-sm text-foreground">156 rue Montaigne, 13012 Marseille</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amour-red flex-shrink-0" />
                <a
                  href="mailto:lacrecheduchateau@france-horizon.fr"
                  className="text-sm text-amour-red underline hover:text-amour-red/80 transition-colors"
                >
                  lacrecheduchateau@france-horizon.fr
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Matériels utiles et adaptés ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("Matériels utiles et adaptés", "Useful and suitable equipment")}
          </h2>

          <div className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-sm">
            <p
              className="text-foreground leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Pour faire suite à notre échange de vendredi voici quelques liens de matériels utiles et adaptés :",
                "Following our Friday discussion, here are some links to useful and suitable equipment:"
              )}
            </p>

            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.nameFr}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <p
                    className="font-semibold text-foreground flex-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t(item.nameFr, item.nameEn)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-amour-red bg-amour-red/10 px-3 py-1.5 rounded-full hover:bg-amour-red/20 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <ExternalLink className="w-3 h-3" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>
                {t(
                  "Merci infiniment pour votre investissement.",
                  "Thank you so much for your commitment."
                )}
              </p>
              <p className="mt-1">
                {t(
                  "Je reste disponible pour tout complément d'information.",
                  "I remain available for any additional information."
                )}
              </p>
              <p className="mt-3 font-semibold text-foreground">Natty HAULET</p>
            </div>
          </div>
        </motion.div>

        {/* ── CTA footer ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center py-8"
        >
          <Heart className="w-8 h-8 text-amour-red mx-auto mb-3" />
          <p
            className="text-amour-red italic text-lg md:text-xl font-semibold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Amour Toujours
          </p>
          <p
            className="text-muted-foreground text-sm mt-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "Une initiative solidaire locale — Saint-Barnabé, Marseille",
              "A local solidarity initiative — Saint-Barnabé, Marseille"
            )}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
