interface TestFunction {
  (cb?: (error: Error | null, result: string | null) => void): void
}

const test: TestFunction = async function (cb) {
  {
    try {
      await new Promise((r) => setTimeout(r, 3000))
      cb?.(null, "Task completed successfully")
    } catch (error) {
      cb?.(error as Error, null)
    }
  }
}
