import { ref } from 'vue'
import { defineStore } from 'pinia'

export type CheckData = {
  id?: string | number
  accountHolderName: string
  accountHolderAddress: string
  accountHolderCity: string
  accountHolderState: string
  accountHolderZip: string
  checkNumber: string
  date: string
  bankName: string
  amount: string
  payTo: string
  memo: string
  signature: string
  routingNumber: string
  bankAccountNumber: string
  lineLength?: number
}

export const useAppStore = defineStore('useAppStore', () => {
  const check = ref<CheckData | null>(null)

  return { check }
})
