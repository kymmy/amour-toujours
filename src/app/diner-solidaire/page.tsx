"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, UtensilsCrossed, MapPin, Clock, Users, Calendar, TreePine, Music, HandHeart } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

export default function DinerSolidairePage() {
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
        {/* ── Hero banner ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl p-8 md:p-12 text-white text-center bg-gradient-to-br from-amour-red to-rose-900">
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
                {t("Dîner", "Solidarity")}
                <br />
                {t("Solidaire", "Dinner")}
                <br />
                2026
              </h2>
              <div className="w-16 h-0.5 bg-white/50 mx-auto" />
              <div style={{ fontFamily: "var(--font-body)" }}>
                <p className="text-lg md:text-2xl font-bold">
                  {t("Samedi 6 juin 2026", "Saturday, June 6th 2026")}
                </p>
                <p className="text-base md:text-lg text-white/80 mt-1">
                  18h — 21h · Parc de la Moline
                </p>
              </div>
              <div className="pt-4">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold">
                  {t("Ouvert à tous — Entrée libre", "Open to all — Free entry")}
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
            {t("Dîner Solidaire 2026", "Solidarity Dinner 2026")}
          </h1>
          <p
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "Un grand dîner en plein air pour rassembler les habitants du quartier autour d'un repas partagé, renforcer les liens de solidarité et collecter des fonds pour les familles dans le besoin.",
              "A large open-air dinner to bring neighbourhood residents together around a shared meal, strengthen solidarity bonds, and raise funds for families in need."
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
              {t("Samedi 6 juin 2026", "Saturday, June 6th 2026")}
            </p>
            <p
              className="text-muted-foreground text-xs mt-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              18h — 21h
            </p>
          </div>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/parc-de-la-moline"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-card border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <MapPin className="w-6 h-6 text-amour-red mx-auto mb-3" />
            <p
              className="font-semibold text-foreground text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Parc de la Moline
            </p>
            <p
              className="text-muted-foreground text-xs mt-1 underline"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Marseille
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
                "Familles, voisins, amis — tout le monde est bienvenu !",
                "Families, neighbours, friends — everyone is welcome!"
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
                {t("Programme de la soirée", "Evening Schedule")}
              </h2>
            </div>

            <div
              className="space-y-6 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {/* 18h - 18h30 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-28 font-bold text-white/90">
                  18h — 18h30
                </div>
                <div>
                  <p className="font-semibold">{t("Accueil & installation", "Welcome & setup")}</p>
                  <p className="text-white/80 mt-1">
                    {t(
                      "Arrivée des participants, installation dans le parc. Ambiance conviviale et musique d'accueil.",
                      "Guests arrive and settle into the park. Friendly atmosphere and welcome music."
                    )}
                  </p>
                </div>
              </div>

              {/* 18h30 - 20h */}
              <div className="border-t border-white/20 pt-6 flex gap-4">
                <div className="flex-shrink-0 w-28 font-bold text-white/90">
                  18h30 — 20h
                </div>
                <div>
                  <p className="font-semibold">
                    {t("Dîner partagé", "Shared dinner")}
                  </p>
                  <p className="text-white/80 mt-1">
                    {t(
                      "Chacun apporte un plat à partager ! Un grand buffet collectif où les saveurs du quartier se mélangent dans la bonne humeur.",
                      "Everyone brings a dish to share! A large collective buffet where neighbourhood flavours mix in good spirits."
                    )}
                  </p>
                </div>
              </div>

              {/* 20h - 21h */}
              <div className="border-t border-white/20 pt-6 flex gap-4">
                <div className="flex-shrink-0 w-28 font-bold text-white/90">
                  20h — 21h
                </div>
                <div>
                  <p className="font-semibold">
                    {t("Animations & solidarité", "Activities & solidarity")}
                  </p>
                  <p className="text-white/80 mt-1">
                    {t(
                      "Jeux pour les enfants, musique, échanges entre voisins et présentation des actions solidaires du quartier. Collecte de fonds pour les familles dans le besoin.",
                      "Games for children, music, exchanges between neighbours, and presentation of the neighbourhood's solidarity actions. Fundraising for families in need."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Le concept ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <UtensilsCrossed className="w-6 h-6 text-amour-red" />
              <h2
                className="text-xl md:text-2xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Le concept", "The concept")}
              </h2>
            </div>

            <div
              className="space-y-4 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <div className="flex gap-4 items-start">
                <HandHeart className="w-5 h-5 text-amour-red flex-shrink-0 mt-0.5" />
                <p>
                  {t(
                    "Chaque participant apporte un plat fait maison à partager avec les autres convives. Pas besoin de cuisiner pour un régiment — un plat pour 4 à 6 personnes suffit !",
                    "Each participant brings a homemade dish to share with fellow diners. No need to cook for a crowd — a dish for 4 to 6 people is plenty!"
                  )}
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <TreePine className="w-5 h-5 text-amour-red flex-shrink-0 mt-0.5" />
                <p>
                  {t(
                    "Le dîner se déroule en plein air au Parc de la Moline, un cadre verdoyant et familial au cœur du quartier.",
                    "The dinner takes place outdoors at Parc de la Moline, a green and family-friendly setting in the heart of the neighbourhood."
                  )}
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <Music className="w-5 h-5 text-amour-red flex-shrink-0 mt-0.5" />
                <p>
                  {t(
                    "Ambiance musicale, jeux pour les enfants et animations tout au long de la soirée pour un moment convivial et inoubliable.",
                    "Musical atmosphere, games for children, and activities throughout the evening for a friendly and unforgettable moment."
                  )}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Comment participer ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="rounded-2xl bg-card border-2 border-amour-red/30 p-6 md:p-8 shadow-sm">
            <h2
              className="text-xl md:text-2xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("Comment participer ?", "How to participate?")}
            </h2>

            <ul
              className="space-y-4 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li>
                <span className="font-bold text-amour-red">1. </span>
                {t(
                  "Préparez un plat fait maison à partager (salé, sucré, entrée, dessert… tout est bienvenu !).",
                  "Prepare a homemade dish to share (savoury, sweet, starter, dessert… everything is welcome!)."
                )}
              </li>
              <li>
                <span className="font-bold text-amour-red">2. </span>
                {t(
                  "Rendez-vous au Parc de la Moline le samedi 6 juin à partir de 18h.",
                  "Come to Parc de la Moline on Saturday June 6th from 6 PM."
                )}
              </li>
              <li>
                <span className="font-bold text-amour-red">3. </span>
                {t(
                  "Apportez vos couverts, assiettes et verres réutilisables si possible — pensons à la planète !",
                  "Bring your own reusable cutlery, plates, and glasses if possible — let's think about the planet!"
                )}
              </li>
              <li>
                <span className="font-bold text-amour-red">4. </span>
                {t(
                  "Venez avec votre bonne humeur et votre envie de partager un moment de convivialité !",
                  "Come with your good mood and your desire to share a friendly moment!"
                )}
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                t("Plein air", "Outdoor"),
                t("Partage", "Sharing"),
                t("Solidarité", "Solidarity"),
                t("Convivialité", "Togetherness"),
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-amour-red/10 text-amour-red text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
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
