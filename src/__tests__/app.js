import { visit } from "../lib/test-helpers"
import { screen, waitForElementToBeRemoved } from "@testing-library/react"
import makeServer from "../server"

let server

beforeEach(() => {
  server = makeServer("test")
})

afterEach(() => {
  server.shutdown()
})

test("it shows a message when there are no reminders", async () => {
    makeServer("test")
    visit("/")
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."))

    expect(screen.getByText("All done!")).toBeInTheDocument()
})

test("it shows a message when there are no reminders", async () => {
  const server = makeServer("test")

  visit("/")
  await waitForElementToBeRemoved(() => screen.getByText("Loading..."))

  expect(screen.getByText("All done!")).toBeInTheDocument()
  server.shutdown()
})

test("it shows existing reminders", async () => {
  const server = makeServer("test")
  server.create("reminder", { text: "Walk the dog" })
  server.create("reminder", { text: "Take out the trash" })
  server.create("reminder", { text: "Work out" })

  visit("/")
  await waitForElementToBeRemoved(() => screen.getByText("Loading..."))

  expect(screen.getByText("Walk the dog")).toBeInTheDocument()
  expect(screen.getByText("Take out the trash")).toBeInTheDocument()
  expect(screen.getByText("Work out")).toBeInTheDocument()
  server.shutdown()
})