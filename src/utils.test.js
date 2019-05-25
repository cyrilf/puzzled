import { getCoords, swap } from './utils'

it('ensure coords are correctly computed', () => {
  expect(getCoords(0, 9)).toEqual({ row: 0, column: 0 })
  expect(getCoords(1, 9)).toEqual({ row: 0, column: 1 })
  expect(getCoords(2, 9)).toEqual({ row: 0, column: 2 })
  expect(getCoords(4, 9)).toEqual({ row: 1, column: 1 })
  expect(getCoords(8, 9)).toEqual({ row: 2, column: 2 })

  expect(getCoords(0, 16)).toEqual({ row: 0, column: 0 })
  expect(getCoords(4, 16)).toEqual({ row: 1, column: 0 })
  expect(getCoords(15, 16)).toEqual({ row: 3, column: 3 })
})

// TODO
// this test show us that `swap` should be refactored into a pure function
// add more tests to cover abusive usage like swapping indexes outside the array range, ...
it('ensure two array values are correctly swap', () => {
  const array = [0, 1, 2]
  swap(array, 0, 1)

  expect(array).toEqual([1, 0, 2])
})
