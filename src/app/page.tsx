"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

/* ------------------------------------------------------------------ */
/*  Reusable layout primitives                                        */
/* ------------------------------------------------------------------ */

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full max-w-4xl mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </section>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-card text-card-foreground shadow-sm border border-border p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function AmourToujoursPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Nav ─────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <a
            href="https://le-village-marseille.fr"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            {t("Retour", "Back")}
          </a>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a
              href="https://le-village-marseille.fr"
              className="hidden sm:inline-block text-xs font-semibold bg-village-green text-white px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Le Village
            </a>
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
            <Image
              src="/ToujoursAmour.png"
              alt="Amour Toujours"
              width={320}
              height={320}
              className="w-64 md:w-80 h-auto"
              priority
            />
          </motion.div>

          <p
            className="mt-6 text-amour-red italic text-lg md:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("Initiative Solidaire Locale", "Local Solidarity Initiative")}
          </p>

          <p
            className="mt-4 max-w-xl text-muted-foreground text-sm md:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t(
              "Une mobilisation citoyenne dans les 11e et 12e arrondissements de Marseille pour renforcer la solidarité de proximité.",
              "A grassroots mobilisation in Marseille's 11th & 12th arrondissements to strengthen local solidarity."
            )}
          </p>
        </div>
      </header>

      <div className="py-12 md:py-20 space-y-16 md:space-y-24">
        {/* ── Section 01 — Vision du Projet ─────────────────────── */}
        <Section>
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
              {t("01 — Vision du Projet", "01 — Project Vision")}
            </h2>

            <Card className="bg-amour-red-light border-amour-red/20">
              <p
                className="text-foreground leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Amour Toujours est une initiative de solidarité locale née dans le quartier de Saint-Barnabé à Marseille. Notre mission : créer une dynamique d'entraide entre habitants, commerçants et entrepreneurs du quartier. Nous croyons qu'un territoire plus solidaire se construit par des actions concrètes, régulières et transparentes — des dîners partagés aux collectes de dons, en passant par des rencontres entre entrepreneurs engagés. Chaque action est pensée pour rapprocher les gens et répondre aux besoins réels des familles en difficulté.",
                  "Amour Toujours is a local solidarity initiative born in the Saint-Barnabé neighbourhood of Marseille. Our mission: to create a dynamic of mutual aid between residents, shopkeepers, and local entrepreneurs. We believe that a more united community is built through concrete, regular, and transparent actions — from shared dinners to donation drives, to meetups between engaged entrepreneurs. Every action is designed to bring people closer and address the real needs of families in difficulty."
                )}
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  t("Solidarité locale", "Local solidarity"),
                  t("Participation citoyenne", "Civic participation"),
                  t("Transparence", "Transparency"),
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-amour-red text-white text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </Section>

        {/* ── Section 02 — Actions Principales ──────────────────── */}
        <Section>
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
              {t("02 — Actions Principales", "02 — Main Actions")}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Dîner Solidaire */}
              <Card>
                <p className="text-2xl mb-2">🍽️</p>
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("Dîner Solidaire", "Solidarity Dinner")}
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t("Été", "Summer")}
                </p>
                <p
                  className="text-sm text-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t(
                    "Un dîner communautaire ouvert à tous les habitants du quartier pour partager un repas, se rencontrer et collecter des fonds pour les familles dans le besoin.",
                    "A community dinner open to all neighbourhood residents to share a meal, meet one another, and raise funds for families in need."
                  )}
                </p>
              </Card>

              {/* Collecte Rose */}
              <Card>
                <p className="text-2xl mb-2">🌹</p>
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("Collecte Rose", "Pink Collection")}
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t("Période de Noël", "Christmas period")}
                </p>
                <p
                  className="text-sm text-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t(
                    "Chaque année à Noël, des bacs roses sont installés chez les commerçants partenaires du quartier pour collecter des dons (jouets, vêtements, produits d'hygiène) redistribués aux familles dans le besoin.",
                    "Every year at Christmas, pink bins are placed in partner shops throughout the neighbourhood to collect donations (toys, clothing, hygiene products) redistributed to families in need."
                  )}
                </p>
              </Card>

              {/* Cercle des Entrepreneurs Solidaires */}
              <Card>
                <p className="text-2xl mb-2">🤝</p>
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(
                    "Cercle des Entrepreneurs Solidaires",
                    "Solidarity Entrepreneurs Circle"
                  )}
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t("Rencontres régulières", "Regular meetups")}
                </p>
                <p
                  className="text-sm text-foreground leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t(
                    "Des rendez-vous mensuels autour d'un café pour connecter les entrepreneurs locaux, partager des opportunités et renforcer le tissu économique solidaire du quartier.",
                    "Monthly coffee meetups to connect local entrepreneurs, share opportunities, and strengthen the neighbourhood's solidarity-driven economic fabric."
                  )}
                </p>
                <Link
                  href="/cafe-entrepreneurs"
                  className="inline-flex items-center gap-1 bg-amour-red text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-amour-red/90 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t("☕ Prochain café — 6 mars", "☕ Next café — March 6th")}
                </Link>
              </Card>

              {/* Dégustations Solidaires */}
              <Card>
                <p className="text-2xl mb-2">🍷</p>
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("Dégustations Solidaires", "Solidarity Wine Tastings")}
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t("Événements ponctuels", "Occasional events")}
                </p>
                <p
                  className="text-sm text-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t(
                    "Des soirées dégustation de vin organisées avec des vignerons locaux, dont les bénéfices sont reversés aux actions solidaires du quartier.",
                    "Wine tasting evenings organised with local winemakers, with proceeds donated to the neighbourhood's solidarity actions."
                  )}
                </p>
              </Card>
            </div>
          </motion.div>
        </Section>

        {/* ── Section 03 — Transparence et Suivi ────────────────── */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("03 — Transparence et Suivi", "03 — Transparency and Tracking")}
            </h2>

            <Card>
              <p
                className="text-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t(
                  "Chaque action menée dans le cadre d'Amour Toujours fait l'objet d'un suivi détaillé. Une page dédiée permet de consulter les montants collectés, les dons redistribués et l'avancement de chaque initiative. Nous croyons que la transparence est la clé de la confiance — et la confiance est le socle de la solidarité.",
                  "Every action carried out under Amour Toujours is tracked in detail. A dedicated page lets you view amounts collected, donations redistributed, and the progress of each initiative. We believe transparency is the key to trust — and trust is the foundation of solidarity."
                )}
              </p>
            </Card>
          </motion.div>
        </Section>

        {/* ── Section 04 — Partenaires et Contacts Locaux ───────── */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t(
                "04 — Partenaires et Contacts Locaux",
                "04 — Partners and Local Contacts"
              )}
            </h2>

            <Card>
              <div className="overflow-x-auto">
                <table
                  className="w-full text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-foreground whitespace-nowrap">
                        {t(
                          "Association des commerçants de Saint-Barnabé",
                          "Saint-Barnabé Shopkeepers Association"
                        )}
                      </td>
                      <td className="py-3 text-muted-foreground">
                        saintbarnabecommerces.com
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-foreground whitespace-nowrap">
                        {t("Contact local", "Local contact")}
                      </td>
                      <td className="py-3 text-muted-foreground">Ingril Marrou</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-foreground whitespace-nowrap">
                        {t("Partenaire solidaire", "Solidarity partner")}
                      </td>
                      <td className="py-3 text-muted-foreground">Djonga Family</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-foreground whitespace-nowrap">
                        {t("Collecte culturelle", "Cultural collection")}
                      </td>
                      <td className="py-3 text-muted-foreground">
                        {t("Librairie partenaire", "Partner bookshop")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </Section>

        {/* ── Section 05 — Comment Contribuer ───────────────────── */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("05 — Comment Contribuer", "05 — How to Contribute")}
            </h2>

            <div className="bg-amour-red rounded-2xl p-8 text-white">
              <h3
                className="text-xl md:text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("Rejoignez le mouvement", "Join the Movement")}
              </h3>

              <ul
                className="space-y-3 text-sm md:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  {t(
                    "Participez aux événements solidaires organisés dans le quartier — dîners, collectes, dégustations.",
                    "Attend solidarity events organised in the neighbourhood — dinners, collections, tastings."
                  )}
                </li>
                <li>
                  {t(
                    "Déposez vos dons dans les bacs roses chez les commerçants partenaires pendant la période de Noël.",
                    "Drop off your donations in the pink bins at partner shops during the Christmas period."
                  )}
                </li>
                <li>
                  {t(
                    "Rejoignez le Cercle des Entrepreneurs Solidaires pour contribuer au développement économique local.",
                    "Join the Solidarity Entrepreneurs Circle to contribute to local economic development."
                  )}
                </li>
                <li>
                  {t(
                    "Parlez de l'initiative autour de vous et aidez-nous à élargir le réseau de solidarité.",
                    "Spread the word about the initiative and help us expand the solidarity network."
                  )}
                </li>
              </ul>
            </div>
          </motion.div>
        </Section>

        {/* ── Section 06 — Demande à la Mairie ──────────────────── */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t(
                "06 — Demande à la Mairie",
                "06 — Request to the Town Hall"
              )}
            </h2>

            <Card className="border-2 border-amour-red/30">
              <ul
                className="space-y-4 text-sm md:text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>
                  <span className="font-bold text-foreground">
                    {t("Soutien logistique : ", "Logistical support: ")}
                  </span>
                  {t(
                    "Mise à disposition de salles municipales pour les événements solidaires (dîners, réunions, dégustations).",
                    "Provision of municipal rooms for solidarity events (dinners, meetings, tastings)."
                  )}
                </li>
                <li>
                  <span className="font-bold text-foreground">
                    {t("Communication officielle : ", "Official communication: ")}
                  </span>
                  {t(
                    "Relais de nos actions dans les supports de communication de la mairie (site web, panneaux d'affichage, réseaux sociaux).",
                    "Promotion of our actions through the town hall's communication channels (website, notice boards, social media)."
                  )}
                </li>
                <li>
                  <span className="font-bold text-foreground">
                    {t("Subvention ponctuelle : ", "One-off grant: ")}
                  </span>
                  {t(
                    "Aide financière pour couvrir les frais d'organisation des événements (matériel, alimentation, impression).",
                    "Financial aid to cover event organisation costs (equipment, food, printing)."
                  )}
                </li>
                <li>
                  <span className="font-bold text-foreground">
                    {t("Partenariat institutionnel : ", "Institutional partnership: ")}
                  </span>
                  {t(
                    "Création d'un lien officiel entre la mairie et l'initiative pour pérenniser les actions solidaires.",
                    "Establishment of an official link between the town hall and the initiative to sustain solidarity actions."
                  )}
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {[
                  t("Soutien logistique", "Logistical support"),
                  t("Communication", "Communication"),
                  t("Subvention", "Grant"),
                  t("Partenariat", "Partnership"),
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
            </Card>
          </motion.div>
        </Section>
      </div>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-border py-8">
        <p
          className="text-center text-xs text-muted-foreground"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t(
            "Amour Toujours — Dossier pour les candidats aux élections municipales — Marseille — Mars 2026",
            "Amour Toujours — Dossier pour les candidats aux élections municipales — Marseille — Mars 2026"
          )}
        </p>
      </footer>
    </div>
  );
}
