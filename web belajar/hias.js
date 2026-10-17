(function () {
  // BOLA CAHAYA DI LATAR
  for (let i = 1; i <= 3; i++) {
    const b = document.createElement("div");
    b.className = "hias-blob hias-blob" + i;
    document.body.appendChild(b);
  }

  // JANGAN JALANKAN GERAKAN KALAU PENGGUNA MEMILIH GERAKAN MINIM
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // JEJAK KILAUAN MENGIKUTI MOUSE
  let terakhir = 0;
  addEventListener("mousemove", (e) => {
    const sekarang = Date.now();
    if (sekarang - terakhir < 35) return;
    terakhir = sekarang;
    const d = document.createElement("div");
    const u = 6 + Math.random() * 8;
    d.className = "hias-jejak";
    d.style.cssText =
      "left:" + (e.clientX - u / 2) + "px;top:" + (e.clientY - u / 2) + "px;width:" + u + "px;height:" + u + "px";
    document.body.appendChild(d);
    d.animate(
      [
        { opacity: 0.8, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0) translateY(20px)" },
      ],
      { duration: 700 }
    ).onfinish = () => d.remove();
  });

  // LEDAKAN PARTIKEL SAAT KLIK
  addEventListener("click", (e) => {
    for (let i = 0; i < 12; i++) {
      const p = document.createElement("div");
      p.className = "hias-partikel";
      p.style.cssText =
        "left:" + e.clientX + "px;top:" + e.clientY + "px;width:8px;height:8px;background:" +
        (i % 2 ? "var(--a,#6ee7ff)" : "var(--b,#a78bfa)");
      document.body.appendChild(p);
      const sudut = (Math.PI * 2 * i) / 12;
      const jarak = 40 + Math.random() * 40;
      p.animate(
        [
          { transform: "translate(0,0) scale(1)", opacity: 1 },
          {
            transform: "translate(" + Math.cos(sudut) * jarak + "px," + Math.sin(sudut) * jarak + "px) scale(0)",
            opacity: 0,
          },
        ],
        { duration: 600, easing: "ease-out" }
      ).onfinish = () => p.remove();
    }
  });
})();