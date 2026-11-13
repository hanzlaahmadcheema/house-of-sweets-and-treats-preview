import {
  CakeIcon,
  SparklesIcon,
  GiftIcon,
  HeartIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { clinic, serviceGroups, faqs, orderSteps } from "@/lib/content";
import { OrderForm } from "@/components/OrderForm";
import { Reveal } from "@/components/Reveal";

const GROUP_ICONS = [
  CakeIcon,
  SparklesIcon,
  GiftIcon,
  HeartIcon,
];

function SectionHeading({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div id="top">
      {/* ---------- HERO (photo-led, MedBills pattern) ---------- */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-caramel-50 via-ivory to-sand"
        aria-labelledby="hero-heading"
      >
        <div className="container-responsive py-10 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="inline-flex animate-hero items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-caramel-800 shadow-sm">
                <CakeIcon className="h-4 w-4 text-honey" aria-hidden="true" />
                Homemade bakery · Houston, Texas
              </p>
              <h1
                id="hero-heading"
                className="mt-5 animate-hero animate-hero-delay-1 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]"
              >
                Gooey cinnamon rolls, fresh cookies, made from scratch.
              </h1>
              <div className="mt-5 animate-hero-photo animate-hero-delay-2 md:hidden">
                <img
                  src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1600&q=80"
                  alt="Freshly baked cinnamon rolls with sugar dusting on a dark baking tray"
                  width={1600}
                  height={1067}
                  className="h-auto w-full rounded-2xl shadow-xl"
                />
              </div>
              <p className="mt-5 animate-hero animate-hero-delay-2 max-w-prose text-lg leading-relaxed text-muted">
                Homemade cookies, big gooey cinnamon rolls, cakes and party
                treats — baked with love in Houston, Texas. 11 years on
                Facebook and still booked and busy. Every order starts with a
                message.
              </p>
              <div className="mt-7 flex animate-hero animate-hero-delay-3 flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-caramel-700 px-7 py-3 font-bold text-white shadow-lg shadow-caramel-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramel-800 hover:shadow-xl"
                >
                  See the goodies
                </a>
                <a
                  href={clinic.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-caramel-800 px-7 py-3 font-bold text-caramel-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramel-50"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
                  DM to order
                </a>
              </div>
              <div className="mt-8 flex animate-hero animate-hero-delay-4 flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-caramel-600" aria-hidden="true" />
                  11 years on Facebook
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-caramel-600" aria-hidden="true" />
                  Payment secures your order
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-caramel-600" aria-hidden="true" />
                  Pickup in east Houston
                </span>
              </div>
            </div>
            <div className="relative hidden animate-hero-photo animate-hero-delay-2 md:block">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1600&q=80"
                  alt="Freshly baked cinnamon rolls with sugar dusting on a dark baking tray"
                  width={1600}
                  height={1067}
                  className="h-[480px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="flex items-center gap-1.5 text-lg font-extrabold text-ink">
                  <CakeIcon className="h-5 w-5 text-honey" aria-hidden="true" />
                  Cinnamon rolls — from $6
                </p>
                <p className="text-sm text-muted">
                  Sunday pickup · payment secures your order
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <section className="border-y border-caramel-100 bg-caramel-50" aria-label="Why customers choose us">
        <div className="container-responsive grid grid-cols-2 gap-x-4 gap-y-5 py-6 md:grid-cols-4">
          {[
            { strong: "11 years on Facebook", sub: "Booked and busy" },
            { strong: "Cookie drops", sub: "Fresh lineup every week" },
            { strong: "Cinnamon rolls from $6", sub: "Sunday pickup" },
            { strong: "Tue–Sat", sub: "8am–5pm, Sat till 1pm" },
          ].map((f, i) => (
            <Reveal key={f.strong} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <div className="border-l-2 border-caramel-200 pl-4">
              <p className="font-extrabold text-caramel-800">{f.strong}</p>
              <p className="text-sm text-muted">{f.sub}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- MENU ---------- */}
      <section id="menu" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="menu-heading">
        <div className="container-responsive">
          <Reveal>
          <SectionHeading
            title="The goodies"
            intro="Everything below is homemade from scratch. Prices are listed where they are published — message us and we will confirm your order. Payment secures your order, and ordering closes once we reach capacity."
          />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((group, i) => {
              const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
              return (
                <Reveal
                  key={group.title}
                  delay={(i % 4) as 0 | 1 | 2 | 3}
                >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {group.image && (
                    <img
                      src={group.image}
                      alt={group.imageAlt ?? ""}
                      width={1600}
                      height={1067}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-caramel-50 text-caramel-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-ink">
                      {group.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{group.blurb}</p>
                    <ul className="mt-4 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[0.95rem] text-ink">
                          <CheckCircleIcon
                            className="mt-0.5 h-5 w-5 shrink-0 text-caramel-600"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <p className="text-lg font-extrabold text-caramel-800">
                        {group.price}
                      </p>
                      <a
                        href={clinic.facebookUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center font-bold text-caramel-800 underline-offset-4 hover:underline"
                      >
                        DM to order
                      </a>
                    </div>
                  </div>
                </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- SWEET THINGS TAKE TIME (dark band) ---------- */}
      <section id="story" className="scroll-mt-24 bg-pine py-16 md:py-24" aria-labelledby="story-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
          <div>
            <p className="flex items-center gap-2 font-bold text-honey">
              <HeartIcon className="h-6 w-6" aria-hidden="true" />
              Sweet things take time
            </p>
            <h2 id="story-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Eleven years of homemade, and still booked and busy
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pine-light">
              Every recipe started with a simple idea, a little faith, and a
              lot of hard work. Eleven years on Facebook later, House of Sweets
              and Treats is still here — fresh cookies, gooey cinnamon rolls,
              cakes and party treats, all homemade from scratch.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-pine-light">
              The cookie drops are coming back: every week, a fresh lineup of
              homemade cookies in different flavors, available for preorder
              and pickup. Tell us your favorite flavor — it might be in the
              next drop.
            </p>
            <a
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-honey px-7 py-3 font-bold text-caramel-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amberstar"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
              DM to order
            </a>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80"
              alt="Chocolate chip cookies stacked on a plate with a glass of milk"
              width={1200}
              height={800}
              loading="lazy"
              className="h-72 w-full object-cover md:h-96"
            />
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- HOW ORDERING WORKS ---------- */}
      <section id="how" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="how-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
            <SectionHeading
              title="How ordering works"
              intro="Three simple steps — and your goodies are baked fresh for the day you need them."
            />
            </Reveal>
            <ol className="mt-8 space-y-6">
              {orderSteps.map((step, i) => (
                <Reveal key={step.title} delay={(i % 3) as 0 | 1 | 2 | 3}>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-caramel-800 text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{step.title}</p>
                    <p className="mt-1 leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-ink">What to include in your message</h3>
            <ul className="mt-4 space-y-3">
              {[
                "What you want — cinnamon rolls, cookies, a cake, or party treats",
                "When you need it — the date and time",
                "How many people it is for",
                "Your favorite cookie flavor, for the next drop",
                "Any allergies we should know about",
                "Any add-ons — extra icing, pecans, or cookie butter drizzle",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-caramel-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Message as early as you can — payment secures your order, and
              ordering closes once we reach capacity. Sunday cinnamon roll
              pans sell out fast.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- MEET THE BAKER ---------- */}
      <section className="border-y border-caramel-100 bg-caramel-50 py-16 md:py-24" aria-labelledby="baker-heading">
        <Reveal>
        <div className="container-responsive grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-caramel-800 shadow-xl md:h-52 md:w-52">
            <span className="font-serif text-7xl font-semibold text-honey md:text-8xl" aria-hidden="true">
              H
            </span>
          </div>
          <div>
            <h2 id="baker-heading" className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Meet the baker behind House of Sweets and Treats
            </h2>
            <p className="mt-2 font-semibold text-caramel-700">
              Homemade bakery · {clinic.area}
            </p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              {clinic.owner.bio}
            </p>
            <p className="mt-4 text-muted">
              Fresh cookies, gooey cinnamon rolls, cakes and party treats —
              for birthdays, brunches, family gatherings, holiday weekends,
              and every sweet tooth in between.
            </p>
          </div>
        </div>
        </Reveal>
      </section>

      {/* ---------- OCCASIONS ---------- */}
      <section className="py-16 md:py-24" aria-labelledby="occasions-heading">
        <div className="container-responsive">
          <Reveal>
          <SectionHeading
            title="Made for your occasion"
            intro="Homemade goodies for every kind of celebration — tell us the day, and we will bake for it."
          />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Birthdays & parties", body: "Cakes, cookies and treats for anything party-related — message us with what you need and we will bake for it." },
              { title: "Sunday brunch", body: "Warm, homemade cinnamon roll pans — 6-count for $18, 8-count family pan for $25 — perfect for Sunday morning." },
              { title: "Holiday weekends", body: "Big gooey cinnamon rolls for Memorial Day weekend, family gatherings and traveling snacks. Preorder only." },
              { title: "Cookie drops", body: "A fresh lineup of homemade cookies every week, in different flavors. Tell us your favorite — it might be in the next drop." },
            ].map((o, i) => (
              <Reveal key={o.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-caramel-50 text-caramel-700">
                  <CakeIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">{o.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{o.body}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ORDER ---------- */}
      <section id="book" className="scroll-mt-24 border-y border-caramel-100 bg-caramel-50 py-16 md:py-24" aria-labelledby="book-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal variant="left">
          <div>
            <Reveal>
            <SectionHeading
              title="Order"
              intro="Request an order here and we will confirm it by DM — or skip the form and message us on Facebook directly."
            />
            </Reveal>
            <p className="mt-6 flex items-center gap-3 text-lg font-bold text-caramel-800">
              <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />
              <a href={clinic.facebookUrl} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                DM us on Facebook
              </a>
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              Pickup in the east Houston area. The exact time is sent to you after your order is placed.
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <ClockIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              Tue–Fri 8am–5pm, Sat 8am–1pm.
            </p>
            <p className="mt-3 text-muted">
              No phone number or email listed — Facebook DM is the way to
              reach us.
            </p>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <OrderForm />
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="container-responsive max-w-3xl">
          <Reveal>
          <SectionHeading
            title="Questions customers ask"
            intro="Answers from the bakery's public information. Anything else — DM us and ask."
          />
          </Reveal>
          <div className="mt-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) as 0 | 1}>
              <details className="group border-t border-slate-200 py-5 last:border-b">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-2xl font-normal text-muted transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose leading-relaxed text-muted">{f.a}</p>
              </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section id="visit" className="scroll-mt-24 border-t border-slate-200 py-16 md:py-24" aria-labelledby="visit-heading">
        <div className="container-responsive grid gap-10 md:grid-cols-2">
          <Reveal variant="left">
          <div>
            <Reveal>
            <SectionHeading
              title="Pickup in east Houston"
              intro="We are a home bakery in east Houston — pickup is arranged by message when you order."
            />
            </Reveal>
            <p className="mt-6 leading-relaxed text-muted">
              There is no shop counter — every cookie, roll and cake is baked
              to order and picked up at the agreed time. Sunday cinnamon roll
              pickup is on Sunday.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Ordering ahead matters most: payment secures your order, and
              ordering closes once we reach capacity. The more detail you
              send — flavors, theme, a photo of what you love — the better
              the result.
            </p>
          </div>
          </Reveal>
          <Reveal variant="right">
          <div className="rounded-2xl bg-caramel-800 p-6 text-white shadow-xl sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold">DM to order</h3>
            <p className="mt-3 leading-relaxed text-caramel-100">
              Facebook DM is how every order starts. Tell us what you want,
              when you need it, and how many people it is for — we will
              confirm your order and the price.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-caramel-900 transition-colors hover:bg-caramel-50"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
                Message on Facebook
              </a>
              <a
                href="#menu"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                See the goodies
              </a>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-caramel-100">
              No phone number or email listed — Facebook is the fastest way to
              reach us.
            </p>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-pine py-16 md:py-20" aria-labelledby="closing-heading">
        <Reveal>
        <div className="container-responsive max-w-3xl text-center md:text-left">
          <h2 id="closing-heading" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Hungry? DM us to order.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-pine-light md:mx-0">
            Fresh cookies, gooey cinnamon rolls, cakes and party treats —
            homemade from scratch in Houston. Message us on Facebook with
            what you need and when, and we will take it from there.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-start md:justify-start">
            <a
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-honey px-7 py-3 font-bold text-caramel-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amberstar"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
              DM us on Facebook
            </a>
            <a
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/60 px-7 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              See the goodies
            </a>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
