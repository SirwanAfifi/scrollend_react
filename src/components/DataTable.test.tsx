import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { DataTable } from "./DataTable";

describe("App", () => {
  it("renders data table on screen", () => {
    render(<DataTable headers={[]} data={[]} />);
    screen.debug();
  });

  it("renders data table with two rows", () => {
    render(
      <DataTable
        headers={["Name", "Age", "Score"]}
        data={[
          { name: "Name 1", age: 1, score: 1 },
          { name: "Name 2", age: 2, score: 2 },
        ]}
      />
    );

    screen.debug();

    const rowsExceptHeader = screen.getAllByRole("row").slice(1);
    expect(rowsExceptHeader).toHaveLength(2);
  });

  it("renders data table with 50 rows", () => {
    render(
      <DataTable
        headers={["Name", "Age", "Score"]}
        data={Array.from({ length: 50 }, (_, i) => ({
          name: `Name ${i}`,
          age: Math.floor(Math.random() * 100),
          score: i * 10,
        }))}
      />
    );

    screen.debug();

    const rowsExceptHeader = screen.getAllByRole("row").slice(1);
    expect(rowsExceptHeader).toHaveLength(50);
  });
});
