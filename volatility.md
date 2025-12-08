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

Part 1. We first perform the comparison on one “middle-ground” point  
   → **1300 days**, leaving **41 ESG ETFs** in the analysis.  
   This example helps us show how the ESG ETFs are compared to the market as a whole.

Part 2. Then we repeat the exact same analysis across many different thresholds  
    to check whether there is a common tendency toward higher or lower performance in terms of yields and volatility.

This way, instead of relying on a single arbitrary timeframe, we examine whether the results are **stable across multiple horizons**, making our conclusions far more robust.

#Part 1. Performance of ESG ETF vs the market on a middle-ground point:

Lets Dive now in the first poart of our analysis. We selected the middle-ground point in our analysis. For each ETF that has data available in this time frame we perform the folowing calculations :
- The log daily return :
  
$$
r_t = \ln\left(\frac{P_t}{P_{t-1}}\right)
$$

- The We then compute the **average daily log return** for each ETF:
  
$$
\bar{r} = \frac{1}{N} \sum_{t=1}^{N} r_t
$$

Once we know the average daily log return of an ETF, we turn it into an average yearly performance over this Timeframe :

$$
\text{Annualized Return} = e^{252 \cdot \bar{r}} - 1
$$

Log returns and annualized returns are commonly used in finance because they behave much better than simple returns.  
They naturally account for the negative impact of volatility on long-term growth (“volatility drag”) and combine additively over time, making them ideal for multi-period analysis.
For a rigorous explanation of why log returns are preferred in financial modeling, see:  
Hull, *Options, Futures, and Other Derivatives*, Chapter 15 (standard reference in quantitative finance).
If you prefer, I can also link a free online source (MIT, CFA, or an academic paper).

-The volatility of each ETF:

$$
\sigma = \sqrt{\frac{1}{N - 1} \sum_{t = 1}^{N} (r_t - \bar{r})^2}
$$

Volatility measures how much an ETF's returns fluctuate around their average value.  
Mathematically, it is the standard deviation of daily log returns. A higher volatility means the ETF experiences larger day-to-day movements, which corresponds to higher uncertainty and higher risk of rapid losses.


Let's now plot the results correspondingg to this Timeframe : 
<img src="assets/img/Volandyieldwithoutilers.png" alt="Volandyieldwithoutilers.png" style="width:100%;max-width:1000px;display:block;margin:auto;">

And let s compute aswell :

- The average anualized return of each Group :
  
$$
\overline{R}_{\mathrm{ann}} 
= \frac{1}{K} \sum_{i=1}^{K} R_{\mathrm{ann},i}
$$

- The average volatility of each group :

$$
\overline{\sigma} 
= \frac{1}{K} \sum_{i=1}^{K} \sigma_i
$$

