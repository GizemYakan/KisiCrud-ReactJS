import React from 'react';

function KisiDuzenle(props) {
    const [ad, setAd] = React.useState(props.kisi.ad);
    const [soyad, setSoyad] = React.useState(props.kisi.soyad);
  
    const handleSubmit = function (e) {
      e.preventDefault();
      props.verilerDegisti(props.index, { ad: ad, soyad: soyad });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ad}
          placeholder="ad"
          onInput={(e) => setAd(e.target.value)}
          required
        />
        <input
          type="text"
          value={soyad}
          placeholder="soyad"
          onInput={(e) => setSoyad(e.target.value)}
          required
        />
        <button>Kaydet</button>
        <button type="button" onClick={(e)=>props.veriSilindi(props.index)}>Sil</button>
      </form>
    );
  }

  export default KisiDuzenle;