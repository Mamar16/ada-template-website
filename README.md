<img src="assets/img/intro_image.jpg" alt="intro_image" style="width:100%;max-width:1000px;display:block;margin:auto;">

# Introduction
* * *
Can **doing well** in finance also mean **doing good** for human kind? If you’ve asked yourself this question, you’re not alone, we have too! Sustainable investing has been gaining a lot of attention lately, and we wanted to see whether ethical investing can also stand up financially. To find out, we looked at data from ESG funds and traditional ETFs, comparing them across several financial metrics to explore how they behave differently.

## What are ESG funds?
* * *

ESG stands for **Environmental**, **Social**, and **Governance**, basically, the three pillars of responsible investing. An ESG ETF is a fund that includes companies that do well in these areas. For example, it might invest in companies that are eco-friendly, treat their employees and communities well, and have strong, transparent leadership. Think of ESG funds as a way to align your investments with your values. But a quick heads-up: the rules for what counts as “ESG” aren’t set in stone yet. Each fund issuer can have slightly different standards putting more importance into certain categories, so ESG funds can vary quite a bit.

# The Data
* * *

The data used in this investigation contains historical daily data on all the tickers that are currently trading on NASDAQ starting from different timepoints up to April 2020. The daily data contains **Opening**,**Closing**,**Highest** and **Lowest** prices as well as the total **volume** traded on that specific day. We also have access to metadata for each company where we find our ESG labels.


Below is a visualisation of the data for the Apple stock for different metrics. _(Even if doesnt look like it, the graphs are different, their low variability makes sense given the fact that they are measurements from the same days)_

* * *

<div id="aapl-widget" style="max-width:900px; margin: 1rem 0;">
	<label for="metricSelect">Metric:</label>
	<select id="metricSelect" style="margin-left:0.5rem;">
		<option value="High" selected>Highest price (High)</option>
		<option value="Low">Lowest price (Low)</option>
		<option value="Volume">Volume</option>
		<option value="Close">Closing price (Close)</option>
		<option value="Open">Opening price (Open)</option>
	</select>

	<div id="aaplError" style="color:#b00020; display:none; margin-top:0.5rem;"></div>

	<div id="aaplChartContainer" style="background:#fff; border:1px solid #e6e6e6; padding:1rem; margin-top:0.5rem;">
		<canvas id="aaplChart" width="800" height="300"></canvas>
	</div>

	<div id="aaplInfo" style="margin-top:0.5rem; font-size:0.9rem; color:#333;"></div>
</div>

<!-- Chart.js CDN - lightweight and easy to use -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<!-- Local JS that loads raw_data/stocks/AAPL.csv and renders the interactive chart -->
<script src="assets/js/stocks.js"></script>

<small>Usage: the widget reads <code>raw_data/stocks/AAPL.csv</code> relative to the site root. Select a metric from the dropdown to update the chart.</small>

## The ESG data

After selecting the etfs with the ESG labels the dataset is as follows:

| Number of etfs       | Labelled as ESG    | Percentage |
|:---------------------|:-------------------|:-----------|
|                 2166 |                 42 |        1.9 |

