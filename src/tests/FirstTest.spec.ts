import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Bruno'
  user.email = 'brunoalcantarajc@gmail.com'

  expect(user.name).toEqual('Bruno')
  expect(user.email).toEqual('brunoalcantarajc@gmail.com')
})
