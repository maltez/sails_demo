/**
 * UserInfo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'postgresqlServer',
  schema: true,
  attributes: {
    id:{
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    fullname: {
      type: 'string',
      required: true
    },
    age: {
      type: 'int',
      required: true
    },
    sex:{
      type: 'string',
      enum: ['male', 'female', 'N/A'],
      defaultsTo: 'N/A',
      required: true
    },
    comments:{
      type: 'text',
      required: false
    }
  }
};

