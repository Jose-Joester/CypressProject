import { JsonPlaceholderApi } from "../../api/JsonPlaceholderApi";
import type { NewPost } from "../../types/api";

const api = new JsonPlaceholderApi();

describe("JSONPlaceholder API", () => {
  it("returns a post by ID with the expected response contract", () => {
    api.fetchPostById(1).then(({ status, body, headers }) => {
      expect(status).to.equal(200);
      expect(headers["content-type"]).to.include("application/json");
      expect(body).to.have.property("id", 1);
      expect(body.userId).to.be.a("number");
      expect(body.title).to.be.a("string");
      expect(body.title.length).to.be.greaterThan(0);
      expect(body.body).to.be.a("string");
      expect(body.body.length).to.be.greaterThan(0);
    });
  });

  it("accepts a new post and returns its representation", () => {
    const post: NewPost = {
      userId: 1,
      title: "Cypress API coverage",
      body: "Typed request and response contract test",
    };

    api.submitNewPost(post).then(({ status, body, headers }) => {
      expect(status).to.equal(201);
      expect(headers["content-type"]).to.include("application/json");
      expect(body).to.include(post);
      expect(body.id).to.be.a("number");
    });
  });
});
