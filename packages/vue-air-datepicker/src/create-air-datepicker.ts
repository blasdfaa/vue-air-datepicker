interface PluginOptions {
  css?: boolean
}

export function createAirDatepicker(options: PluginOptions = {}) {
  const { css = true } = options

  if (css) {
    // @ts-expect-error FIXME: type it!
    import('air-datepicker/air-datepicker.css')
  }

  return {
    install() {},
  }
}
