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

## 📊 How We Compare ESG ETFs With the Market

Now that we know which ETFs survive long enough to be analyzed, it’s time to measure their **financial performance** and finally compare ESG ETFs to the overall market.

In this part, performance of an ETF is defined by two things:

### **1️⃣ How much it grows** → its *annualized yield*  
### **2️⃣ How much it fluctuates** → its *volatility* (a proxy for risk)

Let’s see how we compute these two numbers.

---

## ⚡ Step 1 — Daily Log Returns (the building blocks)

Instead of simple returns, we use **log returns**:

$$
r_t = \ln\left(\frac{P_t}{P_{t-1}}\right)
$$

Why logs?  
Because they add up cleanly over time — perfect for compounding.

We then compute the **average daily log return**:

$$
\bar{r} = \frac{1}{N}\sum r_t
$$

This is the ETF’s “typical” daily growth rate.

---

## ⚡ Step 2 — Annualized Return (CAGR style)

Once we know the average daily log return, turning it into a yearly performance is simple:

$$
\text{Annualized Return} = e^{252 \cdot \bar{r}} - 1
$$

This tells us how much the ETF grows in one year *if its past behavior continued*.

---

## ⚡ Step 3 — Volatility (risk)

Risk is measured as the standard deviation of daily log returns:

$$
\sigma = \sqrt{\frac{1}{N-1} \sum (r_t - \bar{r})^2}
$$

Higher volatility = more uncertainty = more risk.

---

## 🎯 And that’s it.

With:

- **Annualized Return** → how much the ETF grows  
- **Volatility** → how risky it is  

we can finally compare ESG ETFs to the rest of the market and see who truly performs better.

Short, simple, and financially meaningful.
