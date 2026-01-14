import Slideshow from "."
import { describe, it, expect } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

describe("The Slideshow component", () => {
  const pictures = ["url1", "url2", "url3"]
  it("picture index should increment clicking on right arrow icon", () => {
    render(<Slideshow pictures={pictures} />)
    const picture = screen.getByTestId("test-image")
    const rarrow = screen.getByTestId("test-rightarrow")
    expect(picture).toHaveAttribute("src", "url1")
    fireEvent.click(rarrow)
    expect(picture).toHaveAttribute("src", "url2")
    fireEvent.click(rarrow)
    fireEvent.click(rarrow)
    expect(picture).toHaveAttribute("src", "url1")
  })

  it("picture index should decrement clicking on left arrow icon", () => {
    render(<Slideshow pictures={pictures} />)
    const picture = screen.getByTestId("test-image")
    const larrow = screen.getByTestId("test-leftarrow")
    expect(picture).toHaveAttribute("src", "url1")
    fireEvent.click(larrow)
    expect(picture).toHaveAttribute("src", "url3")
    fireEvent.click(larrow)
    fireEvent.click(larrow)
    expect(picture).toHaveAttribute("src", "url1")
  })
})
