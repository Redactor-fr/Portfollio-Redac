/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Twitter, Github, ChevronRight, CheckCircle2, Play, Star, FolderSync, Terminal, MessageSquare, FileText, ArrowRight } from "lucide-react";

const works = [
  {
    youtubeId: "VmEKtnw86jg",
    title: "SHORT #1",
    features: ["Storytelling rapide", "Hook ultra agressif"],
    stat: "+84% de rétention"
  },
  {
    vid: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    title: "SHORT #2",
    features: ["Format éducatif viral", "Script optimisé dopamine", "CTA invisible"],
    stat: "Retient l'attention"
  },
  {
    vid: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    title: "SHORT #3",
    features: ["Format narration", "Rythme ultra dynamique", "Optimisé algo Shorts"],
    stat: "Performance max"
  }
];

const SocialButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex gap-4 ${className}`}>
    <button className="w-[56px] h-[56px] rounded-[1rem] liquid-glass flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
      <MessageSquare className="w-[20px] h-[20px] text-cream group-hover:text-neon transition-colors" />
    </button>
    <button className="w-[56px] h-[56px] rounded-[1rem] liquid-glass flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
      <Twitter className="w-[20px] h-[20px] text-cream group-hover:text-neon transition-colors" />
    </button>
    <button className="w-[56px] h-[56px] rounded-[1rem] liquid-glass flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
      <Mail className="w-[20px] h-[20px] text-cream group-hover:text-neon transition-colors" />
    </button>
  </div>
);

const Navbar = () => (
  <header className="absolute top-0 left-0 w-full z-50 pt-8">
    <div className="mx-auto w-full max-w-[1831px] px-4 md:px-8 lg:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <img 
          src="https://www.nautiljon.com/images/perso/00/83/ayanokoji_kiyotaka_15238.webp" 
          alt="Nicolas Script" 
          className="w-12 h-12 sm:w-16 sm:h-16 object-cover object-top rounded-full border-2 border-neon shadow-[0_0_20px_rgba(111,255,0,0.3)] transition-transform hover:scale-105" 
          onError={(e) => { e.currentTarget.src = "https://i.pinimg.com/736x/89/3b/b7/893bb77a6416ce5ad6ecb5ed3132e4d0.jpg"; }}
        />
      </div>
      <nav className="hidden lg:flex items-center liquid-glass rounded-[28px] px-[52px] py-[24px] space-x-10">
        {[
          { label: 'Qui suis-je ?', id: 'about' },
          { label: 'Réalisations', id: 'shorts' },
          { label: 'Process', id: 'process' },
          { label: 'Offre', id: 'pricing' },
          { label: 'Contact', id: 'contact' }
        ].map(link => (
          <a 
            key={link.label} 
            href={`#${link.id}`} 
            onClick={(e) => { e.preventDefault(); document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' }); }}
            className="font-grotesk text-[13px] uppercase tracking-wider hover:text-neon transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
      {/* Invisible spacer to balance flex-between if needed */}
      <div className="w-[40px] lg:hidden"></div>
    </div>
  </header>
);

const HeroSection = () => (
  <section id="hero" className="relative min-h-[100svh] w-full rounded-b-[32px] overflow-hidden flex flex-col justify-center">
    <video
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
      autoPlay loop muted playsInline
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />

    <Navbar />

    {/* Desktop Socials */}
    <div className="hidden lg:flex absolute right-8 top-8 lg:flex-col z-50">
      <SocialButtons className="lg:flex-col" />
    </div>

    <div className="relative z-10 w-full max-w-[1831px] mx-auto px-4 md:px-8 lg:px-12 mt-20 lg:mt-0">
      <div className="relative max-w-[850px] lg:ml-32">
        <h1 className="font-grotesk text-[40px] sm:text-[60px] md:text-[75px] lg:text-[85px] leading-[1.05] md:leading-[1] uppercase">
          Je transforme des<br />idées en Shorts<br />YouTube
        </h1>
        <span className="absolute top-0 right-0 translate-x-1/8 sm:translate-x-1/4 -translate-y-1/2 -rotate-2 font-condiment text-neon mix-blend-exclusion opacity-90 text-[24px] sm:text-[36px] md:text-[48px] whitespace-nowrap">
          Addictifs
        </span>
        <p className="font-mono mt-8 text-[14px] lg:text-[16px] max-w-[500px] leading-relaxed uppercase text-cream/90">
          Rédaction de scripts optimisés watchtime, storytelling viral et concepts pensés pour exploser la rétention.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="liquid-glass px-8 py-4 rounded-full font-grotesk text-[16px] sm:text-[18px] uppercase tracking-wider text-neon hover:bg-neon/10 transition-colors border border-neon/30">
            Voir mes réalisations
          </button>
          <button className="liquid-glass px-8 py-4 rounded-full font-grotesk text-[16px] sm:text-[18px] uppercase tracking-wider text-cream hover:bg-white/10 transition-colors">
            Travailler avec moi
          </button>
        </div>
      </div>

      {/* Mobile Socials */}
      <div className="lg:hidden flex justify-center mt-12 w-full">
        <SocialButtons />
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="relative w-full flex flex-col justify-center py-24 sm:py-32 lg:py-48 scroll-mt-20 overflow-hidden bg-[#010828]">
    <video
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
      autoPlay loop muted playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-[#010828]/60 pointer-events-none"></div>

    <div className="relative z-10 w-full max-w-[1831px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-32 items-center">
      <div className="flex-1 w-full flex justify-center lg:justify-start pr-0 lg:pr-12">
        <div className="flex flex-col items-center lg:items-start relative lg:-ml-4 xl:-ml-8">
          <img 
            src="https://www.nautiljon.com/images/perso/00/83/ayanokoji_kiyotaka_15238.webp" 
            alt="Qui suis-je" 
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] object-cover object-top rounded-full border-4 border-neon shadow-[0_0_40px_rgba(111,255,0,0.3)] transition-transform hover:scale-105"
          />
        </div>
      </div>

      <div className="flex-1 font-mono text-[14px] lg:text-[16px] uppercase leading-relaxed text-cream space-y-8 w-full max-w-[600px]">
        <p className="text-neon text-[16px] lg:text-[20px] font-bold">
          Salut, moi c'est Nicolas.<br/>
          Je suis rédacteur spécialisé dans les YouTube Shorts et les contenus à forte rétention.
        </p>
        <p className="opacity-90">Mon objectif : créer des scripts qui captent l’attention dès la première seconde et gardent les viewers jusqu’à la fin.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-white/10">
          <div>
            <h3 className="font-grotesk tracking-widest text-[#010828] bg-cream inline-block px-2 py-1 mb-4">Je travaille avec :</h3>
            <ul className="space-y-2 text-cream/70">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neon"></div>Créateurs YouTube</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neon"></div>Marques</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neon"></div>Entrepreneurs</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neon"></div>Agences</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neon"></div>Médias</li>
            </ul>
          </div>
          <div>
            <h3 className="font-grotesk tracking-widest text-[#010828] bg-neon inline-block px-2 py-1 mb-4">Chaque script est pensé pour :</h3>
            <ul className="space-y-2 text-cream/70">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-neon shrink-0" />Maximiser le watchtime</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-neon shrink-0" />Améliorer la rétention</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-neon shrink-0" />Augmenter les vues</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-neon shrink-0" />Rendre la vidéo addictive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ShortsSection = () => (
  <section id="shorts" className="w-full bg-[#010828] pt-16 lg:pt-24 pb-0 scroll-mt-20">
    <div className="w-full max-w-[1831px] mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex flex-col mb-16 max-w-3xl">
        <h2 className="font-grotesk text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.1] uppercase mb-4">
          Shorts<br />
          <span className="font-condiment text-neon text-[40px] sm:text-[56px] lg:text-[72px] capitalize">Réalisés</span>
        </h2>
        <p className="font-mono text-cream/80 uppercase text-[14px] lg:text-[16px] leading-relaxed">
          Des scripts conçus pour performer rapidement et retenir l’attention jusqu’à la dernière seconde.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((card, i) => (
          <div key={i} className={`liquid-glass rounded-[32px] overflow-hidden hover:bg-white/10 transition-colors group ${!card.youtubeId ? 'cursor-pointer lg:hover:-translate-y-2' : ''} duration-300 flex flex-col`}>
            {card.youtubeId ? (
              <div className="relative w-full pb-[177.77%] bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${card.youtubeId}?autoplay=0&rel=0`}
                  title={card.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="p-[18px] relative w-full h-full">
                <div className="relative w-full pb-[130%] sm:pb-[140%] rounded-[24px] overflow-hidden mb-4 bg-black/20">
                  <video src={card.vid} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 liquid-glass px-3 py-1.5 rounded-full flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-neon animate-pulse"></div>
                     <span className="font-mono text-[11px] font-bold text-cream uppercase">En ligne</span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col">
                     <h3 className="font-grotesk tracking-widest text-[28px] text-neon uppercase drop-shadow-md mb-3">{card.title}</h3>
                     <ul className="space-y-1.5 mb-5">
                        {card.features.map((f, j) => (
                          <li key={j} className="font-mono text-[12px] text-cream/90 flex items-center gap-2 uppercase">
                            <CheckCircle2 className="w-3.5 h-3.5 text-neon" /> {f}
                          </li>
                        ))}
                     </ul>
                     <button className="w-full liquid-glass rounded-[16px] py-3.5 flex items-center justify-center gap-2 group-hover:bg-white/20 transition-colors">
                        <Play className="w-4 h-4 fill-cream text-cream" />
                        <span className="font-grotesk tracking-widest text-[16px]">Voir le short</span>
                     </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section id="trust" className="relative w-full bg-[#010828] overflow-hidden border-t border-white/5 pb-0 scroll-mt-20">
    <video
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
      autoPlay loop muted playsInline
      className="block w-full h-auto md:h-full md:object-cover min-h-[400px] lg:min-h-[600px]"
    />
    
    <div className="absolute inset-0 w-full flex flex-col justify-center items-center h-full bg-[#010828]/30">
      <div className="w-full max-w-[1831px] mx-auto px-4 md:px-8 lg:px-12 mt-auto mb-4 lg:mb-16 transform scale-[0.6] sm:scale-[0.8] lg:scale-100 origin-center pointer-events-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-between">
           <div className="max-w-2xl w-full text-center lg:text-left">
              <h2 className="font-grotesk text-[32px] sm:text-[48px] lg:text-[60px] uppercase leading-[1.1] mb-2 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-1 sm:gap-4 drop-shadow-md">
                <span>Ils m'ont fait</span> <span className="font-condiment text-neon text-[40px] sm:text-[60px] lg:text-[80px] capitalize lowercase tracking-normal">confiance</span>
              </h2>
              <p className="font-mono text-cream/90 uppercase text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.6] drop-shadow-md">
                Créateurs, entrepreneurs et marques me font confiance pour produire des scripts performants et engageants.
              </p>
           </div>
           <div className="liquid-glass rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] p-5 lg:p-10 flex gap-6 lg:gap-16 w-full lg:w-auto overflow-x-auto shadow-xl border border-white/10">
              <div className="flex flex-col gap-1 lg:gap-2 min-w-[max-content]">
                <span className="font-condiment text-neon text-[36px] sm:text-[40px] lg:text-[56px] leading-none">150+</span>
                <span className="font-mono text-[10px] lg:text-[12px] text-cream/90 uppercase tracking-widest">Scripts écrits</span>
              </div>
              <div className="flex flex-col gap-1 lg:gap-2 min-w-[max-content]">
                <span className="font-condiment text-neon text-[36px] sm:text-[40px] lg:text-[56px] leading-none">25M+</span>
                <span className="font-mono text-[10px] lg:text-[12px] text-cream/90 uppercase tracking-widest">Vues générées</span>
              </div>
              <div className="flex flex-col gap-1 lg:gap-2 min-w-[max-content]">
                <div className="flex items-center gap-1 mt-1 sm:mt-2 lg:mt-3 mb-1 lg:mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 sm:w-5 lg:w-9 h-4 sm:h-5 lg:h-9 text-neon fill-neon animate-pulse" style={{animationDelay: `${i*0.2}s`}}/>)}
                </div>
                <span className="font-mono text-[10px] lg:text-[12px] text-cream/90 uppercase tracking-widest mt-auto">Clients satisfaits</span>
              </div>
           </div>
        </div>
      </div>
      
      {/* Marquee */}
      <div className="relative w-full flex overflow-x-hidden border-y border-white/10 py-3 lg:py-6 bg-black/20 backdrop-blur-sm pointer-events-auto">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 sm:gap-16 lg:gap-32 px-4 sm:px-8">
           {["CRÉATEUR YOUTUBE", "AGENCE MÉDIA", "STARTUP TECH", "INFLUENCEUR TIKTOK", "MARQUE E-COMMERCE", "CRÉATEUR YOUTUBE", "AGENCE MÉDIA", "STARTUP TECH", "INFLUENCEUR TIKTOK", "MARQUE E-COMMERCE", "CRÉATEUR YOUTUBE"].map((name, i) => (
             <div key={i} className="font-grotesk text-[14px] sm:text-[20px] lg:text-[32px] text-cream/80 uppercase flex items-center gap-2 sm:gap-4 lg:gap-6 drop-shadow-md">
               <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full bg-neon/80"></div>
               {name}
             </div>
           ))}
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      icon: <FolderSync className="w-8 h-8 text-neon" />,
      title: "Tu m'envoies",
      list: ["Le sujet", "Cahier des charges", "Tes consignes", "Tes règles"],
      animationDesc: "Transfert numérique"
    },
    {
      id: "02",
      icon: <Terminal className="w-8 h-8 text-neon" />,
      title: "Je te cook ça",
      desc: "Recherche + écriture.",
      list: ["Hook", "Structure", "Watchtime", "Storytelling", "Rythme"],
      extra: "Livraison V1 sous 24h.",
      animationDesc: "Écriture auto"
    },
    {
      id: "03",
      icon: <MessageSquare className="w-8 h-8 text-neon" />,
      title: "Tes retours",
      desc: "Tu me donnes :",
      list: ["Les précisions", "Erreurs à corriger", "Modifs souhaitées"],
      animationDesc: "Échanges ciblés"
    },
    {
      id: "04",
      icon: <FileText className="w-8 h-8 text-neon" />,
      title: "Version finale",
      desc: "Prêt à tourner.",
      list: ["Livraison G-Docs", "Sous 24h max", "Retours illimités"],
      animationDesc: "Génération hologramme"
    }
  ];

  return (
    <section id="process" className="w-full bg-[#010828] py-24 border-t border-white/5 relative overflow-hidden scroll-mt-20">
      {/* Decorative bg lines */}
      <div className="absolute inset-x-0 top-0 h-[100%] flex justify-center opacity-10 pointer-events-none">
         <div className="w-[1px] h-full bg-gradient-to-b from-neon to-transparent"></div>
      </div>
      
      <div className="w-full max-w-[1831px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <h2 className="font-grotesk text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.1] uppercase mb-20 text-center">
          Mon <span className="font-condiment text-neon text-[48px] sm:text-[60px] lg:text-[80px] capitalize">Process</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative group flex flex-col">
              {/* Connector line for desktop */}
              {i < 3 && <div className="hidden lg:block absolute top-[40px] left-[65%] right-[-35%] h-[1px] border-t border-dashed border-white/20"></div>}
              {i < 3 && <div className="hidden lg:block absolute top-[36px] right-[-14px] z-10"><ChevronRight className="w-5 h-5 text-white/20" /></div>}
              
              <div className="liquid-glass rounded-[32px] p-8 h-full flex flex-col md:hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden bg-black/10">
                <div className="absolute -right-4 -top-4 font-grotesk text-[140px] text-white/[0.02] pointer-events-none group-hover:text-neon/[0.04] transition-colors">{step.id}</div>
                
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-neon/50 transition-colors relative z-10 shadow-lg shadow-black/50">
                  {step.icon}
                </div>
                
                <span className="font-grotesk tracking-widest text-[#010828] bg-cream self-start px-3 py-1 text-[12px] mb-6">ÉTAPE {step.id}</span>
                <h3 className="font-grotesk text-[28px] text-cream uppercase mb-4 relative z-10">{step.title}</h3>
                
                {step.desc && <p className="font-mono text-[14px] uppercase text-cream/70 mb-6 relative z-10">{step.desc}</p>}
                
                <ul className="space-y-3 mb-8 flex-grow relative z-10">
                  {step.list.map((item, j) => (
                    <li key={j} className="font-mono text-[13px] uppercase text-cream/90 flex items-start gap-2.5">
                       <CheckCircle2 className="w-4 h-4 min-w-[16px] text-neon/70 mt-0.5" />
                       {item}
                    </li>
                  ))}
                </ul>
                
                {step.extra && (
                   <div className="mt-auto pt-6 border-t border-white/10 font-mono text-[13px] uppercase text-neon font-bold relative z-10 flex items-center gap-2">
                     <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div> {step.extra}
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => (
  <section id="pricing" className="relative w-full bg-[#010828] overflow-hidden border-t border-white/5 pb-0 scroll-mt-20">
    <video
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4"
      autoPlay loop muted playsInline
      className="block w-full h-auto min-h-[500px]"
    />
    
    <div className="absolute inset-0 w-full flex flex-col justify-center pointer-events-none mt-8 h-full bg-[#010828]/20">
       <div className="w-full max-w-[1831px] mx-auto px-2 md:px-8 lg:px-12 transform scale-[0.55] sm:scale-[0.70] md:scale-90 lg:scale-100 origin-center pointer-events-auto flex flex-col justify-center h-full">
          <div className="flex flex-col items-center mt-2 sm:mt-6 lg:mt-10 mb-2 sm:mb-4 lg:mb-6">
             <h2 className="font-grotesk text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.1] uppercase mb-0 sm:mb-2 text-center drop-shadow-md">
                Offre <span className="font-condiment text-neon text-[40px] sm:text-[60px] lg:text-[80px] capitalize block sm:inline">Shorts</span> YouTube
             </h2>
          </div>

          <div className="max-w-2xl mx-auto w-full relative z-10">
             <div className="liquid-glass rounded-[16px] sm:rounded-[32px] lg:rounded-[48px] p-4 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl shadow-neon/10 bg-black/20 border border-neon/10">
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-black pointer-events-none"></div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/10 pb-3 sm:pb-6 mb-3 sm:mb-6 relative z-10">
                   <div>
                      <span className="font-mono text-neon text-[10px] sm:text-[14px] uppercase tracking-widest font-bold block mb-1 sm:mb-3 border border-neon/30 px-3 py-1 rounded-full w-fit bg-neon/5">Carte Premium</span>
                      <h3 className="font-grotesk text-[24px] sm:text-[40px] lg:text-[48px] uppercase text-cream">Script Viral</h3>
                   </div>
                   <div className="flex items-baseline gap-2 sm:gap-3 mt-2 sm:mt-0">
                      <span className="font-mono text-cream/40 line-through text-[14px] sm:text-[20px]">50€</span>
                      <span className="font-grotesk text-[32px] sm:text-[48px] lg:text-[56px] text-neon">20€</span>
                      <span className="font-mono text-cream/70 uppercase text-[12px] sm:text-[16px]">/ short</span>
                   </div>
                </div>

                <div className="relative z-10 mb-6 sm:mb-8">
                   <span className="font-grotesk tracking-widest text-[#010828] bg-cream px-3 py-1 text-[10px] sm:text-[14px] block w-fit mb-3 sm:mb-6">CE QUI EST INCLUS :</span>
                   <ul className="space-y-2 sm:space-y-4">
                     {[
                       "Script optimisé watchtime",
                       "Hook puissant & Rétention max",
                       "Storytelling dynamique",
                       "Réponse rapide 24/7",
                       "Livraison sous 48h",
                       "Retours inclus en illimité",
                       "Adapté à ton audience cible",
                       "Tout est pensé pour exploser tes vues"
                     ].map((item, i) => (
                       <li key={i} className="font-mono text-[9px] sm:text-[14px] lg:text-[16px] text-cream/90 uppercase flex items-center gap-2 sm:gap-4">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-neon shrink-0 relative" />
                          <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>

                <button className="w-full relative z-10 bg-neon hover:bg-neon/90 text-[#010828] font-grotesk text-[14px] sm:text-[22px] tracking-wider uppercase py-2.5 sm:py-5 rounded-[10px] sm:rounded-[20px] flex items-center justify-center gap-2 sm:gap-4 transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(111,255,0,0.3)] hover:shadow-[0_0_60px_rgba(111,255,0,0.5)]">
                   Commander un script <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
             </div>
          </div>
       </div>
    </div>
  </section>
);

const CTASection = () => (
  <section id="contact" className="relative w-full bg-[#010828] overflow-hidden scroll-mt-20">
    <video
      // CTA Video
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
      autoPlay loop muted playsInline
      className="block w-full h-auto"
    />
    
    <div className="absolute inset-0 w-full max-w-[1831px] mx-auto px-4 md:px-8 lg:px-12 pb-4 sm:pb-8 lg:pb-24 z-10 text-center flex flex-col items-center justify-center lg:justify-end pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-center mt-4 lg:mt-0">
        <h2 className="font-grotesk uppercase text-[24px] sm:text-[40px] md:text-[60px] lg:text-[110px] leading-[0.9] text-cream mb-2 sm:mb-4 lg:mb-8 drop-shadow-2xl max-w-5xl">
          Ton prochain Short<br />peut <span className="font-condiment text-neon text-[28px] sm:text-[48px] md:text-[70px] lg:text-[140px] lowercase align-middle inline-block">exploser.</span>
        </h2>
        <p className="font-mono text-[10px] sm:text-[14px] lg:text-[20px] uppercase text-cream/90 max-w-[90vw] lg:max-w-[600px] mb-4 sm:mb-6 lg:mb-12 leading-relaxed">
          Travaille avec un rédacteur spécialisé dans les formats courts à forte rétention.
        </p>
        
        <button className="liquid-glass px-6 lg:px-10 py-3 lg:py-5 rounded-[16px] lg:rounded-[24px] font-grotesk text-[12px] sm:text-[16px] lg:text-[24px] uppercase tracking-wider text-neon hover:bg-neon hover:text-[#010828] transition-colors border border-neon hover:scale-105 duration-300 flex items-center gap-2 lg:gap-4 group shadow-[0_0_30px_rgba(111,255,0,0.1)]">
          <MessageSquare className="w-4 h-4 lg:w-6 lg:h-6 group-hover:text-[#010828]" />
          Me contacter sur Discord
        </button>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <>
      {/* Texture Overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none mix-blend-lighten opacity-60 bg-cover bg-center"
        style={{ backgroundImage: "url('/texture.png')" }}
      />
      <main className="w-full overflow-x-hidden antialiased selection:bg-neon selection:text-[#010828]">
        <HeroSection />
        <AboutSection />
        <ShortsSection />
        <TrustSection />
        <ProcessSection />
        <PricingSection />
        <CTASection />
      </main>
    </>
  );
}
