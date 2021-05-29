import React from 'react'
import './App.css';
import YeniKisi from './YeniKisi'
import KisiDuzenle from './KisiDuzenle'

function App() {

  const [kisiler, setKisiler] = React.useState([
    { ad: "Ali", soyad: "Can" },
    { ad: "Ayşe", soyad: "Öz" }
  ]);

  const handleYeniKisi = function(kisi){
    setKisiler([...kisiler,kisi]);
  };

  const handleVeriDegisikligi = function (indeks, kisi) {
    const yeniKisiler = [...kisiler];
    yeniKisiler[indeks] = kisi;
    setKisiler(yeniKisiler);
  };

  const handleVeriSilinmesi = function(index){
    const yeniKisiler = [...kisiler];
    yeniKisiler.splice(index,1);
    setKisiler(yeniKisiler);
  };

  return (
    <div className="App">
           <h1>Kişiler</h1>

      <fieldset>
        <legend>Yeni Kişi</legend>
        <YeniKisi yeniKisiEklendi={handleYeniKisi} />
      </fieldset>

      <ul>
        {kisiler.map((kisi, indeks) => (
          <li key={indeks}>
            {kisi.ad} {kisi.soyad}
          </li>
        ))}
      </ul>

      <fieldset>
        <legend>Kişileri Düzenle</legend>
        {kisiler.map((x, i) => (
          <KisiDuzenle
            kisi={x}
            index={i}
            verilerDegisti={handleVeriDegisikligi}
            veriSilindi ={handleVeriSilinmesi}
          />
        ))}
      </fieldset>
    </div>
  );
}

export default App;
