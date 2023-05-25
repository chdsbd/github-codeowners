import path from "path";
import { OwnershipEngine } from "./OwnershipEngine";

test("github example CODEOWNERS file", () => {
  expect(
    OwnershipEngine.FromCodeownersFile(
      path.join(__dirname, "exampleCodeownersFile.txt")
    ).calcFileOwnership("example.go")?.owners ?? []
  ).toContain("docs@example.com");
});
