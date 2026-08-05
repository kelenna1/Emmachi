import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const bentoItems = [
  {
    id: "legacy",
    title: "30+ Years in the Game",
    description:
      "Three decades of consistent supply, real relationships, and zero shortcuts.",
    feature: "timeline",
    timeline: [
      { year: "1994", event: "Emmachi Imperial founded in Lagos" },
      { year: "2005", event: "Expanded distribution across South-West" },
      { year: "2024", event: "Serving 1,000+ businesses and counting" },
    ],
    className: "col-span-1 md:col-span-1",
  },
  {
    id: "capacity",
    title: "Built for Volume",
    description:
      "Whether it's 50 bags or 500, we handle it without breaking a sweat.",
    feature: "counter",
    statistic: {
      start: 0,
      end: 1000,
      suffix: "+",
      label: "Businesses Served",
    },
    className: "col-span-1 md:col-span-1",
  },
  {
    id: "value",
    title: "Wholesale Pricing, No Surprises",
    description:
      "Direct manufacturer partnerships mean you get real wholesale rates - not marked-up middleman prices.",
    feature: "chart",
    statistic: {
      label: "Savings vs. open market",
      end: 85,
      suffix: "%",
    },
    className: "col-span-1 md:col-span-1",
  },
  {
    id: "access",
    title: "Order Directly on WhatsApp",
    description:
      "No apps to download, no long forms. Just message us and we sort it out.",
    feature: "typing",
    typingText:
      "You: I need 200 bags of Golden Penny flour, deliver to Ikeja.\n\nEmmachi: Noted. We'll have it to you by tomorrow morning. ✓✓",
    className: "col-span-1 md:col-span-1",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const CounterAnimation = ({ start, end, suffix = "" }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    let currentFrame = 0;
    const counter = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easedProgress = 1 - (1 - progress) ** 3;
      const current = start + (end - start) * easedProgress;

      setCount(Math.min(current, end));

      if (currentFrame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [start, end]);

  return (
    <div className="flex items-baseline gap-1">
      <span className="font-bold text-3xl text-gray-900">
        {count.toFixed(0)}
      </span>
      <span className="font-semibold text-emerald-600 text-xl">
        {suffix}
      </span>
    </div>
  );
};

const ChartAnimation = ({ value }) => (
  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
    <motion.div
      animate={{ width: `${value}%` }}
      className="h-full rounded-full bg-emerald-500"
      initial={{ width: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  </div>
);

const TimelineFeature = ({ timeline }) => (
  <div className="relative mt-4">
    <div className="absolute top-0 bottom-0 left-[9px] w-[2px] bg-gray-100" />
    {timeline.map((item, index) => (
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className="relative mb-4 last:mb-0 flex gap-4"
        initial={{ opacity: 0, x: -8 }}
        key={index}
        transition={{ delay: 0.15 * index }}
      >
        <div className="z-10 mt-1 h-5 w-5 flex-shrink-0 rounded-full border-[3px] border-white bg-emerald-500 shadow-sm" />
        <div>
          <div className="font-bold text-gray-900 text-sm">
            {item.year}
          </div>
          <div className="text-gray-500 text-sm">
            {item.event}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const TypingCodeFeature = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);

          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        },
        Math.random() * 35 + 15
      );

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className="relative mt-3">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
        </div>
        <div className="text-gray-400 text-[11px] font-medium ml-1.5">
          WhatsApp
        </div>
      </div>
      <div
        className="h-[110px] overflow-y-auto rounded-lg bg-gray-50 p-4 font-sans text-gray-700 text-sm border border-gray-100"
        ref={terminalRef}
      >
        <pre className="whitespace-pre-wrap leading-relaxed font-sans text-sm">
          {displayedText}
          <span className="animate-pulse text-emerald-500">|</span>
        </pre>
      </div>
    </div>
  );
};

const BentoCard = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [2, -2]);
  const rotateY = useTransform(x, [-100, 100], [-2, 2]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={cn("h-full", item.className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      variants={fadeInUp}
    >
      <div
        className="group relative flex h-full flex-col rounded-2xl border border-gray-200/70 bg-white p-6 md:p-7 transition-all duration-300 hover:border-gray-300/80 hover:shadow-lg overflow-hidden"
      >
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
        
        <div className="relative z-10 flex h-full flex-col gap-2">
          <h3 className="font-bold text-gray-900 text-lg tracking-tight group-hover:text-emerald-700 transition-colors duration-200">
            {item.title}
          </h3>

          <p className="text-gray-500 text-[13px] leading-relaxed">
            {item.description}
          </p>

          {/* Feature content */}


          {item.feature === "counter" && item.statistic && (
            <div className="mt-auto pt-4">
              <CounterAnimation
                end={item.statistic.end || 100}
                start={item.statistic.start || 0}
                suffix={item.statistic.suffix}
              />
              <div className="text-xs font-medium text-gray-400 mt-1">
                {item.statistic.label}
              </div>
            </div>
          )}

          {item.feature === "chart" && item.statistic && (
            <div className="mt-auto pt-4">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="font-medium text-gray-500 text-xs">
                  {item.statistic.label}
                </span>
                <span className="font-bold text-emerald-600 text-sm">
                  {item.statistic.end}
                  {item.statistic.suffix}
                </span>
              </div>
              <ChartAnimation value={item.statistic.end || 0} />
            </div>
          )}

          {item.feature === "timeline" && item.timeline && (
            <TimelineFeature timeline={item.timeline} />
          )}

          {item.feature === "typing" && item.typingText && (
            <TypingCodeFeature text={item.typingText} />
          )}


        </div>
      </div>
    </motion.div>
  );
};

export default function BentoGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-3">
            <span>Why Emmachi</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Why Businesses Choose Us
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-md mx-auto">
            Consistent supply, honest pricing, and three decades of doing what we said we'd do.
          </p>
        </div>

        {/* Bento Grid - 2x2 on both mobile and desktop */}
        <motion.div
          className="grid gap-4 md:gap-5 grid-cols-2 auto-rows-[minmax(180px,auto)]"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-60px" }}
          whileInView="visible"
        >
          {bentoItems.map((item) => (
            <BentoCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
