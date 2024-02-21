import style from '../styles/TableRow.module.css'
import truncateEthAddress from 'truncate-eth-address'
import { useAppContext } from '../context/context'
const TableRow = ({ player }) => {
  const { ticketPrice } = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.address}>{truncateEthAddress(player)}</div>
      <div className={style.ethAmmount}>
        <span className={style.goldAccent}>+{ticketPrice} JOLT</span>
      </div>
    </div>
  )
}
export default TableRow
