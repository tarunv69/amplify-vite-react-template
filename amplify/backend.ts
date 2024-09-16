import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource'
import { firstFunction } from './first-function/resource'

defineBackend({
  auth,
  data,
  storage,
  firstFunction
});
