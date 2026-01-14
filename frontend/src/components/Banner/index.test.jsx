import Banner from "."
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

describe("The Banner component", () => {
  const testtitle1 = "Hello "
  const testtitle2 = "world"
  const testpicture = "http://test.jpg"
  it("should display title and picture coming from props", () => {
    render(
      <Banner title1={testtitle1} title2={testtitle2} picture={testpicture} />
    )
    const picture = screen.getByRole("img")
    expect(screen.getByTestId("title")).toHaveTextContent("Hello world")
    expect(picture.src).toBe("http://test.jpg/")
  })

  it("should not display title2 if not given in props", () => {
    render(<Banner title1={testtitle1} picture={null} />)
    expect(screen.getByTestId("title")).not.toHaveTextContent("Hello world")
  })
})
