"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Coffee, MapPin, Clock, Users, Calendar } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";
import { QRCodeSVG } from "qrcode.react";

export default function CafeEntrepreneursPage() {
  const { t } = useLanguage();

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
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <Image
              src="/cafe-saint-barnabe.jpg"
              alt={t("Église Saint-Barnabé", "Saint-Barnabé Church")}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amour-red/85 to-rose-900/80" />
            <div className="relative z-10 space-y-4 py-6 md:py-10">
              <p
                className="text-sm md:text-base font-semibold tracking-widest uppercase text-white/80"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Amour Toujours {t("présente", "presents")}
              </p>
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Cercle des", "Solidarity")}
                <br />
                {t("Entrepreneurs", "Entrepreneurs")}
                <br />
                {t("Solidaires", "Circle")}
              </h2>
              <div className="w-16 h-0.5 bg-white/50 mx-auto" />
              <div style={{ fontFamily: "var(--font-body)" }}>
                <p className="text-lg md:text-2xl font-bold">
                  {t("Vendredi 11 avril 2026", "Friday, April 11th 2026")}
                </p>
                <p className="text-base md:text-lg text-white/80 mt-1">
                  9h30 — 11h00 · <a href="https://maps.app.goo.gl/JnEovpdt9ZjNCPgd6" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Café Marrou</a>
                </p>
              </div>
              <div className="pt-4">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold">
                  {t("Entrée libre & gratuite", "Free entry")}
                </span>
              </div>
            </div>
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
              "Cercle des Entrepreneurs Solidaires",
              "Solidarity Entrepreneurs Circle"
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
          {/* Date */}
          <div className="rounded-2xl bg-card border border-border p-6 text-center shadow-sm">
            <Calendar className="w-6 h-6 text-amour-red mx-auto mb-3" />
            <p
              className="font-semibold text-foreground text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("Vendredi 11 avril 2026", "Friday, April 11th 2026")}
            </p>
            <p
              className="text-muted-foreground text-xs mt-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("9h30 — 11h00", "9:30 AM — 11:00 AM")}
            </p>
          </div>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/JnEovpdt9ZjNCPgd6"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-card border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <MapPin className="w-6 h-6 text-amour-red mx-auto mb-3" />
            <p
              className="font-semibold text-foreground text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Café Marrou
            </p>
            <p
              className="text-muted-foreground text-xs mt-1 underline"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Saint-Barnabé, Marseille
            </p>
          </a>

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

        {/* ── Programme ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-amour-red rounded-2xl p-6 md:p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6" />
              <h2
                className="text-xl md:text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Programme", "Schedule")}
              </h2>
            </div>

            <div
              className="space-y-6 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {/* 9h30 - 10h */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-white/90">
                  9h30 — 10h
                </div>
                <div>
                  <p className="font-semibold">{t("Café libre", "Open coffee")}</p>
                  <p className="text-white/80 mt-1">
                    {t(
                      "Accueil convivial autour d'un café et viennoiseries. L'occasion de se retrouver et de faire connaissance.",
                      "Friendly welcome over coffee and pastries. A chance to catch up and meet new people."
                    )}
                  </p>
                </div>
              </div>

              {/* 10h - 11h */}
              <div className="border-t border-white/20 pt-6 flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-white/90">
                  10h — 11h
                </div>
                <div>
                  <p className="font-semibold">
                    {t(
                      "Présentation : Créer son association",
                      "Talk: Starting a non-profit"
                    )}
                  </p>
                  <p className="text-white/80 mt-1">
                    {t(
                      "Charlène, fondatrice de l'association BabySocial Club, partage son expérience et ses conseils pour créer et structurer une association.",
                      "Charlène, founder of the BabySocial Club association, shares her experience and advice on creating and structuring a non-profit."
                    )}
                  </p>
                  <a
                    href="https://www.instagram.com/babysocialclubmarseille/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    @babysocialclubmarseille
                  </a>
                </div>
              </div>
            </div>
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
              <li>
                <span className="font-bold text-amour-red">
                  {t("Associatifs : ", "Non-profit leaders: ")}
                </span>
                {t(
                  "Vous portez ou souhaitez créer une association ? Venez échanger avec Charlène et d'autres acteurs engagés du quartier.",
                  "Running or thinking of starting a non-profit? Come exchange with Charlène and other engaged local actors."
                )}
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ── QR Code — Rejoindre le groupe ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-sm text-center">
            <h2
              className="text-xl md:text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Rejoignez le groupe", "Join the group")}
            </h2>
            <p
              className="text-muted-foreground text-sm mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Scannez le QR code ou cliquez sur le lien pour rejoindre le groupe sur Tribu et ne manquer aucun événement.",
                "Scan the QR code or click the link to join the group on Tribu and never miss an event."
              )}
            </p>

            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm inline-block">
                <QRCodeSVG
                  value="https://tribu.le-village-marseille.fr/groups/join/3M7GV2"
                  size={180}
                  level="M"
                  fgColor="#cc0000"
                />
              </div>
            </div>

            <a
              href="https://tribu.le-village-marseille.fr/groups/join/3M7GV2"
              className="inline-flex items-center gap-2 bg-amour-red text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t("Rejoindre le groupe sur Tribu", "Join the group on Tribu")}
            </a>
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
