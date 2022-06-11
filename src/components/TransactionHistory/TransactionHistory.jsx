import PropTypes from 'prop-types';
import { Table, String, Head, HeadTable, Cell } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <HeadTable>Type</HeadTable>
          <HeadTable>Amount</HeadTable>
          <HeadTable>Currency</HeadTable>
        </tr>
      </Head>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <String key={id}>
              <Cell>{type}</Cell>
              <Cell>{amount}</Cell>
              <Cell>{currency}</Cell>
            </String>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;