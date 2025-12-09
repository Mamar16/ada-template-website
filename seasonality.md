---
layout: default
---

# Behaviour During the Year: Finding Seasonality in ESG and Non-ESG ETFs

Does an energy ETF perform better in winter? Does a travel and leisure ETF shine in summer? To answer questions like these, we’ll explore whether seasonality affects ETF performance—and whether those patterns repeat year after year. The goal is to move from what to invest in, to when to invest in what.

## A First Look

To get a high-altitude, eagle-eye view of ETF behaviour over time, we started by building a heatmap that shows the average price of each ETF for every month across all available years
.
<iframe src="https://pablovallbona.github.io/ada-template-website/assets/graphs/monthly_heatmap.html" width="100%" height="600px" style="border:none;"></iframe>

At first glance, this broad overview doesn’t give us much to work with no obvious seasonal pattern jumps off the screen. So, we decided to break the year into smaller segments to see whether seasonality becomes more visible when time is grouped more coarsely than by month.

<iframe src="https://pablovallbona.github.io/ada-template-website/assets/graphs/heatmap-split6.html" width="100%" height="600px" style="border:none;"></iframe>

Wow... still no dramatic revelation. If we squint (and maybe tilt our head a little), we might convince ourselves that performance is slightly higher in the second and sixth segments of the year. But making investment claims based on colour gradients and imagination wouldn't be very "data-scientist" of us. So instead, we’ll do this properly by running a t-test to check whether the average returns in these periods truly differ in a statistically significant way, rather than just appearing so visually.

## A Deeper Look

Ok, let's put our scientist lab coats on, (even if data scientists don't have lab coats). We will keep on looking at the whole ETF market for the time being. 

