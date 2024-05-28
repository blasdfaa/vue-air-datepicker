import type { MaybeRefOrGetter } from '@vueuse/core'
import { tryOnMounted, tryOnUnmounted, unrefElement } from '@vueuse/core'
import type { AirDatepickerOptions } from 'air-datepicker'
import AirDatepicker from 'air-datepicker'

type UserDatepickerOptions = AirDatepickerOptions<HTMLElement>

export function useDatepicker(
  el: MaybeRefOrGetter<HTMLElement | null | undefined> | string,
  options: UserDatepickerOptions = {},
) {
  let datepicker: AirDatepicker<HTMLElement> | undefined

  function init() {
    if (datepicker?.isDestroyed)
      return

    const target = (typeof el === 'string' ? el : unrefElement(el))
    if (!target || datepicker !== undefined)
      return

    datepicker = new AirDatepicker(target, options)
  }

  function destroy() {
    datepicker?.destroy()
    datepicker = undefined
  }

  tryOnMounted(init)
  tryOnUnmounted(destroy)
}
