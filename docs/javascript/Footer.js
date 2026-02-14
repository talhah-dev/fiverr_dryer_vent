const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="relative overflow-hidden bg-slate-950">
  <div class="absolute inset-0">
    <img
      src="/docs/assets/img5.png"
      alt="Footer background"
      class="h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-slate-950/60"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-[#0474BA]/35 via-slate-950/65 to-slate-950/95"></div>
    <div class="absolute inset-0 ring-1 ring-white/10"></div>
  </div>

  <div class="relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      <div class="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div class="lg:col-span-12" data-aos="fade-up" data-aos-duration="900">
          <div class="rounded-2xl bg-white/5 p-6 sm:p-8 ring-1 ring-white/10">
            <div class="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div class="lg:col-span-7">
                <p class="text-xs font-semibold tracking-widest text-[#0474BA]">READY WHEN YOU ARE</p>
                <h3 class="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Book dryer vent cleaning in Fort Worth—fast, clean, and safety-focused.
                </h3>
                <p class="mt-3 text-sm leading-relaxed text-white/70">
                  Call anytime or send a quick request online. We’ll help you restore airflow and keep your laundry room running smoothly.
                </p>
              </div>

              <div class="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
                <a
                  href="tel:+18173693311"
                  class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0474BA] shadow-sm transition hover:bg-white/90"
                >
                  Call (817) 369-3311
                  <i class="fa-solid fa-phone text-xs"></i>
                </a>
                <a
                  href="contact.html"
                  class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0474BA] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                >
                  Request Service
                  <i class="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4" data-aos="fade-up" data-aos-duration="900">
          <div class="flex items-center gap-3">
             <img
            id="brandLogo"
            src="/docs/assets/logo.png"
            alt="Logo"
            class="h-16 invert brightness-0 shrink-0 rounded-2xl object-cover"
          />
          </div>

          <p class="mt-5 text-sm leading-relaxed text-white/70">
            We remove lint buildup from inside the vent line to improve airflow, reduce overheating concerns, and help your dryer perform better.
          </p>

          <div class="mt-6 grid gap-3">
            <div class="flex items-start gap-3 text-white/80">
              <i class="fa-solid fa-location-dot mt-0.5 text-[#0474BA]"></i>
              <p class="text-sm">1660 S. University Drive, Fort Worth, TX 76107</p>
            </div>
            <div class="flex items-start gap-3 text-white/80">
              <i class="fa-solid fa-clock mt-0.5 text-[#0474BA]"></i>
              <p class="text-sm">Open 24/7</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8 grid gap-4 sm:grid-cols-2" data-aos="fade" data-aos-duration="900" data-aos-delay="120">
          <div class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <p class="text-sm font-semibold text-white">Quick Links</p>
            <div class="mt-4 grid gap-3 text-sm text-white/75">
              <a href="index.html" class="transition hover:text-white">Home</a>
              <a href="about.html" class="transition hover:text-white">About</a>
              <a href="dryer-vent-cleaning.html" class="transition hover:text-white">Dryer Vent Cleaning</a>
              <a href="faq.html" class="transition hover:text-white">FAQ</a>
              <a href="contact.html" class="transition hover:text-white">Contact</a>
            </div>
          </div>

          <div class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <p class="text-sm font-semibold text-white">Common Signs</p>
            <div class="mt-4 grid gap-3 text-sm text-white/75">
              <div class="flex items-start gap-3">
                <i class="fa-solid fa-hourglass-half mt-0.5 text-[#0474BA]"></i>
                <p>Clothes taking too long to dry</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fa-solid fa-temperature-high mt-0.5 text-[#0474BA]"></i>
                <p>Laundry room feels unusually hot</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fa-solid fa-wind mt-0.5 text-[#0474BA]"></i>
                <p>Weak airflow at the outside vent</p>
              </div>
              <div class="flex items-start gap-3">
                <i class="fa-solid fa-fire-flame-curved mt-0.5 text-[#0474BA]"></i>
                <p>Burning or musty smells while drying</p>
              </div>
            </div>
          </div>

          <div class="sm:col-span-2 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div class="grid gap-5 sm:grid-cols-3 sm:items-center">
              <div class="sm:col-span-2">
                <p class="text-sm font-semibold text-white">Prefer a quick call?</p>
                <p class="mt-1 text-sm text-white/70">
                  We’re available 24/7. If it’s urgent, calling is the fastest way to schedule.
                </p>
              </div>
              <div class="sm:col-span-1 flex sm:justify-end">
                <a
                  href="tel:+18173693311"
                  class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0474BA] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                >
                  Call Now
                  <i class="fa-solid fa-phone text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-white/70">
          © <span id="year"></span> Dryer Vent Cleaning Fort Worth. All rights reserved.
        </p>

        <div class="flex flex-wrap gap-4 text-sm text-white/70">
          <a href="faq.html" class="transition hover:text-white">FAQ</a>
          <a href="contact.html" class="transition hover:text-white">Contact</a>
        </div>
      </div>
    </div>
  </div>

  <script>
    (function () {
      const y = document.getElementById("year");
      if (y) y.textContent = String(new Date().getFullYear());
    })();
  </script>
</footer>

`;
