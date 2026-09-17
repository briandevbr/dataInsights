# 📊 data_insights

> 🌐 Leia em [Português](./README.md)

A training project for manipulating raw data in plain JavaScript, with no external libraries. The goal is to practice reading, parsing, and analyzing real-world data (CSV) from scratch, including automated tests with Vitest in the upcoming stages.

## 📑 Table of Contents

- [🗂️ Project Structure](#-project-structure)
- [⚙️ Technologies used](#-technologies-used)
- [🚀 How to run](#-how-to-run)
- [✨ Features](#-features)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🗂️ Project Structure

| Path | Description |
|---|---|
| `data/pib.csv` | Raw GDP per capita dataset by country (World Bank, indicator `NY.GDP.PCAP.CD`), in original CSV format, with no processing applied |
| `src/parser.js` | Reads the CSV and parses each line, correctly handling quoted fields that contain commas (e.g. `"Bahamas, The"`) |

## ⚙️ Technologies used

- JavaScript (Node.js) — no external libraries
- Vitest (planned for upcoming stages)

## 🚀 How to run

```bash
node src/parser.js
```

At this stage, the script reads the raw dataset and prints to the console the parsed result of each line (country) already converted into an array of clean fields, with quotes removed and internal commas correctly preserved.

## ✨ Features

- [x] Read the raw CSV and split it into lines
- [x] Parse each line while respecting quotes (avoiding breaking fields with internal commas)
- [ ] Convert each line into an object (key/value from the header)
- [ ] Apply filters and aggregations over the data (e.g. average GDP per country/year)
- [ ] Cover the logic with automated tests (Vitest)

## 🤝 Contributing

Personal training project — no external contribution process at the moment.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
