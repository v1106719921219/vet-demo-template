'use client'

const trustItems = [
  { k: 'i', t: '日祝も午前診療', s: 'OPEN · SUN & HOLIDAY' },
  { k: 'ii', t: '30年以上の実績', s: 'OVER 30 YEARS' },
  { k: 'iii', t: 'CT・MRI完備', s: 'ADVANCED IMAGING' },
  { k: 'iv', t: '駐車場完備', s: 'FREE PARKING' },
]

const TrustBar = () => {
  return (
    <section className="trust">
      <div className="wrap">
        <div className="trust-inner">
          {trustItems.map((item) => (
            <div className="trust-item" key={item.k}>
              <span className="trust-ico">{item.k}</span>
              <div>
                <h4>{item.t}</h4>
                <p>{item.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
