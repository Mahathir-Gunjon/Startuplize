"use client";

import React, { useEffect } from "react";

interface CalEmbedProps {
  id?: string;
  className?: string;
}

export default function CalEmbed({
  id = "my-cal-inline-website",
  className = "w-full min-h-[600px] rounded-2xl overflow-hidden bg-white/5 border border-white/10",
}: CalEmbedProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = d.createElement("script");
            script.src = A;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal("init", "website", { origin: "https://app.cal.com" });
      Cal.config = Cal.config || {};
      Cal.config.forwardQueryParams = true;
      Cal.ns.website("inline", {
        elementOrSelector: `#${id}`,
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "mahthir-eklmy0/website",
      });
      Cal.ns.website("ui", { hideEventTypeDetails: false, layout: "month_view" });
    }
  }, [id]);

  return (
    <div className={className}>
      <div
        id={id}
        style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
      />
    </div>
  );
}
