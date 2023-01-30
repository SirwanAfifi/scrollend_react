import { useCallback, useEffect, useRef, useState } from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { DataTable } from "./components/DataTable";

const generateRandomRows = (offset: number = 200) =>
  Array.from({ length: offset }, (_, i) => ({
    name: `Name ${i}`,
    age: Math.floor(Math.random() * 100),
    score: i * 10,
  }));

const Users = generateRandomRows();

function App() {
  const [offset, setOffset] = useState(50);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.addEventListener("scrollend", handleScrollEnd);
    return () => {
      divRef.current?.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  const handleScrollEnd = useCallback((e: Event) => {
    setOffset((prev) => prev + 50);
  }, []);

  return (
    <ChakraProvider>
      <Heading p={4}>Count of rows: {Users.slice(0, offset).length}</Heading>
      <DataTable
        headers={["Name", "Age", "Score"]}
        data={Users.slice(0, offset)}
        ref={divRef}
      />
    </ChakraProvider>
  );
}

export default App;
