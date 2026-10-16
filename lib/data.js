// Tüm değerler notebooks/export_summary.py ile üretilen data/processed/summary.json dosyasından okunur (birim: bin).
import summary from '../data/processed/summary.json';
export const { loc, size, edu, job, ind, variance, exp } = summary;
export const fmt = (n) => n.toLocaleString('tr-TR', { maximumFractionDigits: 1 });
