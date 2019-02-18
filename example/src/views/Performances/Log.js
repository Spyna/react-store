const log = (name, method, start, end, color) => {
  console.log(
    `%c ${name} - ${method} took ${end - start} millis.`,
    `background: ${color}; color: white`
  )
}

export default class Log {
  constructor(name = '') {
    this.name = name
    this.backgroundColor = name === 'Redux' ? '#764ABC' : '#61DAFB'
  }

  logRender(start, end) {
    log(this.name, 'Render', start, end, this.backgroundColor)
  }
  logAction(start, end) {
    log(this.name, 'Action', start, end, this.backgroundColor)
  }
}
