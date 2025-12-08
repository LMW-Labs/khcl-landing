# Claude Code Prompt: Carrier Data Migration to Supabase

## Context
I have a carrier database export from a TMS (Transportation Management System) that needs to be migrated to Supabase. The data is in an Excel file with 509 carrier records.

## Task
Create a complete SQL script for the Supabase SQL Editor that:

1. **Creates the `carriers` table** with proper PostgreSQL data types
2. **Inserts all 509 records** from the Excel data
3. **Adds appropriate indexes** for common query patterns (MC number, state, status)
4. **Enables Row Level Security (RLS)** with a basic policy

## Table Schema Requirements

```sql
-- Use these column mappings:
-- carrier_name          TEXT NOT NULL
-- mc_number             INTEGER UNIQUE  -- Motor Carrier Number
-- status                TEXT DEFAULT 'Active'
-- is_flagged            BOOLEAN DEFAULT FALSE
-- contact_name          TEXT
-- phone                 TEXT
-- email                 TEXT
-- city                  TEXT
-- state                 CHAR(2)
-- fleet_power_units     INTEGER DEFAULT 0
-- date_entered          DATE
-- avg_rating            DECIMAL(3,2)  -- Rating 0.00 to 5.00
-- num_loads             INTEGER DEFAULT 0
-- last_load_date        DATE
-- carrier_lane_count    INTEGER
-- lane_run_count        INTEGER
-- lane_last_run_date    DATE
-- created_at            TIMESTAMPTZ DEFAULT NOW()
-- updated_at            TIMESTAMPTZ DEFAULT NOW()
```

## Source Data Structure

The Excel file (`CarrierSearchResultsExport.xlsx`) has these columns:

| Excel Column | Type | Sample Value |
|-------------|------|--------------|
| Carrier Name | text | "2020 HOT SHOT TRUCKING LLC" |
| Carrier Motor Carrier Number | integer | 1078974 |
| Carrier Status Description | text | "Active" |
| Carrier Flagged Ind | boolean | FALSE |
| Carrier Contact Name | text | "JOEL SMITH" |
| Carrier Phone | text | "(478) 550-4436" |
| Carrier Email | text | "JOEL.SMITH@2020HOTSHOTTRUCKING.COM" |
| Carrier City | text | "BYRON" |
| Carrier State | text | "GA" |
| Fleet Power Units | integer | 0 |
| Date Entered | date | 2022-02-14 |
| Avg Rating | decimal | 5.0 |
| Num Loads | integer | 2 |
| Last Load Date | date | 2022-02-17 |
| Carrier Lane Count | integer | NULL (often empty) |
| Load Stop Lane Run Count | integer | NULL (often empty) |
| Load Stop Lane Last Run Date | date | NULL (often empty) |

## Requirements

1. **Read the Excel file** from `/mnt/user-data/uploads/CarrierSearchResultsExport.xlsx`
2. **Generate a single SQL file** that can be pasted directly into Supabase SQL Editor
3. **Handle NULL values** properly (many lane-related fields are empty)
4. **Escape single quotes** in carrier names and contact names
5. **Format dates** as PostgreSQL DATE literals (YYYY-MM-DD)
6. **Use batch inserts** (groups of 50-100 rows per INSERT for performance)
7. **Include a trigger** for auto-updating `updated_at` timestamp

## Output

Save the complete SQL script to `/mnt/user-data/outputs/carriers_migration.sql`

The script should be structured as:

```sql
-- 1. Drop existing table if exists (optional, commented out for safety)
-- 2. Create table with all columns
-- 3. Create indexes
-- 4. Create updated_at trigger function
-- 5. Enable RLS with basic authenticated policy
-- 6. INSERT statements with all 509 records
-- 7. Verify row count
```

## Example INSERT format:

```sql
INSERT INTO carriers (carrier_name, mc_number, status, is_flagged, contact_name, phone, email, city, state, fleet_power_units, date_entered, avg_rating, num_loads, last_load_date, carrier_lane_count, lane_run_count, lane_last_run_date)
VALUES
  ('2020 HOT SHOT TRUCKING LLC', 1078974, 'Active', FALSE, 'JOEL SMITH', '(478) 550-4436', 'JOEL.SMITH@2020HOTSHOTTRUCKING.COM', 'BYRON', 'GA', 0, '2022-02-14', 5.00, 2, '2022-02-17', NULL, NULL, NULL),
  ('214 LOGISTICS LLC', 1273717, 'Active', FALSE, 'ANNA GASKINS', '(317) 847-2702', 'AGASKINS@HEARTLAND-FREIGHT.COM', 'PEARLAND', 'TX', 0, '2025-04-21', 0.00, 1, '2025-04-22', NULL, NULL, NULL);
```
