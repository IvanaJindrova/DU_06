const response = await fetch ("http://localhost:4000/api/misy")
const prevodNaJson = await response.json()
const cistaData = prevodNaJson.data
console.log(cistaData)

export const HomePage = () => {
    return (
      <>
          <div className="homepage">
          <h1 className="homepage-title">Krásné mísy od Ivanky</h1>
            <div className="products">
                {cistaData.map((item) => (
                    <div key={item.id} className="product">
                        <h2 className="product-title">Název: {item.nazev}</h2>
                        <img src={item.obrazek} alt={item.nazev} className="product-image" />
                        <h3 className="product-price">Cena: {item.cena} Kč</h3>
                        <a href={`/detail.html?id=${item.id}`}>
                            <button className="order-button">Detail produktu</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
      </>
      )
  }
