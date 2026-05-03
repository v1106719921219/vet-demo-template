import PawPrint from './PawPrint'

export default function BusinessHours() {
  return (
    <section className="hours section" id="hours">
      <div className="wrap">
        <div className="section-title">
          <span className="en">Hours</span>
          <h2>診療時間</h2>
          <div className="deco"><PawPrint size={18} color="#F5A04A" /></div>
        </div>
        <div className="hours-card">
          <table className="hours-table">
            <thead>
              <tr>
                <th>診療時間</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th>
                <th className="sat">土</th><th className="sun">日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00〜12:00</td>
                <td>〇</td><td>〇</td><td className="off">&minus;</td><td>〇</td><td>〇</td>
                <td>〇</td><td>〇</td>
              </tr>
              <tr>
                <td>16:00〜19:00</td>
                <td>〇</td><td>〇</td><td className="off">&minus;</td><td>〇</td><td>〇</td>
                <td>〇</td><td className="off">&minus;</td>
              </tr>
            </tbody>
          </table>
          <div className="hours-note">
            <strong>休診日</strong>：水曜・日曜午後・祝日<br />
            ご予約は不要です。受付順にご案内いたします。
          </div>
          <div className="hours-first">
            <h4>&lt; 初めてご来院の方へ &gt;</h4>
            <p>
              問診票のご記入がございますので、午前は<strong>11:30</strong>まで、午後は<strong>18:30</strong>までに受付をお願いいたします。それ以降の場合は一度お電話くださいませ。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
