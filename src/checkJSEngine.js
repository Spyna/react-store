export const isHermesEngine = () => {
  if (global === undefined) {
    var global = window
  }
  return global.HermesInternal != null
}
