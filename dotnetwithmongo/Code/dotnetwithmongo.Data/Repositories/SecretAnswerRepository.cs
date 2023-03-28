using dotnetwithmongo.Data.Interfaces;
using dotnetwithmongo.BusinessEntities.Entities;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Core.Bindings;
using System;
using System.Collections.Generic;
using System.Text;

namespace dotnetwithmongo.Data.Repositories
{
    public class SecretAnswerRepository : ISecretAnswerRepository
    {
        private readonly IGateway _gateway;
        private readonly string _collectionName = "SecretAnswer";

        public SecretAnswerRepository(IGateway gateway)
        {
            _gateway = gateway;
        }
        public IEnumerable<SecretAnswer> GetAll()
        {
            var result = _gateway.GetMongoDB().GetCollection<SecretAnswer>(_collectionName)
                            .Find(new BsonDocument())
                            .ToList();
            return result;
        }

        public SecretAnswer Get(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<SecretAnswer>(_collectionName)
                            .Find(x => x.Id == id).Single();
            return result;
        }

        public bool Save(SecretAnswer entity)
        {
            _gateway.GetMongoDB().GetCollection<SecretAnswer>(_collectionName)
                .InsertOne(entity);
            return true;
        }

        public SecretAnswer Update(string id, SecretAnswer entity)
        {
            var update = Builders<SecretAnswer>.Update
                .Set(e => e.QuestionId, entity.QuestionId )
                .Set(e => e.Answer, entity.Answer );

            var result = _gateway.GetMongoDB().GetCollection<SecretAnswer>(_collectionName)
                .FindOneAndUpdate(e => e.Id == id, update);
            return result;
        }

        public bool Delete(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<SecretAnswer>(_collectionName)
                         .FindOneAndDelete(e => e.Id == id);
            if(result==null) return false;             
            return true;
        }
    }
}
