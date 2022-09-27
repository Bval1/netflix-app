import "./widgetLarge.css"

export default function WidgetLarge() {
  
  const Button = ({type}) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  }

  return (
    <div className="widgetLarge">
        <h3 className="widgetLargeTitle"> Latest Transactions</h3>
        <table className="widgetLargeTable">
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh">Customer</th>
            <th className="widgetLargeTh">Date</th>
            <th className="widgetLargeTh">Amount</th>
            <th className="widgetLargeTh">Status</th>
          </tr>
          <tr className="widgeLargeTr">
            <td className="widgetLargeUser">
              <img src="https://static.wikia.nocookie.net/villains/images/5/58/E0014c229a10ead58328aee08afb6ab3--supporting-actor-gangsters.jpg" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">Tommy DeVito</span>
            </td>
            <td className="widgetLargeDate">21 Sept 2022</td>
            <td className="widgetLargeAmount">$122.00</td>
            <td className="widgetLargeStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgeLargeTr">
            <td className="widgetLargeUser">
              <img src="https://static.wikia.nocookie.net/villains/images/5/58/E0014c229a10ead58328aee08afb6ab3--supporting-actor-gangsters.jpg" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">Tommy DeVito</span>
            </td>
            <td className="widgetLargeDate">21 Sept 2022</td>
            <td className="widgetLargeAmount">$122.00</td>
            <td className="widgetLargeStatus">
              <Button type="Declined" />
            </td>
          </tr>

          <tr className="widgeLargeTr">
            <td className="widgetLargeUser">
              <img src="https://static.wikia.nocookie.net/villains/images/5/58/E0014c229a10ead58328aee08afb6ab3--supporting-actor-gangsters.jpg" alt="" className="widgetLargeImg" />
              <span className="widgetLargeName">Tommy DeVito</span>
            </td>
            <td className="widgetLargeDate">21 Sept 2022</td>
            <td className="widgetLargeAmount">$122.00</td>
            <td className="widgetLargeStatus">
              <Button type="Pending" />
            </td>
          </tr>
        </table>
    </div>
  )
}

