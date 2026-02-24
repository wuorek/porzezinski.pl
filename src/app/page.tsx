import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen font-body selection:bg-safety-orange selection:text-concrete">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-40 border-b-[3px] border-ink bg-concrete flex justify-between items-center px-4 md:px-8 py-4 mix-blend-normal">
        <div className="font-display font-bold text-xl md:text-2xl tracking-tighter leading-none">
          NIKOS DAWID<br />PORZEZIŃSKI
        </div>
        <a 
          href="#kontakt" 
          className="font-display font-bold text-sm md:text-lg bg-ink text-concrete px-6 py-3 brutalist-shadow brutalist-border uppercase transition-colors hover:bg-safety-orange hover:text-ink"
        >
          Wyceń projekt
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-4 md:px-8 border-b-[3px] border-ink min-h-[85vh] flex flex-col justify-end relative bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-concrete mix-blend-screen opacity-90"></div>
        <div className="absolute inset-0 bg-concrete/60"></div>
        <div className="max-w-[90vw] relative z-10">
          <h1 className="clamp-text-huge font-display font-bold uppercase leading-[0.85] mb-8 tracking-tighter">
            Budujemy<br />
            <span className="text-safety-orange" style={{WebkitTextStroke: '2px var(--ink)', textShadow: '4px 4px 0 var(--ink)'}}>Twardo.</span><br />
            Remontujemy<br />
            Solidnie.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mt-16 md:items-end w-full border-t-[3px] border-ink pt-8">
            <p className="font-body text-xl md:text-2xl max-w-xl font-medium">
              Surowe podejście do jakości. Prace remontowo-budowlane na terenie Siemiatycz i okolic. Żadnych kompromisów, tylko trwałe rozwiązania.
            </p>
            <div className="text-sm font-display uppercase tracking-widest font-bold border-l-[3px] border-safety-orange pl-4 py-2">
              Licencja / 2024<br />
              Woj. Podlaskie
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-b-[3px] border-ink overflow-hidden bg-safety-orange py-4 whitespace-nowrap flex text-ink font-display font-bold text-2xl md:text-4xl uppercase w-full">
        <div className="animate-marquee inline-flex whitespace-nowrap shrink-0">
          <span className="mx-4">ELEWACJE</span>·
          <span className="mx-4">WYKOŃCZENIA</span>·
          <span className="mx-4">ZABUDOWA KG</span>·
          <span className="mx-4">STANY SUROWE</span>·
          <span className="mx-4">DOCIEPLENIA</span>·
          <span className="mx-4">REMONTY KAPITALNE</span>·
        </div>
        <div className="animate-marquee inline-flex whitespace-nowrap shrink-0" aria-hidden="true">
          <span className="mx-4">ELEWACJE</span>·
          <span className="mx-4">WYKOŃCZENIA</span>·
          <span className="mx-4">ZABUDOWA KG</span>·
          <span className="mx-4">STANY SUROWE</span>·
          <span className="mx-4">DOCIEPLENIA</span>·
          <span className="mx-4">REMONTY KAPITALNE</span>·
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b-[3px] border-ink">
        <div className="md:col-span-4 border-b-[3px] md:border-b-0 md:border-r-[3px] border-ink p-8 md:p-12 bg-ink text-concrete flex flex-col justify-between">
          <h2 className="clamp-text-large font-display mb-8">KOMPETENCJE</h2>
          <p className="text-lg opacity-80 max-w-sm font-medium">
            Specjalizujemy się w ciężkich pracach budowlanych i precyzyjnych wykończeniach. Realizujemy zlecenia od fundamentów aż po klucz.
          </p>
        </div>
        
        <div className="md:col-span-8 flex flex-col bg-concrete">
          {[
            { id: "01", title: "Elewacje i Docieplenia", desc: "Kompleksowe systemy ociepleń. Trwałe i estetyczne fasady odporne na warunki atmosferyczne." },
            { id: "02", title: "Wykończenia Wnętrz", desc: "Szpachlowanie, malowanie, układanie glazury i terakoty. Precyzja na każdym centymetrze kwadratowym." },
            { id: "03", title: "Zabudowa K-G", desc: "Sufity podwieszane, ścianki działowe, nietypowe konstrukcje z płyt gipsowo-kartonowych." },
            { id: "04", title: "Prace Ogólnobudowlane", desc: "Murowanie, wylewki, drobne wyburzenia i przygotowanie pod inwestycje." }
          ].map((service, idx) => (
            <article 
              key={service.id} 
              className={`p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${idx !== 3 ? 'border-b-[3px] border-ink' : ''} hover:bg-safety-orange transition-colors group cursor-default`}
            >
              <span className="font-display font-bold text-4xl text-steel group-hover:text-ink">{service.id}</span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 group-hover:text-concrete">{service.title}</h3>
                <p className="font-body text-lg group-hover:text-ink max-w-2xl">{service.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT / PROCESS */}
      <section className="px-4 md:px-8 clamp-spacing border-b-[3px] border-ink grid grid-cols-1 lg:grid-cols-2 gap-16 relative bg-concrete overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-ink pointer-events-none" />
        
        <div className="relative z-10 pr-0 lg:pr-16">
          <h2 className="clamp-text-large font-display mb-12">PROCES<br />BAZOWY</h2>
          <div className="space-y-12">
            {[
              { step: "Wycena", text: "Przyjeżdżamy, oceniamy, liczymy. Bez owijania w bawełnę. Zawsze darmowo." },
              { step: "Harmonogram", text: "Ustalamy termin i się go trzymamy. Czas to fundament w branży." },
              { step: "Realizacja", text: "Wchodzimy i robimy swoje. Porządek na budowie i jakość w wykonaniu." }
            ].map((p, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-ink text-concrete flex items-center justify-center font-display font-bold text-xl brutalist-border flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2">{p.step}</h4>
                  <p className="font-body text-lg">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 pl-0 lg:pl-16 flex flex-col justify-center">
          <div className="bg-ink p-8 md:p-16 text-concrete brutalist-border brutalist-shadow transform rotate-1 md:-rotate-1">
            <h3 className="font-display text-3xl md:text-5xl mb-8 uppercase text-safety-orange">Dlaczego my?</h3>
            <p className="font-body text-xl leading-relaxed mb-8">
              W Siemiatyczach i okolicach wyrobiliśmy sobie markę ciężką pracą, a nie marketingiem. Dla nas słowo jest droższe od umowy, a solidnie zrobiona robota to najlepsza wizytówka.
            </p>
            <p className="font-body text-xl leading-relaxed">
              Nie boimy się trudnych projektów i wyzwań. Gdzie inni mówią "się nie da", my wjeżdżamy ze sprzętem.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="grid grid-cols-1 md:grid-cols-2 bg-ink text-concrete min-h-[60vh] border-b-[3px] border-ink">
        <div className="p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative huge text */}
          <div className="absolute top-0 left-0 opacity-5 font-display text-[20vw] font-bold leading-none pointer-events-none select-none">
            KONTAKT
          </div>
          
          <div className="relative z-10">
            <h2 className="clamp-text-large font-display text-safety-orange mb-8">SKONTAKTUJ SIĘ</h2>
            <p className="font-body text-xl mb-12 max-w-md">
              Gotowy na remont bez stresu? Zadzwoń lub napisz. Odpowiadamy konkretnie.
            </p>
            
            <div className="space-y-8 font-display text-2xl md:text-4xl font-bold">
              <a href="tel:+48500000000" className="block hover:text-safety-orange transition-colors group">
                <span className="text-sm md:text-lg block text-steel mb-1 group-hover:text-safety-orange transition-colors">TELEFON</span>
                +48 500 000 000
              </a>
              <div className="block">
                <span className="text-sm md:text-lg block text-steel mb-1">OBSZAR DZIAŁANIA</span>
                SIEMIATYCZE I OKOLICE
              </div>
              <a href="mailto:kontakt@remonty-siemiatycze.pl" className="block hover:text-safety-orange transition-colors group">
                <span className="text-sm md:text-lg block text-steel mb-1 group-hover:text-safety-orange transition-colors">E-MAIL</span>
                kontakt@remonty-siemiatycze.pl
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-concrete text-ink p-8 md:p-16 flex flex-col justify-center border-t-[3px] md:border-t-0 md:border-l-[3px] border-ink relative overflow-hidden">
          {/* Large diagonal text in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 font-display text-[15vw] font-bold text-ink opacity-5 whitespace-nowrap pointer-events-none select-none">
            W Y C E N A
          </div>
          
          <form className="relative z-10 w-full max-w-lg mx-auto space-y-6">
            <h3 className="font-display font-bold text-3xl mb-8 uppercase border-b-[3px] border-ink pb-4">Szybka wiadomość</h3>
            
            <div className="flex flex-col">
              <label htmlFor="name" className="font-display font-bold mb-2 uppercase text-sm tracking-wider">Imię i nazwisko / Firma</label>
              <input type="text" id="name" className="bg-transparent border-[3px] border-ink p-4 font-body outline-none focus:bg-safety-orange focus:text-ink transition-colors" placeholder="Jan Kowalski" />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-display font-bold mb-2 uppercase text-sm tracking-wider">Telefon</label>
              <input type="tel" id="phone" className="bg-transparent border-[3px] border-ink p-4 font-body outline-none focus:bg-safety-orange focus:text-ink transition-colors" placeholder="+48 ..." />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="message" className="font-display font-bold mb-2 uppercase text-sm tracking-wider">Zakres prac</label>
              <textarea id="message" rows={4} className="bg-transparent border-[3px] border-ink p-4 font-body outline-none focus:bg-safety-orange focus:text-ink transition-colors resize-none" placeholder="Opisz krótko, co jest do zrobienia..."></textarea>
            </div>
            
            <button type="button" className="w-full bg-ink text-concrete font-display font-bold text-xl py-6 brutalist-border brutalist-shadow uppercase hover:bg-safety-orange hover:text-ink transition-all mt-4">
              Wyślij Zapytanie
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-concrete py-8 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 font-body font-bold text-sm uppercase">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} USŁUGI REMONTOWO-BUDOWLANE<br className="md:hidden" /> NIKOS DAWID PORZEZIŃSKI
        </div>
        <div className="text-steel text-center md:text-right">
          NIP: XX-XXX-XX-XXX | REGON: XXXXXXXX
        </div>
      </footer>
    </main>
  );
}
