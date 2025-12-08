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
<a id="fig-vol-yield-with-outliers"></a>

**Figure 1 — Annualized Return and Volatility**

<img src="assets/img/Volandyieldwithoutilers.png" 
     alt="Volatility and Annualized Return without outliers"
     style="width:100%;max-width:1000px;display:block;margin:auto;">

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

These formulas make sense because our goal is to compare the **typical performance of an ESG ETF** with the **typical performance of an ETF in general**.  
In other words, we want to know: *“If I pick one ETF at random from each group, which group performs better on average?”*

To answer this, we simply compute the **average annualized return** and **average volatility** across all ETFs in each group:

- the mean annualized return  
- the mean volatility  

This reflects the performance of an “average ETF” in the group, not the performance of a hypothetical portfolio that invests equally in every ETF.
If we wanted to evaluate such a portfolio, we would need a different mathematical approach (averaging log returns, compounding the combined series, etc.).  
But since our objective is to compare **individual ETF performance**, the simple group mean is better suited.


<a id="table-esg-performance"></a>

**Table 1 — ESG vs Market Performance Summary**

| Group        | Avg Annualized Return (%) | Avg Daily Volatility | Excess anualized return vs Market (%) |
|--------------|----------------------------|------------------------|------------------------|
| **ESG ETFs**    | 9.45                       | 0.0091                 | 1.14                   |
| **Market ETFs** | 8.31                       | 0.0124                 | 0.00                   |

This seems promising for all the Sisters and Bros ethic lovers !

From the results shown in [Figure 1](#fig-vol-yield-no-outliers) and [Table 1](#table-esg-performance), ESG ETFs appear to outperform the overall market.  
They are **less volatile** (and therefore less risky) while also delivering an **average excess annualized return of +1.15%**.  
In practical terms: picking a random ESG ETF would, on average, yield **1.15% more per year** than picking a random ETF from the broader market over this timeframe.

But let’s not jump to conclusions too quickly!

In the version *with* outliers shown in [Figure 2](#fig-vol-yield-with-outliers), the number of analyzed ETFs is **much larger** on the market side than on the ESG side.  
As a result, the market group exhibits a **much wider spread** in both volatility and returns.  
At first glance, this might suggest that ESG ETFs are inherently more stable.  
However, our analyst sisters warned us: this effect may simply be the result of **sample size differences**.

Because the ESG dataset is much smaller, it is statistically easier for it to **avoid extreme values purely by chance**.  
Before claiming that ESG ETFs are structurally more stable, we first remove outliers from the market ETF group in terms of volatility and return.  
We then repeat the same analysis to compare ESG ETFs against a “normal”, non-outlier ETF in the broader market.

To do this, we filter out all market ETFs whose returns or volatilities lie more than **2 standard deviations** away from the mean.  
This corresponds approximately to keeping the central 95% of the data, which is a common threshold in statistical analysis.

Lets Now perform the same analysis related results:

<a id="fig-vol-yield-no-outliers"></a>

**Figure 2 — Annualized Return and Volatility (without outliers)**

<img src="assets/img/Volandyieldwitoutoutliers.png" 
     alt="Volatility and Annualized Return without outliers"
     style="width:100%;max-width:1000px;display:block;margin:auto;">

<a id="table-esg-performance-no-outliers"></a>

**Table 2 — ESG vs Market Performance Summary (after removing outliers)**

| Group        | Avg Annualized Return (%) | Avg Daily Volatility | Excess Annualized Return vs Market (%) |
|--------------|----------------------------|------------------------|------------------------------------------|
| **ESG ETFs**    | 9.450798                   | 0.009085               | -0.045235                                 |
| **Market ETFs** | 9.496033                   | 0.010751               | 0.000000                                  |

Sad news... even though the risk still seems much lower as the average volatility of an ESG ETF is still much lower than the average of the market, they now seem to have slightly lower performances on the anualized return with a negative performance of -0.45% against a "normal" ETF in the market. 

But BRO BRO BRO don't cry right now ! Remember this is just one point of analysis among many different time frames ! Read the next part before jumping once again to fast conclusions !
































