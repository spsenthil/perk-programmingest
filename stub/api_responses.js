/**
 * Simple function to create responses.
 */
var apiResponse   = (function() {
  'use strict';

  function create(data) {
    return {
      data: data,
      status: 'success',
      message: null
    };
  }

  function mockUser(
    id,
    firstName,
    lastName,
    email,
    isSuspended = false
  ) {
    return {
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      is_suspended: isSuspended
    }
  }

  return {
    create: create,
    mockUser: mockUser
  };
})();

var usersResponse   = apiResponse.create({
  users: [
    apiResponse.mockUser(
      '8B4FBA5D-7D8C-4574-923E-3702BF482AA2',
      'Foo',
      'Bar',
      'foobar@perk.com'
    ),
    apiResponse.mockUser(
      '1EBBD21B-8AB9-4BFC-A443-C35C7B9ABBA3',
      'John',
      'Appleseed',
      'john@perk.com'
    ),
    apiResponse.mockUser(
      'AC8C3C74-5FF8-4401-AEB3-5DF2B7BFB9F2',
      'Lorum',
      'Ipsum',
      'lorum@perk.com'
    ),
    apiResponse.mockUser(
      '9CF271EB-7277-4F7E-AD15-664904047456',
      'Test',
      'User',
      'test@perk.com',
      true
    )
  ]
});
