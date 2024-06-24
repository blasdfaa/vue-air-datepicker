import type { MaybeRefOrGetter } from '@vueuse/core'
import { tryOnMounted, tryOnUnmounted, unrefElement } from '@vueuse/core'
import type { AirDatepickerOptions } from 'air-datepicker'
import AirDatepicker from 'air-datepicker'
import { ref } from 'vue-demi'

type UserDatepickerOptions = AirDatepickerOptions<HTMLElement>

export function useDatepicker(
  el: MaybeRefOrGetter<HTMLElement | null | undefined> | string,
  options: UserDatepickerOptions = {},
) {
  const datepicker = ref<AirDatepicker<HTMLElement>>()

  function init() {
    if (datepicker.value?.isDestroyed)
      return

    const target = (typeof el === 'string' ? el : unrefElement(el))
    if (!target || datepicker.value !== undefined)
      return

    datepicker.value = new AirDatepicker(target, options)
  }

  function destroy() {
    datepicker.value?.destroy()
    datepicker.value = undefined
  }

  tryOnMounted(init)
  tryOnUnmounted(destroy)

  return datepicker
}
