import { defineStorage } from "@aws-amplify/backend"

export const storage = defineStorage({
  name: 'store',
  access: allow => ({
    'public/*': [
      allow.guest.to(['list', 'write', 'get'])
    ]
  })
})