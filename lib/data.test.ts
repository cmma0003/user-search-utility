import { mockUsers } from "@/mocks/users";
import { fetchFilteredUsers } from "./data";

describe("Data fetching tests", () => {

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("returns all users when query is empty", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ( mockUsers ),
    });

    const result = await fetchFilteredUsers("");
    expect(result.length).toBe(3);

  });

  it("returns only the users that match the query", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ( mockUsers ),
    });

    const result = await fetchFilteredUsers("biz");
    expect(result.length).toBe(2);
  });

  it("returns empty list when json is empty", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ( [] ),
    });

    const result = await fetchFilteredUsers("");
    expect(result.length).toBe(0);
  });

  it("returns empty list when fetch fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ( [] ),
    });

    const result = await fetchFilteredUsers("");
    expect(result.length).toBe(0);
  });

  it("returns empty list when query match none", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ( [] ),
    });

    const result = await fetchFilteredUsers("111");
    expect(result.length).toBe(0);
  });

  it("returns empty list when exception happens", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error("Network error")
    );

    const result = await fetchFilteredUsers("111");
    expect(result.length).toBe(0);
  });
});