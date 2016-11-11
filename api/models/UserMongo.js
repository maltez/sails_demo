/**
 * UserMongo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mongoServer',
  schema: true,
  attributes: {
    fullname: {
      type: 'string',
      required: true,
      maxLength: 12,
      minLength: 3
    },
    nickname: {
      type: 'string',
      required: true,
      minLength: 2
    },
    age:{
      type: 'int',
      required: true
    },
    description: {
      type: 'text',
      required: false
    }
  }
};
