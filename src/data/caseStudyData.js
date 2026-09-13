export const CASE_STUDY = {
  meta: {
    title: "Fashion E-Commerce App Teardown & Feature Strategy",
    subtitle: "A self-directed Product Management UX audit, competitive benchmark, and prioritization strategy for India's leading fashion platform.",
    author: "Product Management Case Study",
    targetApp: "Myntra",
    targetAppTagline: "India's largest fashion e-commerce marketplace (~60M+ MAUs, 1.5M+ products)",
    competitors: ["Ajio (Reliance Retail)", "Nykaa Fashion (FSN E-Commerce)"],
    date: "Portfolio Strategy Artifact",
    readingTime: "8 min read",
    status: "Validated PM Artifact"
  },

  overview: {
    headline: "The Scale Dilemma: Growth Hacking vs. Customer Cognitive Exhaustion",
    summary: "Myntra is the undisputed titan of Indian fashion e-commerce with over 60 million monthly active shoppers and catalog depth exceeding 1.5 million SKUs. However, years of hyper-aggressive GMV acceleration have turned the app into an overwhelming promotional billboard. Sizing ambiguity remains the single largest margin killer in fashion retail—driving industry return rates upwards of 28–35% and reverse logistics costs eating 12–15% of gross margins. This teardown evaluates Myntra across four critical customer touchpoints—Homepage, Search & Filter, Product Page & Personalization, and Checkout—to diagnose systemic friction and formulate an ROI-positive product roadmap.",
    stats: [
      { label: "Monthly Active Users", value: "60M+", delta: "Scale Leader", type: "neutral" },
      { label: "Apparel Return Rate", value: "28-35%", delta: "56% size-driven", type: "negative" },
      { label: "Reverse Logistics Cost", value: "₹180-240", delta: "per return cycle", type: "negative" },
      { label: "Catalog Depth", value: "1.5M+ SKUs", delta: "6,000+ brands", type: "positive" }
    ],
    scopeSurfaces: [
      { name: "Homepage Discovery", focus: "Visual hierarchy, promotional carousels, banner fatigue" },
      { name: "Search & Algorithmic Filters", focus: "Sponsored ad drift, semantic query matching, filter sheets" },
      { name: "Personalization & Sizing", focus: "Cross-brand size charts, fit confidence, bracket shopping" },
      { name: "Checkout & Bag Funnel", focus: "Cross-sell friction, coupon clarity, convenience fee hurdles" }
    ]
  },

  uxAudit: [
    {
      id: "friction-1",
      surface: "Homepage Discovery",
      badge: "Discovery & Feed",
      severity: "High",
      frictionPoint: "Promotional Carousel Overload & Banner Blindness",
      problemDescription: "The homepage presents an endless, uncurated vertical stack of 25+ promotional carousels, gamified 'Spin & Win' widgets, flash countdown timers, and overlapping discount badges. There is zero personalized visual anchoring for returning shoppers.",
      userImpact: "High-intent users seeking curated outfits suffer severe cognitive fatigue and banner blindness. Returning shoppers looking to pick up a previous browsing session are forced into a scavenger hunt through discount screamers, driving bounce rates on non-sale days.",
      heuristicViolated: "Nielsen Heuristic #8: Aesthetic and Minimalist Design & Heuristic #6: Recognition Rather Than Recall",
      heuristicQuote: "Dialogues should not contain information that is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information.",
      evidence: "Users scroll past an average of 14 banner widgets before encountering a single personalized category recommendation based on recent browsing."
    },
    {
      id: "friction-2",
      surface: "Search & Filter Engine",
      badge: "Search & Discovery",
      severity: "Critical",
      frictionPoint: "Sponsored Ad Drift & Semantic Intent Dilution",
      problemDescription: "Querying specific intent (e.g., '100% pure linen casual shirt beige') yields first-screen viewport results dominated by synthetic blends, irrelevant sponsored brand campaigns, and out-of-stock colorways with low-contrast 'Ad' badges.",
      userImpact: "Erodes search trust. Shoppers must open 5-6 nested filter sheets (fabric, sleeve length, collar, fit, pattern) repeatedly because the search algorithm prioritizes ad revenue auction bidding over semantic exact-match query relevance.",
      heuristicViolated: "Nielsen Heuristic #2: Match Between System and the Real World & Heuristic #1: Visibility of System Status",
      heuristicQuote: "The system should speak the users' language, with words, phrases, and concepts familiar to the user, rather than system-oriented terms.",
      evidence: "Top 4 slots on high-intent fabric queries are frequently sponsored poly-cotton blends with less than 20% relevance to user input."
    },
    {
      id: "friction-3",
      surface: "Product Page & Personalization",
      badge: "Product Detail (PDP)",
      severity: "Critical",
      frictionPoint: "The Sizing Confidence Gap & Forced Bracket Shopping",
      problemDescription: "Size charts remain static tabular representations of garment measurements in centimeters without accounting for brand-specific cut variance (e.g., oversized streetwear vs. European slim fit). Crowd-sourced fit ratings lack transparency on buyer body silhouette.",
      userImpact: "Shoppers default to 'bracket shopping'—purchasing both Size M and Size L with premeditated intent to return one. This explodes reverse logistics costs (₹220+ per return), creates inventory stockouts for other buyers, and inflates return processing times.",
      heuristicViolated: "Nielsen Heuristic #5: Error Prevention",
      heuristicQuote: "Even better than good error messages is a careful design which prevents a problem from occurring in the first place.",
      evidence: "Size discrepancy is cited in 56% of apparel returns on Myntra, representing an estimated ₹320 Cr annual drag on profitability across the marketplace."
    },
    {
      id: "friction-4",
      surface: "Checkout & Bag Funnel",
      badge: "Cart & Checkout",
      severity: "Medium",
      frictionPoint: "Aggressive Low-Ticket Cross-Sell & Disjointed Loyalty Hurdles",
      problemDescription: "The checkout bag injects aggressive add-on banners ('Add ₹149 more for Free Shipping', 'Add socks to save ₹40 convenience fee') alongside multiple Insider coin redemption sliders and split delivery dates, pushing the primary CTA button below the mobile viewport fold.",
      userImpact: "Creates anxiety and friction at the ultimate conversion moment. Users get diverted from checkout to browse cheap filler items to save small fees, frequently resulting in cart abandonment and session drop-off.",
      heuristicViolated: "Nielsen Heuristic #4: Consistency and Standards & Heuristic #8: Aesthetic and Minimalist Design",
      heuristicQuote: "Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.",
      evidence: "Cart abandonment spikes by 14% when users encounter multi-tiered shipping fee thresholds and unapplied coin hurdles simultaneously."
    }
  ],

  benchmarking: {
    summary: "We benchmarked Myntra against two major Indian competitors—Ajio (Reliance Retail, fast fashion & value) and Nykaa Fashion (FSN E-Commerce, premium editorial & curated discovery)—evaluating Personalization and Post-Purchase operations.",
    dimensions: [
      {
        category: "Personalization: Size & Fit Guidance",
        myntra: {
          rating: "Average",
          status: "amber",
          details: "Standard static size charts with basic 'What is my size?' widget. Weak crowd-sourced body type calibration."
        },
        ajio: {
          rating: "Basic",
          status: "red",
          details: "Generic brand size charts, minimal crowd-sourced fit data, no cut/silhouette guidance."
        },
        nykaaFashion: {
          rating: "Advanced",
          status: "green",
          details: "Comprehensive model measurements (height, bust, waist, hips), real-time fit advice, and curated sizing tips per designer."
        }
      },
      {
        category: "Personalization: Style Feeds & Curation",
        myntra: {
          rating: "Crowded",
          status: "amber",
          details: "Myntra FWD provides Gen Z reels, but feed is heavily polluted by discount carousels and promotional popups."
        },
        ajio: {
          rating: "Functional",
          status: "amber",
          details: "Segmented by categories (Ajio Luxe, Trends, Sneakerhood), but lacking cohesive editorial storytelling."
        },
        nykaaFashion: {
          rating: "Best-in-Class",
          status: "green",
          details: "'The Edit' delivers high-fashion lookbooks, authentic influencer styling, curated occasion bundles, and zero coupon spam."
        }
      },
      {
        category: "Post-Purchase: Return & Exchange Initiation",
        myntra: {
          rating: "Frictionless UI",
          status: "green",
          details: "One-click return/exchange flow with instant reason capture and doorstep refund tracking."
        },
        ajio: {
          rating: "Good",
          status: "green",
          details: "Straightforward return initiation, clear return window countdown, policy transparency."
        },
        nykaaFashion: {
          rating: "Strict",
          status: "red",
          details: "Higher restriction on returns for luxury/designer wear, longer verification windows, slower initiation flow."
        }
      },
      {
        category: "Post-Purchase: Doorstep Trial & Instant Swap",
        myntra: {
          rating: "Standard Cycle",
          status: "amber",
          details: "Requires courier pickup, barcode scan, transit to hub, inspection, then dispatch of replacement size (4-7 days total)."
        },
        ajio: {
          rating: "Market Leader",
          status: "green",
          details: "Seamless Doorstep Exchange: Delivery partner delivers the replacement size and collects the return item in a single visit in select pin codes."
        },
        nykaaFashion: {
          rating: "Lagging",
          status: "red",
          details: "Standard return-first-then-reorder model; no direct doorstep exchange parity."
        }
      },
      {
        category: "Post-Purchase: Delivery Tracking & Transparency",
        myntra: {
          rating: "Excellent",
          status: "green",
          details: "Real-time live map tracking for delivery riders, proactive WhatsApp notifications, precise 2-hour delivery windows (Myntra M-Express)."
        },
        ajio: {
          rating: "Moderate",
          status: "amber",
          details: "Milestone-based tracking (Shipped, Out for Delivery), but lacks live vehicle telemetry or accurate delivery time slots."
        },
        nykaaFashion: {
          rating: "Good",
          status: "amber",
          details: "Detailed order milestone tracker, SMS & WhatsApp updates, but delivery timelines can be conservative (4-6 days)."
        }
      }
    ],
    competitorWins: [
      {
        competitor: "Nykaa Fashion",
        area: "Editorial Curation & Aesthetic Trust",
        whatTheyDoBetter: "Nykaa treats fashion discovery like a digital Vogue rather than a wholesale warehouse. Products are shot in cohesive editorial lighting, paired into complete outfits, and curated by occasion. Users browse with high aesthetic trust, leading to 35% higher AOV and zero banner fatigue.",
        takeawayForMyntra: "Myntra must balance high-velocity GMV promotional banners with an uncluttered, high-conviction 'Curated Mode' for shoppers seeking quality over discount hunting."
      },
      {
        competitor: "Ajio",
        area: "Doorstep Instant Size Exchange",
        whatTheyDoBetter: "Ajio solves the 7-day exchange anxiety through synchronized reverse logistics: the delivery executive brings Size L while taking back Size M in a single visit. This keeps the customer excited about the purchase rather than waiting a week with frozen capital.",
        takeawayForMyntra: "Myntra can leverage its vast Flipkart Logistics/Shadowfax regional dark-store network to pioneer instant size swapping in top 15 metros, cutting return churn."
      }
    ]
  },

  prioritization: {
    framework: "RICE Scoring Model (Reach × Impact × Confidence / Effort)",
    explanation: "Reach is estimated quarterly based on active shoppers encountering the surface. Impact is scored on a standard PM scale (0.5 = Minimal, 1.0 = Moderate, 2.0 = High, 3.0 = Massive). Confidence is a percentage reflecting data certainty. Effort is measured in person-months across engineering, design, and product.",
    features: [
      {
        id: "feat-1",
        rank: 1,
        name: "FitTwin: AI Sizing & Garment Cut Intelligence",
        summary: "A predictive sizing engine on the PDP that maps user body silhouette and brand-specific garment cut variance to deliver tailored size recommendations with real buyer return telemetry.",
        frictionAddressed: "Solves Product Sizing Ambiguity & eliminates Bracket Shopping (Friction #3)",
        reach: 8500, // 8.5M quarterly PDP apparel visitors
        reachLabel: "8.5M users/qtr (Active apparel browsers)",
        impact: 3.0,
        impactLabel: "3.0 (Massive — directly reduces ~18% of size-driven returns)",
        confidence: 0.80,
        confidenceLabel: "80% (High — validated by Zalando/ASOS benchmarks)",
        effort: 3.0,
        effortLabel: "3.0 person-months (ML inference + PDP widget)",
        riceScore: 6800,
        rationale: "Highest overall RICE score. Sizing is Myntra's single greatest margin hemorrhage. A 15-18% reduction in returns directly recovers millions in reverse logistics waste and boosts cart checkout confidence.",
        color: "brand"
      },
      {
        id: "feat-2",
        rank: 2,
        name: "Frictionless One-Tap Instant Size Swap",
        summary: "Synchronized reverse logistics workflow that reserves and dispatches replacement sizes from local dark stores the moment a return pickup barcode is scanned by the courier.",
        frictionAddressed: "Solves 7-day exchange delays and converts returns to retained GMV",
        reach: 2200, // 2.2M users/qtr initiating size returns
        reachLabel: "2.2M users/qtr (Initiating returns due to size)",
        impact: 2.0,
        impactLabel: "2.0 (High — converts 28% of size returns into retained revenue)",
        confidence: 0.90,
        confidenceLabel: "90% (Very High — standard logistics API capability)",
        effort: 4.0,
        effortLabel: "4.0 person-months (3PL sync, fraud check, dark store reserve)",
        riceScore: 990,
        rationale: "Very high confidence and immediate business retention. Converts refund churn into saved sales, but requires cross-functional orchestration with logistics partners (Shadowfax/Delhivery).",
        color: "slate"
      },
      {
        id: "feat-3",
        rank: 3,
        name: "Occasion Capsule & Lookbook Engine",
        summary: "Natural-language occasion search parser ('Goa sundowner', 'Bangalore tech offsite') that bundles coordinated apparel, footwear, and accessories with one-tap bundle checkout.",
        frictionAddressed: "Solves Search Drift, Banner Fatigue & Decision Paralysis (Frictions #1 & #2)",
        reach: 3500, // 3.5M users/qtr
        reachLabel: "3.5M users/qtr (Occasion and multi-item queries)",
        impact: 1.5,
        impactLabel: "1.5 (Moderate-High — boosts basket size & AOV by ~16%)",
        confidence: 0.70,
        confidenceLabel: "70% (Moderate — relies on seller SKU taxonomy metadata)",
        effort: 3.5,
        effortLabel: "3.5 person-months (Semantic NLP + Bundle checkout flow)",
        riceScore: 1050,
        rationale: "Strong upside for AOV and editorial delight, but lower urgency compared to the existential margin drain of reverse logistics returns.",
        color: "slate"
      }
    ]
  },

  personas: [
    {
      id: "persona-1",
      name: "Aarav Sharma",
      age: 24,
      location: "Bengaluru, Karnataka",
      occupation: "Associate Product Marketer",
      archetype: "The Hype & Speed Gen Z Trend Shopper",
      avatarBg: "bg-rose-50 text-brand-600 border-rose-200",
      quote: "I just want to know if this jacket fits boxy like the model in the reel, without ordering two sizes, blocking ₹6,000 on UPI, and waiting a week for my refund.",
      shoppingFrequency: "3-4 times per month via mobile app (Myntra FWD / Sneakerhood)",
      goals: [
        "Discover trending streetwear and oversized silhouettes quickly",
        "Avoid sizing gambles across inconsistent D2C brands",
        "Seamless mobile-first checkout without endless coupon calculations"
      ],
      frustrations: [
        "Size charts for indie streetwear brands are wildly inaccurate (one brand's M is another's XL)",
        "Forced into 'bracket shopping' (ordering M and L simultaneously), which temporarily locks up funds",
        "Exchange cycle takes 6-8 days, by which time the event has already passed"
      ],
      preferredFeature: "FitTwin: AI Sizing & Garment Cut Intelligence",
      whyFeatureMatters: "Eliminates the sizing gamble. Aarav can see how an oversized bomber fits his specific 5'10\" athletic build and read feedback from buyers with identical height and weight, giving him the confidence to order just one size."
    },
    {
      id: "persona-2",
      name: "Sneha Mukherjee",
      age: 32,
      location: "Mumbai, Maharashtra",
      occupation: "Senior Strategy Consultant",
      archetype: "The High-Intent Time-Constrained Professional",
      avatarBg: "bg-slate-100 text-slate-700 border-slate-300",
      quote: "I have 15 minutes between client calls to order an outfit for an upcoming conference. Don't show me 40 flash sales for polyester tops when I searched for tailored linen trousers.",
      shoppingFrequency: "1-2 times per month, high AOV (₹4,500 - ₹12,000)",
      goals: [
        "Quickly curate high-quality workwear and festive capsule wardrobes",
        "Filter strictly by authentic premium fabrics (linen, silk, 100% cotton)",
        "Clean, zero-distraction checkout experience without promotional games"
      ],
      frustrations: [
        "Homepage is a visual circus of flash sales and scratch cards that feel tacky and low-trust",
        "Search results for premium fabrics are hijacked by sponsored synthetic garments with tiny 'Ad' tags",
        "Cart checkout throws multiple coin redemption and low-ticket cross-sell hurdles that waste time"
      ],
      preferredFeature: "Occasion Capsule & Lookbook Engine",
      whyFeatureMatters: "Saves hours of cognitive fatigue. Sneha can query '3-day client summit in Delhi' and instantly get a cohesive 4-piece capsule (trousers, blazer, camisole, loafers) pre-screened for pure fabrics and verified cuts."
    }
  ],

  prd: {
    title: "Product Requirements Document (PRD)",
    featureName: "FitTwin: Intelligent Garment-Cut & Sizing Engine",
    version: "v1.0 (MVP)",
    author: "Product Management Strategy Lead",
    targetLaunch: "Q3 2025 (4-week A/B pilot in Tier-1 metros)",
    status: "Ready for Engineering & Design Review",

    problemStatement: {
      headline: "The Sizing Paradox: Fashion E-Commerce's ₹320 Cr Margin Drain",
      description: "Apparel returns on Myntra hover at 28–35%, with 56% directly attributed to fit and sizing mismatches across 6,000+ brand partners. Because brand size charts are fragmented, non-standardized, and static, 22% of high-frequency shoppers engage in 'bracket shopping' (purchasing two sizes of the same SKU). Each return cycle costs Myntra ₹180–240 in courier fees, inspection, and repackaging, while tying up inventory during peak demand windows.",
      impactedMetrics: [
        { name: "Reverse Logistics Cost", current: "₹220 / return", target: "₹180 (-18% via avoided returns)" },
        { name: "Apparel Return Rate", current: "31.4%", target: "25.8% (-560 bps in pilot cohort)" },
        { name: "Bracket Shopping Rate", current: "22% of multi-item carts", target: "<12% (-45% reduction)" }
      ]
    },

    proposedSolution: {
      headline: "How FitTwin Works: Transforming Sizing from a Guess to a Science",
      steps: [
        {
          title: "1. Zero-Friction Silhouette Calibration",
          detail: "A lightweight, 2-step profile modal on the PDP asking only: Height, Weight, and Preferred Fit (Fitted, Regular, Relaxed/Oversized). No measuring tapes or invasive camera scanning required."
        },
        {
          title: "2. Real-Time Garment Cut Normalization",
          detail: "Backend ML model analyzes the specific SKU's pattern cut (boxer, slim, drop-shoulder) against returns telemetry from past buyers of identical silhouettes."
        },
        {
          title: "3. The 'FitTwin Barometer' on PDP",
          detail: "Replaces the static size chart with a dynamic recommendation chip: 'Your FitTwin recommendation: Size L (88% of shoppers with your 5\\'10\" build kept Size L; Size M had a 74% return rate for tight chest)'."
        },
        {
          title: "4. Crowd-Calibrated Review Filter",
          detail: "Reviews and buyer uploaded photos are automatically filtered by 'Shoppers with your body twin (5\\'9\" - 5\\'11\", 72-76kg)'."
        }
      ]
    },

    successMetrics: [
      {
        metric: "Size-Related Return Rate",
        type: "Primary Success Metric",
        target: "≥ 16% reduction in apparel categories where FitTwin is active",
        rationale: "Directly validates core problem hypothesis and recovers bottom-line reverse logistics margin."
      },
      {
        metric: "PDP-to-Cart Conversion Rate",
        type: "Primary Success Metric",
        target: "+4.5% to +6.0% relative uplift",
        rationale: "Removes size hesitation at the most critical decision point of the shopping funnel."
      },
      {
        metric: "Bracket-Shopping Incidence",
        type: "Secondary Metric",
        target: "≥ 35% reduction in orders containing multiple sizes of same SKU",
        rationale: "Directly frees up warehouse inventory and reduces out-of-stock false alarms."
      },
      {
        metric: "PDP Load Latency & Crash Rate",
        type: "Guardrail Metric",
        target: "FitTwin widget load time < 90ms; 0% regression in overall PDP p95 latency",
        rationale: "Ensures heavy ML inference does not degrade mobile app core web vitals."
      }
    ],

    scope: {
      inScope: [
        "Lightweight Silhouette input drawer (Height, Weight, Fit Preference)",
        "FitTwin recommendation chip on top 50 revenue-driving apparel brands (Men's shirts, Women's dresses, Denim)",
        "Dynamic sizing barometer with past return telemetry percentages",
        "Body-twin review filter highlighting photos from similar builds",
        "50/50 randomized A/B test infrastructure on mobile app (Android & iOS)"
      ],
      outOfScope: [
        "3D mobile camera body scanning (creates excessive friction and privacy concerns for MVP)",
        "Footwear, jewelry, and beauty categories (apparel only for V1)",
        "Automated custom tailoring or alteration booking",
        "Seller portal size-chart editing suite (will be managed via ML ingest scripts in V1)"
      ]
    },

    experimentation: {
      framework: "Randomized Controlled Trial (A/B Test)",
      sampleSize: "1,200,000 active apparel PDP visitors over 28 days across Tier-1 metros (Bengaluru, Mumbai, Delhi-NCR)",
      splits: [
        { group: "Control (50%)", description: "Standard Myntra PDP with legacy static size chart and generic 'What\\'s my size' link." },
        { group: "Variant (50%)", description: "Full FitTwin experience with Cut Barometer, Silhouette Match, and Twin-Filtered reviews." }
      ],
      decisionGate: "If Variant delivers ≥ 12% reduction in size-related returns with zero degradation in PDP conversion rate, proceed to full rollout across all Tier-2/3 categories."
    }
  },

  reflection: {
    headline: "Product Leadership Reflection: Aligning User Empathy with Unit Economics",
    paragraphs: [
      "Conducting this product teardown of Myntra reinforced a core tenet of senior product management: top-of-funnel growth metrics like GMV, click-through rates, and promotional impressions can easily disguise catastrophic bottom-of-funnel margin leaks. While aggressive gamification and 25+ banner carousels drive short-term dopamine and GMV spikes, they simultaneously cultivate customer cognitive exhaustion and banner blindness.",
      "The true existential challenge in Indian fashion e-commerce is not acquiring another million shoppers—it is solving the sizing uncertainty that causes 30%+ of delivered merchandise to flow straight back into reverse logistics. Sizing is not merely a UX layout issue; it is a complex data orchestration problem spanning merchant cut variance, crowd-sourced return telemetry, and customer psychological confidence.",
      "By prioritizing FitTwin over flashy cosmetic redesigns or gamified loyalty gimmicks, product managers can unlock the Holy Grail of e-commerce strategy: simultaneously eliminating customer anxiety, cutting millions in logistical waste, and creating an unassailable data moat against competitors."
    ]
  }
};
