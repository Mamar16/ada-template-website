#!/usr/bin/env python3
"""
Convert stock CSV files to JSON format for web display
"""
import json
import pandas as pd
from pathlib import Path

# Paths
data_path = Path(__file__).parent / 'data' / 'stocks'
output_file = Path(__file__).parent / 'assets' / 'data' / 'stocks_data.json'

# Ensure output directory exists
output_file.parent.mkdir(parents=True, exist_ok=True)

# Load all CSV files
stock_data = {}
csv_files = sorted(data_path.glob('*.csv'))

print(f"Processing {len(csv_files)} stock files...")

for csv_file in csv_files:
    symbol = csv_file.stem  # filename without extension
    try:
        df = pd.read_csv(csv_file)
        
        # Ensure 'Date' column exists and is named properly
        if 'Date' in df.columns:
            date_col = 'Date'
        elif 'date' in df.columns:
            date_col = 'date'
        else:
            print(f"Warning: No date column found in {symbol}, skipping")
            continue
        
        # Convert to list of records for JSON
        records = []
        for _, row in df.iterrows():
            record = {
                'date': str(row[date_col]),
                'open': float(row['Open']) if 'Open' in df.columns else None,
                'close': float(row['Close']) if 'Close' in df.columns else None,
                'high': float(row['High']) if 'High' in df.columns else None,
                'low': float(row['Low']) if 'Low' in df.columns else None,
                'volume': int(row['Volume']) if 'Volume' in df.columns else 0,
            }
            records.append(record)
        
        stock_data[symbol] = records
        print(f"✓ Processed {symbol} ({len(records)} records)")
        
    except Exception as e:
        print(f"✗ Error processing {symbol}: {e}")

# Save to JSON
with open(output_file, 'w') as f:
    json.dump(stock_data, f, indent=2)

print(f"\n✓ Saved {len(stock_data)} stocks to {output_file}")
