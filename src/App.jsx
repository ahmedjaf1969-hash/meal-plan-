import { useState } from "react";

const stats = {
  calories: 1600,
  protein: 190,
  carbs: 120,
  fat: 55
};

const days = [
  {
    id: "mon",
    label: "MON",
    name: "Monday",
    accent: "#D4A853",
    meals: [
      {
        name: "Breakfast",
        time: "7:00 AM",
        emoji: "🍳",
        items: [
          "4 whole eggs, scrambled",
          "100g lean turkey slices, pan-fried",
          "1 large handful spinach, wilted in pan",
          "Black coffee or green tea"
        ],
        macros: { cal: 415, p: 54, c: 2, f: 19 },
        prep: "Pan-fry turkey slices 2 min each side in a dry pan. Remove. Scramble eggs in the same pan, add spinach in the last 30 seconds. Plate together. Total: 6 minutes."
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        emoji: "🥗",
        items: [
          "200g grilled chicken breast",
          "Large mixed salad (lettuce, cucumber, tomato, red onion)",
          "1 tbsp olive oil + lemon juice dressing",
          "½ avocado"
        ],
        macros: { cal: 430, p: 48, c: 8, f: 22 },
        prep: "Season chicken with salt, pepper, garlic powder. Grill or pan-fry 6–7 min each side. Slice over salad. Dress with olive oil and fresh lemon."
      },
      {
        name: "Snack",
        time: "3:30 PM",
        emoji: "🥚",
        items: [
          "3 hard-boiled eggs",
          "10 almonds"
        ],
        macros: { cal: 260, p: 21, c: 3, f: 18 },
        prep: "Boil eggs in batches Sunday night. Peel and refrigerate. Grab and go."
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        emoji: "🥩",
        items: [
          "200g beef sirloin steak",
          "200g roasted broccoli with garlic",
          "150g sweet potato, roasted",
          "Sparkling water with lemon"
        ],
        macros: { cal: 490, p: 48, c: 38, f: 14 },
        prep: "Rub steak with salt and pepper. Sear in cast iron 3–4 min each side for medium. Rest 5 min. Toss broccoli in olive oil spray, roast at 220°C for 20 min alongside sweet potato cubes."
      }
    ]
  },
  {
    id: "tue",
    label: "TUE",
    name: "Tuesday",
    accent: "#7EB8C4",
    meals: [
      {
        name: "Breakfast",
        time: "7:00 AM",
        emoji: "🥣",
        items: [
          "200g Greek yogurt (full fat)",
          "30g oats (dry weight), soaked overnight",
          "1 tbsp chia seeds",
          "100g blueberries"
        ],
        macros: { cal: 380, p: 24, c: 44, f: 10 },
        prep: "Night before: mix oats + chia seeds + yogurt in a jar. Add splash of water. Refrigerate. Morning: top with blueberries, eat cold."
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        emoji: "🍗",
        items: [
          "200g baked chicken breast with herbs",
          "150g roasted sweet potato",
          "Large portion green beans, steamed",
          "Lemon + garlic + rosemary seasoning"
        ],
        macros: { cal: 390, p: 48, c: 35, f: 5 },
        prep: "Season chicken with lemon zest, garlic, rosemary, salt and pepper. Bake at 200°C for 22–25 min until cooked through. Roast sweet potato cubes alongside. Steam green beans 4 min."
      },
      {
        name: "Snack",
        time: "3:30 PM",
        emoji: "🧀",
        items: [
          "200g cottage cheese",
          "1 medium apple, sliced"
        ],
        macros: { cal: 210, p: 24, c: 22, f: 4 },
        prep: "No prep. Season cottage cheese with black pepper and eat with apple slices."
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        emoji: "🍗",
        items: [
          "250g chicken thighs (skin removed), baked",
          "200g roasted courgette and red pepper",
          "Large rocket salad with lemon",
          "1 tbsp olive oil on vegetables"
        ],
        macros: { cal: 430, p: 52, c: 12, f: 18 },
        prep: "Marinate thighs in lemon, garlic, paprika, olive oil for 30 min (or overnight). Bake at 200°C for 30–35 min. Roast vegetables alongside."
      }
    ]
  },
  {
    id: "wed",
    label: "WED",
    name: "Wednesday",
    accent: "#A8C48A",
    meals: [
      {
        name: "Breakfast",
        time: "7:00 AM",
        emoji: "🍳",
        items: [
          "3 whole eggs + 3 egg whites omelette",
          "50g feta cheese, crumbled",
          "Handful cherry tomatoes, halved",
          "Fresh basil"
        ],
        macros: { cal: 360, p: 38, c: 5, f: 20 },
        prep: "Whisk eggs and whites together. Pour into non-stick pan on medium. When half set, add feta and tomatoes to one half. Fold over. Cook 1 min more."
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        emoji: "🥩",
        items: [
          "200g lean minced beef (5% fat), cooked",
          "200g roasted peppers and onions",
          "Large lettuce wrap or bowl",
          "Salsa (fresh tomato, onion, lime, coriander)"
        ],
        macros: { cal: 420, p: 46, c: 15, f: 16 },
        prep: "Brown mince with garlic, cumin, paprika, salt. Roast peppers and onions at 200°C for 20 min. Assemble in lettuce cups with fresh salsa."
      },
      {
        name: "Snack",
        time: "3:30 PM",
        emoji: "🥜",
        items: [
          "2 tbsp natural almond butter",
          "2 celery sticks",
          "1 medium pear"
        ],
        macros: { cal: 240, p: 7, c: 22, f: 14 },
        prep: "No prep. Dip celery in almond butter. Eat pear after."
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        emoji: "🥩",
        items: [
          "200g lean beef strips (rump or sirloin), pan-seared",
          "150g asparagus, grilled",
          "100g brown rice, cooked",
          "Garlic, fresh thyme, black pepper seasoning"
        ],
        macros: { cal: 500, p: 48, c: 38, f: 14 },
        prep: "Slice beef thin across the grain. Season with garlic powder, thyme, salt, pepper. Sear in very hot pan 2–3 min, tossing constantly — don't overcrowd. Grill asparagus with olive oil spray. Serve over rice."
      }
    ]
  },
  {
    id: "thu",
    label: "THU",
    name: "Thursday",
    accent: "#C47EB5",
    meals: [
      {
        name: "Breakfast",
        time: "7:00 AM",
        emoji: "🥚",
        items: [
          "4 boiled eggs",
          "1 large tomato, sliced",
          "½ avocado",
          "Black coffee"
        ],
        macros: { cal: 390, p: 28, c: 8, f: 28 },
        prep: "Boil eggs from Sunday batch. Slice tomato, season with salt and pepper. Slice avocado. Eat together. Total: 2 minutes."
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        emoji: "🍗",
        items: [
          "150g shredded cooked chicken breast",
          "200g chickpeas, drained and rinsed",
          "Cucumber, cherry tomatoes, red onion",
          "1 tbsp olive oil, red wine vinegar, oregano"
        ],
        macros: { cal: 420, p: 46, c: 32, f: 10 },
        prep: "Use leftover chicken from earlier in the week — shred with two forks. Mix with drained chickpeas, chopped veg. Dress with olive oil, vinegar, oregano, salt. Done in 3 minutes. Great to prep the night before."
      },
      {
        name: "Snack",
        time: "3:30 PM",
        emoji: "🍎",
        items: [
          "200g Greek yogurt",
          "1 medium apple"
        ],
        macros: { cal: 190, p: 18, c: 20, f: 4 },
        prep: "No prep. Eat together."
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        emoji: "🍗",
        items: [
          "250g chicken breast, sliced thin",
          "200g stir-fry vegetables (broccoli, snap peas, mushrooms, carrot)",
          "2 tbsp coconut aminos or low-sodium soy sauce",
          "1 tsp sesame oil, garlic, ginger"
        ],
        macros: { cal: 380, p: 56, c: 18, f: 8 },
        prep: "Slice chicken thin. Cook in hot wok or pan 4–5 min. Remove. Stir-fry veg 3 min. Add chicken back. Add coconut aminos, garlic, ginger, sesame oil. Toss 1 min."
      }
    ]
  },
  {
    id: "fri",
    label: "FRI",
    name: "Friday",
    accent: "#E07A5F",
    meals: [
      {
        name: "Breakfast",
        time: "7:00 AM",
        emoji: "🥣",
        items: [
          "40g oats cooked with water",
          "1 scoop whey protein stirred in (or 200g Greek yogurt on the side)",
          "1 banana, sliced",
          "1 tsp cinnamon"
        ],
        macros: { cal: 400, p: 32, c: 52, f: 6 },
        prep: "Cook oats with water 3 min. Remove from heat. Stir in protein powder (it clumps if you cook it). Top with banana and cinnamon."
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        emoji: "🥗",
        items: [
          "200g grilled turkey breast",
          "Large mixed salad",
          "100g roasted sweet potato cubes",
          "Tahini dressing (1 tbsp tahini, lemon, water, garlic)"
        ],
        macros: { cal: 430, p: 50, c: 28, f: 10 },
        prep: "Grill or pan-cook turkey breast 6 min each side. Slice. Roast sweet potato at 200°C for 25 min. Whisk tahini with lemon juice and water until pourable."
      },
      {
        name: "Snack",
        time: "3:30 PM",
        emoji: "🥚",
        items: [
          "3 hard-boiled eggs",
          "Small handful (15g) walnuts"
        ],
        macros: { cal: 270, p: 21, c: 2, f: 20 },
        prep: "From your Sunday boiled egg batch. Grab and go."
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        emoji: "🥩",
        items: [
          "200g lean pork tenderloin, sliced into medallions",
          "200g roasted Mediterranean vegetables (courgette, aubergine, tomato, pepper)",
          "Fresh herbs (parsley, basil)",
          "Garlic and olive oil drizzle"
        ],
        macros: { cal: 390, p: 46, c: 14, f: 14 },
        prep: "Slice pork tenderloin into 2cm medallions. Season with garlic, salt, pepper, paprika. Pan-fry in hot pan 3–4 min each side until cooked through. Roast veg at 200°C for 25–30 min. Serve with fresh herbs."
      }
    ]
  },
  {
    id: "sat",
    label: "SAT",
    name: "Saturday",
    accent: "#8B7EC8",
    meals: [
      {
        name: "Breakfast",
        time: "8:00 AM",
        emoji: "🍳",
        items: [
          "3 eggs + 2 egg whites, any style",
          "150g grilled turkey rashers or turkey slices",
          "½ avocado",
          "Sliced cucumber and tomato"
        ],
        macros: { cal: 445, p: 52, c: 6, f: 22 },
        prep: "Weekend breakfast — take your time. Grill or pan-fry turkey rashers until golden. Poach or fry eggs to your liking. Plate everything with avocado and fresh veg. This is your reward for the week."
      },
      {
        name: "Lunch",
        time: "1:00 PM",
        emoji: "🥩",
        items: [
          "200g lean beef mince, formed into 2 patties",
          "Large lettuce bun (no bread)",
          "Sliced tomato, red onion, gherkins",
          "Mustard (no sugar added)"
        ],
        macros: { cal: 380, p: 44, c: 6, f: 18 },
        prep: "Mix mince with salt, pepper, garlic powder. Form patties. Cook in hot pan 4 min each side for medium. Assemble in lettuce leaves with toppings."
      },
      {
        name: "Snack",
        time: "4:00 PM",
        emoji: "🍓",
        items: [
          "200g mixed berries (strawberries, raspberries, blueberries)",
          "150g Greek yogurt"
        ],
        macros: { cal: 190, p: 14, c: 24, f: 4 },
        prep: "No prep. Mix and eat."
      },
      {
        name: "Dinner",
        time: "7:30 PM",
        emoji: "🍗",
        items: [
          "250g chicken thigh, skin removed, sliced thin",
          "200g stir-fry vegetables (broccoli, snap peas, carrot, mushroom)",
          "100g brown rice",
          "Garlic, ginger, chilli, coconut aminos sauce"
        ],
        macros: { cal: 440, p: 50, c: 42, f: 10 },
        prep: "Slice chicken thin. Cook in very hot wok or pan 5–6 min. Remove. Stir-fry veg 3 min. Add chicken back, pour in coconut aminos, ginger, garlic, chilli. Toss 1 min on high heat. Serve over rice."
      }
    ]
  },
  {
    id: "sun",
    label: "SUN",
    name: "Sunday",
    accent: "#6BB89E",
    meals: [
      {
        name: "Breakfast",
        time: "8:00 AM",
        emoji: "🥚",
        items: [
          "4 egg omelette with mushrooms and spinach",
          "1 slice rye bread or sourdough",
          "Black coffee"
        ],
        macros: { cal: 380, p: 30, c: 22, f: 20 },
        prep: "Sauté mushrooms and spinach first, set aside. Make omelette, fill with veg, fold. Toast bread. Sunday is meal prep day — while eating, start boiling a batch of 8–10 eggs for the week."
      },
      {
        name: "Lunch",
        time: "12:30 PM",
        emoji: "🍗",
        items: [
          "200g roast chicken breast (or leftovers)",
          "200g roasted root vegetables (carrot, parsnip, beetroot)",
          "Large green salad",
          "Apple cider vinegar dressing"
        ],
        macros: { cal: 400, p: 44, c: 28, f: 8 },
        prep: "Roast a full tray of vegetables at 200°C for 35 min. Use some for lunch, keep some for Monday. Shred or slice cold chicken over salad."
      },
      {
        name: "Snack",
        time: "3:30 PM",
        emoji: "🥜",
        items: [
          "30g mixed nuts (almonds, cashews, walnuts)",
          "1 medium orange"
        ],
        macros: { cal: 240, p: 8, c: 18, f: 16 },
        prep: "No prep. Sunday snack while you do meal prep."
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        emoji: "🥩",
        items: [
          "200g lamb leg steak or lean lamb chops",
          "200g roasted courgette and aubergine",
          "Large green salad with mint",
          "Squeeze of lemon"
        ],
        macros: { cal: 440, p: 44, c: 10, f: 22 },
        prep: "Season lamb with rosemary, garlic, salt. Grill or pan-sear 4 min each side. Rest 5 min. Roast vegetables at 200°C for 20 min. Serve with fresh mint salad."
      }
    ]
  }
];

const weekTips = [
  { icon: "💧", tip: "3L water daily minimum. More on training days." },
  { icon: "⏰", tip: "Eat within 30–60 min of waking. Don't skip breakfast." },
  { icon: "🥚", tip: "Boil 8–10 eggs every Sunday night. They last all week." },
  { icon: "🧂", tip: "Season everything well — bland food kills adherence." },
  { icon: "📦", tip: "Prep your proteins in batches. Cook 3 days of chicken at once." },
  { icon: "🚫", tip: "No liquid calories except black coffee, tea, and water." },
  { icon: "💊", tip: "Take creatine 5g + omega-3 2g + vitamin D3 daily regardless of cut." },
  { icon: "🏋️", tip: "Keep training hard. Do not drop weights during a cut." }
];

export default function MealPlan() {
  const [activeDay, setActiveDay] = useState("mon");
  const [expandedMeal, setExpandedMeal] = useState(null);
  const [showTips, setShowTips] = useState(false);

  const current = days.find(d => d.id === activeDay);
  const totalCals = current.meals.reduce((s, m) => s + m.macros.cal, 0);
  const totalP = current.meals.reduce((s, m) => s + m.macros.p, 0);
  const totalC = current.meals.reduce((s, m) => s + m.macros.c, 0);
  const totalF = current.meals.reduce((s, m) => s + m.macros.f, 0);

  return (
    <div style={{ minHeight: "100vh", background: "#070709", color: "#E0D8D0", fontFamily: "Georgia, 'Palatino Linotype', serif" }}>

      {/* Header */}
      <div style={{ background: "#09090C", borderBottom: "1px solid #141418", padding: "24px 20px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: "8px", letterSpacing: "4px", color: "#3A3A44", marginBottom: "8px" }}>
              4-WEEK CUT PROTOCOL — NATURAL
            </div>
            <h1 style={{ fontSize: "clamp(18px, 4vw, 28px)", fontWeight: "300", margin: "0 0 2px", lineHeight: 1.2 }}>
              1,600 Cal Daily Plan
            </h1>
            <p style={{ fontFamily: "'Courier New', monospace", fontSize: "9px", color: "#555", margin: "0 0 14px" }}>
              186cm · 97kg · 18yrs · ~190g protein daily
            </p>
            {/* Macro targets */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { label: "CALS", val: "1,600", color: current.accent },
                { label: "PROTEIN", val: "190g", color: "#A8C48A" },
                { label: "CARBS", val: "120g", color: "#7EB8C4" },
                { label: "FAT", val: "55g", color: "#D4A853" }
              ].map(m => (
                <div key={m.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "13px", fontWeight: "400", color: m.color, fontFamily: "'Courier New', monospace" }}>{m.val}</div>
                  <div style={{ fontSize: "6px", color: "#333", letterSpacing: "1px", fontFamily: "'Courier New', monospace" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowTips(p => !p)}
            style={{ background: showTips ? "#1A1A22" : "none", border: `1px solid ${showTips ? current.accent : "#1E1E28"}`, color: showTips ? current.accent : "#444", borderRadius: "6px", padding: "8px 12px", fontFamily: "'Courier New', monospace", fontSize: "8px", letterSpacing: "2px", cursor: "pointer", transition: "all 0.2s", flexShrink: 0 }}
          >
            TIPS
          </button>
        </div>
      </div>

      {/* Tips panel */}
      {showTips && (
        <div style={{ background: "#0A0A0E", borderBottom: "1px solid #141418", padding: "16px 20px" }}>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: "8px", color: current.accent, letterSpacing: "3px", marginBottom: "12px" }}>WEEKLY RULES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {weekTips.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "14px", flexShrink: 0 }}>{t.icon}</span>
                <span style={{ fontSize: "12px", lineHeight: 1.6, color: "#7A7278" }}>{t.tip}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Day nav */}
      <div style={{ overflowX: "auto", scrollbarWidth: "none", borderBottom: "1px solid #111", background: "#08080B" }}>
        <div style={{ display: "flex", minWidth: "max-content" }}>
          {days.map(d => {
            const isActive = d.id === activeDay;
            return (
              <button key={d.id} onClick={() => { setActiveDay(d.id); setExpandedMeal(null); }}
                style={{ background: isActive ? "#0D0D11" : "transparent", border: "none", borderBottom: isActive ? `2px solid ${d.accent}` : "2px solid transparent", padding: "13px 16px 11px", cursor: "pointer", textAlign: "center", transition: "all 0.2s", minWidth: "64px" }}>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "8px", color: isActive ? d.accent : "#2A2A2A", letterSpacing: "1.5px", transition: "color 0.2s" }}>{d.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Day header + daily macros */}
      <div style={{ padding: "16px 20px 14px", borderBottom: `1px solid ${current.accent}12` }}>
        <div style={{ fontFamily: "'Courier New', monospace", fontSize: "9px", color: current.accent, letterSpacing: "2px", marginBottom: "4px" }}>{current.name.toUpperCase()}</div>
        <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
          {[
            { l: "CAL", v: totalCals, color: current.accent },
            { l: "PRO", v: totalP + "g", color: "#A8C48A" },
            { l: "CARB", v: totalC + "g", color: "#7EB8C4" },
            { l: "FAT", v: totalF + "g", color: "#D4A853" }
          ].map(m => (
            <div key={m.l} style={{ background: "#0D0D11", border: `1px solid ${m.color}20`, borderRadius: "5px", padding: "6px 10px", textAlign: "center", flex: 1 }}>
              <div style={{ fontSize: "14px", color: m.color, fontFamily: "'Courier New', monospace", fontWeight: "400" }}>{m.v}</div>
              <div style={{ fontSize: "6px", color: "#333", letterSpacing: "1px", fontFamily: "'Courier New', monospace", marginTop: "2px" }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Meals */}
      <div style={{ padding: "12px 16px 60px" }}>
        {current.meals.map((meal, i) => {
          const key = `${activeDay}-${i}`;
          const isOpen = expandedMeal === key;
          return (
            <div key={key} style={{ marginBottom: "10px" }}>
              <div style={{
                background: "#0B0B0F",
                border: `1px solid ${isOpen ? current.accent + "40" : "#141418"}`,
                borderRadius: "8px",
                overflow: "hidden",
                transition: "border-color 0.2s"
              }}>
                {/* Meal header */}
                <div onClick={() => setExpandedMeal(isOpen ? null : key)}
                  style={{ padding: "14px 16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ fontSize: "16px" }}>{meal.emoji}</span>
                      <span style={{ fontFamily: "'Courier New', monospace", fontSize: "9px", color: current.accent, letterSpacing: "2px" }}>{meal.name.toUpperCase()}</span>
                      <span style={{ fontFamily: "'Courier New', monospace", fontSize: "8px", color: "#2A2A2A" }}>{meal.time}</span>
                    </div>
                    {/* Food items */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      {meal.items.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                          <span style={{ color: current.accent, fontSize: "8px", marginTop: "4px", flexShrink: 0 }}>·</span>
                          <span style={{ fontSize: "12.5px", color: "#9A9298", lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", marginLeft: "12px", flexShrink: 0 }}>
                    <div style={{ fontSize: "16px", fontWeight: "300", color: current.accent, fontFamily: "'Courier New', monospace", lineHeight: 1 }}>{meal.macros.cal}</div>
                    <div style={{ fontSize: "7px", color: "#333", letterSpacing: "1px", fontFamily: "'Courier New', monospace" }}>KCAL</div>
                    <div style={{ marginTop: "6px", fontSize: "9px", color: "#A8C48A", fontFamily: "'Courier New', monospace" }}>{meal.macros.p}g P</div>
                    <span style={{ color: "#2A2A2A", fontSize: "9px", display: "block", marginTop: "6px", transform: isOpen ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>▶</span>
                  </div>
                </div>

                {/* Expanded prep instructions */}
                {isOpen && (
                  <div style={{ borderTop: `1px solid ${current.accent}12`, background: "#08080C", padding: "14px 18px" }}>
                    <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: current.accent, letterSpacing: "2px", marginBottom: "8px", opacity: 0.7 }}>HOW TO PREP</div>
                    <p style={{ margin: "0 0 12px", fontSize: "12px", lineHeight: "1.8", color: "#6A6468" }}>{meal.prep}</p>
                    {/* Full macros breakdown */}
                    <div style={{ display: "flex", gap: "8px" }}>
                      {[
                        { l: "CAL", v: meal.macros.cal, c: current.accent },
                        { l: "PROTEIN", v: meal.macros.p + "g", c: "#A8C48A" },
                        { l: "CARBS", v: meal.macros.c + "g", c: "#7EB8C4" },
                        { l: "FAT", v: meal.macros.f + "g", c: "#D4A853" }
                      ].map(m => (
                        <div key={m.l} style={{ flex: 1, background: "#0A0A0E", border: `1px solid ${m.c}15`, borderRadius: "4px", padding: "5px 6px", textAlign: "center" }}>
                          <div style={{ fontSize: "11px", color: m.c, fontFamily: "'Courier New', monospace" }}>{m.v}</div>
                          <div style={{ fontSize: "6px", color: "#2A2A2A", letterSpacing: "1px", fontFamily: "'Courier New', monospace", marginTop: "1px" }}>{m.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Daily total bar */}
        <div style={{ marginTop: "16px", background: "#0D0D11", border: `1px solid ${current.accent}25`, borderRadius: "8px", padding: "16px" }}>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: "8px", color: current.accent, letterSpacing: "3px", marginBottom: "12px" }}>DAILY TOTAL</div>
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { l: "CALORIES", v: totalCals, target: 1600, c: current.accent },
              { l: "PROTEIN", v: totalP + "g", target: null, c: "#A8C48A" },
              { l: "CARBS", v: totalC + "g", target: null, c: "#7EB8C4" },
              { l: "FAT", v: totalF + "g", target: null, c: "#D4A853" }
            ].map(m => (
              <div key={m.l} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: "15px", color: m.c, fontFamily: "'Courier New', monospace", fontWeight: "300" }}>{m.v}</div>
                <div style={{ fontSize: "6px", color: "#2A2A2A", letterSpacing: "1px", fontFamily: "'Courier New', monospace", marginTop: "2px" }}>{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Day nav arrows */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #111" }}>
          {(() => {
            const idx = days.findIndex(d => d.id === activeDay);
            const prev = days[idx - 1];
            const next = days[idx + 1];
            return (
              <>
                <button onClick={() => prev && setActiveDay(prev.id)}
                  style={{ background: prev ? "#0E0E12" : "transparent", border: `1px solid ${prev ? "#1A1A22" : "transparent"}`, color: prev ? "#555" : "#111", borderRadius: "6px", padding: "9px 14px", cursor: prev ? "pointer" : "default", fontFamily: "'Courier New', monospace", fontSize: "8px", letterSpacing: "2px" }}>
                  ← {prev ? prev.label : ""}
                </button>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: "#222", alignSelf: "center" }}>
                  {days.findIndex(d => d.id === activeDay) + 1} / 7
                </div>
                <button onClick={() => next && setActiveDay(next.id)}
                  style={{ background: next ? "#0E0E12" : "transparent", border: `1px solid ${next ? current.accent + "40" : "transparent"}`, color: next ? current.accent : "#111", borderRadius: "6px", padding: "9px 14px", cursor: next ? "pointer" : "default", fontFamily: "'Courier New', monospace", fontSize: "8px", letterSpacing: "2px" }}>
                  {next ? next.label : ""} →
                </button>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
