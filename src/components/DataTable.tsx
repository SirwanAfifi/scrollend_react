import { forwardRef } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

interface Props<T> {
  headers: string[];
  data: T[];
}

export const DataTable = forwardRef<HTMLDivElement, Props<unknown>>(
  (props, ref) => {
    return (
      <TableContainer width={"50vw"} height="50vh" overflowY={"auto"} ref={ref}>
        <Table variant="simple">
          <Thead>
            <Tr>
              {props.headers.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {props.data.map((row, index) => (
              <Tr key={index}>
                {Object.values(row as ArrayLike<unknown>).map(
                  (value, vIndex) => (
                    <Td key={vIndex}>{value as string}</Td>
                  )
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
);
