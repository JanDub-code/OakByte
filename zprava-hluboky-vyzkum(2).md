# RiftHunters revenue projection and competitive positioning review

## Project snapshot and decision context

The provided pitch describes entity["video_game","RiftHunters","steam pc co-op 2026"] as a 2–4 player co-op, procedural dungeon crawler targeting entity["company","Steam","pc game storefront"] on PC, built in entity["company","Unity","game engine company"], using peer-to-peer networking and proximity voice as a core mechanic. The roadmap targets a demo in March 2026, Early Access in June 2026, and full release in December 2026 (as written in the deck).

Two things matter for a publisher-facing “Revenue Projections” slide:

First, the deck’s current revenue math (Units × €7.49) matches a *gross consumer spend at full price* model. That number is useful as a top-line “what players paid” figure, but it is not what a developer (or publisher) typically receives. entity["company","Valve","pc game company"]’s own Steamworks finance documentation distinguishes **Gross Revenues** from **Net Revenue**, where Net is Gross minus “Applicable Adjustments” (notably taxes such as VAT/sales tax, plus returns/chargebacks), and then the revenue share is applied to Net to derive the payout to the partner. citeturn22search0turn22search1

Second, in the revenue band RiftHunters is targeting, Steam’s baseline revenue share tier is still the standard “70/30” until a title crosses very high lifetime thresholds; Valve announced reduced platform cuts only after $10M and $50M in Steam revenue per title. citeturn0search0turn22search6

Because your current slide mixes a *net units scenario* with a *gross top-line price*, most publishers will either (a) discount it mentally, or (b) ask you to restate it as “Gross bookings” vs “Net receipts”.

## Market and comparator evidence

RiftHunters is positioned in the current wave of “social co-op with clippable moments” while also claiming more mechanical depth (classes, dungeons, puzzles). That hybrid is plausible, but it changes which benchmarks matter.

On the **high-variance upside**, recent co-op hits demonstrate that low-friction group-buy games can scale extremely quickly:

- entity["video_game","Content Warning","Landfall co-op horror 2024"] was claimed by “over 6.2 million” owners during its 24-hour free launch window, and then crossed 1 million paid copies shortly after, per Landfall statements and coverage. citeturn21search11turn21search8  
- entity["video_game","Phasmophobia","Kinetic Games co-op horror 2020"] has publicly celebrated reaching 25 million copies sold (mid-2025). citeturn2search9turn2search8  
- entity["video_game","Deep Rock Galactic","Ghost Ship Games co-op fps 2020"] reported “10 million copies sold” (across platforms since 2018), in an official year-in-review post. citeturn21search1turn14view0  
- entity["video_game","R.E.P.O.","semiwork co-op horror 2025"] is explicitly described on its Steam page as an online co-op horror game with **proximity voice chat**, and it has user-defined tagging for **Procedural Generation**. citeturn9view0

On the **pricing strategy side**, Newzoo’s analysis of R.E.P.O. argues that “group-friendly pricing” (their example: $9.99) reduces friction for entire friend groups and can turn one interested player into multiple purchases—while also noting that the low price caps per-unit revenue. citeturn20view0

On the **base-rate reality** (and this is what publishers use to sanity-check optimistic unit scenarios), Steam is brutally saturated. Multiple 2025 retrospectives using estimates from analytics providers (not Valve) suggest a large share of Steam releases fail to make meaningful revenue, often not even reaching $1,000 in adjusted gross revenue (the threshold to recoup the Steam Direct fee). citeturn17search2turn17search3turn17search6  

This matters because a revenue projection with a 250k+ unit “realistic” scenario implicitly assumes RiftHunters will land in a relatively small success percentile.

image_group{"layout":"carousel","aspect_ratio":"1:1","query":["R.E.P.O. game key art","Lethal Company game key art","Content Warning game key art","Phasmophobia game key art","Deep Rock Galactic key art","Barotrauma key art"],"num_per_query":1}

## Re-estimating revenue projections for RiftHunters

### What your current table represents

Your current projection is internally consistent:

- 50,000 × €7.49 = €374,500  
- 250,000 × €7.49 = €1,872,500  
- 1,500,000 × €7.49 = €11,235,000  

But it should be labeled clearly as **Gross consumer spend at full price, before refunds/taxes/platform fees/discounts**, because Steamworks reporting explicitly warns that gross “ad-hoc” numbers do not include deductions like returns, chargebacks, and taxes; the monthly sales report nets those out, then applies revenue share. citeturn22search0turn22search23

### A publisher-credible “net receipts” model

A conservative “Steam payout per unit” estimate should include:

- **Taxes** (VAT/sales tax) – Steamworks explicitly says Gross Revenues include VAT/sales tax (where applicable), and taxes are part of Applicable Adjustments deducted before revenue share. citeturn22search1  
- **Refunds/returns** – A 2025 GameDiscoverCo survey of devs reported a median Steam unit refund rate of 9.5% (average 10.8%). citeturn8search4turn8search16  
- **Platform cut** – baseline 30% (developer receives 70%) until very high thresholds. citeturn0search0  

For a simple EU-typical VAT-inclusive price illustration (your €7.49), you can expect something close to **~50–55% of gross list price** to land as Steam payout after VAT + refunds + Steam’s 30% cut (before any publisher split, and before your corporate income taxes). This “getting to net” shape matches both Steamworks definitions and third-party finance breakdowns grounded in Steam portfolio data. citeturn22search1turn22search11turn0search0  

### Recomputed scenarios at €7.49

Below are two versions publishers commonly want: (a) “no-discount” and (b) “blended discount,” since co-op titles typically participate in events and promos after launch.

Assumptions used here (chosen because they’re sourceable and conservative rather than flattering):  
- Refund rate: **9.5%** (median) citeturn8search4  
- VAT illustrative case: **~20–21%** for VAT-inclusive territories (your €7.49 anchors EU pricing) citeturn22search1turn2search11  
- Steam revenue share: **70% to the partner** in your revenue band citeturn0search0  

**No-discount case (publisher sanity check)**  
- **≈ €3.9 per unit** Steam payout in VAT-inclusive territories (order-of-magnitude)  
- 50k units → **≈ €0.20M** payout  
- 250k units → **≈ €1.0M** payout  
- 1.5M units → **≈ €5.9M** payout  

**Blended 20% discount case (more lifetime-realistic)**  
Steam’s own discounting rules strongly shape cadence (30-day cooldowns, launch-discount constraints, etc.), and games regularly join seasonal/themed events over time. citeturn16view0  
With an effective average selling price 20% below list (≈ €5.99 in VAT-inclusive regions), the payout drops by roughly the same proportion:  
- **≈ €3.1 per unit** payout (VAT-inclusive illustration)  
- 50k units → **≈ €0.16M** payout  
- 250k units → **≈ €0.78M** payout  
- 1.5M units → **≈ €4.7M** payout  

### Break-even implications against your stated budget

Your deck states €43k invested to date and €200k needed for full release (implying ~€243k total). Using the payout ranges above:

- If RiftHunters averages ~€3.9 net payout per unit (no-discount, VAT-inclusive illustration), the project breaks even around **~62k units**.  
- If RiftHunters averages ~€3.1 net payout per unit (20% blended discount illustration), break-even rises to **~78k units**.

Publishers will usually accept this kind of break-even framing because it shows you understand “net receipts” mechanics on Steam. citeturn22search1turn0search0turn8search4

## Unit-sales plausibility and milestone gates

Your current unit scenarios (50k / 250k / 1.5M) are not impossible, but the middle and top case implicitly assume RiftHunters becomes meaningfully visible on Steam in a crowded year.

Two ways to ground those unit scenarios in reality—without needing proprietary data—are:

### Review-count implied scale

A common public benchmarking method is to approximate sales by review count. Gamalytic’s analysis suggests that games with **>90% positive** reviews have a median around **30 sales per review** (with large variance). citeturn23search0turn23search1  

If RiftHunters achieved >90% positive (a strong outcome for a multiplayer Early Access title), then:

- **50k units** implies roughly **~1.5k–2k reviews** at ~30 sales/review  
- **250k units** implies roughly **~8k+ reviews**  
- **1.5M units** implies roughly **~50k reviews**

That top case puts you in the territory of the largest co-op breakouts (not impossible, but clearly “hit game” territory).

### Steam market saturation checkpoints

Public reporting on Steam’s release volume and outcomes (using estimates) suggests that only a small fraction of releases reach very high review counts or revenue tiers. One 2025 retrospective notes that only a minority of releases cross even basic revenue thresholds, reflecting how hard it is to break out without strong positioning and visibility drivers. citeturn17search3turn23news39turn17search2  

For RiftHunters specifically, there’s also a timing constraint: your pitch shows the Steam page is “not started,” but the roadmap expects a demo in March 2026 and Early Access in June 2026. Steam’s own 2026 calendar shows major discovery moments tightly grouped in June 2026: **Steam Next Fest (June 15–22, 2026)** followed by **Steam Summer Sale (June 25–July 9, 2026)**. citeturn18search4turn18search21turn18search2  

A publisher will typically ask: “Do you have the store presence and wishlist base to capitalize on those?”

## Competitive positioning accuracy review

Your “Competitive Positioning” matrix is directionally coherent (you’re carving out “PvE extraction-like co-op + proximity voice + procedural dungeons + class roles + puzzles”), but several cells should be tightened so you don’t get challenged in a diligence call.

### Items that are well-supported

- **Procedural maps / generation** is a fair comparison axis in your table, and it is directly supported on multiple Steam pages via descriptions/tags:
  - entity["video_game","Lethal Company","Zeekerss co-op horror 2023"] is tagged “Procedural Generation” on Steam. citeturn12view0  
  - Content Warning is tagged “Procedural Generation” on Steam. citeturn11view0  
  - R.E.P.O. is tagged “Procedural Generation” on Steam. citeturn9view0  
  - Deep Rock Galactic’s Steam description explicitly says “procedurally-generated destructible environments.” citeturn14view0  
  - entity["video_game","Barotrauma","FakeFish submarine sim 2019"]’s Steam page explicitly says “Procedurally generated world and missions.” citeturn14view2  

- **Dark and Darker is PvPvE**, so marking it as not purely co-op PvE is reasonable if your row means “PvE-only co-op.” (But see below about clarifying the label.) citeturn4search33  

### Items likely to be challenged unless clarified

- **“Proximity Voice” for Dark and Darker**: third-party guides describe how proximity VOIP works in Dark and Darker (toggle proximity vs party, push-to-talk, etc.). If you keep “Proximity Voice” as a row, your matrix should not show Dark and Darker as ❌. citeturn21search5turn6search18  

- **“Proximity Voice” vs “In-game Voice”**: some games have voice, but not proximity/spatial/occlusion-based voice. Deep Rock Galactic has in-game voice chat documented by its community wiki, but it is not generally described as proximity-based; it’s closer to a lobby/team broadcast model. citeturn15search6  
  If RiftHunters’ true differentiator is “proximity + occlusion + gameplay use (puzzles, enemies reacting),” the row label should reflect that, otherwise competitors will look “equivalent” on paper when they are not.

- **Barotrauma and voice**: Barotrauma does have in-game VOIP functionality (including local vs radio modes) documented in its official wiki (headsets, voice radio channels). citeturn15search23turn3search11  
  Whether you consider that “proximity voice” depends on your definition, so the safest move is to rename the row to something like “Spatial/proximity voice as a mechanic” and then footnote RiftHunters’ added wrinkle (occlusion + puzzle hooks).

### Missing comparator that strengthens your story

You will likely be asked about dungeon-crawler peers with procedural levels and co-op. The most obvious omission is entity["video_game","Barony","turning wheel roguelike 2015"], which recently added an explicit in-world voice chat feature guide describing voice traveling “in-world” with characters and including a proximity mode. citeturn15search15turn3search29  

Including Barony in the matrix actually helps RiftHunters, because it lets you say: “We’re taking procedural co-op dungeon crawling (Barony/DRG lineage) and merging it with modern ‘friendslop’ virality (Lethal Company/REPO), plus a strict class uniqueness constraint and voice-driven puzzles.”

## Suggested edits to the deck’s financial and competitive slides

For a publisher-facing version, the fastest credibility upgrade is not changing your optimism—it’s labeling and structuring it the way Steam (and publishers) do.

For the **Revenue Projections** slide:

- Keep your current table, but title it **“Gross bookings (consumer spend) @ €7.49, before refunds/taxes/platform fees”** and add a second table below: **“Estimated net receipts (Steam payout) range”**, explicitly referencing that Steam pays on Net Revenues (Gross minus taxes/returns) times revenue share. citeturn22search0turn22search1  
- Add a one-line assumption note: “Refunds modeled at ~9.5% median (Steam dev survey); Steam revenue share 70/30 in this revenue band.” citeturn8search4turn0search0  
- Optional but powerful: include break-even unit range vs your stated budget (≈ 60–80k units depending on discounting), because it directly ties funding ask to commercial reality.

For the **Competitive Positioning** slide:

- Tighten row labels so you’re not vulnerable to “gotchas”:
  - Change “Co-op PvE” → “PvE-only (no PvP)” or “PvE focus (vs PvPvE)”
  - Change “Proximity Voice” → “Spatial/proximity voice used as gameplay (not just comms)”
- Correct Dark and Darker VOIP marking (it should be at least “partial/yes” if the row stays). citeturn21search5turn6search18  
- Add Barony as a comparator (it is structurally close to your core loop, and it now has a documented proximity voice mode). citeturn15search15turn3search29  
- Where you use “Emergent AI,” consider rewording to something verifiable like “AI reacts to noise/voice/light,” because “emergent” is subjective and invites argument. Newzoo explicitly links proximity chat and emergent gameplay to viral appeal in REPO-like titles, so you can anchor that framing. citeturn20view0