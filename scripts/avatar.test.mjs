import assert from 'node:assert/strict'
import test from 'node:test'
import { avatarInitials, canShowAvatar } from '../lib/avatar.mjs'

test('initials use the author name without trailing emoji', () => {
  assert.equal(avatarInitials('ric de yuga 😄'), 'RY')
  assert.equal(avatarInitials('Eric deQuevedo'), 'ED')
  assert.equal(avatarInitials('  Élodie  García '), 'ÉG')
})

test('single names and missing names have safe fallbacks', () => {
  assert.equal(avatarInitials('Ric'), 'R')
  for (const value of ['', ' 😄 ', null, undefined]) assert.equal(avatarInitials(value), '?')
})

test('missing and failed sources use the fallback without retry loops', () => {
  assert.equal(canShowAvatar('', null), false)
  assert.equal(canShowAvatar('   ', null), false)
  assert.equal(canShowAvatar(undefined, null), false)
  assert.equal(canShowAvatar('/avatar.webp', '/avatar.webp'), false)
})

test('a new source can load after an earlier source fails', () => {
  assert.equal(canShowAvatar('/avatar.webp', null), true)
  assert.equal(canShowAvatar('/new-avatar.webp', '/avatar.webp'), true)
})
