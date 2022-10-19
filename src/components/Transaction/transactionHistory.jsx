import { Table, Tbody, Td, Th, Thead, Tr } from "./transaction.style"

export const TransactionHistory = ({ items }) => {
   return <Table >
  <Thead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </Thead>

  <Tbody>
            {items.map(item => {
       return <Tr key={item.id}>
      <Td>{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </Tr>
    })}
    
  </Tbody>
</Table>
}