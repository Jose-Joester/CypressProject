import type { NewPost, Post } from "../types/api";

export class JsonPlaceholderApi {
  private getBaseUrl(): Cypress.Chainable<string> {
    return cy.env<{ apiBaseUrl: unknown }>(["apiBaseUrl"]).then(({ apiBaseUrl }) => {
      if (typeof apiBaseUrl !== "string" || apiBaseUrl.length === 0) {
        throw new Error("Cypress env `apiBaseUrl` must be a non-empty string.");
      }

      return apiBaseUrl.replace(/\/+$/, "");
    });
  }

  fetchPostById(postId: number): Cypress.Chainable<Cypress.Response<Post>> {
    return this.getBaseUrl().then((baseUrl) =>
      cy.request<Post>({
        method: "GET",
        url: `${baseUrl}/posts/${postId}`,
      }),
    );
  }

  submitNewPost(post: NewPost): Cypress.Chainable<Cypress.Response<Post>> {
    return this.getBaseUrl().then((baseUrl) =>
      cy.request<Post>({
        method: "POST",
        url: `${baseUrl}/posts`,
        body: post,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }),
    );
  }
}
