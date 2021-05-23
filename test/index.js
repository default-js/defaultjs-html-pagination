import "@default-js/defaultjs-extdom";
import HTMLPaginationElement from "../src/HTMLPaginationElement";

describe("pagination test", () => {
	it("init tests", async () => {
        const element = document.createElement("d-pagination");
        document.body.append(element);
        await element.ready;
		expect(element.ready.resolved).toBe(true);
        element.remove();
	});
});