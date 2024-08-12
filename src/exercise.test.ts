import { createPresence } from "./exercise";

describe("createPresence", () => {
  test("returns default values", () => {
    const identity = createPresence();
    expect(identity.getName()).toBe("anonymous");
    expect(identity.getFollowers()).toBe(0);
    expect(identity.getPosts()).toBe(0);
  });
  test("applies values passed as arguments", () => {
    const identity = createPresence(10, 20, "Mikina");
    expect(identity.getName()).toBe("Mikina");
    expect(identity.getFollowers()).toBe(10);
    expect(identity.getPosts()).toBe(20);
  });
  test("allows updating of properties", () => {
    const identity = createPresence(10, 20, "Mikina");

    identity.setName("MiKiNA");
    identity.setFollowers(10000);
    identity.setPosts(96);

    expect(identity.getName()).toBe("MiKiNA");
    expect(identity.getFollowers()).toBe(10000);
    expect(identity.getPosts()).toBe(96);
  });
  test("creates independent identities", () => {
    const mikina = createPresence(10, 20, "Mikina");
    const yu_ki = createPresence(10, 20, "yu-ki");

    mikina.setName("MiKiNA");
    mikina.setFollowers(10000);
    mikina.setPosts(96);

    yu_ki.setName("YU-Ki");
    yu_ki.setFollowers(4000);
    yu_ki.setPosts(509);

    expect(mikina.getName()).toBe("MiKiNA");
    expect(mikina.getFollowers()).toBe(10000);
    expect(mikina.getPosts()).toBe(96);

    expect(yu_ki.getName()).toBe("YU-Ki");
    expect(yu_ki.getFollowers()).toBe(4000);
    expect(yu_ki.getPosts()).toBe(509);
  });
  test("returns description ", () => {
    const mikina = createPresence(10, 20, "Mikina");

    expect(mikina.getDescription()).toBe(
      "With 20 posts to 10 followers, Mikina has approximately 200 clout."
    );
  });
});
