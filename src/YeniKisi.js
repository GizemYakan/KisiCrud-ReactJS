import React from 'react'

function YeniKisi(props) {
    const [ad, setAd] = React.useState("");
    const [soyad, setSoyad] = React.useState("");
    const handleSubmit = function (e) {
      e.preventDefault();
      props.yeniKisiEklendi({ ad, soyad });
    };
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ad}
          onInput={(e) => setAd(e.target.value)}
          placeholder="ad"
          required
        />
        <input
          type="text"
          value={soyad}
          onInput={(e) => setSoyad(e.target.value)}
          placeholder="soyad"
          required
        />
        <button>Ekle</button>
      </form>
    );
  }
  
  export default YeniKisi; 