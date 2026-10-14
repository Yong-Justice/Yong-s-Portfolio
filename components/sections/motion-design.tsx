"use client";

import Image from "next/image";
import { ArrowUpRight, Clapperboard, Play } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import type { Locale } from "@/src/content/site-config";

const motionFilms = [
  { id: "A8WZGSGn0Qs", title: { en: "Behind Every Transfer", fr: "Derrière chaque transfert" }, description: { en: "A short promotional story about the people behind a money transfer.", fr: "Une courte histoire promotionnelle autour des personnes derrière un transfert d’argent." } },
  { id: "PBBYx9p15C8", title: { en: "Shopping & Parcel Delivery", fr: "Shopping & livraison de colis" }, description: { en: "A promo for online shopping, groceries, and parcel delivery.", fr: "Une promotion pour le shopping en ligne, l’épicerie et la livraison de colis." } },
  { id: "7weqrSrzrjc", title: { en: "Delivery, Tracked", fr: "Livraison suivie" }, description: { en: "An animated delivery scene with a route and location tracking.", fr: "Une scène animée de livraison avec itinéraire et suivi de position." } },
  { id: "dnRK6ikTGDQ", title: { en: "Receive Money from Abroad", fr: "Recevoir de l’argent depuis l’étranger" }, description: { en: "A money-transfer promo about receiving funds from abroad.", fr: "Une promotion sur la réception d’argent depuis l’étranger." } },
  { id: "kIHhFD-psnM", title: { en: "Mobile Money & Bank Deposits", fr: "Mobile money & dépôts bancaires" }, description: { en: "A motion graphic introducing mobile money and bank deposit services.", fr: "Un motion design présentant des services de mobile money et de dépôt bancaire." } },
  { id: "YpXTDfhOhRw", title: { en: "Livestock Equipment", fr: "Matériel d’élevage" }, description: { en: "A product showcase for poultry and livestock equipment.", fr: "Une présentation de produits pour l’élevage et la volaille." } },
] as const;

export function MotionDesignSection({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section id="motion" className="motion-editorial" aria-labelledby="motion-title">
      <div className="editorial-inner">
        <Reveal>
          <div className="motion-heading">
            <span className="scribble-label">05 / MOTION DESIGN</span>
            <Clapperboard aria-hidden="true" />
            <h2 id="motion-title">{fr ? <>le design<br /><em>en mouvement.</em></> : <>design in<br /><em>motion.</em></>}</h2>
            <p>{fr ? "Une sélection de créations animées, présentées ici pour être regardées sur place." : "A selection of animated work, ready to watch right here on the page."}</p>
          </div>
        </Reveal>

        <div className="motion-film-grid">
          {motionFilms.map((film, index) => {
            const title = film.title[locale];
            const description = film.description[locale];
            const playing = playingId === film.id;

            return (
              <Reveal key={film.id} delay={(index % 3) * 0.06}>
                <article className="motion-film">
                  <div className="motion-film-media">
                    {playing ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&playsinline=1&rel=0`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    ) : (
                      <>
                        <Image
                          src={`https://i.ytimg.com/vi/${film.id}/hqdefault.jpg`}
                          alt={fr ? `Aperçu vidéo : ${title}` : `Video thumbnail: ${title}`}
                          fill
                          sizes="(max-width: 700px) 84vw, (max-width: 1000px) 40vw, 25vw"
                          className="motion-film-thumbnail"
                        />
                        <button
                          className="motion-film-play"
                          type="button"
                          onClick={() => setPlayingId(film.id)}
                          aria-label={fr ? `Lire la vidéo : ${title}` : `Play video: ${title}`}
                        >
                          <Play size={21} fill="currentColor" />
                        </button>
                      </>
                    )}
                    <span className="motion-film-number">MOTION / 0{index + 1}</span>
                  </div>
                  <div className="motion-film-copy">
                    <span className="motion-film-category">{fr ? "MOTION DESIGN" : "MOTION DESIGN"}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={`https://www.youtube.com/shorts/${film.id}`} target="_blank" rel="noreferrer">
                      {fr ? "Voir sur YouTube" : "Watch on YouTube"}<ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
