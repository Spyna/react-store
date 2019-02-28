import { createStore, withStore } from '.'

describe('Excports the functions', () => {
  beforeEach(() => {})
  it('should export the function creatStore', () => {
    expect(createStore).toBeDefined()
  })
  it('should export the function withStore', () => {
    expect(withStore).toBeDefined()
  })
})
