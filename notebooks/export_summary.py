"""Sitede kullanılan özet (aggregate) veriyi üretir: data/processed/summary.json
Kullanım: python notebooks/export_summary.py maaş_tahminleme.xlsx   (sayfa adı: dataset)"""
import sys, json, pandas as pd
src = sys.argv[1] if len(sys.argv) > 1 else 'maaş_tahminleme.xlsx'
df = pd.read_excel(src, sheet_name='dataset', engine='openpyxl')
df.columns = ['job','job_c','exp','edu','edu_c','skills','ind','ind_c','size','size_c','loc','loc_c','remote','remote_c','cert','salary','x']
df = df.dropna(subset=['salary','job','exp','loc','size','edu']).drop(columns='x')
TR = {'loc':{'USA':'ABD','Canada':'Kanada','UK':'Birleşik Krallık','Germany':'Almanya','Remote':'Uzaktan','Sweden':'İsveç','Australia':'Avustralya','Singapore':'Singapur','Netherlands':'Hollanda','India':'Hindistan'},
 'size':{'Enterprise':'Kurumsal','Large':'Büyük','Medium':'Orta','Small':'Küçük','Startup':'Startup'},
 'edu':{'PhD':'Doktora','Master':'Yüksek lisans','Bachelor':'Lisans','Diploma':'Önlisans','High School':'Lise'},
 'job':{'AI Engineer':'Yapay zekâ müh.','Machine Learning Engineer':'Makine öğr. müh.','Product Manager':'Ürün yöneticisi','Cloud Engineer':'Bulut müh.','DevOps Engineer':'DevOps müh.','Cybersecurity Analyst':'Siber güvenlik','Data Scientist':'Veri bilimci','Software Engineer':'Yazılım müh.','Backend Developer':'Backend','Frontend Developer':'Frontend','Business Analyst':'İş analisti','Data Analyst':'Veri analisti'},
 'ind':{'Education':'Eğitim','Media':'Medya','Telecom':'Telekom','Technology':'Teknoloji','Finance':'Finans','Healthcare':'Sağlık','Government':'Kamu','Manufacturing':'Üretim','Consulting':'Danışmanlık','Retail':'Perakende'}}
def means(c):
    g = (df.groupby(c).salary.mean()/1000).round(1).sort_values(ascending=False)
    return [[TR[c].get(k, k), float(v)] for k, v in g.items()]
tot = ((df.salary-df.salary.mean())**2).sum()
eta = lambda c: round(100*(df.groupby(c).salary.transform('mean')-df.salary.mean()).pow(2).sum()/tot, 1)
var = [['Lokasyon',eta('loc')],['Deneyim',round(100*df.exp.corr(df.salary)**2,1)],['Şirket ölçeği',eta('size')],['Unvan',eta('job')],['Eğitim',eta('edu')],['Uzaktan çalışma',eta('remote')],['Sektör',eta('ind')]]
out = {'rows':len(df),'loc':means('loc'),'size':means('size'),'edu':means('edu'),'job':means('job'),'ind':means('ind'),
 'variance':sorted(var,key=lambda x:-x[1]),
 'exp':[round(v/1000,1) for v in df.groupby('exp').salary.mean().sort_index()]}
json.dump(out, open('data/processed/summary.json','w',encoding='utf-8'), ensure_ascii=False, indent=1)
print(json.dumps(out, ensure_ascii=False)[:600])
