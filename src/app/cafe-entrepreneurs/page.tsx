"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Coffee, MapPin, Clock, Users } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

export default function CafeEntrepreneursPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-amour-cream text-foreground">
      {/* ── Nav ─────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-amour-cream/80 border-b border-border">
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
              {t("Événement", "Event")}
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-12 md:space-y-16">
        {/* ── Hero image ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={
                lang === "fr"
                  ? "/cafe-entrepreneurs-solidaires.jpg"
                  : "/cafe-entrepreneurs-en.jpg"
              }
              alt={t(
                "Café des Entrepreneurs Solidaires",
                "Solidarity Entrepreneurs Café"
              )}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* ── Title section ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h1
            className="text-3xl md:text-5xl font-bold text-amour-red mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t(
              "Café des Entrepreneurs Solidaires",
              "Solidarity Entrepreneurs Café"
            )}
          </h1>
          <p
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "Un rendez-vous mensuel autour d'un café pour connecter les entrepreneurs locaux, partager des idées et renforcer la solidarité dans le quartier.",
              "A monthly morning meetup over coffee to connect local entrepreneurs, share ideas, and strengthen solidarity in the neighbourhood."
            )}
          </p>
        </motion.div>

        {/* ── Details grid ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {/* Location */}
          <div className="rounded-2xl bg-card border border-border p-6 text-center shadow-sm">
            <MapPin className="w-6 h-6 text-amour-red mx-auto mb-3" />
            <p
              className="font-semibold text-foreground text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Café Marrou
            </p>
            <p
              className="text-muted-foreground text-xs mt-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Saint-Barnabé, Marseille
            </p>
          </div>

          {/* Time */}
          <div className="rounded-2xl bg-card border border-border p-6 text-center shadow-sm">
            <Clock className="w-6 h-6 text-amour-red mx-auto mb-3" />
            <p
              className="font-semibold text-foreground text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("6 mars", "March 6th")}
            </p>
            <p
              className="text-muted-foreground text-xs mt-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("À partir de 9h30", "From 9:30 AM")}
            </p>
          </div>

          {/* Audience */}
          <div className="rounded-2xl bg-card border border-border p-6 text-center shadow-sm">
            <Users className="w-6 h-6 text-amour-red mx-auto mb-3" />
            <p
              className="font-semibold text-foreground text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("Ouvert à tous", "Open to all")}
            </p>
            <p
              className="text-muted-foreground text-xs mt-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Gratuit — venez comme vous êtes !",
                "Free — just show up!"
              )}
            </p>
          </div>
        </motion.div>

        {/* ── Who is it for ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-6 h-6 text-amour-red" />
              <h2
                className="text-xl md:text-2xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Pour qui ?", "Who is it for?")}
              </h2>
            </div>

            <ul
              className="space-y-4 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                <span className="font-bold text-amour-red">
                  {t("Expats : ", "Expats: ")}
                </span>
                {t(
                  "Vous venez d'arriver dans le quartier ou à Marseille ? C'est l'occasion idéale de rencontrer des gens, de vous intégrer et de découvrir le tissu local.",
                  "Just arrived in the neighbourhood or in Marseille? This is the perfect opportunity to meet people, settle in, and discover the local fabric."
                )}
              </li>
              <li>
                <span className="font-bold text-amour-red">
                  {t("Entrepreneurs : ", "Entrepreneurs: ")}
                </span>
                {t(
                  "Porteurs de projets, indépendants, commerçants — venez partager vos expériences, trouver des partenaires et développer votre réseau.",
                  "Project leaders, freelancers, shopkeepers — come share your experiences, find partners, and grow your network."
                )}
              </li>
              <li>
                <span className="font-bold text-amour-red">
                  {t("Télétravailleurs : ", "Remote Workers: ")}
                </span>
                {t(
                  "Sortez de chez vous le temps d'un café ! Rencontrez d'autres professionnels du quartier et brisez l'isolement du travail à distance.",
                  "Step out for a coffee! Meet other professionals from the neighbourhood and break the isolation of remote work."
                )}
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ── What to expect ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-amour-red rounded-2xl p-6 md:p-8 text-white">
            <h2
              className="text-xl md:text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Au programme", "What to expect")}
            </h2>

            <ul
              className="space-y-3 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                ☕{" "}
                {t(
                  "Café et viennoiseries offerts pour bien commencer la journée",
                  "Complimentary coffee and pastries to start the day right"
                )}
              </li>
              <li>
                💬{" "}
                {t(
                  "Tour de table : chacun se présente et partage ses projets en cours",
                  "Round table: everyone introduces themselves and shares their current projects"
                )}
              </li>
              <li>
                🤝{" "}
                {t(
                  "Échanges libres et mise en relation entre participants",
                  "Open exchanges and networking between participants"
                )}
              </li>
              <li>
                🌍{" "}
                {t(
                  "Discussion sur les opportunités locales et les besoins du quartier",
                  "Discussion on local opportunities and neighbourhood needs"
                )}
              </li>
              <li>
                ❤️{" "}
                {t(
                  "Un moment convivial pour renforcer les liens de solidarité",
                  "A friendly moment to strengthen solidarity bonds"
                )}
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ── CTA footer ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
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
