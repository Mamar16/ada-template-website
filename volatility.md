---
layout: default
---

# Volatility and Yield Analysis
* * *
This is the part where data is going to tell us whether, in the past years, investing in ethical ETFs could also lead to good financial results.

Before anything else, we first need to understand what kind of data we are working with and what its limitations are.

In this dataset, there are **61 different ETFs with an ESG label**. Each one has a different timeframe depending on how long data has been available (see the *Data* section for more details about each ETF).

We now face a major issue:  
to maximize the quality of our answer, we would like our analysis to include **as many ESG ETFs as possible** *and* to be performed over the **longest possible timeframe**.  
However, the longer the timeframe, the fewer ESG ETFs actually have data available over that window.

The following graph — the famous *“survivor function”* — shows how many ESG ETFs remain in the analysis depending on the length of the chosen timeframe.

---

<div style="display:flex; width:100%; gap:10px;">

  <img src="assets/img/Survivor.png" 
       alt="Survivor Function"
       style="width:67%; object-fit:cover;">

  <img src="assets/img/sad_bro.png" 
       alt="Sad Analyst Bro"
       style="width:33%; object-fit:cover;">
</div>

---

We can clearly see on this graph that there is a massive trade-off between the timeframe length and the number of ESG ETFs remaining in the dataset. Even for the smartest analyst bros and sisters, it is hard to justify the “perfect” number of days to choose for an optimal analysis.

The methodology we applied is the following:

1. We first perform the comparison on one “middle-ground” point  
   → **1300 days**, leaving **41 ESG ETFs** in the analysis.  
   This example helps us show how the ESG ETFs are compared to the market as a whole.

2. Then we repeat the exact same analysis across many different thresholds  
   → to check whether there is a common tendency toward higher or lower performance in terms of yields and volatility.

This way, instead of relying on a single arbitrary timeframe, we examine whether the results are **stable across multiple horizons**, making our conclusions far more robust.
